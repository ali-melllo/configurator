// export const STEPS_DATA = [
//     {
//         "title": "Select Construction Area",
//         "description": "Choose which part of your building needs construction work.",
//         "type": "select",
//         "name": "construction_area",
//         "items": [
//             {
//                 "title": "Foundation & Groundwork",
//                 "description": "Select the groundwork services required.",
//                 "name": "renovation",
//                 "type": "select",
//                 "icon": "🏗️",
//                 "items": [
//                     {
//                         "title": "Flooring Options",
//                         "description": "Choose your preferred flooring material.",
//                         "name": "flooring",
//                         "type": "check",
//                         "icon": "🪵",
//                         "items": [
//                             { "name": "Wood Flooring", "icon": "🪵" },
//                             { "name": "Concrete Flooring", "icon": "🧱" },
//                             { "name": "Tiles", "icon": "🪨" },
//                             { "name": "Plumbing Work", "icon": "🚰" }
//                         ],
//                         "nextStep": {
//                             "title": "Enter Flooring Details",
//                             "description": "Provide additional information about your flooring needs.",
//                             "type": "text",
//                             "name": "flooring_details",
//                             "items": [
//                                 { "name": "What is the current flooring made of?" },
//                                 { "name": "How old is the flooring?" }
//                             ],
//                             "nextStep": {
//                                 "title": "Choose Preferred Construction Date",
//                                 "description": "Select a date for the work to begin.",
//                                 "type": "date",
//                                 "name": "construction_date",
//                                 "nextStep": {
//                                     "title": "Enter Your Contact Information",
//                                     "description": "Provide your details to receive an estimated quote.",
//                                     "type": "text",
//                                     "name": "contact_info",
//                                     "items": [
//                                         { "name": "Full Name" },
//                                         { "name": "Phone Number" },
//                                         { "name": "Email Address" },
//                                         { "name": "Project Address" }
//                                     ],
//                                     "lastStep":true,
//                                 }
//                             }
//                         }
//                     }
//                 ]
//             },
//             {
//                 "title": "House Extension",
//                 "description": "Select the type of house extension needed.",
//                 "name": "house_extension",
//                 "type": "select",
//                 "icon": "🏠",
//                 "items": [
//                     {
//                         "title": "Single-Story Extension",
//                         "description": "Expand your home with a ground-floor extension.",
//                         "name": "single_story_extension",
//                         "type": "multi",
//                         "icon": "📏",
//                         "items": [
//                             { "name": "Living Room Extension" },
//                             { "name": "Kitchen Extension" },
//                             { "name": "Bathroom Addition" },
//                         ],
//                         "lastStep":true,
//                     },
//                     {
//                         "title": "Double-Story Extension",
//                         "description": "Add more space with a two-level extension.",
//                         "name": "double_story_extension",
//                         "type": "multi",
//                         "icon": "🏢",
//                         "items": [
//                             { "name": "Additional Bedrooms" },
//                             { "name": "Office Space" },
//                             { "name": "Extra Bathrooms" }
//                         ],
//                         "lastStep":true,

