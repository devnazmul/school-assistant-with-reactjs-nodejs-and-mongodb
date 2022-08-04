import React from 'react'
import { BsTelephone, BsX } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-router-dom'
export default function StudentSingleDetailsPopup() {
    return (
        <div id='StudentSingleDetailsPopup' className='block lg:hidden absolute w-full mb-32 bg-white shadow-lg rounded-lg px-7 py-4'>
            <button className='absolute right-0 top-0 rounded-full shadow-lg p-1 bg-red-600'><BsX className='text-white' /></button>
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
                    <div className='flex justify-between items-center'><div className='w-6/12 h-16'>
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
                            <h3 className='font-bold text-sm'>Adress</h3>                        </div>
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
                        </div><div>
                            <Link to='/' className='text-grad-to text-sm '>+12 More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}