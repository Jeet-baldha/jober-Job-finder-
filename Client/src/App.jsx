import React, { useState } from 'react'
import FileUploadForm from './Components/FileUploadForm'
import JobList from './Components/JobList'
import Navbar from './Components/Navbar/Navbar'

function App() {

  const [jobList,setJobList] = useState([]);

  return (
    <>
      <Navbar />
    <div className='p-20'>
      <div className='w-full mb-10 flex justify-center bg-white shadow-lg p-10 rounded-md'>
      <FileUploadForm setJobList={setJobList} />
      </div>
      { jobList.length > 0 && <JobList jobList={jobList} />}
    </div>
    </>
  )
}

export default App