import React from 'react'
import { Link } from 'react-router-dom'

export default function StudentsTableRow({ id, imageUrl, name, classDetails, classTo, to }) {
    return (
        <tr className="border-b">
            <td className='py-3 px-5'>{id}</td>
            <td className='py-3 px-5 flex justify-start items-center'>
                <img className='object-cover w-8 mr-2 rounded-full overflow-hidden h-8' src={`${imageUrl}`} alt="" />
                {name}
            </td>
            <td className='py-3 px-5'>
                <Link to={`${classTo}`} className='text-grad-to' >
                    {classDetails}
                </Link>
            </td>
            <td className='py-3 px-5'>
                <Link to={`${to}`} className='text-grad-to' >
                    view details
                </Link>
            </td>
        </tr>
    )
}
