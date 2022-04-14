import React from 'react'
import { BiPlus } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

export default function PagesTotleSection() {
  return (
    <div title='New Admission' className='w-full flex my-2'>
        <div className='w-9/12 md:w-6/12'>
            <h1 className='text-2xl font-bold'>Dashboard</h1>
            <p title='Lorem ipsum dolor sit amet consectetur adipisicing elit.' className='text-gray-400 text-xs truncate '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='w-3/12 md:w-6/12 flex justify-end'>
            <NavLink className={'flex items-center bg-grad-to h-11 px-4 rounded-lg text-white'} to={'/'}>
                <BiPlus /> <span className='hidden md:block'> New Admission</span>
            </NavLink>
        </div>
    </div>
  )
}
