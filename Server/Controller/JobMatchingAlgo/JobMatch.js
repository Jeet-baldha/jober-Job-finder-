import mactchSkill from "./SkillMatch.js";

const matchJob = (resume, jobList) =>{

    let jobScores = [];

    jobList.map(job => (
        jobScores.push( mactchSkill(resume.skills,job))
    ))

    jobScores.sort((a, b) => b.score - a.score);


    // console.log(jobScores);

    let matchedJobs = [];
    jobScores.forEach(({ jobId, score }) => {
        const matchedJob = jobList.find(job => job.job_id === jobId);
        if (matchedJob) {
            matchedJobs.push(matchedJob); // Include score along with job details
        }
    });

    // console.log(matchedJobs);
    return matchedJobs;

}

export default matchJob;