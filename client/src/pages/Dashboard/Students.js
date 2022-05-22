import React from 'react'
import { BsPlus, BsSearch } from 'react-icons/bs'
import { TiFilter } from 'react-icons/ti'
import StudentSingleDetails from '../../components/StudentSingleDetails'
import StudentSingleDetailsPopup from '../../components/StudentSingleDetailsPopup'
import StudentsTable from '../../components/StudentsTable'

export default function Students() {
  return (
    <div className='flex relative'>
      <div className='w-full lg:w-9/12 lg:pr-5'>
        <div className='flex justify-between items-center mb-4'>
          <div>
          <h1 className='text-2xl font-bold'>Students Database</h1>
            <p title='Lorem ipsum dolor sit amet consectetur adipisicing elit.' className='text-gray-400 text-xs truncate '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='flex justify-center items-center'>
            <button className='flex justify-center items-center bg-white shadow-lg rounded-md w-20 py-2 mr-5'><TiFilter className='mr-1' />Filter</button>
            <button className='flex justify-center items-center bg-white shadow-lg rounded-md w-20 py-2 mr-5'><BsPlus className='mr-1' />Add</button>
          </div>
        </div>
        <div className='flex justify-start items-center mb-4'>
          <button className='w-20 py-2 bg-grad-to text-white rounded-md shadow-lg font-semibold text-sm mr-5'>Students</button>
          <button className='w-20 py-2 bg-white rounded-md shadow-lg font-semibold text-sm mr-5'>Teachers</button>
          <div className='flex justify-center items-center relative h-8 shadow-lg rounded-md overflow-hidden text-gray-400'>
            <BsSearch className='absolute left-2 text-sm' />
            <input className='focus:outline-none placeholder-slate-400 h-full pl-7 placeholder:text-md focus:border-red-600' type="text" placeholder='search here..' />
          </div>
        </div>
        <StudentsTable />
      </div>
      <StudentSingleDetails />
      <StudentSingleDetailsPopup />
    </div>
  )
}
