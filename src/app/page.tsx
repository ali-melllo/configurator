'use client'

import { Button } from "@/components/ui/button";
import { changeShowFinalQuoteModal, changeView, resetAll } from "@/redux/globalSlice";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatEuroPrice } from "@/lib/utils";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Loader } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";


export default function Page() {

  const { showExterior, finalQuote, view, showInside, showFinalQuoteModal } = useSelector((state: any) => state.global);
  const [imageLoaded, setImageLoaded] = useState<boolean>(true);
  const [emailLoading, setEmailLoading] = useState<boolean>(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

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


  const sendEmail = useCallback(async (data: any) => {
    setEmailLoading(true);
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "products": [...finalQuote.interior, ...finalQuote.exterior],
          "email": data.email,
          "fullName": data.fullName
        }),
      });
      toast("Price Request successfully submitted. We will answer to your email shortly.");
      dispatch(resetAll());
    } catch (err) {
      console.error("Error sending email:", err);
    }
    setEmailLoading(false);
  },[dispatch, finalQuote.exterior, finalQuote.interior]) 


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
          />
        ))
      )}

      <Dialog open={showFinalQuoteModal} >
        <DialogContent onCloseHandler={() => dispatch(changeShowFinalQuoteModal(false))} className="max-w-[95vw] md:w-6/12 rounded-2xl max-h-[85vh] ">
          <DialogHeader>
            <DialogTitle className="text-left">Submit Price Request</DialogTitle>
            <DialogDescription className="text-left text-xs md:text-sm">
              Make a quote to get your selected services exact price in your email. please ensure that you enter the right email , our team will answer very soon.
            </DialogDescription>
          </DialogHeader>
          <Card className="w-full mt-5">
            <CardContent>
              <div className="grid w-full items-center gap-y-2 pt-5">
                <div className="flex flex-row justify-between gap-x-3 items-center">
                  <Label className="font-semibold text-base">Surface:</Label>
                  <Label className="text-base text-muted-foreground -mr-2">{finalQuote.surface} m²</Label>
                </div>
                <div className="flex flex-row justify-between gap-x-3 items-center">
                  <Label className="font-semibold text-base">Depth:</Label>
                  <Label className="text-base text-muted-foreground">{finalQuote.depth} cm</Label>
                </div>
                <div className="flex flex-row justify-between gap-x-3 items-center">
                  <Label className="font-semibold text-base">Width:</Label>
                  <Label className="text-base text-muted-foreground">{finalQuote.width} cm</Label>
                </div>
                <div className="flex flex-row justify-between gap-x-3 items-center">
                  <Label className="font-semibold text-base">Exterior:</Label>
                  <Label className="text-base text-muted-foreground">€ {getExteriorPrice()}</Label>
                </div>
                <div className="flex flex-row justify-between gap-x-3 items-center">
                  <Label className="font-semibold text-base">Inside:</Label>
                  <Label className="text-base text-muted-foreground">€ {getInsidePrice()}</Label>
                </div>
                <div className="flex flex-row justify-between gap-x-3 items-center">
                  <Label className="font-semibold text-base">Total:</Label>
                  <Label className="text-base text-muted-foreground">€ {formatEuroPrice((getInsidePrice() + getExteriorPrice() || '0'))}</Label>
                </div>
              </div>

            </CardContent>
          </Card>
          <div autoFocus={false} className="grid gap-4 py-4">
            <form onSubmit={handleSubmit(sendEmail)} className="grid gap-4 py-4">
              <div className="flex flex-col items-start gap-y-2">
                <Label>Full Name</Label>
                <Input {...register("fullName", { required: "Full name is required" })} placeholder="Full Name" />
                {errors.fullName && <p className="text-red-500 text-sm">{"Full Name is required"}</p>}
              </div>
              <div className="flex flex-col items-start gap-y-2">
                <Label>Email</Label>
                <Input {...register("email", { required: "Email is required" })} placeholder="Email" />
                {errors.email && <p className="text-red-500 text-sm">{"Email is required"}</p>}
              </div>
              <DialogFooter>
                <Button disabled={emailLoading} className="w-full h-12 font-semibold" type="submit">
                  {emailLoading ? <Loader className="animate-spin" /> : "Submit Request"}
                </Button>
              </DialogFooter>
            </form>

          </div>

        </DialogContent>
      </Dialog>

    </main>
  );
}