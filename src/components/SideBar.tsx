'use client';
import "../../src/app/globals.css";
import Link from "next/link";
import { ArrowBigUp, Linkedin,  Mail, NotebookTabsIcon, } from "lucide-react";
import {
 Tooltip,
 TooltipContent,
 TooltipTrigger,
} from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import ThemeChanger from "./ThemeSwitcher";
import { useEffect } from "react";

const SideBar = () => {
 const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
 };

 useEffect(() => {
  document.addEventListener("scroll", () => {
   const scrollButton = document.getElementById("scrollButton");
   if (window.scrollY > 1500) {
    scrollButton?.classList.remove("hidden", "opacity-0", "translate-y-2");
    scrollButton?.classList.add("opacity-100", "translate-y-0");
   } else {
    scrollButton?.classList.add("opacity-0", "translate-y-2");
    scrollButton?.classList.remove("opacity-100", "translate-y-0");
    setTimeout(() => {
     if (window.scrollY <= 100) {
      scrollButton?.classList.add("hidden");
     }
    }, 300);
   }
  });
 }, [])

 return (
  <aside className="fixed inset-y-0 left-0 z-10 w-14 flex-col md:ml-3 justify-between bg-background sm:flex">
   <div className="flex justify-center items-center mt-20">
    {/* <ThemeChanger /> */}
   </div>
   <div className="h-1/3 flex align-middle justify-center">
    <Separator orientation="vertical" decorative className="m-24 bg-green-500" />
   </div>
   <nav className=" h-2/3 flex flex-col items-center gap-6 px-2 mt-28 sm:py-4">
    <Tooltip>
     <TooltipTrigger asChild>
      <Link
       href="#"
       className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
      >
       <TwitterLogoIcon className="h-5 w-5 text-black dark:text-white hover:text-green-500 dark:hover:text-green-500 focus:text-green-400 dark:focus:text-green-500" />
       <span className="sr-only">X</span>
      </Link>
     </TooltipTrigger>
     <TooltipContent side="right">Dashboard</TooltipContent>
    </Tooltip>
    <Tooltip>
     <TooltipTrigger asChild>
      <Link
       href="#"
       className="flex h-9 w-9 items-center justify-center rounded-lg  md:h-8 md:w-8"
      >
       <Linkedin className="h-5 w-5 text-black dark:text-white hover:text-green-500 dark:hover:text-green-500 focus:text-green-400 dark:focus:text-green-500 " />
       <span className="sr-only">LinkedIn</span>
      </Link>
     </TooltipTrigger>
     <TooltipContent side="right">Orders</TooltipContent>
    </Tooltip>
    <Tooltip>
     <TooltipTrigger asChild>
      <Link
       href="#"
       className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
      >
       <Mail className="h-5 w-5 text-black dark:text-white hover:text-green-500 dark:hover:text-green-500 focus:text-green-400 dark:focus:text-green-500" />
       <span className="sr-only">Mail</span>
      </Link>
     </TooltipTrigger>
     <TooltipContent side="right">Products</TooltipContent>
    </Tooltip>
    <Tooltip>
     <TooltipTrigger asChild>
      <Link
       href="#"
       className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
      >
       <GitHubLogoIcon className="h-5 w-5 text-black dark:text-white hover:text-green-500 dark:hover:text-green-500 focus:text-green-400 dark:focus:text-green-500" />
       <span className="sr-only">GitHub</span>
      </Link>
     </TooltipTrigger>
     <TooltipContent side="right">Customers</TooltipContent>
    </Tooltip>
    <Tooltip>
     <TooltipTrigger asChild>
      <Link
       href="#"
       className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
      >
       <NotebookTabsIcon className="h-5 w-5 text-black dark:text-white hover:text-green-500 dark:hover:text-green-500 focus:text-green-400 dark:focus:text-green-500" />
       <span className="sr-only">Blog</span>
      </Link>
     </TooltipTrigger>
     <TooltipContent side="right">Analytics</TooltipContent>
    </Tooltip>
    <Tooltip>
     <TooltipTrigger asChild>
      <div
       id="scrollButton"
       className="hidden transition-opacity duration-300 transform translate-y-2 opacity-0"
      >
       <button
        onClick={handleScroll}
        title="Scroll to top"
        aria-label="Scroll to top"
       >
        <ArrowBigUp className="h-5 w-5 text-black dark:text-white hover:text-green-500 dark:hover:text-green-500 focus:text-green-400 dark:focus:text-green-500" />
        <span className="sr-only">Scroll UP</span>
       </button>
      </div>
     </TooltipTrigger>
     <TooltipContent side="right">Analytics</TooltipContent>
    </Tooltip>
   </nav>
  </aside>
 )
}

export default SideBar