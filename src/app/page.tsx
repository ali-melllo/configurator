'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


export default function Page() {

  const { showExterior, finalQuote } = useSelector((state: any) => state.global);
  const [imageLoaded, setImageLoaded] = useState<boolean>(true)

  useEffect(() => {
    setImageLoaded(false);
  }, [showExterior]);

  console.log(finalQuote);

  return (
    <main className="relative overflow-hidden shadow-2xl flex h-6/12 md:h-screen">

      <div className="ESTIMATED_PRICE text-sm md:text-base hidden md:flex gap-x-5 items-center absolute top-[4.5em] px-5 py-4 rounded-xl z-50 right-3 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
        <Button className="bg-primary h-6 rounded-2xl">
          See Details
        </Button>
        <p className="font-semibold">Estimated Price : </p>
        <p className="font-bold text-primary">€ 43.983 </p>
      </div>

      {/* Main Image */}
      <Image
        className={`inset-0 mt-16 md:mt-0 ${imageLoaded ? 'animate-none' : 'animate-pulse'} w-full h-full object-cover z-10`}
        onLoad={() => setImageLoaded(true)}
        src={'/main.png'}
        alt={'exterior'}
        width={3000}
        height={3000}
        quality={100}
        priority
      />

      {/* Show second image only when preloaded */}

      {showExterior && (
        finalQuote.exterior.map((item: any) => (
          <Image
            key={item.key}
            onLoad={() => setImageLoaded(true)}
            className="absolute mt-16 md:mt-0 inset-0 md:w-full md:h-full object-cover z-20"
            src={item.objectSrc}
            alt={'exterior'}
            width={3000}
            height={3000}
            quality={100}
            priority
          />
        ))

      )}
    </main>
  );
}