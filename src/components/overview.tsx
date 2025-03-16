import { format } from "date-fns";

export default function Overview({ selectedSteps }: { selectedSteps: any[] }) {
    console.log(selectedSteps);

    // Flatten nested arrays while ensuring objects remain untouched
    const flattenSteps = (steps: any[]): any[] =>
        steps.flatMap((step) => (Array.isArray(step) ? flattenSteps(step) : step));

    const flattenedSteps = flattenSteps(selectedSteps);

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
        </div>
    );
}
