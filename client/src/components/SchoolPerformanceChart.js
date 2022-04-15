import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
export default function SchoolPerformanceChart({ isLoading, data }) {

    return (
        <>
            {!isLoading ? (
                <div className='w-full md:w-8/12 h-96 bg-white pt-5 pb-20 px-5 rounded-md shadow-md my-3 mr-3'>
                    <div className='flex justify-between items-center mb-5'>
                        <div className='w-6/12'>
                            <h1 className='text-md font-bold'>School Performance</h1>
                        </div>
                        <div className='w-6/12 lg:flex hidden justify-between items-center'>
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
                            margin={10}
                            data={data}
                        >
                            <defs>
                                <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8c4af2" stopOpacity={0.7} />
                                    <stop offset="95%" stopColor="#8c4af2" stopOpacity={0.2} />
                                </linearGradient>
                                <linearGradient id="colorTeachers" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#32B899FF" stopOpacity={0.7} />
                                    <stop offset="95%" stopColor="#32B899FF" stopOpacity={0.2} />
                                </linearGradient>
                            </defs>

                            <CartesianGrid strokeDasharray="3 3" />
                            <Legend />
                            <Tooltip />
                            <YAxis dataKey={'value'} />
                            <XAxis dataKey={'y'} interval="preserveEnd" />
                            <Area type="monotone" stackId="1" dataKey="students" stroke="#8c4af2" strokeWidth={5} fill="url(#colorStudents)" />
                            <Area type={'monotone'} stackId="1" dataKey="teachers" strokeWidth={5} stroke='#32B899FF' fill="url(#colorTeachers)" />
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
