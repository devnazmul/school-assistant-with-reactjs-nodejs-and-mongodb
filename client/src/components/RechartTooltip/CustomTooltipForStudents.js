import moment from 'moment';
import React from 'react';
export default function CustomTooltipForStudents({ active, payload }) {
    if (active && payload && payload.length) {
        console.log(payload);
        return (
            <div className="custom-tooltip text-center bg-white px-0 py-5 rounded-lg shadow-lg">
                <span className='text-gray-600'>
                    {`${moment(payload[0].payload.date).format('LL')}`}
                </span>
                <div className='flex justify-between items-center'>
                    <p className="label">
                        <div className='flex mx-5 justify-start items-center font-bold text-lg'>
                            <span className='block px-3 py-2 rounded-full bg-chart-students mr-2'></span>
                            {`${payload[0].value}`}
                        </div>
                        <span className='text-gray-400'>{`${payload[0].name}`}</span>
                    </p>
                    <p className="label">
                        <div className='flex mx-5 justify-start items-center font-bold text-lg'>
                            <span className='block px-3 py-2 rounded-full bg-chart-teachers mr-2'></span>
                            {`${payload[1].value}`}
                        </div>
                        <span className='text-gray-400'>{`${payload[1].name}`}</span>
                    </p>
                </div>

            </div>
        );
    }
    return null;
};
