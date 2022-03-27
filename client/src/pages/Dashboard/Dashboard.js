import React from 'react';
import { AiOutlineAppstore } from 'react-icons/ai';
import { BiCalendar } from 'react-icons/bi';
import { FaChalkboardTeacher, FaGraduationCap } from 'react-icons/fa';
import { IoNotifications } from 'react-icons/io5';
import { NavLink, Route, Routes } from "react-router-dom";
import Calendar from './Calendar';
import Main from './Main';
import Notification from './Notification';
import Students from './Students';
import Teachers from './Teachers';
import UserProfile from './UserProfile';

export default function Dashboard() {
    return (
        <div className=' text-black h-screen p-5 bg-gray-200 bg-image'>
            <div className='h-full w-full flex rounded-2xl overflow-hidden shadow-xl' >

                <div className='w-2/12 h-full bg-gradient-to-t from-grad-from to-grad-to'  >

                    <nav className='px-5 py-3'>
                        <div className='w-full flex mb-5 justify-between items-center  text-xl  font-medium text-white'>
                            <img className='w-12' src="https://i.postimg.cc/MK0FTtTw/education.png" alt="" /> School Assist
                        </div>
                        <h2 className='text-white text-lg font-semibold mb-5'>Main Menu</h2>
                        <ul>
                            <li className='mb-5'>
                                <NavLink
                                    style={({ isActive }) => {
                                        return {
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            alignItems: 'center',
                                            padding: '5px 10px',
                                            borderRadius: '7px',
                                            fontWeight: '500',
                                            color: isActive ? '#8c4af2' : '#fff',
                                            background: isActive ? "white" : "transparent",
                                        };
                                    }}
                                    to={`/`}
                                >
                                    <AiOutlineAppstore className='text-xl mr-3' /> Dashboard
                                </NavLink>
                            </li>
                            <li className='mb-5'>
                                <NavLink
                                    style={({ isActive }) => {
                                        return {
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            alignItems: 'center',
                                            padding: '5px 10px',
                                            borderRadius: '7px',
                                            fontWeight: '500',
                                            color: isActive ? '#8c4af2' : '#fff',
                                            background: isActive ? "white" : "transparent",
                                        };
                                    }}
                                    to={`/teachers`}
                                >
                                   <FaChalkboardTeacher className='text-xl mr-3' /> Teachers
                                </NavLink>
                            </li>
                            <li className='mb-5'>
                                <NavLink
                                    style={({ isActive }) => {
                                        return {
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            alignItems: 'center',
                                            padding: '5px 10px',
                                            borderRadius: '7px',
                                            fontWeight: '500',
                                            color: isActive ? '#8c4af2' : '#fff',
                                            background: isActive ? "white" : "transparent",
                                        };
                                    }}
                                    to={`/students`}
                                >
                                   <FaGraduationCap className='text-xl mr-3'  /> Students
                                </NavLink>
                            </li>
                            <li className='mb-5'>
                                <NavLink
                                    style={({ isActive }) => {
                                        return {
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            alignItems: 'center',
                                            padding: '5px 10px',
                                            borderRadius: '7px',
                                            fontWeight: '500',
                                            color: isActive ? '#8c4af2' : '#fff',
                                            background: isActive ? "white" : "transparent",
                                        };
                                    }}
                                    to={`/calendar`}
                                >
                                   <BiCalendar className='text-xl mr-3' /> Calendar
                                </NavLink>
                            </li>
                            <li className='mb-5'>
                                <NavLink
                                    style={({ isActive }) => {
                                        return {
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            alignItems: 'center',
                                            padding: '5px 10px',
                                            borderRadius: '7px',
                                            fontWeight: '500',
                                            color: isActive ? '#8c4af2' : '#fff',
                                            background: isActive ? "white" : "transparent",
                                        };
                                    }}
                                    to={`/notification`}
                                >
                                   <IoNotifications className='text-xl mr-3' /> Notification
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className='bg-white h-full w-10/12'>
                    <div className='w-full flex justify-center items-center px-5 shadow-md h-16'>
                        <div className='w-1/2 pr-10'>
                            <input className='border-2 w-full rounded-full h-full px-2 py-1 flex justify-center items-center border-purple-200 active:border-purple-500 focus:border-purple-500' placeholder='search' type="text" />
                        </div>
                        <div className='w-1/2 flex items-center h-full justify-between'>
                            <span className='w-10 h-10'>as</span>
                            <span className='w-10 h-10'>as</span>
                            <span className='w-10 h-10'>as</span>
                            <span className='w-10 h-10'>as</span>
                            <span className='w-10 h-10'>as</span>
                            <NavLink
                                style={({ isActive }) => {
                                    return {
                                        display: "block",
                                        margin: "1rem 0",
                                        borderRadius: '50%',
                                        border: isActive ? "3px solid #8c4af2" : "3px solid #ccc",
                                    };
                                }}
                                to={`/user_profile`}
                            >
                                <img className='object-cover w-10 rounded-full overflow-hidden h-10' src="https://i.ibb.co/Y7hqd0L/Eq-B8qn1-Uc-AIe-SFq.jpg" alt="" />
                            </NavLink>

                        </div>
                    </div>
                    <div className='w-full h-full px-3 py-2 bg-teal-400'>
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/teachers" element={<Teachers />} />
                            <Route path="/students" element={<Students />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/user_profile" element={<UserProfile />} />
                            <Route path="/notification" element={<Notification />} />
                        </Routes>
                    </div>
                </div>

            </div>
        </div>
    )
}
