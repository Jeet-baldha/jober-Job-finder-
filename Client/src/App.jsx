import React from 'react'
import FileUploadForm from './Components/FileUploadForm'
import JobList from './Components/JobList'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <>
      <Navbar />
    <div className='p-20'>
      <div className='w-full mb-10 flex justify-center bg-white shadow-lg p-10 rounded-md'>
      <FileUploadForm />
      </div>
      <JobList />
    </div>
    </>
  )
}

export default App