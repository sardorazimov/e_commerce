'use client'

/* eslint-disable @next/next/no-img-element */


import MenuNavbar from "@/components/MenuNavbar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Plus } from "lucide-react"
import { useRouter } from "next/navigation"



const Page = () => {
  const router = useRouter()
  return (
    <div className="w-full h-full p-[40px] ">
     
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
      </div>
      <div className=" py-12 ">
    <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold  mb-8 text-gray-900">Introducing Our Latest Product</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className=" rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                    <img className="object-cover w-full h-full" src="/macbook/1.png" alt="Product" />
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className=" text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">Macbook Pro </h3>
                <p className="text-gray-500 text-sm mt-2">Macbook Pro 2023 M3 Chip 8GB ram 256GB SSD </p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-lg">$1000</span>
                    <span className="bg-gray-900 text-white  rounded">
                      <Plus className="w-14 h-6" />
                    </span>
                    <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                </div>
            </div>
            <div className=" rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                    <img src="/phone/1.png" className="object-cover w-full h-full" alt="Product" />
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className=" text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">Apple 12Pro 256GB</h3>
                <p className="text-gray-500 text-sm mt-2">Apple 12Pro 256GB Display FullHD 6*9 Batery 4200mhz Camera Selfy 12px</p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-lg">$840</span>
                    <span className="bg-gray-900  rounded">
                      <Plus className="w-14 h-6" />
                    </span>
                    <button className="bg-gray-900  py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                </div>
            </div>
            <div className=" rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                    <img className="object-cover w-full h-full" src="/ipad/ipad.png" alt="Product" />
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className=" text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">Apple Ipad</h3>
                <p className="text-gray-500 text-sm mt-2">Apple Ipad 64GB Wifi space no-sm </p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-lg">$400.99</span>
                    <span className="bg-gray-900  rounded">
                      <Plus className="w-14 h-6" />
                    </span>
                    <button className="bg-gray-900 py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                </div>
            </div>
            <div className=" rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                    <img className="object-cover w-full h-full" src="/airpods/1.png" alt="Product" />
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className=" text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">Apple AirPods</h3>
                <p className="text-gray-500 text-sm mt-2">Apple enjoy music and relax</p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-lg">$99.99</span>
                    <span className="bg-gray-900  rounded">
                      <Plus className="w-14 h-6" />
                    </span>
                    <button className="bg-gray-900 py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                </div>
            </div>
            <div className=" rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                    <img className="object-cover w-full h-full" src="/iwatch/1.png" alt="Product" />
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className=" text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">Apple</button>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">Apple Watch</h3>
                <p className="text-gray-500 text-sm mt-2">Apple Ipad 64GB Wifi space no-sm </p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-lg">$150</span>
                    <span className="bg-gray-900  rounded">
                      <Plus className="w-14 h-6" />
                    </span>
                    <button className="bg-gray-900 py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                </div>
            </div>
            <div className=" rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                    <img className="object-contain w-full h-full" src="/aplle/hero-2.png" alt="Product" />
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className=" text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">Apple</button>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">Apple Watch</h3>
                <p className="text-gray-500 text-sm mt-2">Apple Ipad 64GB Wifi space no-sm </p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-lg">$150</span>
                    <span className="bg-gray-900  rounded">
                      <Plus className="w-14 h-6" />
                    </span>
                    <button className="bg-gray-900  py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                </div>
            </div>
        </div>

    </div>
</div>
    </div>
  )
}

export default Page
