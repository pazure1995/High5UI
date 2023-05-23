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
                activity: false
            },
            toggleView: {
                listview: false,
                gridview: false,
                tableview: true
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
                    title: "Skills",
                    type: "list",
                    collapsed: false,
                    hasValues: false,
                    placeholder: "Filter Skills",
                    options: [{
                        label: "Hadoop",
                        value: false
                    },
                    {
                        label: "Figma",
                        value: false
                    },
                    {
                        label: "Java",
                        value: false
                    }]
                },
                {
                    title: "Skill Set",
                    type: "list",
                    collapsed: false,
                    hasValues: false,
                    placeholder: "Filter Skill Set",
                    options: [{
                        label: "IT",
                        value: false
                    },
                    {
                        label: "Accounting",
                        value: false
                    },
                    {
                        label: "Human Resources",
                        value: false
                    }]
                },
                {
                    title: "Industries",
                    type: "list",
                    collapsed: false,
                    hasValues: false,
                    placeholder: "Filter Industries",
                    options: [{
                        label: "Aviation",
                        value: false
                    },
                    {
                        label: "Aerospace",
                        value: false
                    },
                    {
                        label: "Hospitality",
                        value: false
                    }]
                },
                {
                    title: "Preferred Rate",
                    type: "numberrange",
                    value1: "",
                    value2: "",
                    operator: "-1",
                    collapsed: false,
                    hasValues: false,
                    showCurrency: true,
                    showRate: true
                },
                {
                    title: "Preferred Annual Salary",
                    type: "numberrange",
                    value1: "",
                    value2: "",
                    operator: "-1",
                    collapsed: false,
                    hasValues: false,
                    showCurrency: true
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
            selectAll: false,
            candidates: [],
            flyout: {}
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
            totalTalent: function () {
                // `this` points to the vm instance
                return this.candidates.length;
            },
            selectedTotal: function() {
                var selectedCnt = 0;
                for(var i=0; i<this.candidates.length; i++){
                    if(this.candidates[i].isSelected){
                     selectedCnt++;
                    }
                }
                return selectedCnt;
            },
            disableBulkSubmit: function(){
                if(this.selectedTotal === 0){
                    return true;
                }else{
                    return false;
                }
            }
        },
        watch: {
            selectAll: function(val){

                for(var i=0; i<this.candidates.length; i++){
                    if(val){
                        this.candidates[i].isSelected = true;
                    }else{
                        this.candidates[i].isSelected = false;
                    }
                }
            }
        },
        methods: {
            seedData: function(){
                var cnt = Math.floor(Math.random() * 20) + 11;

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
                        id: i,
                        candidateName: name,
                        name: name,
                        history: [],
                        video1way: true,
                        video2way: false,
                        videomcq: false,
                        resumedoc: true,
                        resumevideo: false,
                        avatar: avatar,
                        candidateDesignation: candidateDesignation[Math.floor(Math.random() * 3) + 0],
                        location: "Jacksonville FL.",
                        vetted: vetted,
                        lastUpdated: lastUpdated,
                        isSelected: false,
                        isQualified: true,
                        isFromSourcedScreen: true,
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
    
                    this.candidates.push(candidate);


                }
    
    
            },
            initTooltips: function(){
                var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
                var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                    var placement = tooltipTriggerEl.dataset.bsPlacement;
                    return new bootstrap.Tooltip(tooltipTriggerEl,{placement: placement});
                })
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
            onProfileClick: function(candidate,event){      

                candidate.isReviewed = true;
  
                var avatar = "";
                if(candidate.avatar.imgPath){
                    avatar = "<img class='avatar' src='"+candidate.avatar.imgPath+"'/>"
                }else{
                    avatar = "<span class='avatar "+candidate.avatar.color+"'>"+candidate.avatar.initials+"</span>"
                }

                var ComponentClass = Vue.extend(profileFlyoutComponent);
                var profileFlyout = new ComponentClass();

                candidate.jobTitle = this.jobTitle;

                profileFlyout.name = candidate.name;
                profileFlyout.avatar = avatar;
                profileFlyout.history = candidate.history;
                profileFlyout.video1way = candidate.video1way;
                profileFlyout.video2way = candidate.video2way;
                profileFlyout.videomcq = candidate.videomcq;
                profileFlyout.resumedoc = candidate.resumedoc;
                profileFlyout.resumevideo = candidate.resumevideo;
                profileFlyout.candidate = candidate;
                profileFlyout.isRecruiter = false;

                if(candidate.interviews){
                    profileFlyout.interviews = candidate.interviews;
                }

                this.flyout = profileFlyout;

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
            sourceTalent: function(candidate){
            
                var ComponentClass = Vue.extend(modalComponent);
                var modal = new ComponentClass();

                candidate.isFromSourcedScreen = true;
    
                var jobTitle = this.jobTitle;
    
                if(candidate.jobTitle){
                    jobTitle = candidate.jobTitle;
                }
    
                candidate.jobTitle = jobTitle;
    
                if(candidate.name){
                    candidate.candidateName = candidate.name;
                }
    
    
                var avatar = "";
                if(candidate.avatar.imgPath){
                    avatar = "<img class='avatar avatar-lg' src='"+candidate.avatar.imgPath+"'/>"
                }else{
                    avatar = "<span class='avatar avatar-lg "+candidate.avatar.color+"'>"+candidate.avatar.initials+"</span>"
                }

                modal.title = "Submit Talent";
                modal.icon = `<div class="text-center">`+avatar+`</div>`;
                modal.body = `
                <div class="text-center">
                    <h6 class='mt-3'>`+candidate.candidateName+`</h6>
                    <h6><small>For: `+candidate.jobTitle+`</small></h6>
                    <p>`+candidate.location+` / Full Time</p>
                </div>`;
    
    
                modal.showSourceTalent = true;
                modal.isMedium = true;
                modal.hideCloseButton = true;
                modal.candidate = candidate;
        
                modal.$mount();  
                document.body.appendChild(modal.$el);  
            },
            sourceTalentBulk: function(){


            
                var ComponentClass = Vue.extend(modalComponent);
                var modal = new ComponentClass();

                var candidate = {
                    isFromSourcedScreen: true,
                    bulkList: "",
                    jobTitle: this.jobTitle
                };
                var candidateList = [];
                var rows = "";
                for(var i=0; i<this.candidates.length; i++){
                    if(this.candidates[i].isSelected){
                        rows +="<tr><td>"+this.candidates[i].candidateName+"</td><td>"+this.candidates[i].candidateDesignation+"</td></tr>";
                        candidateList.push(this.candidates[i]);
                    }
                }
                candidate.candidateList = candidateList;
    
                candidate.bulkList = `    
                <div class="card card-flat">
                    <div class="card-body">                    
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Talent Name</th>
                                    <th>Title</th>
                                </tr>
                            </thead>
                            <tbody>
                                `+rows+`
                            </tbody>
                        </table>
                    </div>
                </div>`;

                modal.title = "Submit Talent";
                modal.body = `
                <div class="text-center">
                    <h6><small>For: `+this.jobTitle+`</small></h6>
                    <p>`+this.location+` / Full Time</p>
                </div>
                `+candidate.bulkList+`
                `;
    
    
                modal.showSourceTalent = true;
                modal.isMedium = true;
                modal.hideCloseButton = true;
                modal.candidate = candidate;
        
                modal.$mount();  
                document.body.appendChild(modal.$el);  
            },
            candidateSourcedComplete: function(candidate,isBulk){
                if(isBulk){
                    var newCandidateList = [];
                    for(var i=0; i<this.candidates.length; i++){
                        console.log(this.candidates[i].isSelected);
                        if(!this.candidates[i].isSelected){
                            newCandidateList.push(this.candidates[i]);
                        }
                        if(i === (this.candidates.length - 1)){
                            this.candidates = newCandidateList;
                            if(this.candidates.length === 0){
                                this.selectAll = false;
                            }
                        }
                    }
                }else{
                    for(var i=0; i<this.candidates.length; i++){
                        if(this.candidates[i].id === candidate.id){
                            this.candidates.splice(i, 1);
                        }
                    }       
                }
                if(this.flyout.show){
                    this.flyout.close();
                }
            }
        }
    });