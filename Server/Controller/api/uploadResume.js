import fs from 'fs';
import getPdfData from '../PDFConvert.js';
import Resume from '../../Model/resume.js';

const uploadResume = async (req, res) => {

    try {
        const file = req.file;
        const filePath = "E:\\Web Devlopment Udemy\\Project\\jober\\Server\\" + file.path;
        const data = new Uint8Array(fs.readFileSync(filePath));
        const result = JSON.parse(await getPdfData(data));
        const resume = new Resume(result);
        const response = await resume.save();
        res.status(200).send(response._id);
    } catch (error) {

        res.status(500).send({ "error": error.message });

    }
}

export default uploadResume;