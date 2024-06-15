'use client'

/* eslint-disable @next/next/no-img-element */



import { Button } from "@/components/ui/button"

import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Search, ShoppingBag, Star } from "lucide-react"



const Page = () => {
    const router = useRouter()
    return (

        <div className="p-[80px] w-full ">
            <div className="mt-6 bg-transparent border rounded-lg  lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20"><form action="/search" className="flex flex-wrap justify-between md:flex-row"><input type="search" name="query" placeholder="Search Product" className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" /> <button type="submit" className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button></form></div>
            <div className="p-3 shadow-lg hover:transition hover:border-violet-800">
                <div >
                    <ul className="grid grid-cols-1 gap-8 p-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:p-2 xl:p-5">
                        <li 
                        className="relative  border rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:shadow-rose-400">

                            <div title="total components" className="absolute top-0 right-0 w-6 h-6 font-bold text-center text-gray-800 bg-white rounded-tr-md rounded-bl-md ">
                                <Star className="text-yellow-700 " />
                            </div>

                            <div className="flex justify-center p-2">
                                <div className="" >
                                    <img className="rounded-md object-contain" src="/macbook/1.png" alt="Product" />
                                </div>
                            </div>

                            <div className="px-4 pb-3">
                                <div>
                               {/***
                                *    <Button className="ml-3 p-5 text-xl font-semibold tracking-tight text-white hover:text-purple-800">
                                        <ShoppingBag />
                                    </Button>
                                */}
                                 

                                </div>
                            </div>
                            {/**
                             *       <span className="border text-center ml-2 text-gray-700 w-50px">
                                999$
                            </span>
                            <p>
                              Macbook Pro 2023  M2 16BG Ram 512 GB Ssd 
                            </p>
                             */}
                      
                          
                        </li>
                        <li className="relative bg-white border rounded-lg shadow-md cursor-pointer  hover:shadow-lg hover:shadow-rose-400">

                            <div title="total components" className="absolute top-0 right-0 w-6 h-6 font-bold text-center text-gray-800 bg-white rounded-tr-md rounded-bl-md ">
                                <Star />
                            </div>

                            <div className="flex justify-center p-2 ">
                                < >
                                    <img className="rounded-md  h-full" src="/iwatch/1.png" alt="Product" />
                                </>
                            </div>

                            <div className="px-4 pb-3">
                                <div>
                                    < >
                                        {}
                                    </>

                                </div>
                            </div>

                        </li>
                        <li className="relative bg-white border rounded-lg shadow-md cursor-pointer  hover:shadow-rose-400 ">

                            <div title="total components" className="absolute top-0 right-0 w-6 h-6 font-bold text-center text-gray-800 bg-white rounded-tr-md rounded-bl-md ">
                            <Star />
                            </div>

                            <div className="flex justify-center p-2 object-cover">
                                < >
                                    <img className="rounded-md object-contain " src="/phone/apple15.png" alt="Product" />
                                </>
                            </div>

                            <div className="px-4 pb-3">
                                <div>
                                    <a href="" className="text-xl font-semibold tracking-tight  ">
                                        
                                    </a>

                                </div>
                            </div>

                        </li>
                        <li className="relative bg-white border rounded-lg shadow-md cursor-pointer 0 hover:shadow-rose-400">

                            <div title="total components" className="absolute top-0 right-0 w-6 h-6 font-bold text-center text-gray-800 bg-white rounded-tr-md rounded-bl-md ">
                                <Star />
                            </div>

                            <div className="flex justify-center p-2">
                                <a href="" >
                                    <img className="rounded-md" src="/ipad/ipad.png" alt="Product" />
                                </a>
                            </div>

                            <div className="px-4 pb-3">
                                <div>
                                    <a className="text-xl font-semibold tracking-tight text-gray-900  ">
                                      {}
                                    </a>

                                </div>
                            </div>

                        </li>
                        <li className="relative bg-white border rounded-lg shadow-md cursor-pointer  hover:shadow-rose-400">

                            <div title="total components" className="absolute top-0 right-0 w-6 h-6 font-bold text-center text-gray-800 bg-white rounded-tr-md rounded-bl-md">
                                <Star />
                            </div>

                            <div className="flex justify-center p-2">
                                <a href=""   >
                                    <img className="rounded-md" src="/airpods/1.png" alt="Product" />
                                </a>
                            </div>

                            <div className="px-4 pb-3">
                                <div>
                                    <a href="" className="text-xl font-semibold tracking-tight text-gray-900 hover:text-primary-800 ">
                                        {}
                                    </a>

                                </div>
                            </div>

                        </li>
                        <li className="relative bg-white border rounded-lg shadow-md cursor-pointer  hover:shadow-rose-400">

                            <div title="total components" className="absolute top-0 right-0 w-6 h-6 font-bold text-center text-gray-800 bg-white rounded-tr-md rounded-bl-md ">
                                <Star/>
                            </div>

                            <div className="flex justify-center p-2">
                                <a href="/" >
                                <img className="rounded-md" src="/aplle/tv.png" alt="Product" />
                                </a>
                            </div>

                            <div className="px-4 pb-3">
                                <div>
                                    <a href="" className="text-xl font-semibold tracking-tight text-gray-900 hover:text-primary-800 ">
                                        {}
                                    </a>

                                </div>
                            </div>

                        </li>
                        <li className="relative bg-white border rounded-lg shadow-md cursor-pointer  hover:shadow-rose-400">

                            <div title="total components" className="absolute top-0 right-0 w-6 h-6 font-bold text-center text-gray-800 bg-white rounded-tr-md rounded-bl-md">
                                <Star />
                            </div>

                            <div className="flex justify-center p-2">
                                <a href="" >
                                    <img className="rounded-md" src="samsung.png" alt="Feature showcase" />
                                </a>
                            </div>

                            <div className="px-4 pb-3">
                                <div>
                                    <a href="" className="text-xl font-semibold tracking-tight text-gray-900">
                                        {}
                                    </a>

                                </div>
                            </div>

                        </li>
                        <li className="relative bg-white border rounded-lg shadow-md cursor-pointer  hover:shadow-rose-400">

                            <div title="total components" className="absolute top-0 right-0 w-6 h-6 font-bold text-center text-gray-800 bg-white ">
                                <Star />
                            </div>

                            <div className="flex justify-center p-2">
                                <a href="" >
                                    <img className="rounded-md" src="white.jpg" alt="Product" />
                                </a>
                            </div>

                            <div className="px-4 pb-3">
                                <div>
                                    <a href="" className="text-xl font-semibold tracking-tight text-gray-900">
                                        {}
                                    </a>

                                </div>
                            </div>

                        </li>
                        <li className="relative bg-white border rounded-lg shadow-md cursor-pointer  hover:shadow-rose-400">

                            <div title="total components" className="absolute top-0 right-0 w-6 h-6 font-bold text-center text-gray-800 bg-white rounded-tr-md rounded-bl-md ">
                                <Star />
                            </div>

                            <div className="flex justify-center p-2">
                                <a href="">
                                    <img className="rounded-md" src="key.webp" alt="Product" />
                                </a>
                            </div>

                            <div className="px-4 pb-3">
                                <div>
                                    <a href="" className="text-xl font-semibold tracking-tight text-gray-900 hover:text-primary-800 ">
                                        {}
                                    </a>

                                </div>
                            </div>

                        </li>
                        <li className="relative bg-white border rounded-lg shadow-md cursor-pointer  hover:shadow-rose-400">

                            <div title="total components" className="absolute top-0 right-0 w-6 h-6 font-bold text-center text-gray-800 bg-white rounded-tr-md rounded-bl-md ">
                                <Star />
                            </div>

                            <div className="flex justify-center p-2">
                                <a href="" >
                                    <img className="rounded-md" src="/mouse.webp" alt="Product" />
                                </a>
                            </div>

                            <div className="px-4 pb-3">
                                <div>
                                    <a href="" className="text-xl font-semibold tracking-tight text-gray-900 hover:text-primary-800 ">
                                        {}
                                    </a>

                                </div>
                            </div>

                        </li>
                        <li className="relative bg-white border rounded-lg shadow-md cursor-pointer  hover:shadow-rose-400">

                            <div title="total components" className="absolute top-0 right-0 w-6 h-6 font-bold text-center text-gray-800 bg-white rounded-tr-md rounded-bl-md dark:bg-slate-800">
                                <Star />
                            </div>

                            <div className="flex justify-center p-2">
                                <a href="" >
                                    <img className="rounded-md" src="/monitor.jpg" alt="Product" />
                                </a>
                            </div>

                            <div className="px-4 pb-3">
                                <div>
                                    <a href="" className="text-xl font-semibold tracking-tight text-gray-900 hover:text-primary-800 dark:hover:text-primary-300 dark:text-white">
                                        {}
                                    </a>

                                </div>
                            </div>

                        </li>
                        <li className="relative bg-white border rounded-lg shadow-md cursor-pointer  hover:shadow-rose-400">

                            <div title="total components" className="absolute top-0 right-0 w-6 h-6 font-bold text-center text-gray-800 bg-white rounded-tr-md rounded-bl-md dark:bg-slate-800">
                                <Star />
                            </div>

                            <div className="flex justify-center p-2">
                                <a href="" >
                                    <img className="rounded-md" src="/chair.jpg" alt="Product" />
                                </a>
                            </div>

                            <div className="px-4 pb-3">
                                <div>
                                    <a href="" className="text-xl font-semibold tracking-tight text-gray-900 hover:text-primary-800 ">
                                       
                                    </a>

                                </div>
                            </div>

                        </li>
                    </ul>
                </div>

            </div>

        </div>

    )
}

{/****
      <div className="grid grid-cols-3 p-4 md:p-10 sm:p-10 md:grid-cols-6 gap-8  h-[100px] sticky"> 
        <Button onClick={() => router.push('/macbook')}
         className=" hover:text-white text-black shadow shadow-slate-300 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3">Macbbok</Button>
        <Button onClick={() => router.push('/phone')}
        className=" hover:text-white text-black shadow shadow-slate-300 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3">Iphone</Button>
        <Button onClick={() => router.push('/watch')}
        className=" hover:text-white text-black shadow shadow-slate-300 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3">IWatch</Button>
        <Button onClick={() => router.push('/airpods')}
        className=" hover:text-white text-black shadow shadow-slate-300 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3">AirPods</Button>
        <Button onClick={() => router.push('/ipad')}
        className=" hover:text-white text-black shadow shadow-slate-300 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3">IPad</Button>
        <Button onClick={() => router.push('/other')}
        className=" hover:text-white text-black shadow shadow-slate-300 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3">Other Category</Button>
      </div> */}

export default Page
