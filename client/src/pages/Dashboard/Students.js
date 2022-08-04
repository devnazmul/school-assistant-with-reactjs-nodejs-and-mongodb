import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { IoPersonAdd } from 'react-icons/io5';
import { TiFilter } from 'react-icons/ti';
import AddStudentPopup from '../../components/AddStudentPopup';
import StudentSingleDetailsPopup from '../../components/StudentSingleDetailsPopup';
import StudentsTable from '../../components/StudentsTable';

export default function Students() {
  const [AddTeacherPopupIsOpen, setAddTeacherPopupIsOpen] = React.useState(false)

  return (
    <div className='flex relative'>
      <div className='w-full lg:w-full lg:pr-5'>
        <div className='lg:flex justify-between items-center mb-4'>
          <div className='w-full lg:w-9/12'>
            <h1 className='text-2xl font-bold'>Students</h1>
            <p title='Lorem ipsum dolor sit amet consectetur adipisicing elit.' className='text-gray-400 text-xs truncate '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='w-full flex justify-end lg:justify-end mt-5 lg:mt-0'>
            <div className='flex w-8/12 justify-between items-center relative h-9 shadow-lg rounded-md overflow-hidden text-gray-400'>
              <BsSearch className='absolute left-2 text-sm' />
              <input className='focus:outline-none w-full placeholder-slate-400 h-full pl-7 placeholder:text-md focus:border-red-600' type="text" placeholder='search here..' />
            </div>
            <button className='bg-white rounded-md shadow-md ml-5 px-2' title='filter'><TiFilter className='text-grad-to' /></button>
            <button title='add student' onClick={() => setAddTeacherPopupIsOpen(true)} className='w-36 py-2 bg-grad-to text-white rounded-md shadow-lg font-semibold text-sm ml-5 flex justify-between px-3 items-center'><IoPersonAdd className='text-md' /> Add Student</button>
          </div>
        </div>
        <div className='flex justify-between'>
          <AddStudentPopup setAddTeacherPopupIsOpen={setAddTeacherPopupIsOpen} AddTeacherPopupIsOpen={AddTeacherPopupIsOpen} />
          <StudentsTable />
          <StudentSingleDetailsPopup />
        </div>
      </div>
    </div>
  )
}