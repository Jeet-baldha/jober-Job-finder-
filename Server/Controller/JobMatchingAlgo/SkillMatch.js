import { degrees } from "pdf-lib";
import findRequiredExperience from "./findRequiredExperience.js";


const mactchSkill = async (resume,job,totalMonthOfExperience) => {

    let skills = resume.skills;
    let experience = resume.experience;
    let jobDescription = job.job_description;
    let education = resume.education;
    let score = 0;
    let requriedExp = 0;

    try {
        requriedExp = Number( await findRequiredExperience(jobDescription));
    } catch (error) {
        console.log(error.message);
    }


    jobDescription = jobDescription.toLowerCase();
    const requiredExpMonth = requriedExp*12;


    if( requriedExp > 0){

        const diff = requiredExpMonth - totalMonthOfExperience;

        if( diff < 12){
            score += 5;
        }
        else if( diff >= 12 && diff <= 15){
            score += 4
        }
        else if( diff >= 15 && diff <= 18){
            score += 2;
        }
        else if( diff >= 18 && diff <= 21){
            score += 1;
        }
        else if( diff >= 21 && diff <= 24){
            score -= 3;
        }
        else if( diff >= 24 && diff <= 27){
            score -= 5;
        }
        else{
            return {jobId:job.job_id,score:0}
        }
        
    }
    else{
        score += 5;
    }

    console.log( "bedore " + score)

    if(skills.length > 0){
        const result = skills.filter(skill => jobDescription.includes(skill.toLowerCase()));  
        if(result.length <= 0){
            return {jobId:job.job_id,score:0}
        } 
        console.log(result);
        score += result.length;
    }
    else{
        score = 0;
    }

    if(job.job_required_education != null && job.job_required_education){

        if(job.job_required_education.bachelors_degree == true){

            const result = education.filter( edu => edu.degree.includes("bachelor"))

        }

    }

    console.log( "after " + score)
    console.log( "JobID " + job.job_id + "requred " + requiredExpMonth + " exp " + totalMonthOfExperience);

    return {jobId:job.job_id,score:score};

}

export default mactchSkill;