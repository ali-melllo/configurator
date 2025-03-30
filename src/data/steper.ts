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
                    { "name": "Electricity", "icon": "🔌", "items": ["1"] },
                    { "name": "Heating Technology", "icon": "🌡️", "items": ["1"] },
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
                "title": "Select one or more services",
                "description": "Select your prefer services for implementing",
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
                                        "nextStep": null
                                    },
                                },
                            },
                        },
                    },
                    {
                        "name": "Heating Technology", "icon": "🌡️", "items": {
                            "name": "heating step",
                            "title": "Select heating services",
                            "description": "Select your prefer services for heating",
                            "type": "multi",
                            "icon": "🔌",
                            "nextStep": {
                                "name": "heating step 2",
                                "title": "Select heating services",
                                "description": "Select your prefer services for heating",
                                "type": "multi",
                                "icon": "🔌",
                                "nextStep": null
                            },
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