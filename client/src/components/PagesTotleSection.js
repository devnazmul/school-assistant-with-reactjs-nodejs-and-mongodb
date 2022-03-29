import React from 'react'
import { BiPlus } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

export default function PagesTotleSection() {
  return (
    <div className='w-full flex my-2'>
        <div className='w-6/12'>
            <h1 className='text-2xl font-bold'>Dashboard</h1>
            <p className='text-gray-400 text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='w-6/12 flex justify-end'>
            <NavLink className={'flex items-center bg-grad-to h-11 px-4 rounded-lg text-white'} to={'/'}>
                <BiPlus /> New Admission
            </NavLink>
        </div>
    </div>
  )
}
