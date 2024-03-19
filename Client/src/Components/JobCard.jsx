import React from 'react'
import { IoTime } from "react-icons/io5";

function JobCard() {
    return (
        <div className=' bg-zinc-100 p-5 rounded-lg shadow-lg duration-300  hover:bg-blend-lighten  w-72 hover:bg-primary hover:text-white hover:cursor-pointer group hover:shadow-primary hover:shadow-2xl'>
            <div className=' pb-5'>
                <div className=' flex justify-between'>
                    <h1 className=' text-xl font-bold'>UX Designer</h1>
                    <p className=' opacity-70 flex items-center'><IoTime className=' inline-block'/>16h</p>
                </div>
                <p>Rajkot, Gujrat</p>
            </div>
            <hr></hr>
            <div className=' py-5 ' >
                <p className=' text-lg text-justify'>Create intuitive, visually appealing interfaces for optimal user experience.</p>
                <div className=' flex rounded-lg mt-5 w-full bg-slate-200 items-center gap-10'>
                    <img src='https://pngimg.com/uploads/google/google_PNG19635.png' className=' w-14 aspect-square'></img>
                    <h1 className=' text-xl text-black font-semibold'> Google india</h1>
                </div>
            </div>
            <hr></hr>
            <button className=' w-full rounded-lg mt-5 bg-primary text-white text-2xl font-bold p-2 group-hover:bg-white group-hover:text-primary'>Apply Now</button>
        </div>
    )
}

export default JobCard