'use client'

import { Button } from "@/components/ui/button";
import { changeShowFinalQuoteModal, changeView, resetAll } from "@/redux/globalSlice";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatEuroPrice } from "@/lib/utils";
import SubmitModal from "@/components/main/modals/submit-modal";


export default function Page() {

  const { showExterior, finalQuote, view, showInside } = useSelector((state: any) => state.global);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);


  const dispatch = useDispatch();

  useEffect(() => {
    setImageLoaded(false);
  }, [showExterior, view, showInside]);

  const changeViewHandler = useCallback((view: string) => {
    dispatch(changeView(view));
  }, [dispatch])

  const getExteriorPrice = useCallback(() => {
    return finalQuote.exterior.reduce((total: any, item: any) => total + (Number(item.price) || 0), 0);
  }, [finalQuote]);

  const getInsidePrice = useCallback(() => {
    return finalQuote.interior.reduce((total: any, item: any) => total + (Number(item.price) || 0), 0);
  }, [finalQuote]);


  return (
    <main className="relative overflow-hidden shadow-2xl flex h-6/12 md:h-screen">

      <div className="flex cursor-pointer gap-x-3 absolute z-50 left-3 top top-[4.5em]">
        <div onClick={() => changeViewHandler('exterior')} className="size-[2.75em] md:size-20 flex flex-col transition-all duration-200 justify-between hover:scale-105 rounded-xl shadow-xl">
          <Image
            className={`w-full h-full object-cover rounded-t-lg`}
            src={'/main.png'}
            alt={'exterior'}
            width={300}
            height={100}
            quality={100}
            unoptimized
          />
          <p className="pointer-events-none text-[0.6em] md:text-base w-full flex justify-center items-center font-bold rounded-b-lg bg-white text-black">Exterior</p>
        </div>
        <div onClick={() => changeViewHandler('inside')} className="size-[2.75em] md:size-20 flex flex-col transition-all duration-200 justify-between hover:scale-105 rounded-xl shadow-xl">
          <Image
            className={`w-full h-full object-cover rounded-t-lg`}
            src={'/main-inside.png'}
            alt={'exterior'}
            width={300}
            height={100}
            quality={100}
            unoptimized
          />
          <p className="pointer-events-none text-[0.6em] md:text-base w-full flex justify-center items-center font-bold rounded-b-lg bg-white text-black">Inside</p>
        </div>
      </div>

      {formatEuroPrice(getInsidePrice() + getExteriorPrice()) !== '0'
        && <div className="ESTIMATED_PRICE text-sm md:text-base hidden md:flex gap-x-5 items-center absolute top-[4.5em] px-5 py-4 rounded-xl z-50 right-3 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
          <Button onClick={() => dispatch(changeShowFinalQuoteModal(true))} className="bg-primary h-6 rounded-2xl">
            See Details
          </Button>
          <p className="font-semibold">Estimated Price : </p>
          <p className="font-bold text-primary">€  {formatEuroPrice((getInsidePrice() + getExteriorPrice() || '0'))}</p>
        </div>}



      {/* Main Image */}
      <Image
        className={`inset-0 mt-16 md:mt-0 ${imageLoaded ? 'animate-none' : 'animate-pulse'} w-full h-full object-cover z-10`}
        onLoad={() => {
          setImageLoaded(true);
        }}
        src={view === 'exterior' ? '/main.png' : view === 'inside' ? '/main-inside.png' : ''}
        alt={'exterior'}
        width={3000}
        height={3000}
        quality={100}
        priority
        unoptimized
      />

      {/* Show second image only when preloaded */}
      {/* condition z-index to avoid image layer crash */}

      {view === 'exterior' &&
        (
          finalQuote.exterior.map((item: any) => (
            <Image
              key={item.key}
              onLoad={() => {
                setImageLoaded(true);
              }}
              className={`absolute mt-16 md:mt-0 inset-0 md:w-full md:h-full object-cover ${item.key === 'outdoor-light' ? 'z-30' : 'z-20'}`}
              src={item.objectSrc}
              alt={'exterior'}
              width={3000}
              height={3000}
              quality={100}
              priority
              unoptimized
            />
          ))
        )}

      {view === 'inside' && (
        finalQuote.interior.map((item: any) => (
          <Image
            key={item.key}
            onLoad={() => setImageLoaded(true)}
            className={`absolute mt-16 md:mt-0 inset-0 md:w-full md:h-full object-cover ${item.key === 'outdoor-light' ? 'z-30' : 'z-20'}`}
            src={item.objectSrc}
            alt={'exterior'}
            width={3000}
            height={3000}
            quality={100}
            priority
            unoptimized
          />
        ))
      )}

      <SubmitModal />

    </main>
  );
}