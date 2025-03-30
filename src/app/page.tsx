"use client"

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import Footer from "@/components/footer";
import BlurFade from "@/components/magicui/blur-fade";
import { GridPattern } from "@/components/magicui/grid-pattern";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { Safari } from "@/components/magicui/safari";
import { TextAnimate } from "@/components/magicui/text-animate";
import StepperPage from "@/components/Stepper";
import { Button } from "@/components/ui/button";
import { GALLERY_DATA } from "@/data/static";
import { cn } from "@/lib/utils";
import { setBuildingStep } from "@/redux/globalSlice";
import { LayoutDashboard, Phone, Wrench } from "lucide-react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {

  const { buildingStep } = useSelector((state: any) => state.global);
  
  const dispatch = useDispatch();

  return (
    <div>
      {buildingStep === null && <main className={`md:h-screen overflow-hidden w-full flex flex-col-reverse md:flex-row gap-10 items-center pt-24 md:pt-10 relative`}>
        <GridPattern
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [5, 3],
            [5, 5],
            [10, 10],
            [12, 15],
            [15, 10],
            [10, 15],
            [15, 10],
            [10, 15],
            [15, 10],
          ]}
          className={cn(
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
            `${buildingStep !== null ? "blur" : ""} inset-x-0 inset-y-[-30%] h-full md:h-[200%] skew-y-12`,
          )}
        />

        <div className="md:pl-36 md:pr-24 flex w-full mt-5 md:mt-0 md:w-6/12 flex-col justify-center">
          <TextAnimate className="text-3xl break-words text-wrap mx-auto text-center md:text-left md:text-5xl font-bold" duration={500} animation="blurInUp" by="word">
            Home Extensions and Renovations
          </TextAnimate>
          <p className="text-muted-foreground text-sm md:text-base text-center md:text-left mt-5">
            Experience craftsmanship and quality since 1998 and read our reviews at:
            <a
              href="https://www.werkspot.nl/profiel/persian-top/reviews"
              className="text-blue-600 ml-1 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.werkspot.nl/profiel/persian-top/reviews
            </a>
          </p>

          <Button className="h-12 lg:h-14 z-30 px-5 mt-5 mx-auto md:mt-10 w-11/12 md:w-full font-bold text-base md:text-2xl rounded-xl shadow-2xl">
            <Link href={'/configurator'}>
              Request a Quote Using 3D Configurator
            </Link>
          </Button>
          <Button 
          onClick={() => dispatch(setBuildingStep(0))}
           className="h-12 lg:h-14 z-30 px-5 mt-5 w-11/12 md:w-full mx-auto  font-bold text-base md:text-2xl rounded-xl shadow-2xl">
            Request a Quote Manually
          </Button>
          <Button className="h-12 lg:h-14 z-30 px-5 mt-5 w-11/12 md:w-full mx-auto  font-bold text-base md:text-2xl rounded-xl shadow-2xl">
            Request a Quote direct phone Call
          </Button>
        </div>


        <div className="max-h-48 w-8/12 md:w-6/12 z-20 flex">
          <div className="relative bg-gradient-to-l from-background via-background/50 to-transparent flex items-center w-full">
            <Safari
              url="https://b2-b-develop.vercel.app/configurator/"
              className="lg:size-[40em] translate-x-8 lg:translate-x-20 scale-150 z-10"
              imageSrc="/desktop-mock.png"
            />
            <Iphone15Pro
              className="lg:size-96 scale-125 lg:scale-0 lg:animate-bounce cursor-pointer mt-20 lg:mt-96 z-20"
              src="/mobile-mock.png"
            />
          </div>
        </div>
      </main>}



      {buildingStep !== null &&
        <StepperPage />
      }

      <div className="mt-48 w-full flex flex-col items-center">
        <TextAnimate className="text-3xl md:text-6xl text-center font-bold" animation="blurInUp" by="character">
          How Does it Work ?
        </TextAnimate>

        <div className="w-8/12 flex flex-col md:flex-row gap-y-16 md:gap-y-10 gap-10 mt-36">
          <div className="w-full md:w-4/12 p-5 bg-background dark:bg-accent/30 shadow-xl rounded-2xl flex flex-col items-center relative">
            <div className="bg-primary absolute size-20 flex justify-center items-center -mt-10 rounded-3xl shadow-xl">
              <LayoutDashboard className="size-14" color="#ffffff" />
            </div>
            <h2 className="mt-16 font-medium text-xl"><span className="font-extrabold text-4xl mt-1 mr-1">1#</span> Choose Your Preferred Services in Configurator Easy From Webapp</h2>
            <p className="text-muted-foreground mt-5">Persian top offers an smooth and easy to use configurator for selecting specific home exterior and inside house services</p>
            <Button className="rounded-xl w-full h-12 mt-5 font-bold text-lg">
              Go To Configurator
            </Button>
          </div>
          <div className="w-full md:w-4/12 p-5 bg-background dark:bg-accent/30 shadow-xl rounded-2xl flex flex-col items-center relative">
            <div className="bg-primary absolute size-20 flex justify-center items-center -mt-10 rounded-3xl shadow-xl">
              <Phone className="size-14" color="#ffffff" />
            </div>
            <h2 className="mt-16 font-medium text-xl"><span className="font-extrabold text-4xl mt-1 mr-1">2#</span> Professional craftsmen will contact you to finalize your requests and prices </h2>
            <p className="text-muted-foreground mt-5">Inside the configurator You'll see the estimated price real time and you can request a quote to get the exact price and finalize your order.</p>

          </div>
          <div className="w-full md:w-4/12 p-5 bg-background dark:bg-accent/30 shadow-xl rounded-2xl flex flex-col items-center relative">
            <div className="bg-primary absolute size-20 flex justify-center items-center -mt-10 rounded-3xl shadow-xl">
              <Wrench className="size-14" color="#ffffff" />
            </div>
            <h2 className="mt-16 font-medium text-xl"><span className="font-extrabold text-4xl mt-1 mr-1">3#</span> Let the experts bring your needs in real life in a very short time </h2>
            <p className="text-muted-foreground mt-5">Your specialist in renovations and home extensions with more than 25 years of experience and craftsmanship will deliver your needs</p>
          </div>
        </div>
      </div>

      <div className="mt-48 w-full flex flex-col items-center">

        <TextAnimate className="text-3xl w-full lg:w-6/12 md:text-6xl text-center font-bold" animation="blurInUp" by="word">
          Super fast solution for your House extensions and services
        </TextAnimate>

        <div className="lg:w-5/12 z-20 flex mx-auto mt-10">
          <img
            className="w-full animate-pulse"
            src={'/main-hero.webp'}
            alt={'Persian Top'}
          />
        </div>
      </div>

      <div className="my-48 w-full flex flex-col items-center">
        <TextAnimate className="text-3xl md:text-6xl text-center font-bold" animation="blurInUp" by="character">
          Our Services
        </TextAnimate>
        <p className="text-muted-foreground text-center mt-5">Quality and craftsmanship for renovation and expansion.</p>

        <div className="w-11/12 md:w-10/12 flex flex-col md:flex-row gap-y-20 md:gap-y-10 gap-10 mt-36">

          <div className="md:w-4/12 p-8 bg-background dark:bg-accent/30 shadow-xl rounded-2xl flex flex-col">
            <h2 className="font-extrabold text-3xl">Complete Renovation</h2>
            <p className="text-muted-foreground mt-5"> Transform your home with our expertise</p>
            <img
              className="mt-5 min-h-96 rounded-2xl w-full"
              src={'/renovation-project.avif'}
              alt={'Renovation'}
            />
          </div>
          <div className="md:w-4/12 p-8 scale-110 bg-background dark:bg-accent/30 shadow-xl rounded-2xl flex flex-col">
            <h2 className="font-extrabold text-3xl">Home extensions</h2>
            <p className="text-muted-foreground mt-5">Beautiful extensions for your living needs.</p>
            <img
              className="mt-5 min-h-96 rounded-2xl w-full"
              src={'/extension-project.avif'}
              alt={'Extension'}
            />
          </div>
          <div className="md:w-4/12 p-8 bg-background dark:bg-accent/30 shadow-xl rounded-2xl flex flex-col">
            <h2 className="font-extrabold text-3xl">Craftsmanship</h2>
            <p className="text-muted-foreground mt-5">Elegance and tradition in every project.</p>
            <img
              className="mt-5 min-h-96 rounded-2xl w-full"
              src={'/services-main.avif'}
              alt={'Craft'}
            />
          </div>
        </div>
      </div>



      <div className="w-11/12 md:w-9/12 mx-auto my-48">
        <TextAnimate className="text-3xl md:text-6xl text-center font-bold" animation="blurInUp" by="character">
          Gallery
        </TextAnimate>
        <p className="text-muted-foreground text-center mt-5">Discover our renovations and extensions with craftsmanship and detail.</p>

        <section id="photos" className="mt-20">
          <div className="columns-2 gap-4 sm:columns-3">
            {GALLERY_DATA.map((imageUrl, idx) => (
              <BlurFade key={idx + imageUrl.src} delay={0.25 + idx * 0.05} inView>
                <img
                  className="mb-4 size-full rounded-lg object-contain"
                  src={imageUrl.src}
                  alt={`Random stock image ${idx + 1}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>
      </div>


      <BlurFade delay={0.25} inView>
        <div className="flex flex-col md:flex-row w-9/12 mx-auto h-96 my-72">
          <div className="w-full md:w-6/12">
            <img
              className="w-full object-cover rounded-xl md:rounded-l-3xl max-h-96"
              src={'/rate-hero.avif'}
              alt={'Rating'}
            />
          </div>
          <div className="w-full md:w-6/12 z-20 h-full p-5 md:p-10 md:-ml-5 shadow-2xl scale-110 border md:rounded-l-sm rounded-lg md:rounded-r-3xl bg-background">
            <h2 className="md:text-4xl font-bold text-primary">★★★★★</h2>
            <p className="mt-5 md:text-lg">
              {"Abbas keeps his promises and the coordination during the renovation went smoothly. In short, we are very satisfied with the work of Persian top and would definitely recommend him for a job."}
            </p>
            <div className="flex flex-col items-start mt-5">
              <img
                className="rounded-full size-10"
                src={'/peter.avif'}
                alt={'Rating'}
              />
              <p className="md:text-lg text-muted-foreground ">Peter G</p>
            </div>
          </div>
        </div>
      </BlurFade>

      <Footer />

      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>

    </div>
  );
}