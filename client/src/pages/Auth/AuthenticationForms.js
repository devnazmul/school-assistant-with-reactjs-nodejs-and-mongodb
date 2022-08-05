import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


export default function AuthenticationForms() {

  const [stage, setStage] = React.useState('login')


  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);


  const [user, setUser] = React.useState();
  React.useEffect(() => {
    localStorage.setItem('user_info', JSON.stringify(user));
  }, [user]);

  return (
    <div className='w-full flex justify-center items-center h-screen bg-gradient-to-tl from-grad-from to-grad-to'>
      {stage === 'login' ? (
        <div className='md:w-8/12 lg:w-7/12 xl:w-1/2 md:px-5 relative px-10   py-10 rounded-xl shadow-xl bg-white'>
          <img className='absolute  w-1/2 md:w-1/3 -top-20 -right-20' src="./assets/school-boy-3d.png" alt="" />

          <form className='flex justify-center items-center flex-col' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-3xl font-bold text-grad-to mb-5'>Log in</h1>
            <input
              className='w-full md:w-1/2  mb-5 h-10 px-5 rounded-md  shadow-xl bg-purple-100'
              type="text"
              placeholder="Email"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            <input
              className='w-full md:w-1/2  mb-5 h-10 px-5 rounded-md  shadow-xl bg-purple-100'
              type="password"
              placeholder="password"
              {...register("password", { required: true, maxLength: 12 })}
            />
            <div className='w-full md:w-1/2  flex justify-between items-center mb-2'>
              <Link to={'/'} className='text-xs text-gray-400' >Forgot password?</Link>
              <button onClick={() => setStage('signup')} className='text-xs text-grad-from' >Haven't account yet?</button>
            </div>
            <input
              className='w-full md:w-1/2  mb-5 h-10 px-5 rounded-md hover:bg-grad-from transition-all duration-100 text-black hover:text-white cursor-pointer shadow-xl font-semibold bg-purple-100'
              type="submit"
              value={'Log In'}
            />
          </form>

          <img className='absolute w-1/2 md:w-1/3 -bottom-10 -left-20' src="./assets/school-boy-3d-2.png" alt="" />

        </div>
      ) : (
        <div className='md:w-8/12 lg:w-7/12 xl:w-1/2 md:px-5  relative px-10 py-10 rounded-xl shadow-xl bg-white'>
          <img className='absolute   w-1/2 md:w-1/3  -top-10 md:-top-20 -right-20 md:-right-24' src="./assets/school-boy-3d.png" alt="" />


          <form className='flex justify-center items-center flex-col' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-3xl font-bold text-grad-to mb-5'>Sign Up</h1>
            <input
              className='w-full md:w-1/2  mb-5 h-10 px-5 rounded-md  shadow-xl bg-purple-100'
              type="text" defaultValue={''}
              placeholder="full name"
              {...register("full_name", { required: true, pattern: /^\S+@\S+$/i })}
            />
            <input
              className='w-full md:w-1/2  mb-5 h-10 px-5 rounded-md  shadow-xl bg-purple-100'
              type="text" defaultValue={''}
              placeholder="username"
              {...register("username", { required: true, maxLength: 12 })}
            />
            <input
              className='w-full md:w-1/2  mb-5 h-10 px-5 rounded-md  shadow-xl bg-purple-100'
              type="email"
              defaultValue={''}
              placeholder="email"
              {...register("email", { required: true, maxLength: 12 })}
            />
            <input
              className='w-full md:w-1/2  mb-5 h-10 px-5 rounded-md  shadow-xl bg-purple-100'
              type="password"
              defaultValue={''}
              placeholder="password"
              {...register("password", { required: true, maxLength: 12 })}
            />
            <div className='w-full md:w-1/2  flex justify-end items-center mb-2'>
              <button onClick={() => setStage('login')} className='text-xs text-grad-from' >Already account?</button>
            </div>
            <input
              className='w-full md:w-1/2  mb-5 h-10 px-5 rounded-md hover:bg-grad-from transition-all duration-100 text-black hover:text-white cursor-pointer shadow-xl font-semibold bg-purple-100'
              type="submit"
              value={'Sign Up'}
            />
          </form>
          <img className='absolute   w-1/2 md:w-1/3  -bottom-10 -left-20' src="./assets/school-boy-3d-2.png" alt="" />

        </div>
      )}

    </div>
  )
}
