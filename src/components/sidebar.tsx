'use client'

import { useCallback, useState } from "react";
import { Checkbox } from "./ui/checkbox";
import * as React from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image";
import { Check } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToExterior, changeExterior } from "@/redux/globalSlice";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SurfaceCard from "./main/surface-card";
import { MATERIALS } from "@/data/static";


export default function SideBar() {

    const [constructionOld, setConstructionOld] = useState<boolean>(false);

    const dispatch = useDispatch();
    const { finalQuote } = useSelector((state: any) => state.global);

    const handleConstructionOldChange = useCallback((event: any) => {
        setConstructionOld(event)
    }, []);

    return (
        <div className="relative overflow-y-scroll overflow-x-hidden w-full md:w-3/12 md:pt-20 pb-24 md:pb-72 md:h-screen p-5 shadow-2xl md:z-20 dark:border-r border-dashed dark:border-gray-700">

            <SurfaceCard />

            {/* //////////////////////////////////////////////////// */}

            <Tabs defaultValue="account" className="my-5">
                <TabsList >
                    <TabsTrigger value="account">
                        Exterior
                    </TabsTrigger>
                    <TabsTrigger value="password">
                        Inside
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="rounded-2xl">
                    {
                        MATERIALS.exterior.map((material) => (
                            <Accordion key={material.key} type="single" collapsible className="w-full rounded-xl mt-3 border shadow px-5 border-b bg-card text-card-foreground">
                                <AccordionItem value={material.name}>
                                    <AccordionTrigger className="text-base font-semibold">{material.name}</AccordionTrigger>
                                    <AccordionContent>
                                        {material.items.map((subMaterial) => (
                                            <div key={subMaterial.name} className="flex flex-col mt-2 gap-3">
                                                <p className="text-muted-foreground">{subMaterial.name}</p>
                                                <div className="flex items-center overflow-scroll gap-x-4">
                                                    {subMaterial.items.map((image) => (
                                                        <div key={image.src} className="relative">
                                                            {finalQuote.exterior.find((x:any) => x.key === material.key && x.objectSrc === image.objectSrc ) &&
                                                                <span className="absolute top-0 right-0 z-20 bg-primary text-black rounded-xl size-5 flex justify-center items-center"><Check className="size-4" /></span>
                                                            }
                                                            <Image
                                                                onClick={() => {
                                                                    dispatch(changeExterior(true));
                                                                    dispatch(addToExterior({
                                                                        key: material.key,
                                                                        categoryName: material.name,
                                                                        objectSrc: image.objectSrc,
                                                                        objectName: image.fullName
                                                                    }));
                                                                }}
                                                                className="size-16 my-1 rounded-xl shadow relative cursor-pointer"
                                                                src={image.src}
                                                                alt={image.fullName}
                                                                width={150}
                                                                height={150}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}

                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        ))
                    }
                </TabsContent>
            </Tabs>

            {/* //////////////////////////////////////////////////////////////// */}

            <Card className="w-full mt-3">
                <CardHeader className="pt-3 md:pt-5">
                    <CardTitle>Check Out Order Price</CardTitle>
                    <CardDescription className="text-sm !mt-2">
                        <span className="!font-semibold text-foreground">Note:</span> the exact price will be emailed to your account for confirmation
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-y-1 md:gap-y-2">
                            <div className="flex flex-row justify-between gap-x-3 items-center">
                                <Label className="font-bold text-base">Surface:</Label>
                                <Label className="text-base text-muted-foreground -mr-2">8 m²</Label>
                            </div>
                            <div className="flex flex-row justify-between gap-x-3 items-center">
                                <Label className="font-bold text-base">Depth:</Label>
                                <Label className="text-base text-muted-foreground">250 cm</Label>
                            </div>
                            <div className="flex flex-row justify-between gap-x-3 items-center">
                                <Label className="font-bold text-base">Width:</Label>
                                <Label className="text-base text-muted-foreground">200 cm</Label>
                            </div>
                            <div className="flex flex-row justify-between gap-x-3 items-center">
                                <Label className="font-bold text-base">Exterior:</Label>
                                <Label className="text-base text-muted-foreground">€ 43.983</Label>
                            </div>
                            <div className="flex flex-row justify-between gap-x-3 items-center">
                                <Label className="font-bold text-base">Inside:</Label>
                                <Label className="text-base text-muted-foreground">€ 1.179</Label>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>

            {/* //////////////////////////////////////////////////////////////// */}

            <div className="flex items-center space-x-2 mt-5">
                <Checkbox onCheckedChange={(e) => handleConstructionOldChange(e)} id="construction" />
                <label
                    htmlFor="construction"
                    className="text-lg font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    House is built before 1980
                </label>
            </div>
            {constructionOld && <p className="text-destructive transition-all duration-200 pt-1 text-sm">For homes built before 1980, each situation must be assessed on a case-by-case basis and a price quote will follow later.</p>}

            {/* //////////////////////////////////////////////////////////////// */}

            <div className="md:w-3/12 inset-x-0 fixed flex justify-center items-start pb-5 md:pb-8  bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] bottom-0">

                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="py-6 w-11/12 !z-[999] shadow-xl text-lg mt-5 font-semibold">
                            Request a Quote
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Submit Price Request</DialogTitle>
                            <DialogDescription>
                                Make a quote to get your selected services exact price in your email. please ensure that you enter the right email , our team will answer very soon.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="flex flex-col items-start gap-y-2">
                                <Label className="text-right">
                                    Full Name
                                </Label>
                                <Input
                                    placeholder="Full Name "
                                    className="col-span-3"
                                />
                            </div>
                            <div className="flex flex-col items-start gap-y-2">
                                <Label className="text-right">
                                    Email
                                </Label>
                                <Input
                                    placeholder="Email"
                                    className="col-span-3"
                                />
                            </div>
                            <Card className="w-full mt-5">
                                <CardContent>
                                    <form>
                                        <div className="grid w-full items-center gap-y-2 pt-5">
                                            <div className="flex flex-row justify-between gap-x-3 items-center">
                                                <Label className="font-semibold text-base">Surface:</Label>
                                                <Label className="text-base text-muted-foreground -mr-2">8 m²</Label>
                                            </div>
                                            <div className="flex flex-row justify-between gap-x-3 items-center">
                                                <Label className="font-semibold text-base">Depth:</Label>
                                                <Label className="text-base text-muted-foreground">250 cm</Label>
                                            </div>
                                            <div className="flex flex-row justify-between gap-x-3 items-center">
                                                <Label className="font-semibold text-base">Width:</Label>
                                                <Label className="text-base text-muted-foreground">200 cm</Label>
                                            </div>
                                            <div className="flex flex-row justify-between gap-x-3 items-center">
                                                <Label className="font-semibold text-base">Exterior:</Label>
                                                <Label className="text-base text-muted-foreground">€ 43.983</Label>
                                            </div>
                                            <div className="flex flex-row justify-between gap-x-3 items-center">
                                                <Label className="font-semibold text-base">Inside:</Label>
                                                <Label className="text-base text-muted-foreground">€ 1.179</Label>
                                            </div>
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                        <DialogFooter>
                            <Button className="w-full font-semibold" type="submit">Submit Request</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>


        </div>
    )
}