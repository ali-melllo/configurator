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




export default function Stepper() {
    const [selectedSteps, setSelectedSteps] = useState<any>([]);
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

    return (
        <BlurFade inView className="w-11/12 mx-auto rounded-xl ">

            <div className="p-10 size-full flex flex-col min-h-[80vh] backdrop-blur bg-background/50 border shadow-md">
                {/* <div className="flex items-center gap-3 mb-5">
                {selectedSteps.map((item: string , i:number) => (
                    <div key={item} className="flex items-center">
                        {i !==0 &&<Separator className="w-10 mr-3"/>}
                        <h2 className="text-lg font-bold">{item}</h2>
                    </div>
                ))}
            </div> */}
                {/* 
<div aria-label="Onboarding progress">
      <ol className="mx-auto flex w-24 flex-nowrap gap-1 md:w-fit">
        {steps.map((step, index) => (
          <li
            key={step.name}
            className={cn(
              "h-1 w-12 rounded-full",
              index <= currentStepIndex
                ? "bg-blue-500"
                : "bg-gray-300 dark:bg-gray-700",
            )}
          >
            <span className="sr-only">
              {step.name}{" "}
              {index < currentStepIndex
                ? "completed"
                : index === currentStepIndex
                  ? "current"
                  : ""}
            </span>
          </li>
        ))}
      </ol>
    </div> */}


                <h2 className="text-2xl font-bold">{currentStep.nextStep?.title || currentStep.title}</h2>


                <h2 className="text-lg font-medium text-muted-foreground">{currentStep.description || ""}</h2>


                <div className={`grid grid-cols-2 my-auto ${(currentStep.type === 'check' || currentStep.type === 'text' || currentStep.type === 'date') ? "md:grid-cols-1" : "md:grid-cols-5"}  gap-4`}>
                    {(currentStep.type === 'select' || currentStep.type === 'multi' || currentStep.type === 'check' || currentStep.type === 'text') &&
                        currentStep.items?.map((item: any , index : number) =>
                            currentStep.type === 'select' ? (
                                <BlurFade key={item.name} delay={0.25 + index * 0.05} inView>
                                    <div
                                        onClick={() => handleSelect(item)}
                                        className="cursor-pointer p-4 border rounded-lg hover:border-primary hover:text-primary flex flex-col items-center"
                                    >
                                        <span className="text-3xl">{item.icon}</span>
                                        <span>{item.name}</span>
                                    </div>
                                </BlurFade>
                            ) : currentStep.type === 'multi' ? (

                                <ToggleGroup key={item.name} type="single">
                                    <ToggleGroupItem className="cursor-pointer w-72 border rounded-lg hover:border-primary" value="bold" aria-label="Toggle bold">
                                        <span className="text-3xl">{item.icon}</span>
                                        <span>{item.name}</span>
                                    </ToggleGroupItem>
                                </ToggleGroup>

                            ) : currentStep.type === 'check' ? (
                                <div
                                    key={item.name}
                                    className="flex gap-3 items-center"
                                >
                                    <Separator orientation="vertical" />
                                    <span className="min-w-48">{item.name}</span>
                                    <RadioGroup className="flex ml-10 items-center" defaultValue="comfortable">
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="yes" id="r1" />
                                            <Label htmlFor="r1">yes</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="no" id="r3" />
                                            <Label htmlFor="r3">no</Label>
                                        </div>
                                    </RadioGroup>

                                </div>
                            ) : currentStep.type === 'text' ? (
                                <div
                                    key={item.name}
                                    className="flex gap-3 items-center"
                                >
                                    <Separator orientation="vertical" />
                                    <div className="flex flex-col gap-3">
                                        <Label>{item.name}</Label>
                                        <Input placeholder="Required ..." />
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
                                onSelect={setDate}
                                numberOfMonths={2}
                            />
                        </div>}
                </div>


                <div className="flex w-full  items-center mt-10 justify-between">
                    <Button>
                        Prev
                    </Button>
                    {currentStep.type !== 'select' &&
                        <Button onClick={() => handleSelect(currentStep.nextStep)}>
                            next
                        </Button>
                    }
                </div>
            </div>
        </BlurFade>

    );
}
