import { format } from "date-fns";

export default function Overview({ selectedSteps }: { selectedSteps: any[] }) {
    console.log(selectedSteps)
    return (
        <div className="bg-background shadow-lg rounded-2xl p-6 w-full max-w-6xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">🏗️ Project Overview</h2>

            {selectedSteps.length === 0 ? (
                <p className="text-gray-500">No data selected yet.</p>
            ) : (
                <div className="space-y-4">
                    {selectedSteps.map((step, index) => (
                        <div key={index} className="border p-4 rounded-lg">
                            <h3 className="text-lg font-medium flex items-center gap-2">
                                {step.icon || "📌"} {step.title}
                            </h3>
                            {step.description && (
                                <p className="text-gray-600 text-sm">{step.description}</p>
                            )}

                            {/* Display selected check items */}
                            {step.items?.length > 0 && (
                                <ul className="mt-2 space-y-1">
                                    {step.items.map((item: any, idx: number) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            {item.icon || "✅"} <span>{item.name || item.question}</span>
                                            {item.value && <span className="text-gray-600">({item.value})</span>}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {(step.type === "date" && !step.date) &&
                                <p className="text-gray-500 italic">No date selected.</p>
                            }

                            {(step.type === "date" && step.date.from && step.date.to) &&
                                <p className="text-gray-500 italic">{`From : ${format(new Date(step.date?.from), "PPP")} --- To : ${format(new Date(step.date?.to), "PPP")}`}</p>
                            }
                        </div>
                    ))}
                </div>
            )
            }
        </div >
    );
}
