import mongoose, { model } from 'mongoose';


const resumeShcema = new mongoose.Schema({
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
})

const Resume = mongoose.model('resume',resumeShcema);

export default Resume;
