/* eslint-disable react/prop-types */
import React from 'react'
import { IoTime } from "react-icons/io5";

function JobCard({job}) {

    function calculateHourDifference(timestamp) {
        // Convert the given timestamp to a Date object
        const givenTime = new Date(timestamp);
    
        // Get the current time
        const currentTime = new Date();
    
        // Calculate the difference in milliseconds
        const differenceInMilliseconds = currentTime - givenTime;
    
        // Convert milliseconds to hours
        const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);
    
        if(differenceInHours > 23){
            return Math.floor(differenceInHours/24) + 'd';
        }else{
            return Math.floor(differenceInHours) + "h";
        }
    }


    return (
        <div className=' bg-zinc-100 p-5 rounded-lg shadow-lg duration-300  hover:bg-blend-lighten  w-72 hover:bg-primary hover:text-white hover:cursor-pointer group hover:shadow-primary hover:shadow-2xl'>
            <a href={job.job_apply_link} target='_blank'>
                <div className=' pb-5'>
                    <div className=' flex justify-between'>
                        <h1 className=' text-lg font-bold'>{job.job_title}</h1>
                        <p className=' opacity-70 flex items-center'><IoTime className=' inline-block'/>{calculateHourDifference(job.job_posted_at_datetime_utc)}</p>
                    </div>
                    <p>{job.job_is_remote ? "Remote" :job.job_city}</p>
                </div>
                <hr></hr>
                <div className=' py-5 ' >
                    <p className=' text-lg text-justify'>Create intuitive, visually appealing interfaces for optimal user experience.</p>
                    <div className=' flex rounded-lg mt-5 w-full bg-slate-200 items-center gap-10'>
                        {job.employer_logo ? <img src={job.employer_logo} className=' w-14 aspect-auto'></img> : <img src='https://qplexus.com/wp-content/uploads/2016/02/default-logo.png' className=' w-14 aspect-square'></img>}
                        <h1 className=' text-lg text-black font-semibold'> {job.employer_name}</h1>
                    </div>
                </div>
                <hr></hr>
                <button className=' w-full rounded-lg mt-5 bg-primary text-white text-2xl font-bold p-2 group-hover:bg-white group-hover:text-primary'>Apply Now</button>
            </a>
        </div>
    )
}

export default JobCard