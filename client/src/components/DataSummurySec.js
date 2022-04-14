import React from 'react'
import StatictsMinCard from './DashboardCards/StatictsMinCard'

export default function DataSummurySec() {
  return (
    <div className='md:w-1/2 w-full'>
          <div className='block lg:flex w-full'>
            <div className='w-full lg:w-1/2'>
              <StatictsMinCard TotalNumber={'43452'} title={'Students'} iconUrl={'./assets/school.png'} percentage={'35%'} />
            </div>
            <div className='w-full lg:w-1/2'>
              <StatictsMinCard TotalNumber={'43452'} title={'Students'} iconUrl={'./assets/school.png'} percentage={'35%'} />
            </div>
          </div>
          <div className='block lg:flex w-full'>
            <div className='w-full lg:w-1/2'>
              <StatictsMinCard TotalNumber={'43452'} title={'Students'} iconUrl={'./assets/school.png'} percentage={'35%'} />
            </div>
            <div className='w-full lg:w-1/2'>
              <StatictsMinCard TotalNumber={'43452'} title={'Students'} iconUrl={'./assets/school.png'} percentage={'35%'} />
            </div>
          </div>
        </div>
  )
}
