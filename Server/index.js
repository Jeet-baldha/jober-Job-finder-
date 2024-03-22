import express from 'express'
import getPdfData from './Controller/PDFConvert.js'
import fs from 'fs';
const app = express();
const PORT = 3000;



app.get('/', async (req, res) => {

    const filePath = "E:/Web Devlopment Udemy/Project/jober/pdfs/entry-level-software-engineer-resume-example.pdf";
const data = new Uint8Array(fs.readFileSync(filePath));

    const result = await getPdfData(data);
    res.send(JSON.parse(result));
})


app.listen(PORT, (req, res) => {
    console.log('listening on port ' + PORT);
})
