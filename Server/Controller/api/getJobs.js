import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config();


const getJobs = async (role) => {


    const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: {
            query: `${role} in India`,
            page: '1',
            num_pages: '1'
        },
        headers: {
            'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
            'X-RapidAPI-Host': process.env.X_RAPIDAPI_HOST
        }
    };

    try {
        const response = await axios.request(options);
        return (response.data);
    } catch (error) {
        console.error(error);
        return error;
    }

}

export default getJobs;