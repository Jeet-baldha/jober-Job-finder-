import findRequiredExperience from "./findRequiredExperience.js";


const mactchSkill = async (resume,job,totalMonthOfExperience) => {

    let skills = resume.skills;
    let experience = resume.experience;
    let jobDescription = job.job_description;
    let score = 0;
    let requriedExp = 0;

    // console.log(skills);

    try {
        requriedExp = Number( await findRequiredExperience(jobDescription));
    } catch (error) {
        console.log(error.message);
    }
    jobDescription = jobDescription.toLowerCase();


    if(skills.length > 0){
        score += skills.filter(skill => jobDescription.includes(skill.toLowerCase())).length;   
    }
    else{
        score = 0;
    }

    console.log( "before " + score);
    const requiredExpMonth = requriedExp*12;

    if( requriedExp > 0){


        const diff = requiredExpMonth - totalMonthOfExperience;

        if( diff < 6){
            score += 5;
        }
        else if( diff >= 6 && diff <= 9){
            score += 4
        }
        else if( diff >= 9 && diff <= 12){
            score += 3;
        }
        else if( diff >= 12 && diff <= 16){
            score += 2;
        }
        else if( diff >= 16 && diff <= 18){
            score += 1;
        }
        else if( diff >= 18 && diff <= 24){
            score -= 1;
        }
        else if( diff >= 24 && diff <= 36){
            score -= 2;
        }
        else if( diff >= 36 && diff <= 42){
            score -= 3;
        }
        else if( diff >= 42 && diff <= 52){
            score -= 4;
        }
        else if( diff > 52){
            score -= 5;
        }
        

    }
    else if(totalMonthOfExperience > 0 && requriedExp <= 0){
        score += 5;
    }

    console.log("after " + score);
    console.log("Job ID: "+ job.job_id + "required: " + requiredExpMonth + " total: " + totalMonthOfExperience);

    console.log("------------------------------------")



    return {jobId:job.job_id,score:score};

}

export default mactchSkill;