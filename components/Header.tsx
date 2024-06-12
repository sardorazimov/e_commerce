/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import { Separator } from './ui/separator'




import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {


} from "@/components/ui/dropdown-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, User } from 'lucide-react'
import Link from 'next/link'


const Header = () => {

  const { setTheme } = useTheme()

  return (
    <div>
      <nav className="bg-gray-950 border-gray-200 py-2.5 fixed w-full active:blur-sm ">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Link href={'/'} className="flex items-center">
            
            <span className="self-center text-xl font-semibold text-white ">Online Shop</span>
          </Link>
          <div className="flex items-center lg:order-2">
            <div className="hidden mt-2 mr-4 sm:inline-block">
              <span></span>
            </div>

            <Button className="bg-white text-black font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0"
            >Login</Button>
            <button data-collapse-toggle="mobile-menu-2" type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2" aria-expanded="true">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Menu className=' rounded  text-white' />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Shop</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </button>
          </div>
          <div className=" hidden items-center justify-between w-full lg:flex lg:w-auto lg:order-1" >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              
                {/**
                 *  <li>    <a href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0">Home</a>
              </li>
              <li>
                <a href="#"
                  className="block py-2 pl-3 pr-4
                   text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0
                    lg:hover:text-purple-700 lg:p-0 0">Company</a>
              </li>
                 */}
           
              <li>
                <a href="#"
                  className="block py-2 pl-3 pr-4 text-white border-b border-gray-100">Marketplace</a>
              </li>
              <li>
                <a href="#"
                  className="block py-2 pl-3 pr-4 text-white border-b border-gray-100">Features</a>
              </li>
              <li>
                <a href="#"
                  className="block py-2 pl-3 pr-4 text-white border-b border-gray-100">Team</a>
              </li>
              <li>
                <a href="#"
                  className="block py-2 pl-3 pr-4 text-white border-b border-gray-100">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </div>
  )
}

export default Header

