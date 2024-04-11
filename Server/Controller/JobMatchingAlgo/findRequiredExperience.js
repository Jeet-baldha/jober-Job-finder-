import dotenv from 'dotenv'
dotenv.config();
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLEGENERAtTIVEAI_API_KEY);

const findRequiredExperience =async (jobDescription) => {

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = "Extract the minimum  from the job description. Return  only one number  minimum expreince If not specified or unrecognized, return 0.  job description :" + jobDescription;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text1 = response.text();
    return text1;

}

export default findRequiredExperience;