import React from 'react'
import JobCard from './JobCard'

function JobList() {
    return (
        <div className=' bg-white shadow-lg p-10 w-full rounded-md'>
            <div>
                <h1 className=' text-xl font-semibold p-3'>28 jobs found</h1>
            </div>
            <hr></hr>
            <div className=' py-5 grid grid-cols-4 w-full justify-items-stretch'>
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
            </div>
        </div>
    )
}

export default JobList