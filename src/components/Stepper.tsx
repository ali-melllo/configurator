import { useEffect, useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { Separator } from "./ui/separator";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-button";
import { Calendar } from "./ui/calendar";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import BlurFade from "./magicui/blur-fade";
import { STEPS_DATA } from "@/data/steper";
import { cn } from "@/lib/utils";
import Overview from "./overview";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { NumberTicker } from "./magicui/number-trick";
import { useLang } from "@/contexts/LangContext";


// titles are used to show main title of current step at top
// description are used to show description of current step under the title 
// we have 5 different types : [ "select" , "multi" , "date" , "text" , "check" ]
// !important: when an object has type select you don't need to define the "nextStep" property inside the object , the next step will be depending on each items inner object
// !important: other types rather than select requires a "nextStep" object
// if you set "nextStep" & "items" to null means that that step is the last step of that section

type dataType = {
    title: string;
    description: string;
    type: "select" | "multi" | "date" | "text" | "check";
    name: string,
    items: [],
    nextStep?: {},
}


// we gather all steps data as an list of object with values 
// each ype has its own struct of values

// select type of save data is :


export default function Stepper() {

    const { t } = useLang();

    const [selectedSteps, setSelectedSteps] = useState<any>([]);
    const [currentFormData, setCurrentFormData] = useState<any>([]);
    const [finalCheck, setFinalCheck] = useState<boolean>(false);
    const [history, setHistory] = useState<any>([]);
    const [gatheredData, setGatheredData] = useState<any>([]);
    const [price, setPrice] = useState<number>(0);
    const [stepPrice, setStepPrice] = useState<any>([]);

    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(2022, 0, 20),
        to: addDays(new Date(2022, 0, 20), 20),
    })

    const currentStep = selectedSteps.reduce((acc: any, step: any) => {
        return acc?.items?.find((item: any) => item.name === step) || acc?.nextStep;
    }, STEPS_DATA[0]);

    const handleSelect = (item: any) => {
        setSelectedSteps([...selectedSteps, item.name]);
    };

    const currentFormHandler = (item: any, type: string) => {
        if (type === 'multi') {
            setCurrentFormData((prevData: any) => {
                const existingIndex = prevData.findIndex((data: any) => data.title === item.name);

                if (existingIndex !== -1) {
                    const returnData = prevData.filter((data: any) => data.title !== item.name);
                    const prices = returnData.map((obj: any) => obj.price);
                    const maxPrice = Math.max(...prices);

                    setPrice(maxPrice);

                    return returnData
                } else {
                    const returnData = [...prevData, { title: item.name, items: item.items || [], price: item.minPrice || 0 }]

                    const prices = returnData.map(obj => obj.price)

                    let price = Math.max(...prices);

                    setPrice(price);

                    return returnData;
                }
            });

        } else if (type === "text") {
            setCurrentFormData((prevData: any) => {
                const existingIndex = prevData.findIndex((data: any) => data.question === item.question);

                if (existingIndex !== -1) {
                    const updatedData = [...prevData];
                    updatedData[existingIndex].value = item.value;
                    const totalCost = updatedData.reduce((sum, room) => sum + (room.value * room.price), 0);
                    setPrice(totalCost);
                    return updatedData;
                } else {
                    const totalCost = [...prevData, item].reduce((sum, room) => sum + (room.value * room.price), 0);
                    setPrice(totalCost);
                    return [...prevData, item];
                }
            });
        } else if (type === 'check') {

            setCurrentFormData((prevData: any) => {
                const existingIndex = prevData.findIndex((data: any) => data.question === item.question);
                if (existingIndex !== -1) {
                    const updatedData = [...prevData];
                    updatedData[existingIndex].value = item.value;
                    updatedData[existingIndex].price = item.minPrice || 0;

                    if (item.value === 'no') {
                        setPrice((prev) => prev - item.price);
                    }

                    return updatedData;
                } else {
                    return [...prevData, item];
                }
            });

            if (item.value === 'yes') {
                setPrice((prev) => prev + item.price);
            }

        } else if (type === 'date') {
            setCurrentFormData(date)
        }
    };

    const handleGatherData = (item: any) => {
        setHistory([...history, item]);
        setGatheredData([...gatheredData, currentStep.type === 'select' ? item : currentFormData])
        setCurrentFormData([]);
    };

    const handleCombineSteps = (selectedSteps: any) => {
        const data = selectedSteps.map((item: any) => item.items);
        for (let i = 0; i < data.length - 1; i++) {
            let current = data[i];

            while (current.nextStep) {
                current = current.nextStep;
            }

            current.nextStep = data[i + 1];
        }

        let lastItem = data[data.length - 1];
        while (lastItem.nextStep) {
            lastItem = lastItem.nextStep;
        }
        lastItem.lastStep = true;

        currentStep.nextStep = data[0];
    };

    return (
        <BlurFade inView className={`md:w-11/12 h-[100dvh] md:h-[85dvh] relative overflow-hidden ${finalCheck ? "pt-0" : "pt-28"} md:pt-0 md:mt-28 mx-auto rounded-xl`}>


            <div className="md:p-10 size-full flex flex-col rounded-xl overflow-scroll md:overflow-hidden bg-background/25 md:border shadow-md">

                <div className="w-full hidden md:block mb-14">
                    <ol className="mx-auto flex w-full flex-nowrap gap-1">
                        {selectedSteps.map((step: any) => (
                            <li
                                key={step}
                                className={cn(
                                    "h-1 w-36 rounded-full bg-blue-500"
                                )}>
                                <span className="line-clamp-1 text-center text-muted-foreground w-full mt-2">
                                    {t(step) || ""}{" "}
                                </span>
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="flex justify-between w-full px-5 md:px-0 items-center">
                    <h2 className="md:text-3xl md:px-0 font-bold">{!finalCheck ? (t(currentStep.title) || t(currentStep.nextStep?.title)) : t("stepper.requestOverview")}</h2>

                </div>

                <h2 className="text-sm md:text-lg px-5 md:px-0 font-medium text-muted-foreground mb-5">{!finalCheck ?  t(currentStep.description || currentStep.nextStep?.description) : ""}</h2>


                <div className={`grid px-5 md:px-0 pb-20 grid-cols-1 my-auto ${(currentStep.type === 'check' || currentStep.type === 'date') ? "md:grid-cols-1" : "md:grid-cols-2"} gap-4`}>
                    {!finalCheck && (currentStep.type === 'select' || currentStep.type === 'multi' || currentStep.type === 'check' || currentStep.type === 'text') &&
                        currentStep.items?.map((item: any, index: number) =>
                            currentStep.type === 'select' ? (
                                <BlurFade key={item.name} delay={0.25 + index * 0.05} inView>
                                    <div
                                        onClick={() => {
                                            handleSelect(item);
                                            handleGatherData(item);
                                        }}
                                        className="cursor-pointer p-4 py-5 border rounded-lg hover:border-primary hover:text-primary flex flex-col items-center"
                                    >
                                        <span className="text-4xl">{item.icon}</span>
                                        <span className="md:text-2xl font-medium">{t(item.name)}</span>
                                    </div>
                                </BlurFade>
                            ) : currentStep.type === 'multi' ? (
                                <BlurFade>
                                    <ToggleGroup
                                        onValueChange={() => currentFormHandler(item, 'multi')}
                                        key={item.name}
                                        type="single"
                                    >
                                        <ToggleGroupItem
                                            className="cursor-pointer w-full !py-7 border rounded-lg hover:border-primary"
                                            value={item.name}
                                            aria-label="Toggle bold"
                                        >
                                            <span className="text-4xl">{item.icon}</span>
                                            <span className="md:text-lg font-medium">{t(item.name)}</span>
                                        </ToggleGroupItem>
                                    </ToggleGroup>
                                </BlurFade>
                            ) : currentStep.type === 'check' ? (
                                <BlurFade>
                                    <div key={item.name} className="flex flex-col md:flex-row gap-5 md:items-center">
                                        <Label className="min-w-32 md:text-2xl my-3 md:min-w-48">{t(item.name)}</Label>
                                        <RadioGroup
                                            className="flex md:ml-10 items-center"
                                            onValueChange={(value) => currentFormHandler({ question: item.name, value, price: item.minPrice || 0 }, "check")}
                                        >
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="yes" id={`yes-${item.name}`} />
                                                <Label className="md:text-2xl" htmlFor={`yes-${item.name}`}>Yes</Label>
                                            </div>
                                            <div className="flex items-center space-x-2 md:ml-10">
                                                <RadioGroupItem value="no" id={`no-${item.name}`} />
                                                <Label className="md:text-2xl" htmlFor={`no-${item.name}`}>No</Label>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                </BlurFade>
                            ) : currentStep.type === 'text' ? (
                                <BlurFade>
                                    <div key={item.name} className="flex gap-3 items-center">
                                        <Separator orientation="vertical" />
                                        <div className="flex flex-col gap-3 w-full">
                                            <Label className="md:text-lg line-clamp-1">{t(item.name)}</Label>
                                            <Input
                                                type={item.type || "text"}
                                                className="md:text-lg md:h-12"
                                                onChange={(e) => currentFormHandler({ question: item.name, value: e.target.value, price: item.minPrice || 0 }, "text")}
                                                placeholder="Required ..."
                                            />
                                        </div>
                                    </div>
                                </BlurFade>
                            ) : null)}

                    {currentStep.type === 'date' &&
                        <div className="flex justify-center items-center">
                            <Calendar
                                initialFocus
                                mode="range"
                                defaultMonth={date?.from}
                                selected={date}
                                onSelect={(e) => {
                                    currentFormHandler({}, "date")
                                    setDate(e)
                                }}
                                numberOfMonths={2}
                            />
                        </div>}
                </div>


                {finalCheck && <Overview estimate={[...stepPrice, price].reduce((sum: any, currentValue: any) => sum + currentValue, 0)} selectedSteps={gatheredData} />}


                {currentStep.type !== 'select' &&
                    <BlurFade>
                        <div className="md:text-lg w-full bottom-0 font-bold z-[999] md:hidden sticky flex items-center gap-3 justify-between px-5 py-7 mt-3 md:min-w-96 rounded-t-2xl h-12 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
                            <p>Estimate :</p>
                            <div className="flex items-center gap-2 text-primary">
                                <span className="text-muted-foreground !font-normal text-xs">From</span>
                                <NumberTicker delay={0.1} value={[...stepPrice, price].reduce((sum: any, currentValue: any) => sum + currentValue, 0)} className="!text-primary text-xl">{price}</NumberTicker>
                                €
                            </div>
                        </div>
                    </BlurFade>}

                <div className="flex bg-background w-full z-50 px-5 md:px-0 sticky items-center md:translate-y-10 py-5 md:pb-10 bottom-0 md:mt-10 justify-between">
                    <Button
                        className="md:text-xl w-28 md:w-48 py-5"
                        onClick={() => {
                            if (currentStep.isFirst) {
                                window.location.href = "/";
                                return
                            }

                            setSelectedSteps((prevSteps: any) => prevSteps.slice(0, -1));
                            setHistory((prevSteps: any) => prevSteps.slice(0, -1));
                            setGatheredData((prevSteps: any) => prevSteps.slice(0, -1));
                            setFinalCheck(false);
                            setCurrentFormData([]);

                            stepPrice.pop();
                            setPrice(0);
                        }}
                    >
                        {selectedSteps.length === 0 || currentStep.isFirst ? "Back To Home" : "Prev"}
                    </Button>

                    {currentStep.type !== 'select' &&
                        <BlurFade>
                            <div className="text-lg font-bold hidden md:flex items-center justify-between m-0 px-5 py-6 min-w-96 rounded-2xl h-10 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
                                <p >Total Cost Estimate :</p>
                                <div className="flex items-center gap-2 text-primary">
                                    <span className="text-muted-foreground !font-normal text-sm">From</span>
                                    <NumberTicker delay={0.1} value={[...stepPrice, price].reduce((sum: any, currentValue: any) => sum + currentValue, 0)} className="!text-primary text-xl">{price}</NumberTicker>
                                    €
                                </div>
                            </div>
                        </BlurFade>}

                    {currentStep.type !== 'select' && !finalCheck &&
                        <Button className="md:text-xl w-28 md:w-48 py-5" onClick={() => {

                            // validation is here cause handling global and in case of last step

                            if (currentStep.type === "multi") {
                                if (currentFormData.length === 0) {
                                    return toast("Please At least select one item to Continue")
                                }
                            } else if (currentStep.type === "check") {
                                if (currentFormData.length !== currentStep.items.length) {
                                    return toast("Please Answer All of the questions")
                                }
                            } else if (currentStep.type === "text") {
                                if (currentFormData.length !== currentStep.items.length || currentFormData.some((item: any) => !item.value?.trim())) {
                                    return toast("Please fill in all of the questions");
                                }
                            }


                            if (!currentStep.lastStep) {
                                if (currentStep.type === "multi") {
                                    handleGatherData({
                                        title: currentStep.title || currentStep.nextStep?.title,
                                        items: currentFormData,
                                        type: "multi"
                                    })
                                    if (currentStep.key === "gather-steps") {
                                        // combine selected steps
                                        handleCombineSteps(currentFormData)
                                    }
                                } else if (currentStep.type === "text") {
                                    handleGatherData({
                                        title: currentStep.title || currentStep.nextStep?.title,
                                        items: currentFormData,
                                        type: "text"
                                    })
                                } else if (currentStep.type === "check") {
                                    handleGatherData({
                                        title: currentStep.title || currentStep.nextStep?.title,
                                        items: currentFormData,
                                        type: "check"
                                    })

                                } else if (currentStep.type === "date") {
                                    handleGatherData({
                                        title: currentStep.title || currentStep.nextStep?.title,
                                        date: date,
                                        type: "date"
                                    })
                                }
                                handleSelect(currentStep.nextStep);
                                setStepPrice([...stepPrice, price]);
                                setPrice(0);
                            } else {
                                setFinalCheck(true)
                                setGatheredData([...gatheredData, currentFormData])
                            }
                        }}>
                            {currentStep.lastStep ? "Final Check" : currentStep.key === "gather-steps" ? "Start" : "Next"}
                        </Button>
                    }
                </div>
            </div>
        </BlurFade>

    );
}
