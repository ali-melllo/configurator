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
                            "isFirst":true,
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
                                            { "name": "Living/dining room" , "icon": "🛋️" },
                                            { "name": "Bedroom/children's room"  , "icon": "👶🏻" },
                                            { "name": "Hallway" , "icon": "🏘" },
                                            { "name": "Kitchen" , "icon": "🍳" },
                                            { "name": "Bathroom / Toilet" , "icon": "🛁" },
                                            { "name": "Utility room / basement" , "icon": "⬇🚪" },
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
                            "title":"Heating Technology",
                            "description": "tell us about Heating Technology info",
                            "type": "check",
                            "nextStep": {
                                "name": "Heating Radiators",
                                "title":"Which radiators do you want?",
                                "description": "tell us about Heating Radiators info",
                                "type": "multi",
                                "items":[
                                    { "name": "Standard radiators (profiled)" , "icon":"♨️" },
                                    { "name": "Panel radiators" , "icon":"♨️" },
                                    { "name": "Towel radiator" , "icon":"♨️" },
                                    { "name": "Vertical radiators (flat)" , "icon":"♨️" },
                                ],
                                "nextStep": {
                                    "name": "oven",
                                    "title":"Oven",
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
                                    "items":[
                                        { "name": "Would you like to install an oven?" }
                                    ]
                                },
                            },
                            "items":[
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
                            "isFirst":true,
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
                                            { "name": "Living/dining room" , "icon": "🛋️" },
                                            { "name": "Bedroom/children's room"  , "icon": "👶🏻" },
                                            { "name": "Hallway" , "icon": "🏘" },
                                            { "name": "Kitchen" , "icon": "🍳" },
                                            { "name": "Bathroom / Toilet" , "icon": "🛁" },
                                            { "name": "Utility room / basement" , "icon": "⬇🚪" },
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
                            "title":"Heating Technology",
                            "description": "tell us about Heating Technology info",
                            "type": "check",
                            "nextStep": {
                                "name": "Heating Radiators",
                                "title":"Which radiators do you want?",
                                "description": "tell us about Heating Radiators info",
                                "type": "multi",
                                "items":[
                                    { "name": "Standard radiators (profiled)" , "icon":"♨️" },
                                    { "name": "Panel radiators" , "icon":"♨️" },
                                    { "name": "Towel radiator" , "icon":"♨️" },
                                    { "name": "Vertical radiators (flat)" , "icon":"♨️" },
                                ],
                                "nextStep": {
                                    "name": "oven",
                                    "title":"Oven",
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
                                    "items":[
                                        { "name": "Would you like to install an oven?" }
                                    ]
                                },
                            },
                            "items":[
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
        ]
    },
]