import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';


export default function Login() {
  const [user, setUser] = React.useState();
  const location = useLocation()

  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log(errors);


  React.useEffect(() => {
    localStorage.setItem('user_info', JSON.stringify(user));
  }, [user]);
  const handleLogin = (data) => {
  axios.post(`${process.env.REACT_APP_SERVER_API}`).then(res=>{
    console.log(res);
  })
  }

  if (user) {
    location.push('/')
  }

  return (
    <div className='w-full flex justify-center items-center h-screen bg-gradient-to-tl from-grad-from to-grad-to'>
   
        <div className='md:w-8/12 lg:w-7/12 xl:w-1/2 md:px-5 relative px-10   py-10 rounded-xl shadow-xl bg-white'>
          <img className='absolute  w-1/2 md:w-1/3 -top-20 -right-20' src="../../assets/school-boy-3d.png" alt="" />

          <form className='flex justify-center items-center flex-col' onSubmit={handleSubmit(handleLogin)}>
            <h1 className='text-3xl font-bold text-grad-to mb-5'>Log in</h1>
            <input
              className='w-full md:w-1/2  mb-5 h-10 px-5 rounded-md focus:outline-none shadow-xl bg-purple-100'
              type="text"
              placeholder="Email"
              {...register("Email", { required: true })}
            />
            <input
              className='w-full md:w-1/2  mb-5 h-10 px-5 rounded-md focus:outline-none shadow-xl bg-purple-100'
              type="password"
              placeholder="password"
              {...register("password", { required: true, maxLength: 12 })}
            />
            <div className='w-full md:w-1/2  flex justify-between items-center mb-2'>
              <Link to={'/'} className='text-xs text-gray-400' >Forgot password?</Link>
              <Link to="/auth/registration" className='text-xs text-grad-from' >Haven't account yet?</Link>
            </div>
            <input
              className='w-full md:w-1/2  mb-5 h-10 px-5 rounded-md hover:bg-grad-from transition-all duration-100 text-black hover:text-white cursor-pointer shadow-xl font-semibold bg-purple-100'
              type="submit"
              value={'Log In'}
            />
          </form>

          <img className='absolute w-1/2 md:w-1/3 -bottom-10 -left-20' src="../../assets/school-boy-3d-2.png" alt="" />

        </div>
    </div>
  )
}
