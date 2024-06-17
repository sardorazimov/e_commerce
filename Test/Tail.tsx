/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const Tail = () => {
    return (
        <div>
            <div className='p-1 '>
                <ul className='grid grid-cols-1 gap-8 px-1 md:grid-cols-2 
         lg:grid-cols-3 md:p-2 xl:p-4'>
                    <li className='relative flex w-full gap-4 p-2 border border-gray-700 rounded'>
                        <div className='absolute flex justify-center gap-1 w-10 text-xl font-bold 
                 text-center text-green-800 -top-2 -left-2'>
                            <span className='self-end text-gray-800 text-sm'>
                                1
                            </span>
                        </div>
                        <Link href={'/'} className='w-full overflow-hidden rounded'>
                            <img src="/user/opa.png" alt="Opa" className='object-cover my-auto rounded w-28 h-28' />
                        </Link>
                        <div className='flex flex-col justify-between flex-grow gap03 px-2'>
                            <div className='w-full'>
                                <Link href={'/'} className='font-semibold md:text-xl text-black'>
                                    Halle Nalle
                                </Link>
                                <p className='pt-1 text-sm text-black '>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                            <div className='flex items-center justify-between gap-1'>
                                <div className='text-sm text-gray-700'>
                                    lorem
                                </div>
                                <div className='flex items-center gap-1 px-2 py-1 text-gra-700 rounded cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"></path>
                                    </svg>
                                    <span>
                                        Lorem Opa
                                    </span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Tail

