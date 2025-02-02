'use client'

import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/static";
import { cn } from "@/lib/utils";
import { changeFrequentlyAskedModal } from "@/redux/globalSlice";
import { CircleHelp } from "lucide-react";
import Link from "next/link";
import { useDispatch } from "react-redux";

export default function Header() {

  const dispatch = useDispatch();

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-30 mx-auto mb-4 hidden md:flex origin-top h-full max-h-16">
      <Dock className="z-50 pointer-events-auto !rounded-none relative w-full mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
        {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}>
                  <item.icon className="size-6" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        
        <Separator orientation="vertical" className="h-full py-2" />
        <p className="font-bold px-3">Configurator</p>
        <DockIcon className="ml-auto">
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon className="mx-10">
          <Tooltip>
            <TooltipTrigger onClick={() => dispatch(changeFrequentlyAskedModal(true))} asChild>
              <div className="flex flex-nowrap gap-2 items-center">
              <CircleHelp className="size-6"/>
              <p className="text-nowrap text-sm">To Ask</p>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Frequently Asked</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}
