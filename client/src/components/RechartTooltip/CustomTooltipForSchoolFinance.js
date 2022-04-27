import React from 'react';
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs';
export default function CustomTooltipForSchoolFinance({ active, payload }) {

    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip bg-white px-5 py-3 rounded-lg shadow-lg">
                <p className="label flex justify-start items-center font-bold text-lg">
                    <BsFillArrowUpCircleFill className='text-chart-income text-2xl mr-2' />
                    {`$ ${payload[0].value}`}</p>
                <p className="label flex justify-start items-center font-bold text-lg">
                    <BsFillArrowDownCircleFill className='text-chart-expance text-2xl mr-2' />
                    {`$ ${payload[1].value}`}
                </p>
            </div>
        );
    }
    return null;
};
