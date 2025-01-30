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
import { useState, useEffect } from "react";

export default function SurfaceCard() {
  const { register, watch } = useForm({
    defaultValues: {
      width: "",
      depth: "",
    },
  });

  const width = watch("width");
  const depth = watch("depth");

  const [surfaceArea, setSurfaceArea] = useState<number | null>(null);

  useEffect(() => {
    const widthNum = parseFloat(width) || 0;
    const depthNum = parseFloat(depth) || 0;
    setSurfaceArea((widthNum * depthNum) / 10000); // Convert cm² to m²

    // set to redux here
    
  }, [width, depth]);

  return (
    <Card className="w-full md:mt-5">
      <CardHeader className="flex pt-3 flex-row justify-between items-center">
        <CardTitle className="flex items-center">
          Surface Area
          <Popover>
            <PopoverTrigger className="flex items-center ml-3 bg-primary size-4 justify-center rounded-full text-sm text-black">
              !
            </PopoverTrigger>
            <PopoverContent className="text-sm">
              Some description and guide for the user about how the sizing works in this section
            </PopoverContent>
          </Popover>
        </CardTitle>
        <CardTitle className="font-bold text-2xl text-primary -mr-2">
          {surfaceArea !== null ? `${surfaceArea.toFixed(2)} m²` : "-- m²"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid grid-cols-2 w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label className="text-sm" htmlFor="width">Width (cm)</Label>
              <Input {...register("width")} id="width" placeholder="400 cm" type="number" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label className="text-sm" htmlFor="depth">Depth (cm)</Label>
              <Input {...register("depth")} id="depth" placeholder="200 cm" type="number" />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
