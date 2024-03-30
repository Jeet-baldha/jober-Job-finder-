import React from 'react'

function Loader() {
    return (
        <div className=' flex w-full h-full fixed top-0 left-0 items-center justify-center bg-slate-50 bg-opacity-80 z-50'>
        <div className=''>
            <div className="flex flex-row gap-2 px-5">
                <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:.7s]"></div>
                <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:.7s]"></div>
                
            </div>

            <h1 className=' text-left mt-5 w-full text-xl font-semi-bold '>Please wait...</h1>
        </div>
        </div>
    )
}

export default Loader