import React from 'react'

export default function TeacherCardLoading() {
    return (
        <div className="animate-pulse bg-white shadow-lg py-4 px-3 rounded-lg flex md:flex-row flex-col justify-between items-center">
            <div>
                <div className='animate-pulse bg-slate-300 h-16 w-16 object-cover rounded-full'></div>
            </div>
            <div className='animate-pulse flex md:pl-3 flex-col w-2/3 text-center md:text-left'>
                <div className='w-full animate-pulse rounded-full h-5 bg-slate-300 mb-2'></div>
                <div className='w-1/2 animate-pulse rounded-full h-2 bg-slate-200'></div>
                <div className='mt-2 w-1/2 rounded-full h-2 bg-slate-300'></div>
            </div>
        </div>

    )
}
