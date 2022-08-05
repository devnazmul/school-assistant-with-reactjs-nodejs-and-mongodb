import axios from 'axios';
import React from 'react';
import TeacherCard from '../components/TeacherCard';
import TeacherCardLoading from './Loading/TeacherCardLoading';

export default function TeachersList({monitoringChanges}) {
  const [teachers, setTeachers] = React.useState()
  
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_API}/teacher`).then((data) => {
      setTeachers(data.data.data);
      setLoading(false)
    })
  }, [monitoringChanges])
  return (
    <div className='xl:w-full w-full lg:bg-transparent '>
      <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5 overflow-y-auto'>
        {loading ? (
          <>
            <TeacherCardLoading />
            <TeacherCardLoading />
            <TeacherCardLoading />
            <TeacherCardLoading />
            <TeacherCardLoading />
            <TeacherCardLoading />
            <TeacherCardLoading />
            <TeacherCardLoading />
            <TeacherCardLoading />
            <TeacherCardLoading />
            <TeacherCardLoading />
            <TeacherCardLoading />
          </>

        ) : (teachers.map((teacher) => {
          return (
            <React.Fragment key={teacher._id}>
              <TeacherCard _id={teacher._id} name={teacher.name} spacial_at={teacher.spacial_at} teacher_pic_url={teacher.teacher_pic_url} />
            </React.Fragment>
          )
        }))}
      </div>
    </div>
  )
}
