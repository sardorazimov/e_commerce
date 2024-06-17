'use client'
/* eslint-disable @next/next/no-img-element */


import { Separator } from "@/components/ui/separator";
import { CreditCard, FoldVerticalIcon, MoveDownIcon, Share, ShoppingBag } from "lucide-react";
import Product from "./product";
import Fovorite from "./Fovorite";
import MacTitle from "./MacTitle";
import Color from "./Color";
import MacSel from "./MacSel";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Category from "./category";

function changeColor(color: 'black' | 'white'): void {
  const mainImage = document.getElementById('main-image') as HTMLImageElement;
  if (color === 'black') {
    mainImage.src = 'black-cup.png';
  } else {
    mainImage.src = 'white-cup.png';
  }

  const colorOptions = document.querySelectorAll('.color-option');
  colorOptions.forEach((option: Element) => {
    option.classList.remove('border-blue-500');
    option.classList.remove('ring-2');
  });

  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach((thumb: Element) => {
    thumb.classList.remove('border-blue-500');
    thumb.classList.remove('ring-2');
  });

  document.querySelector(`.color-option[onclick="changeColor('${color}')"]`)?.classList.add('border-blue-500', 'ring-2');
  document.querySelector(`.thumbnail[onclick="changeImage('${color}')"]`)?.classList.add('border-blue-500', 'ring-2');
}

function changeImage(color: 'black' | 'white'): void {
  changeColor(color);
}


const Page = () => {
  return (
    <div className="">

<div className='p-[10px]'>
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid  max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">

            <div className="lg:pr-4">
              <div className="relative overflow-hidden rounded-3xl  px-6 pb-9 pt-64  sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 border border-black bg-transparent">
                <img className="absolute inset-0 h-full w-full object-contain brightness-125 saturate-0" 
                src="/macbook/1.png" alt="" />

                <div className="absolute inset-0  mix-blend-multiply"></div>
                <div className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl" aria-hidden="true">
                  <div className="aspect-[1097/845] w-[68.5625rem]" ></div>
                </div>
                <div className="relative isolate">
                  <svg viewBox="0 0 162 128" fill="none" aria-hidden="true" className="absolute -left-2 -top-4 -z-10 h-32 stroke-white/20">

                    <use href="#0ef284b8-28c2-426e-9442-8655d393522e" x="86" />
                  </svg>
                  <div className="mt-6 text-xl font-semibold leading-8 text-white">
                    <p></p>
                  </div>
                  <figcaption className="mt-6 text-sm leading-6 text-gray-300"><strong className="font-semibold text-white"></strong></figcaption>
                </div>
              </div>
              <Separator />
              <Product />
            </div>
            <div>
              <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                <p className="text-3xl font-semibold leading-7 text-yellow-400">Aplle Macbook </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Product Details</h1>
                <div className="max-w-xl">
                  <MacTitle />
                  <Fovorite />
                </div>

              </div>

              <div className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
                <div>
                  <div className="text-sm font-semibold leading-6 text-gray-600">Other Macbook</div>
                   <MacSel />
                </div>
                <div>
                  <div className="text-sm font-semibold leading-6 text-gray-600">Colors
                    <Color/>
                  </div>

                </div>
                <div>
                  <div className="text-sm font-semibold leading-6 text-gray-600">Countries</div>
                  <div className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">None</div>
                </div>
                <div>
                  <div className="text-sm font-semibold leading-6 text-gray-600">Price</div>
                  <div className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">$850</div>
                </div>
              </div>
              <div className="mt-10 flex">
                <Link href="#" className="text-base font-semibold leading-7 text-yellow-500"><Share/></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separator />
     <Button className='animate-bounce  text-center  text-white bg-green-500  '>Other Macbook Category <MoveDownIcon /> </Button>
    
      <Category />
    </div>
    </div>
  )
}

export default Page
