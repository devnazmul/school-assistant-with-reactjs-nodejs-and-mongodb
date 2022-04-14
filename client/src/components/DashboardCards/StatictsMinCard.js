import React from 'react'

export default function StatictsMinCard({TotalNumber,title,iconUrl,percentage}) {
  return (
    <div className='w-full md:w-11/12 h-24 flex justify-between rounded-lg px-5 py-2 bg-white shadow-lg my-2'>
        <div className='w-2/3'>
            <h1 className='font-bold text-2xl mb-1'>{TotalNumber}</h1>
            <h1 className='font-medium'>{title}</h1>
            <h1 className='font-mono text-xs'><span className='font-bold text-green-500'>{percentage}</span> Then last month</h1>
        </div>
        <div className='md:w-1/3'>
            <img className='h-full object-contain' src={iconUrl} alt="" />
        </div>
    </div>
  )
}
