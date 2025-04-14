"use client";
/* eslint-disable @next/next/no-img-element */

import Footer from "@/components/footer";
import BlurFade from "@/components/magicui/blur-fade";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { TextAnimate } from "@/components/magicui/text-animate";
import { useLang } from "@/contexts/LangContext";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Page() {
    const { t } = useLang();

    return (
        <div className="pt-32 w-full flex flex-col items-center">
            <GridPattern
                width={30}
                height={30}
                x={-1}
                y={-1}
                strokeDasharray={"4 2"}
                className={cn(
                    "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
                )}
            />
            <TextAnimate className="text-3xl md:text-6xl text-center font-bold" animation="blurInUp" by="character">
                {t("services.title")}
            </TextAnimate>
            <p className="text-muted-foreground text-center mt-5">
                {t("services.subtitle")}
            </p>

            <div className="md:w-10/12 items-center flex flex-col md:flex-row z-20 gap-5 mt-10">
                {[
                    {
                        img: "/renovation-project.avif",
                        alt: "Renovation",
                        title: t("services.cards.renovation.title"),
                        desc: t("services.cards.renovation.description"),
                    },
                    {
                        img: "/extension-project.avif",
                        alt: "Extension",
                        title: t("services.cards.extension.title"),
                        desc: t("services.cards.extension.description"),
                    },
                    {
                        img: "/services-main.avif",
                        alt: "Craft",
                        title: t("services.cards.craftsmanship.title"),
                        desc: t("services.cards.craftsmanship.description"),
                    },
                ].map((item, i) => (
                    <div key={i} className="w-11/12 md:w-4/12 p-8 bg-background dark:bg-black shadow-xl rounded-2xl flex flex-col">
                        <h2 className="font-extrabold text-3xl">{item.title}</h2>
                        <p className="text-muted-foreground mt-5">{item.desc}</p>
                        <img className="mt-5 min-h-96 rounded-xl w-full" src={item.img} alt={item.alt} />
                    </div>
                ))}
            </div>

            <div className="bg-center w-full my-48 bg-cover bg-no-repeat bg-body-img md:bg-fixed bg-local container flex items-center rounded-lg justify-center md:h-[35em]">
                <div className="flex flex-col md:flex-row w-full justify-center py-5 items-center gap-5">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="md:w-3/12 z-20 h-full p-10 shadow-2xl rounded-2xl border bg-accent/50">
                            <h2 className="text-3xl font-bold text-primary">★★★★★</h2>
                            <p className="mt-5 text-lg">{t(`services.reviews.${i}.quote`)}</p>
                            <div className="flex flex-col items-start mt-5">
                                <img
                                    className="rounded-full size-10"
                                    src={`/${i === 1 ? "peter" : i === 2 ? "sophie" : "mark"}.avif`}
                                    alt="Rating"
                                    width={50}
                                    height={50}
                                />
                                <p className="text-lg">{t(`services.reviews.${i}.name`)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <BlurFade delay={0.25} inView>
                <div className="flex flex-col items-center md:flex-row-reverse w-11/12 md:w-9/12 mx-auto md:h-[22em] mb-48">
                    <Link
                        href="https://www.google.com/maps/place/Dreef+10,+1431+WD+Aalsmeer,+Netherlands"
                        className="md:w-6/12 scale-105 z-20 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-200"
                    >
                        <img
                            className="w-full rounded-lg md:rounded-r-3xl h-[22em] rounded-l-lg shadow-2xl"
                            src="/location.png"
                            alt="Location"
                        />
                    </Link>
                    <div className="md:w-6/12 md:h-[22em] p-5 md:p-10 border rounded-r-sm rounded-lg md:rounded-l-3xl mt-5 md:mt-0 bg-background">
                        <h2 className="text-xl md:text-5xl font-bold">
                            {t("services.locations.title")}
                        </h2>
                        <p className="mt-5 text-muted-foreground text-xs md:text-sm">
                            {t("services.locations.description")}
                        </p>
                        <div className="flex flex-col items-start mt-5">
                            <h2 className="font-bold md:text-lg">
                                {t("services.locations.address")}
                            </h2>
                            <p className="text-muted-foreground">
                                {t("services.locations.address_detail")}
                            </p>
                            <h2 className="font-bold md:text-lg mt-5">
                                {t("services.locations.hours")}
                            </h2>
                            <p className="text-muted-foreground">
                                {t("services.locations.hours_detail")}
                            </p>
                        </div>
                    </div>
                </div>
            </BlurFade>

            <Footer />
        </div>
    );
}

export function generateStaticParams() {
    return [
        { locale: "en" },
        { locale: "nl" },
    ];
}
