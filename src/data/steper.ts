

export const STEPS_DATA = [
    {
        "title": "stepper.mainQuestion",
        "description": "stepper.mainDescription",
        "type": "select",
        "name": "home_type",
        "items": [
            {
                "title": "stepper.servicesSelectTitle",
                "description": "stepper.servicesSelectDescription",
                "type": "multi",
                "name": "stepper.house",
                "icon": "🏚️",
                "key": "gather-steps",
                "items": [
                    {
                        "name": "stepper.bathroomName",
                        "icon": "🛁",
                        "items": {
                            "name": "stepper.bathRoomTitle",
                            "title": "stepper.bathRoomTitle",
                            "description": "stepper.bathRoomTitleDescription",
                            "type": "text",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.bathroomQuestionOne" },
                                { "name": "stepper.bathroomQuestionTwo" },
                                { "name": "stepper.bathroomQuestionThree", "minPrice": 180 , "hours": "4" , calculation : "per-sq" , "type": "number" },
                                { "name": "stepper.bathroomQuestionFour"},
                            ],
                            "nextStep": {
                                "name": "stepper.bathroomQuestions",
                                "title": "stepper.bathroomQuestions",
                                "description": "stepper.bathroomQuestionsDescription",
                                "type": "text",
                                "items": [
                                    { "name": "stepper.bathroomCheckOutQuestionOne", "minPrice": 120 , "hours": "3" , calculation : "per-sq" , "type": "number" },
                                    { "name": "stepper.bathroomCheckOutQuestionTwo", "minPrice": 160 , "hours": "3" , calculation : "per-sq" , "type": "number" },
                                    { "name": "stepper.bathroomCheckOutQuestionThree", "minPrice": 220 , "hours": "4" , calculation : "per-sq" , "type": "number" },
                                    { "name": "stepper.bathroomCheckOutQuestionFour", "minPrice": 50 , "hours": "2.5" , calculation : "per-sq" , "type": "number" },
                                    { "name": "stepper.bathroomCheckOutQuestionFive", "minPrice": 180 , "hours": "4" , calculation : "per-sq" , "type": "number" },
                                ],
                                "nextStep": {
                                    "name": "stepper.tilesQuality",
                                    "title": "stepper.tilesQualityTitle",
                                    "description": "stepper.tilesQualityDescription",
                                    "type": "multi",
                                    "items": [
                                        { "name": "stepper.budgetQuality", "minPrice": 0 },
                                        { "name": "stepper.standardQuality", "minPrice": 0 },
                                        { "name": "stepper.premiumQuality", "minPrice": 0 },
                                    ],
                                    "nextStep": {
                                        "name": "stepper.bathroomFeatures",
                                        "title": "stepper.bathroomFeaturesTitle",
                                        "description": "stepper.bathroomFeaturesDescription",
                                        "type": "multi",
                                        "items": [
                                            { "name": "stepper.shower", "minPrice": 1199 , "hours": "28" , calculation : "per-p"  },
                                            { "name": "Surface Mounted shower", "minPrice": 700  , "hours": "13" , calculation : "per-p" },
                                            { "name": "stepper.toilet", "minPrice": 800  , "hours": "13" , calculation : "per-p" },
                                            { "name": "Surface Mounted Wc", "minPrice": 400  , "hours": "7" , calculation : "per-p" },
                                            { "name": "Single Bathroom Zinc", "minPrice": 400  , "hours": "10" , calculation : "per-p" },
                                            { "name": "Double Bathroom Zinc", "minPrice": 600  , "hours": "12" , calculation : "per-p" },
                                            { "name": "Built-in tub", "minPrice": 1800  , "hours": "37" , calculation : "per-p" },
                                            { "name": "Free standing tub", "minPrice": 800  , "hours": "16" , calculation : "per-p" },
                                            { "name": "Whirlpool or Jacuzzi", "minPrice": 2800  , "hours": "55" , calculation : "per-p" },
                                            { "name": "Towel Radiator", "minPrice": 300  , "hours": "7" , calculation : "per-p" },

                                        ],
                                        "nextStep": null,
                                        "lastStep": true,
                                    },
                                },
                            }
                        },
                    },
                    {
                        "name": "stepper.ElectricityTitle",
                        "disabled": true,
                        "icon": "🔌",
                        "items": {
                            "name": "stepper.fuseBoxTitle",
                            "title": "stepper.fuseBoxQuestion",
                            "description": "stepper.fuseBoxDescription",
                            "type": "multi",
                            "isFirst": true,
                            "icon": "🔌",
                            "items": [
                                { "name": "stepper.fuseBoxTitle", "minPrice": 2720 },
                                { "name": "stepper.fuseBoxWithNoData", "minPrice": 6522 },
                                { "name": "stepper.noOrDontKnow" }
                            ],
                            "nextStep": {
                                "name": "stepper.heatPumpTitle",
                                "title": "stepper.heatPumpTitle",
                                "description": "stepper.heatPumpDescription",
                                "items": [
                                    { "name": "stepper.heatPumpQuestionOne" },
                                ],
                                "type": "check",
                                "icon": "🔌",
                                "nextStep": {
                                    "name": "stepper.electricalWiringTitle",
                                    "title": "stepper.electricalWiringTitle",
                                    "description": "stepper.electricalWiringDescription",
                                    "items": [
                                        { "name": "stepper.electricalWiringQuestionOne" },
                                    ],
                                    "type": "check",
                                    "icon": "🔌",
                                    "nextStep": {
                                        "name": "stepper.roomSelectionName",
                                        "title": "stepper.roomSelectionTitle",
                                        "description": "stepper.roomSelectionDEscription",
                                        "items": [
                                            { "name": "stepper.livingRoom", "icon": "🛋️", "minPrice": 8022 },
                                            { "name": "stepper.bedRoom", "icon": "👶🏻", "minPrice": 8022 },
                                            { "name": "stepper.hallway", "icon": "🏘", "minPrice": 8022 },
                                            { "name": "stepper.kitchen", "icon": "🍳", "minPrice": 8022 },
                                            { "name": "stepper.bathRoom", "icon": "🛁", "minPrice": 8022 },
                                            { "name": "stepper.basement", "icon": "⬇🚪", "minPrice": 8022 },
                                        ],
                                        "type": "multi",
                                        "icon": "🔌",
                                        "nextStep": {
                                            "name": "stepper.roomSizeName",
                                            "title": "stepper.roomSizeTitle",
                                            "description": "stepper.roomSizeDescription",
                                            "items": [
                                                { "name": "stepper.roomQuestionOne", "minPrice": 50, "type": "number" },
                                                { "name": "stepper.roomQuestionTwo", "minPrice": 50, "type": "number" },
                                                { "name": "stepper.roomQuestionThree", "minPrice": 50, "type": "number" },
                                                { "name": "stepper.roomQuestionFour", "minPrice": 50, "type": "number" },
                                                { "name": "stepper.roomQuestionFive", "minPrice": 50, "type": "number" },
                                            ],
                                            "type": "text",
                                            "nextStep": {
                                                "name": "stepper.newSwitchesName",
                                                "title": "stepper.newSwitchesTitle",
                                                "description": "stepper.newSwitchesDescription",
                                                "items": [
                                                    { "name": "stepper.budgetQuality", "minPrice": 2000 },
                                                    { "name": "stepper.standardQuality", "minPrice": 2200 },
                                                    { "name": "stepper.premiumQuality", "minPrice": 2800 },
                                                ],
                                                "type": "multi",
                                                "nextStep": null
                                            }
                                        }
                                    },
                                },
                            },
                        },
                    },
                    {
                        "name": "stepper.heatingName",
                        "disabled": true,
                        "icon": "🌡️",
                        "items": {
                            "name": "stepper.heatingTechName",
                            "isFirst": true,
                            "title": "stepper.heatingName",
                            "description": "stepper.heatingDescription",
                            "type": "check",
                            "nextStep": {
                                "name": "stepper.heatingRadiatorsName",
                                "title": "stepper.heatingRadiatorsTitle",
                                "description": "stepper.heatingRadiatorsDescription",
                                "type": "multi",
                                "items": [
                                    { "name": "stepper.standardRadiators", "icon": "♨️", "minPrice": 2720 },
                                    { "name": "stepper.panelRadiators", "icon": "♨️", "minPrice": 2720 },
                                    { "name": "stepper.towelRadiators", "icon": "♨️", "minPrice": 2720 },
                                    { "name": "stepper.verticalRadiators", "icon": "♨️", "minPrice": 2720 },
                                ],
                                "nextStep": {
                                    "name": "stepper.ovenName",
                                    "title": "stepper.ovenName",
                                    "description": "stepper.ovenDescription",
                                    "type": "check",
                                    "nextStep": {
                                        "name": "stepper.ovenQualityName",
                                        "title": "stepper.ovenQualityTitle",
                                        "description": "stepper.ovenQualityDescription",
                                        "items": [
                                            { "name": "stepper.budgetQuality", "minPrice": 2720 },
                                            { "name": "stepper.standardQuality", "minPrice": 3720 },
                                            { "name": "stepper.premiumQuality", "minPrice": 5720 },
                                        ],
                                        "type": "multi",
                                        "nextStep": {
                                            "name": "stepper.firePlaceName",
                                            "title": "stepper.firePlaceName",
                                            "description": "stepper.firePlaceDescription",
                                            "items": [
                                                { "name": "stepper.firePlaceQuestionOne", "minPrice": 2720 },
                                            ],
                                            "type": "check",
                                            "nextStep": null
                                        }
                                    },
                                    "items": [
                                        { "name": "stepper.ovenQuestionOne", "minPrice": 2720 }
                                    ]
                                },
                            },
                            "items": [
                                { "name": "stepper.heatingQuestionOne", "minPrice": 2720 },
                                { "name": "stepper.heatingQuestionTwo", "minPrice": 2720 },
                                { "name": "stepper.heatingQuestionThree", "minPrice": 2720 },
                            ]
                        },
                    },
                    {
                        "name": "stepper.wallTitle",
                        "icon": "🏼",
                        "disabled": true,
                        "items": {
                            "name": "stepper.roomSelectionName",
                            "title": "stepper.roomSelectionMainQuestion",
                            "description": "stepper.roomSelectionMainDescription",
                            "type": "multi",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.livingRoom", "icon": "🛋️", "minPrice": 2720 },
                                { "name": "stepper.bedRoom", "icon": "👶🏻", "minPrice": 2720 },
                                { "name": "stepper.hallway", "icon": "🏘", "minPrice": 2720 },
                                { "name": "stepper.kitchen", "icon": "🍳", "minPrice": 2720 },
                                { "name": "stepper.bathroom", "icon": "🛁", "minPrice": 2720 },
                                { "name": "stepper.basement", "icon": "⬇🚪", "minPrice": 2720 },
                            ],
                            "nextStep": {
                                "name": "stepper.roomSizeName",
                                "title": "stepper.roomSizeTitle",
                                "description": "stepper.roomSizeDescription",
                                "type": "text",
                                "items": [
                                    { "name": "stepper.roomQuestionOne", "minPrice": 27, "type": "number" },
                                    { "name": "stepper.roomQuestionTwo", "minPrice": 27, "type": "number" },
                                    { "name": "stepper.roomQuestionThree", "minPrice": 27, "type": "number" },
                                    { "name": "stepper.roomQuestionFour", "minPrice": 27, "type": "number" },
                                    { "name": "stepper.roomQuestionFive", "minPrice": 27, "type": "number" },
                                ],
                                "nextStep": {
                                    "name": "stepper.roomsEditName",
                                    "title": "stepper.roomsEditTitle",
                                    "description": "stepper.roomsEditDescription",
                                    "type": "check",
                                    "items": [
                                        { "name": "stepper.roomEditQuestionOne", "minPrice": 2720 },
                                        { "name": "stepper.roomEditQuestionTwo", "minPrice": 2720 },
                                        { "name": "stepper.roomEditQuestionThree", "minPrice": 2720 },
                                        { "name": "stepper.roomEditQuestionFour", "minPrice": 2720 },
                                        { "name": "stepper.roomEditQuestionFive", "minPrice": 2720 },
                                    ],
                                    "nextStep": {
                                        "name": "stepper.roomsWallName",
                                        "title": "stepper.roomsWallsTitle",
                                        "description": "roomsWallsDescription",
                                        "type": "multi",
                                        "items": [
                                            { "name": "stepper.fillingWalls", "minPrice": 2720 },
                                            { "name": "stepper.paintWalls", "minPrice": 2720 },
                                            { "name": "stepper.wallpaperWalls", "minPrice": 2720 },
                                            { "name": "stepper.trillingWalls", "minPrice": 2720 },
                                        ],
                                        "nextStep": {
                                            "name": "stepper.paintsQuality",
                                            "title": "stepper.paintsTitle",
                                            "description": "stepper.paintsDescription",
                                            "type": "multi",
                                            "items": [
                                                { "name": "stepper.budgetQuality", "minPrice": 2720 },
                                                { "name": "stepper.standardQuality", "minPrice": 3720 },
                                                { "name": "stepper.budgetQuality", "minPrice": 5720 },
                                            ],
                                            "nextStep": {
                                                "name": "stepper.roomsCeilingTitle",
                                                "title": "stepper.roomsCeilingTitle",
                                                "description": "stepper.roomsCeilingDescription",
                                                "type": "check",
                                                "items": [
                                                    { "name": "stepper.roomCeilingQuestionOne", "minPrice": 2720 },
                                                    { "name": "stepper.roomCeilingQuestionTwo", "minPrice": 2720 },
                                                    { "name": "stepper.roomCeilingQuestionThree", "minPrice": 2720 },
                                                    { "name": "stepper.roomCeilingQuestionFour", "minPrice": 2720 },
                                                    { "name": "stepper.roomCeilingQuestionFive", "minPrice": 2720 },
                                                    { "name": "stepper.roomCeilingQuestionSix", "minPrice": 2720 },
                                                    { "name": "stepper.roomCeilingQuestionSeven", "minPrice": 2720 },
                                                    { "name": "stepper.roomCeilingQuestionEight", "minPrice": 2720 },
                                                    { "name": "stepper.roomCeilingQuestionNine", "minPrice": 2720 },
                                                    { "name": "stepper.roomCeilingQuestionTen", "minPrice": 2720 },
                                                ],
                                                "nextStep": null,
                                                "lastStep": true
                                            }
                                        }
                                    }
                                }
                            }
                        },
                    },
                    {
                        "name": "stepper.flooringTitle",
                        "icon": "👣",
                        "disabled": true,
                        "items": {
                            "name": "stepper.roomSelectionName",
                            "title": "stepper.roomSelectionMainQuestion",
                            "description": "stepper.roomSelectionMainDescription",
                            "type": "multi",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.livingRoom", "icon": "🛋️", "minPrice": 2720 },
                                { "name": "stepper.bedRoom", "icon": "👶🏻", "minPrice": 2720 },
                                { "name": "stepper.hallway", "icon": "🏘", "minPrice": 2720 },
                                { "name": "stepper.kitchen", "icon": "🍳", "minPrice": 2720 },
                                { "name": "stepper.bathroom", "icon": "🛁", "minPrice": 2720 },
                                { "name": "stepper.basement", "icon": "⬇🚪", "minPrice": 2720 },
                            ],
                            "nextStep": {
                                "name": "stepper.roomSizeName",
                                "title": "stepper.roomSizeTitle",
                                "description": "stepper.roomSizeDescription",
                                "type": "text",
                                "items": [
                                    { "name": "stepper.roomQuestionOne", "minPrice": 27, "type": "number" },
                                    { "name": "stepper.roomQuestionTwo", "minPrice": 27, "type": "number" },
                                    { "name": "stepper.roomQuestionThree", "minPrice": 27, "type": "number" },
                                    { "name": "stepper.roomQuestionFour", "minPrice": 27, "type": "number" },
                                    { "name": "stepper.roomQuestionFive", "minPrice": 27, "type": "number" },
                                ],
                                "nextStep": {
                                    "name": "stepper.roomFloorService",
                                    "title": "stepper.roomFloorServiceTitle",
                                    "description": "stepper.roomFloorServiceDescription",
                                    "type": "multi",
                                    "items": [
                                        { "name": "stepper.newFlooring", "minPrice": 2720 },
                                        { "name": "stepper.reconditionFlooring", "minPrice": 2720 },
                                    ],
                                    "nextStep": {
                                        "name": "stepper.floorTypeName",
                                        "title": "stepper.floorTypeTitle",
                                        "description": "stepper.floorTypeDescription",
                                        "type": "multi",
                                        "items": [
                                            { "name": "stepper.parquet", "minPrice": 2720 },
                                            { "name": "stepper.works", "minPrice": 2720 },
                                            { "name": "stepper.vinyl", "minPrice": 2720 },
                                            { "name": "stepper.laminate", "minPrice": 2720 },
                                            { "name": "stepper.carpet", "minPrice": 2720 },
                                            { "name": "stepper.tiles", "minPrice": 2720 },
                                        ],
                                        "nextStep": {
                                            "name": "stepper.skirtingBoardsTitle",
                                            "title": "stepper.skirtingBoardsTitle",
                                            "description": "stepper.skirtingBoardsDescription",
                                            "type": "check",
                                            "items": [
                                                { "name": "stepper.skirtingBoardsQuestionOne", "minPrice": 2720 },
                                                { "name": "stepper.skirtingBoardsQuestionTwo", "minPrice": 2720 },
                                                { "name": "stepper.skirtingBoardsQuestionThree", "minPrice": 2720 },
                                                { "name": "stepper.skirtingBoardsQuestionFour", "minPrice": 2720 },
                                                { "name": "stepper.skirtingBoardsQuestionFive", "minPrice": 2720 },
                                            ],
                                            "nextStep": {
                                                "name": "stepper.oldFlooring",
                                                "title": "stepper.oldFlooring",
                                                "description": "stepper.oldFlooringDescription",
                                                "type": "check",
                                                "items": [
                                                    { "name": "stepper.oldFlooringQuestionOne", "minPrice": 2720 },
                                                    { "name": "stepper.oldFlooringQuestionTwo", "minPrice": 2720 },
                                                    { "name": "stepper.oldFlooringQuestionThree", "minPrice": 2720 },
                                                    { "name": "stepper.oldFlooringQuestionFour", "minPrice": 2720 },
                                                    { "name": "stepper.oldFlooringQuestionFive", "minPrice": 2720 },
                                                ],
                                                "nextStep": {
                                                    "name": "stepper.flooringQuality",
                                                    "title": "stepper.flooringQuality",
                                                    "description": "stepper.flooringQualityDescription",
                                                    "type": "multi",
                                                    "items": [
                                                        { "name": "stepper.budgetQuality", "minPrice": 2720 },
                                                        { "name": "stepper.standardQuality", "minPrice": 4720 },
                                                        { "name": "stepper.premiumQuality", "minPrice": 6720 },
                                                    ],
                                                    "nextStep": null,
                                                    "lastStep": true
                                                },
                                            },
                                        },
                                    },

                                }
                            }
                        },

                    },
                    {
                        "name": "stepper.window",
                        "icon": "🔲",
                        "disabled": true,
                        "items": {
                            "name": "stepper.windowsInfo",
                            "title": "stepper.windowsInfo",
                            "description": "stepper.windowsInfoDescription",
                            "type": "text",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.windowsInfoQuestionOne" },
                                { "name": "stepper.windowsInfoQuestionTwo", "minPrice": 27, "type": "number" },
                                { "name": "stepper.windowsInfoQuestionThree" },
                            ],
                            "nextStep": {
                                "name": "newWindows",
                                "title": "stepper.newWindowsTitle",
                                "description": "stepper.newWindowsDescription",
                                "type": "multi",
                                "items": [
                                    { "name": "stepper.plastic", "minPrice": 2720 },
                                    { "name": "stepper.wood", "minPrice": 2720 },
                                ],
                                "nextStep": null,
                                "lastStep": true
                            },
                        },

                    },
                    {
                        "name": "stepper.doors",
                        "icon": "🚪",
                        "disabled": true,
                        "items": {
                            "name": "stepper.doorsTitle",
                            "title": "stepper.doorsTitle",
                            "description": "stepper.doorsDescription",
                            "type": "check",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.doorQuestionOne", "minPrice": 2720 },
                                { "name": "stepper.doorQuestionTwo", "minPrice": 2720 },
                                { "name": "stepper.doorQuestionThree", "minPrice": 2720 },
                            ],
                            "nextStep": {
                                "name": "stepper.newDoors",
                                "title": "stepper.newDoors",
                                "description": "stepper.newDoorsDescription",
                                "type": "text",
                                "items": [
                                    { "name": "stepper.newDoorsQuestionOne", "minPrice": 272, "type": "number" },
                                    { "name": "stepper.newDoorsQuestionTwo", "minPrice": 272, "type": "number" },
                                ],
                                "nextStep": {
                                    "name": "doorsQuality",
                                    "title": "stepper.doorsQualityTitle",
                                    "description": "stepper.doorsQualityDescription",
                                    "type": "multi",
                                    "items": [
                                        { "name": "stepper.budgetQuality", "minPrice": 2720 },
                                        { "name": "stepper.standardQuality", "minPrice": 3720 },
                                        { "name": "stepper.premiumQuality", "minPrice": 5720 },
                                    ],
                                    "nextStep": null,
                                    "lastStep": true
                                },
                            },
                        },
                    },
                    {
                        "name": "stepper.roofAndInsulation",
                        "icon": "🧱",
                        "disabled": true,
                        "items": {
                            "name": "stepper.roofAndInsulationInfo",
                            "title": "stepper.roofAndInsulationTitle",
                            "description": "stepper.roofAndInsulationDescription",
                            "type": "multi",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.roofAndInsulationQuestionOne", "minPrice": 2720 },
                                { "name": "stepper.roofAndInsulationQuestionTwo", "minPrice": 2720 },
                            ],
                            "nextStep": {
                                "name": "stepper.roofShape",
                                "title": "stepper.roofShapeTitle",
                                "description": "stepper.roofShapeDescription",
                                "type": "multi",
                                "items": [
                                    { "name": "stepper.gableRoof", "minPrice": 2720 },
                                    { "name": "stepper.flatRoof", "minPrice": 2720 },
                                ],
                                "nextStep": {
                                    "name": "stepper.roofQuestions",
                                    "title": "stepper.roofQuestions",
                                    "description": "stepper.roofQuestionsDescription",
                                    "type": "text",
                                    "items": [
                                        { "name": "stepper.roofQuestionOne", "minPrice": 2720, "type": "number" },
                                        { "name": "stepper.roofQuestionTwo" },
                                        { "name": "stepper.roofQuestionThree" },
                                        { "name": "stepper.roofQuestionFour" },
                                    ],
                                    "nextStep": null,
                                    "lastStep": true,
                                },
                            },
                        },
                    },
                    {
                        "name": "stepper.facade",
                        "icon": "🛠",
                        "disabled": true,
                        "items": {
                            "name": "stepper.facadeName",
                            "title": "stepper.facadeTitle",
                            "description": "stepper.facadeDescription",
                            "type": "multi",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.singleHouse", "minPrice": 2720 },
                                { "name": "stepper.semiHouse", "minPrice": 2720 },
                                { "name": "stepper.terracedHouse", "minPrice": 2720 },
                                { "name": "stepper.endHouse", "minPrice": 2720 },
                            ],
                            "nextStep": {
                                "name": "stepper.facade",
                                "title": "stepper.facadeTypeTitle",
                                "description": "stepper.facadeTypeDescription",
                                "type": "multi",
                                "items": [
                                    { "name": "stepper.facadeStone", "minPrice": 2720 },
                                    { "name": "stepper.facadePlaster", "minPrice": 2720 },
                                    { "name": "stepper.facadePainting", "minPrice": 2720 },
                                    { "name": "stepper.facadeBlown", "minPrice": 2720 },
                                ],
                                "nextStep": {
                                    "name": "stepper.houseInfo",
                                    "title": "stepper.houseInfoTitle",
                                    "description": "stepper.houseInfoDescription",
                                    "type": "text",
                                    "items": [
                                        { "name": "stepper.houseInfoQuestionOne", "minPrice": 2720, "type": "number" },
                                        { "name": "stepper.houseInfoQuestionTwo" },
                                    ],
                                    "nextStep": null,
                                    "lastStep": true,
                                },
                            },
                        },
                    },
                    {
                        "name": "stepper.floorPlan",
                        "icon": "𓉩",
                        "disabled": true,
                        "items": {
                            "name": "stepper.floorPlanName",
                            "title": "stepper.floorPlanTitle",
                            "description": "stepper.floorPlanDescription",
                            "type": "check",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.floorPlanQuestionOne", "minPrice": 2720 },
                                { "name": "stepper.floorPlanQuestionTwo", "minPrice": 2720 },
                                { "name": "stepper.floorPlanQuestionThree", "minPrice": 2720 },
                            ],
                            "nextStep": {
                                "name": "stepper.floorPlanDetails",
                                "title": "stepper.floorPlanDetailsTitle",
                                "description": "stepper.floorPlanDetailsDescription",
                                "type": "text",
                                "items": [
                                    { "name": "stepper.floorPlanDetailsQuestionOne", "minPrice": 2720, "type": "number" },
                                    { "name": "stepper.floorPlanDetailsQuestionTwo", "minPrice": 2720, "type": "number" },
                                ],
                                "nextStep": {
                                    "name": "stepper.floorPlanType",
                                    "title": "stepper.floorPlanTypeTitle",
                                    "description": "stepper.floorPlanTypeDescription",
                                    "type": "multi",
                                    "items": [
                                        { "name": "stepper.massivwand", "minPrice": 2720 },
                                        { "name": "stepper.lightWeightWall", "minPrice": 2720 },
                                    ],
                                    "nextStep": {
                                        "name": "stepper.floorPlanClose",
                                        "title": "stepper.floorPlanCloseTitle",
                                        "description": "stepper.floorPlanCloseDescription",
                                        "type": "multi",
                                        "items": [
                                            { "name": "stepper.massivwand", "minPrice": 2720 },
                                            { "name": "stepper.lightWeightWall", "minPrice": 2720 },
                                        ],
                                        "nextStep": null,
                                        "lastStep": true,
                                    },
                                },
                            },
                        },
                    },
                    {
                        "name": "stepper.stairs",
                        "icon": "𓊍",
                        "disabled": true,
                        "items": {
                            "name": "stepper.stairsInfo",
                            "title": "stepper.stairsInfo",
                            "description": "stepper.stairsInfoDescription",
                            "type": "check",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.stairInfoQuestionOne", "minPrice": 2720 },
                                { "name": "stepper.stairInfoQuestionTwo", "minPrice": 2720 },
                                { "name": "stepper.stairInfoQuestionThree", "minPrice": 2720 },
                                { "name": "stepper.stairInfoQuestionFour", "minPrice": 2720 },
                            ],
                            "nextStep": {
                                "name": "stepper.stairsType",
                                "title": "stepper.stairsTypeTitle",
                                "description": "stepper.stairsTypeDescription",
                                "type": "multi",
                                "items": [
                                    { "name": "stepper.straight", "minPrice": 2720 },
                                    { "name": "stepper.quarter", "minPrice": 2720 },
                                    { "name": "stepper.stairsHalf", "minPrice": 2720 },
                                    { "name": "stepper.stepperTwoQuarter", "minPrice": 2720 },
                                ],
                                "nextStep": {
                                    "name": "stepper.stairsQuality",
                                    "title": "stepper.stairsQualityTitle",
                                    "description": "stepper.stairsQualityDescription",
                                    "type": "multi",
                                    "items": [
                                        { "name": "stepper.budgetQuality", "minPrice": 2720 },
                                        { "name": "stepper.standardQuality", "minPrice": 3720 },
                                        { "name": "stepper.premiumQuality", "minPrice": 5720 },
                                    ],
                                    "nextStep": null,
                                    "lastStep": true,
                                },
                            },
                        },
                    },
                    {
                        "name": "stepper.supplyLines",
                        "icon": "🚰",
                        "disabled": true,
                        "items": {
                            "name": "stepper.supplyLinesInfo",
                            "title": "stepper.supplyLinesInfo",
                            "description": "stepper.supplyLinesInfoDescription",
                            "type": "text",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.supplyLinesQuestionOne", "minPrice": 272, "type": "number" },
                                { "name": "stepper.supplyLinesQuestionTwo", "minPrice": 272, "type": "number" },
                            ],
                            "nextStep": null,
                            "lastStep": true,
                        },
                    },
                ]
            },
            //////////////////////////////////////
            //////////////////////////////////////
            //////////////////////////////////////
            //////////////////////////////////////
            //////////////////////////////////////
            //////////////////////////////////////
            {
                "title": "stepper.servicesSelectTitle",
                "description": "stepper.servicesSelectDescription",
                "type": "multi",
                "name": "stepper.apartment",
                "icon": "🏬",
                "key": "gather-steps",
                "items": [
                    {
                        "name": "stepper.bathroomName",
                        "icon": "🛁",
                        "items": {
                            "name": "stepper.bathRoomTitle",
                            "title": "stepper.bathRoomTitle",
                            "description": "stepper.bathRoomTitleDescription",
                            "type": "text",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.bathroomQuestionOne" },
                                { "name": "stepper.bathroomQuestionTwo" },
                                { "name": "stepper.bathroomQuestionThree", "minPrice": 180 , "hours": "4" , calculation : "per-sq" , "type": "number" },
                                { "name": "stepper.bathroomQuestionFour"},
                            ],
                            "nextStep": {
                                "name": "stepper.bathroomQuestions",
                                "title": "stepper.bathroomQuestions",
                                "description": "stepper.bathroomQuestionsDescription",
                                "type": "text",
                                "items": [
                                    { "name": "stepper.bathroomCheckOutQuestionOne", "minPrice": 120 , "hours": "3" , calculation : "per-sq" , "type": "number" },
                                    { "name": "stepper.bathroomCheckOutQuestionTwo", "minPrice": 160 , "hours": "3" , calculation : "per-sq" , "type": "number" },
                                    { "name": "stepper.bathroomCheckOutQuestionThree", "minPrice": 220 , "hours": "4" , calculation : "per-sq" , "type": "number" },
                                    { "name": "stepper.bathroomCheckOutQuestionFour", "minPrice": 50 , "hours": "2.5" , calculation : "per-sq" , "type": "number" },
                                    { "name": "stepper.bathroomCheckOutQuestionFive", "minPrice": 180 , "hours": "4" , calculation : "per-sq" , "type": "number" },
                                ],
                                "nextStep": {
                                    "name": "stepper.tilesQuality",
                                    "title": "stepper.tilesQualityTitle",
                                    "description": "stepper.tilesQualityDescription",
                                    "type": "multi",
                                    "items": [
                                        { "name": "stepper.budgetQuality", "minPrice": 0 },
                                        { "name": "stepper.standardQuality", "minPrice": 0 },
                                        { "name": "stepper.premiumQuality", "minPrice": 0 },
                                    ],
                                    "nextStep": {
                                        "name": "stepper.bathroomFeatures",
                                        "title": "stepper.bathroomFeaturesTitle",
                                        "description": "stepper.bathroomFeaturesDescription",
                                        "type": "multi",
                                        "items": [
                                            { "name": "stepper.shower", "minPrice": 1199 , "hours": "28" , calculation : "per-p"  },
                                            { "name": "Surface Mounted shower", "minPrice": 700  , "hours": "13" , calculation : "per-p" },
                                            { "name": "stepper.toilet", "minPrice": 800  , "hours": "13" , calculation : "per-p" },
                                            { "name": "Surface Mounted Wc", "minPrice": 400  , "hours": "7" , calculation : "per-p" },
                                            { "name": "Single Bathroom Zinc", "minPrice": 400  , "hours": "10" , calculation : "per-p" },
                                            { "name": "Double Bathroom Zinc", "minPrice": 600  , "hours": "12" , calculation : "per-p" },
                                            { "name": "Built-in tub", "minPrice": 1800  , "hours": "37" , calculation : "per-p" },
                                            { "name": "Free standing tub", "minPrice": 800  , "hours": "16" , calculation : "per-p" },
                                            { "name": "Whirlpool or Jacuzzi", "minPrice": 2800  , "hours": "55" , calculation : "per-p" },
                                            { "name": "Towel Radiator", "minPrice": 300  , "hours": "7" , calculation : "per-p" },

                                        ],
                                        "nextStep": null,
                                        "lastStep": true,
                                    },
                                },
                            }
                        },
                    },
                    {
                        "name": "stepper.ElectricityTitle",
                        "disabled": true,
                        "icon": "🔌",
                        "items": {
                            "name": "stepper.fuseBoxTitle",
                            "title": "stepper.fuseBoxQuestion",
                            "description": "stepper.fuseBoxDescription",
                            "type": "multi",
                            "isFirst": true,
                            "icon": "🔌",
                            "items": [
                                { "name": "stepper.fuseBoxTitle", "minPrice": 2720 },
                                { "name": "stepper.fuseBoxWithNoData", "minPrice": 6522 },
                                { "name": "stepper.noOrDontKnow" }
                            ],
                            "nextStep": {
                                "name": "stepper.heatPumpTitle",
                                "title": "stepper.heatPumpTitle",
                                "description": "stepper.heatPumpDescription",
                                "items": [
                                    { "name": "stepper.heatPumpQuestionOne" },
                                ],
                                "type": "check",
                                "icon": "🔌",
                                "nextStep": {
                                    "name": "stepper.electricalWiringTitle",
                                    "title": "stepper.electricalWiringTitle",
                                    "description": "stepper.electricalWiringDescription",
                                    "items": [
                                        { "name": "stepper.electricalWiringQuestionOne" },
                                    ],
                                    "type": "check",
                                    "icon": "🔌",
                                    "nextStep": {
                                        "name": "stepper.roomSelectionName",
                                        "title": "stepper.roomSelectionTitle",
                                        "description": "stepper.roomSelectionDEscription",
                                        "items": [
                                            { "name": "stepper.livingRoom", "icon": "🛋️", "minPrice": 8022 },
                                            { "name": "stepper.bedRoom", "icon": "👶🏻", "minPrice": 8022 },
                                            { "name": "stepper.hallway", "icon": "🏘", "minPrice": 8022 },
                                            { "name": "stepper.kitchen", "icon": "🍳", "minPrice": 8022 },
                                            { "name": "stepper.bathRoom", "icon": "🛁", "minPrice": 8022 },
                                            { "name": "stepper.basement", "icon": "⬇🚪", "minPrice": 8022 },
                                        ],
                                        "type": "multi",
                                        "icon": "🔌",
                                        "nextStep": {
                                            "name": "stepper.roomSizeName",
                                            "title": "stepper.roomSizeTitle",
                                            "description": "stepper.roomSizeDescription",
                                            "items": [
                                                { "name": "stepper.roomQuestionOne", "minPrice": 50, "type": "number" },
                                                { "name": "stepper.roomQuestionTwo", "minPrice": 50, "type": "number" },
                                                { "name": "stepper.roomQuestionThree", "minPrice": 50, "type": "number" },
                                                { "name": "stepper.roomQuestionFour", "minPrice": 50, "type": "number" },
                                                { "name": "stepper.roomQuestionFive", "minPrice": 50, "type": "number" },
                                            ],
                                            "type": "text",
                                            "nextStep": {
                                                "name": "stepper.newSwitchesName",
                                                "title": "stepper.newSwitchesTitle",
                                                "description": "stepper.newSwitchesDescription",
                                                "items": [
                                                    { "name": "stepper.budgetQuality", "minPrice": 2000 },
                                                    { "name": "stepper.standardQuality", "minPrice": 2200 },
                                                    { "name": "stepper.premiumQuality", "minPrice": 2800 },
                                                ],
                                                "type": "multi",
                                                "nextStep": null
                                            }
                                        }
                                    },
                                },
                            },
                        },
                    },
                    {
                        "name": "stepper.heatingName",
                        "disabled": true,
                        "icon": "🌡️",
                        "items": {
                            "name": "stepper.heatingTechName",
                            "isFirst": true,
                            "title": "stepper.heatingName",
                            "description": "stepper.heatingDescription",
                            "type": "check",
                            "nextStep": {
                                "name": "stepper.heatingRadiatorsName",
                                "title": "stepper.heatingRadiatorsTitle",
                                "description": "stepper.heatingRadiatorsDescription",
                                "type": "multi",
                                "items": [
                                    { "name": "stepper.standardRadiators", "icon": "♨️", "minPrice": 2720 },
                                    { "name": "stepper.panelRadiators", "icon": "♨️", "minPrice": 2720 },
                                    { "name": "stepper.towelRadiators", "icon": "♨️", "minPrice": 2720 },
                                    { "name": "stepper.verticalRadiators", "icon": "♨️", "minPrice": 2720 },
                                ],
                                "nextStep": {
                                    "name": "stepper.ovenName",
                                    "title": "stepper.ovenName",
                                    "description": "stepper.ovenDescription",
                                    "type": "check",
                                    "nextStep": {
                                        "name": "stepper.ovenQualityName",
                                        "title": "stepper.ovenQualityTitle",
                                        "description": "stepper.ovenQualityDescription",
                                        "items": [
                                            { "name": "stepper.budgetQuality", "minPrice": 2720 },
                                            { "name": "stepper.standardQuality", "minPrice": 3720 },
                                            { "name": "stepper.premiumQuality", "minPrice": 5720 },
                                        ],
                                        "type": "multi",
                                        "nextStep": {
                                            "name": "stepper.firePlaceName",
                                            "title": "stepper.firePlaceName",
                                            "description": "stepper.firePlaceDescription",
                                            "items": [
                                                { "name": "stepper.firePlaceQuestionOne", "minPrice": 2720 },
                                            ],
                                            "type": "check",
                                            "nextStep": null
                                        }
                                    },
                                    "items": [
                                        { "name": "stepper.ovenQuestionOne", "minPrice": 2720 }
                                    ]
                                },
                            },
                            "items": [
                                { "name": "stepper.heatingQuestionOne", "minPrice": 2720 },
                                { "name": "stepper.heatingQuestionTwo", "minPrice": 2720 },
                                { "name": "stepper.heatingQuestionThree", "minPrice": 2720 },
                            ]
                        },
                    },
                    {
                        "name": "stepper.wallTitle",
                        "icon": "🏼",
                        "disabled": true,
                        "items": {
                            "name": "stepper.roomSelectionName",
                            "title": "stepper.roomSelectionMainQuestion",
                            "description": "stepper.roomSelectionMainDescription",
                            "type": "multi",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.livingRoom", "icon": "🛋️", "minPrice": 2720 },
                                { "name": "stepper.bedRoom", "icon": "👶🏻", "minPrice": 2720 },
                                { "name": "stepper.hallway", "icon": "🏘", "minPrice": 2720 },
                                { "name": "stepper.kitchen", "icon": "🍳", "minPrice": 2720 },
                                { "name": "stepper.bathroom", "icon": "🛁", "minPrice": 2720 },
                                { "name": "stepper.basement", "icon": "⬇🚪", "minPrice": 2720 },
                            ],
                            "nextStep": {
                                "name": "stepper.roomSizeName",
                                "title": "stepper.roomSizeTitle",
                                "description": "stepper.roomSizeDescription",
                                "type": "text",
                                "items": [
                                    { "name": "stepper.roomQuestionOne", "minPrice": 27, "type": "number" },
                                    { "name": "stepper.roomQuestionTwo", "minPrice": 27, "type": "number" },
                                    { "name": "stepper.roomQuestionThree", "minPrice": 27, "type": "number" },
                                    { "name": "stepper.roomQuestionFour", "minPrice": 27, "type": "number" },
                                    { "name": "stepper.roomQuestionFive", "minPrice": 27, "type": "number" },
                                ],
                                "nextStep": {
                                    "name": "stepper.roomsEditName",
                                    "title": "stepper.roomsEditTitle",
                                    "description": "stepper.roomsEditDescription",
                                    "type": "check",
                                    "items": [
                                        { "name": "stepper.roomEditQuestionOne", "minPrice": 2720 },
                                        { "name": "stepper.roomEditQuestionTwo", "minPrice": 2720 },
                                        { "name": "stepper.roomEditQuestionThree", "minPrice": 2720 },
                                        { "name": "stepper.roomEditQuestionFour", "minPrice": 2720 },
                                        { "name": "stepper.roomEditQuestionFive", "minPrice": 2720 },
                                    ],
                                    "nextStep": {
                                        "name": "stepper.roomsWallName",
                                        "title": "stepper.roomsWallsTitle",
                                        "description": "roomsWallsDescription",
                                        "type": "multi",
                                        "items": [
                                            { "name": "stepper.fillingWalls", "minPrice": 2720 },
                                            { "name": "stepper.paintWalls", "minPrice": 2720 },
                                            { "name": "stepper.wallpaperWalls", "minPrice": 2720 },
                                            { "name": "stepper.trillingWalls", "minPrice": 2720 },
                                        ],
                                        "nextStep": {
                                            "name": "stepper.paintsQuality",
                                            "title": "stepper.paintsTitle",
                                            "description": "stepper.paintsDescription",
                                            "type": "multi",
                                            "items": [
                                                { "name": "stepper.budgetQuality", "minPrice": 2720 },
                                                { "name": "stepper.standardQuality", "minPrice": 3720 },
                                                { "name": "stepper.budgetQuality", "minPrice": 5720 },
                                            ],
                                            "nextStep": {
                                                "name": "stepper.roomsCeilingTitle",
                                                "title": "stepper.roomsCeilingTitle",
                                                "description": "stepper.roomsCeilingDescription",
                                                "type": "check",
                                                "items": [
                                                    { "name": "stepper.roomCeilingQuestionOne", "minPrice": 2720 },
                                                    { "name": "stepper.roomCeilingQuestionTwo", "minPrice": 2720 },
                                                    { "name": "stepper.roomCeilingQuestionThree", "minPrice": 2720 },
                                                    { "name": "stepper.roomCeilingQuestionFour", "minPrice": 2720 },
                                                    { "name": "stepper.roomCeilingQuestionFive", "minPrice": 2720 },
                                                    { "name": "stepper.roomCeilingQuestionSix", "minPrice": 2720 },
                                                    { "name": "stepper.roomCeilingQuestionSeven", "minPrice": 2720 },
                                                    { "name": "stepper.roomCeilingQuestionEight", "minPrice": 2720 },
                                                    { "name": "stepper.roomCeilingQuestionNine", "minPrice": 2720 },
                                                    { "name": "stepper.roomCeilingQuestionTen", "minPrice": 2720 },
                                                ],
                                                "nextStep": null,
                                                "lastStep": true
                                            }
                                        }
                                    }
                                }
                            }
                        },
                    },
                    {
                        "name": "stepper.flooringTitle",
                        "icon": "👣",
                        "disabled": true,
                        "items": {
                            "name": "stepper.roomSelectionName",
                            "title": "stepper.roomSelectionMainQuestion",
                            "description": "stepper.roomSelectionMainDescription",
                            "type": "multi",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.livingRoom", "icon": "🛋️", "minPrice": 2720 },
                                { "name": "stepper.bedRoom", "icon": "👶🏻", "minPrice": 2720 },
                                { "name": "stepper.hallway", "icon": "🏘", "minPrice": 2720 },
                                { "name": "stepper.kitchen", "icon": "🍳", "minPrice": 2720 },
                                { "name": "stepper.bathroom", "icon": "🛁", "minPrice": 2720 },
                                { "name": "stepper.basement", "icon": "⬇🚪", "minPrice": 2720 },
                            ],
                            "nextStep": {
                                "name": "stepper.roomSizeName",
                                "title": "stepper.roomSizeTitle",
                                "description": "stepper.roomSizeDescription",
                                "type": "text",
                                "items": [
                                    { "name": "stepper.roomQuestionOne", "minPrice": 27, "type": "number" },
                                    { "name": "stepper.roomQuestionTwo", "minPrice": 27, "type": "number" },
                                    { "name": "stepper.roomQuestionThree", "minPrice": 27, "type": "number" },
                                    { "name": "stepper.roomQuestionFour", "minPrice": 27, "type": "number" },
                                    { "name": "stepper.roomQuestionFive", "minPrice": 27, "type": "number" },
                                ],
                                "nextStep": {
                                    "name": "stepper.roomFloorService",
                                    "title": "stepper.roomFloorServiceTitle",
                                    "description": "stepper.roomFloorServiceDescription",
                                    "type": "multi",
                                    "items": [
                                        { "name": "stepper.newFlooring", "minPrice": 2720 },
                                        { "name": "stepper.reconditionFlooring", "minPrice": 2720 },
                                    ],
                                    "nextStep": {
                                        "name": "stepper.floorTypeName",
                                        "title": "stepper.floorTypeTitle",
                                        "description": "stepper.floorTypeDescription",
                                        "type": "multi",
                                        "items": [
                                            { "name": "stepper.parquet", "minPrice": 2720 },
                                            { "name": "stepper.works", "minPrice": 2720 },
                                            { "name": "stepper.vinyl", "minPrice": 2720 },
                                            { "name": "stepper.laminate", "minPrice": 2720 },
                                            { "name": "stepper.carpet", "minPrice": 2720 },
                                            { "name": "stepper.tiles", "minPrice": 2720 },
                                        ],
                                        "nextStep": {
                                            "name": "stepper.skirtingBoardsTitle",
                                            "title": "stepper.skirtingBoardsTitle",
                                            "description": "stepper.skirtingBoardsDescription",
                                            "type": "check",
                                            "items": [
                                                { "name": "stepper.skirtingBoardsQuestionOne", "minPrice": 2720 },
                                                { "name": "stepper.skirtingBoardsQuestionTwo", "minPrice": 2720 },
                                                { "name": "stepper.skirtingBoardsQuestionThree", "minPrice": 2720 },
                                                { "name": "stepper.skirtingBoardsQuestionFour", "minPrice": 2720 },
                                                { "name": "stepper.skirtingBoardsQuestionFive", "minPrice": 2720 },
                                            ],
                                            "nextStep": {
                                                "name": "stepper.oldFlooring",
                                                "title": "stepper.oldFlooring",
                                                "description": "stepper.oldFlooringDescription",
                                                "type": "check",
                                                "items": [
                                                    { "name": "stepper.oldFlooringQuestionOne", "minPrice": 2720 },
                                                    { "name": "stepper.oldFlooringQuestionTwo", "minPrice": 2720 },
                                                    { "name": "stepper.oldFlooringQuestionThree", "minPrice": 2720 },
                                                    { "name": "stepper.oldFlooringQuestionFour", "minPrice": 2720 },
                                                    { "name": "stepper.oldFlooringQuestionFive", "minPrice": 2720 },
                                                ],
                                                "nextStep": {
                                                    "name": "stepper.flooringQuality",
                                                    "title": "stepper.flooringQuality",
                                                    "description": "stepper.flooringQualityDescription",
                                                    "type": "multi",
                                                    "items": [
                                                        { "name": "stepper.budgetQuality", "minPrice": 2720 },
                                                        { "name": "stepper.standardQuality", "minPrice": 4720 },
                                                        { "name": "stepper.premiumQuality", "minPrice": 6720 },
                                                    ],
                                                    "nextStep": null,
                                                    "lastStep": true
                                                },
                                            },
                                        },
                                    },

                                }
                            }
                        },

                    },
                    {
                        "name": "stepper.window",
                        "icon": "🔲",
                        "disabled": true,
                        "items": {
                            "name": "stepper.windowsInfo",
                            "title": "stepper.windowsInfo",
                            "description": "stepper.windowsInfoDescription",
                            "type": "text",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.windowsInfoQuestionOne" },
                                { "name": "stepper.windowsInfoQuestionTwo", "minPrice": 27, "type": "number" },
                                { "name": "stepper.windowsInfoQuestionThree" },
                            ],
                            "nextStep": {
                                "name": "newWindows",
                                "title": "stepper.newWindowsTitle",
                                "description": "stepper.newWindowsDescription",
                                "type": "multi",
                                "items": [
                                    { "name": "stepper.plastic", "minPrice": 2720 },
                                    { "name": "stepper.wood", "minPrice": 2720 },
                                ],
                                "nextStep": null,
                                "lastStep": true
                            },
                        },

                    },
                    {
                        "name": "stepper.doors",
                        "icon": "🚪",
                        "disabled": true,
                        "items": {
                            "name": "stepper.doorsTitle",
                            "title": "stepper.doorsTitle",
                            "description": "stepper.doorsDescription",
                            "type": "check",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.doorQuestionOne", "minPrice": 2720 },
                                { "name": "stepper.doorQuestionTwo", "minPrice": 2720 },
                                { "name": "stepper.doorQuestionThree", "minPrice": 2720 },
                            ],
                            "nextStep": {
                                "name": "stepper.newDoors",
                                "title": "stepper.newDoors",
                                "description": "stepper.newDoorsDescription",
                                "type": "text",
                                "items": [
                                    { "name": "stepper.newDoorsQuestionOne", "minPrice": 272, "type": "number" },
                                    { "name": "stepper.newDoorsQuestionTwo", "minPrice": 272, "type": "number" },
                                ],
                                "nextStep": {
                                    "name": "doorsQuality",
                                    "title": "stepper.doorsQualityTitle",
                                    "description": "stepper.doorsQualityDescription",
                                    "type": "multi",
                                    "items": [
                                        { "name": "stepper.budgetQuality", "minPrice": 2720 },
                                        { "name": "stepper.standardQuality", "minPrice": 3720 },
                                        { "name": "stepper.premiumQuality", "minPrice": 5720 },
                                    ],
                                    "nextStep": null,
                                    "lastStep": true
                                },
                            },
                        },
                    },
                    {
                        "name": "stepper.roofAndInsulation",
                        "icon": "🧱",
                        "disabled": true,
                        "items": {
                            "name": "stepper.roofAndInsulationInfo",
                            "title": "stepper.roofAndInsulationTitle",
                            "description": "stepper.roofAndInsulationDescription",
                            "type": "multi",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.roofAndInsulationQuestionOne", "minPrice": 2720 },
                                { "name": "stepper.roofAndInsulationQuestionTwo", "minPrice": 2720 },
                            ],
                            "nextStep": {
                                "name": "stepper.roofShape",
                                "title": "stepper.roofShapeTitle",
                                "description": "stepper.roofShapeDescription",
                                "type": "multi",
                                "items": [
                                    { "name": "stepper.gableRoof", "minPrice": 2720 },
                                    { "name": "stepper.flatRoof", "minPrice": 2720 },
                                ],
                                "nextStep": {
                                    "name": "stepper.roofQuestions",
                                    "title": "stepper.roofQuestions",
                                    "description": "stepper.roofQuestionsDescription",
                                    "type": "text",
                                    "items": [
                                        { "name": "stepper.roofQuestionOne", "minPrice": 2720, "type": "number" },
                                        { "name": "stepper.roofQuestionTwo" },
                                        { "name": "stepper.roofQuestionThree" },
                                        { "name": "stepper.roofQuestionFour" },
                                    ],
                                    "nextStep": null,
                                    "lastStep": true,
                                },
                            },
                        },
                    },
                    {
                        "name": "stepper.facade",
                        "icon": "🛠",
                        "disabled": true,
                        "items": {
                            "name": "stepper.facadeName",
                            "title": "stepper.facadeTitle",
                            "description": "stepper.facadeDescription",
                            "type": "multi",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.singleHouse", "minPrice": 2720 },
                                { "name": "stepper.semiHouse", "minPrice": 2720 },
                                { "name": "stepper.terracedHouse", "minPrice": 2720 },
                                { "name": "stepper.endHouse", "minPrice": 2720 },
                            ],
                            "nextStep": {
                                "name": "stepper.facade",
                                "title": "stepper.facadeTypeTitle",
                                "description": "stepper.facadeTypeDescription",
                                "type": "multi",
                                "items": [
                                    { "name": "stepper.facadeStone", "minPrice": 2720 },
                                    { "name": "stepper.facadePlaster", "minPrice": 2720 },
                                    { "name": "stepper.facadePainting", "minPrice": 2720 },
                                    { "name": "stepper.facadeBlown", "minPrice": 2720 },
                                ],
                                "nextStep": {
                                    "name": "stepper.houseInfo",
                                    "title": "stepper.houseInfoTitle",
                                    "description": "stepper.houseInfoDescription",
                                    "type": "text",
                                    "items": [
                                        { "name": "stepper.houseInfoQuestionOne", "minPrice": 2720, "type": "number" },
                                        { "name": "stepper.houseInfoQuestionTwo" },
                                    ],
                                    "nextStep": null,
                                    "lastStep": true,
                                },
                            },
                        },
                    },
                    {
                        "name": "stepper.floorPlan",
                        "icon": "𓉩",
                        "disabled": true,
                        "items": {
                            "name": "stepper.floorPlanName",
                            "title": "stepper.floorPlanTitle",
                            "description": "stepper.floorPlanDescription",
                            "type": "check",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.floorPlanQuestionOne", "minPrice": 2720 },
                                { "name": "stepper.floorPlanQuestionTwo", "minPrice": 2720 },
                                { "name": "stepper.floorPlanQuestionThree", "minPrice": 2720 },
                            ],
                            "nextStep": {
                                "name": "stepper.floorPlanDetails",
                                "title": "stepper.floorPlanDetailsTitle",
                                "description": "stepper.floorPlanDetailsDescription",
                                "type": "text",
                                "items": [
                                    { "name": "stepper.floorPlanDetailsQuestionOne", "minPrice": 2720, "type": "number" },
                                    { "name": "stepper.floorPlanDetailsQuestionTwo", "minPrice": 2720, "type": "number" },
                                ],
                                "nextStep": {
                                    "name": "stepper.floorPlanType",
                                    "title": "stepper.floorPlanTypeTitle",
                                    "description": "stepper.floorPlanTypeDescription",
                                    "type": "multi",
                                    "items": [
                                        { "name": "stepper.massivwand", "minPrice": 2720 },
                                        { "name": "stepper.lightWeightWall", "minPrice": 2720 },
                                    ],
                                    "nextStep": {
                                        "name": "stepper.floorPlanClose",
                                        "title": "stepper.floorPlanCloseTitle",
                                        "description": "stepper.floorPlanCloseDescription",
                                        "type": "multi",
                                        "items": [
                                            { "name": "stepper.massivwand", "minPrice": 2720 },
                                            { "name": "stepper.lightWeightWall", "minPrice": 2720 },
                                        ],
                                        "nextStep": null,
                                        "lastStep": true,
                                    },
                                },
                            },
                        },
                    },
                    {
                        "name": "stepper.stairs",
                        "icon": "𓊍",
                        "disabled": true,
                        "items": {
                            "name": "stepper.stairsInfo",
                            "title": "stepper.stairsInfo",
                            "description": "stepper.stairsInfoDescription",
                            "type": "check",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.stairInfoQuestionOne", "minPrice": 2720 },
                                { "name": "stepper.stairInfoQuestionTwo", "minPrice": 2720 },
                                { "name": "stepper.stairInfoQuestionThree", "minPrice": 2720 },
                                { "name": "stepper.stairInfoQuestionFour", "minPrice": 2720 },
                            ],
                            "nextStep": {
                                "name": "stepper.stairsType",
                                "title": "stepper.stairsTypeTitle",
                                "description": "stepper.stairsTypeDescription",
                                "type": "multi",
                                "items": [
                                    { "name": "stepper.straight", "minPrice": 2720 },
                                    { "name": "stepper.quarter", "minPrice": 2720 },
                                    { "name": "stepper.stairsHalf", "minPrice": 2720 },
                                    { "name": "stepper.stepperTwoQuarter", "minPrice": 2720 },
                                ],
                                "nextStep": {
                                    "name": "stepper.stairsQuality",
                                    "title": "stepper.stairsQualityTitle",
                                    "description": "stepper.stairsQualityDescription",
                                    "type": "multi",
                                    "items": [
                                        { "name": "stepper.budgetQuality", "minPrice": 2720 },
                                        { "name": "stepper.standardQuality", "minPrice": 3720 },
                                        { "name": "stepper.premiumQuality", "minPrice": 5720 },
                                    ],
                                    "nextStep": null,
                                    "lastStep": true,
                                },
                            },
                        },
                    },
                    {
                        "name": "stepper.supplyLines",
                        "icon": "🚰",
                        "disabled": true,
                        "items": {
                            "name": "stepper.supplyLinesInfo",
                            "title": "stepper.supplyLinesInfo",
                            "description": "stepper.supplyLinesInfoDescription",
                            "type": "text",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.supplyLinesQuestionOne", "minPrice": 272, "type": "number" },
                                { "name": "stepper.supplyLinesQuestionTwo", "minPrice": 272, "type": "number" },
                            ],
                            "nextStep": null,
                            "lastStep": true,
                        },
                    },
                ]
            },
            {
                "type": "select",
                "icon": "🧩",
                "name": "stepper.houseExtension",
                "href": '/configurator'
            }
        ]
    }
]