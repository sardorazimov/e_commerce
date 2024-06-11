
import Hero from "@/Test/Hero";
import Header from "@/components/Navbar/Header";
import Wrapper from "@/components/Navbar/Wrapper";
import PageWrapper from "@/components/Navbar/Wrapperpage";
import HeaderMobile from "@/components/Navbar/mobile-header";
import Sidebar from "@/components/Navbar/sidebar";

import Welcome from "@/components/Welcome";
import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";


export default function Home({
  children,
}:{
  children:ReactNode
}) {
  return (
   
    <div className="flex w-full ">
       <Welcome  name="E Commerce"
       title="Welcome back" 
       description="Deliver commerce your 
       way with a flexible online store platform. Use templates, composable storefronts, headless APIs — or any combination of the three."
        img="/img/brand4.png"  />
      
    </div>
   
  );
}
