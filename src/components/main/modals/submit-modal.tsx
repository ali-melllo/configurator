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
import { addDays, format } from "date-fns";
import { useLang } from "@/contexts/LangContext";
import emailjs from "@emailjs/browser";



export default function SubmitModal() {

    const { t } = useLang();

    const [emailLoading, setEmailLoading] = useState<boolean>(false);
    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(),
        to: addDays(new Date(), 20),
    })

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { finalQuote, showFinalQuoteModal } = useSelector((state: any) => state.global);
    const dispatch = useDispatch();

    const getExteriorPrice = useCallback(() => {
        return finalQuote.exterior.reduce((total: number, item: any) => {
            return total + (
                item.calc === 'per-sq' || item.calc === 'per-m'
                    ? Number(item.price) * Number(item.meter) :
                    (item.calc === 'per-p' && item.piece) ? Number(item.price * item.piece) || 0
                        : Number(item.price) || 0
            );
        }, 0);
    }, [finalQuote]);


    const getInsidePrice = useCallback(() => {
        return finalQuote.interior.reduce((total: number, item: any) => {
            return total + (
                item.calc === 'per-sq' || item.calc === 'per-m'
                    ? Number(item.price) * Number(item.meter) :
                    (item.calc === 'per-p' && item.piece) ? Number(item.price * item.piece) || 0
                        : Number(item.price) || 0
            );
        }, 0);
    }, [finalQuote]);

    const getExteriorHours = useCallback(() => {
        return finalQuote.exterior.reduce((total: number, item: any) => {
            let hours = 0;

            if (item.calc === 'per-sq' && item.key === 'daklicht') {
                hours = Number(item.hours) || 0;
            } else if (item.calc === 'per-sq' || item.calc === 'per-m') {
                hours = (Number(item.hours) || 0) * (Number(item.meter) || 0);
            } else {
                hours = Number(item.hours) || 0;
            }

            return total + hours;
        }, 0);
    }, [finalQuote]);


    const getInsideHours = useCallback(() => {
        return finalQuote.interior.reduce((total: number, item: any) => {
            let hours = 0;
            if (item.calc === 'per-sq' || item.calc === 'per-m') {
                hours = (Number(item.hours) || 0) * (Number(item.meter) || 0);
            } else {
                hours = Number(item.hours) || 0;
            }

            return total + hours;
        }, 0);
    }, [finalQuote]);

    // const sendEmail = useCallback(async (data: any) => {
    //     setEmailLoading(true);

    //     // mvgzrnqn : ali
    //     try {
    //         const response = await fetch("https://formspree.io/f/mvgzrnqn", {
    //             method: "POST",
    //             headers: { "Accept": "application/json" },
    //             body: JSON.stringify({
    //                 fullName: data.fullName,
    //                 email: data.email,
    //                 address: data.address,
    //                 phone: data.phone,
    //                 zipcode: data.zipcode,
    //                 surface: finalQuote.surface,
    //                 depth: finalQuote.depth,
    //                 width: finalQuote.width,
    //                 date: `from : ${date?.from} , to : ${date?.to}`,
    //                 exteriorPrice: getExteriorPrice(),
    //                 insidePrice: getInsidePrice(),
    //                 totalPrice: formatEuroPrice(getInsidePrice() + getExteriorPrice()),
    //             }),
    //         });

    //         if (response.ok) {
    //             toast.success("Request submitted successfully! Check your email.");
    //             dispatch(changeShowFinalQuoteModal(false));
    //             dispatch(resetAll());


    //             emailjs.send("service_qgdd31g", "template_etjfih4", {
    //                 user_name: data.fullName,
    //                 user_email: data.email,
    //             }, "YOUR_USER_ID");

    //         } else {
    //             toast.error("Failed to send email. Try again later.");
    //         }
    //     } catch (error) {
    //         toast.error("An error occurred. Please try again.");
    //     } finally {
    //         setEmailLoading(false);
    //     }
    // }, [dispatch, finalQuote, getExteriorPrice, getInsidePrice]);

    const allSelectedServices = [...finalQuote.exterior, ...finalQuote.interior]
        .map((item) => t(item.objectName))
        .join(' --- ');

    const sendEmail = async (data: any) => {
        setEmailLoading(true);
        try {
            await emailjs.send(
                "service_6q6znli",
                "template_c0gom1n",
                {
                    from_name: data.fullName,
                    to_name: "Persian Top Owner",
                    to_email: "arshiyaelias@gmail.com",
                    address: data.address,
                    phone: data.phone,
                    zipcode: data.zipcode,
                    surface: finalQuote.surface,
                    depth: finalQuote.depth,
                    width: finalQuote.width,
                    date: `from ${format( date?.from || new Date() , "PPP")} to ${format( date?.to || new Date() , "PPP")}`,
                    exteriorPrice: `${getExteriorPrice()} (€)`,
                    exteriorHours: getExteriorHours(),
                    insideHours: getInsideHours(),
                    orders: allSelectedServices,
                    insidePrice: `${getInsidePrice()} (€)`,
                    totalPrice: formatEuroPrice(getInsidePrice() + getExteriorPrice()),
                },
                "6oaMkLxoCGxZdHdZl"
            );

            await emailjs.send(
                "service_6q6znli",
                "template_pc7jbxm",
                {
                    from_name: "Persian top Company",
                    to_name: data.fullName,
                    to_email: data.email,
                    address: data.address,
                    phone: data.phone,
                    zipcode: data.zipcode,
                    surface: finalQuote.surface,
                    depth: finalQuote.depth,
                    width: finalQuote.width,
                    date: `from ${format( date?.from || new Date() , "PPP")} to ${format( date?.to || new Date() , "PPP")}`,
                    exteriorPrice: `${getExteriorPrice()} (€)`,
                    exteriorHours: getExteriorHours(),
                    orders: allSelectedServices,
                    insideHours: getInsideHours(),
                    insidePrice: `${getInsidePrice()} (€)`,
                    totalPrice: formatEuroPrice(getInsidePrice() + getExteriorPrice()),
                },
                "6oaMkLxoCGxZdHdZl"
            );

            toast.success(t("notifications.requestSuccess"));
            dispatch(changeShowFinalQuoteModal(false));
            dispatch(resetAll());
        } catch (err) {
            toast.error("Failed to send one or both emails. Please try sending again");
        } finally {
            setEmailLoading(false);
        }
    };

    return (
        <Dialog open={showFinalQuoteModal}>
            <DialogContent onCloseHandler={() => dispatch(changeShowFinalQuoteModal(false))} className="max-w-[95vw] md:w-10/12 rounded-2xl overflow-y-scroll max-h-[85vh] ">
                <DialogHeader>
                    <DialogTitle className="text-left">{t("finalQuote.title")}</DialogTitle>
                    <DialogDescription className="text-left text-xs md:text-sm">
                        {t("finalQuote.description")}
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="w-full mt-5">
                        <CardContent>
                            <div className="grid w-full items-center gap-y-2 pt-5">
                                <div className="flex flex-row justify-between gap-x-3 items-center">
                                    <Label className="font-semibold text-base">{t("finalQuote.surface")}:</Label>
                                    <Label className="text-base text-muted-foreground -mr-2">{finalQuote.surface} m²</Label>
                                </div>
                                <div className="flex flex-row justify-between gap-x-3 items-center">
                                    <Label className="font-semibold text-base">{t("finalQuote.depth")}:</Label>
                                    <Label className="text-base text-muted-foreground">{finalQuote.depth} cm</Label>
                                </div>
                                <div className="flex flex-row justify-between gap-x-3 items-center">
                                    <Label className="font-semibold text-base">{t("finalQuote.width")}:</Label>
                                    <Label className="text-base text-muted-foreground">{finalQuote.width} cm</Label>
                                </div>
                                <div className="flex flex-row justify-between gap-x-3 items-center">
                                    <Label className="font-semibold text-base">{t("finalQuote.exterior")}:</Label>
                                    <Label className="text-base text-muted-foreground">€ {getExteriorPrice()} , {getExteriorHours()} {t("finalQuote.hours")}</Label>
                                </div>
                                <div className="flex flex-row justify-between gap-x-3 items-center">
                                    <Label className="font-semibold text-base">{t("finalQuote.inside")}:</Label>
                                    <Label className="text-base text-muted-foreground">€ {getInsidePrice()} , {getInsideHours()} {t("finalQuote.hours")}</Label>
                                </div>
                                <div className="flex flex-row justify-between gap-x-3 items-center">
                                    <Label className="font-semibold text-base">{t("finalQuote.total")}:</Label>
                                    <Label className="text-base text-muted-foreground">€ {formatEuroPrice((getInsidePrice() + getExteriorPrice() || '0'))}</Label>
                                </div>
                            </div>
                            <div className="flex justify-center mt-5">
                                <Calendar
                                    initialFocus
                                    mode="range"
                                    defaultMonth={date?.from}
                                    selected={date}
                                    onSelect={(e) => setDate(e)}
                                    numberOfMonths={2}
                                />
                            </div>
                        </CardContent>
                    </Card>
                    <div autoFocus={false} className="grid gap-4 py-4">
                        <form onSubmit={handleSubmit(sendEmail)} className="grid gap-4 py-4">
                            <div className="flex flex-col items-start gap-y-2">
                                <Label>{t("form.fullName")}</Label>
                                <Input {...register("fullName", { required: t("form.errors.fullName") })} placeholder={t("form.fullName")} />
                                {errors.fullName && <p className="text-red-500 text-sm">{t("form.errors.fullName")}</p>}
                            </div>
                            <div className="flex flex-col items-start gap-y-2">
                                <Label>{t("form.email")}</Label>
                                <Input {...register("email", { required: t("form.errors.email") })} placeholder={t("form.email")} />
                                {errors.email && <p className="text-red-500 text-sm">{t("form.errors.email")}</p>}
                            </div>
                            <div className="flex flex-col items-start gap-y-2">
                                <Label>{t("form.address")}</Label>
                                <Input {...register("address", { required: t("form.errors.address") })} placeholder={t("form.address")} />
                                {errors.address && <p className="text-red-500 text-sm">{t("form.errors.address")}</p>}
                            </div>
                            <div className="flex flex-col items-start gap-y-2">
                                <Label>{t("form.zipcode")}</Label>
                                <Input {...register("zipcode", { required: t("form.errors.zipcode") })} placeholder={t("form.zipcode")} />
                                {errors.zipcode && <p className="text-red-500 text-sm">{t("form.errors.zipcode")}</p>}
                            </div>
                            <div className="flex flex-col items-start gap-y-2">
                                <Label>{t("form.phone")}</Label>
                                <Input {...register("phone", { required: t("form.errors.phone") })} placeholder={t("form.phone")} />
                                {errors.phone && <p className="text-red-500 text-sm">{t("form.errors.phone")}</p>}
                            </div>
                            <DialogFooter>
                                <Button onClick={(e) => {
                                    e.stopPropagation()
                                    dispatch(changePreview(true))
                                }} className="w-full h-12 font-semibold mt-3 md:mt-0" type="button">
                                    <Box />
                                    {t("finalQuote.preview")}
                                </Button>
                                <Button disabled={emailLoading} className="w-full h-12 font-semibold" type="submit">
                                    <Send />
                                    {emailLoading ? <Loader className="animate-spin" /> : t("finalQuote.submit")}
                                </Button>
                            </DialogFooter>
                        </form>
                    </div>
                </div>
            </DialogContent>
        </Dialog>

    )
}