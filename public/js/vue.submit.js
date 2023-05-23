var submitApp = new Vue({
    el: '#RequestView',
        data: {
            candidate: {
                name: "John Doe",
                designation: "Sr Java Developer",
                location: "Jacksonville Fl.",
                avatar: {
                    imgPath: "https://uifaces.co/our-content/donated/9-mQNf2U.jpg"
                }
            },
            jobTitle: "Java Developer",
            requestId: "1212321",
            jobType: "Full Time",
            startDate: "6/1/2021",
            location: "Jacksonville Fl USA",
            maxAnnualSalary: "85,000",
            submittedAllReviewed: false,
            viewAllSkills: false,
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
                general: false,
                skills: false,
                history: false,
                video1way: false,
                video2way: false,
                videomcq: false,
                resumedoc: false,
                resumevideo: false,
                workHours: true,
                travel: true,
                drugTest: true,
                backgroundCheck: true,
                securityCheck: true,
                preferredLocations: false,
                industries: true,
                preferredIndustries: false,
                securityClearance: true,
        
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
                contact: true,
                workhistory: false,
                certifications: false,
                resumes: false,
                assessments: false
            },
            toggleView: {
                listview: true,
                gridview: false,
                tableview: false
            },
            sortCategories: [
                {
                    parent_id: -1, 
                    index: 0,
                    value: "jobtitle",
                    label: "<i class='fal fa-fw fa-briefcase mr-2 dd-sort'></i> Job Title",
                    is_active: false,
                },{
                    parent_id: -1, 
                    index: 1,
                    value: "jobtype",
                    label: "<i class='fal fa-fw fa-id-card-alt mr-2 dd-sort'></i> Job Type",
                    is_active: false
                },{
                    parent_id: -1,
                    index: 2, 
                    value: "location",
                    label: "<i class='fal fa-fw fa-map-marker-alt mr-2 dd-sort'></i> Location",
                    is_active: false
                },{
                    parent_id: -1, 
                    index: 3,
                    value: "startdate",
                    label: "<i class='fal fa-fw fa-calendar-alt mr-2 dd-sort'></i>Preferred Start Date",
                    is_active: false
                }
            ],
            filterCategories: [
                {
                    title: "Request Title",
                    type: "list",
                    collapsed: false,
                    hasValues: false,
                    options: [{
                        label: "Agile Coach",
                        value: false
                    },
                    {
                        label: "Development Manager",
                        value: false
                    },
                    {
                        label: "Java Developer II",
                        value: false
                    }]
                },
                {
                    title: "Request Type",
                    type: "list",
                    collapsed: false,
                    hasValues: false,
                    options: [{
                        label: "Full Time",
                        value: false
                    },
                    {
                        label: "Contract",
                        value: false
                    },
                    {
                        label: "SOW",
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
                },
                {
                    title: "Days Left To Fill",
                    type: "number",
                    value: "",
                    operator: "-1",
                    collapsed: false,
                    hasValues: false
                }
            ],
            requests: [],
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
                return this.requests.length;
            },
            selectedTotal: function() {
                var selectedCnt = 0;
                for(var i=0; i<this.requests.length; i++){
                    if(this.requests[i].isSelected){
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

                for(var i=0; i<this.requests.length; i++){
                    if(val){
                        this.requests[i].isSelected = true;
                    }else{
                        this.requests[i].isSelected = false;
                    }
                }
            }
        },
        methods: {
            seedData: function(){
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
                        id: i,
                        jobTitle: jobTitles[Math.floor(Math.random() * 17) + 0],
                        jobType: jobTypes[Math.floor(Math.random() * 3) + 0],
                        location: "Jacksonville FL.",
                        timeRemaining: timeLeft,
                        autoMatchCnt: autoMatchCnt,
                        isExpiringSoon: isExpiringSoon,
                        candidates: shuffle(candidateAvatars),
                        status: status,
                        isVisible: true,
                        isSelected: false
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
            showDetailsFlyout: function(request){

                var ComponentClass = Vue.extend(jobFlyoutComponent);
                var jobFlyout = new ComponentClass();

                this.candidate.jobTitle = request.jobTitle;
                console.log(this.candidate);

                jobFlyout.request = request;
                jobFlyout.candidate = this.candidate;


                this.flyout = jobFlyout;

                console.log(jobFlyout);

                jobFlyout.$mount();  
                document.body.appendChild(jobFlyout.$el);
            },
            toggleAllSkills: function(el){
                if(this.viewAllSkills){
                    this.viewAllSkills = false;
                }else{
                    this.viewAllSkills = true;
                }
                el.target.blur();
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

                var candidate = this.candidate;
                candidate.isFromSubmitScreen = true;
                candidate.bulkList = "";

                var avatar = "";
                if(candidate.avatar.imgPath){
                    avatar = "<img class='avatar avatar-lg' src='"+candidate.avatar.imgPath+"'/>"
                }else{
                    avatar = "<span class='avatar avatar-lg "+candidate.avatar.color+"'>"+candidate.avatar.initials+"</span>"
                }

                var jobList = [];
                var rows = "";
                for(var i=0; i<this.requests.length; i++){
                    if(this.requests[i].isSelected){
                        rows +="<tr><td>"+this.requests[i].jobTitle+"</td><td>"+this.requests[i].jobType+"</td></tr>";
                        jobList.push(this.requests[i]);
                    }
                }

                candidate.candidateName = candidate.name;

                candidate.jobList = jobList;
    
                candidate.bulkList = `    
                <div class="card card-flat">
                    <div class="card-body">                    
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Job Name</th>
                                    <th>Job Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                `+rows+`
                            </tbody>
                        </table>
                    </div>
                </div>`;

                modal.title = "Submit Talent";
                modal.icon = `<div class="text-center">`+avatar+`</div>`;
                modal.body = `
                <div class="text-center">
                    <h6 class='mt-3'>`+candidate.candidateName+`</h6>
                    <p>`+candidate.location+` / Full Time</p>
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
            },
            removeRequest: function(request,isBulk){

                if(isBulk){
                    var newList = [];
                    for(var i=0; i<this.requests.length; i++){
                        if(!this.requests[i].isSelected){
                            newList.push(this.requests[i]);
                        }
                        if(i === (this.requests.length - 1)){
                            this.requests = newList;
                            this.selectAll = false;
                        }
                    }

                }else{            
                    for(var i=0; i<this.requests.length; i++){
                        if(this.requests[i].id === request.id){
                            this.requests.splice(i, 1);
                        }
                    }
                }
                if(this.flyout.show){
                    this.flyout.close();
                }
            },
            submit: function(request){
                var ComponentClass = Vue.extend(modalComponent);
                var modal = new ComponentClass();

                var candidate = this.candidate;
                candidate.request = request;

                candidate.jobTitle = this.jobTitle;
    
   
                candidate.candidateName = this.candidate.name;
                candidate.isFromSubmitScreen = true;
    
    
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
            }
        }
    });