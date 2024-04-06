import React from 'react'
import JobCard from './JobCard'

function JobList({jobList}) {
    return (
        <div className=' bg-white shadow-lg p-10 w-full rounded-md'>
            <div>
                <h1 className=' text-xl font-semibold p-3'>{jobList.length} jobs</h1>
            </div>
            <hr></hr>
            <div className=' py-5 grid grid-cols-4 gap-y-5 w-full justify-items-stretch'>
                {jobList.map( (job) => <JobCard key={job.job_id} job={job} />)}
            </div>
        </div>
    )
}

export default JobList