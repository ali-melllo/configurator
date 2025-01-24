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
import { Lock } from "lucide-react";
import { useDispatch } from "react-redux";
import { changeFacade } from "@/redux/globalSlice";

export default function SideBar() {

    const [constructionOld, setConstructionOld] = useState<boolean>(false);
    const dispatch = useDispatch();

    const handleConstructionOldChange = useCallback((event: any) => {
        console.log(event)
        setConstructionOld(event)
    }, [])


    return (
        <div className="relative overflow-y-scroll overflow-x-hidden w-3/12 pt-20 pb-72 h-full p-5 shadow-2xl z-20 dark:border-r border-dashed dark:border-gray-700">

            {/* //////////////////////////////////////////////////// */}

            <Card className="w-full mt-5">
                <CardHeader className="flex pt-3 flex-row justify-between items-center">
                    <CardTitle>Surface Area</CardTitle>
                    <CardTitle className="font-bold text-2xl text-primary -mr-2">8 m²</CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid grid-cols-2 w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label className="text-sm" htmlFor="width">Width</Label>
                                <Input id="width" placeholder="400 cm" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label className="text-sm" htmlFor="depth">Depth</Label>
                                <Input id="depth" placeholder="200 cm" />
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>

            {/* //////////////////////////////////////////////////// */}

            <Accordion type="single" collapsible className="w-full rounded-xl border bg-card text-card-foreground shadow mt-5 px-5">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Exterior</AccordionTrigger>
                    <AccordionContent>
                        <Accordion type="single" collapsible className="w-full border-b bg-card text-card-foreground">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-base font-semibold">Facade cladding</AccordionTrigger>
                                <AccordionContent>
                                    <div className="flex flex-col gap-3">
                                        <p className="text-muted-foreground">Composite</p>
                                        <div className="flex items-center overflow-scroll gap-x-4">
                                            <Image
                                                onClick={() => dispatch(changeFacade({ show: true, src: '/facade-composite-1.png' }))}
                                                className="size-16 rounded-lg shadow cursor-pointer"
                                                src={'/composite-selector-1.svg'}
                                                alt={'composite'}
                                                width={150}
                                                height={150}
                                            />
                                            <Image
                                                onClick={() => dispatch(changeFacade({ show: true, src: '/facade-composite-2.png' }))}
                                                className="size-16 rounded-lg shadow cursor-pointer"
                                                src={'/composite-selector-2.svg'}
                                                alt={'composite'}
                                                width={150}
                                                height={150}
                                            />
                                            <div className="flex justify-center items-center size-16 rounded-lg shadow backdrop-blur-lg bg-muted to-transparent [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background">
                                                <Lock />
                                            </div>
                                            <div className="flex justify-center items-center size-16 rounded-lg shadow backdrop-blur-lg bg-muted to-transparent [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background">
                                                <Lock />
                                            </div>
                                            <div className="flex justify-center items-center size-16 rounded-lg shadow backdrop-blur-lg bg-muted to-transparent [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background">
                                                <Lock />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3 mt-3">
                                        <p className="text-muted-foreground">Brick</p>
                                        <div className="flex items-center overflow-scroll gap-x-4">
                                            <Image
                                                onClick={() => dispatch(changeFacade({ show: true, src: '/brick-1.png' }))}
                                                className="size-16 rounded-lg shadow cursor-pointer"
                                                src={'/brick-selector-1.svg'}
                                                alt={'composite'}
                                                width={150}
                                                height={150}
                                            />
                                            <Image
                                                onClick={() => dispatch(changeFacade({ show: true, src: '/brick-2.png' }))}
                                                className="size-16 rounded-lg shadow cursor-pointer"
                                                src={'/brick-selector-2.svg'}
                                                alt={'composite'}
                                                width={150}
                                                height={150}
                                            />
                                            <div className="flex justify-center items-center size-16 rounded-lg shadow backdrop-blur-lg bg-muted to-transparent [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background">
                                                <Lock />
                                            </div>
                                            <div className="flex justify-center items-center size-16 rounded-lg shadow backdrop-blur-lg bg-muted to-transparent [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background">
                                                <Lock />
                                            </div>
                                            <div className="flex justify-center items-center size-16 rounded-lg shadow backdrop-blur-lg bg-muted to-transparent [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background">
                                                <Lock />
                                            </div>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Accordion type="single" disabled collapsible className="w-full text-gray-400 dark:text-gray-600 border-b bg-card">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-base font-semibold">Frames </AccordionTrigger>
                                <AccordionContent>

                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Accordion type="single" disabled collapsible className="w-full text-gray-400 dark:text-gray-600 border-b bg-card">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-base font-semibold">Dakoverstek </AccordionTrigger>
                                <AccordionContent>

                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Accordion type="single" disabled collapsible className="w-full text-gray-400 dark:text-gray-600 border-b bg-card">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-base font-semibold">Daktrim </AccordionTrigger>
                                <AccordionContent>

                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Accordion type="single" disabled collapsible className="w-full text-gray-400 dark:text-gray-600 border-b bg-card">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-base font-semibold">Daklich </AccordionTrigger>
                                <AccordionContent>

                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Accordion type="single" disabled collapsible className="w-full text-gray-400 dark:text-gray-600 border-b bg-card">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-base font-semibold">Outdoor lightning </AccordionTrigger>
                                <AccordionContent>

                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible className="w-full rounded-xl border bg-card text-card-foreground shadow mt-5 px-5">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Inside</AccordionTrigger>
                    <AccordionContent>
                        <Accordion type="single" disabled collapsible className="w-full text-gray-400 dark:text-gray-600 border-b bg-card">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-base font-semibold">Plaster Board </AccordionTrigger>
                                <AccordionContent>

                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Accordion type="single" disabled collapsible className="w-full text-gray-400 dark:text-gray-600 border-b bg-card">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-base font-semibold">Heating </AccordionTrigger>
                                <AccordionContent>

                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Accordion type="single" disabled collapsible className="w-full text-gray-400 dark:text-gray-600 border-b bg-card">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-base font-semibold">Wall Lamp </AccordionTrigger>
                                <AccordionContent>

                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Accordion type="single" disabled collapsible className="w-full text-gray-400 dark:text-gray-600 border-b bg-card">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-base font-semibold">Light point </AccordionTrigger>
                                <AccordionContent>

                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Accordion type="single" disabled collapsible className="w-full text-gray-400 dark:text-gray-600 border-b bg-card">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-base font-semibold">Outdoor light switch </AccordionTrigger>
                                <AccordionContent>

                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            {/* //////////////////////////////////////////////////////////////// */}

            <Card className="w-full mt-5">
                <CardHeader className="pt-3">
                    <CardTitle>Check Out Order Price</CardTitle>
                    <CardDescription className="text-sm !mt-2">
                        <span className="!font-semibold text-foreground">Note:</span> the exact price will be emailed to your account for confirmation
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-y-2">
                            <div className="flex flex-row justify-between gap-x-3 items-center">
                                <Label className="font-bold text-lg">Surface:</Label>
                                <Label className="text-base text-muted-foreground -mr-2">8 m²</Label>
                            </div>
                            <div className="flex flex-row justify-between gap-x-3 items-center">
                                <Label className="font-bold text-lg">Depth:</Label>
                                <Label className="text-base text-muted-foreground">250 cm</Label>
                            </div>
                            <div className="flex flex-row justify-between gap-x-3 items-center">
                                <Label className="font-bold text-lg">Width:</Label>
                                <Label className="text-base text-muted-foreground">200 cm</Label>
                            </div>
                            <div className="flex flex-row justify-between gap-x-3 items-center">
                                <Label className="font-bold text-lg">Exterior:</Label>
                                <Label className="text-base text-muted-foreground">€ 43.983</Label>
                            </div>
                            <div className="flex flex-row justify-between gap-x-3 items-center">
                                <Label className="font-bold text-lg">Inside:</Label>
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

            <div className="w-3/12 inset-x-0 fixed flex justify-center items-start pb-10  bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] bottom-0">

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
                                <Label htmlFor="name" className="text-right">
                                    Full Name
                                </Label>
                                <Input
                                    id="name"
                                    placeholder="Full Name "
                                    className="col-span-3"
                                />
                            </div>
                            <div className="flex flex-col items-start gap-y-2">
                                <Label htmlFor="email" className="text-right">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    placeholder="Email "
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