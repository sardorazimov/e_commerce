/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const page = () => {
  return (
    <div className="max-w-sm mx-auto mt-20 bg-white rounded-md shadow-md overflow-hidden">
      <div className="px-6 py-4 bg-green-900 text-white">
        <Link href={'/'} className='flex'>
        
        <h1 className="text-lg font-bold">Online Shoop</h1>
        </Link>
      </div>
      <div className="px-6 py-4">

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" >
            Card Number
          </label>
          <input
            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="card-number" type="text" placeholder="**** **** **** ****" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" >
            Expiration Date
          </label>
          <Input
            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="expiration-date" type="text" placeholder="MM/YY" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" >
            CVV
          </label>
          <Input
            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cvv" type="text" placeholder="***" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" >
            Cardholder Name
          </label>
          <Input
            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="Full Name" />
        </div>
        <div className='grid gap-2 grid-cols-2'>
          <div className='flex'>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button size={'default'} className='bg-red-600 hover:bg-red-200 rounded'>Cancel</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your
                  account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className=''>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button size={'lg'} className='bg-green-600  hover:bg-green-200 rounded'>Save</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your
                  account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        </div>
   
      </div>
    </div >
  )
}

export default page
{/**
               *       <div className='bg-red-600 rounded'>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className='bg-transparent hover:bg-red-200 rounded'>Show Dialog</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        account and remove your data from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
               */}
