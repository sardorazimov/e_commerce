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
      <header className="fixed w-full bg-white dark:bg-slate-950 dark:border-separate dark:text-white">
        <nav className="flex justify-between items-center w-[92%]  mx-auto">
          <div>
           <Link href={'/'} className='text-3xl md:text-xl font-mono'>Online Shop</Link>
          </div>
          <div
            className="  duration-500 md:static absolute  md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
            <ul className="flex md:flex-row  flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <a className="hover:text-gray-500 " href="#">Products</a>
                <Separator />
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">Solution</a>
                <Separator />
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">Resource</a>
                <Separator />
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">Developers</a>
                <Separator />
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">Pricing</a>
                <Separator />
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <User />
            <DropdownMenu >
              <DropdownMenuTrigger className='xl:hidden'>
                <Menu />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

          </div>
        </nav>
      </header>
      <Separator className='bg-black dark:bg-white' />
    </div>
  )
}

export default Header

