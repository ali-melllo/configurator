/* eslint-disable @next/next/no-img-element */
"use client"

import React from 'react'
import Footer from "@/components/footer";
import BlurFade from "@/components/magicui/blur-fade";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { TextAnimate } from "@/components/magicui/text-animate";
import { useLang } from "@/contexts/LangContext";
import { GALLERY_DATA, PROJECTS_GALLERY_DATA } from "@/data/static";
import { cn } from "@/lib/utils";

export default function ClientPage() {

    const { t } = useLang();

    return (
        <div>
            <div className="w-full flex pt-28 p-5 md:p-32 flex-col items-center">
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
                <TextAnimate className="text-4xl md:text-6xl text-center font-bold" animation="blurInUp" by="character">
                    {t('ProjectPage.title')}
                </TextAnimate>
                <p className="text-muted-foreground mt-5">
                    {t('ProjectPage.subtitle')}
                </p>
                <section id="photos" className="mt-14 md:mt-20">
                    <div className="columns-2 gap-4 sm:columns-3">
                        {GALLERY_DATA.map((imageUrl, idx) => (
                            <BlurFade key={idx + imageUrl.src} delay={0.25 + idx * 0.05} inView>
                                <img
                                    className="mb-4 size-full rounded-lg object-contain"
                                    src={imageUrl.src}
                                    alt={`Random stock image ${idx + 1}`}
                                />
                            </BlurFade>
                        ))}
                    </div>
                </section>
            </div>



            <TextAnimate className="text-3xl mt-20 md:text-6xl text-center font-bold" animation="blurInUp" by="character">
                {t('ProjectPage.overviewTitle')}

            </TextAnimate>
            <p className="text-muted-foreground w-8/12 mx-auto text-center mt-5">
                {t('ProjectPage.overviewDescription')}
            </p>

            <BlurFade delay={0.25} inView>
                <div className="flex flex-row-reverse w-9/12 mx-auto h-48 md:h-[22em] my-48">
                    <div
                        className="w-6/12 scale-105 z-20">
                        <img
                            className="w-full rounded-r-3xl h-48 md:h-[22em] rounded-l-lg shadow-2xl"
                            src={'/extension-project.avif'}
                            alt={'Rating'}
                        />
                    </div>
                    <div className="w-6/12 h-48 md:h-[22em] p-3 md:p-10 border rounded-r-sm rounded-l-3xl bg-background">
                        <h2 className="md:text-5xl font-bold">
                            {t('ProjectPage.extensionTitle')}
                        </h2>
                        <p className="mt-3 md:mt-10 text-muted-foreground text-xs md:text-lg">
                            {t('ProjectPage.extensionDescription')}
                        </p>
                    </div>
                </div>
            </BlurFade>

            <BlurFade delay={0.25} inView>
                <div className="flex w-9/12 mx-auto h-48 md:h-[22em] my-48">
                    <div
                        className="w-6/12 scale-105 z-20">
                        <img
                            className="w-full rounded-l-3xl h-48 md:h-[22em] rounded-r-lg "
                            src={'/renovation-project.avif'}
                            alt={'Rating'}
                        />
                    </div>
                    <div className="w-6/12 h-48 md:h-[22em] p-2 pl-3 md:p-10 border rounded-l-sm rounded-r-3xl bg-background">
                        <h2 className="md:text-5xl font-bold">
                            {t('ProjectPage.renovationTitle')}
                        </h2>
                        <p className="mt-2 md:mt-10 text-muted-foreground text-xs md:text-lg">
                            {t('ProjectPage.renovationDescription')}
                        </p>
                    </div>
                </div>
            </BlurFade>

            <div className="w-full flex p-5 md:p-32 my-20 flex-col items-center">
                <TextAnimate className="text-4xl md:text-6xl text-center font-bold" animation="blurInUp" by="character">
                    {t('ProjectPage.projects')}
                </TextAnimate>
                <p className="text-muted-foreground text-center mt-5">
                    {t('ProjectPage.projectsSubtitle')}

                </p>
                <section id="photos" className="mt-20">
                    <div className="columns-2 gap-4 sm:columns-3">
                        {PROJECTS_GALLERY_DATA.map((imageUrl, idx) => (
                            <BlurFade key={idx + imageUrl.src} delay={0.25 + idx * 0.05} inView>
                                <img
                                    className="mb-4 size-full rounded-lg object-contain"
                                    src={imageUrl.src}
                                    alt={`Random stock image ${idx + 1}`}
                                />
                            </BlurFade>
                        ))}
                    </div>
                </section>
            </div>


            <BlurFade delay={0.25} inView>
                <TextAnimate className="text-2xl -mt-10 md:text-6xl text-center font-bold" animation="blurInUp" by="character">
                    {t('ProjectPage.reviewsTitle')}

                </TextAnimate>
                <p className="text-muted-foreground md:w-6/12 mx-auto text-center mt-5">
                    {t('ProjectPage.reviewsSubtitle')}
                </p>

                <div className="flex md:w-9/12 mx-auto pl-3 md:h-[25em] my-20 mb-48">
                    <div className="w-6/12 h-full p-5 md:p-10  shadow-2xl border rounded-r-sm rounded-l-3xl bg-background">
                        <h2 className="md:text-2xl font-bold text-primary">★★★★★</h2>
                        <h2 className="md:text-lg mt-2">
                            {t('ProjectPage.review1.title')}
                        </h2>
                        <p className="mt-2 md:mt-5 text-xs md:text-base text-muted-foreground w-10/12">
                            {t('ProjectPage.review1.body')}
                        </p>
                        <div className="flex items-center mt-5 gap-5">
                            <img
                                className="rounded-full size-10"
                                src={'/farmer.avif'}
                                alt={'Rating'}
                            />
                            <p className="md:text-lg text-muted-foreground ">The Farmer</p>
                        </div>
                    </div>
                    <div className="w-6/12 z-20 h-full p-3 md:p-10 -ml-5 shadow-2xl scale-110 border rounded-l-sm rounded-r-3xl bg-background">
                        <h2 className="md:text-2xl font-bold text-primary">★★★★★</h2>
                        <h2 className="md:text-lg mt-2">
                            {t('ProjectPage.review2.title')}
                        </h2>
                        <p className="mt-3 text-xs md:text-base md:mt-5 text-muted-foreground w-10/12">
                            {t('ProjectPage.review2.body')}
                        </p>
                        <div className="flex items-center gap-5 mt-5">
                            <img
                                className="rounded-full size-10"
                                src={'/farhad.avif'}
                                alt={'Rating'}
                            />
                            <p className="md:text-lg text-muted-foreground ">Fahrhad Sarabi</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row-reverse pl-3 md:w-9/12 mx-auto mt-48 my-20 mb-48">
                    <div className="w-6/12 h-full p-3 md:p-10 border rounded-l-sm rounded-r-3xl shadow-2xl pl-5 md:pl-20 bg-background">
                        <h2 className="md:text-2xl font-bold text-primary">★★★★★</h2>
                        <h2 className="md:text-lg mt-2">
                            {t('ProjectPage.review3.title')}
                        </h2>
                        <p className="mt-5 text-xs md:text-base text-muted-foreground w-10/12">
                        {t('ProjectPage.review3.body')}
                        </p>
                        <div className="flex items-center mt-5 gap-5">
                            <img
                                className="rounded-full size-10"
                                src={'/remmert.avif'}
                                alt={'Rating'}
                            />
                            <p className="text-xs md:text-lg text-muted-foreground ">Remmert family</p>
                        </div>
                    </div>
                    <div className="w-6/12 z-20 h-full p-3 md:p-10 border scale-110 shadow-2xl rounded-r-sm rounded-l-3xl bg-background">
                        <h2 className="md:text-2xl font-bold text-primary">★★★★★</h2>
                        <h2 className="md:text-lg mt-2">
                        {t('ProjectPage.review4.title')}

                        </h2>
                        <p className="mt-5 text-xs md:text-base text-muted-foreground w-10/12">
                        {t('ProjectPage.review4.body')}
                        </p>
                        <div className="flex items-center gap-5 mt-5">
                            <img
                                className="rounded-full size-10"
                                src={'/jan.avif'}
                                alt={'Rating'}
                            />
                            <p className="text-sm md:text-lg text-muted-foreground ">Jan Floor</p>
                        </div>
                    </div>




                </div>
            </BlurFade>

            <Footer />
        </div>
    )
}
