import * as pdfjsLib from 'pdfjs-dist';

import getJSONData from '../Controller/AIModel.js'; // Make sure the path is correct

const getPdfData = async (data) => {

    const loadingTask = pdfjsLib.getDocument(data);
    const pdf = await loadingTask.promise;

    const numPages = pdf.numPages;
    let text = '';

    for (let i = 1; i <= numPages; i++) {
        const page = await pdf.getPage(i);
        const pageText = await page.getTextContent();
        const pageStrings = pageText.items.map(item => item.str);
        text += pageStrings.join('\n') + '\n';
    }

    const results = await getJSONData(text);

    return results;
}


export default getPdfData;
