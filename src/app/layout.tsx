import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import SideBar from "@/components/SideBar";
import { ThemeProvider } from "next-themes";
import { basicMetadata } from "@/lib/metadata";

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
    <html lang="en" className="scroll-smooth">
      <body className={cn("", prospec.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          forcedTheme="light"
        >
          <TooltipProvider>
            <SideBar />
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
