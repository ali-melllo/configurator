export const STEPS_DATA = [
    {
        "title": "Select Construction Area",
        "description": "Choose which part of your building needs construction work.",
        "type": "select",
        "name": "construction_area",
        "items": [
            {
                "title": "Foundation & Groundwork",
                "description": "Select the groundwork services required.",
                "name": "renovation",
                "type": "select",
                "icon": "🏗️",
                "items": [
                    {
                        "title": "Flooring Options",
                        "description": "Choose your preferred flooring material.",
                        "name": "flooring",
                        "type": "check",
                        "icon": "🪵",
                        "items": [
                            { "name": "Wood Flooring", "icon": "🪵" },
                            { "name": "Concrete Flooring", "icon": "🧱" },
                            { "name": "Tiles", "icon": "🪨" },
                            { "name": "Plumbing Work", "icon": "🚰" }
                        ],
                        "nextStep": {
                            "title": "Enter Flooring Details",
                            "description": "Provide additional information about your flooring needs.",
                            "type": "text",
                            "name": "flooring_details",
                            "items": [
                                { "name": "What is the current flooring made of?" },
                                { "name": "How old is the flooring?" }
                            ],
                            "nextStep": {
                                "title": "Choose Preferred Construction Date",
                                "description": "Select a date for the work to begin.",
                                "type": "date",
                                "name": "construction_date",
                                "nextStep": {
                                    "title": "Enter Your Contact Information",
                                    "description": "Provide your details to receive an estimated quote.",
                                    "type": "text",
                                    "name": "contact_info",
                                    "items": [
                                        { "name": "Full Name" },
                                        { "name": "Phone Number" },
                                        { "name": "Email Address" },
                                        { "name": "Project Address" }
                                    ],
                                    "lastStep":true,
                                }
                            }
                        }
                    }
                ]
            },
            {
                "title": "House Extension",
                "description": "Select the type of house extension needed.",
                "name": "house_extension",
                "type": "select",
                "icon": "🏠",
                "items": [
                    {
                        "title": "Single-Story Extension",
                        "description": "Expand your home with a ground-floor extension.",
                        "name": "single_story_extension",
                        "type": "multi",
                        "icon": "📏",
                        "items": [
                            { "name": "Living Room Extension" },
                            { "name": "Kitchen Extension" },
                            { "name": "Bathroom Addition" },
                        ],
                        "lastStep":true,
                    },
                    {
                        "title": "Double-Story Extension",
                        "description": "Add more space with a two-level extension.",
                        "name": "double_story_extension",
                        "type": "multi",
                        "icon": "🏢",
                        "items": [
                            { "name": "Additional Bedrooms" },
                            { "name": "Office Space" },
                            { "name": "Extra Bathrooms" }
                        ],
                        "lastStep":true,

                    },
                    {
                        "title": "Garage Conversion",
                        "description": "Turn your garage into a functional space.",
                        "name": "garage_conversion",
                        "type": "multi",
                        "icon": "🚗",
                        "items": [
                            { "name": "Home Office" },
                            { "name": "Guest Room" },
                            { "name": "Entertainment Room" }
                        ],
                        "lastStep":true,
                    }
                ]
            }
        ]
    }
]