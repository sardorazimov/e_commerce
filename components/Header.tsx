'use client'
/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useScrolled } from "@/hooks/Ts/Scrolled"
import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    Heart,
    Moon,
    ShoppingBasket,
    Sun,
    User,
    UserPlus,
    Users,
    Menu,
} from "lucide-react"
import { Separator } from "./ui/separator"
import { cn } from "@/lib/utils"



const Header = () => {
    const scrolled = useScrolled();
    const { setTheme } = useTheme()
    const router = useRouter()
    return (
        <div className={cn("   w-full h-[100px]  fixed"  , scrolled && "border-b shadow-sm")}>
            <header className="grid grid-cols-3 sm:grid-cols-6 ml-[20px] ">
                <div className="w-[70px] h-[300px] p-5 m-3">
                    <img src="/download.svg" alt="" className=" object-contain w-10 " />
                </div>
                <nav className="grid grid-cols-4 gap-[182px]  p-6 dark:text-white">
                    <Link href={'/'} onClick={() => router.push('/')} className="">About</Link>
                    <Link href={'/'} onClick={() => router.push('/')}>About</Link>
                    <Link href={'/'} onClick={() => router.push('/')}>About</Link>
                    <Link href={'/'} onClick={() => router.push('/')} className="">About</Link>
                </nav>

                <nav className="grid grid-cols-3 p-6 ml-[450px] gap-[130px] justify-between">
                    <ShoppingBasket className="cursor-pointer hover:animate-spin" onClick={() => router.push('/')} />
                    <Heart className="cursor-pointer  hover:animate-pulse" onClick={() => router.push('/')} />
                    <User className="cursor-pointer hover:animate-accordion-down " onClick={() => router.push('/')} />
                </nav>
                <div className="p-5 ml-[580px]">
                    <DropdownMenu >
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
                </div>
                <div  className="ml-[400px] p-6">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Menu />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel >E Commerce</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>About</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

            </header>
            

        </div>
    )
}

export default Header
