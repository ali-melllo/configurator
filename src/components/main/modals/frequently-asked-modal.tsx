'use client'

import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { useDispatch, useSelector } from "react-redux";
import { changeFrequentlyAskedModal } from "@/redux/globalSlice";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useLang } from "@/contexts/LangContext";

export default function FrequentlyAskedModal() {
    const { t } = useLang();
    const { showFrequentlyAskedModal } = useSelector((state: any) => state.global);
    const dispatch = useDispatch();

    return (
        <Dialog open={showFrequentlyAskedModal}>
            <DialogContent onCloseHandler={() => dispatch(changeFrequentlyAskedModal(false))} className="max-w-[95vw] p-10 md:w-6/12 rounded-2xl max-h-[85vh] ">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-b items-center mt-5">
                        <AccordionTrigger className="outline-none">{t("faq.q1.title")}</AccordionTrigger>
                        <AccordionContent className="text-gray-500">
                            {t("faq.q1.answer")}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border-b items-center">
                        <AccordionTrigger>{t("faq.q2.title")}</AccordionTrigger>
                        <AccordionContent className="text-gray-500">
                            {t("faq.q2.answer")}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="border-b items-center">
                        <AccordionTrigger>{t("faq.q3.title")}</AccordionTrigger>
                        <AccordionContent className="text-gray-500">
                            {t("faq.q3.answer")}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className="border-b items-center">
                        <AccordionTrigger>{t("faq.q4.title")}</AccordionTrigger>
                        <AccordionContent className="text-gray-500">
                            {t("faq.q4.answer")}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5" className="border-b items-center">
                        <AccordionTrigger>{t("faq.q5.title")}</AccordionTrigger>
                        <AccordionContent className="text-gray-500">
                            {t("faq.q5.answer")}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <DialogFooter className="flex text-left !justify-start mt-10">
                    <p className="text-left font-bold">{t("faq.footer")}</p>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
