'use client'
import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Fovorite = () => {
    const router = useRouter()
    return (
     <div className='grid gap-4 grid-cols-3 p-2'>
       <div className='mx-auto'>
       <div className='relative transition ease-in-out delay-150  
          hover:-translate-y-1 hover:scale-110  duration-300'>
          <Button className='bg-green-700 text-white' 
           onClick={() => router.push('/client')}>Add Cart</Button>
        </div>
      </div>
       <div className='mx-auto'>
       <div className='relative transition ease-in-out delay-150  
          hover:-translate-y-1 hover:scale-110  duration-300'>
          <Button className='bg-green-700 text-white'
            onClick={() => router.push('/heart')} >Add Fovorite
            <Heart className='ml-1' />
          </Button>
        </div>
      </div>
    </div>
    )
}

export default Fovorite
