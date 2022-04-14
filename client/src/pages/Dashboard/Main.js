import { subDays } from 'date-fns';
import React, { useEffect, useState } from 'react';
import DataSummurySec from '../../components/DataSummurySec';
import EventCalendar from '../../components/EventCalendar';
import FinanceChart from '../../components/FinanceChart';
import PagesTotleSection from '../../components/PagesTotleSection';
import SchoolDetailsSec from '../../components/SchoolDetailsSec';
import SchoolPerformanceChart from '../../components/SchoolPerformanceChart';
import UpcommingEventsSec from '../../components/UpcommingEventsSec';

export default function Main() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [inc, setInc] = useState(0)
  useEffect(() => {
    if (inc <= 29) {
      setInc(inc + 1)
      setData([...data,
      {
        'date': subDays(new Date(), inc).toISOString().substr(0, 10),
        'value': 1 + Math.random() * 10
      }
      ])
    } else {
      setIsLoading(false)
    }
  }, [inc])

  return (
    <div>
      <PagesTotleSection />
      <div className='w-full block md:flex'>
        <DataSummurySec />
        <SchoolDetailsSec />
      </div>
      <div className='w-full block md:flex'>
        <SchoolPerformanceChart isLoading={isLoading} data={data} />
        <UpcommingEventsSec />
      </div>
      <div className='w-full block md:flex'>
        <EventCalendar />
        <FinanceChart />
      </div>
    </div>
  )
}
