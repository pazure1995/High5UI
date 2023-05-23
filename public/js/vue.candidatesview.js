let allCandidatesView = new Vue({
    el: '#CandidatesScreen', 
    data: {
        toggleView: {
            listview: true,
            gridview: false,
            tableview: false
        },
        statusView: {
            all: true,
            new: false,
            shortlisted: false,
            offered: false,
            hired: false
        },
        showSort: false,
        sortHasSorts: false,
        sortList: [],
        sortTemplate: {
            label: "<i class='fal fa-briefcase mr-2'></i> Job Title ",
            showCategoryDropdownMenu: false,
            showDirectionDropdownMenu: false,
            options: [
                {
                    value: "jobtitle",
                    label: "<i class='fal fa-fw fa-briefcase mr-2'></i> Job Title"
                },
                {
                    value: "jobtype",
                    label: "<i class='fal fa-fw fa-id-card-alt mr-2'></i> Job Type"
                },
                {
                    value: "location",
                    label: "<i class='fal fa-fw fa-map-marker-alt mr-2'></i> Location"
                },
                {
                    value: "startdate",
                    label: "<i class='fal fa-fw fa-calendar-alt mr-2'></i>Preferred Start Date"
                },
                {
                    value: "newcandidate",
                    label: "<i class='fal fa-fw fa-user-friends mr-2'></i>New Candidates"
                }
            ]
        },
        sortCategories: [
            {
                parent_id: -1, 
                index: 0,
                value: "name",
                label: "<i class='fal fa-fw fa-signature mr-2 dd-sort'></i>Name",
                is_active: false,
            },{
                parent_id: -1, 
                index: 1,
                value: "title",
                label: "<i class='fal fa-fw fa-crown mr-2 dd-sort'></i>Title",
                is_active: false
            },{
                parent_id: -1,
                index: 2, 
                value: "location",
                label: "<i class='fal fa-fw fa-map-marker-alt mr-2 dd-sort'></i>Location",
                is_active: false
            },{
                parent_id: -1, 
                index: 3,
                value: "lastupdated",
                label: "<i class='fal fa-fw fa-calendar-alt mr-2 dd-sort'></i>Date Updated",
                is_active: false
            },{
                parent_id: -1, 
                index: 4,
                value: "requests",
                label: "<i class='fal fa-fw fa-briefcase mr-2 dd-sort'></i>Requests",
                is_active: false
            }
        ],
        filterCategories: [
            {
                title: "Is New?",
                label: "Show Only New Candidates",
                type: "boolean",
                value: false,
                collapsed: false,
                hasValues: false
            },
            {
                title: "Is Vetted?",
                label: "Show Only Vetted Candidates",
                type: "boolean",
                value: false,
                collapsed: false,
                hasValues: false
            },
            {
                title: "Job Title",
                type: "list",
                collapsed: false,
                hasValues: false,
                placeholder: "Filter Title",
                options: [{
                    label: "Web Designer",
                    value: false
                },
                {
                    label: "UX Designer",
                    value: false
                },
                {
                    label: "Interaction Designer",
                    value: false
                }]
            },
            {
                title: "Location",
                type: "list",
                collapsed: false,
                hasValues: false,
                placeholder: "Filter Location",
                options: [{
                    label: "Jacksonville Fl.",
                    value: false
                },
                {
                    label: "Daytona Beach Fl.",
                    value: false
                }]
            },
            {
                title: "Last Updated",
                type: "daterange",
                start: "",
                end: "",
                before: "",
                after: "",
                operator: "range",
                collapsed: false,
                hasValues: false
            }
        ],
        candidates: [],
        dropdownBox:{
            filterBox: false
        }
    },
    created: function(){
        this.seedData();
    },
    mounted: function(){
        this.initTooltips();
    },
    updated: function(){
        this.initTooltips();
    },
    computed: {
        totalCandidates: function () {
            // `this` points to the vm instance
            return this.candidates.length;
        }
    },
    watch: {
        sortList: function (val) {
          if(val.length > 0){
              this.sortHasSorts = true;
          }else{
              this.sortHasSorts = false;
          }
        }
    },
    methods: {
        initTooltips: function(){
            console.log('tooltips');
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                var placement = tooltipTriggerEl.dataset.bsPlacement;
                return new bootstrap.Tooltip(tooltipTriggerEl,{placement: placement});
            })
        },
        seedData: function(){
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
                        newlySubmitted: `<div class='tag tag-green3'><strong>New! Director of User Experience</strong></div>`
                    },
                    {
                        newlySubmitted: `<div class='tag tag-green3'><strong>New! UX Researcher</strong></div>`
                    },
                    {
                        newlySubmitted: `<div class='tag tag-green3'><strong>New! Web Designer</strong></div>`
                    },
                    {
                        newlySubmitted: `<div class='tag tag-green3'><strong>New! React Developer</strong></div>`
                    },
                    {
                        newlySubmitted: `<div class='tag tag-green3'><strong>New! Web Architect</strong></div>`
                    },
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

                var status = candidateStatuses[Math.floor(Math.random() * 5) + 0];
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
                    var shortlisted = getSectionOfList(this.candidates,"status","shortlisted");
                    var offered = getSectionOfList(this.candidates,"status","offered");
                    var hired = getSectionOfList(this.candidates,"status","hired");
                    var disqualified = getSectionOfList(this.candidates,"status","disqualified");

                    this.candidates = newApplications.concat(shortlisted,offered,hired,disqualified);
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
        add: function(){
            var ComponentClass = Vue.extend(modalComponent);
            var modal = new ComponentClass();

            modal.title="Add Candidate";
            modal.showAddCandidate = true;
            modal.hideCloseButton = true;
            modal.isLarge = true;
            modal.hideBody = true;
    
            modal.$mount();  
            document.body.appendChild(modal.$el);  
        },
        getTotalByStatus: function(status){
            var total = 0;
            for(var i=0; i<this.candidates.length; i++){
                if(this.candidates[i].status === status){
                    total = total+1;
                }
                if(i === (this.candidates.length - 1)){
                    return total;
                }
            }   
        },
        setStatusView: function(status){
            this.statusView ={
                all: false,
                new: false,
                shortlisted: false,
                offered: false,
                hired: false
            };
            this.statusView[status] = true;
            if(status === "all"){
                this.setAllCandidatesVisible();
            }else{
                this.hideAllCandidatesExcept(status);
            }
        },
        hideAllCandidatesExcept: function(status){
            this.setAllCandidatesVisible();
            for(var i=0; i<this.candidates.length; i++){
                console.log(this.candidates[i].status);
                if(this.candidates[i].status !== status){
                    this.candidates[i].isVisible = false;
                }
            }             
        },
        setAllCandidatesVisible: function(){
            for(var i=0; i<this.candidates.length; i++){
                this.candidates[i].isVisible = true;
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
        onProfileClick: function(candidate){

            if(candidate.avatar.imgPath){
                candidate.avatarLg = "<img class='avatar avatar-lg' src='"+candidate.avatar.imgPath+"'/>";
                candidate.avatarSm = "<img class='avatar' src='"+candidate.avatar.imgPath+"'/>";
            }else{
                candidate.avatarLg = "<span class='avatar avatar-lg "+candidate.avatar.color+"'>"+candidate.avatar.initials+"</span>";
                candidate.avatarSm = "<span class='avatar "+candidate.avatar.color+"'>"+candidate.avatar.initials+"</span>";
            }
            candidate.name = candidate.candidateName;
            candidate.location = "Jacksonville FL.";
            candidate.supplier = "TalentLyft";
            candidate.salary = "$75/hr";
            candidate.isReviewed = true;


            var ComponentClass = Vue.extend(profileFlyoutComponent);
            var profileFlyout = new ComponentClass();

            profileFlyout.isMultipleRequestView = true;
            profileFlyout.candidate = candidate;

            profileFlyout.$mount();  
            document.body.appendChild(profileFlyout.$el);

            this.initTooltips();

            return false;
        },
    }
});