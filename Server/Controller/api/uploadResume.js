import fs from 'fs';
import getPdfData from '../PDFConvert.js';
import Resume from '../../Model/resume.js';

const uploadResume = async (req,res) => {

    const file = req.file;
    const filePath = "E:\\Web Devlopment Udemy\\Project\\jober\\Server\\"+file.path;
    const data = new Uint8Array(fs.readFileSync(filePath));
    const result = JSON.parse(await getPdfData(data));
    const resume = new Resume(result);
    const response = await resume.save();
    res.status(200).send(result);
}

export default uploadResume;