import React from 'react'
import StudentsTableRow from '../components/StudentsTableRow'
export default function StudentsTable() {
  return (
    <div className='bg-white w-full px-2 rounded-lg overflow-hidden shadow-lg'>
          <table className='bg-white w-full table-auto text-sm'>
            <thead className='px-5'>
              <tr className='text-left border-b border-gray-400'>
                <th className=' font-bold px-5 pb-2 pt-4'>ID</th>
                <th className=' font-bold px-5 pb-2 pt-4'>Name</th>
                <th className=' font-bold px-5 pb-2 pt-4'>Class</th>
                <th className=' font-bold px-5 pb-2 pt-4'>Contact</th>
              </tr>
            </thead>
            <tbody className='overflow-y-scroll' >

              <StudentsTableRow
                id={23849}
                imageUrl={'https://i.ibb.co/Y7hqd0L/Eq-B8qn1-Uc-AIe-SFq.jpg'}
                name={'Yusuf'}
                classDetails={'Class-V'}
                classTo={'/'}
                to={'/'}
              />
              <StudentsTableRow
                id={23849}
                imageUrl={'https://i.ibb.co/Y7hqd0L/Eq-B8qn1-Uc-AIe-SFq.jpg'}
                name={'Yusuf'}
                classDetails={'Class-V'}
                classTo={'/'}
                to={'/'}
              />
              <StudentsTableRow
                id={23849}
                imageUrl={'https://i.ibb.co/Y7hqd0L/Eq-B8qn1-Uc-AIe-SFq.jpg'}
                name={'Yusuf'}
                classDetails={'Class-V'}
                classTo={'/'}
                to={'/'}
              />
              <StudentsTableRow
                id={23849}
                imageUrl={'https://i.ibb.co/Y7hqd0L/Eq-B8qn1-Uc-AIe-SFq.jpg'}
                name={'Yusuf'}
                classDetails={'Class-V'}
                classTo={'/'}
                to={'/'}
              />
              <StudentsTableRow
                id={23849}
                imageUrl={'https://i.ibb.co/Y7hqd0L/Eq-B8qn1-Uc-AIe-SFq.jpg'}
                name={'Yusuf'}
                classDetails={'Class-V'}
                classTo={'/'}
                to={'/'}
              />

            </tbody>
          </table>
        </div>
  )
}
