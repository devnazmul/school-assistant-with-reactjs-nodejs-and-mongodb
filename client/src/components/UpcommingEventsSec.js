import React from 'react'
import { BiPlus } from 'react-icons/bi'
import { BsArrowRight } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import EventCard from './EventCard'

export default function UpcommingEventsSec() {
  return (
    <div className='w-full md:w-4/12 overflow-hidden h-96 px-5 py-5 mt-3 bg-white rounded-md shadow-md'>
      <div>
        <h1 className='text-md font-bold mb-5'>Upcoming Events</h1>
      </div>
      <div className='h-full flex flex-col '>
        <div className='h-full overflow-y-auto mb-5 pb-4 scrollbar-thin scrollbar-thumb-grad-from scrollbar-track-gray-100'>
          <EventCard color={'bg-purple-600'} />
          <EventCard color={'bg-orange-600'} />
          <EventCard color={'bg-red-600'} />
          <EventCard color={'bg-green-600'} />
        </div>
        <div className='flex justify-between items-center mb-2'>
          <h1 className='text-gray-400 text-sm'>5 more events</h1>
          <button className='text-right flex items-center  text-grad-from font-semibold text-sm'>View more <BsArrowRight className='text-lg ml-2' /></button>
        </div>
        <div className='flex justify-center items-center mb-9'>
          <NavLink className={'w-1/2 flex items-center justify-center bg-grad-to h-11 px-4 rounded-lg text-white'} to={'/'}>
            <BiPlus /> <span className='block'> New Events</span>
          </NavLink>
        </div>


      </div>

    </div>
  )
}
