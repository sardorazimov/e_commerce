/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Hero = () => {
    return (
        <div>
            <div className="w-full h-screen overflow-hiddden">
                <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-lg">
                    <div className="flex-1 flex justify-between items-center">
                        <img className="sm:w-[10rem] xs:w-[7rem] z-10" src="" alt="Logo" />
                    </div>
                    <label  className="pointer-cursor md:hidden block">
                        <svg className="fill-current " xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <title>menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </label>
                    <input className="hidden" type="checkbox" id="menu-toggle" />

                    <div className="hidden md:flex md:items-center md:w-auto w-full z-10  gap-7"  id="menu">
                        <nav>
                            <ul className="md:flex items-center justify-between text-base pt-4 md:pt-0">
                                <li><a className="md:p-4 py-3 px-0 block text-rose-500 hover:text-rose-500" href="#">Home</a></li>
                                <li><a className="md:p-4 py-3 px-0 block hover:text-rose-500" href="#">About Me</a></li>
                                <li><a className="md:p-4 py-3 px-0 block hover:text-rose-500" href="#">Education</a></li>
                                <li><a className="md:p-4 py-3 px-0 block hover:text-rose-500" href="#">Experience</a></li>
                                <li><a className="md:p-4 py-3 px-0 block hover:text-rose-500" href="#">Projects</a></li>
                                <li><a className="md:p-4 py-3 px-0 block hover:text-rose-500 md:mb-0 mb-2" href="#">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <div
                    className="absolute hidden sm:block md:top-20 sm:top-[8%] xs:top-[10%] lg:left-[35%] md:right-[20%] sm:left-[18%] xs:left-[10%]">
                    <img className="xl:h-[500px] md:h-[450px] sm:h-[480px]" src="https://techakim.com/sam/tg/7268/li/imgs/2.png" alt="Incognito Image" />
                </div>

                <div
                    className="lg:px-16 xs:px-4 px-8 pb-4 h-full flex xs:flex-col sm:flex-row sm:items-center xs:mt-10 sm:mt-0 ">

                    <div className="w-full flex flex-col z-10">
                        <h4 className="text-lg font-semibold ">Hey There</h4>
                        <h1 className="sm:text-6xl xs:text-3xl font-semibold font-serif mt-2">I`m
                            <span className="">Samuel</span>
                        </h1>
                        <h1 className="sm:text-6xl xs:text-3xl font-semibold font-serif">Abera</h1>
                        <h4 className="text-rose-500 mt-4">--FullStack Developer</h4>

                        <p className="lg:w-[70%] xs:w-full  text-sm mt-4">Experienced full-stack developer with 4+ years
                            of expertise in Laravel, NestJS, Nuxt.js, Next.js, Android, and some Flutter experience.</p>

                        <div>
                            <button className="mt-6 px-6 py-1 bg-rose-500  rounded-sm">Get In Touch</button>
                        </div>
                    </div>


                    <div
                        className="w-full flex sm:flex-col xs:justify-center xs:mt-4 sm:mt-0 sm:gap-8 xs:gap-2 xs:bg-gray-700/60 sm:bg-transparent p-4 rounded-lg z-10">
                        <div className="flex flex-col sm:items-end xs:items-center">
                            <div className="inline-flex gap-1 items-center">
                                <h2 className="md:text-7xl sm:text-6xl xs:text-3xl font-semibold">4</h2>
                                <h2 className="text-rose-500 md:text-7xl sm:text-6xl xs:text-3xl font-extrabold">+</h2>
                            </div>
                            <h4 className="xs:text-sm sm:text-lg xs:text-center">Years of Expireance</h4>
                        </div>
                        <div className="flex flex-col sm:items-end xs:items-center">
                            <div className="inline-flex gap-1 items-center">
                                <h2 className="md:text-7xl sm:text-6xl xs:text-3xl font-semibold">25</h2>
                                <h2 className="text-rose-500 md:text-7xl sm:text-6xl xs:text-3xl font-extrabold">+</h2>
                            </div>
                            <h4 className="xs:text-sm sm:text-lg xs:text-center">Component Contribution</h4>
                        </div>
                        <div className="flex flex-col sm:items-end xs:items-center">
                            <div className="inline-flex gap-1 items-center">
                                <h2 className="md:text-7xl sm:text-6xl xs:text-3xl font-semibold">15K</h2>
                                <h2 className="text-rose-500 md:text-7xl sm:text-6xl xs:text-3xl font-extrabold">+</h2>
                            </div>
                            <h4 className="xs:text-sm sm:text-lg xs:text-center">Users Got Help</h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero
