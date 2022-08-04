import { Dialog, Transition } from '@headlessui/react';
import axios from 'axios';
import { Fragment, useRef } from 'react';
import { useForm } from 'react-hook-form';

export default function AddStudentPopup({ AddTeacherPopupIsOpen, setAddTeacherPopupIsOpen }) {
    const cancelButtonRef = useRef(null)
    const { register, handleSubmit } = useForm(); // initialize the hook
    const onSubmit = (data) => {
        console.log(data);
        data && axios.post(``, data).then((res) => {
            console.log(res);
        })
        // setAddTeacherPopupIsOpen(false)

    };
    return (
        <Transition.Root show={AddTeacherPopupIsOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setAddTeacherPopupIsOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />


                </Transition.Child>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mt-3 sm:mt-0 sm:ml-4 text-left">
                                                <Dialog.Title as="h3" className="text-center  text-lg leading-6 font-medium text-grad-to">
                                                    Add Student
                                                </Dialog.Title>
                                                <div className="mt-2 w-full">
                                                    <span className='text-xs ml-2'> Name <span className='text-red-600'>*</span></span>
                                                    <input placeholder='Name' className='border-2 h-10 px-3 border-gray-200 rounded-lg mb-2 w-full bg-gray-100' name='name' type="text" {...register("name", { required: true })} />

                                                    <span className='text-xs ml-2'> Email <span className='text-red-600'>*</span></span>
                                                    <input placeholder='Email' className='border-2 h-10 px-3 border-gray-200 rounded-lg mb-2 w-full bg-gray-100' name='email' type="email" {...register("email", { required: true })} />

                                                    <span className='text-xs ml-2'> Phone <span className='text-red-600'>*</span></span>
                                                    <input placeholder='Phone' className='border-2 h-10 px-3 border-gray-200 rounded-lg mb-2 w-full bg-gray-100' name='phone' type="text" {...register("phone", { required: true })} />

                                                    <span className='text-xs ml-2'> About <span className='text-red-600'>*</span></span>
                                                    <textarea placeholder='About' rows={5} className='border-2 px-3 border-gray-200 rounded-lg mb-2 w-full bg-gray-100' name='about' type="text" {...register("about", { required: true })} />

                                                    <span className='text-xs ml-2'> Special At <span className='text-red-600'>*</span></span>
                                                    <input placeholder='Spacial At (Subject)' className='border-2 h-10 px-3 border-gray-200 rounded-lg mb-2 w-full bg-gray-100' name='spacial_at' type="text"  {...register("spacial_at", { required: true })} />

                                                    <span className='text-xs ml-2'> Gander <span className='text-red-600'>*</span></span>
                                                    <select placeholder='Gander' name='gander' className='border-2 h-10 px-3 border-gray-200 rounded-lg mb-2 w-full bg-gray-100' {...register("gander", { required: true })}>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                        <option value="other">Other</option>
                                                    </select>

                                                    <span className='text-xs ml-2'> Date Of Birth <span className='text-red-600'>*</span></span>
                                                    <input placeholder='Date Of Birth' className='border-2 h-10 px-3 border-gray-200 rounded-lg mb-2 w-full bg-gray-100' name='date_of_birth' type="date" defaultValue="1999-01-01" {...register("date_of_birth", { required: true })} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                        <input
                                            value={'Submit'}
                                            type="submit"
                                            className="w-full items-center inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                                        />


                                        <button
                                            type="button"
                                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => setAddTeacherPopupIsOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </form>
            </Dialog>
        </Transition.Root>

    )
}