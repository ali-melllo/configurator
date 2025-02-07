"use client"

/* eslint-disable react/no-unescaped-entities */

import Footer from "@/components/footer";
import BlurFade from "@/components/magicui/blur-fade";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button";
import { GALLERY_DATA } from "@/data/static";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Phone, Wrench } from "lucide-react";
import Image from "next/image";

export default function Page() {

  return (
    <div>
      <main className="h-screen flex items-center pt-10 relative">
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
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />

        <div className="pl-36 pr-24 flex w-6/12 flex-col">
          <TextAnimate className="text-6xl font-bold" animation="blurInUp" by="character">
            Home Extensions and Renovations
          </TextAnimate>
          <p className="text-muted-foreground mt-5">
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
          <Button className="h-14 z-20 mt-10 w-11/12 font-bold text-2xl rounded-xl shadow-2xl">
            Start Using Configurator
          </Button>
        </div>


        <div className=" absolute bottom-0 right-0">
          <Image
            src={'/main-hero.webp'}
            alt={'Persian Top'}
            width={700}
            height={500}
          />
        </div>

      </main>


      <div className="mt-48 w-full flex flex-col items-center">
        <TextAnimate className="text-6xl text-center font-bold" animation="blurInUp" by="character">
          How Does it Work ?
        </TextAnimate>

        <div className="w-8/12 flex gap-10 mt-36">
          <div className="w-4/12 p-5 bg-background dark:bg-accent/30 shadow-xl rounded-2xl flex flex-col items-center relative">
            <div className="bg-primary absolute size-20 flex justify-center items-center -mt-10 rounded-3xl shadow-xl">
              <LayoutDashboard className="size-14" color="#ffffff" />
            </div>
            <h2 className="mt-16 font-medium text-xl"><span className="font-extrabold text-4xl mt-1 mr-1">1#</span> Choose Your Preferred Services in Configurator Easy From Webapp</h2>
            <p className="text-muted-foreground mt-5">Persian top offers an smooth and easy to use configurator for selecting specific home exterior and inside house services</p>
            <Button className="rounded-xl w-full h-12 mt-5 font-bold text-lg">
              Go To Configurator
            </Button>
          </div>
          <div className="w-4/12 p-5 bg-background dark:bg-accent/30 shadow-xl rounded-2xl flex flex-col items-center relative">
            <div className="bg-primary absolute size-20 flex justify-center items-center -mt-10 rounded-3xl shadow-xl">
              <Phone className="size-14" color="#ffffff" />
            </div>
            <h2 className="mt-16 font-medium text-xl"><span className="font-extrabold text-4xl mt-1 mr-1">2#</span> Professional craftsmen will contact you to finalize your requests and prices </h2>
            <p className="text-muted-foreground mt-5">Inside the configurator You'll see the estimated price real time and you can request a quote to get the exact price and finalize your order.</p>

          </div>
          <div className="w-4/12 p-5 bg-background dark:bg-accent/30 shadow-xl rounded-2xl flex flex-col items-center relative">
            <div className="bg-primary absolute size-20 flex justify-center items-center -mt-10 rounded-3xl shadow-xl">
              <Wrench className="size-14" color="#ffffff" />
            </div>
            <h2 className="mt-16 font-medium text-xl"><span className="font-extrabold text-4xl mt-1 mr-1">3#</span> Let the experts bring your needs in real life in a very short time </h2>
            <p className="text-muted-foreground mt-5">Your specialist in renovations and home extensions with more than 25 years of experience and craftsmanship will deliver your needs</p>
          </div>
        </div>
      </div>

      <div className="my-48 w-full flex flex-col items-center">
        <TextAnimate className="text-6xl text-center font-bold" animation="blurInUp" by="character">
          Our Services
        </TextAnimate>
        <p className="text-muted-foreground mt-5">Quality and craftsmanship for renovation and expansion.</p>

        <div className="w-10/12 flex gap-10 mt-36">

          <div className="w-4/12 p-8 bg-background dark:bg-accent/30 shadow-xl rounded-2xl flex flex-col">
            <h2 className="font-extrabold text-3xl">Complete Renovation</h2>
            <p className="text-muted-foreground mt-5"> Transform your home with our expertise</p>
            <Image
              className="mt-5 min-h-96 rounded-2xl w-full"
              src={'/renovation.webp'}
              alt={'Renovation'}
              width={300}
              height={600}
            />
          </div>
          <div className="w-4/12 p-8 scale-110 bg-background dark:bg-accent/30 shadow-xl rounded-2xl flex flex-col">
            <h2 className="font-extrabold text-3xl">Home extensions</h2>
            <p className="text-muted-foreground mt-5">Beautiful extensions for your living needs.</p>
            <Image
              className="mt-5 min-h-96 rounded-2xl w-full"
              src={'/extension.webp'}
              alt={'Extension'}
              width={300}
              height={600}
            />
          </div>
          <div className="w-4/12 p-8 bg-background dark:bg-accent/30 shadow-xl rounded-2xl flex flex-col">
            <h2 className="font-extrabold text-3xl">Craftsmanship</h2>
            <p className="text-muted-foreground mt-5">Elegance and tradition in every project.</p>
            <Image
              className="mt-5 min-h-96 rounded-2xl w-full"
              src={'/craft.webp'}
              alt={'Craft'}
              width={300}
              height={600}
            />
          </div>

        </div>
      </div>



      <div className="w-9/12 mx-auto my-48">
        <TextAnimate className="text-6xl text-center font-bold" animation="blurInUp" by="character">
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
        <div className="flex w-9/12 mx-auto h-96 my-72">
          <div className="w-6/12">
            <Image
              className="w-full rounded-l-3xl max-h-96"
              src={'/rate-hero.webp'}
              alt={'Rating'}
              width={500}
              height={400}
            />
          </div>
          <div className="w-6/12 z-20 h-full p-10 -ml-5 shadow-2xl scale-110 border rounded-l-sm rounded-r-3xl bg-background">
            <h2 className="text-4xl font-bold text-primary">★★★★★</h2>
            <p className="mt-5 text-lg">
              {"Abbas keeps his promises and the coordination during the renovation went smoothly. In short, we are very satisfied with the work of Persian top and would definitely recommend him for a job."}
            </p>
            <div className="flex flex-col items-start mt-5">
              <Image
                className="rounded-full size-10"
                src={'/peter.avif'}
                alt={'Rating'}
                width={50}
                height={50}
              />
              <p className="text-lg text-muted-foreground ">Peter G</p>

            </div>
          </div>
        </div>
      </BlurFade>

      <Footer />


      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>

    </div>
  );
}