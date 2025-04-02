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
        "title": "where Do You Live ?",
        "description": "Find suitable specialist companies in your region free of charge and without obligation",
        "type": "select",
        "name": "home_type",
        "items": [
            {
                "title": "Select one or more services",
                "description": "Select your prefer services for implementing",
                "type": "multi",
                "name": "house",
                "key": "gather-steps",
                "icon": "🏠",
                "items": [
                    {
                        "name": "Electricity",
                        "icon": "🔌",
                        "items": {
                            "name": "Electronic",
                            "title": "Should a new fuse box be installed?",
                            "description": "Select your prefer services for electricity",
                            "type": "multi",
                            "isFirst": true,
                            "icon": "🔌",
                            "items": [
                                { "name": "Fuse Box" },
                                { "name": "Fuse Box With data cabinet" },
                                { "name": "No / don't Know" }
                            ],
                            "nextStep": {
                                "name": "heat pump",
                                "title": "heat pump",
                                "description": "Define Your heat pump presence",
                                "items": [
                                    { "name": "Is a heat pump present or should one be installed?" },
                                ],
                                "type": "check",
                                "icon": "🔌",
                                "nextStep": {
                                    "name": "electrical wiring",
                                    "title": "electrical wiring",
                                    "description": "Define Your electrical wiring",
                                    "items": [
                                        { "name": "Should the electrical wiring be replaced ?" },
                                    ],
                                    "type": "check",
                                    "icon": "🔌",
                                    "nextStep": {
                                        "name": "rooms selection",
                                        "title": "In which rooms should new cables be installed?",
                                        "description": "Define Your rooms selection",
                                        "items": [
                                            { "name": "Living/dining room", "icon": "🛋️" },
                                            { "name": "Bedroom/children's room", "icon": "👶🏻" },
                                            { "name": "Hallway", "icon": "🏘" },
                                            { "name": "Kitchen", "icon": "🍳" },
                                            { "name": "Bathroom / Toilet", "icon": "🛁" },
                                            { "name": "Utility room / basement", "icon": "⬇🚪" },
                                        ],
                                        "type": "multi",
                                        "icon": "🔌",
                                        "nextStep": {
                                            "name": "rooms size",
                                            "title": "please answer the questions about room sizes",
                                            "description": "Define Your rooms size",
                                            "items": [
                                                { "name": "How big is the Bedroom/children's room?" },
                                                { "name": "How big is the Living/dining room?" },
                                                { "name": "How big is the Kitchen?" },
                                                { "name": "How big is the Bathroom / Toilet?" },
                                                { "name": "How big is the following room:Utility room / basement?" },
                                            ],
                                            "type": "text",
                                            "nextStep": {
                                                "name": "new switches and sockets",
                                                "title": "new switches and sockets quality",
                                                "description": "please select new switches and sockets quality",
                                                "items": [
                                                    { "name": "Budget Quality" },
                                                    { "name": "Standard quality" },
                                                    { "name": "Premium quality" },
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
                        "name": "Heating Technology",
                        "icon": "🌡️",
                        "items": {
                            "name": "Heating Tech",
                            "isFirst": true,
                            "title": "Heating Technology",
                            "description": "tell us about Heating Technology info",
                            "type": "check",
                            "nextStep": {
                                "name": "Heating Radiators",
                                "title": "Which radiators do you want?",
                                "description": "tell us about Heating Radiators info",
                                "type": "multi",
                                "items": [
                                    { "name": "Standard radiators (profiled)", "icon": "♨️" },
                                    { "name": "Panel radiators", "icon": "♨️" },
                                    { "name": "Towel radiator", "icon": "♨️" },
                                    { "name": "Vertical radiators (flat)", "icon": "♨️" },
                                ],
                                "nextStep": {
                                    "name": "oven",
                                    "title": "Oven",
                                    "description": "tell us about Heating Ovens",
                                    "type": "check",
                                    "nextStep": {
                                        "name": "oven quality",
                                        "title": "What quality do you want your oven to be?",
                                        "description": "please select oven quality",
                                        "items": [
                                            { "name": "Budget Quality" },
                                            { "name": "Standard quality" },
                                            { "name": "Premium quality" },
                                        ],
                                        "type": "multi",
                                        "nextStep": {
                                            "name": "fireplace",
                                            "title": "Fire Place",
                                            "description": "please fill about fireplace",
                                            "items": [
                                                { "name": "Do You Want A fire place installed ? " },
                                            ],
                                            "type": "check",
                                            "nextStep": null
                                        }
                                    },
                                    "items": [
                                        { "name": "Would you like to install an oven?" }
                                    ]
                                },
                            },
                            "items": [
                                { "name": "Should a new gas central heating system be installed?" },
                                { "name": "Do you need an instantaneous water heater?" },
                                { "name": "Would you like to install new radiators?" },
                            ]
                        },
                    },
                    { "name": "Walls & Ceilings", "icon": "🚿", "items": ["1"] },
                    { "name": "Flooring & skirting boards", "icon": "👣", "items": ["1"] },
                    { "name": "Window", "icon": "🔲", "items": ["1"] },
                    { "name": "Doors", "icon": "🚪", "items": ["1"] },
                    { "name": "Bathroom & rest toilets", "icon": "🛁", "items": ["1"] },
                    { "name": "Roof & insulation", "icon": "🧱", "items": ["1"] },
                    { "name": "Facade & insulation", "icon": "🛠", "items": ["1"] },
                    { "name": "Floor Plan Change", "icon": "𓉩", "items": ["1"] },
                    { "name": "Stairs", "icon": "𓊍", "items": ["1"] },
                    { "name": "Supply Lines", "icon": "🚰", "items": ["1"] },
                ]
            },
            //////////////////////////////////////
            {
                "title": "Select services",
                "description": "Services Select",
                "type": "multi",
                "name": "apartment",
                "icon": "🏬",
                "key": "gather-steps",
                "items": [
                    {
                        "name": "Electricity",
                        "icon": "🔌",
                        "items": {
                            "name": "Electronic",
                            "title": "Should a new fuse box be installed?",
                            "description": "Select your prefer services for electricity",
                            "type": "multi",
                            "isFirst": true,
                            "icon": "🔌",
                            "items": [
                                { "name": "Fuse Box" },
                                { "name": "Fuse Box With data cabinet" },
                                { "name": "No / don't Know" }
                            ],
                            "nextStep": {
                                "name": "heat pump",
                                "title": "heat pump",
                                "description": "Define Your heat pump presence",
                                "items": [
                                    { "name": "Is a heat pump present or should one be installed?" },
                                ],
                                "type": "check",
                                "icon": "🔌",
                                "nextStep": {
                                    "name": "electrical wiring",
                                    "title": "electrical wiring",
                                    "description": "Define Your electrical wiring",
                                    "items": [
                                        { "name": "Should the electrical wiring be replaced ?" },
                                    ],
                                    "type": "check",
                                    "icon": "🔌",
                                    "nextStep": {
                                        "name": "rooms selection",
                                        "title": "In which rooms should new cables be installed?",
                                        "description": "Define Your rooms selection",
                                        "items": [
                                            { "name": "Living/dining room", "icon": "🛋️" },
                                            { "name": "Bedroom/children's room", "icon": "👶🏻" },
                                            { "name": "Hallway", "icon": "🏘" },
                                            { "name": "Kitchen", "icon": "🍳" },
                                            { "name": "Bathroom / Toilet", "icon": "🛁" },
                                            { "name": "Utility room / basement", "icon": "⬇🚪" },
                                        ],
                                        "type": "multi",
                                        "icon": "🔌",
                                        "nextStep": {
                                            "name": "rooms size",
                                            "title": "please answer the questions about room sizes",
                                            "description": "Define Your rooms size",
                                            "items": [
                                                { "name": "How big is the Bedroom/children's room?" },
                                                { "name": "How big is the Living/dining room?" },
                                                { "name": "How big is the Kitchen?" },
                                                { "name": "How big is the Bathroom / Toilet?" },
                                                { "name": "How big is the following room:Utility room / basement?" },
                                            ],
                                            "type": "text",
                                            "nextStep": {
                                                "name": "new switches and sockets",
                                                "title": "new switches and sockets quality",
                                                "description": "please select new switches and sockets quality",
                                                "items": [
                                                    { "name": "Budget Quality" },
                                                    { "name": "Standard quality" },
                                                    { "name": "Premium quality" },
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
                        "name": "Heating Technology",
                        "icon": "🌡️",
                        "items": {
                            "name": "Heating Tech",
                            "isFirst": true,
                            "title": "Heating Technology",
                            "description": "tell us about Heating Technology info",
                            "type": "check",
                            "nextStep": {
                                "name": "Heating Radiators",
                                "title": "Which radiators do you want?",
                                "description": "tell us about Heating Radiators info",
                                "type": "multi",
                                "items": [
                                    { "name": "Standard radiators (profiled)", "icon": "♨️" },
                                    { "name": "Panel radiators", "icon": "♨️" },
                                    { "name": "Towel radiator", "icon": "♨️" },
                                    { "name": "Vertical radiators (flat)", "icon": "♨️" },
                                ],
                                "nextStep": {
                                    "name": "oven",
                                    "title": "Oven",
                                    "description": "tell us about Heating Ovens",
                                    "type": "check",
                                    "nextStep": {
                                        "name": "oven quality",
                                        "title": "What quality do you want your oven to be?",
                                        "description": "please select oven quality",
                                        "items": [
                                            { "name": "Budget Quality" },
                                            { "name": "Standard quality" },
                                            { "name": "Premium quality" },
                                        ],
                                        "type": "multi",
                                        "nextStep": {
                                            "name": "fireplace",
                                            "title": "Fire Place",
                                            "description": "please fill about fireplace",
                                            "items": [
                                                { "name": "Do You Want A fire place installed ? " },
                                            ],
                                            "type": "check",
                                            "nextStep": null
                                        }
                                    },
                                    "items": [
                                        { "name": "Would you like to install an oven?" }
                                    ]
                                },
                            },
                            "items": [
                                { "name": "Should a new gas central heating system be installed?" },
                                { "name": "Do you need an instantaneous water heater?" },
                                { "name": "Would you like to install new radiators?" },
                            ]
                        },
                    },
                    {
                        "name": "Walls & Ceilings",
                        "icon": "🏼",
                        "items": {
                            "name": "Room Selection",
                            "title": "Which rooms should be worked on?",
                            "description": "please select the parts of house you want to work on",
                            "type": "multi",
                            "isFirst": true,
                            "items": [
                                { "name": "Living/dining room", "icon": "🛋️" },
                                { "name": "Bedroom/children's room", "icon": "👶🏻" },
                                { "name": "Hallway", "icon": "🏘" },
                                { "name": "Kitchen", "icon": "🍳" },
                                { "name": "Bathroom / Toilet", "icon": "🛁" },
                                { "name": "Utility room / basement", "icon": "⬇🚪" },
                            ],
                            "nextStep": {
                                "name": "rooms size",
                                "title": "fill room Sizes",
                                "description": "please fill the rooms sizes in square meters",
                                "type": "text",
                                "items": [
                                    { "name": "How big is the Bedroom ?" },
                                    { "name": "How big is the Hallway?" },
                                    { "name": "How big is the Kitchen?" },
                                    { "name": "How big is the Bathroom / Toilet?" },
                                    { "name": "How big is the Utility room / basement?" },
                                ],
                                "nextStep": {
                                    "name": "Rooms edit",
                                    "title": "Select Rooms to edit",
                                    "description": "please select the rooms for editing",
                                    "type": "check",
                                    "items": [
                                        { "name": "Would you like to edit your walls in Utility room / basement?" },
                                        { "name": "Would you like to edit your walls in Hallway?" },
                                        { "name": "Would you like to edit your walls in Kitchen?" },
                                        { "name": "Would you like to edit your walls in Bathroom / Toilet??" },
                                        { "name": "Would you like to edit your walls in Bedroom?" },
                                    ],
                                    "nextStep": {
                                        "name": "rooms wall",
                                        "title": "How should the walls be treated:Utility room / basement?",
                                        "description": "please select How should the walls be treated:Utility room / basement for editing",
                                        "type": "multi",
                                        "items": [
                                            { "name": "Filling, sanding and painting walls" },
                                            { "name": "Just paint the walls" },
                                            { "name": "Wallpapering walls" },
                                            { "name": "Tiling walls" },
                                        ],
                                        "nextStep": {
                                            "name": "rooms quality",
                                            "title": "What quality do you want for the new paint/tiles:Utility room / basement?",
                                            "description": "please select the Utility room / basement quality",
                                            "type": "multi",
                                            "items": [
                                                { "name": "Budget Quality" },
                                                { "name": "Standard quality" },
                                                { "name": "Premium quality" },
                                            ],
                                            "nextStep": {
                                                "name": "rooms ceiling",
                                                "title": "Rooms Ceiling",
                                                "description": "please select the rooms ceilings",
                                                "type": "check",
                                                "items": [
                                                    { "name": "Should the ceilings be treated:Utility room / basement?" },
                                                    { "name": "Does old wallpaper needs to be removed:Utility room / basement?" },
                                                    { "name": "Should the ceilings be treated in Living/dining room?" },
                                                    { "name": "Does old wallpaper needs to be removed in Living/dining room?" },
                                                    { "name": "Should the ceilings be treated:Bedroom/children's room?" },
                                                    { "name": "Does old wallpaper needs to be removed:Bedroom/children's room?" },
                                                    { "name": "Should the ceilings be treated:Hallway?" },
                                                    { "name": "Does old wallpaper needs to be removed:Hallway?" },
                                                    { "name": "Should the ceilings be treated:Kitchen?" },
                                                    { "name": "If old wallpaper needs to be removed:Kitchen?" },
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
                        "name": "Flooring & skirting boards",
                        "icon": "👣",
                        "items": {
                            "name": "Room Selection",
                            "title": "In which rooms should new flooring be laid or refurbished?",
                            "description": "please select the parts of house you want to work on flooring",
                            "type": "multi",
                            "isFirst": true,
                            "items": [
                                { "name": "Living/dining room", "icon": "🛋️" },
                                { "name": "Bedroom/children's room", "icon": "👶🏻" },
                                { "name": "Hallway", "icon": "🏘" },
                                { "name": "Kitchen", "icon": "🍳" },
                                { "name": "Bathroom / Toilet", "icon": "🛁" },
                                { "name": "Utility room / basement", "icon": "⬇🚪" },
                            ],
                            "nextStep": {
                                "name": "rooms floor size",
                                "title": "Fill Rooms floor Sizes",
                                "description": "please fill the rooms sizes in square meters",
                                "type": "text",
                                "items": [
                                    { "name": "How big is the Bedroom  floor ?" },
                                    { "name": "How big is the Hallway floor ?" },
                                    { "name": "How big is the Kitchen floor ?" },
                                    { "name": "How big is the Bathroom / Toilet floor ?" },
                                    { "name": "How big is the Utility room / basement floor ?" },
                                ],
                                "nextStep": {
                                    "name": "rooms floor service",
                                    "title": "What should be done ?",
                                    "description": "please select the rooms flooring service",
                                    "type": "multi",
                                    "items": [
                                        { "name": "Laying new flooring" },
                                        { "name": "Reconditioning wooden floors" },
                                    ],
                                    "nextStep": {
                                        "name": "floor type",
                                        "title": "What kind of floor do you want?",
                                        "description": "please select the rooms flooring options",
                                        "type": "multi",
                                        "items": [
                                            { "name": "Parquet" },
                                            { "name": "Works" },
                                            { "name": "Vinyl" },
                                            { "name": "Laminate" },
                                            { "name": "Carpet" },
                                            { "name": "tiles" },
                                        ],
                                        "nextStep": {
                                            "name": "Skirting Boards ",
                                            "title": "skirting boards",
                                            "description": "please answer the questions about skirting boards",
                                            "type": "check",
                                            "items": [
                                                { "name": "Should the skirting boards also be replaced in Living/dining room?" },
                                                { "name": "Should the skirting boards also be replaced in the kitchen?" },
                                                { "name": "Should the skirting boards also be replaced in bed room?" },
                                                { "name": "Should the skirting boards also be replaced in the basement?" },
                                                { "name": "Should the skirting boards also be replaced in the hallway" },
                                            ],
                                            "nextStep": {
                                                "name": "old flooring remove",
                                                "title": "old flooring remove",
                                                "description": "please answer the questions about old flooring remove",
                                                "type": "check",
                                                "items": [
                                                    { "name": "old flooring is to be removed in Living/dining room?" },
                                                    { "name": "old flooring is to be removed in the kitchen?" },
                                                    { "name": "old flooring is to be removed in bed room?" },
                                                    { "name": "old flooring is to be removed in the basement?" },
                                                    { "name": "old flooring is to be removed in the hallway" },
                                                ],
                                                "nextStep": {
                                                    "name": "flooring quality",
                                                    "title": "flooring quality",
                                                    "description": "please select from flooring quality",
                                                    "type": "multi",
                                                    "items": [
                                                        { "name": "Budget Quality" },
                                                        { "name": "Standard quality" },
                                                        { "name": "Premium quality" },
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
                        "name": "Window",
                        "icon": "🔲",
                        "items": {
                            "name": "windows info",
                            "title": "windows info",
                            "description": "please fill window information",
                            "type": "text",
                            "items": [
                                { "name": "Which of the existing windows should be painted ?" },
                                { "name": "How many windows need to be painted ?" },
                                { "name": "Should the window sills also be replaced?" },
                            ],
                            "nextStep": {
                                "name": "new windows",
                                "title": "What material should your windows be made of?",
                                "description": "please select new windows material",
                                "type": "multi",
                                "items": [
                                    { "name": "Plastic" },
                                    { "name": "Wood" },
                                ],
                                "nextStep": null,
                                "lastStep": true
                            },
                            "isFirst": true
                        },

                    },
                    { "name": "Doors", "icon": "🚪", "items": ["1"] },
                    { "name": "Bathroom & rest toilets", "icon": "🛁", "items": ["1"] },
                    { "name": "Roof & insulation", "icon": "🧱", "items": ["1"] },
                    { "name": "Facade & insulation", "icon": "🛠", "items": ["1"] },
                    { "name": "Floor Plan Change", "icon": "𓉩", "items": ["1"] },
                    { "name": "Stairs", "icon": "𓊍", "items": ["1"] },
                    { "name": "Supply Lines", "icon": "🚰", "items": ["1"] },
                ]
            },
        ]
    },
]