'use client'
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line @next/next/no-img-element
// eslint-disable-next-line react/jsx-no-comment-textnodes, react/jsx-no-comment-textnodes, react/jsx-no-comment-textnodes

import Link from "next/link"
import React from "react"
import { useRouter } from "next/navigation"
import { Separator } from "./ui/separator"
import Image from "next/image"
import { Button } from "./ui/button"
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


  return (
    <div className="p-[45px] max-w-full">
      <div className="ml-[700px] absolute w-[760px] h-[600px]  p-[90px]">
        <img src="/aplle/hero-1.png" alt="Welcome" className="object-contain sm:object-contain md:object-contain" />
      </div>
      <div className="ml-[60px] p-[20px]">
        <h1 className="font-extrabold text-3xl p-[40px]">
          {name}

        </h1>
        <p className="text-1xl w-[450px] h-[] transition-colors cursor-pointer">
          {description}
        </p>
        {/** */}
        <div className="gap-7 flex p-[100px]">
          <Button onClick={() => router.push('/selection')}
          >Get Srarted</Button>
          <div>
            <AlertDialog>
              <AlertDialogTrigger>
                <Button>Open Docs</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="">
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => router.push('/docs')}>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

        </div>

        <div className=" grid grid-cols-3">
          <div>
             <HoverCard>
            <HoverCardTrigger>Testiomials</HoverCardTrigger>
            <Separator />
            <HoverCardContent>
             {description}
            </HoverCardContent>
          </HoverCard>
          </div>
          <div>
             <HoverCard>
            <HoverCardTrigger>Testiomials</HoverCardTrigger>
            <Separator />
            <HoverCardContent>
             {description}
            </HoverCardContent>
          </HoverCard>
          </div>
          <div>
             <HoverCard>
            <HoverCardTrigger>Testiomials</HoverCardTrigger>
            <Separator />
            <HoverCardContent>
             {description}
            </HoverCardContent>
          </HoverCard>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Welcome
