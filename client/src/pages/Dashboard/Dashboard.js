import React from 'react';
import { Route, Routes } from "react-router-dom";
import SideNav from '../../components/SideNav';
import TopNav from '../../components/TopNav';
import Calendar from './Calendar';
import Classes from './Classes';
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
                    <SideNav
                        logoSrc={"https://i.postimg.cc/MK0FTtTw/education.png"}
                        navImageSrc={"./assets/school.png"}
                        appName={'School Assist'}
                        menuName={'Main Menu'}
                    />
                </div>

                <div className='bg-white h-full w-10/12'>
                    <TopNav />
                    <div className='w-full h-full pl-7 pr-4 py-2 bg-slate-100'>
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/teachers" element={<Teachers />} />
                            <Route path="/students" element={<Students />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/classes" element={<Classes />} />
                            <Route path="/user_profile" element={<UserProfile />} />
                            <Route path="/notification" element={<Notification />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}
