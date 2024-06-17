import React from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'
import { Separator } from './ui/separator'

const Hero = () => {
    return (
        <div>
            <div className="flex flex-wrap justify-center gap-8 pt-4 pb-8 mx-auto">

                <div className="z-10 max-w-sm p-6 text-center text-green-800 cursor-pointer">
                    <svg className="w-16 h-16 mx-auto  " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"></path>
                    </svg>

                    <h2 className="mt-2 text-lg font-semibold  ">
                        Tailwind Playground
                    </h2>

                    <p className="mt-2 ">
                        Experience the power of Tailwind CSS - Play around in our playground, with live preview and a user-friendly
                        code editor.
                    </p>
                </div>

                <div className="z-10 max-w-sm p-6 text-center text-green-800 cursor-pointer">
                    <svg className="w-16 h-16 mx-auto  " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"></path>
                    </svg>


                    <h2 className="mt-2 text-lg font-semibold  ">
                        Create, Save, Share.
                    </h2>

                    <p className="mt-2   ">
                        Create, save, share and organize your components with ease.
                        Save your own designs, share them with others, and keep your favorites at hand for easy access.
                    </p>
                </div>

                <div className="z-10 max-w-sm p-6 text-center text-green-800 cursor-pointer">
                    <svg className="w-16 h-16 mx-auto text-green-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                    </svg>

                    <h2 className="mt-2 text-lg font-semibold  ">
                        User profile
                    </h2>

                    <p className="mt-2  ">
                        Make a name for yourself - Create a good profile and showcase your web designing skills to the world.
                    </p>
                </div>

            </div>
            <div className='flex flex-wrap justify-center gap-8 pt-4 pb-8 mx-auto text-green-800 '>
                <div className='z-10 max-w-sm p-6 text-center'>
                    <HoverCard>
                        <HoverCardTrigger>Hover</HoverCardTrigger>
                        <Separator />
                        <HoverCardContent>
                            The React Framework – created and maintained by @vercel.
                        </HoverCardContent>
                    </HoverCard>
                </div>
                <div className='z-10 max-w-sm p-6 text-center'>
                    <HoverCard>
                        <HoverCardTrigger>Hover</HoverCardTrigger>
                        <Separator />
                        <HoverCardContent>
                            The React Framework – created and maintained by @vercel.
                        </HoverCardContent>
                    </HoverCard>
                </div>
                <div className='z-10 max-w-sm p-6 text-center'>
                    <HoverCard>
                        <HoverCardTrigger>Hover</HoverCardTrigger>
                        <Separator />
                        <HoverCardContent>
                            The React Framework – created and maintained by @vercel.
                        </HoverCardContent>
                    </HoverCard>
                </div>

            </div>
        </div>
    )
}

export default Hero
