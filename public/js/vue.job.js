var requestApp = new Vue({
    el: '#RequestView',
        data: {
            jobTitle: "Java Developer",
            requestId: "1212321",
            jobType: "Full Time",
            startDate: "6/1/2021",
            location: "Jacksonville Fl USA",
            maxAnnualSalary: "85,000",
            submittedAllReviewed: false,
            isRemote: false,
            positionTotal: 4,
            collapsible: {
                stats: false,
                skills: false,
                description: false,
                education: false,
                certifications: false,
                industries: false,
                workHours: false,
                overtime: false,
                travel: false,
                drugTest: false,
                backgroundCheck: false,
                securityClearance: false,
                disqualifiedCandidates: true,
            },
            educations: ["High School Degree","Bachelors In Software Related Degrees"],
            certifications: ["Java Masters Course","Toast Masters","PMP"],
            industries: ["Aviation","Big Data"],
            workHours: "Flexible",
            overtime: false,
            travel: "15%",
            drugTest: true,
            backgroundCheck: true,
            secruityClearance: "confidential",
            skills: ["Java","Apache Tomcat","Hibernate","Spring MVC","Cassandra","Jenkins"],
            description: "<p>Doozer Software has been providing custom software development, database/BI consulting, and IT staffing services to companies for the past 23 years. Our IT staffing division is currently assisting one of our customers in a search for a Java Developer. These positions are 70-80% backend development and 20-30% front end development. The Java Developers will assist the team in the development and maintenance of line-of-business software applications and will work closely with Software Engineers and Architects in the development of system components. This is a full time position that comes with a suite of benefits. **This position will work remotely but in the future this position will require you to work onsite in Birmingham, Alabama or in Jacksonville, Florida. There is no sponsorship available for this position.</p><p><b>Position Responsibilities: </b></p><ul><li>Gathers and documents, understands and articulates functional, non-functional and business requirements that are already defined.</li><li>Assists with and demonstrated a growing proficiency in the design and development of simple software applications, model data relationships. Learns and uses software applications and infrastructure architecture.</li><li>Uses programming &amp; technical skills in various languages and products currently used by the company as specified for the position to develop of update programs.</li><li>Will work in the following environment: Java, Spring, Spring Boot, Hibernate, Restful APIs, SQL.</li><li>Will integrate with SOAP/Restful services</li></ul><ul><li>Learns to write unit tests and performs integration testing to ensure high application quality to meet business requirements.</li></ul><ul><li>Develops an understanding of various deployment methods, tools and writes scripts and/or procedures to ensure efficient processes.</li><li>Becomes familiar with systems, databases and networking. Develops an understanding of the interoperability of IT assets with custom software development.</li></ul><p><b>Position Qualifications: </b></p><ul><li>5+ years of experience in a position performing software development.</li></ul><ul><li>Java, Spring Boot experience required.</li><li>Experience with AngularJS / Angular is a plus.</li></ul><ul><li>Must have the ability to learn Object Oriented Concepts and the concepts of a Software Development Life Cycle.</li><li>Understands the process of new application development and has the ability to apply these concepts with minimal mentoring and supervision.</li></ul><ul><li>Must have the ability to learn to provide support &amp; maintenance for simple to complex software applications.</li></ul><p>Job Type: Full-time</p><p>Pay: $85,000.00 - $125,000.00 per year</p><p>Benefits:</p><ul><li>401(k)</li><li>401(k) matching</li><li>Disability insurance</li><li>Health insurance</li><li>Life insurance</li><li>Paid time off</li></ul><p>Schedule:</p><ul><li>Monday to Friday</li></ul><p>Experience:</p><ul><li>JavaScript OR Angular: 3 years (Required)</li><li>java: 3 years (Required)</li><li>Spring MVC or Spring Boot: 2 years (Preferred)</li></ul><p>Work authorization:</p><ul><li>United States (Required)</li></ul><p>Work Location:</p><ul><li>Multiple locations</li></ul><p>Visa Sponsorship Potentially Available:</p><ul><li>No: Not providing sponsorship for this job</li></ul><p>Company's website:</p><ul><li>www.doozer.com</li></ul><p>Work Remotely:</p><ul><li>Temporarily due to COVID-19</li></ul><p>COVID-19 Precaution(s):</p><ul><li>Remote interview process</li></ul>",
            infoTabs: {
                overview: true,
                details: false,
                activity: false,
                notes: false
            },
            candidateTabs: {
                automatched: true,
                sourced: false,
                submitted: false,
                shortlisted: false,
                interviewed: false,
                offered: false,
                hired: false
            },
            automatchedCandidates: [
                {
                    name: "Chris H.",
                    avatar: "<img class='avatar avatar-sm' src='https://uifaces.co/our-content/donated/gPZwCbdS.jpg'/>",
                    avatar2: "<span class='avatar avatar-sm'><img src='https://uifaces.co/our-content/donated/gPZwCbdS.jpg'/><span class='jewel'></span></span>",
                    avatarSm: "<img class='avatar avatar-sm' src='https://uifaces.co/our-content/donated/gPZwCbdS.jpg'/>",
                    avatarLg: "<img class='avatar avatar-lg' src='https://uifaces.co/our-content/donated/gPZwCbdS.jpg'/>",
                    status: "<span class='tag tag-blue3'>Pending RTR</span>",
                    location: "Jacksonville Fl.",
                    isPending: true,
                    updatedOn: "2 days ago",
                    expiresOn: "4 days left",
                    video1way: true,
                    video2way: true,
                    videomcq: true,
                    resumedoc: true,
                    resumevideo: true,
                    isAutomatched: true,
                    isReviewed: false,
                    isPending: false,
                    isSubmitted: false,
                    isShortlisted: false,
                    isInterviewed: false,
                    isHired: false,
                    isOfffered: false,
                    isDisqualified: false,
                    history: [
                        {
                            timestamp: '5 days ago',
                            description: 'RTR Request Sent'
                        },
                        {
                            timestamp: '6 days ago',
                            description: 'Automatched'
                        }
                    ]
                }
            ],
            sourcedCandidates: [
                {
                    name: "John D.",
                    avatar2: "<span class='avatar avatar-green1 avatar-sm'>JD<span class='jewel'></span></span>",
                    avatar: "<span class='avatar avatar-green1 avatar-sm'>JD</span>",
                    avatarLg: "<span class='avatar avatar-green1 avatar-lg'>JD</span>",
                    supplier: "TalentLyft",
                    location: "Jacksonville Fl",
                    salary: "$80,000",
                    supplierAvatar: "<img class='avatar avatar-sm' src='https://logo.clearbit.com/talentlyft.com'/>",
                    video1way: true,
                    video2way: true,
                    videomcq: true,
                    resumedoc: true,
                    resumevideo: true,
                    updatedOn: "1 day ago",
                    isReviewed: true,
                    status: "<span class='tag'>Submitted</span>",
                    isSourced: true,
                    isPending: false,
                    isSubmitted: false,
                    isShortlisted: false,
                    isInterviewed: false,
                    isHired: false,
                    isOfffered: false,
                    isDisqualified: false,
                    isPastRTR: true,
                    isVetted: true,
                    history: [
                    {
                            timestamp: '1 day ago',
                            description: 'Submitted'
                        },
                        {
                            timestamp: '1 day ago',
                            description: 'RTR Accepted'
                        },
                        {
                            timestamp: '1 day ago',
                            description: 'Pending RTR'
                        },
                        {
                            timestamp: '2 days ago',
                            description: 'Automatched'
                        }
                    ]
                },
                {
                    name: "Quin F.",
                    avatar2: "<span class='avatar avatar-purple1 avatar-sm'>QF <span class='jewel'></span></span>",
                    avatar: "<span class='avatar avatar-purple1 avatar-sm'>QF</span>",
                    avatarLg: "<span class='avatar avatar-purple1 avatar-lg'>QF</span>",
                    supplier: "Recruiterbox",
                    location: "Jacksonville Fl",
                    salary: "$80,000",
                    supplierAvatar: "<img class='avatar avatar-sm' src='https://logo.clearbit.com/recruiterbox.com'/>",
                    video1way: false,
                    video2way: true,
                    videomcq: false,
                    resumedoc: true,
                    resumevideo: false,
                    updatedOn: "3 days ago",
                    isReviewed: true,
                    status: "<span class='tag'>Submitted</span>",
                    isPending: false,
                    isSubmitted: true,
                    isShortlisted: false,
                    isInterviewed: false,
                    isHired: false,
                    isOfffered: false,
                    isDisqualified: false,
                    isPastRTR: true,
                    isVetted: true,
                    history: [
                    {
                            timestamp: '3 days ago',
                            description: 'Submitted'
                        },
                        {
                            timestamp: '3 days ago',
                            description: 'RTR Accepted'
                        },
                        {
                            timestamp: '4 days ago',
                            description: 'Pending RTR'
                        },
                        {
                            timestamp: '5 dayss ago',
                            description: 'Automatched'
                        }
                    ]
                },
                {
                    name: "Shashi D.",
                    avatar: "<img class='avatar avatar-sm' src='https://uifaces.co/our-content/donated/VxDQx_gA.jpg'/>",
                    avatarLg: "<img class='avatar avatar-lg' src='https://uifaces.co/our-content/donated/VxDQx_gA.jpg'/>",
                    supplier: "Andy Y.",
                    location: "Jacksonville Fl",
                    salary: "$80,000",
                    supplierAvatar: "<span class='avatar avatar-orange1 avatar-sm'>AY</span>",
                    video1way: true,
                    video2way: false,
                    videomcq: false,
                    resumedoc: true,
                    resumevideo: true,
                    updatedOn: "5 days ago",
                    isReviewed: true,
                    status: "<span class='tag'>Submitted</span>",
                    isPending: false,
                    isSubmitted: true,
                    isShortlisted: false,
                    isInterviewed: false,
                    isHired: false,
                    isOfffered: false,
                    isDisqualified: false,
                    isPastRTR: true,
                    isVetted: false,
                    history: [
                    {
                            timestamp: '5 days ago',
                            description: 'Submitted'
                        },
                        {
                            timestamp: '6 days ago',
                            description: 'RTR Accepted'
                        },
                        {
                            timestamp: '6 days ago',
                            description: 'Pending RTR'
                        },
                        {
                            timestamp: '7 days ago',
                            description: 'Automatched'
                        }
                    ]
                }
            ],
            submittedCandidates: [
                {
                    name: "John D.",
                    avatar2: "<span class='avatar avatar-green1 avatar-sm'>JD<span class='jewel'></span></span>",
                    avatar: "<span class='avatar avatar-green1 avatar-sm'>JD</span>",
                    avatarLg: "<span class='avatar avatar-green1 avatar-lg'>JD</span>",
                    supplier: "TalentLyft",
                    location: "Jacksonville Fl",
                    salary: "$80,000",
                    supplierAvatar: "<img class='avatar avatar-sm' src='https://logo.clearbit.com/talentlyft.com'/>",
                    video1way: true,
                    video2way: true,
                    videomcq: true,
                    resumedoc: true,
                    resumevideo: true,
                    updatedOn: "1 day ago",
                    isReviewed: true,
                    status: "<span class='tag'>Submitted</span>",
                    isPending: false,
                    isSubmitted: true,
                    isShortlisted: false,
                    isInterviewed: false,
                    isHired: false,
                    isOfffered: false,
                    isDisqualified: false,
                    isPastRTR: true,
                    isVetted: true,
                    history: [
                    {
                            timestamp: '1 day ago',
                            description: 'Submitted'
                        },
                        {
                            timestamp: '1 day ago',
                            description: 'RTR Accepted'
                        },
                        {
                            timestamp: '1 day ago',
                            description: 'Pending RTR'
                        },
                        {
                            timestamp: '2 days ago',
                            description: 'Automatched'
                        }
                    ]
                },
                {
                    name: "Quin F.",
                    avatar2: "<span class='avatar avatar-purple1 avatar-sm'>QF <span class='jewel'></span></span>",
                    avatar: "<span class='avatar avatar-purple1 avatar-sm'>QF</span>",
                    avatarLg: "<span class='avatar avatar-purple1 avatar-lg'>QF</span>",
                    supplier: "Recruiterbox",
                    location: "Jacksonville Fl",
                    salary: "$80,000",
                    supplierAvatar: "<img class='avatar avatar-sm' src='https://logo.clearbit.com/recruiterbox.com'/>",
                    video1way: false,
                    video2way: true,
                    videomcq: false,
                    resumedoc: true,
                    resumevideo: false,
                    updatedOn: "3 days ago",
                    isReviewed: true,
                    status: "<span class='tag'>Submitted</span>",
                    isPending: false,
                    isSubmitted: true,
                    isShortlisted: false,
                    isInterviewed: false,
                    isHired: false,
                    isOfffered: false,
                    isDisqualified: false,
                    isPastRTR: true,
                    isVetted: true,
                    history: [
                    {
                            timestamp: '3 days ago',
                            description: 'Submitted'
                        },
                        {
                            timestamp: '3 days ago',
                            description: 'RTR Accepted'
                        },
                        {
                            timestamp: '4 days ago',
                            description: 'Pending RTR'
                        },
                        {
                            timestamp: '5 dayss ago',
                            description: 'Automatched'
                        }
                    ]
                },
                {
                    name: "Shashi D.",
                    avatar: "<img class='avatar avatar-sm' src='https://uifaces.co/our-content/donated/VxDQx_gA.jpg'/>",
                    avatarLg: "<img class='avatar avatar-lg' src='https://uifaces.co/our-content/donated/VxDQx_gA.jpg'/>",
                    supplier: "Andy Y.",
                    location: "Jacksonville Fl",
                    salary: "$80,000",
                    supplierAvatar: "<span class='avatar avatar-orange1 avatar-sm'>AY</span>",
                    video1way: true,
                    video2way: false,
                    videomcq: false,
                    resumedoc: true,
                    resumevideo: true,
                    updatedOn: "5 days ago",
                    isReviewed: true,
                    status: "<span class='tag'>Submitted</span>",
                    isPending: false,
                    isSubmitted: true,
                    isShortlisted: false,
                    isInterviewed: false,
                    isHired: false,
                    isOfffered: false,
                    isDisqualified: false,
                    isPastRTR: true,
                    isVetted: false,
                    history: [
                    {
                            timestamp: '5 days ago',
                            description: 'Submitted'
                        },
                        {
                            timestamp: '6 days ago',
                            description: 'RTR Accepted'
                        },
                        {
                            timestamp: '6 days ago',
                            description: 'Pending RTR'
                        },
                        {
                            timestamp: '7 days ago',
                            description: 'Automatched'
                        }
                    ]
                }
            ],
            shortListedCandidates: [
                {
                    name: "Robert T.",
                    avatar: "<span class='avatar avatar-blue3 avatar-sm'>RT</span>",
                    avatarLg: "<span class='avatar avatar-blue3 avatar-lg'>RT</span>",
                    supplier: "Andy Y.",
                    location: "Jacksonville Fl",
                    salary: "$80,000",
                    supplierAvatar: "<span class='avatar avatar-orange1  avatar-sm'>AY</span>",
                    video1way: true,
                    video2way: true,
                    videomcq: true,
                    resumedoc: true,
                    resumevideo: true,
                    updatedOn: "1 day ago",
                    isReviewed: true,
                    status: "<span class='tag'>Shortlisted</span>",
                    isPending: false,
                    isSubmitted: false,
                    isShortlisted: true,
                    isInterviewed: false,
                    isHired: false,
                    isOfffered: false,
                    isDisqualified: false,
                    isPastRTR: true,
                    isVetted: false,
                    interviews: [
                        {
                            date: "3/8/2021",
                            title: "Scheduled For 2/4/2021",
                            isCompleted: false,
                            isMCQ: true,
                            is2Way: false,
                            isF2F: false,
                            isTelephone: false,
                            isExpert: true,
                            isHM: false,
                            isGroup: false
                        },
                        {
                            date: "1/20/2021",
                            title: "Interviewed On 1/20/201",
                            isCompleted: true,
                            isMCQ: false,
                            is2Way: true,
                            isF2F: false,
                            isTelephone: false,
                            isExpert: false,
                            isHM: true,
                            isGroup: false,
                            comments: [
                                {
                                    author: "Garrett M.",
                                    message: "Good Introduction, recommending an MCQ"
                                }
                            ]
                        }
                    ],
                    history: [
                        {
                            timestamp: '1 day ago',
                            description: 'Group Interview Scheduled',
                            comments: [
                                {
                                    author: "System Generated",
                                    message: "Group interview scheduleded for 3/8/2021<br/>attendees include <ul class='ml-3'><li>Michelle M.</li><li>Bot T.</li><li>Forza V.</li></ul>"
                                }
                            ]
                        },
                        {
                            timestamp: '1 day ago',
                            description: 'Video Interview',
                            comments: [
                                {
                                    author: "Robert T.",
                                    message: "First interview went well, recommending group interview"
                                }
                            ]
                        },
                        {
                            timestamp: '3 day ago',
                            description: 'ShortListed',
                            comments: [
                                {
                                    author: "System Generated",
                                    message: "Video interview scheduleded for 3/5/2021"
                                }
                            ]
                        },
                        {
                            timestamp: '4 day ago',
                            description: 'Submitted'
                        },
                        {
                            timestamp: '4 days ago',
                            description: 'RTR Accepted'
                        },
                        {
                            timestamp: '5 days ago',
                            description: 'Pending RTR'
                        },
                        {
                            timestamp: '5 days ago',
                            description: 'Automatched'
                        }
                    ]
                }
            ],
            interviewedCandidates: [
                {
                    name: "Jovie B.",
                    avatar: "<img class='avatar avatar-sm' src='https://randomuser.me/api/portraits/women/89.jpg'/>",
                    avatarLg: "<img class='avatar avatar-lg' src='https://randomuser.me/api/portraits/women/89.jpg'/>",
                    supplier: "Andy Y.",
                    supplierAvatar: "<span class='avatar avatar-orange1  avatar-sm'>AY</span>",
                    location: "Jacksonville Fl",
                    salary: "$80,000",
                    updatedOn: "2 days ago",
                    video1way: true,
                    video2way: true,
                    videomcq: false,
                    resumedoc: true,
                    resumevideo: false,
                    isReviewed: true,
                    status: "<span class='tag'>Interviewed</span>",
                    isPending: false,
                    isSubmitted: false,
                    isShortlisted: false,
                    isInterviewed: true,
                    isHired: false,
                    isOfffered: false,
                    isDisqualified: false,
                    interviewCnt: 3,
                    isPastRTR: true,
                    isVetted: true,
                    interviews: [
                        {
                            date: "2/20/2021",
                            title: "Interviewed On 1/20/201",
                            isCompleted: true,
                            isMCQ: false,
                            is2Way: false,
                            isF2F: true,
                            isTelephone: false,
                            isExpert: false,
                            isHM: false,
                            isGroup: true,
                            interviewers: ["dan@company.com","sarah@company.com"],
                            comments: [
                                {
                                    author: "Dan G.",
                                    message: "Good fit, move to next steps"
                                },
                                {
                                    author: "Sarah S.",
                                    message: "Excellent Candidate"
                                }
                            ]
                        },
                        {
                            date: "1/14/2021",
                            title: "Interviewed On 2/4/2021",
                            isCompleted: true,
                            isMCQ: true,
                            is2Way: false,
                            isF2F: false,
                            isTelephone: false,
                            isExpert: true,
                            isHM: false,
                            isGroup: false
                        },
                        {
                            date: "1/8/2021",
                            title: "Interviewed On 2/8/2021",
                            isCompleted: true,
                            isMCQ: false,
                            is2Way: false,
                            isF2F: false,
                            isTelephone: true,
                            isExpert: false,
                            isHM: true,
                            isGroup: false,
                            comments: [
                                {
                                    author: "Garrett M.",
                                    message: "Would like to move forward with an MCQ"
                                }
                            ]
                        }
                    ],
                    history: [
                        {
                            timestamp: '1 day ago',
                            description: 'Video Interview',
                            comments: [
                                {
                                    author: "Garrett M.",
                                    message: "Candidate is a good cultural fit"
                                },
                                {
                                    author: "Carrie M.",
                                    message: "I think this candidate will do very well here"
                                }
                            ]
                        },
                        {
                            timestamp: '3 day ago',
                            description: 'Video Interview Scheduled',
                            comments: [
                                {
                                    author: "System Generated",
                                    message: "Group interview scheduleded for 3/8/2021<br/>attendees include <ul class='ml-3'><li>Garrett M.</li><li>Carrie M.</li></ul>"
                                }
                            ]
                        },
                        {
                            timestamp: '3 day ago',
                            description: 'Video Interview',
                            comments: [
                                {
                                    author: "Michelle M.",
                                    message: "Candidate is a good cultural fit"
                                },
                                {
                                    author: "Bob T.",
                                    message: "I think this candidate will do very well here"
                                },
                                {
                                    author: "Forza V.",
                                    message: "After some training should be a great fit would like to bring in a final interivew"
                                }
                            ]
                        },
                        {
                            timestamp: '4 day ago',
                            description: 'Video Interview Scheduled',
                            comments: [
                                {
                                    author: "System Generated",
                                    message: "Group interview scheduleded for 3/8/2021<br/>attendees include <ul class='ml-3'><li>Michelle M.</li><li>Bot T.</li><li>Forza V.</li></ul>"
                                }
                            ]
                        },
                        {
                            timestamp: '4 day ago',
                            description: 'Video Interview',
                            comments: [
                                {
                                    author: "Robert T.",
                                    message: "First interview went well, recommending group interview"
                                }
                            ]
                        },
                        {
                            timestamp: '5 day ago',
                            description: 'ShortListed',
                            comments: [
                                {
                                    author: "System Generated",
                                    message: "Video interview scheduleded for 3/5/2021"
                                }
                            ]
                        },
                        {
                            timestamp: '6 days ago',
                            description: 'Submitted'
                        },
                        {
                            timestamp: '6 days ago',
                            description: 'RTR Accepted'
                        },
                        {
                            timestamp: '7 days ago',
                            description: 'Pending RTR'
                        },
                        {
                            timestamp: '7 days ago',
                            description: 'Automatched'
                        }
                    ]
                }
            ],
            hiredCandidates: [
                {
                    name: "Tamir T.",
                    avatar: "<img class='avatar avatar-sm' src='https://randomuser.me/api/portraits/men/49.jpg'/>",
                    supplier: "Andy Y.",
                    supplierAvatar: "<span class='avatar avatar-orange1  avatar-sm'>AY</span>",
                    status: "<span class='tag tag-green1'>Hired</span>",
                    updatedOn: "2 days ago",
                    video1way: true,
                    video2way: true,
                    videomcq: false,
                    resumedoc: true,
                    resumevideo: false,
                    isReviewed: true,
                    isPending: false,
                    isSubmitted: false,
                    isShortlisted: false,
                    isInterviewed: false,
                    isHired: true,
                    isOfffered: false,
                    isDisqualified: false,
                    interviewCnt: 3,
                    isVetted: true,
                    interviews: [
                        {
                            date: "2/8/2021",
                            title: "Interviewed On 2/8/2021",
                            isCompleted: true,
                            isMCQ: false,
                            is2Way: false,
                            isF2F: false,
                            isTelephone: true,
                            isExpert: false,
                            isHM: true,
                            isGroup: false,
                            comments: [
                                {
                                    author: "Garrett M.",
                                    message: "Would like to move forward with an MCQ"
                                }
                            ]
                        }
                    ],
                    history: [
                        {
                            timestamp: '1 day ago',
                            description: 'Hired',
                            comments: [
                                {
                                    author: "System Generated",
                                    message: "<a href='#'>Download Start Details</a>"
                                }
                            ]
                        },
                        {
                            timestamp: '2 day ago',
                            description: 'Offer Accepted',
                            comments: [
                                {
                                    author: "System Generated",
                                    message: "<a href='#'>Download confirmation</a>"
                                }
                            ]
                        },
                        {
                            timestamp: '2 day ago',
                            description: 'Offered',
                            comments: [
                                {
                                    author: "System Generated",
                                    message: "<a href='#'>Download the offer details</a>"
                                }
                            ]
                        },
                        {
                            timestamp: '4 day ago',
                            description: 'Video Interview',
                            comments: [
                                {
                                    author: "Robert T.",
                                    message: "Great fit, making an offer"
                                }
                            ]
                        },
                        {
                            timestamp: '5 day ago',
                            description: 'ShortListed',
                            comments: [
                                {
                                    author: "System Generated",
                                    message: "Video interview scheduleded for 3/5/2021"
                                }
                            ]
                        },
                        {
                            timestamp: '6 days ago',
                            description: 'Submitted'
                        },
                        {
                            timestamp: '6 days ago',
                            description: 'RTR Accepted'
                        },
                        {
                            timestamp: '7 days ago',
                            description: 'Pending RTR'
                        },
                        {
                            timestamp: '7 days ago',
                            description: 'Automatched'
                        }
                    ]
                },
                {
                    name: "Joanna D.",
                    avatar: "<img class='avatar avatar-sm' src='https://randomuser.me/api/portraits/women/63.jpg'/>",
                    supplier: "Andy Y.",
                    supplierAvatar: "<span class='avatar avatar-orange1  avatar-sm'>AY</span>",
                    status: "<span class='tag tag-green1'>Hired</span>",
                    updatedOn: "3 dayss ago",
                    video1way: true,
                    video2way: true,
                    videomcq: false,
                    resumedoc: true,
                    resumevideo: false,
                    isReviewed: true,
                    isPending: false,
                    isSubmitted: false,
                    isShortlisted: false,
                    isInterviewed: false,
                    isHired: true,
                    isOfffered: false,
                    isDisqualified: false,
                    interviewCnt: 3,
                    isPastRTR: true,
                    isVetted: false,
                    interviews: [
                        {
                            date: "2/14/2021",
                            title: "Interviewed On 2/4/2021",
                            isCompleted: true,
                            isMCQ: true,
                            is2Way: false,
                            isF2F: false,
                            isTelephone: false,
                            isExpert: true,
                            isHM: false,
                            isGroup: false
                        },
                        {
                            date: "2/8/2021",
                            title: "Interviewed On 2/8/2021",
                            isCompleted: true,
                            isMCQ: false,
                            is2Way: false,
                            isF2F: false,
                            isTelephone: true,
                            isExpert: false,
                            isHM: true,
                            isGroup: false,
                            comments: [
                                {
                                    author: "Garrett M.",
                                    message: "Would like to move forward with an MCQ"
                                }
                            ]
                        }
                    ],
                    history: [
                        {
                            timestamp: '1 day ago',
                            description: 'Hired',
                            comments: [
                                {
                                    author: "System Generated",
                                    message: "<a href='#'>Download Start Details</a>"
                                }
                            ]
                        },
                        {
                            timestamp: '2 day ago',
                            description: 'Offer Accepted',
                            comments: [
                                {
                                    author: "System Generated",
                                    message: "<a href='#'>Download confirmation</a>"
                                }
                            ]
                        },
                        {
                            timestamp: '2 day ago',
                            description: 'Offered',
                            comments: [
                                {
                                    author: "System Generated",
                                    message: "<a href='#'>Download the offer details</a>"
                                }
                            ]
                        },
                        {
                            timestamp: '4 day ago',
                            description: 'Video Interview',
                            comments: [
                                {
                                    author: "Robert T.",
                                    message: "Great fit, making an offer"
                                }
                            ]
                        },
                        {
                            timestamp: '5 day ago',
                            description: 'ShortListed',
                            comments: [
                                {
                                    author: "System Generated",
                                    message: "Video interview scheduleded for 3/5/2021"
                                }
                            ]
                        },
                        {
                            timestamp: '6 days ago',
                            description: 'Submitted'
                        },
                        {
                            timestamp: '6 days ago',
                            description: 'RTR Accepted'
                        },
                        {
                            timestamp: '7 days ago',
                            description: 'Pending RTR'
                        },
                        {
                            timestamp: '7 days ago',
                            description: 'Automatched'
                        }
                    ]
                }
            ],
            disqualifiedCandidates: [
                {
                    name: "Carrie M.",
                    avatar2: "<img class='avatar avatar-sm' src='https://randomuser.me/api/portraits/women/75.jpg'/>",
                    avatarLg: "<img class='avatar avatar-lg' src='https://randomuser.me/api/portraits/women/75.jpg'/>",
                    avatar: "<img class='avatar avatar-sm' src='https://randomuser.me/api/portraits/women/75.jpg'/>",
                    supplier: "Barry G.",
                    location: "Jacksonville Fl",
                    salary: "$80,000",
                    supplierAvatar: "<span class='avatar avatar-blue1 avatar-sm'>BG</span>",
                    status: "<span class='tag tag-red1'>Disqualified</span>",
                    updatedOn: "5 days ago",
                    video1way: true,
                    video2way: true,
                    videomcq: false,
                    resumedoc: true,
                    resumevideo: false,
                    isPending: false,
                    isSubmitted: false,
                    isShortlisted: false,
                    isInterviewed: false,
                    isHired: false,
                    isOfffered: false,
                    isDisqualified: true,
                    reason: "Offer Declined",
                    isPastRTR: true,
                    isVetted: true,
                    interviews: [
                        {
                            date: "2/20/2021",
                            title: "Interviewed On 1/20/201",
                            isCompleted: true,
                            isMCQ: false,
                            is2Way: false,
                            isF2F: true,
                            isTelephone: false,
                            isExpert: false,
                            isHM: false,
                            isGroup: true,
                            interviewers: ["dan@company.com","sarah@company.com"],
                            comments: [
                                {
                                    author: "Dan G.",
                                    message: "Good fit, move to next steps"
                                },
                                {
                                    author: "Sarah S.",
                                    message: "Excellent Candidate"
                                }
                            ]
                        },
                        {
                            date: "1/14/2021",
                            title: "Interviewed On 2/4/2021",
                            isCompleted: true,
                            isMCQ: true,
                            is2Way: false,
                            isF2F: false,
                            isTelephone: false,
                            isExpert: true,
                            isHM: false,
                            isGroup: false
                        },
                        {
                            date: "1/8/2021",
                            title: "Interviewed On 2/8/2021",
                            isCompleted: true,
                            isMCQ: false,
                            is2Way: false,
                            isF2F: false,
                            isTelephone: true,
                            isExpert: false,
                            isHM: true,
                            isGroup: false,
                            comments: [
                                {
                                    author: "Garrett M.",
                                    message: "Would like to move forward with an MCQ"
                                }
                            ]
                        }
                    ],
                    history: [
                        {
                            timestamp: '20 min ago',
                            description: 'Offer Declined',
                            comments: [
                                {
                                    author: "Barry G",
                                    message: "We will continue our search and choose not to make a counter offer"
                                },
                                {
                                    author: "Carrie M",
                                    message: "Thank you for your interest but at this time I think I will continue looking in the market"
                                },
                                {
                                    author: "System Generated",
                                    message: "The offer was declined by the candidate"
                                },
                            ]
                        },
                        {
                            timestamp: '1 day ago',
                            description: 'Offered',
                            comments: [
                                {
                                    author: "System Generated",
                                    message: "<a href='#'>Download the offer details</a>"
                                }
                            ]
                        },
                        {
                            timestamp: '1 days ago',
                            description: 'Group Interivew',
                            comments: [
                                {
                                    author: "Michelle M.",
                                    message: "Candidate is a good cultural fit"
                                },
                                {
                                    author: "Bob T.",
                                    message: "I think this candidate will do very well here"
                                },
                                {
                                    author: "Forza V.",
                                    message: "After some training should be a great fit"
                                }
                            ]
                        },
                        {
                            timestamp: '5 days ago',
                            description: 'Group Interview Scheduled',
                            comments: [
                                {
                                    author: "System Generated",
                                    message: "Group interview scheduleded for 3/8/2021<br/>attendees include <ul class='ml-3'><li>Michelle M.</li><li>Bot T.</li><li>Forza V.</li></ul>"
                                }
                            ]
                        },
                        {
                            timestamp: '2 days ago',
                            description: 'Video Interview',
                            comments: [
                                {
                                    author: "High5 Expert",
                                    message: "Candidate was able to correctly answer 20/22 questions and seems to be a good fit for the role.  Am recommending to move forward"
                                }
                            ]
                        },
                        {
                            timestamp: '5 days ago',
                            description: 'Interview Scheduled',
                            comments: [
                                {
                                    author: "System Generated",
                                    message: "Video interview scheduleded for 3/7/2021"
                                }
                            ]
                        },
                        {
                            timestamp: '3 days ago',
                            description: 'Phone Interview',
                            comments: [
                                {
                                    author: "Garrett M",
                                    message: "Candidate was very knolwedgable on the phone interview would like to schedule a second interview"
                                }
                            ]
                        },
                        {
                            timestamp: '5 days ago',
                            description: 'ShortListed',
                            comments: [
                                {
                                    author: "System Generated",
                                    message: "Phone interview scheduled for 3/5/2021"
                                }
                            ]
                        },
                        {
                            timestamp: '5 days ago',
                            description: 'Submitted'
                        },
                        {
                            timestamp: '5 days ago',
                            description: 'RTR Accepted'
                        },
                        {
                            timestamp: '6 days ago',
                            description: 'Pending RTR'
                        },
                        {
                            timestamp: '6 dayss ago',
                            description: 'Automatched'
                        }
                    ]
                },
                {
                    name: "Allen P.",
                    avatar2: "<span class='avatar avatar-blue2 avatar-sm'>AP</span>",
                    avatarLg: "<span class='avatar avatar-lg avatar-blue2 avatar-sm'>AP</span>",
                    avatar: "<span class='avatar avatar-blue2 avatar-sm'>AP</span>",
                    supplier: "Andy Y.",
                    location: "Jacksonville Fl",
                    salary: "$80,000",
                    supplierAvatar: "<span class='avatar avatar-orange1  avatar-sm'>AY</span>",
                    status: "<span class='tag tag-red1'>Disqualified</span>",
                    updatedOn: "5 days ago",
                    video1way: true,
                    video2way: true,
                    videomcq: false,
                    resumedoc: true,
                    resumevideo: false,
                    isPending: false,
                    isSubmitted: false,
                    isShortlisted: false,
                    isInterviewed: false,
                    isHired: false,
                    isOfffered: false,
                    isDisqualified: true,
                    reason: "Failed Interview",
                    isPastRTR: true,
                    isVetted: false,
                    interviews: [
                        {
                            date: "1/20/2021",
                            title: "Interviewed On 1/20/201",
                            isCompleted: true,
                            isMCQ: false,
                            is2Way: false,
                            isF2F: true,
                            isTelephone: false,
                            isExpert: false,
                            isHM: false,
                            isGroup: true,
                            interviewers: ["dan@company.com","sarah@company.com"],
                            comments: [
                                {
                                    author: "Dan G.",
                                    message: "Good fit, move to next steps"
                                },
                                {
                                    author: "Sarah S.",
                                    message: "Excellent Candidate"
                                }
                            ]
                        }
                    ],
                    history: [
                        {
                            timestamp: '1 day ago',
                            description: 'Disqualified',
                            comments: [
                                {
                                    author: "Garrett M. ",
                                    message: "Candidate did not pass the phone interview intro questions"
                                }
                            ]
                        },
                        {
                            timestamp: '3 days ago',
                            description: 'Phone Interview',
                            comments: [
                                {
                                    author: "Garrett M.",
                                    message: "Candidate claimed to be very knowledgeable but struggled in the competency questions"
                                }
                            ]
                        },
                        {
                            timestamp: '5 days ago',
                            description: 'ShortListed',
                            comments: [
                                {
                                    author: "System Generated",
                                    message: "Phone interview scheduleded for 3/5/2021"
                                }
                            ]
                        },
                        {
                            timestamp: '5 days ago',
                            description: 'Submitted'
                        },
                        {
                            timestamp: '5 days ago',
                            description: 'RTR Accepted'
                        },
                        {
                            timestamp: '6 days ago',
                            description: 'Pending RTR'
                        },
                        {
                            timestamp: '6 dayss ago',
                            description: 'Automatched'
                        }
                    ]
                },
                {
                    name: "Private",
                    avatar: "<img class='avatar avatar-sm' src='/images/high5-mark-circle.svg'/>",
                    supplier: "Andy Y.",
                    supplierAvatar: "<span class='avatar avatar-orange1  avatar-sm'>AY</span>",
                    status: "<span class='tag tag-red1'>Disqualified</span>",
                    updatedOn: "5 days ago",
                    video1way: false,
                    video2way: false,
                    videomcq: false,
                    resumedoc: false,
                    resumevideo: false,
                    isPending: false,
                    isSubmitted: false,
                    isShortlisted: false,
                    isInterviewed: false,
                    isHired: false,
                    isOfffered: false,
                    isDisqualified: true,
                    reason: "RTR Expired",
                    isPastRTR: false,
                    history: [
                        {
                            timestamp: '1 day ago',
                            description: 'Disqualified',
                            comments: [
                                {
                                    author: "System Generated ",
                                    message: "RTR Expired"
                                }
                            ]
                        },
                        {
                            timestamp: '6 days ago',
                            description: 'Pending RTR'
                        },
                        {
                            timestamp: '6 dayss ago',
                            description: 'Automatched'
                        }
                    ]
                },
                {
                    name: "Private",
                    avatar: "<img class='avatar avatar-sm' src='/images/high5-mark-circle.svg'/>",
                    supplier: "Jamie S.",
                    supplierAvatar: "<img class='avatar avatar-sm' src='https://uifaces.co/our-content/donated/AW-rdWlG.jpg'/>",
                    status: "<span class='tag tag-red1'>Disqualified</span>",
                    updatedOn: "5 days ago",
                    video1way: false,
                    video2way: false,
                    videomcq: false,
                    resumedoc: false,
                    resumevideo: false,
                    isPending: false,
                    isSubmitted: false,
                    isShortlisted: false,
                    isInterviewed: false,
                    isHired: false,
                    isOfffered: false,
                    isDisqualified: true,
                    isPastRTR: false,                  
                    reason: "RTR Rejected",
                    history: [
                        {
                            timestamp: '1 day ago',
                            description: 'Disqualified',
                            comments: [
                                {
                                    author: "System Generated ",
                                    message: "RTR Rejected"
                                }
                            ]
                        },
                        {
                            timestamp: '6 days ago',
                            description: 'Pending RTR'
                        },
                        {
                            timestamp: '6 dayss ago',
                            description: 'Automatched'
                        }
                    ]
                }
            ],
            offeredCandidates: [
                {
                    name: "Bill B.",
                    avatar: "<span class='avatar avatar-orange2 avatar-sm'>BB</span>",
                    supplier: "Andy Y.",
                    supplierAvatar: "<span class='avatar avatar-orange1  avatar-sm'>AY</span>",
                    status: "<span class='tag tag-green2'>Offered</span>",
                    updatedOn: "5 days ago",
                    video1way: true,
                    video2way: false,
                    videomcq: false,
                    resumedoc: true,
                    resumevideo: false,
                    isPending: false,
                    isSubmitted: false,
                    isShortlisted: false,
                    isInterviewed: false,
                    isHired: false,
                    isOffered: true,
                    isDisqualified: false,
                    offerStatus: "<span class='tag tag-orange1'>Offer Pending</span>",
                    interviewCnt: 3,
                    isPastRTR:true,
                    isVetted: true,
                    interviews: [
                        {
                            date: "2/1/2021",
                            title: "Interviewed On 1/20/201",
                            isCompleted: true,
                            isMCQ: false,
                            is2Way: false,
                            isF2F: true,
                            isTelephone: false,
                            isExpert: false,
                            isHM: false,
                            isGroup: true,
                            interviewers: ["dan@company.com","sarah@company.com"],
                            comments: [
                                {
                                    author: "Dan G.",
                                    message: "Good fit, move to next steps"
                                },
                                {
                                    author: "Sarah S.",
                                    message: "Excellent Candidate"
                                }
                            ]
                        },
                        {
                            date: "1/14/2021",
                            title: "Interviewed On 2/4/2021",
                            isCompleted: true,
                            isMCQ: true,
                            is2Way: false,
                            isF2F: false,
                            isTelephone: false,
                            isExpert: true,
                            isHM: false,
                            isGroup: false
                        },
                        {
                            date: "1/8/2021",
                            title: "Interviewed On 2/8/2021",
                            isCompleted: true,
                            isMCQ: false,
                            is2Way: false,
                            isF2F: false,
                            isTelephone: true,
                            isExpert: false,
                            isHM: true,
                            isGroup: false,
                            comments: [
                                {
                                    author: "Garrett M.",
                                    message: "Would like to move forward with an MCQ"
                                }
                            ]
                        }
                    ],
                    history: [
                        {
                            timestamp: '1 day ago',
                            description: 'Offered',
                            comments: [
                                {
                                    author: "System Generated",
                                    message: "<a href='#'>Download the offer details</a>"
                                }
                            ]
                        },
                        {
                            timestamp: '4 day ago',
                            description: 'Video Interview',
                            comments: [
                                {
                                    author: "Robert T.",
                                    message: "Great fit, making an offer"
                                }
                            ]
                        },
                        {
                            timestamp: '5 day ago',
                            description: 'ShortListed',
                            comments: [
                                {
                                    author: "System Generated",
                                    message: "Video interview scheduleded for 3/5/2021"
                                }
                            ]
                        },
                        {
                            timestamp: '6 days ago',
                            description: 'Submitted'
                        },
                        {
                            timestamp: '6 days ago',
                            description: 'RTR Accepted'
                        },
                        {
                            timestamp: '7 days ago',
                            description: 'Pending RTR'
                        },
                        {
                            timestamp: '7 days ago',
                            description: 'Automatched'
                        }
                    ]
                }
            ]
        },
        mounted: function(){
            this.initTooltips();
        },
        updated: function(){
            this.initTooltips();
        },
        computed: {
            getAutomatchedCandidatesLength: function () {
                return this.automatchedCandidates.length;
            },
            getSourcedCandidatesLength: function () {
                return this.sourcedCandidates.length;
            },
            getSubmittedCandidatesLength: function () {
                return this.submittedCandidates.length;
            },
            getShortListedCandidatesLength: function () {
                return this.shortListedCandidates.length;
            },
            getInterviewedCandidatesLength: function () {
                return this.interviewedCandidates.length;
            },
            getHiredCandidatesLength: function () {
                return this.hiredCandidates.length;
            },
            getHiredDisqualifedCandidatesLength: function () {
                return this.disqualifiedCandidates.length;
            },
            getOfferedCandidatesLength: function () {
                return this.offeredCandidates.length;
            },
            getAllActiveCandidatesLength: function(){
                return this.getAutomatchedCandidatesLength + this.getSourcedCandidatesLength + this.getSubmittedCandidatesLength + this.getShortListedCandidatesLength + this.getInterviewedCandidatesLength + this.getHiredCandidatesLength;
            }
        },
        methods: {
            resendRTR: function(candidate){
                var ComponentClass = Vue.extend(modalComponent);
                var modal = new ComponentClass();
    
                candidate.candidateName = candidate.name;
    
                modal.title = "Resend RTR";
                modal.icon = `<div class="text-center">`+candidate.avatarLg+`</div>`;
                modal.body = `
                <div class="text-center">
                    <h6 class='mt-3'>`+candidate.name+`</h6>
                    <h6><small>For: `+this.jobTitle+`</small></h6>
                    <p>`+candidate.location+` / Full Time</p>
                </div>`;
    
    
                modal.showResendRTR = true;
                modal.isMedium = true;
                modal.hideCloseButton = true;
                modal.candidate = candidate;
        
                modal.$mount();  
                document.body.appendChild(modal.$el);  
            },
            sourceTalent: function(candidate){
            
                var ComponentClass = Vue.extend(modalComponent);
                var modal = new ComponentClass();
    
                candidate.candidateName = candidate.name;
                candidate.jobTitle = this.jobTitle;
    
                modal.title = "Submit Talent";
                modal.icon = `<div class="text-center">`+candidate.avatarLg+`</div>`;
                modal.body = `
                <div class="text-center">
                    <h6 class='mt-3'>`+candidate.name+`</h6>
                    <h6><small>For: `+this.jobTitle+`</small></h6>
                    <p>`+candidate.location+` / Full Time</p>
                </div>`;
    
    
                modal.showSourceTalent = true;
                modal.isMedium = true;
                modal.hideCloseButton = true;
                modal.candidate = candidate;
        
                modal.$mount();  
                document.body.appendChild(modal.$el);  
            },
            initTooltips: function(){
                var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
                var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                    var placement = tooltipTriggerEl.dataset.bsPlacement;
                    return new bootstrap.Tooltip(tooltipTriggerEl,{placement: placement});
                })
            },
            findDisqualifiedCandidate: function(candidateName){
                var a = this.submittedCandidates;
                var b = this.interviewedCandidates;
                var c = a.concat(b);

                c = c.concat(this.shortListedCandidates);

                return findObjectByKey(c,'name',candidateName);

                function findObjectByKey(array, key, value) {
                    for (var i = 0; i < array.length; i++) {
                        if (array[i][key] === value) {
                            return array[i];
                        }
                    }
                    return null;
                }
                

            },
            onDisqualifyClick: function(candidateName){

                var candidate = this.findDisqualifiedCandidate(candidateName);
                launchDisqualifyModal(candidate);


                function launchDisqualifyModal(candidateObj){

                    candidateObj.isReviewed = true;
                    console.log(candidateObj.avatarLg);

                    var ComponentClass = Vue.extend(modalComponent);
                    var modal = new ComponentClass();

                    modal.title = "Disqualify Candidate";
                    modal.icon = `<div class="text-center">`+candidateObj.avatarLg+`</div>`;
                    modal.body = `
                    <div class="text-center">
                        <h6 class='mt-3'>`+candidate.name+`</h6>
                        <p>`+candidateObj.location+` / `+candidateObj.supplier+` / `+candidateObj.salary+`</p>
                    </div>`;
                    modal.candidate = candidateObj;
                    modal.showDisqualifiedForm= true;
                    modal.isMedium = true;
                    modal.hideCloseButton = true;
          
                    modal.$mount();  
                    document.body.appendChild(modal.$el);
                }

            },
            viewScheduledInterviews: function(candidate){

                var ComponentClass = Vue.extend(modalComponent);
                var modal = new ComponentClass();

                modal.title = "Scheduled Interviews";
                modal.showScheduledInterviews = true;
                modal.isMedium = true;
                modal.hideBody = true;
                modal.hideCloseButton = true;
                modal.candidate = candidate;
        
                modal.$mount();  
                document.body.appendChild(modal.$el);                 
            },
            email: function(){
                var ComponentClass = Vue.extend(modalComponent);
                var modal = new ComponentClass();

                modal.title="Share via Email";
                modal.showEmailForm = true;
                modal.hideCloseButton = true;
                modal.hideBody= true;
                modal.isMedium = true;
        
                modal.$mount();  
                document.body.appendChild(modal.$el);  
            },
            publicShareLink: function(){
                var ComponentClass = Vue.extend(modalComponent);
                var modal = new ComponentClass();

                modal.title="Public Share Link";
                modal.showPublicShareLink = true;
                modal.hideCloseButton = true;
                modal.isMedium = true;
        
                modal.$mount();  
                document.body.appendChild(modal.$el);  
            },
            editRequest: function(){
                var ComponentClass = Vue.extend(modalComponent);
                var modal = new ComponentClass();
                modal.title = "Edit Request";
                modal.showEditRequestForm = true;
                modal.isLarge = true;
                modal.hideCloseButton = true;
                modal.request = this;
                modal.hideBody= true;
        
                modal.$mount();  
                document.body.appendChild(modal.$el);  
            },
            deleteRequest: function(){
                var ComponentClass = Vue.extend(modalComponent);
                var modal = new ComponentClass();

                modal.showDeleteRequestForm = true;
                modal.isMedium = true;
                modal.hideCloseButton = true;
        
                modal.$mount();  
                document.body.appendChild(modal.$el);  
            },
            hasReviewed: function(){
                //check to see if all submitted candidates have been reviewed yet
                var reviewedCnt = 0;
                for(var i =0; i<this.automatchedCandidates.length; i++){
                    if(this.automatchedCandidates[i].isReviewed === false){
                        reviewedCnt++;
                    }
                }

                if(reviewedCnt === 0){
                    this.submittedAllReviewed = true;
                }
            },
            onProfileClick: function(candidate){

                candidate.isReviewed = true;

                this.hasReviewed();
                
                var ComponentClass = Vue.extend(profileFlyoutComponent);
                var profileFlyout = new ComponentClass();

                candidate.candidateDesignation = "UI Engineer";
        
                profileFlyout.name = candidate.name;
                profileFlyout.avatar = candidate.avatar;
                profileFlyout.status = candidate.status;
                profileFlyout.history = candidate.history;
                profileFlyout.video1way = candidate.video1way;
                profileFlyout.video2way = candidate.video2way;
                profileFlyout.videomcq = candidate.videomcq;
                profileFlyout.resumedoc = candidate.resumedoc;
                profileFlyout.resumevideo = candidate.resumevideo;
                profileFlyout.isPending = candidate.isPending;
                profileFlyout.isSubmitted = candidate.isSubmitted;
                profileFlyout.isShortlisted = candidate.isShortlisted;
                profileFlyout.isInterviewed = candidate.isInterviewed;
                profileFlyout.isHired = candidate.isHired;
                profileFlyout.isDisqualified = candidate.isDisqualified;
                profileFlyout.supplier = candidate.supplier;
                profileFlyout.supplierAvatar = candidate.supplierAvatar;
                profileFlyout.candidate = candidate;
                profileFlyout.isRecruiter = true;

                console.log(candidate);

                if(candidate.interviews){
                    profileFlyout.interviews = candidate.interviews;
                }

                profileFlyout.$mount();  
                document.body.appendChild(profileFlyout.$el);
            },
            onCollapsibleClick: function(val){
                if(this.collapsible[val]){
                    this.collapsible[val] = false;
                }else{
                    this.collapsible[val] = true;
                }
            },
            updateTab: function(category,type){
                if(category[type]){
                    category[type] = false;
                }else{
                    category[type] = true;
                }   
            },
            resetTabs: function(category){
                for (var key in category) {
                    category[key] = false
                }
            },
            onTabClick: function (category,val){
                var btngroup = document.getElementsByClassName("btn-group");
                var dropmenu = document.getElementsByClassName("dropdown-menu");
                console.log(btngroup);
                console.log(dropmenu);
                if(btngroup){
                    for(var i =0; i<btngroup.length; i++){
                        btngroup[i].classList.remove("show");
                    }
                }
                if(dropmenu){
                    for(var i =0; i<dropmenu.length; i++){
                        dropmenu[i].classList.remove("show");
                    }
                }

                this.resetTabs(this[category]);
                this.updateTab(this[category],val);
            },
            shortlist: function(candidate){


                candidate.isReviewed = true;

                this.hasReviewed();

                var ComponentClass = Vue.extend(modalComponent);
                var modal = new ComponentClass();

                modal.title = "Shortlist Candidate";
                modal.icon = `<div class="text-center">`+candidate.avatarLg+`</div>`;
                modal.body = `
                <div class="text-center">
                    <h6 class='mt-3'>`+candidate.name+`</h6>
                    <p>`+candidate.location+` / `+candidate.supplier+` / `+candidate.salary+`</p>
                </div>`;
                modal.candidate = candidate;
                modal.showShortListForm = true;
                modal.isMedium = true;
                modal.hideCloseButton = true;
        
                modal.$mount();  
                document.body.appendChild(modal.$el);                

            },
            makeAnOffer: function(candidate){


                candidate.isReviewed = true;

                this.hasReviewed();

                var ComponentClass = Vue.extend(modalComponent);
                var modal = new ComponentClass();

                modal.title = "Make An Offer";
                modal.icon = `<div class="text-center">`+candidate.avatarLg+`</div>`;
                modal.body = `
                <div class="text-center">
                    <h6 class='mt-3'>`+candidate.name+`</h6>
                    <p>`+candidate.location+` / `+candidate.supplier+` / `+candidate.salary+`</p>
                </div>`;
                modal.candidate = candidate;
                modal.showMakeAnOfferForm = true;
                modal.isMedium = true;
                modal.hideCloseButton = true;
        
                modal.$mount();  
                document.body.appendChild(modal.$el);                

            },
            scheduleInterview: function(candidate){


                candidate.isReviewed = true;

                this.hasReviewed();

                var ComponentClass = Vue.extend(modalComponent);
                var modal = new ComponentClass();

                modal.title = "Schedule Interview";
                modal.icon = `<div class="text-center">`+candidate.avatarLg+`</div>`;
                modal.body = `
                <div class="text-center">
                    <h6 class='mt-3'>`+candidate.name+`</h6>
                    <p>`+candidate.location+` / `+candidate.supplier+` / `+candidate.salary+`</p>
                </div>`;
                modal.candidate = candidate;
                modal.showShortListForm = true;
                modal.isInterviewReschedule = true;
                modal.isMedium = true;
                modal.hideCloseButton = true;
        
                modal.$mount();  
                document.body.appendChild(modal.$el);                

            }
        }
    });