'use client'

import Image from "next/image";
import { useEffect } from "react";
import { useSelector } from "react-redux";


export default function Page() {

  const { showFacade } = useSelector((state: any) => state.global);
  console.log(showFacade)

  return (
    <main className="relative flex h-screen">
      {/* First Image */}
      <Image
        className=" inset-0 w-full h-full object-cover z-10"
        src={'/main.png'}
        alt={'exterior'}
        width={3000}
        height={3000}
        quality={100}
      />

      {showFacade?.show &&
        <Image
          className="absolute inset-0 w-full h-full object-cover z-20"
          src={showFacade?.src}
          alt={'exterior'}
          width={3000}
          height={3000}
        />}
    </main>

  );
}
