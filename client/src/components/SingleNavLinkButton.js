import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SingleNavLinkButton({to,Icon,btnNo,title}) {
    return (
        <NavLink
        
            className={({ isActive }) => {
                return isActive ? `main-menu-btn${btnNo} px-2 py-2 items-center justify-center lg:justify-start flex rounded-md font-medium`:` px-2 py-2 items-center justify-center lg:justify-start flex rounded-md font-medium`
            }}
            style={({ isActive }) => {
                return {
                    color: isActive ? '#8c4af2' : '#fff',
                    background: isActive ? "rgb(221, 254, 255)" : "transparent",
                };
            }}
            to={to}
        >
            <Icon title={title} className='text-xl lg:mr-3' /> 
            <span className='hidden lg:block'>{title}</span> 
        </NavLink>
    )
}
