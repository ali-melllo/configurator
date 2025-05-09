'use client'

import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/static";
import { cn } from "@/lib/utils";
import { changePreview, changeShowFinalQuoteModal, changeView, resetAll } from "@/redux/globalSlice";
import Link from "next/link";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
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
import { useLang } from "@/contexts/LangContext";

export default function Navbar() {

  const dispatch = useDispatch();
  const { t } = useLang();
  
  const changeViewHandler = useCallback((view: string) => {
    dispatch(changeView(view));
  }, [dispatch])

  return (
    <div className="pointer-events-none fixed inset-x-0 top-3 md:top-[91%] md:!bottom-0 z-50 mx-auto mb-4 flex origin-bottom h-full max-h-16 md:max-h-14">
      <Dock className="z-50 w-full md:w-auto justify-between rounded-lg md:rounded-[2em] mx-1 pointer-events-auto relative md:mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
        {DATA.logo.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <item.icon className="size-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" />
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    onClick={() => {
                      name === 'Exterior' ?
                        changeViewHandler('exterior') :
                        name === 'Inside' ?
                          changeViewHandler('inside') :
                          name === 'Submit' ?
                            dispatch(changeShowFinalQuoteModal(true)) :
                            name === 'Preview' ?
                              dispatch(changePreview(true)) :
                              null
                    }}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12"
                    )}
                  >


                    {name === 'Reset' ?
                      <AlertDialog>
                        <AlertDialogTrigger>
                          <social.icon className="size-5" />
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>{t("alert.title")}</AlertDialogTitle>
                            <AlertDialogDescription>
                              {t("alert.description")}
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>{t("alert.cancel")}</AlertDialogCancel>
                            <AlertDialogAction onClick={() => dispatch(resetAll())}>
                              {t("alert.continue")}
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                      : <social.icon className="size-5" />}

                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        <Separator orientation="vertical" className="h-full py-2" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>


    </div>
  );
}
