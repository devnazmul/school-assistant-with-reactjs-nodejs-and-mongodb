import React from 'react'

export default function EventCard({color}) {
    return (
        <div className='flex items-center mb-5 cursor-pointer'>
            <div className={`relative ${color} bg-opacity-20 flex flex-col justify-center items-center rounded-3xl px-4 py-3`}>
                <h1 className='text-2xl font-bold'>5</h1>
                <h3 className='text-sm font-semibold'>Wed</h3>
                <span className={`absolute -bottom-3 h-5 w-5 border-2 border-white rounded-full ${color}`}></span>
            </div>
            <h1 className='ml-3 font-semibold'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
        </div>
    )
}
