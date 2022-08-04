import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import CustomTooltipForSchoolFinance from './RechartTooltip/CustomTooltipForSchoolFinance';

export default function FinanceChart({ isLoading, data }) {
    let d = 0
    return (
        <>
            {!isLoading ? (
                <div className='w-full md:w-8/12 h-96 bg-white pt-5 pb-14 pr-5 rounded-md shadow-md my-3 lg:ml-5'>
                    <div className='flex justify-between items-center mb-5'>
                        <div className='w-6/12'>
                            <h1 className='text-md font-bold ml-5'>School Finance</h1>
                        </div>
                        <div className='w-6/12 lg:flex justify-between items-center hidden'>
                            <div>
                                <label htmlFor="students">Students</label>
                                <input id='students' type="checkbox" name="" />
                            </div>
                            <div>
                                <label htmlFor="teachers">Teachers</label>
                                <input type="checkbox" name="" id="teachers" />
                            </div>
                            <div>
                                <select className='px-5 py-1 rounded-full border border-purple-700'>
                                    <option value="">One Day</option>
                                    <option value="">One Month</option>
                                    <option value="">Six Month</option>
                                    <option value="">One Year</option>
                                    <option value="">Lifetime</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height="100%" >
                        <AreaChart
                            margin={0}
                            data={data}
                        >

                            <CartesianGrid strokeDasharray="3 3" />
                            <Legend iconType='circle' />
                            <Tooltip
                            labelClassName='tooltipLabel'
                            content={<CustomTooltipForSchoolFinance />}
                            />
                            <YAxis dataKey={'range'} />
                            <XAxis dataKey={'days'} interval="preserveEnd" />
                            <Area activeDot={{ r: 9 }} type="monotone" stackId="1" dataKey="income" stroke='#1ACB81FF' strokeWidth={5} fill="transparent" />
                            <Area activeDot={{ r: 9 }} type={'monotone'} stackId="1" dataKey="expance" strokeWidth={5} stroke="#F49121FF" fill="transparent" />
                        </AreaChart>
                    </ResponsiveContainer>
                    {console.log(data)}
                </div>
            ) : (
                <div>
                    <h1>Loading</h1>
                </div>
            )}
        </>
    )
}
