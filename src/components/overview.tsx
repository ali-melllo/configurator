import { format } from "date-fns";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";

export default function Overview({ selectedSteps }: { selectedSteps: any[] }) {

    const [loading, setLoading] = useState<boolean>(false);
    // Flatten nested arrays while ensuring objects remain untouched
    const flattenSteps = (steps: any[]): any[] =>
        steps.flatMap((step) => (Array.isArray(step) ? flattenSteps(step) : step));

    const flattenedSteps = flattenSteps(selectedSteps);

    // Flatten the selected steps and structure them as an object
    const prepareDataForSubmission = useCallback(() => {
        const flattenedSteps = selectedSteps.flat(Infinity); // Flatten all levels

        const formattedData: Record<string, any> = {};

        flattenedSteps.forEach((step, index) => {
            if (typeof step === "object" && step !== null) {
                formattedData[`step_${index + 1}`] = {
                    title: step.title || step.question || "N/A",
                    value: step.value || "N/A",
                    description: step.description || "No description",
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
            const response = await fetch("https://formspree.io/f/mvgzrnqn", {
                method: "POST",
                headers: { "Accept": "application/json", "Content-Type": "application/json" },
                body: JSON.stringify(submissionData),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success("Request submitted successfully! Check your email.");
            } else {
                toast.error(`Failed to send email: ${result.error || "Unknown error"}`);
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
            console.error("Submission error:", error);
        } finally {
            setLoading(false);
        }
    }, [prepareDataForSubmission]);


    return (
        <div className="bg-background shadow-lg rounded-2xl pt-10 w-full mx-auto">
            <h2 className="text-xl font-semibold mb-4">🏗️ Request Overview</h2>

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
                            <div key={index} className="border p-4 rounded-lg">
                                <h3 className="font-medium flex items-center gap-4">
                                    {step.icon || "📌"} {step.title || (`${step.question} : ${step.value}`)}
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
            <Button onClick={sendEmail}>
                send
            </Button>
        </div>
    );
}
