import mactchSkill from "./SkillMatch.js";
import findExperience from "./findExpreince.js";

const matchJob =async (resume, jobList) =>{
    
    // let jobScores = [];
    const totalMonthOfExperience = findExperience(resume.experience);

    const jobScores = await Promise.all(jobList.map(async (job) => {
        const res = await mactchSkill(resume, job, totalMonthOfExperience);
        return res;
    }));
    

    jobScores.sort((a, b) => b.score - a.score);


    console.log(jobScores);

    let matchedJobs = [];
    jobScores.forEach(({ jobId, score }) => {
        const matchedJob = jobList.find(job => job.job_id === jobId);
        if (matchedJob && score >= 3 ) {
            matchedJobs.push(matchedJob); // Include score along with job details
        }
    });

    
    // console.log(matchedJobs);
    return matchedJobs;

}

export default matchJob; 