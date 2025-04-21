import { addDays, format } from "date-fns";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Dot, Loader, Send } from "lucide-react";
import { useDispatch } from "react-redux";
import { setBuildingStep } from "@/redux/globalSlice";
import { Calendar } from "./ui/calendar";
import { DateRange } from "react-day-picker";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { useLang } from "@/contexts/LangContext";

export default function Overview({ selectedSteps, estimate }: { selectedSteps: any[], estimate: number }) {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { t } = useLang();

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

    const sendEmail = useCallback(async (data: any) => {
        setLoading(true);
        const submissionData = prepareDataForSubmission();

        try {
            const response = await fetch("https://formspree.io/f/xnnjyppv", {
                method: "POST",
                headers: { "Accept": "application/json", "Content-Type": "application/json" },
                body: JSON.stringify({ ...submissionData, ...data, estimate: `${estimate} €` }),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success(t("notifications.requestSuccess"));
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
    }, [dispatch, estimate, prepareDataForSubmission, t]);


    return (
        <div className="bg-background size-full overflow-scroll px-2 md:px-0 flex flex-col md:flex-row mx-auto">

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
                                    {step.icon || <Dot />} {t(step.title || (`${t(step.question)} : ${step.value}`))}
                                </h3>
                                {step.description && (
                                    <p className="text-muted-foreground text-sm">{t(step.description)}</p>
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
                    {/* <div className="flex items-center gap-3 ml-3 mt-5">
                        <p className="font-semibold">Estimated Working Hours : </p><p className="text-primary font-bold text-xl">185 H</p>
                    </div> */}
                    <div className="flex items-center gap-3 ml-3 mt-3">
                        <p className="font-semibold ">{t("stepper.estimate")} : </p><p className="text-primary font-bold text-xl">23,000 $</p>
                    </div>
                </div>

            </div>

            <AlertDialog>
                <AlertDialogTrigger>

                    <Button className="absolute flex top-32 md:top-20 right-3 md:right-10 font-semibold text-base" >
                        <Send />
                        {loading ? <Loader className="animate-spin" /> : t("stepper.send")}
                    </Button>

                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>{t("finalQuote.title")}</AlertDialogTitle>
                        <AlertDialogDescription>{t("finalQuote.description")}</AlertDialogDescription>
                    </AlertDialogHeader>
                    <div autoFocus={false} className="grid gap-4">
                        <form onSubmit={handleSubmit(sendEmail)} className="grid gap-4 py-4">
                            <div className="flex flex-col items-start gap-y-2">
                                <Label>{t("form.fullName")}</Label>
                                <Input
                                    {...register("fullName", { required: t("form.errors.fullName") })}
                                    placeholder={t("form.fullName")}
                                />
                                {errors.fullName && <p className="text-red-500 text-sm">{t("form.errors.fullName")}</p>}
                            </div>

                            <div className="flex flex-col items-start gap-y-2">
                                <Label>{t("form.email")}</Label>
                                <Input
                                    {...register("email", { required: t("form.errors.email") })}
                                    placeholder={t("form.email")}
                                />
                                {errors.email && <p className="text-red-500 text-sm">{t("form.errors.email")}</p>}
                            </div>

                            <div className="flex flex-col items-start gap-y-2">
                                <Label>{t("form.address")}</Label>
                                <Input
                                    {...register("address", { required: t("form.errors.address") })}
                                    placeholder={t("form.address")}
                                />
                                {errors.address && <p className="text-red-500 text-sm">{t("form.errors.address")}</p>}
                            </div>

                            <div className="flex flex-col items-start gap-y-2">
                                <Label>{t("form.zipcode")}</Label>
                                <Input
                                    {...register("zipcode", { required: t("form.errors.zipcode") })}
                                    placeholder={t("form.zipcode")}
                                />
                                {errors.zipcode && <p className="text-red-500 text-sm">{t("form.errors.zipcode")}</p>}
                            </div>

                            <div className="flex flex-col items-start gap-y-2">
                                <Label>{t("form.phone")}</Label>
                                <Input
                                    {...register("phone", { required: t("form.errors.phone") })}
                                    placeholder={t("form.phone")}
                                />
                                {errors.phone && <p className="text-red-500 text-sm">{t("form.errors.phone")}</p>}
                            </div>

                            <AlertDialogFooter>
                                <AlertDialogCancel className="md:w-6/12 h-12">{t("common.cancel")}</AlertDialogCancel>
                                <AlertDialogAction className="md:w-6/12 h-12 font-semibold" disabled={loading} type="submit">
                                    <Send />
                                    {loading ? <Loader className="animate-spin" /> : t("finalQuote.submit")}
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </form>
                    </div>
                </AlertDialogContent>

            </AlertDialog>

        </div>
    );
}
