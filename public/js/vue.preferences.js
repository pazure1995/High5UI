var app = new Vue({
    el: '#HMPreferences',
    data: {
        locations: [
            {
                text: "Jacksonville FL."
            },
            {
                text: "Tallahassee FL."
            },
            {
                text: "Yulee FL."
            },
            {
                text: "Daytona Beach FL."
            }
        ],
        skills: [
            {
                text: "HTML"
            },
            {
                text: "CSS"
            },
            {
                text: "Javascript"
            },
            {
                text: "AWS"
            }
        ],
        contactMethods: [
            {
                id: 1,
                text: "Phone"
            },
            {
                id: 2,
                selected: true,
                text: "Email"
            },
            {
                id: 3,
                selected: true,
                text: "Text Message"
            }
        ],
        industries: [],
        suppliers: [
            { id: 1, text: "TalentYeti"},
            { id: 2, text: "Modis"},
            { id: 3, text: "Interactive Resources"},
            { id: 4, text: "High5" }               
        ],
        supplierTiers: {
            releaseToPublic: true,
            tiers: [
                {
                    tier: 1,
                    suppliers: [
                        {tier: 1,id: 1, text: "TalentYeti",selected: true},
                        {tier: 1,id: 2, text: "Modis",selected: true },
                        {tier: 1,id: 4, text: "High5" }               
                    ],
                    duration: [
                        { id: 1, text: "1 hour",selected: true},
                        { id: 2, text: "4 hours"},
                        { id: 3, text: "8 hours"},
                        { id: 4, text: "1 day" },
                        { id: 5, text: "2 days" },
                        { id: 6, text: "5 days" },
                        { id: 7, text: "1 week" }                               
                    ]
                },
                {
                    tier: 2,
                    suppliers: [
                        {tier: 2,id: 3, text: "Interactive Resources", selected: true },
                        {tier: 2,id: 4, text: "High5" }               
                    ],
                    duration: [
                        { id: 1, text: "1 hour"},
                        { id: 2, text: "4 hours", selected: true},
                        { id: 3, text: "8 hours"},
                        { id: 4, text: "1 day" },
                        { id: 5, text: "2 days" },
                        { id: 6, text: "5 days" },
                        { id: 7, text: "1 week" }                               
                    ]
                }
            ]}
    },
    methods: {
    }
});