var recruiterDashboard = new Vue({
    el: '#RecruiterDashboard',
    data: {
        candidates: [],
        requests: [],
        candidateTabs: {

        },
        requestTabs: {
            all: true,
            open: false,
            hot: false
        }
    },
    created: function(){
        this.seedCandidates();
        this.seedRequests();
        this.initTooltips();
    },
    methods: {
        initTooltips: function(){
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                var placement = tooltipTriggerEl.dataset.bsPlacement;
                return new bootstrap.Tooltip(tooltipTriggerEl,{placement: placement});
            })
        },
        seedCandidates: function(){
            var cnt = Math.floor(Math.random() * 20) + 11;
            let c_names = [
                "John D",
                "Suzannah J",
                "Jenny R",
                "Chris W",
                "Stephan P",
                "Wallace C",
                "Brad P",
                "Debbie E",
                "Alicia J",
                "Jason Z",
                "Patrick M",
                "Anthony E",
                "Garrett M",
                "Micheal M"
            ];
            let c_boy_names = [
                "John D",
                "Chris W",
                "Jason Z",
                "Patrick M",
                "Anthony E",
                "Garrett M",
                "Michael M",
                "Johnny F",
                "Cory W",
                "Jimmy Z",
                "Paul M",
                "Aaron E",
                "Greg M",
                "Mickey M"
            ];
            let c_girl_names = [
                "Suzannah J",
                "Jenny R",
                "Debbie E",
                "Janet J",
                "Annette J",
                "Joyce M",
                "Evie M",
                "Alena J",
                "Carrie J",
                "Isla R",
                "Rose E",
                "Sarah J",
            ];
            let candidateDesignation= ["Director of User Experience","UX Researcher","Web Designer", "Project Manager"];
            let appliedFor =[
                "Director of User Experience",
                "UX Researcher",
                "Lead Developer",
                "Cloud Expert",
                "MSP Expert",
                "CWM Expert",
                "Assistant Manager"
            ];
            var avatarColor = [
                "avatar-purple1",
                "avatar-green2",
                "avatar-pink1",
                "avatar-green3",
                "avatar-blue1",
                "avatar-blue2",
                "avatar-orange1",
                "avatar-orange2"
            ];
            var avatarInitials = [
                "JD",
                "SJ",
                "JR",
                "CW",
                "SP",
                "WC",
                "BP",
                "DE",
                "AJ",
                "JZ",
                "PM",
                "AE",
                "GM",
                "MM"                 
            ]
            var candidateStatuses = [
                "new",
                "sourced",
                "submitted",
                "shortlisted",
                "offered",
                "hired",
                "disqualified"
            ]   
            for(var i=0; i<cnt; i++){

                var candidateAvatars = [
                    {
                        avatar: "<img src='https://randomuser.me/api/portraits/men/"+(Math.floor(Math.random() * 49) + 32)+".jpg' class='avatar avatar-bordered ml-neg-10'>",
                        hasImg: true,
                        img: "<img src='https://randomuser.me/api/portraits/men/"+(Math.floor(Math.random() * 49) + 32)+".jpg",

                    },
                    {
                        avatar: "<img src='https://randomuser.me/api/portraits/women/"+(Math.floor(Math.random() * 49) + 32)+".jpg' class='avatar avatar-bordered ml-neg-10'>",
                        hasImg: true,
                        img: "<img src='https://randomuser.me/api/portraits/women/"+(Math.floor(Math.random() * 49) + 32)+".jpg",
                    },
                    {
                        avatar: "<span class='avatar avatar-bordered "+avatarColor[Math.floor(Math.random() * 7) + 0]+"  ml-neg-10'>"+avatarInitials[Math.floor(Math.random() * 7) + 0]+"</span>",
                        color: avatarColor[Math.floor(Math.random() * 7) + 0],
                        initials: avatarInitials[Math.floor(Math.random() * 7) + 0]
                    }                
                ];

                let appliedFor = [
                    {
                        applied: `<div class='tag tag-blue3'><strong>Submitted: Director of User Experience</strong></div>`
                    },
                    {
                        applied: `<div class='tag tag-blue3'><strong>Submitted: UX Researcher</strong></div>`
                    },
                    {
                        applied: `<div class='tag tag-blue3'><strong>Submitted: Web Designer</strong></div>`
                    },
                    {
                        applied: `<div class='tag tag-blue3'><strong>Submitted: React Developer</strong></div>`
                    },
                    {
                        applied: `<div class='tag tag-blue3'><strong>Submitted: Web Architect</strong></div>`
                    },
                ];

                var newSubmissions = [
                    {
                        newlySubmitted: `<div class='tag tag-green3'><strong>Automatched! Director of User Experience</strong></div>`
                    },
                    {
                        newlySubmitted: `<div class='tag tag-green3'><strong>Automatched! UX Researcher</strong></div>`
                    },
                    {
                        newlySubmitted: `<div class='tag tag-green3'><strong>Automatched! Web Designer</strong></div>`
                    },
                    {
                        newlySubmitted: `<div class='tag tag-green3'><strong>Automatched! React Developer</strong></div>`
                    },
                    {
                        newlySubmitted: `<div class='tag tag-green3'><strong>Automatched! Web Architect</strong></div>`
                    },
                ]

                var sourcedFor = [
                    {
                        sourced_pos: `<div class='tag tag-blue3'><strong>Sourced: Director of User Experience</strong></div>`
                    },
                    {
                        sourced_pos: `<div class='tag tag-blue3'><strong>Sourced: UX Researcher</strong></div>`
                    },
                    {
                        sourced_pos: `<div class='tag tag-blue3'><strong>Sourced: Web Designer</strong></div>`
                    },
                    {
                        sourced_pos: `<div class='tag tag-blue3'><strong>Sourced: React Developer</strong></div>`
                    },
                    {
                        sourced_pos: `<div class='tag tag-blue3'><strong>Sourced: Web Architect</strong></div>`
                    }
                ]

                var submittedFor = [
                    {
                        submitted_pos: `<div class='tag tag-blue3'><strong>Submitted: Director of User Experience</strong></div>`
                    },
                    {
                        submitted_pos: `<div class='tag tag-blue3'><strong>Submitted: UX Researcher</strong></div>`
                    },
                    {
                        submitted_pos: `<div class='tag tag-blue3'><strong>Submitted: Web Designer</strong></div>`
                    },
                    {
                        submitted_pos: `<div class='tag tag-blue3'><strong>Submitted: React Developer</strong></div>`
                    },
                    {
                        submitted_pos: `<div class='tag tag-blue3'><strong>Submitted: Web Architect</strong></div>`
                    }
                ]

                var shortlistedFor = [
                    {
                        shortlisted_pos: `<div class='tag tag-blue3'><strong>Shortlisted: Director of User Experience</strong></div>`
                    },
                    {
                        shortlisted_pos: `<div class='tag tag-blue3'><strong>Shortlisted: UX Researcher</strong></div>`
                    },
                    {
                        shortlisted_pos: `<div class='tag tag-blue3'><strong>Shortlisted: Web Designer</strong></div>`
                    },
                    {
                        shortlisted_pos: `<div class='tag tag-blue3'><strong>Shortlisted: React Developer</strong></div>`
                    },
                    {
                        shortlisted_pos: `<div class='tag tag-blue3'><strong>Shortlisted: Web Architect</strong></div>`
                    },
                ]

                var offeredFor = [
                    {
                        offered_pos: `<div class='tag tag-blue3'><strong>Offered: Director of User Experience</strong></div>`
                    },
                    {
                        offered_pos: `<div class='tag tag-blue3'><strong>Offered: UX Researcher</strong></div>`
                    },
                    {
                        offered_pos: `<div class='tag tag-blue3'><strong>Offered: Web Designer</strong></div>`
                    },
                    {
                        offered_pos: `<div class='tag tag-blue3'><strong>Offered: React Developer</strong></div>`
                    },
                    {
                        offered_pos: `<div class='tag tag-blue3'><strong>Offered: Web Architect</strong></div>`
                    },
                ]

                var hiredFor = [
                    {
                        hired_pos: `<div class='tag tag-blue3'><strong>Hired: Director of User Experience</strong></div>`
                    },
                    {
                        hired_pos: `<div class='tag tag-blue3'><strong>Hired: UX Researcher</strong></div>`
                    },
                    {
                        hired_pos: `<div class='tag tag-blue3'><strong>Hired: Web Designer</strong></div>`
                    },
                    {
                        hired_pos: `<div class='tag tag-blue3'><strong>Hired: React Developer</strong></div>`
                    },
                    {
                        hired_pos: `<div class='tag tag-blue3'><strong>Hired: Web Architect</strong></div>`
                    },
                ];

                var disqualifiedFor = [
                    {
                        disqualified_pos: `<div class='tag tag-blue3'><strong>Disqualified: Director of User Experience</strong></div>`
                    },
                    {
                        disqualified_pos: `<div class='tag tag-blue3'><strong>Disqualified: UX Researcher</strong></div>`
                    },
                    {
                        disqualified_pos: `<div class='tag tag-blue3'><strong>Disqualified: Web Designer</strong></div>`
                    },
                    {
                        disqualified_pos: `<div class='tag tag-blue3'><strong>Disqualified: React Developer</strong></div>`
                    },
                    {
                        disqualified_pos: `<div class='tag tag-blue3'><strong>Disqualified: Web Architect</strong></div>`
                    },
                ]

                var status = candidateStatuses[Math.floor(Math.random() * 7) + 0];

                if(status == 'new'){
                    var jewel = true;
                }
                else{
                    var jewel = false;
                }
                let vetted = Math.floor(Math.random() * 3) + 1 ;
                if(vetted % 7 == 0){
                    vetted = true;
                }
    
                let lastUpdated = Math.floor(Math.random() * 3) + 1 ;

                var randomInt = Math.floor(Math.random() * 40) + 1;
                var name = "";
                var initials = "";
                var avatar = {}
                if(randomInt < 20){
                    name = c_boy_names[Math.floor(Math.random() * 14) + 0];
                    initials = name.charAt(0) + name.split(" ")[1].charAt(0);

                    if(randomInt < 10){
                        //use a picture
                        avatar = {
                            imgPath: "https://randomuser.me/api/portraits/men/"+(Math.floor(Math.random() * 49) + 32)+".jpg"
                        }
                    }else{
                        //use initials
                        avatar = {
                            initials: initials,
                            color: avatarColor[Math.floor(Math.random() * 7) + 0]
                        }
                    }
                }else{
                    name = c_girl_names[Math.floor(Math.random() * 12) + 0];
                    initials = name.charAt(0) + name.split(" ")[1].charAt(0);
                    if(randomInt < 30){
                        avatar = {
                            imgPath: "https://randomuser.me/api/portraits/women/"+(Math.floor(Math.random() * 49) + 32)+".jpg"
                        }
                    }else{
                        avatar = {
                            initials: initials,
                            color: avatarColor[Math.floor(Math.random() * 7) + 0]
                        }
                    }
                }

                let candidate = {
                    candidateName: name,
                    avatar: avatar,
                    candidateDesignation: candidateDesignation[Math.floor(Math.random() * 3) + 0],
                    location: "Jacksonville FL.",
                    vetted: vetted,
                    jewel: jewel,
                    lastUpdated: lastUpdated,
                    candidates: shuffle(candidateAvatars),
                    newSubmission: shuffle(newSubmissions),
                    sourcedPositions: shuffle(sourcedFor),
                    submittedFor: shuffle(submittedFor),
                    appliedPositions: shuffle(appliedFor),
                    shortlistedPositions: shuffle(shortlistedFor),
                    offeredPositions: shuffle(offeredFor),
                    hiredPositions: shuffle(hiredFor),
                    disqualifiedPositions: shuffle(disqualifiedFor),
                    status: status,
                    isVisible: true
                }

                this.candidates.push(candidate);

                if(i === (cnt - 1)){
                    var newApplications = getSectionOfList(this.candidates,"status","new");
                    var sourced = getSectionOfList(this.candidates,"status","sourced");
                    var submitted = getSectionOfList(this.candidates,"status","submitted");
                    var shortlisted = getSectionOfList(this.candidates,"status","shortlisted");
                    var offered = getSectionOfList(this.candidates,"status","offered");
                    var hired = getSectionOfList(this.candidates,"status","hired");
                    var disqualified = getSectionOfList(this.candidates,"status","disqualified");

                    this.candidates = newApplications.concat(sourced,submitted,shortlisted,offered,hired,disqualified);
                }

            }


            function getSectionOfList(array,property,value){
                var list = [];
                for(var i=0; i<array.length; i++){
                    if(array[i][property] === value){
                        list.push(array[i]);
                    }
                    if(i === (array.length - 1)){
                        return list;
                    }
                }
            }

            function shuffle(array) {
                var currentIndex = array.length,  randomIndex;
              
                // While there remain elements to shuffle...
                while (0 !== currentIndex) {
              
                  // Pick a remaining element...
                  randomIndex = Math.floor(Math.random() * currentIndex);
                  currentIndex--;
              
                  // And swap it with the current element.
                  [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
                }
              
                return array;
              }
        },
        seedRequests: function(){
            var cnt = Math.floor(Math.random() * 20) + 11;
            var jobTitles = [
                "Java Developer II",
                "Hadoop Architect",
                "UX Designer",
                "Development Manager",
                "QA Analyst II",
                "Sr. Java Developer",
                "Principal Lead Designer",
                "Junior React Developer",
                "React Developer II",
                "Full Stack Engineer",
                "Junior Designer",
                "Project Manager",
                "Scrum Master",
                "Agile Coach",
                "VP of Product",
                "Product Design Lead",
                "Interaction Designer"
            ]
            var jobTypes = ["Full Time","Contract","SOW"];

            var avatarColor = [
                "avatar-purple1",
                "avatar-green2",
                "avatar-pink1",
                "avatar-green3",
                "avatar-blue1",
                "avatar-blue2",
                "avatar-orange1",
                "avatar-orange2"
            ]
            var avatarInitials = [
                "AO",
                "JM",
                "CC",
                "RS",
                "PN",
                "JY",
                "RD",
                "DD"                 
            ]

            var requestStatuses = [
                "open",
                "hot"
            ]
    
            for(var i=0; i<cnt; i++){

                var candidateAvatars = [
                    {
                        avatar: "<img src='https://randomuser.me/api/portraits/men/"+(Math.floor(Math.random() * 49) + 32)+".jpg' class='avatar avatar-bordered  ml-neg-10'>"
                    },
                    {
                        avatar: "<img src='https://randomuser.me/api/portraits/women/"+(Math.floor(Math.random() * 49) + 32)+".jpg' class='avatar avatar-bordered  ml-neg-10'>"
                    },
                    {
                        avatar: "<span class='avatar "+avatarColor[Math.floor(Math.random() * 7) + 0]+" avatar-bordered  ml-neg-10'>"+avatarInitials[Math.floor(Math.random() * 7) + 0]+"</span>"
                    }                
                ];

                var status = requestStatuses[Math.floor(Math.random() * 3) + 0];
                var autoMatchCnt = 0;
                var isExpiringSoon = false;
                var timeLeft = "Filled"
                if(status === "open"){
                    autoMatchCnt = Math.floor(Math.random() * 6) + 0;
                    isExpiringSoon = (((Math.floor(Math.random() * 20) + 0) < 10) ? true : false);
                    if(isExpiringSoon){
                        timeLeft = "5 day left to fill";
                    }else{
                        timeLeft = Math.floor(Math.random() * 90) + 6+" days left to fill";
                    }
                    
                }

                this.requests.push({
                    jobTitle: jobTitles[Math.floor(Math.random() * 17) + 0],
                    jobType: jobTypes[Math.floor(Math.random() * 3) + 0],
                    location: "Jacksonville FL.",
                    timeRemaining: timeLeft,
                    autoMatchCnt: autoMatchCnt,
                    isExpiringSoon: isExpiringSoon,
                    candidates: shuffle(candidateAvatars),
                    status: status,
                    isVisible: true
                });

                if(i === (cnt - 1)){
                    var open = getSectionOfList(this.requests,"status","open");
                    var hot = getSectionOfList(this.requests,"status","hot");

                    this.requests = open.concat(hot);
                }

            }


            function getSectionOfList(array,property,value){
                var list = [];
                for(var i=0; i<array.length; i++){
                    if(array[i][property] === value){
                        list.push(array[i]);
                    }
                    if(i === (array.length - 1)){
                        return list;
                    }
                }
            }

            function shuffle(array) {
                var currentIndex = array.length,  randomIndex;
              
                // While there remain elements to shuffle...
                while (0 !== currentIndex) {
              
                  // Pick a remaining element...
                  randomIndex = Math.floor(Math.random() * currentIndex);
                  currentIndex--;
              
                  // And swap it with the current element.
                  [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
                }
              
                return array;
              }
        },
    }
});