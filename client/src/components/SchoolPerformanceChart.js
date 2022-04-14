import React from 'react'

export default function SchoolPerformanceChart({isLoading,data}) {
    return (
        <div className='w-full md:w-8/12 h-8 bg-emerald-400'>
            chart
            {!isLoading && console.log(data)}
        </div>
    )
}
