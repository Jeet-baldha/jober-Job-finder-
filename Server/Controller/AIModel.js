import dotenv from 'dotenv'
dotenv.config();
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLEGENERAtTIVEAI_API_KEY);

const resumeSchema = JSON.stringify({
    'resume': {
        'personal_info': {
            'name': 'String',
            'email': 'String',
            'phone': 'String',
            'linkedin': 'String',
            'career_objective': 'String'
        },
        'experience': [
            {
                'title': 'String',
                'company': 'String',
                'location': 'String',
                'start_date': 'String',
                'end_date': 'String',
                'responsibilities': ['String']
            }
        ],
        'education': [
            {
                'degree': 'String',
                'school': 'String',
                'location': 'String',
                'start_date': 'String',
                'end_date': 'String',
                'cgpa_percentage': 'String'
            }
        ],
        'projects': [
            {
                'title': 'String',
                'description': 'String',
                'technologies_used': ['String'],
                'start_date': 'String',
                'end_date': 'String'
            }
        ],
        'skills': ['String'],
        'certifications': ['String']
    }
});

const getJSONData = async (text) => {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = "Extract name, contact details, education, projects, only specific skills without specify lunguage all of that, and experience from the provided text. Return the data in JSON as a string. If a string contains any date data, convert it into DD-MM-YYYY format. If conversion is not possible, leave it as null. Here is your JSON format:" + resumeSchema + " without enclosing backticks. If there are bullet points, convert them into single-line strings. and all character are in lowercase" + text;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text1 = response.text();
    return text1;
}

export default getJSONData;
