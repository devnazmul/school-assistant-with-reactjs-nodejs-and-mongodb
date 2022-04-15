import { subDays } from 'date-fns';
import moment from 'moment';
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
  const [data2, setData2] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [inc, setInc] = useState(0)
  useEffect(() => {
    if (inc <= 10) {
      setInc(inc + 1)
      setData([...data,
      {
        'y':inc,
        'date': subDays(new Date(), inc).toISOString().substr(0, 10),
        'value': Math.floor(1 + Math.random() * 2000),
        'teachers': Math.floor(1 + Math.random() * 1000),
        'students': Math.floor(1 + Math.random() * 1000)
      }])
     

      setData2([...data2,
        {
          'days': moment(subDays(new Date(), inc)).format('ddd'),
          'income': Math.floor(1 + Math.random() * 2000),
          'expance': Math.floor(1 + Math.random() * 1000),
          'range': Math.floor(Math.random() * 4000) + 0
        }])

    } else {
      setIsLoading(false)
    }
  }, [inc])

  return (
    <div className=''>
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
        <FinanceChart  isLoading={isLoading} data={data2} />
      </div>
    </div>
  )
}
