'use client'

import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/static";
import { cn } from "@/lib/utils";
import { changeFrequentlyAskedModal } from "@/redux/globalSlice";
import { CircleHelp, Home, HomeIcon, List } from "lucide-react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/drop-down-menu"
import { useTheme } from "next-themes";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";


export default function Header() {

  const dispatch = useDispatch();
  const { setTheme } = useTheme()
  const path = usePathname();
  const params = useParams();
  const router = useRouter();
  console.log(params)
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLanguage = (defaultLang?: string) => {

    const segments = pathname.split("/").filter(Boolean);
    const currentLocale = segments[0];
    const newLocale = currentLocale === "en" ? "nl" : "en";
    const restOfPath = segments.length > 1 ? "/" + segments.slice(1).join("/") : "";
    const newPath = `/${newLocale}${restOfPath}`;

    if (!defaultLang) {
      startTransition(() => {
        router.push(newPath || "/nl");
      });
    } else {
      const redirectPath = `${defaultLang}${restOfPath}`;

      startTransition(() => {
        router.push(redirectPath);
      });
    }


  };

  return (
    <div className="pointer-events-none bg-background h-20 fixed inset-x-0 top-0 z-50 mx-auto mb-4 flex origin-top ">
      <Dock className="z-50 pointer-events-auto hidden md:flex !rounded-none relative w-full mx-auto min-h-full h-full items-center justify-between px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">

        <Button variant={"ghost"} className="ml-2 px-2 py-5">

          <Link href={`/${params.locale}/`} className="flex gap-3 items-center ">
            <HomeIcon />
            <p className="font-bold text-xl">Persian Top</p>
          </Link>
        </Button>


        <div className="ml-10">
          <NavigationMenu>
            <NavigationMenuList>
              {DATA.navbar.map((navItem) => (
                <NavigationMenuItem key={navItem.href}>
                  <Link href={`/${params.locale}/${navItem.href}`} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {navItem.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="ml-auto cursor-pointer mr-10">
          <Tooltip>
            <TooltipTrigger onClick={() => dispatch(changeFrequentlyAskedModal(true))} asChild>
              <div className="flex flex-nowrap gap-2 items-center">
                <CircleHelp color="#f97316" className="size-6" />
                <p className="text-nowrap text-base">To Ask</p>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Frequently Asked</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="">
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="ml-5 mr-10">


          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="h-9 w-28 flex !items-center !justify-between font-medium !px-3" variant="outline" size="sm" >
                {pathname.split("/").filter(Boolean)[0] === "en" ? " 🇺🇸 " : "🇳🇱 "}
                <span className="text-base">{pathname.split("/").filter(Boolean)[0] === "en" ? " English" : "Dutch"}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mr-14">
              <DropdownMenuLabel className="font-medium">Select Language</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => toggleLanguage("/en")}>
                  🇺🇸 English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => toggleLanguage("/nl")}>
                  🇳🇱 Dutch
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

      </Dock>


      {/* mobile header */}

      {path !== '/configurator/' &&
        <div className="z-50 px-3 pointer-events-auto flex md:hidden justify-between !rounded-none relative w-full min-h-full h-full items-center bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
          <Home />
          <p className="font-bold mr-auto ml-3 text-xl dark:text-primary border-none">Persian Top</p>

          <div className="ml-5 mr-2">


            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="h-14 rounded-xl w-20 flex !items-center !justify-between font-medium !px-4" variant="outline" size="sm" >
                  {pathname.split("/").filter(Boolean)[0] === "en" ? " 🇺🇸 " : "🇳🇱 "}
                  <span className="text-sm">{pathname.split("/").filter(Boolean)[0] === "en" ? " En" : "Dut"}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mr-14">
                <DropdownMenuLabel className="font-medium">Select Language</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={() => toggleLanguage("/en")}>
                    🇺🇸 English
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => toggleLanguage("/nl")}>
                    🇳🇱 Dutch
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="size-14 rounded-xl" variant="outline">
                <List className="!size-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                {DATA.navbar.map((navItem) => (
                  <DropdownMenuItem className="text-lg" key={navItem.href}>
                    <Link href={navItem.href}>{navItem.label}</Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSub >
                  <DropdownMenuSubTrigger className="text-lg">
                    <span>Theme</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>}

    </div>
  );
}
