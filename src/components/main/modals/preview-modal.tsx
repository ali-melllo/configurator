'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Dot } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { changePreview, changeView } from "@/redux/globalSlice";
import { useCallback, useState } from "react";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import BlurFade from "@/components/magicui/blur-fade";


export default function PreviewModal() {

    const [imageLoaded, setImageLoaded] = useState<boolean>(true);

    const { showPreview, finalQuote, view } = useSelector((state: any) => state.global);

    const dispatch = useDispatch();

    const changeViewHandler = useCallback((view: string) => {
        dispatch(changeView(view));
    }, [dispatch])

    return (
        <Dialog open={showPreview} >
            <DialogContent onCloseHandler={() => dispatch(changePreview(false))} className="max-w-[95vw] pb-10 !w-[90vw] md:w-6/12 rounded-2xl h-[90vh] ">
                <DialogHeader>
                    <DialogTitle className="text-left -translate-y-3">3D Preview</DialogTitle>
                </DialogHeader>

                <main className="relative overflow-hidden shadow-2xl w-full flex h-full ">
                    <div className="flex cursor-pointer gap-x-3 absolute z-50 left-3 top-5">
                        <div onClick={() => changeViewHandler('exterior')} className="size-[2.75em] md:size-20 flex flex-col transition-all duration-200 justify-between hover:scale-105 rounded-xl shadow-xl">
                            <img
                                className={`w-full h-full object-cover rounded-t-lg`}
                                src={'/main.png'}
                                alt={'exterior'}
                            />
                            <p className="pointer-events-none text-[0.6em] md:text-base w-full flex justify-center items-center font-bold rounded-b-lg bg-white text-black">Exterior</p>
                        </div>
                        <div onClick={() => changeViewHandler('inside')} className="size-[2.75em] md:size-20 flex flex-col transition-all duration-200 justify-between hover:scale-105 rounded-xl shadow-xl">
                            <img
                                className={`w-full h-full object-cover rounded-t-lg`}
                                src={'/main-inside.png'}
                                alt={'exterior'}
                            />
                            <p className="pointer-events-none text-[0.6em] md:text-base w-full flex justify-center items-center font-bold rounded-b-lg bg-white text-black">Inside</p>
                        </div>
                    </div>

                    <img
                        className={`inset-0 mt-16 md:mt-0 ${imageLoaded ? 'animate-none' : 'animate-pulse'} rounded-lg w-full h-full object-cover z-10`}
                        onLoad={() => {
                            setImageLoaded(true);
                        }}
                        key={view}
                        src={`${view === 'exterior' ? '/main.png' : view === 'inside' ? '/main-inside.png' : ''}?v=${Date.now()}`}
                        alt={'exterior'}
                    />

                    {view === 'exterior' &&
                        (
                            finalQuote.exterior.map((item: any, index: number) => (
                                <img
                                    key={item.key}
                                    onLoad={() => {
                                        setImageLoaded(true);
                                    }}
                                    className={`absolute mt-16 md:mt-0 inset-0 md:w-full md:h-full object-cover ${item.key === 'outdoor-light' ? 'z-30' : 'z-20'}`}
                                    src={item.objectSrc}
                                    alt={'exterior'}
                                />
                            ))
                        )
                    }


                    {view === 'exterior' &&
                        (
                            <div className="absolute flex flex-col gap-3 z-50 right-5 top-5">
                                {finalQuote.exterior.map((item: any) => (
                                    <BlurFade key={item.objectName} delay={0.3}>
                                        <div className={`flex rounded-2xl shadow-2xl items-center p-3 bg-background`}>
                                            <Dot /><TypingAnimation className="text-base">{item.objectName}</TypingAnimation>
                                        </div>
                                    </BlurFade>
                                ))}
                            </div>

                        )
                    }


                    {view === 'inside' && (
                        finalQuote.interior.map((item: any, index: number) => (
                            <img
                                key={item.key}
                                onLoad={() => setImageLoaded(true)}
                                className={`absolute mt-16 md:mt-0 inset-0 md:w-full md:h-full object-cover ${item.key === 'outdoor-light' ? 'z-30' : 'z-20'}`}
                                src={item.objectSrc}
                                alt={'exterior'}
                            />
                        ))
                    )}


                    {view === 'inside' &&
                        (
                            <div className="absolute flex flex-col gap-3 z-50 right-5 top-5">
                                {finalQuote.interior.map((item: any) => (
                                    <BlurFade key={item.objectName} delay={0.3}>
                                        <div className={`flex  rounded-2xl shadow-2xl items-center p-3 bg-background`}>
                                            <Dot /><TypingAnimation className="text-base">{item.objectName}</TypingAnimation>
                                        </div>
                                    </BlurFade>
                                ))}
                            </div>

                        )
                    }

                </main>
            </DialogContent>
        </Dialog>
    )
}