import { Separator } from '@/components/ui/separator'
import React from 'react'

const MacTitle = () => {
    return (
        <div className='grid grid-cols-2 gap-1 p-1 '>
            <div className='text-orange-600 transition delay-150 duration-300 ease-in-out cursor-pointer'>
                <div className='relative  text-xl'>
                    <h1>Model:</h1>
                </div>
            </div>
            <div className='relative  text-xl'>
                <h1>Apple MacBook </h1>
            </div>
            <div className='text-orange-600'>
                <div className='relative  text-xl'>
                    <h1>Ram:</h1>
                </div>
            </div>
            <div className='relative  text-xl'>
                <h1>16BG </h1>
            </div>
            <div className='text-orange-600'>
                <div className='relative  text-xl'>
                    <h1>Stroge:</h1>
                </div>
            </div>
            <div className='relative  text-xl'>
                <h1>256BG </h1>
            </div>

            <div className='text-orange-600'>
                <div className='relative  text-xl'>
                    <h1>Sim:</h1>
                </div>
            </div>
            <div className='relative  text-xl'>
                <h1>No </h1>
            </div>
            <div className='text-orange-600'>
                <div className='relative  text-xl'>
                    <h1>Wifi:</h1>
                </div>
            </div>
            <div className='relative  text-xl'>
                <h1>Wifi-4,Wifi5, </h1>
            </div>
            <div className='text-orange-600'>
                <div className='relative  text-xl'>
                    <h1>Sim:</h1>
                </div>
            </div>
            <div className='relative  text-xl'>
                <h1>No </h1>
            </div>
            <div className='text-orange-600'>
                <div className='relative  text-xl'>
                    <h1>Color:</h1>
                </div>
            </div>
            <div className='relative  text-xl'>
                <h1>Space Gray </h1>
            </div>
            <div className='text-orange-600'>
                <div className='relative  text-xl'>
                    <h1>Battery:</h1>
                </div>
            </div>
            <div className='relative  text-xl'>
                <h1>16 clock</h1>
            </div>
            <Separator />
        </div>
    )
}

export default MacTitle
