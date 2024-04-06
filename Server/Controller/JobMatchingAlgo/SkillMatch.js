

const mactchSkill = (skills,job) => {


    let jobDescription = job.job_description;
    jobDescription = jobDescription.toLowerCase().split(/\W+/);
    let score = 0;

    if(skills.length > 0){
        score += skills.filter(skill => jobDescription.includes(skill.toLowerCase())).length;
        return ({jobId:job.job_id,score: score});

    }
    else{
        return ({jobId:0,score: 0});
    }

}

export default mactchSkill;