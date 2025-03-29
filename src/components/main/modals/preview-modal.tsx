'use client'

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Loader } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { changePreview, changeShowFinalQuoteModal, resetAll } from "@/redux/globalSlice";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { formatEuroPrice } from "@/lib/utils";
import { Button } from "../../ui/button";



export default function PreviewModal() {

    const { showPreview } = useSelector((state: any) => state.global);
    const dispatch = useDispatch();

    return (
        <Dialog open={showPreview} >
            <DialogContent onCloseHandler={() => dispatch(changePreview(false))} className="max-w-[95vw] md:w-6/12 rounded-2xl max-h-[85vh] ">
                <DialogHeader>
                    <DialogTitle className="text-left">3D Preview</DialogTitle>
                </DialogHeader>
                <Card className="w-full mt-5">
                    <CardContent>
                      
                    </CardContent>
                </Card>
            </DialogContent>
        </Dialog>
    )
}