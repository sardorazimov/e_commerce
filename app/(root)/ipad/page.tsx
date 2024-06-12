import React from 'react'

const Page = () => {
  return (
    <div className='p-[100px]'>
      <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20"><form action="/search" className="flex flex-wrap justify-between md:flex-row"><input type="search" name="query" placeholder="Search Components"  className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" /> <button type="submit" className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button></form></div>
    </div>
  )
}

export default Page
