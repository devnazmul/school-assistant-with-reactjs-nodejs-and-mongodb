import React from 'react'

export default function TeacherCard({name,spacial_at,teacher_pic_url}) {
  return (
    <div className="bg-white shadow-lg py-4 px-3 rounded-lg flex justify-between items-center">
      <div className='relative'>
        <img className='h-16 w-16 object-cover rounded-full' src={teacher_pic_url} alt={name} loading={'lazy'} />
        <span className='absolute bottom-1 right-1 rounded-full px-1 py-1 bg-green-500 border border-white'></span>
      </div>
      <div className='flex pl-3 flex-col w-2/3  text-left'>
        <span className=' font-semibold text-md'>{name}</span>
        <span className='text-gray-400 text-xs'>{spacial_at}</span>
        <button className='text-grad-to text-left text-xs mt-2'>View profile</button>
      </div>
    </div>
  )
}
