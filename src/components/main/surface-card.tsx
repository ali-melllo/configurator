"use client";

import { useForm } from "react-hook-form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect } from "react";
import { setDimensions } from "@/redux/globalSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLang } from "@/contexts/LangContext";

export default function SurfaceCard() {
  const { register, watch } = useForm({
    defaultValues: {
      width: "",
      depth: "",
    },
  });

  const dispatch = useDispatch();
  const { t } = useLang();

  const width = watch("width");
  const depth = watch("depth");

  const { finalQuote } = useSelector((state: any) => state.global);

  useEffect(() => {
    const widthNum = parseFloat(width) || 0;
    const depthNum = parseFloat(depth) || 0;

    dispatch(setDimensions({
      width: widthNum,
      depth: depthNum,
      surface: (widthNum * depthNum) / 10000
    }))
  }, [width, depth, dispatch]);

  return (
    <Card className="w-full md:mt-5">
      <CardHeader className="flex pt-3 flex-row justify-between items-center">
        <CardTitle className="flex items-center">
          {t("configurator.surface.title")}
          <Popover>
            <PopoverTrigger className="flex items-center ml-3 bg-primary size-4 justify-center rounded-full text-sm text-black">
              !
            </PopoverTrigger>
            <PopoverContent className="text-sm text-white bg-primary">
              {t("configurator.surface.guide")}
            </PopoverContent>
          </Popover>
        </CardTitle>
        <CardTitle className="font-bold text-2xl text-primary -mr-2">
          {finalQuote.surface !== null ? `${Number(finalQuote.surface).toFixed(2) || 0} m²` : "-- m²"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid grid-cols-2 w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label className="text-sm" htmlFor="width">  {t("configurator.surface.width")} (cm)</Label>
              <Input value={finalQuote?.width} {...register("width")} id="width" placeholder="400 cm" type="number" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label className="text-sm" htmlFor="depth">{t("configurator.surface.depth")}  (cm)</Label>
              <Input value={finalQuote?.depth} {...register("depth")} id="depth" placeholder="200 cm" type="number" />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
