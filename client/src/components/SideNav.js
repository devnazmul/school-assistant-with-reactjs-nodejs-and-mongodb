import React from 'react';
import { AiOutlineAppstore } from 'react-icons/ai';
import { BiCalendar } from 'react-icons/bi';
import { FaChalkboardTeacher, FaGraduationCap } from 'react-icons/fa';
import { SiGoogleclassroom } from 'react-icons/si';
import SingleNavLinkButton from './SingleNavLinkButton';


export default function SideNav({ logoSrc, navImageSrc, appName, menuName }) {
    return (
        <div className='block w-full  md:w-2/12 md:h-full bg-gradient-to-t from-grad-from to-grad-to'  >
            <nav className='flex md:block px-5 md:px-2 lg:px-5 md:py-3 overflow-hidden justify-between'>
                <div className='w-4/12 pt-5 h-full md:w-full flex mb-5 justify-between items-center  text-xl font-medium text-white'>
                    <img className='w-12 hidden md:block' src={logoSrc} alt="" />
                    <span className='block text-sm md:text-xl'>
                        {appName}
                    </span>
                </div>
                <h2 className='hidden md:block text-white text-center lg:text-left text-sm lg:text-lg font-semibold mb-5'>{menuName}</h2>
                <ul className='w-7/12 md:w-auto flex md:block justify-between items-center'>
                    <li className='md:mb-5 relative'>
                        <SingleNavLinkButton to={'/'} Icon={AiOutlineAppstore} title='Dashboard' btnNo={'1'} />
                    </li>
                    <li className='md:mb-5 relative'>
                        <SingleNavLinkButton to={`/classes`} Icon={SiGoogleclassroom} title='Classes' btnNo={'5'} />
                    </li>
                    <li className='md:mb-5 relative'>
                        <SingleNavLinkButton to={`/students`} Icon={FaGraduationCap} title='Students' btnNo={'3'} />
                    </li>
                    <li className='md:mb-5 relative'>
                        <SingleNavLinkButton to={`/teachers`} Icon={FaChalkboardTeacher} title='Teachers' btnNo={'2'} />
                    </li>
                    <li className='md:mb-5 relative'>
                        <SingleNavLinkButton to={`/calandar`} Icon={BiCalendar} title='Calendar' btnNo={'4'} />
                    </li>
                </ul>

                <div className='hidden md:flex bottom-0   justify-center flex-col relative items-center  w-full '>
                    <img className='md:w-4/5 lg:w-3/5 h-auto ' src={navImageSrc} alt="" />
                    <h1 className='hidden md:block text-xs text-center text-white font-mono'>
                        A School Management System
                    </h1>
                </div>
            </nav>
        </div>
    )
}
