'use client'

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Loader } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { changeShowFinalQuoteModal, resetAll } from "@/redux/globalSlice";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { formatEuroPrice } from "@/lib/utils";
import { Button } from "../../ui/button";
import { Resend } from "resend";


export default function SubmitModal() {

    const resend = new Resend("re_EghVVem2_H5dJnsLikeXtnwjEym4NPKKS");

    const [emailLoading, setEmailLoading] = useState<boolean>(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { finalQuote, showFinalQuoteModal } = useSelector((state: any) => state.global);
    const dispatch = useDispatch();

    const getExteriorPrice = useCallback(() => {
        return finalQuote.exterior.reduce((total: any, item: any) => total + (Number(item.price) || 0), 0);
    }, [finalQuote]);

    const getInsidePrice = useCallback(() => {
        return finalQuote.interior.reduce((total: any, item: any) => total + (Number(item.price) || 0), 0);
    }, [finalQuote]);

    // const sendEmail = useCallback(async (data: any) => {
    //     setEmailLoading(true);
    //     try {
    //         // const result = await fetch("/api/send-email", {
    //         //     method: "POST",
    //         //     headers: {
    //         //         "Content-Type": "application/json",
    //         //     },
    //         //     body: JSON.stringify({
    //         //         "products": [...finalQuote.interior, ...finalQuote.exterior],
    //         //         "email": data.email,
    //         //         "fullName": data.fullName,
    //         //         "constructionOld": finalQuote.constructionOld || false
    //         //     }),
    //         // });

    //         const emailResponse = await resend.emails.send({
    //             from: "Acme <onboarding@resend.dev>",
    //             to: "alimelllo32@gmail.com",
    //             subject: "🛒 New Product Price Submission",
    //             html: `
    //                 <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1);">
    //                   <h2 style="color: #333; text-align: center;">🛍️ New Price Request</h2>
    //                   <p style="color: #666; text-align: center;">Prices request by <strong>${data.fullName}</strong>:</p>
                      
    //                   <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
    //                     <thead>
    //                       <tr style="background-color: #f4f4f4; border-bottom: 2px solid #ddd;">
    //                         <th style="padding: 10px; text-align: left;">📦 Products</th>
    //                         <th style="padding: 10px; text-align: right;">💰 Price</th>
    //                       </tr>
    //                     </thead>
    //                     <tbody>
    //                       ${[...finalQuote.interior, ...finalQuote.exterior]
    //                     .map(
    //                         (product) => `
    //                         <tr style="border-bottom: 1px solid #ddd;">
    //                           <td style="padding: 10px;">${product.objectName}</td>
    //                           <td style="padding: 10px; text-align: right;">${product.price} €</td>
    //                         </tr>`
    //                     )
    //                     .join("")}
    //                     </tbody>
    //                   </table>
            
    //                   ${finalQuote.constructionOld  ?
    //                     '<p style="margin-top: 20px;font-size:0.8em; color: #555; text-align: center;"><strong>Note:</strong> the house is built before 1980 </p>' : ''
    //                 }
            
    //                   <p style="margin-top: 20px; color: #555; text-align: center;">
    //                     📧 <strong>Sent by:</strong> ${data.email}
    //                   </p>
            
    //                   <p style="text-align: center; font-size: 12px; color: #999;">
    //                     This is an automated message. Please do not reply.
    //                   </p>
    //                 </div>
    //               `,
    //         });

    //         const finalResponse = new Response(JSON.stringify({ success: true, data: emailResponse }), { status: 200 });
    //         const response = await finalResponse.json();
    //         if (response?.data?.error) {
    //             toast(response.data.error.statusCode + " : " + " " + response.data.error.message);
    //         } else {
    //             toast("Price Request successfully submitted. We will answer to your email shortly.");
    //             dispatch(resetAll());
    //         }
    //     } catch (err: any) {
    //         return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    //     }
    //     setEmailLoading(false);
    // }, [dispatch, finalQuote.constructionOld, finalQuote.exterior, finalQuote.interior, resend.emails])

    const sendEmail = useCallback(async (data: any) => {
        setEmailLoading(true);
        try {
            const response = await fetch("https://api.resend.com/emails", {
                method: "POST",
                headers: {
                    // "Authorization": "Bearer re_EghVVem2_H5dJnsLikeXtnwjEym4NPKKS",
                    "Authorization":"Bearer re_ZWSARbF6_B6GkL1idL17ea8himCNqNyCj",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    from: "onboarding@resend.dev",
                    to: "alimelllo32@gmail.com", 
                    subject: "🛒 New Product Price Submission",
                    html: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1);">
                          <h2 style="color: #333; text-align: center;">🛍️ New Price Request</h2>
                          <p style="color: #666; text-align: center;">Prices requested by <strong>${data.fullName}</strong>:</p>
                          
                          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                            <thead>
                              <tr style="background-color: #f4f4f4; border-bottom: 2px solid #ddd;">
                                <th style="padding: 10px; text-align: left;">📦 Products</th>
                                <th style="padding: 10px; text-align: right;">💰 Price</th>
                              </tr>
                            </thead>
                            <tbody>
                              ${[...finalQuote.interior, ...finalQuote.exterior]
                                .map(
                                    (product) => `
                                    <tr style="border-bottom: 1px solid #ddd;">
                                      <td style="padding: 10px;">${product.objectName}</td>
                                      <td style="padding: 10px; text-align: right;">${product.price} €</td>
                                    </tr>`
                                )
                                .join("")}
                            </tbody>
                          </table>
                
                          ${finalQuote.constructionOld
                            ? '<p style="margin-top: 20px;font-size:0.8em; color: #555; text-align: center;"><strong>Note:</strong> the house is built before 1980 </p>'
                            : ""
                          }
                
                          <p style="margin-top: 20px; color: #555; text-align: center;">
                            📧 <strong>Sent by:</strong> ${data.email}
                          </p>
                
                          <p style="text-align: center; font-size: 12px; color: #999;">
                            This is an automated message. Please do not reply.
                          </p>
                        </div>
                    `,
                }),
            });
    
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.error?.message || "Failed to send email");
            }
    
            toast("Price Request successfully submitted. We will answer to your email shortly.");
            dispatch(resetAll());
        } catch (err: any) {
            toast(`Error: ${err.message}`);
        }
        setEmailLoading(false);
    }, [dispatch, finalQuote.constructionOld, finalQuote.exterior, finalQuote.interior]);
    
    return (
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
    )
}