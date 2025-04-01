import { addDays, format } from "date-fns";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Dot, Loader, Send } from "lucide-react";
import { useDispatch } from "react-redux";
import { setBuildingStep } from "@/redux/globalSlice";
import { Calendar } from "./ui/calendar";
import { DateRange } from "react-day-picker";

export default function Overview({ selectedSteps }: { selectedSteps: any[] }) {

    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(2022, 0, 20),
        to: addDays(new Date(2022, 0, 20), 20),
    })

    const [loading, setLoading] = useState<boolean>(false);

    const flattenSteps = (steps: any[]): any[] =>
        steps.flatMap((step) => (Array.isArray(step) ? flattenSteps(step) : step));

    const flattenedSteps = flattenSteps(selectedSteps);
    const dispatch = useDispatch();

    const prepareDataForSubmission = useCallback(() => {
        const flattenedSteps = selectedSteps.flat(Infinity); 

        const formattedData: Record<string, any> = {};

        flattenedSteps.forEach((step, index) => {
            if (typeof step === "object" && step !== null) {
                formattedData[`${step.title || step.question}`] = {
                    title: `${step.icon || "📌"}, ${step.title || (`${step.question} : ${step.value}`)}`,
                    ...(step.type === "date" && step.date
                        ? {
                            from: step.date?.from ? format(new Date(step.date.from), "PPP") : "N/A",
                            to: step.date?.to ? format(new Date(step.date.to), "PPP") : "N/A",
                        }
                        : {}),
                };
            }
        });

        return formattedData;
    }, [selectedSteps])

    const sendEmail = useCallback(async () => {
        setLoading(true);
        const submissionData = prepareDataForSubmission();

        try {
            const response = await fetch("https://formspree.io/f/xnnjyppv", {
                method: "POST",
                headers: { "Accept": "application/json", "Content-Type": "application/json" },
                body: JSON.stringify(submissionData),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success("Request submitted successfully! Check your email.");
                dispatch(setBuildingStep(null));
            } else {
                toast.error(`Failed to send email: ${result.error || "Unknown error"}`);
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
            console.error("Submission error:", error);
        } finally {
            setLoading(false);
        }
    }, [dispatch, prepareDataForSubmission]);


    return (
        <div className="bg-background rounded-2xl px-2 md:px-0 grid grid-cols-1 md:grid-cols-2 w-full mx-auto">

            {flattenedSteps.length === 0 ? (
                <p className="text-gray-500">No data selected yet.</p>
            ) : (
                <div className="space-y-4">
                    {flattenedSteps.map((step, index) => {
                        // If step is an array, handle it as a separate list
                        if (Array.isArray(step)) {
                            return (
                                <div key={index} className="border p-4 rounded-lg">
                                    <h3 className="text-lg font-medium flex items-center gap-2">
                                        📌 Selected Items
                                    </h3>
                                    <ul className="mt-2 space-y-1">
                                        {step.map((item: any, idx: number) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                ✅ <span>{item.title || item.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        }

                        return (
                            <div key={index} className=" rounded-lg">
                                <h3 className="font-medium flex items-center gap-2">
                                    {step.icon || <Dot />} {step.title || (`${step.question} : ${step.value}`)}
                                </h3>
                                {step.description && (
                                    <p className="text-muted-foreground text-sm">{step.description}</p>
                                )}

                                {(step.type === "date" && !step.date) &&
                                    <p className="text-gray-500 italic">No date selected.</p>
                                }

                                {(step.type === "date" && step.date?.from && step.date?.to) &&
                                    <p className="text-gray-500 italic">
                                        {`From : ${format(new Date(step.date.from), "PPP")} --- To : ${format(new Date(step.date.to), "PPP")}`}
                                    </p>
                                }
                            </div>
                        );
                    })}
                </div>
            )}

            <div className="flex flex-col items-center w-full">
                <div>

               
                <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    className="ml-7 md:ml-0"
                    onSelect={(e) => {
                        setDate(e)
                    }}
                    numberOfMonths={2}
                />
                <div className="flex items-center gap-3 ml-3 mt-5">
                    <p className="font-semibold">Estimated Working Hours : </p><p className="text-primary font-bold text-xl">185 H</p>
                </div>
                <div className="flex items-center gap-3 ml-3 mt-3">
                    <p className="font-semibold ">Estimated Price : </p><p className="text-primary font-bold text-xl">23,000 $</p>
                </div>
 </div>

            </div>

            <Button disabled={loading} className="absolute flex md:top-20 right-3 md:right-10 font-semibold text-base" onClick={sendEmail}>
                <Send />
                {loading ? <Loader className="animate-spin" /> : "Send"}
            </Button>
        </div>
    );
}
