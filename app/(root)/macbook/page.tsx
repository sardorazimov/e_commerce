/* eslint-disable @next/next/no-img-element */


import { CreditCard, ShoppingBag } from "lucide-react";


const Page = () => {
  return (
    <div className="mx-auto p-4 max-w-screen-xl">
      <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8">
          <section  className="flex flex-col rounded-lg border border-neutral-200
    bg-white md:p-12 lg:gap-[20px] ">
     <div className="h-hull w-full basis-full lg:basis-4/6">
      <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
        <img src="/macbook/1.png" alt="Macbook" className="h-full w-full object-contain"  
            />
        <div className="absolute bottom-[15%] flex w-full justify-center">
          <div className="mx-auto flex h-11 itmes-center rounded-full border
           border-white bg-neutral-50/80 text-neutral-500 backdrop-blur ">
            <a href="" className="h-full px-6 trnasition-all ease-in-out hover:scale-110 hover:text-black 
             flex items-center justify-center">
               <ShoppingBag />
             </a>
             <div className="mx-1 h-6 w-px bg-neutral-500"></div>
             <a href="" className="h-full px-6 trnasition-all ease-in-out hover:scale-110 hover:text-black 
             flex items-center justify-center">
              <ShoppingBag />
             </a>
           </div>
        </div>
      </div>
      <ul className="my-12 flex items-center justify-center gap-2 overflow-hidden lg:mb-0" >
        <li className="h-20 w-20">
          <a href="" className="h-full w-full">
            <div className=" flex h-full w-full group items-center justify-center overflow-hidden
            rounded-lg border- bg-white hover:border-blue-600
            border-2 border-blue-600">
              <img src="/macbook/1.png" alt=""  className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-110"
              srcSet="/macbook/1.png"/>
            </div>
          </a>
        </li>
        <li className="h-20 w-20">
          <a href="" className="h-full w-full">
            <div className=" flex h-full w-full group items-center justify-center overflow-hidden
            rounded-lg border- bg-white hover:border-blue-600
            border-2 border-blue-600">
              <img src="/macbook/1.png" alt=""  className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-110"
              srcSet="/macbook/1.png"/>
            </div>
          </a>
        </li>
        <li className="h-20 w-20">
          <a href="" className="h-full w-full">
            <div className=" flex h-full w-full group items-center justify-center overflow-hidden
            rounded-lg border- bg-white hover:border-blue-600
            border-2 border-blue-600">
              <img src="/macbook/1.png" alt=""  className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-110"
              srcSet="/macbook/1.png"/>
            </div>
          </a>
        </li>
      </ul>
     </div>
     <div className="basis-full lg:basis-2/6">
      <div className="mb-6 flex flex-col border-b pb-6  ">
        <h1 className="mb-2 text-5xl font-medium"></h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <p>999$</p>
          <span>USD</span>
        </div>
      </div>
      <div className="mb-8">
        <div className="mb-4 text-sm uppercase tracking-wide">Colors</div>
        <div className="flex flex-wrap gap-8">
          <button className="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 ">Black</button>
          <button className="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 ">Silver</button>
          <button className="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 relative z-10 cursor-not-allowed overflow-hidden  text-neutral-500 ring-1 ring-neutral-300 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform  dark:text-neutral-400 dark:ring-neutral-700 before:dark:bg-neutral-700">
            {}
          </button>
        </div>
      </div>
      <div className="mb-8">
        <div className="prose mx-auto max-w-6xl  text-black prose-headings:mt-8 prose-headings:font-semibold prose-headings:tracking-wide prose-headings:text-black prose-h1:text-5xl 
        prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-a:text-black prose-a:underline hover:prose-a:text-neutral-300 prose-strong:text-black prose-ol:mt-8 prose-ol:list-decimal prose-ol:pl-6 prose-ul:mt-8 prose-ul:list-disc prose-ul:pl-6
         dark:text-white dark:prose-headings:text-white dark:prose-a:text-white dark:prose-strong:text-white mb-6 text-sm leading-tight dark:text-white/[60%]">40% </div>
         <form action="" className="">
          <button className="relative flex w-full items-center justify-center rounded-full
           bg-blue-500 p-4 tracking-wide text-white cursor-not-allowed opacity-60 hover:opacity-80">
            <div className="absolute left-0 ml-4">
              <CreditCard />
              Add Card
            </div>
            <p className="sr-only">MAcbook</p>
          </button>
         </form>
      </div>
     </div>
   </section>
      </div>
    </div>
 
  )
}

export default Page