//                     },
//                     {
//                         "title": "Garage Conversion",
//                         "description": "Turn your garage into a functional space.",
//                         "name": "garage_conversion",
//                         "type": "multi",
//                         "icon": "🚗",
//                         "items": [
//                             { "name": "Home Office" },
//                             { "name": "Guest Room" },
//                             { "name": "Entertainment Room" }
//                         ],
//                         "lastStep":true,
//                     }
//                 ]
//             }
//         ]
//     }
// ]


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
                        "name": "stepper.ElectricityTitle",
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
                                    { "name": "stepper.standardRadiators", "icon": "♨️" },
                                    { "name": "stepper.panelRadiators", "icon": "♨️" },
                                    { "name": "stepper.towelRadiators", "icon": "♨️" },
                                    { "name": "stepper.verticalRadiators", "icon": "♨️" },
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
                                            { "name": "stepper.budgetQuality" },
                                            { "name": "stepper.standardQuality" },
                                            { "name": "stepper.premiumQuality" },
                                        ],
                                        "type": "multi",
                                        "nextStep": {
                                            "name": "stepper.firePlaceName",
                                            "title": "stepper.firePlaceName",
                                            "description": "stepper.firePlaceDescription",
                                            "items": [
                                                { "name": "stepper.firePlaceQuestionOne" },
                                            ],
                                            "type": "check",
                                            "nextStep": null
                                        }
                                    },
                                    "items": [
                                        { "name": "stepper.ovenQuestionOne" }
                                    ]
                                },
                            },
                            "items": [
                                { "name": "stepper.heatingQuestionOne" },
                                { "name": "stepper.heatingQuestionTwo" },
                                { "name": "stepper.heatingQuestionThree" },
                            ]
                        },
                    },
                    {
                        "name": "stepper.wallTitle",
                        "icon": "🏼",
                        "items": {
                            "name": "stepper.roomSelectionName",
                            "title": "stepper.roomSelectionMainQuestion",
                            "description": "stepper.roomSelectionMainDescription",
                            "type": "multi",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.livingRoom", "icon": "🛋️" },
                                { "name": "stepper.bedRoom", "icon": "👶🏻" },
                                { "name": "stepper.hallway", "icon": "🏘" },
                                { "name": "stepper.kitchen", "icon": "🍳" },
                                { "name": "stepper.bathroom", "icon": "🛁" },
                                { "name": "stepper.basement", "icon": "⬇🚪" },
                            ],
                            "nextStep": {
                                "name": "stepper.roomSizeName",
                                "title": "stepper.roomSizeTitle",
                                "description": "stepper.roomSizeDescription",
                                "type": "text",
                                "items": [
                                    { "name": "stepper.roomQuestionOne" },
                                    { "name": "stepper.roomQuestionTwo" },
                                    { "name": "stepper.roomQuestionThree" },
                                    { "name": "stepper.roomQuestionFour" },
                                    { "name": "stepper.roomQuestionFive" },
                                ],
                                "nextStep": {
                                    "name": "stepper.roomsEditName",
                                    "title": "stepper.roomsEditTitle",
                                    "description": "stepper.roomsEditDescription",
                                    "type": "check",
                                    "items": [
                                        { "name": "stepper.roomEditQuestionOne" },
                                        { "name": "stepper.roomEditQuestionTwo" },
                                        { "name": "stepper.roomEditQuestionThree" },
                                        { "name": "stepper.roomEditQuestionFour" },
                                        { "name": "stepper.roomEditQuestionFive" },
                                    ],
                                    "nextStep": {
                                        "name": "stepper.roomsWallName",
                                        "title": "stepper.roomsWallsTitle",
                                        "description": "roomsWallsDescription",
                                        "type": "multi",
                                        "items": [
                                            { "name": "stepper.fillingWalls" },
                                            { "name": "stepper.paintWalls" },
                                            { "name": "stepper.wallpaperWalls" },
                                            { "name": "stepper.trillingWalls" },
                                        ],
                                        "nextStep": {
                                            "name": "stepper.paintsQuality",
                                            "title": "stepper.paintsTitle",
                                            "description": "stepper.paintsDescription",
                                            "type": "multi",
                                            "items": [
                                                { "name": "stepper.budgetQuality" },
                                                { "name": "stepper.standardQuality" },
                                                { "name": "stepper.budgetQuality" },
                                            ],
                                            "nextStep": {
                                                "name": "stepper.roomsCeilingTitle",
                                                "title": "stepper.roomsCeilingTitle",
                                                "description": "stepper.roomsCeilingDescription",
                                                "type": "check",
                                                "items": [
                                                    { "name": "stepper.roomCeilingQuestionOne" },
                                                    { "name": "stepper.roomCeilingQuestionTwo" },
                                                    { "name": "stepper.roomCeilingQuestionThree" },
                                                    { "name": "stepper.roomCeilingQuestionFour" },
                                                    { "name": "stepper.roomCeilingQuestionFive" },
                                                    { "name": "stepper.roomCeilingQuestionSix" },
                                                    { "name": "stepper.roomCeilingQuestionSeven" },
                                                    { "name": "stepper.roomCeilingQuestionEight" },
                                                    { "name": "stepper.roomCeilingQuestionNine" },
                                                    { "name": "stepper.roomCeilingQuestionTen" },
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
                        "items": {
                            "name": "stepper.roomSelectionName",
                            "title": "stepper.roomSelectionMainQuestion",
                            "description": "stepper.roomSelectionMainDescription",
                            "type": "multi",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.livingRoom", "icon": "🛋️" },
                                { "name": "stepper.bedRoom", "icon": "👶🏻" },
                                { "name": "stepper.hallway", "icon": "🏘" },
                                { "name": "stepper.kitchen", "icon": "🍳" },
                                { "name": "stepper.bathroom", "icon": "🛁" },
                                { "name": "stepper.basement", "icon": "⬇🚪" },
                            ],
                            "nextStep": {
                                "name": "stepper.roomSizeName",
                                "title": "stepper.roomSizeTitle",
                                "description": "stepper.roomSizeDescription",
                                "type": "text",
                                "items": [
                                    { "name": "stepper.roomQuestionOne" },
                                    { "name": "stepper.roomQuestionTwo" },
                                    { "name": "stepper.roomQuestionThree" },
                                    { "name": "stepper.roomQuestionFour" },
                                    { "name": "stepper.roomQuestionFive" },
                                ],
                                "nextStep": {
                                    "name": "stepper.roomFloorService",
                                    "title": "stepper.roomFloorServiceTitle",
                                    "description": "stepper.roomFloorServiceDescription",
                                    "type": "multi",
                                    "items": [
                                        { "name": "stepper.newFlooring" },
                                        { "name": "stepper.reconditionFlooring" },
                                    ],
                                    "nextStep": {
                                        "name": "stepper.floorTypeName",
                                        "title": "stepper.floorTypeTitle",
                                        "description": "stepper.floorTypeDescription",
                                        "type": "multi",
                                        "items": [
                                            { "name": "stepper.parquet" },
                                            { "name": "stepper.works" },
                                            { "name": "stepper.vinyl" },
                                            { "name": "stepper.laminate" },
                                            { "name": "stepper.carpet" },
                                            { "name": "stepper.tiles" },
                                        ],
                                        "nextStep": {
                                            "name": "stepper.skirtingBoardsTitle",
                                            "title": "stepper.skirtingBoardsTitle",
                                            "description": "stepper.skirtingBoardsDescription",
                                            "type": "check",
                                            "items": [
                                                { "name": "stepper.skirtingBoardsQuestionOne" },
                                                { "name": "stepper.skirtingBoardsQuestionTwo" },
                                                { "name": "stepper.skirtingBoardsQuestionThree" },
                                                { "name": "stepper.skirtingBoardsQuestionFour" },
                                                { "name": "stepper.skirtingBoardsQuestionFive" },
                                            ],
                                            "nextStep": {
                                                "name": "stepper.oldFlooring",
                                                "title": "stepper.oldFlooring",
                                                "description": "stepper.oldFlooringDescription",
                                                "type": "check",
                                                "items": [
                                                    { "name": "stepper.oldFlooringQuestionOne" },
                                                    { "name": "stepper.oldFlooringQuestionTwo" },
                                                    { "name": "stepper.oldFlooringQuestionThree" },
                                                    { "name": "stepper.oldFlooringQuestionFour" },
                                                    { "name": "stepper.oldFlooringQuestionFive" },
                                                ],
                                                "nextStep": {
                                                    "name": "stepper.flooringQuality",
                                                    "title": "stepper.flooringQuality",
                                                    "description": "stepper.flooringQualityDescription",
                                                    "type": "multi",
                                                    "items": [
                                                        { "name": "stepper.budgetQuality" },
                                                        { "name": "stepper.standardQuality" },
                                                        { "name": "stepper.premiumQuality" },
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
                        "items": {
                            "name": "stepper.windowsInfo",
                            "title": "stepper.windowsInfo",
                            "description": "stepper.windowsInfoDescription",
                            "type": "text",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.windowsInfoQuestionOne" },
                                { "name": "stepper.windowsInfoQuestionTwo" },
                                { "name": "stepper.windowsInfoQuestionThree" },
                            ],
                            "nextStep": {
                                "name": "newWindows",
                                "title": "stepper.newWindowsTitle",
                                "description": "stepper.newWindowsDescription",
                                "type": "multi",
                                "items": [
                                    { "name": "stepper.plastic" },
                                    { "name": "stepper.wood" },
                                ],
                                "nextStep": null,
                                "lastStep": true
                            },
                        },

                    },
                    {
                        "name": "stepper.doors",
                        "icon": "🚪",
                        "items": {
                            "name": "stepper.doorsTitle",
                            "title": "stepper.doorsTitle",
                            "description": "stepper.doorsDescription",
                            "type": "check",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.doorQuestionOne" },
                                { "name": "stepper.doorQuestionTwo" },
                                { "name": "stepper.doorQuestionThree" },
                            ],
                            "nextStep": {
                                "name": "stepper.newDoors",
                                "title": "stepper.newDoors",
                                "description": "stepper.newDoorsDescription",
                                "type": "text",
                                "items": [
                                    { "name": "stepper.newDoorsQuestionOne" },
                                    { "name": "stepper.newDoorsQuestionTwo" },
                                ],
                                "nextStep": {
                                    "name": "doorsQuality",
                                    "title": "stepper.doorsQualityTitle",
                                    "description": "stepper.doorsQualityDescription",
                                    "type": "multi",
                                    "items": [
                                        { "name": "stepper.budgetQuality" },
                                        { "name": "stepper.standardQuality" },
                                        { "name": "stepper.premiumQuality" },
                                    ],
                                    "nextStep": null,
                                    "lastStep": true
                                },
                            },
                        },
                    },
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
                                { "name": "stepper.bathroomQuestionThree" },
                            ],
                            "nextStep": {
                                "name": "stepper.bathroomQuestions",
                                "title": "stepper.bathroomQuestions",
                                "description": "stepper.bathroomQuestionsDescription",
                                "type": "check",
                                "items": [
                                    { "name": "stepper.bathroomCheckOutQuestionOne" },
                                    { "name": "stepper.bathroomCheckOutQuestionTwo" },
                                    { "name": "stepper.bathroomCheckOutQuestionThree" },
                                ],
                                "nextStep": {
                                    "name": "stepper.tilesQuality",
                                    "title": "stepper.tilesQualityTitle",
                                    "description": "stepper.tilesQualityDescription",
                                    "type": "multi",
                                    "items": [
                                        { "name": "stepper.budgetQuality" },
                                        { "name": "stepper.standardQuality" },
                                        { "name": "stepper.premiumQuality" },
                                    ],
                                    "nextStep": {
                                        "name": "stepper.bathroomFeatures",
                                        "title": "stepper.bathroomFeaturesTitle",
                                        "description": "stepper.bathroomFeaturesDescription",
                                        "type": "multi",
                                        "items": [
                                            { "name": "stepper.shower" },
                                            { "name": "stepper.bath Hub" },
                                            { "name": "stepper.toilet" },
                                            { "name": "stepper.washBasing" },
                                            { "name": "stepper.doubleWashBasing" },
                                            { "name": "stepper.towelRadiator" },
                                            { "name": "stepper.ceiling" },
                                        ],
                                        "nextStep": null,
                                        "lastStep": true,
                                    },
                                },
                            }
                        },
                    },
                    {
                        "name": "stepper.roofAndInsulation",
                        "icon": "🧱",
                        "items": {
                            "name": "stepper.roofAndInsulationInfo",
                            "title": "stepper.roofAndInsulationTitle",
                            "description": "stepper.roofAndInsulationDescription",
                            "type": "multi",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.roofAndInsulationQuestionOne" },
                                { "name": "stepper.roofAndInsulationQuestionTwo" },
                            ],
                            "nextStep": {
                                "name": "stepper.roofShape",
                                "title": "stepper.roofShapeTitle",
                                "description": "stepper.roofShapeDescription",
                                "type": "multi",
                                "items": [
                                    { "name": "stepper.gableRoof" },
                                    { "name": "stepper.flatRoof" },
                                ],
                                "nextStep": {
                                    "name": "stepper.roofQuestions",
                                    "title": "stepper.roofQuestions",
                                    "description": "stepper.roofQuestionsDescription",
                                    "type": "text",
                                    "items": [
                                        { "name": "stepper.roofQuestionOne" },
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
                        "items": {
                            "name": "stepper.facadeName",
                            "title": "stepper.facadeTitle",
                            "description": "stepper.facadeDescription",
                            "type": "multi",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.singleHouse" },
                                { "name": "stepper.semiHouse" },
                                { "name": "stepper.terracedHouse" },
                                { "name": "stepper.endHouse" },
                            ],
                            "nextStep": {
                                "name": "stepper.facade",
                                "title": "stepper.facadeTypeTitle",
                                "description": "stepper.facadeTypeDescription",
                                "type": "multi",
                                "items": [
                                    { "name": "stepper.facadeStone" },
                                    { "name": "stepper.facadePlaster" },
                                    { "name": "stepper.facadePainting" },
                                    { "name": "stepper.facadeBlown" },
                                ],
                                "nextStep": {
                                    "name": "stepper.houseInfo",
                                    "title": "stepper.houseInfoTitle",
                                    "description": "stepper.houseInfoDescription",
                                    "type": "text",
                                    "items": [
                                        { "name": "stepper.houseInfoQuestionOne" },
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
                        "items": {
                            "name": "stepper.floorPlanName",
                            "title": "stepper.floorPlanTitle",
                            "description": "stepper.floorPlanDescription",
                            "type": "check",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.floorPlanQuestionOne" },
                                { "name": "stepper.floorPlanQuestionTwo" },
                                { "name": "stepper.floorPlanQuestionThree" },
                            ],
                            "nextStep": {
                                "name": "stepper.floorPlanDetails",
                                "title": "stepper.floorPlanDetailsTitle",
                                "description": "stepper.floorPlanDetailsDescription",
                                "type": "text",
                                "items": [
                                    { "name": "stepper.floorPlanDetailsQuestionOne" },
                                    { "name": "stepper.floorPlanDetailsQuestionTwo" },
                                ],
                                "nextStep": {
                                    "name": "stepper.floorPlanType",
                                    "title": "stepper.floorPlanTypeTitle",
                                    "description": "stepper.floorPlanTypeDescription",
                                    "type": "multi",
                                    "items": [
                                        { "name": "stepper.massivwand" },
                                        { "name": "stepper.lightWeightWall" },
                                    ],
                                    "nextStep": {
                                        "name": "stepper.floorPlanClose",
                                        "title": "stepper.floorPlanCloseTitle",
                                        "description": "stepper.floorPlanCloseDescription",
                                        "type": "multi",
                                        "items": [
                                            { "name": "stepper.massivwand" },
                                            { "name": "stepper.lightWeightWall" },
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
                        "items": {
                            "name": "stepper.stairsInfo",
                            "title": "stepper.stairsInfo",
                            "description": "stepper.stairsInfoDescription",
                            "type": "check",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.stairInfoQuestionOne" },
                                { "name": "stepper.stairInfoQuestionTwo" },
                                { "name": "stepper.stairInfoQuestionThree" },
                                { "name": "stepper.stairInfoQuestionFour" },
                            ],
                            "nextStep": {
                                "name": "stepper.stairsType",
                                "title": "stepper.stairsTypeTitle",
                                "description": "stepper.stairsTypeDescription",
                                "type": "multi",
                                "items": [
                                    { "name": "stepper.straight" },
                                    { "name": "stepper.quarter" },
                                    { "name": "stepper.stairsHalf" },
                                    { "name": "stepper.stepperTwoQuarter" },
                                ],
                                "nextStep": {
                                    "name": "stepper.stairsQuality",
                                    "title": "stepper.stairsQualityTitle",
                                    "description": "stepper.stairsQualityDescription",
                                    "type": "multi",
                                    "items": [
                                        { "name": "stepper.budgetQuality" },
                                        { "name": "stepper.standardQuality" },
                                        { "name": "stepper.premiumQuality" },
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
                        "items": {
                            "name": "stepper.supplyLinesInfo",
                            "title": "stepper.supplyLinesInfo",
                            "description": "stepper.supplyLinesInfoDescription",
                            "type": "text",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.supplyLinesQuestionOne" },
                                { "name": "stepper.supplyLinesQuestionTwo" },
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
                "description": "stepper.servicesSelectTitle",
                "type": "multi",
                "name": "stepper.apartment",
                "icon": "🏬",
                "key": "gather-steps",
                "items": [
                    {
                        "name": "stepper.ElectricityTitle",
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
                                    { "name": "stepper.standardRadiators", "icon": "♨️" },
                                    { "name": "stepper.panelRadiators", "icon": "♨️" },
                                    { "name": "stepper.towelRadiators", "icon": "♨️" },
                                    { "name": "stepper.verticalRadiators", "icon": "♨️" },
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
                                            { "name": "stepper.budgetQuality" },
                                            { "name": "stepper.standardQuality" },
                                            { "name": "stepper.premiumQuality" },
                                        ],
                                        "type": "multi",
                                        "nextStep": {
                                            "name": "stepper.firePlaceName",
                                            "title": "stepper.firePlaceName",
                                            "description": "stepper.firePlaceDescription",
                                            "items": [
                                                { "name": "stepper.firePlaceQuestionOne" },
                                            ],
                                            "type": "check",
                                            "nextStep": null
                                        }
                                    },
                                    "items": [
                                        { "name": "stepper.ovenQuestionOne" }
                                    ]
                                },
                            },
                            "items": [
                                { "name": "stepper.heatingQuestionOne" },
                                { "name": "stepper.heatingQuestionTwo" },
                                { "name": "stepper.heatingQuestionThree" },
                            ]
                        },
                    },
                    {
                        "name": "stepper.wallTitle",
                        "icon": "🏼",
                        "items": {
                            "name": "stepper.roomSelectionName",
                            "title": "stepper.roomSelectionMainQuestion",
                            "description": "stepper.roomSelectionMainDescription",
                            "type": "multi",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.livingRoom", "icon": "🛋️" },
                                { "name": "stepper.bedRoom", "icon": "👶🏻" },
                                { "name": "stepper.hallway", "icon": "🏘" },
                                { "name": "stepper.kitchen", "icon": "🍳" },
                                { "name": "stepper.bathroom", "icon": "🛁" },
                                { "name": "stepper.basement", "icon": "⬇🚪" },
                            ],
                            "nextStep": {
                                "name": "stepper.roomSizeName",
                                "title": "stepper.roomSizeTitle",
                                "description": "stepper.roomSizeDescription",
                                "type": "text",
                                "items": [
                                    { "name": "stepper.roomQuestionOne" },
                                    { "name": "stepper.roomQuestionTwo" },
                                    { "name": "stepper.roomQuestionThree" },
                                    { "name": "stepper.roomQuestionFour" },
                                    { "name": "stepper.roomQuestionFive" },
                                ],
                                "nextStep": {
                                    "name": "stepper.roomsEditName",
                                    "title": "stepper.roomsEditTitle",
                                    "description": "stepper.roomsEditDescription",
                                    "type": "check",
                                    "items": [
                                        { "name": "stepper.roomEditQuestionOne" },
                                        { "name": "stepper.roomEditQuestionTwo" },
                                        { "name": "stepper.roomEditQuestionThree" },
                                        { "name": "stepper.roomEditQuestionFour" },
                                        { "name": "stepper.roomEditQuestionFive" },
                                    ],
                                    "nextStep": {
                                        "name": "stepper.roomsWallName",
                                        "title": "stepper.roomsWallsTitle",
                                        "description": "roomsWallsDescription",
                                        "type": "multi",
                                        "items": [
                                            { "name": "stepper.fillingWalls" },
                                            { "name": "stepper.paintWalls" },
                                            { "name": "stepper.wallpaperWalls" },
                                            { "name": "stepper.trillingWalls" },
                                        ],
                                        "nextStep": {
                                            "name": "stepper.paintsQuality",
                                            "title": "stepper.paintsTitle",
                                            "description": "stepper.paintsDescription",
                                            "type": "multi",
                                            "items": [
                                                { "name": "stepper.budgetQuality" },
                                                { "name": "stepper.standardQuality" },
                                                { "name": "stepper.budgetQuality" },
                                            ],
                                            "nextStep": {
                                                "name": "stepper.roomsCeilingTitle",
                                                "title": "stepper.roomsCeilingTitle",
                                                "description": "stepper.roomsCeilingDescription",
                                                "type": "check",
                                                "items": [
                                                    { "name": "stepper.roomCeilingQuestionOne" },
                                                    { "name": "stepper.roomCeilingQuestionTwo" },
                                                    { "name": "stepper.roomCeilingQuestionThree" },
                                                    { "name": "stepper.roomCeilingQuestionFour" },
                                                    { "name": "stepper.roomCeilingQuestionFive" },
                                                    { "name": "stepper.roomCeilingQuestionSix" },
                                                    { "name": "stepper.roomCeilingQuestionSeven" },
                                                    { "name": "stepper.roomCeilingQuestionEight" },
                                                    { "name": "stepper.roomCeilingQuestionNine" },
                                                    { "name": "stepper.roomCeilingQuestionTen" },
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
                        "items": {
                            "name": "stepper.roomSelectionName",
                            "title": "stepper.roomSelectionMainQuestion",
                            "description": "stepper.roomSelectionMainDescription",
                            "type": "multi",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.livingRoom", "icon": "🛋️" },
                                { "name": "stepper.bedRoom", "icon": "👶🏻" },
                                { "name": "stepper.hallway", "icon": "🏘" },
                                { "name": "stepper.kitchen", "icon": "🍳" },
                                { "name": "stepper.bathroom", "icon": "🛁" },
                                { "name": "stepper.basement", "icon": "⬇🚪" },
                            ],
                            "nextStep": {
                                "name": "stepper.roomSizeName",
                                "title": "stepper.roomSizeTitle",
                                "description": "stepper.roomSizeDescription",
                                "type": "text",
                                "items": [
                                    { "name": "stepper.roomQuestionOne" },
                                    { "name": "stepper.roomQuestionTwo" },
                                    { "name": "stepper.roomQuestionThree" },
                                    { "name": "stepper.roomQuestionFour" },
                                    { "name": "stepper.roomQuestionFive" },
                                ],
                                "nextStep": {
                                    "name": "stepper.roomFloorService",
                                    "title": "stepper.roomFloorServiceTitle",
                                    "description": "stepper.roomFloorServiceDescription",
                                    "type": "multi",
                                    "items": [
                                        { "name": "stepper.newFlooring" },
                                        { "name": "stepper.reconditionFlooring" },
                                    ],
                                    "nextStep": {
                                        "name": "stepper.floorTypeName",
                                        "title": "stepper.floorTypeTitle",
                                        "description": "stepper.floorTypeDescription",
                                        "type": "multi",
                                        "items": [
                                            { "name": "stepper.parquet" },
                                            { "name": "stepper.works" },
                                            { "name": "stepper.vinyl" },
                                            { "name": "stepper.laminate" },
                                            { "name": "stepper.carpet" },
                                            { "name": "stepper.tiles" },
                                        ],
                                        "nextStep": {
                                            "name": "stepper.skirtingBoardsTitle",
                                            "title": "stepper.skirtingBoardsTitle",
                                            "description": "stepper.skirtingBoardsDescription",
                                            "type": "check",
                                            "items": [
                                                { "name": "stepper.skirtingBoardsQuestionOne" },
                                                { "name": "stepper.skirtingBoardsQuestionTwo" },
                                                { "name": "stepper.skirtingBoardsQuestionThree" },
                                                { "name": "stepper.skirtingBoardsQuestionFour" },
                                                { "name": "stepper.skirtingBoardsQuestionFive" },
                                            ],
                                            "nextStep": {
                                                "name": "stepper.oldFlooring",
                                                "title": "stepper.oldFlooring",
                                                "description": "stepper.oldFlooringDescription",
                                                "type": "check",
                                                "items": [
                                                    { "name": "stepper.oldFlooringQuestionOne" },
                                                    { "name": "stepper.oldFlooringQuestionTwo" },
                                                    { "name": "stepper.oldFlooringQuestionThree" },
                                                    { "name": "stepper.oldFlooringQuestionFour" },
                                                    { "name": "stepper.oldFlooringQuestionFive" },
                                                ],
                                                "nextStep": {
                                                    "name": "stepper.flooringQuality",
                                                    "title": "stepper.flooringQuality",
                                                    "description": "stepper.flooringQualityDescription",
                                                    "type": "multi",
                                                    "items": [
                                                        { "name": "stepper.budgetQuality" },
                                                        { "name": "stepper.standardQuality" },
                                                        { "name": "stepper.premiumQuality" },
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
                        "items": {
                            "name": "stepper.windowsInfo",
                            "title": "stepper.windowsInfo",
                            "description": "stepper.windowsInfoDescription",
                            "type": "text",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.windowsInfoQuestionOne" },
                                { "name": "stepper.windowsInfoQuestionTwo" },
                                { "name": "stepper.windowsInfoQuestionThree" },
                            ],
                            "nextStep": {
                                "name": "newWindows",
                                "title": "stepper.newWindowsTitle",
                                "description": "stepper.newWindowsDescription",
                                "type": "multi",
                                "items": [
                                    { "name": "stepper.plastic" },
                                    { "name": "stepper.wood" },
                                ],
                                "nextStep": null,
                                "lastStep": true
                            },
                        },

                    },
                    {
                        "name": "stepper.doors",
                        "icon": "🚪",
                        "items": {
                            "name": "stepper.doorsTitle",
                            "title": "stepper.doorsTitle",
                            "description": "stepper.doorsDescription",
                            "type": "check",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.doorQuestionOne" },
                                { "name": "stepper.doorQuestionTwo" },
                                { "name": "stepper.doorQuestionThree" },
                            ],
                            "nextStep": {
                                "name": "stepper.newDoors",
                                "title": "stepper.newDoors",
                                "description": "stepper.newDoorsDescription",
                                "type": "text",
                                "items": [
                                    { "name": "stepper.newDoorsQuestionOne" },
                                    { "name": "stepper.newDoorsQuestionTwo" },
                                ],
                                "nextStep": {
                                    "name": "doorsQuality",
                                    "title": "stepper.doorsQualityTitle",
                                    "description": "stepper.doorsQualityDescription",
                                    "type": "multi",
                                    "items": [
                                        { "name": "stepper.budgetQuality" },
                                        { "name": "stepper.standardQuality" },
                                        { "name": "stepper.premiumQuality" },
                                    ],
                                    "nextStep": null,
                                    "lastStep": true
                                },
                            },
                        },
                    },
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
                                { "name": "stepper.bathroomQuestionThree" },
                            ],
                            "nextStep": {
                                "name": "stepper.bathroomQuestions",
                                "title": "stepper.bathroomQuestions",
                                "description": "stepper.bathroomQuestionsDescription",
                                "type": "check",
                                "items": [
                                    { "name": "stepper.bathroomCheckOutQuestionOne" },
                                    { "name": "stepper.bathroomCheckOutQuestionTwo" },
                                    { "name": "stepper.bathroomCheckOutQuestionThree" },
                                ],
                                "nextStep": {
                                    "name": "stepper.tilesQuality",
                                    "title": "stepper.tilesQualityTitle",
                                    "description": "stepper.tilesQualityDescription",
                                    "type": "multi",
                                    "items": [
                                        { "name": "stepper.budgetQuality" },
                                        { "name": "stepper.standardQuality" },
                                        { "name": "stepper.premiumQuality" },
                                    ],
                                    "nextStep": {
                                        "name": "stepper.bathroomFeatures",
                                        "title": "stepper.bathroomFeaturesTitle",
                                        "description": "stepper.bathroomFeaturesDescription",
                                        "type": "multi",
                                        "items": [
                                            { "name": "stepper.shower" },
                                            { "name": "stepper.bath Hub" },
                                            { "name": "stepper.toilet" },
                                            { "name": "stepper.washBasing" },
                                            { "name": "stepper.doubleWashBasing" },
                                            { "name": "stepper.towelRadiator" },
                                            { "name": "stepper.ceiling" },
                                        ],
                                        "nextStep": null,
                                        "lastStep": true,
                                    },
                                },
                            }
                        },
                    },
                    {
                        "name": "stepper.roofAndInsulation",
                        "icon": "🧱",
                        "items": {
                            "name": "stepper.roofAndInsulationInfo",
                            "title": "stepper.roofAndInsulationTitle",
                            "description": "stepper.roofAndInsulationDescription",
                            "type": "multi",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.roofAndInsulationQuestionOne" },
                                { "name": "stepper.roofAndInsulationQuestionTwo" },
                            ],
                            "nextStep": {
                                "name": "stepper.roofShape",
                                "title": "stepper.roofShapeTitle",
                                "description": "stepper.roofShapeDescription",
                                "type": "multi",
                                "items": [
                                    { "name": "stepper.gableRoof" },
                                    { "name": "stepper.flatRoof" },
                                ],
                                "nextStep": {
                                    "name": "stepper.roofQuestions",
                                    "title": "stepper.roofQuestions",
                                    "description": "stepper.roofQuestionsDescription",
                                    "type": "text",
                                    "items": [
                                        { "name": "stepper.roofQuestionOne" },
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
                        "items": {
                            "name": "stepper.facadeName",
                            "title": "stepper.facadeTitle",
                            "description": "stepper.facadeDescription",
                            "type": "multi",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.singleHouse" },
                                { "name": "stepper.semiHouse" },
                                { "name": "stepper.terracedHouse" },
                                { "name": "stepper.endHouse" },
                            ],
                            "nextStep": {
                                "name": "stepper.facade",
                                "title": "stepper.facadeTypeTitle",
                                "description": "stepper.facadeTypeDescription",
                                "type": "multi",
                                "items": [
                                    { "name": "stepper.facadeStone" },
                                    { "name": "stepper.facadePlaster" },
                                    { "name": "stepper.facadePainting" },
                                    { "name": "stepper.facadeBlown" },
                                ],
                                "nextStep": {
                                    "name": "stepper.houseInfo",
                                    "title": "stepper.houseInfoTitle",
                                    "description": "stepper.houseInfoDescription",
                                    "type": "text",
                                    "items": [
                                        { "name": "stepper.houseInfoQuestionOne" },
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
                        "items": {
                            "name": "stepper.floorPlanName",
                            "title": "stepper.floorPlanTitle",
                            "description": "stepper.floorPlanDescription",
                            "type": "check",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.floorPlanQuestionOne" },
                                { "name": "stepper.floorPlanQuestionTwo" },
                                { "name": "stepper.floorPlanQuestionThree" },
                            ],
                            "nextStep": {
                                "name": "stepper.floorPlanDetails",
                                "title": "stepper.floorPlanDetailsTitle",
                                "description": "stepper.floorPlanDetailsDescription",
                                "type": "text",
                                "items": [
                                    { "name": "stepper.floorPlanDetailsQuestionOne" },
                                    { "name": "stepper.floorPlanDetailsQuestionTwo" },
                                ],
                                "nextStep": {
                                    "name": "stepper.floorPlanType",
                                    "title": "stepper.floorPlanTypeTitle",
                                    "description": "stepper.floorPlanTypeDescription",
                                    "type": "multi",
                                    "items": [
                                        { "name": "stepper.massivwand" },
                                        { "name": "stepper.lightWeightWall" },
                                    ],
                                    "nextStep": {
                                        "name": "stepper.floorPlanClose",
                                        "title": "stepper.floorPlanCloseTitle",
                                        "description": "stepper.floorPlanCloseDescription",
                                        "type": "multi",
                                        "items": [
                                            { "name": "stepper.massivwand" },
                                            { "name": "stepper.lightWeightWall" },
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
                        "items": {
                            "name": "stepper.stairsInfo",
                            "title": "stepper.stairsInfo",
                            "description": "stepper.stairsInfoDescription",
                            "type": "check",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.stairInfoQuestionOne" },
                                { "name": "stepper.stairInfoQuestionTwo" },
                                { "name": "stepper.stairInfoQuestionThree" },
                                { "name": "stepper.stairInfoQuestionFour" },
                            ],
                            "nextStep": {
                                "name": "stepper.stairsType",
                                "title": "stepper.stairsTypeTitle",
                                "description": "stepper.stairsTypeDescription",
                                "type": "multi",
                                "items": [
                                    { "name": "stepper.straight" },
                                    { "name": "stepper.quarter" },
                                    { "name": "stepper.stairsHalf" },
                                    { "name": "stepper.stepperTwoQuarter" },
                                ],
                                "nextStep": {
                                    "name": "stepper.stairsQuality",
                                    "title": "stepper.stairsQualityTitle",
                                    "description": "stepper.stairsQualityDescription",
                                    "type": "multi",
                                    "items": [
                                        { "name": "stepper.budgetQuality" },
                                        { "name": "stepper.standardQuality" },
                                        { "name": "stepper.premiumQuality" },
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
                        "items": {
                            "name": "stepper.supplyLinesInfo",
                            "title": "stepper.supplyLinesInfo",
                            "description": "stepper.supplyLinesInfoDescription",
                            "type": "text",
                            "isFirst": true,
                            "items": [
                                { "name": "stepper.supplyLinesQuestionOne" },
                                { "name": "stepper.supplyLinesQuestionTwo" },
                            ],
                            "nextStep": null,
                            "lastStep": true,
                        },
                    },
                ]
            },
        ]
    },
]