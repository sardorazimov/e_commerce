
import Header from "@/components/Navbar/Header";
import Wrapper from "@/components/Navbar/Wrapper";
import PageWrapper from "@/components/Navbar/Wrapperpage";
import HeaderMobile from "@/components/Navbar/mobile-header";
import Sidebar from "@/components/Navbar/sidebar";

import Welcome from "@/components/Welcome";
import { ReactNode } from "react";


export default function Home({
  children,
}:{
  children:ReactNode
}) {
  return (
   
    <div className="flex">
     <Welcome />
    </div>
   
  );
}
