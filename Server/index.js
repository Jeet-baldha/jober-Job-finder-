import express from 'express'
import getPdfData from './Controller/PDFConvert.js'
import fs from 'fs';
import multer from 'multer';
import uploadResume from './Controller/api/uploadResume.js';
import cors from 'cors'
import mongoose from 'mongoose';
import getJobs from './Controller/api/getJobs.js';
import Resume from './Model/resume.js';
import matchJob from './Controller/JobMatchingAlgo/JobMatch.js';
const app = express();
app.use(cors());
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/jober');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/') // Destination folder for storing files
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // File name will be current timestamp + original file name
    }
});
const upload = multer({ storage: storage });

app.get('/',  async (req, res) => {

    const filePath = "E:/Web Devlopment Udemy/Project/jober/pdfs/entry-level-software-engineer-resume-example.pdf";
const data = new Uint8Array(fs.readFileSync(filePath));

    const result = await getPdfData(data);
    res.send(JSON.parse(result));
})


app.post('/upload/resume', upload.single('file'),uploadResume);

app.get('/job',async (req, res) => {

    const role = req.query.role;
    const resumeID = req.headers.resumeid;
    console.log(resumeID);
    const decodedString = role.replace(/%20/g, ' ');
    const resume = await Resume.findById(resumeID);

    const JobList = await getJobs(decodedString);
    // console.log(JobList.data);

    const matchedJobList = await matchJob(resume.resume,JobList.data);

    res.send(matchedJobList);
})

app.listen(PORT, (req, res) => {
    console.log('listening on port ' + PORT);
})
