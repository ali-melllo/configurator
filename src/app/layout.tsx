'use client'

import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import SideBar from "@/components/sidebar";
import { store } from '../redux/store';
import { Provider } from 'react-redux'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans ",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
          <Provider store={store}>

            <Header />
            <div className="flex h-screen overflow-hidden">
              <SideBar />
              <div className="w-9/12 z-10">
                {children}
              </div>
            </div>
            <Navbar />
            </Provider>

          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
