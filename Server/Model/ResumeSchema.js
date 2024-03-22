export default  resumeSchema = {
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
                'start_date': 'Date',
                'end_date': 'Date',
                'responsibilities': ['String']
            }
        ],
        'education': [
            {
                'degree': 'String',
                'school': 'String',
                'location': 'String',
                'start_date': 'Date',
                'end_date': 'Date',
                'cgpa_percentage': 'String'
            }
        ],
        'projects': [
            {
                'title': 'String',
                'description': 'String',
                'technologies_used': ['String'],
                'start_date': 'Date',
                'end_date': 'Date'
            }
        ],
        'skills': ['String'],
        'certifications': ['String']
    }
}
