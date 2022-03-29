import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SingleNavLinkButton({to,Icon,btnNo,title}) {
    return (
        <NavLink
            className={({ isActive }) => {
                return isActive && `main-menu-btn${btnNo}`
            }}
            style={({ isActive }) => {
                return {
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    padding: '5px 10px',
                    borderRadius: '7px',
                    fontWeight: '500',
                    color: isActive ? '#8c4af2' : '#fff',
                    background: isActive ? "rgb(221, 254, 255)" : "transparent",
                };
            }}
            to={to}
        >
            <Icon className='text-xl mr-3' /> {title}
        </NavLink>
    )
}
