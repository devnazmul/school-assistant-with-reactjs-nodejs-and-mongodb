import React from 'react'
import { BsPlus, BsSearch, BsTelephone } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { TiFilter } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import StudentsTableRow from '../../components/StudentsTableRow'

export default function Students() {
  return (
    <div className='flex'>
      <div className='w-9/12 pr-5'>
        <div className='flex justify-between items-center mb-4'>
          <div>
            <h1 className='text-2xl font-semibold'>Students Database</h1>
            <p className='font-mono text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
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
        <div className='bg-white w-full px-2 rounded-lg overflow-hidden shadow-lg'>
          <table className='bg-white w-full table-auto text-sm'>
            <thead className='px-5'>
              <tr className='text-left border-b border-gray-400'>
                <th className=' font-bold px-5 pb-2 pt-4'>ID</th>
                <th className=' font-bold px-5 pb-2 pt-4'>Name</th>
                <th className=' font-bold px-5 pb-2 pt-4'>Class</th>
                <th className=' font-bold px-5 pb-2 pt-4'>Contact</th>
              </tr>
            </thead>
            <tbody className='overflow-y-scroll' >

              <StudentsTableRow
                id={23849}
                imageUrl={'https://i.ibb.co/Y7hqd0L/Eq-B8qn1-Uc-AIe-SFq.jpg'}
                name={'Yusuf'}
                classDetails={'Class-V'}
                classTo={'/'}
                to={'/'}
              />
              <StudentsTableRow
                id={23849}
                imageUrl={'https://i.ibb.co/Y7hqd0L/Eq-B8qn1-Uc-AIe-SFq.jpg'}
                name={'Yusuf'}
                classDetails={'Class-V'}
                classTo={'/'}
                to={'/'}
              />
              <StudentsTableRow
                id={23849}
                imageUrl={'https://i.ibb.co/Y7hqd0L/Eq-B8qn1-Uc-AIe-SFq.jpg'}
                name={'Yusuf'}
                classDetails={'Class-V'}
                classTo={'/'}
                to={'/'}
              />
              <StudentsTableRow
                id={23849}
                imageUrl={'https://i.ibb.co/Y7hqd0L/Eq-B8qn1-Uc-AIe-SFq.jpg'}
                name={'Yusuf'}
                classDetails={'Class-V'}
                classTo={'/'}
                to={'/'}
              />
              <StudentsTableRow
                id={23849}
                imageUrl={'https://i.ibb.co/Y7hqd0L/Eq-B8qn1-Uc-AIe-SFq.jpg'}
                name={'Yusuf'}
                classDetails={'Class-V'}
                classTo={'/'}
                to={'/'}
              />

            </tbody>
          </table>
        </div>
      </div>
      <div className='w-3/12 bg-white shadow-lg rounded-lg px-7 py-4'>
        <div className='w-full shadow-lg rounded-md px-5 py-5'>Graph</div>
        <div className='py-10'>
          <div className='font-semibold'>
            ID: 75859
          </div>
          <div className='flex justify-center items-center flex-col mb-7'>
            <img className='border-8 mt-3 border-white rounded-full shadow-lg h-40 w-40' src='https://i.ibb.co/Y7hqd0L/Eq-B8qn1-Uc-AIe-SFq.jpg' alt="" />
            <h2 className='text-grad-to font-bold text-xl mb-2 mt-2'>Student Name</h2>
            <span className='text-grad-to text-xs mb-5'>Class-5</span>
            <div className='flex justify-center items-center'>
              <button className='flex justify-center items-center rounded-full p-2 bg-grad-from bg-opacity-20 text-grad-to mx-3'><BsTelephone /></button>
              <button className='flex justify-center items-center rounded-full p-2 bg-grad-from bg-opacity-20 text-grad-to mx-3'><HiOutlineMail /></button>
            </div>
          </div>
          <div className='mb-7'>
            <h1 className='font-semibold text-lg'>About</h1>
            <p className='text-sm text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At eos maxime unde soluta corporis cum quaerat totam aut fugiat facere deserunt, iusto laboriosam odio, voluptas cupiditate a possimus aliquam eveniet.</p>
          </div>
          <hr className=' mb-5' />
          <div className='flex flex-col mb-7'>
            <div className='flex justify-between items-center'>
              <div className='w-6/12 h-16'>
                <h3 className='font-bold text-sm'>Age</h3>
                <p className='text-gray-500 text-xs'>14</p>
              </div>
              <div className='w-6/12 h-16'>
                <h3 className='font-bold text-sm'>Gender</h3>
                <p className='text-gray-500 text-xs'>Female</p>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <div className='w-6/12 h-16'>
                <h3 className='font-bold text-sm'>Date of Birth</h3>
                <p className='text-gray-500 text-xs'>2 Jun 2005</p>
              </div>
              <div className='w-6/12 h-16'>
                <h3 className='font-bold text-sm'>Adress</h3>
                <p className='text-gray-500 text-xs'>
                  Balurchok, Moitpara, Narisha, Dohar, Dhaka-1332
                </p>
              </div>
            </div>
          </div>
          <hr className=' mb-5' />
          <div className=''>
            <h2 className='text-sm font-bold'>Students from the same class</h2>
            <div className='flex justify-between items-center py-3'>
              <div className='flex justify-center items-center'>
                <img className='border-4 border-white rounded-full shadow-lg h-10 w-10' src='https://i.ibb.co/Y7hqd0L/Eq-B8qn1-Uc-AIe-SFq.jpg' alt="" />
                <img className='border-4 border-white rounded-full shadow-lg h-10 w-10' src='https://i.ibb.co/Y7hqd0L/Eq-B8qn1-Uc-AIe-SFq.jpg' alt="" />
                <img className='border-4 border-white rounded-full shadow-lg h-10 w-10' src='https://i.ibb.co/Y7hqd0L/Eq-B8qn1-Uc-AIe-SFq.jpg' alt="" />
              </div>
              <div>
                 <Link to='/' className='text-grad-to text-sm '>+12 More</Link>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
