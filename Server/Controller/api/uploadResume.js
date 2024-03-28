import fs from 'fs';
import getPdfData from '../PDFConvert.js';
import Resume from '../../Model/resume.js';

const uploadResume = async (req,res) => {

    const file = req.file;
    const filePath = "E:\\Web Devlopment Udemy\\Project\\jober\\Server\\"+file.path;

    const result = JSON.parse(await getPdfData(filePath));
    const resume = new Resume(result);
    
    const response = await resume.save();
    console.log(response._id);

    res.status(200).send(response._id);


}

export default uploadResume;