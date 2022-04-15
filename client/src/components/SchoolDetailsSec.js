import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

export default function SchoolDetailsSec() {
    return (
        <div className='w-full md:w-1/2 lg:my-2 md:my-2 bg-white rounded-lg shadow-md text-center lg:text-left flex flex-col lg:flex-row justify-center items-center py-5 px-5'>
            <div className='lg:w-4/12 lg:mr-5'>
                <img className='rounded-full' src="https://i.ibb.co/TvnvDJD/person.png" alt="" srcset="" />
            </div>
            <div className='lg:w-8/12 '>
                <h1 className='text-2xl font-bold text-grad-from'>Md Ali Ashraf</h1>
                <h3 className='font-mono text-sm text-gray-400'>Superintendent</h3>
                <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error impedit facere doloremque necessitatibus qui itaque nam sunt assumenda optio.
                    
                </p>
                <div className='flex justify-end items-center'>
                <button className='text-right flex items-center  text-grad-from font-semibold text-sm'>More details <BsArrowRight className='text-lg ml-2' /></button>

                </div>
            </div>
        </div>
    )
}
