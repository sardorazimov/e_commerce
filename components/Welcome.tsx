/* eslint-disable react/jsx-no-undef */
'use client'
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line @next/next/no-img-element
// eslint-disable-next-line react/jsx-no-comment-textnodes, react/jsx-no-comment-textnodes, react/jsx-no-comment-textnodes

import Link from "next/link"
import React, { useRef } from "react"
import { useRouter } from "next/navigation"
import { Separator } from "./ui/separator"
import Image from "next/image"
import { Button } from "./ui/button"
import { ScrollParallax } from "react-just-parallax";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"
import Section from "./Section"
import { heroIcons } from "@/constants"
import { AlignRight, ArrowRightToLine, BookOpenCheck } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"


interface WelcomeProps {
  title: string,
  name: string,
  description: string,
  onOpenChange?(open: boolean): void

}

const Welcome = ({
  title,
  name,
  description,
}: WelcomeProps) => {
  const router = useRouter()
  const parallaxRef = useRef()


  return (
    <section className="pt-24 ">
      <div className="px-12 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal md:text-6xl md:tracking-tight">
            <span>Start</span> <span className="block w-full py-2  bg-clip-text leading-12 bg-gradient-to-r lg:inline">building a buzz</span> <span>around your product ?</span>
          </h1>
          <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
            Start gaining the traction youve always wanted with our next-level templates and designs. Crafted to help you tell your story.
          </p>
          <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
            <Button 
            onClick={() => router.push('/selection')}
            className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg  rounded-2xl sm:w-auto sm:mb-0">
              Get Stared
              <ArrowRightToLine className="ml-1" />
            </Button>
            <Button  onClick={() => router.push('/docs')}
            className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg rounded-2xl sm:w-auto sm:mb-0">
              Docs
              <BookOpenCheck className="ml-2" />
            </Button>
          </div>
        </div>
        <div className="w-full mx-auto mt-20 text-center md:w-10/12">
          <div className="relative z-0 w-full mt-8">
            <div className="relative overflow-hidden shadow-2xl">
              <div className="flex items-center flex-none px-4 bg-green-400 rounded-b-none h-11 rounded-xl">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 border-2  rounded-full"></div>
                  <div className="w-3 h-3 border-2  rounded-full"></div>
                  <div className="w-3 h-3 border-2  rounded-full"></div>
                </div>
              </div>
              <img src="/home.png" className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Welcome
