import SideBar from "@/components/SideBar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { basicMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
const prospec = localFont({
 src: [
  {
   path: "../../public/fonts/Prospec.otf",
  },
 ],
 adjustFontFallback: "Arial",
 preload: true,
 variable: "--font-prospec",
});
export const metadata = basicMetadata({});
export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <Script src="https://analytics.ahrefs.com/analytics.js" data-key="eii6RXxH9Y/BJHvrDPS8wg" async></Script>
   <body className={cn('scroll-smooth', prospec.variable)}>
    <ThemeProvider
     attribute="class"
     defaultTheme="light"
     enableSystem={false}
     forcedTheme="light"
    >
     <TooltipProvider>
      <SideBar />
      {children}
      <Analytics />
     </TooltipProvider>
    </ThemeProvider>
   </body>
  </html>
 );
}
