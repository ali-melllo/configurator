import { Slider } from "./ui/slider";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import {
    HomeIcon,
    RulerIcon,
    HammerIcon,
    ChevronFirst,
    ChevronLast,
    PaintbrushIcon,
    LightbulbIcon,
    DoorOpenIcon,
    TreesIcon,
    WrenchIcon,
    BedIcon,
    LayersIcon,
    SunIcon,
    ShieldIcon,
    GlassWater,
    CheckIcon,
    ThumbsUpIcon,
    FileWarning,
    ClockIcon,
    BrickWallIcon,
    BuildingIcon,
    FactoryIcon,
    FileTextIcon,
    ShieldCheckIcon,
    BatteryIcon,
    ClipboardListIcon,
    WindIcon,
    RecycleIcon,
    AppWindowIcon,
    LeafIcon,
    CloudRainIcon,
    DollarSignIcon,
    AlertTriangleIcon,
    LandmarkIcon,
    GridIcon,
    MountainIcon,
    BookOpenIcon,
    HeartIcon,
    ShoppingCartIcon,
    BadgeSwissFranc,
    Info,
} from "lucide-react";

import { addDays, format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { useRouter } from "next/navigation";
import { QuestionMarkIcon } from "@radix-ui/react-icons";
import { setBuildingStep } from "@/redux/globalSlice";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";

export default function StepperPage() {

    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(2022, 0, 20),
        to: addDays(new Date(2022, 0, 20), 20),
    })

    const STEPS = [
        {
            question: "Which part of your building?",
            type: "select",
            items: [
                { name: "Foundation & Groundwork", icon: RulerIcon },
                { name: "Flooring and Internal Design", icon: HammerIcon },
                { name: "Roofing & Insulation", icon: HomeIcon },
                { name: "Exterior Walls & Cladding", icon: PaintbrushIcon },
                { name: "Windows & Doors", icon: DoorOpenIcon },
                { name: "Electrical & Lighting", icon: LightbulbIcon },
                { name: "Plumbing & Drainage", icon: GlassWater },
                { name: "Landscaping & Outdoor", icon: TreesIcon },
            ],
        },
        {
            question: "What kind of Green flooring you want?",
            type: "select",
            items: [
                { name: "Rice Straw Wood", icon: PaintbrushIcon },
                { name: "Recycled Plastic PVC", icon: PaintbrushIcon },
                { name: "Hemp Parquet Wood ", icon: PaintbrushIcon },
                { name: "Old Wood", icon: PaintbrushIcon },
                { name: "Matte Floor", icon: PaintbrushIcon },
                { name: "Glossy Floor", icon: PaintbrushIcon },
                { name: "Weatherproof Floor", icon: PaintbrushIcon },
                { name: "Eco-Friendly Paint", icon: PaintbrushIcon },
            ],
        },
        {
            question: "What type of building is it?",
            type: "select",
            items: [
                { name: "Residential", icon: HomeIcon },
                { name: "Commercial", icon: BuildingIcon },
                { name: "Industrial", icon: FactoryIcon },
                { name: "Hotel", icon: LayersIcon },
                { name: "Retail", icon: ShoppingCartIcon },
                { name: "Hospitality", icon: BedIcon },
                { name: "Healthcare", icon: HeartIcon },
                { name: "Educational", icon: BookOpenIcon },
            ],
        },
        {
            question: "How large is the surface area?",
            type: "select",
            items: [
                { name: "1000m² or less", icon: RulerIcon },
                { name: "1000-6000m²", icon: RulerIcon },
                { name: "6000-12000m²", icon: RulerIcon },
                { name: "12000-25000m²", icon: RulerIcon },
                { name: "25000-200,000m²", icon: RulerIcon },
                { name: "250,000-500,000m²", icon: RulerIcon },
                { name: "More than 500,000m²", icon: RulerIcon },
                { name: "Custom Size", icon: RulerIcon },
            ],
        },
        {
            question: "When is the planned realization?",
            type: "select",
            items: [
                { name: "Less than 1 month", icon: LayersIcon },
                { name: "1 till 2 years", icon: LayersIcon },
                { name: "2 till 3 months", icon: LayersIcon },
                { name: "3 till 4 years", icon: LayersIcon },
                { name: "4-5 years", icon: LayersIcon },
                { name: "x", icon: LayersIcon },
                { name: "More than 20 Floors", icon: LayersIcon },
                { name: "Skyscraper", icon: LayersIcon },
            ],
        },
        {
            question: "What is current floor made of?",
            type: "select",
            items: [
                { name: "New Project", icon: BrickWallIcon },
                { name: "Concrete", icon: BuildingIcon },
                { name: "Laminate", icon: GlassWater },
                { name: "Metal", icon: ShieldIcon },
                { name: "Hard Wood", icon: TreesIcon },
                { name: "Composite Panels", icon: GridIcon },
                { name: "Stone", icon: MountainIcon },
                { name: "Ceramic Tiles", icon: LayersIcon },
            ],
        },
        {
            question: "What is the condition of the Floor?",
            type: "select",
            items: [
                { name: "New", icon: CheckIcon },
                { name: "Good", icon: ThumbsUpIcon },
                { name: "Minor Repairs Needed", icon: WrenchIcon },
                { name: "Major Repairs Needed", icon: FileWarning },
                { name: "Aging but Usable", icon: ClockIcon },
                { name: "Severely Damaged", icon: AlertTriangleIcon },
                { name: "Historic Preservation", icon: LandmarkIcon },
                { name: "Under Construction", icon: HammerIcon },
            ],
        },
        {
            question: "When is your customer expecting your quote?",
            type: "select",
            items: [
                { name: "Less than 1 month", icon: ClockIcon },
                { name: "1-3 months", icon: ClockIcon },
                { name: "3-6 months", icon: ClockIcon },
                { name: "6-12 months", icon: ClockIcon },
                { name: "1-2 years", icon: ClockIcon },
                { name: "More than 2 years", icon: ClockIcon },
                { name: "Ongoing Construction", icon: WrenchIcon },
                { name: "No Specific Timeline", icon: QuestionMarkIcon },
            ],
        },
        {
            question: "What is your estimated budget for the project?",
            type: "select",
            items: [
                { name: "Less than CHF500,000,", icon: BadgeSwissFranc },
                { name: "CHF500,000 - CHF1M", icon: BadgeSwissFranc },
                { name: "CHF1M - CHF4M", icon: BadgeSwissFranc },
                { name: "CHF4M - CHF12M", icon: BadgeSwissFranc },
                { name: "CHF12M - CHF14M", icon: BadgeSwissFranc },
                { name: "CHF14M - CHF25M", icon: BadgeSwissFranc },
                { name: "CHF25M - CHF50M", icon: BadgeSwissFranc },
                { name: "More than CHF50M", icon: BadgeSwissFranc },
            ],
        },
        {
            question: "What other sustainability features needed?",
            type: "select",
            items: [
                { name: "Solar Panels", icon: SunIcon },
                { name: "Rainwater Harvesting", icon: CloudRainIcon },
                { name: "Green Roof", icon: LeafIcon },
                { name: "Energy-Efficient Windows", icon: AppWindowIcon },
                { name: "Smart Lighting", icon: LightbulbIcon },
                { name: "Passive Cooling", icon: WindIcon },
                { name: "Low-Carbon Materials", icon: RecycleIcon },
                { name: "Water-Efficient Plumbing", icon: GlassWater },
            ],
        },
        {
            question: "Which additional services do you need?",
            type: "select",
            items: [
                { name: "Architectural Design", icon: BuildingIcon },
                { name: "Engineering Consultation", icon: WrenchIcon },
                { name: "Interior Design", icon: HomeIcon },
                { name: "None", icon: ClipboardListIcon },
                { name: "Structural Assessment", icon: ShieldIcon },
                { name: "Energy Audit", icon: BatteryIcon },
                { name: "Safety Inspection", icon: ShieldCheckIcon },
                { name: "Legal Permits & Compliance", icon: FileTextIcon },
            ],
        },
        {
            question: "Which one describes your construction old ?",
            type: "check",
            items: [
                { name: "before 1980", icon: BuildingIcon },
                { name: "before 1990", icon: BuildingIcon },
                { name: "before 2000", icon: BuildingIcon },
                { name: "before 2010", icon: BuildingIcon },
                { name: "before 2015", icon: BuildingIcon },
                { name: "before 2020", icon: BuildingIcon },
            ],
        },
        {
            question: "Please fill out the questions",
            type: "question",
            items: [
                { name: "Where is Your Address ? ", icon: BuildingIcon },
                { name: "Zip Code", icon: BuildingIcon },
                { name: "Phone", icon: BuildingIcon },
                { name: "Email", icon: BuildingIcon },
            ],
        },
        {
            question: "Please select the prefer date for construction",
            type: "date",
        },
    ];

    const { buildingStep } = useSelector((state: any) => state.global);
    const dispatch = useDispatch();
    const router = useRouter();
    return (
        <div className="md:h-[70vh] relative flex flex-col justify-between p-5 md:p-10 w-11/12 mx-auto backdrop-blur rounded-2xl bg-background border shadow-2xl">
            <Slider
                disabled
                value={[buildingStep]}
                defaultValue={[0]}
                max={STEPS.length}
                step={1}
                className={"w-full"}
            />
            <h2 className="mt-5 font-bold md:text-3xl">{STEPS[buildingStep].question}</h2>

            <div className={`h-3/6 ${STEPS[buildingStep].type === 'select' || STEPS[buildingStep].type === 'question' ? 'grid grid-cols-1 md:grid-cols-4' : 'flex flex-col flex-wrap'}  gap-5 p-5 items-start md:items-center bg-gradient-to-br from-background dark:to-black light:to-amber-50 rounded-lg`}>
                {STEPS[buildingStep].type === 'select' ? STEPS[buildingStep].items?.map((item) => (
                    <div key={item.name} onClick={() => {
                        (STEPS.length - 1 === buildingStep)
                            ?
                            router.push('/configurator/')
                            :
                            dispatch(setBuildingStep(buildingStep + 1))
                    }}
                        className="rounded-xl hover:border-primary hover:text-primary  transition-all duration-200 cursor-pointer h-20 border p-5 flex justify-center items-center text-sm md:text-xl text-center font-bold">
                        <item.icon className="me-2 size-10" />
                        {item.name}
                    </div>
                )) : STEPS[buildingStep].type === 'check' ?
                    STEPS[buildingStep].items?.map((item) => (
                        <div key={item.name + 'check'} onClick={() => {
                            (STEPS.length - 1 === buildingStep)
                                ?
                                router.push('/configurator/')
                                :
                                dispatch(setBuildingStep(buildingStep + 1))
                        }}
                            className="border-none transition-all duration-200 cursor-pointer h-10 border flex justify-center gap-2 items-center text-sm md:text-xl text-center font-bold">
                            <Info className="size-5" />
                            <Checkbox />
                            {item.name}
                        </div>
                    )) : STEPS[buildingStep].type === 'question' ?
                        STEPS[buildingStep].items?.map((item) => (
                            <div key={item.name + 'question'}
                                className="border-none transition-all duration-200 cursor-pointer border flex flex-col items-start gap-2  text-sm md:text-xl text-center font-bold">
                                <Label className="text-lg">{item.name}</Label>
                                <Input className="placeholder:text-muted-foreground h-12 text-lg" placeholder={item.name} />
                            </div>
                        )) : STEPS[buildingStep].type === 'date' ?
                            <div className={cn("grid gap-2")}>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            id="date"
                                            variant={"outline"}
                                            className={cn(
                                                "w-[300px] justify-start text-left font-normal",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon />
                                            {date?.from ? (
                                                date.to ? (
                                                    <>
                                                        {format(date.from, "LLL dd, y")} -{" "}
                                                        {format(date.to, "LLL dd, y")}
                                                    </>
                                                ) : (
                                                    format(date.from, "LLL dd, y")
                                                )
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            initialFocus
                                            mode="range"
                                            defaultMonth={date?.from}
                                            selected={date}
                                            onSelect={setDate}
                                            numberOfMonths={2}
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div> : null}
            </div>

            <div className="md:h-10 items-center w-full flex justify-between">
                <Button disabled={buildingStep === 0} onClick={() => {
                    buildingStep === 0 ? dispatch(setBuildingStep(buildingStep - 1)) : dispatch(setBuildingStep(null))
                }}
                    className="w-5/12 md:w-3/12 flex items-center gap-3 font-bold text-sm md:text-xl h-12 rounded-2xl" variant={"outline"}>
                    {buildingStep === 0 ? <HomeIcon /> : <ChevronFirst />}
                    {buildingStep === 0 ? "Back to Home" : "Prev"}
                </Button>
                <Button
                    onClick={() => {
                        STEPS.length - 1 === buildingStep
                            ?
                            router.push('/configurator/')
                            :
                            dispatch(setBuildingStep(buildingStep + 1))
                    }}
                    className="w-5/12 md:w-3/12 flex items-center gap-3 font-bold text-sm md:text-xl h-12 rounded-2xl ">
                    {STEPS.length - 1 === buildingStep ? "Go To Configurator" : "Next"}
                    {STEPS.length - 1 !== buildingStep && <ChevronLast />}
                </Button>
            </div>
        </div>
    )
}