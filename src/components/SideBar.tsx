import "../../src/app/globals.css";
import Link from "next/link";
import {  Linkedin, Mail, NotebookTabsIcon ,X } from "lucide-react";
import {
 Tooltip,
 TooltipContent,
 TooltipTrigger,
} from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const SideBar = () => {
 return (
  <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col ml-3 justify-between bg-background sm:flex">
   <div className="h-1/3 flex align-middle justify-center">
    <Separator orientation="vertical" decorative className="bg-black m-24 bg-green-500" />
   </div>
   <nav className=" h-2/3 flex flex-col items-center gap-6 px-2 mt-28 sm:py-4">
    <Tooltip>
     <TooltipTrigger asChild>
      <Link
       href="#"
       className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
      >
       <X className="h-5 w-5" color="black" />
       <span className="sr-only">Dashboard</span>
      </Link>
     </TooltipTrigger>
     <TooltipContent side="right">Dashboard</TooltipContent>
    </Tooltip>
    <Tooltip>
     <TooltipTrigger asChild>
      <Link
       href="#"
       className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
      >
       <Linkedin className="h-5 w-5" color="black" />
       <span className="sr-only">Orders</span>
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
       <Mail className="h-5 w-5" color="black" />
       <span className="sr-only">Products</span>
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
       <GitHubLogoIcon className="h-5 w-5" color="black" />
       <span className="sr-only">Customers</span>
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
       <NotebookTabsIcon className="h-5 w-5" color="black" />
       <span className="sr-only">Analytics</span>
      </Link>
     </TooltipTrigger>
     <TooltipContent side="right">Analytics</TooltipContent>
    </Tooltip>
   </nav>
  </aside>
 )
}

export default SideBar