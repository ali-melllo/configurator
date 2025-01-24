'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


export default function Page() {

  const { showFacade } = useSelector((state: any) => state.global);
  const [imageLoaded, setImageLoaded] = useState<boolean>(true)

  useEffect(() => {
    setImageLoaded(false);
  }, [showFacade]);

  return (
     <main className="relative flex h-screen">
      {/* Main Image */}
      <Image
        className={`inset-0 ${imageLoaded ? 'animate-none' : 'animate-pulse'} w-full h-full object-cover z-10`}
        onLoad={() => setImageLoaded(true)}
        src={'/main.png'}
        alt={'exterior'}
        width={3000}
        height={3000}
        quality={100}
        priority
      />

      {/* Show second image only when preloaded */}
      {showFacade?.show && (
        <Image
          onLoad={() => setImageLoaded(true)}
          className="absolute inset-0 w-full h-full object-cover z-20"
          src={showFacade.src}
          alt={'exterior'}
          width={3000}
          height={3000}
          quality={100}
          priority
        />
      )}
    </main>
  );
}