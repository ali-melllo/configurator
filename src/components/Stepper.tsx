import { useState } from "react";
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
    const [selectedSteps, setSelectedSteps] = useState<any>([]);
    const [currentFormData, setCurrentFormData] = useState<any>([]);
    const [finalCheck, setFinalCheck] = useState<boolean>(false);
    const [history, setHistory] = useState<any>([]);

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
                    return prevData.filter((data: any) => data.title !== item.name);
                } else {
                    return [...prevData, { title: item.name }];
                }
            });
        } else if (type === "text") {
            setCurrentFormData((prevData: any) => {
                const existingIndex = prevData.findIndex((data: any) => data.question === item.question);

                if (existingIndex !== -1) {
                    const updatedData = [...prevData];
                    updatedData[existingIndex].value = item.value;
                    return updatedData;
                } else {
                    return [...prevData, item];
                }
            });
        } else if (type === 'check') {
            setCurrentFormData((prevData: any) => {
                const existingIndex = prevData.findIndex((data: any) => data.question === item.question);
                if (existingIndex !== -1) {
                    const updatedData = [...prevData];
                    updatedData[existingIndex].value = item.value;
                    return updatedData;
                } else {
                    return [...prevData, item];
                }
            });
        } else if (type === 'date') {
            setCurrentFormData(date)
        }
    };

    const handleGatherData = (item: any) => {
        setHistory([...history, item]);
    };

    console.log(history)

    return (
        <BlurFade inView className="w-11/12 min-h-[80vh] mt-28 mx-auto rounded-xl ">

            <div className="p-10 size-full flex flex-col min-h-[80vh] rounded-xl overflow-y-scroll bg-background/25 border shadow-md">

                <div className="w-full hidden md:block mb-14">
                    <ol className="mx-auto flex w-full flex-nowrap gap-1">
                        {selectedSteps.map((step: any) => (
                            <li
                                key={step}
                                className={cn(
                                    "h-1 w-36 rounded-full bg-blue-500"
                                )}>
                                <span className="line-clamp-1 text-center text-muted-foreground w-full mt-2">
                                    {step || ""}{" "}
                                </span>
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">{!finalCheck ? (currentStep.title || currentStep.nextStep?.title ) : "Request Overview"}</h2>
                    {finalCheck && <Button className="font-bold text-xl h-12">Request the Quote</Button>}
                </div>

                <h2 className="text-lg font-medium text-muted-foreground">{!finalCheck ? (currentStep.nextStep?.description || currentStep.description) : "You can See Your Selected Services below for final quote"}</h2>


                <div className={`grid grid-cols-2 my-auto ${(currentStep.type === 'check' || currentStep.type === 'text' || currentStep.type === 'date') ? "md:grid-cols-1" : "md:grid-cols-5"}  gap-4`}>
                    {!finalCheck && (currentStep.type === 'select' || currentStep.type === 'multi' || currentStep.type === 'check' || currentStep.type === 'text') &&
                        currentStep.items?.map((item: any, index: number) =>
                            currentStep.type === 'select' ? (
                                <BlurFade key={item.name} delay={0.25 + index * 0.05} inView>
                                    <div
                                        onClick={() => {
                                            handleSelect(item);
                                            handleGatherData(item);
                                        }}
                                        className="cursor-pointer p-4 border rounded-lg hover:border-primary hover:text-primary flex flex-col items-center"
                                    >
                                        <span className="text-3xl">{item.icon}</span>
                                        <span>{item.name}</span>
                                    </div>
                                </BlurFade>
                            ) : currentStep.type === 'multi' ? (

                                <ToggleGroup
                                    onValueChange={() => currentFormHandler(item, 'multi')}
                                    key={item.name}
                                    type="single"
                                >
                                    <ToggleGroupItem
                                        className="cursor-pointer w-72 border rounded-lg hover:border-primary"
                                        value={item.name}
                                        aria-label="Toggle bold"
                                    >
                                        <span className="text-3xl">{item.icon}</span>
                                        <span>{item.name}</span>
                                    </ToggleGroupItem>
                                </ToggleGroup>

                            ) : currentStep.type === 'check' ? (
                                <div key={item.name} className="flex gap-3 items-center">
                                    <Separator orientation="vertical" />
                                    <span className="min-w-48">{item.name}</span>
                                    <RadioGroup
                                        className="flex ml-10 items-center"
                                        onValueChange={(value) => currentFormHandler({ question: item.name, value }, "check")}
                                    >
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="yes" id={`yes-${item.name}`} />
                                            <Label htmlFor={`yes-${item.name}`}>Yes</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="no" id={`no-${item.name}`} />
                                            <Label htmlFor={`no-${item.name}`}>No</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                            ) : currentStep.type === 'text' ? (
                                <div key={item.name} className="flex gap-3 items-center">
                                    <Separator orientation="vertical" />
                                    <div className="flex flex-col gap-3 w-6/12">
                                        <Label>{item.name}</Label>
                                        <Input
                                            onChange={(e) => currentFormHandler({ question: item.name, value: e.target.value }, "text")}
                                            placeholder="Required ..."
                                        />
                                    </div>
                                </div>
                            ) : null)}

                    {currentStep.type === 'date' &&
                        <div className="flex justify-center items-center">
                            <Calendar
                                initialFocus
                                mode="range"
                                defaultMonth={date?.from}
                                selected={date}
                                onSelect={(e)=>{
                                    currentFormHandler({ }, "date")
                                    setDate(e)
                                }}
                                numberOfMonths={2}
                            />
                        </div>}
                </div>


                {finalCheck && <Overview selectedSteps={history} />}

                <div className="flex w-full  items-center mt-10 justify-between">
                    <Button
                        disabled={selectedSteps.length === 0}
                        onClick={() => {
                            setSelectedSteps((prevSteps: any) => prevSteps.slice(0, -1));
                            setFinalCheck(false)
                        }}
                    >
                        Prev
                    </Button>
                    {currentStep.type !== 'select' && !finalCheck &&
                        <Button onClick={() => {
                            if (!currentStep.lastStep) {
                                if (currentStep.type === "multi") {
                                    handleGatherData({
                                        title:  currentStep.title || currentStep.nextStep?.title ,
                                        items: currentFormData,
                                        type: "multi"
                                    })
                                } else if (currentStep.type === "text") {
                                    handleGatherData({
                                        title:  currentStep.title || currentStep.nextStep?.title ,
                                        items: currentFormData,
                                        type: "text"
                                    })
                                } else if (currentStep.type === "check") {
                                    handleGatherData({
                                        title:  currentStep.title || currentStep.nextStep?.title ,
                                        items: currentFormData,
                                        type: "check"
                                    })
                                } else if (currentStep.type === "date") {
                                    handleGatherData({
                                        title:  currentStep.title || currentStep.nextStep?.title ,
                                        date: date,
                                        type: "date"
                                    })
                                }
                                handleSelect(currentStep.nextStep);
                                setCurrentFormData([]);
                            } else {
                                setFinalCheck(true)
                            }
                        }
                        }
                        >
                            {currentStep.lastStep ? "Final Check" : "Next"}
                        </Button>
                    }
                </div>
            </div>
        </BlurFade>

    );
}
