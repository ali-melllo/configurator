"use client"

import BlurFade from "@/components/magicui/blur-fade";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { TextAnimate } from "@/components/magicui/text-animate";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <div className="pt-24 w-full flex flex-col items-center">
            <GridPattern
                width={30}
                height={30}
                x={-1}
                y={-1}
                strokeDasharray={"4 2"}
                className={cn(
                    "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
                )}
            />
            <TextAnimate className="text-6xl text-center font-bold" animation="blurInUp" by="character">
                Our Services
            </TextAnimate>
            <p className="text-muted-foreground mt-5">Quality and craftsmanship for renovation and expansion.</p>

            <div className="w-10/12 z-20 flex gap-5 mt-10">

                <div className="w-4/12 p-8 bg-background dark:bg-black shadow-xl rounded-2xl flex flex-col">
                    <h2 className="font-extrabold text-3xl">Complete Renovation</h2>
                    <p className="text-muted-foreground mt-5"> Transform your home with our expertise in complete renovations and high-quality finishes for every project.</p>
                    <Image
                        className="mt-5 min-h-96 rounded-xl w-full"
                        src={'/renovation.avif'}
                        alt={'Renovation'}
                        width={300}
                        height={600}
                    />
                </div>
                <div className="w-4/12 p-8  bg-background dark:bg-black shadow-xl rounded-2xl flex flex-col">
                    <h2 className="font-extrabold text-3xl">Home extensions</h2>
                    <p className="text-muted-foreground mt-5">Create extra space with elegant home extensions that perfectly match your living needs and style</p>
                    <Image
                        className="mt-5 min-h-96 rounded-xl w-full"
                        src={'/extension.avif'}
                        alt={'Extension'}
                        width={300}
                        height={600}
                    />
                </div>
                <div className="w-4/12 p-8 bg-background dark:bg-black shadow-xl rounded-2xl flex flex-col">
                    <h2 className="font-extrabold text-3xl">Craftsmanship</h2>
                    <p className="text-muted-foreground mt-5">Experience the highest quality and craftsmanship in all our renovation and expansion projects.</p>
                    <Image
                        className="mt-5 min-h-96 rounded-xl w-full"
                        src={'/craft.avif'}
                        alt={'Craft'}
                        width={300}
                        height={600}
                    />
                </div>
            </div>

            <div
                className="bg-center my-48 bg-cover bg-no-repeat bg-body-img bg-fixed container flex items-center rounded-lg justify-center h-[35em]">
                <div
                    className="flex w-full justify-center items-center gap-5">
                    <div className="w-3/12 z-20 h-full p-10 shadow-2xl rounded-2xl border bg-accent/50">
                        <h2 className="text-3xl font-bold text-primary">★★★★★</h2>
                        <p className="mt-5 text-lg">
                            {" we are very satisfied with the work of Persian top and would definitely recommend him for a job."}
                        </p>
                        <div className="flex flex-col items-start mt-5">
                            <Image
                                className="rounded-full size-10"
                                src={'/peter.avif'}
                                alt={'Rating'}
                                width={50}
                                height={50}
                            />
                            <p className="text-lg">Peter G</p>
                        </div>
                    </div>
                    <div className="w-3/12 z-20 h-full p-10 shadow-2xl rounded-2xl border bg-accent/50">
                        <h2 className="text-3xl font-bold text-primary">★★★★★</h2>
                        <p className="mt-5 text-lg">
                            {"Great experience with renovation, craftsmanship and attention to detail. My house now feels like new!"}
                        </p>
                        <div className="flex flex-col items-start mt-5">
                            <Image
                                className="rounded-full size-10"
                                src={'/sophie.avif'}
                                alt={'Rating'}
                                width={50}
                                height={50}
                            />
                            <p className="text-lg">Sophie K</p>
                        </div>
                    </div>
                    <div className="w-3/12 z-20 h-full p-10 shadow-2xl rounded-2xl border bg-accent/50">
                        <h2 className="text-3xl font-bold text-primary">★★★★★</h2>
                        <p className="mt-5 text-lg">
                            {"Personal approach and great results. Our expansion is perfect and exceeds all our expectations!"}
                        </p>
                        <div className="flex flex-col items-start mt-5">
                            <Image
                                className="rounded-full size-10"
                                src={'/mark.avif'}
                                alt={'Rating'}
                                width={50}
                                height={50}
                            />
                            <p className="text-lg">Mark J</p>
                        </div>
                    </div>
                </div>
            </div>


            <BlurFade delay={0.25} inView>
                <div className="flex flex-row-reverse w-9/12 mx-auto h-[22em] mb-48">
                    <Link
                        href={'https://www.google.com/maps/place/Dreef+10,+1431+WD+Aalsmeer,+Netherlands/@52.2555208,4.7631746,15.25z/data=!4m15!1m8!3m7!1s0x47c5de1983ba779b:0x653cdd2b018b0dcc!2sDreef+10,+1431+WD+Aalsmeer,+Netherlands!3b1!8m2!3d52.2572332!4d4.763412!16s%2Fg%2F11c18h8xnz!3m5!1s0x47c5de1983ba779b:0x653cdd2b018b0dcc!8m2!3d52.2572332!4d4.763412!16s%2Fg%2F11c18h8xnz!5m2!1e4!1e2?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D'}
                        className="w-6/12 scale-105 z-20 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-200">
                        <Image
                            className="w-full rounded-r-3xl rounded-l-lg -h-96 shadow-2xl"
                            src={'/location.png'}
                            alt={'Rating'}
                            width={500}
                            height={400}
                        />
                    </Link>
                    <div className="w-6/12 h-full p-10 border rounded-r-sm rounded-l-3xl bg-background">
                        <h2 className="text-5xl font-bold">Locations</h2>
                        <p className="mt-5 text-muted-foreground text-sm">
                            We offer our services in various regions. Please contact us for more information about your specific location
                        </p>
                        <div className="flex flex-col items-start mt-5">
                            <h2 className="font-bold text-lg">Address</h2>
                            <p className="text-muted-foreground">Dreef 10, 1431WD Aalsmeer</p>
                            <h2 className="font-bold text-lg mt-5">Opening hours </h2>
                            <p className="text-muted-foreground">Mon-Fri 9am-5pm</p>
                        </div>
                    </div>
                </div>
            </BlurFade>


        </div>
    )
}