/* eslint-disable @next/next/no-img-element */


import { Separator } from "@/components/ui/separator";
import { CreditCard, FoldVerticalIcon, ShoppingBag } from "lucide-react";

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
    <div className=" w-full h-full p-[80px]">

      <div className="flex font-sans  ">
        <div className="flex-none p-[40px] w-[700px] relative h-[750px] border-black ">
          <img src="/macbook/1.png" alt="" className="absolute inset-0 w-full h-full object-contain rounded-lg" />
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto font-medium text-slate-900">
              Macbook Pro
            </h1>
            <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600">
              $999.00
            </div>
            <div className="text-sm font-medium text-white h-">
              <button className="bg-green-600 rounded-lg">
                Other Product
              </button>
            </div>
          </div>
          <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
            <div className="space-x-2 flex text-sm font-bold">
              <label>
                <input className="sr-only peer" name="size" type="radio" value="xs" checked />
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 bg-neutral-400 peer-checked:text-white">
                  { }
                </div>
                <h1 className="text-neutral-400">Silver</h1>
              </label>
              <label>
                <input className="sr-only peer" name="size" type="radio" value="s" />
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 bg-black peer-checked:text-white">
                  { }
                </div>
                <h1>Black</h1>
              </label>
              <label>
                <input className="sr-only peer" name="size" type="radio" value="m" />
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">

                </div>
              </label>
              <label>
                <input className="sr-only peer" name="size" type="radio" value="l" />
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">

                </div>
              </label>
              <label>
                <input className="sr-only peer" name="size" type="radio" value="xl" />
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">

                </div>
              </label>
            </div>
          </div>
          <div className="flex space-x-4 mb-5 text-sm font-medium">
            <div className="flex-auto flex space-x-4">
              <button className="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white" type="submit">
                Buy now
              </button>
              <button className="h-10 px-6 font-semibold rounded-full border border-slate-200 text-slate-900" type="button">
                Go
              </button>
            </div>
            <button className="flex-none flex items-center justify-center w-9 h-9 rounded-full text-violet-600 bg-violet-50" type="button" aria-label="Like">
              <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-slate-700">
            Apple 2020 13 MacBook Pro TB 2GHz Quad-Core i5 16GB 512GB SSD - Very GoodOpens in a new window or tab
            Very Good - Refurbished · 2020 · 13 in · 512 GB
          </p>
          <Separator />
          <div className=" grid grid-cols-4 p-[12px] border-blue-700">
            <div className="w-[62px] h-70px ">
              <img src="/macbook/1.png" alt="" className="w-12 h-12 object-contain" />
              <h1>Macbook Air  M1 </h1>
              <button className="bg-blue-600 text-white rounded">
               Product
              </button>
            </div>
            <div>
              <img src="/macbook/1.png" alt="" className="w-12 h-12 object-contain" />
              <h1>Macbook Air  M1 </h1>
            </div>
            <div>
              <img src="/macbook/1.png" alt="" className="w-12 h-12 object-contain" />
              <h1>Macbook Air  M1 </h1>
            </div>
            <div>
              <img src="/macbook/1.png" alt="" className="w-12 h-12 object-contain" />
              <h1>Macbook Air  M1 </h1>
            </div>

           
          </div>
        </form>

      </div>

    </div>
  )
}

export default Page
