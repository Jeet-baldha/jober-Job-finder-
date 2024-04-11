/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import JobCard from './JobCard'
import Loader from './loader/Loader';
import axios from 'axios';
import { useSelector } from 'react-redux';

function JobList({jobList,setJobList}) {

    const [page,setPage]  = useState(2);
    const [isLoading,setIsLoading] = useState(false);

    const profile = useSelector(state => state.user.userProfile);
    
    useEffect(() => {
        console.log(jobList);
    },[])

    const addJobs = async () => {
        if(profile === "" || profile === " "){
            alert("Please Select Role");

        }else{

            setIsLoading(true);
            try {
                const encodedString = profile.replace(/ /g, '%20');
                console.log(localStorage.getItem('ResumeId'))
                const response = await axios.get(`http://localhost:3000/job?role=${encodedString}`,{headers:{'resumeid':localStorage.getItem('ResumeId'),'page':page}});

                if(response.status === 200){
                    setJobList(prev => prev.concat(response.data));
                    console.log(jobList);
                    setPage(page+1);
                    console.log(response.data);
                }
                else{
                    console.log(response.data);
                }

                setIsLoading(false);

            } catch (error) {
                console.log(error);
            }
            

        }
    }

    return (
        <div className=' bg-white shadow-lg p-10 w-full rounded-md'>
        {isLoading && <Loader />}
            <div>
                <h1 className=' text-xl font-semibold p-3'>{jobList.length} jobs</h1>
            </div>
            <hr></hr>
            <div className=' py-5 grid grid-cols-4 gap-y-5 w-full justify-items-stretch'>
                {jobList.map( (job) => <JobCard key={job.job_id} job={job} />)}
            </div>

            <button className=' w-full p-2 rounded-md bg-primary text-xl font-bold text-white shadow-xl' onClick={addJobs} >Load More</button>
        </div>
    )
}

export default JobList