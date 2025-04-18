'use client'

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Box, Loader, Send } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { changePreview, changeShowFinalQuoteModal, resetAll } from "@/redux/globalSlice";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { formatEuroPrice } from "@/lib/utils";
import { Button } from "../../ui/button";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";



export default function SubmitModal() {

    const [emailLoading, setEmailLoading] = useState<boolean>(false);
    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(2022, 0, 20),
        to: addDays(new Date(2022, 0, 20), 20),
    })

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { finalQuote, showFinalQuoteModal } = useSelector((state: any) => state.global);
    const dispatch = useDispatch();

    const getExteriorPrice = useCallback(() => {
        return finalQuote.exterior.reduce((total: any, item: any) => total + (Number(item.price) || 0), 0);
    }, [finalQuote]);

    const getInsidePrice = useCallback(() => {
        return finalQuote.interior.reduce((total: any, item: any) => total + (Number(item.price) || 0), 0);
    }, [finalQuote]);


    const sendEmail = useCallback(async (data: any) => {
        setEmailLoading(true);

        // mvgzrnqn : ali
        try {
            const response = await fetch("https://formspree.io/f/xnnjyppv", {
                method: "POST",
                headers: { "Accept": "application/json" },
                body: JSON.stringify({
                    fullName: data.fullName,
                    email: data.email,
                    address: data.address,
                    phone: data.phone,
                    zipcode: data.zipcode,
                    surface: finalQuote.surface,
                    depth: finalQuote.depth,
                    width: finalQuote.width,
                    date: `from : ${date?.from} , to : ${date?.to}`,
                    exteriorPrice: getExteriorPrice(),
                    insidePrice: getInsidePrice(),
                    totalPrice: formatEuroPrice(getInsidePrice() + getExteriorPrice()),
                }),
            });

            if (response.ok) {
                toast.success("Request submitted successfully! Check your email.");
                dispatch(changeShowFinalQuoteModal(false));
                dispatch(resetAll());
            } else {
                toast.error("Failed to send email. Try again later.");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
        } finally {
            setEmailLoading(false);
        }
    }, [dispatch, finalQuote, getExteriorPrice, getInsidePrice]);

    return (
        <Dialog open={showFinalQuoteModal} >
            <DialogContent onCloseHandler={() => dispatch(changeShowFinalQuoteModal(false))} className="max-w-[95vw] md:w-10/12 rounded-2xl overflow-y-scroll max-h-[85vh] ">
                <DialogHeader>
                    <DialogTitle className="text-left">Submit Price Request</DialogTitle>
                    <DialogDescription className="text-left text-xs md:text-sm">
                        Make a quote to get your selected services exact price in your email. please ensure that you enter the right email , our team will answer very soon.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


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
                                    <Label className="text-base text-muted-foreground">€ {getExteriorPrice()} , {Math.trunc(getExteriorPrice() / 3)} Hours</Label>
                                </div>
                                <div className="flex flex-row justify-between gap-x-3 items-center">
                                    <Label className="font-semibold text-base">Inside:</Label>
                                    <Label className="text-base text-muted-foreground">€ {getInsidePrice()} , {Math.trunc(getInsidePrice() / 3)} Hours</Label>
                                </div>
                                <div className="flex flex-row justify-between gap-x-3 items-center">
                                    <Label className="font-semibold text-base">Total:</Label>
                                    <Label className="text-base text-muted-foreground">€ {formatEuroPrice((getInsidePrice() + getExteriorPrice() || '0'))}</Label>
                                </div>
                            </div>
                            <div className="flex justify-center mt-5">
                                <Calendar
                                    initialFocus
                                    mode="range"
                                    defaultMonth={date?.from}
                                    selected={date}
                                    onSelect={(e) => {
                                        setDate(e)
                                    }}
                                    numberOfMonths={2}
                                />
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
                            <div className="flex flex-col items-start gap-y-2">
                                <Label>Address</Label>
                                <Input {...register("address", { required: "address is required" })} placeholder="Address" />
                                {errors.address && <p className="text-red-500 text-sm">{"address is required"}</p>}
                            </div>
                            <div className="flex flex-col items-start gap-y-2">
                                <Label>Zipcode</Label>
                                <Input {...register("zipcode", { required: "zipcode is required" })} placeholder="Zipcode" />
                                {errors.zipcode && <p className="text-red-500 text-sm">{"zipcode is required"}</p>}
                            </div>
                            <div className="flex flex-col items-start gap-y-2">
                                <Label>Phone</Label>
                                <Input {...register("phone", { required: "phone is required" })} placeholder="Phone" />
                                {errors.phone && <p className="text-red-500 text-sm">{"phone is required"}</p>}
                            </div>
                            <DialogFooter>
                                <Button onClick={(e) => {
                                    e.stopPropagation()
                                    dispatch(changePreview(true))
                                }} className="w-full h-12 font-semibold mt-3 md:mt-0" type="button">
                                    <Box />
                                    3D Preview
                                </Button>
                                <Button disabled={emailLoading} className="w-full h-12 font-semibold" type="submit">
                                    <Send />
                                    {emailLoading ? <Loader className="animate-spin" /> : "Submit Request"}
                                </Button>
                            </DialogFooter>
                        </form>
                    </div>

                </div>
            </DialogContent>
        </Dialog>
    )
}