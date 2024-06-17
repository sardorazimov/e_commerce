import { Separator } from '@/components/ui/separator'
import React from 'react'

const Title = () => {
    return (
        <div className='grid grid-cols-2 gap-1 p-1 '>
            <div className='text-orange-600 transition delay-150 duration-300 ease-in-out cursor-pointer'>
                <div className='relative  text-xl'>
                    <h1>Model:</h1>
                </div>
            </div>
            <div className='relative  text-xl'>
                <h1>Apple Watch </h1>
            </div>
     
            <Separator />
        </div>
    )
}

export default Title