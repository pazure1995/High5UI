let allCandidatesView = new Vue({
    el: '#CandidateProfile', 
    data: {
        name: "John Doe",
        avatar: {
            imgPath: "https://uifaces.co/our-content/donated/9-mQNf2U.jpg"
        },
        location: "Jacksonville FL.",
        hidden: false,
        submittedAllReviewed: false,
        requests: [
            {
                title: "Sr. .NET Developer",
                isNew: true,
                status: "Automatched",
                id: new Date().getTime(),
                key: 'request_1'
            },
            {
                title: "Sr. Java Engineer",
                isNew: true,
                status: "Automatched",
                id: new Date().getTime(),
                key: 'request_2'
            },
            {
                title: "Senior Java Engineer",
                isNew: false,
                status: "Sourced",
                id: new Date().getTime(),
                key: 'request_3'
            },
            {
                title: "Mid-Level Front-End Developer",
                isNew: false,
                status: "Submitted",
                id: new Date().getTime(),
                key: 'request_4'
            },
            {
                title: "IT Support III",
                isNew: false,
                status: "Offered",
                id: new Date().getTime(),
                key: 'request_5'
            },
            {
                title: "Junior Developer",
                isNew: false,
                status: "Disqualified",
                id: new Date().getTime(),
                key: 'request_6'
            },
            {
                title: "Database Administrator",
                isNew: false,
                status: "Disqualified",
                id: new Date().getTime(),
                key: 'request_7'
            },
            {
                title: "Backend Developer",
                isNew: false,
                status: "sourced",
                id: new Date().getTime(),
                key: 'request_8'
            }
        ],
        submittedRequests: [],
        shortListedRequests: [],
        offeredRequests:[],
        hiredRequests: [],
        disqualifiedRequests: [],
        automatchedRequests: [],
        sourcedRequests: [],
        viewAllSkills: false,
        collapsible: {
            general: false,
            skills: false,
            history: false,
            education: true,
            certifications: true,
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
            request_1: {
                root: true,
                skills: false,
                description: false,
                general: false,
                education: false,
                certifications: false,
                industries: false,
                workhours: false,
                travel: false,
                drugtest: false,
                backgroundcheck: false,
                securityclearance: false,
                tabs: {
                    details: true,
                    screenings: false,
                    resumes: false,
                    interviews: false,
                    history: false
                }
            },
            request_2: {
                root: true,
                skills: false,
                description: false,
                general: false,
                education: false,
                certifications: false,
                industries: false,
                workhours: false,
                travel: false,
                drugtest: false,
                backgroundcheck: false,
                securityclearance: false,
                tabs: {
                    details: true,
                    screenings: false,
                    resumes: false,
                    interviews: false,
                    history: false
                }
            },
            request_3: {
                root: true,
                skills: false,
                description: false,
                general: false,
                education: false,
                certifications: false,
                industries: false,
                workhours: false,
                travel: false,
                drugtest: false,
                backgroundcheck: false,
                securityclearance: false,
                tabs: {
                    details: true,
                    screenings: false,
                    resumes: false,
                    interviews: false,
                    history: false
                }
            },
            request_4: {
                root: true,
                skills: false,
                description: false,
                general: false,
                education: false,
                certifications: false,
                industries: false,
                workhours: false,
                travel: false,
                drugtest: false,
                backgroundcheck: false,
                securityclearance: false,
                tabs: {
                    details: true,
                    screenings: false,
                    resumes: false,
                    interviews: false,
                    history: false
                }
            },
            request_5: {
                root: true,
                skills: false,
                description: false,
                general: false,
                education: false,
                certifications: false,
                industries: false,
                workhours: false,
                travel: false,
                drugtest: false,
                backgroundcheck: false,
                securityclearance: false,
                tabs: {
                    details: true,
                    screenings: false,
                    resumes: false,
                    interviews: false,
                    history: false
                }
            },
            request_6: {
                root: true,
                skills: false,
                description: false,
                general: false,
                education: false,
                certifications: false,
                industries: false,
                workhours: false,
                travel: false,
                drugtest: false,
                backgroundcheck: false,
                securityclearance: false,
                tabs: {
                    details: true,
                    screenings: false,
                    resumes: false,
                    interviews: false,
                    history: false
                }
            },
            request_7: {
                root: true,
                skills: false,
                description: false,
                general: false,
                education: false,
                certifications: false,
                industries: false,
                workhours: false,
                travel: false,
                drugtest: false,
                backgroundcheck: false,
                securityclearance: false,
                tabs: {
                    details: true,
                    screenings: false,
                    resumes: false,
                    interviews: false,
                    history: false
                }
            },
            request_8: {
                root: true,
                skills: false,
                description: false,
                general: false,
                education: false,
                certifications: false,
                industries: false,
                workhours: false,
                travel: false,
                drugtest: false,
                backgroundcheck: false,
                securityclearance: false,
                tabs: {
                    details: true,
                    screenings: false,
                    resumes: false,
                    interviews: false,
                    history: false
                }
            }
        },
        sortCategories: [
            {
                parent_id: -1, 
                index: 0,
                value: "title",
                label: "<i class='fal fa-fw fa-signature mr-2 dd-sort'></i> Title",
                is_active: false,
            },{
                parent_id: -1, 
                index: 1,
                value: "id",
                label: "<i class='fal fa-fingerprint mr-2 dd-sort'></i> ID",
                is_active: false
            },{
                parent_id: -1,
                index: 2, 
                value: "status",
                label: "<i class='fal fa-fw fa-crown mr-2 dd-sort'></i> Status",
                is_active: false
            }
        ],
        infoTabs: {
            contact: true,
            workhistory: false,
            resumes: false,
            assessments: false
        },
        requestsTabs: {
            automatched: true,
            sourced: false,
            submitted: false,
            shortlisted: false,
            offered: false,
            hired: false,
            disqualified: false
        },
        requestTabs1: {
            request_details: true,
            request_screenings: false,
            request_resumes: false,
            request_interviews: false,
            request_history: false,
        },
        requestTabs2: {
            request_details: true,
            request_screenings: false,
            request_resumes: false,
            request_interviews: false,
            request_history: false,
        },
        requestTabs3: {
            request_details: true,
            request_screenings: false,
            request_resumes: false,
            request_interviews: false,
            request_history: false,
        },
        requestTabs4: {
            request_details: true,
            request_screenings: false,
            request_resumes: false,
            request_interviews: false,
            request_history: false,
        },
        requestTabs5: {
            request_details: true,
            request_screenings: false,
            request_resumes: false,
            request_interviews: false,
            request_history: false,
        },
        requestTabs6: {
            request_details: true,
            request_screenings: false,
            request_resumes: false,
            request_interviews: false,
            request_history: false,
        },
        requestTabs7: {
            request_details: true,
            request_screenings: false,
            request_resumes: false,
            request_interviews: false,
            request_history: false,
        }
    },
    computed: {
        getRequestCnt: function () {
            return this.requests.length;
        },
        getAutomatchedCnt: function () {
            var cnt = 0;
            for(var i=0; i<this.requests.length; i++){
                if(this.requests[i].status.toLowerCase() === "automatched"){
                    cnt = cnt + 1;
                }
            }
            return cnt;
        },
        getSourcedCnt: function () {
            var cnt = 0;
            for(var i=0; i<this.requests.length; i++){
                if(this.requests[i].status.toLowerCase() === "sourced"){
                    cnt = cnt + 1;
                }
            }
            return cnt;
        },
        getSubmittedCnt: function () {
            var cnt = 0;
            for(var i=0; i<this.requests.length; i++){
                if(this.requests[i].status.toLowerCase() === "submitted"){
                    cnt = cnt + 1;
                }
            }
            return cnt;
        },
        getShortlistedCnt: function () {
            var cnt = 0;
            for(var i=0; i<this.requests.length; i++){
                if(this.requests[i].status.toLowerCase() === "shorlisted"){
                    cnt = cnt + 1;
                }
            }
            return cnt;
        },
        getOfferedCnt: function () {
            var cnt = 0;
            for(var i=0; i<this.requests.length; i++){
                if(this.requests[i].status.toLowerCase() === "offered"){
                    cnt = cnt + 1;
                }
            }
            return cnt;
        },
        getHiredCnt: function () {
            var cnt = 0;
            for(var i=0; i<this.requests.length; i++){
                if(this.requests[i].status.toLowerCase() === "hired"){
                    cnt = cnt + 1;
                }
            }
            return cnt;
        },
        getDisqualfiedCnt: function () {
            var cnt = 0;
            for(var i=0; i<this.requests.length; i++){
                if(this.requests[i].status.toLowerCase() === "disqualified"){
                    cnt = cnt + 1;
                }
            }
            return cnt;
        }
    },
    created: function(){
 
        var app = this;
        var cnt = 0;
        for(var i=0; i<app.requests.length; i++){

            app.requests[i].id = new Date().getTime() * (i+1);

            if(app.requests[i].status.toLowerCase() === "automatched"){
                app.automatchedRequests.push(app.requests[i]);
            }
            if(app.requests[i].status.toLowerCase() === "sourced"){
                app.sourcedRequests.push(app.requests[i]);
            }
            if(app.requests[i].status.toLowerCase() === "submitted"){
                app.submittedRequests.push(app.requests[i]);
            }
            if(app.requests[i].status.toLowerCase() === "shorlisted"){
                app.shortListedRequests.push(app.requests[i]);
            }
            if(app.requests[i].status.toLowerCase() === "offered"){
                app.offeredRequests.push(app.requests[i]);
            }
            if(app.requests[i].status.toLowerCase() === "hired"){
                app.hiredRequests.push(app.requests[i]);
            }
            if(app.requests[i].status.toLowerCase() === "disqualified"){
                app.disqualifiedRequests.push(app.requests[i]);
            }
        }
        return cnt;
    },
    methods: {
        showRecordModal: function(){
            var ComponentClass = Vue.extend(modalRecord);
            var modal = new ComponentClass();

            modal.title="Record Interview";
            modal.isLarge = true;
    
            modal.$mount();  
            document.body.appendChild(modal.$el); 
        },
        assignAssessment: function(){
            var ComponentClass = Vue.extend(modalComponent);
            var modal = new ComponentClass();

            var candidate = {};
            candidate.candidateName = this.name;
            candidate.name = this.name;
            candidate.isFromTalentProfileScreen = true;
            candidate.jobTitle = this.title;
            candidate.location = this.location;
            candidate.avatarLg = "<img class='avatar avatar-lg' src='"+this.avatar.imgPath+"'/>"

            if(!candidate.candidateName){
                candidate.candidateName = candidate.name;
            }

            modal.title = "Assign Assessment";
            modal.icon = `<div class="text-center">`+candidate.avatarLg+`</div>`;
            modal.body = `
            <div class="text-center">
                <h6 class='mt-3 mb-0'>`+candidate.candidateName+`</h6>
            </div>`;


            modal.showAssignAssessment = true;
            modal.isMedium = true;
            modal.hideCloseButton = true;
            modal.candidate = candidate;
    
            modal.$mount();  
            document.body.appendChild(modal.$el); 
        },
        resendRTR: function(request){
            var ComponentClass = Vue.extend(modalComponent);
            var modal = new ComponentClass();

            var candidate = {};
            candidate.candidateName = this.name;
            candidate.name = this.name;
            candidate.isFromTalentProfileScreen = true;
            candidate.jobTitle = request.title;
            candidate.location = this.location;
            candidate.avatarLg = "<img class='avatar avatar-lg' src='"+this.avatar.imgPath+"'/>"

            modal.title = "Resend RTR";
            modal.icon = `<div class="text-center">`+candidate.avatarLg+`</div>`;
            modal.body = `
            <div class="text-center">
                <h6 class='mt-3'>`+candidate.name+`</h6>
                <h6><small>For: `+candidate.jobTitle+`</small></h6>
                <p>`+candidate.location+` / Full Time</p>
            </div>`;


            modal.showResendRTR = true;
            modal.isMedium = true;
            modal.hideCloseButton = true;
            modal.candidate = candidate;
    
            modal.$mount();  
            document.body.appendChild(modal.$el);  
        },
        sourceTalent: function(request){
            
            var ComponentClass = Vue.extend(modalComponent);
            var modal = new ComponentClass();

            var candidate = {};

            candidate.candidateName = this.name;
            candidate.name = this.name;
            candidate.isFromTalentProfileScreen = true;
            candidate.jobTitle = request.title;
            candidate.location = this.location;
            candidate.avatarLg = "<img class='avatar avatar-lg' src='"+this.avatar.imgPath+"'/>"

            modal.title = "Submit Talent";
            modal.icon = `<div class="text-center">`+candidate.avatarLg+`</div>`;
            modal.body = `
            <div class="text-center">
                <h6 class='mt-3'>`+candidate.name+`</h6>
                <h6><small>For: `+request.title+`</small></h6>
                <p>`+candidate.location+` / Full Time</p>
            </div>`;


            modal.showSourceTalent = true;
            modal.isMedium = true;
            modal.hideCloseButton = true;
            modal.candidate = candidate;

            candidate.request = request;
    
            modal.$mount();  
            document.body.appendChild(modal.$el);  
        },
        candidateSourcedComplete: function(candidate){
 
            for(var i=0; i<this.automatchedRequests.length; i++){
                if(this.automatchedRequests[i].key === candidate.request.key){
                    this.automatchedRequests.splice(i, 1);
                    candidate.request.isNew = false;
                    candidate.request.status = "Sourced";
                    this.onCollapsibleClick(candidate.request.key,"root");
                    this.sourcedRequests.unshift(candidate.request);
                }
            }
            
        },
        onCollapsibleClick: function(key,val){
            if(val){
                if(this.collapsible[key][val]){
                    this.collapsible[key][val] = false;
                }else{
                    this.collapsible[key][val] = true;
                }
            }else{
                if(this.collapsible[key]){
                    this.collapsible[key] = false;
                }else{
                    this.collapsible[key] = true;
                }
            }
        },
        updateTab: function(category,type,isRequest){
            console.log(type);
            console.log(isRequest);
            console.log(this.collapsible);
            if(isRequest){
                if(this.collapsible[category].tabs[type]){
                    this.collapsible[category].tabs[type] = false;
                }else{
                    this.collapsible[category].tabs[type] = true;
                }  
            }else{
                if(category[type]){
                    category[type] = false;
                }else{
                    category[type] = true;
                }   
            }
        },
        resetTabs: function(category,val,isRequest){
            if(isRequest){
                for (var key in this.collapsible[category].tabs) {
                    this.collapsible[category].tabs[key]= false
                }       
            }else{
                for (var key in category) {
                    category[key] = false
                }         
            }
        },
        onTabClick: function(category,val,isRequest){
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

            if(isRequest){
                this.resetTabs(category,val,isRequest);
                this.updateTab(category,val,isRequest);
            }else{
                this.resetTabs(this[category],isRequest);
                this.updateTab(this[category],val,isRequest);
            }
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
        toggleAllSkills: function(el){
            if(this.viewAllSkills){
                this.viewAllSkills = false;
            }else{
                this.viewAllSkills = true;
            }
            el.target.blur();
        },
        onDisqualifyClick: function(){

            var ComponentClass = Vue.extend(modalComponent);
            var modal = new ComponentClass();

            var candidate = {
                avatarLg: "",
                avatarSm: "",
                name: "",
                location: "",
                salary: "",
                supplier: ""
            };

            if(this.avatar.imgPath){
                candidate.avatarLg = "<img class='avatar avatar-lg' src='"+this.avatar.imgPath+"'/>";
                candidate.avatarSm = "<img class='avatar' src='"+this.avatar.imgPath+"'/>";
            }
            candidate.name = this.name;
            candidate.location = "Jacksonville FL.";
            candidate.supplier = "TalentLyft";
            candidate.salary = "$75/hr";

            modal.title = "Shortlist Candidate";
            modal.icon = `<div class="text-center">`+candidate.avatarLg+`</div>`;
            modal.body = `
            <div class="text-center">
                <h6 class='mt-3'>`+candidate.name+`</h6>
                <p>`+candidate.location+` / `+candidate.supplier+` / `+candidate.salary+`</p>
            </div>`;
            modal.candidate = candidate;
            modal.showDisqualifiedForm= true;
            modal.isMedium = true;
            modal.hideCloseButton = true;
            modal.profileFlyout = this;
            console.log(modal);
  
            modal.$mount();  
            document.body.appendChild(modal.$el);         
        },
        shortlist: function(){


            var ComponentClass = Vue.extend(modalComponent);
            var modal = new ComponentClass();

            var candidate = {
                avatarLg: "",
                avatarSm: "",
                name: "",
                location: "",
                salary: "",
                supplier: ""
            };

            if(this.avatar.imgPath){
                candidate.avatarLg = "<img class='avatar avatar-lg' src='"+this.avatar.imgPath+"'/>";
                candidate.avatarSm = "<img class='avatar' src='"+this.avatar.imgPath+"'/>";
            }
            candidate.name = this.name;
            candidate.location = "Jacksonville FL.";
            candidate.supplier = "TalentLyft";
            candidate.salary = "$75/hr";

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
            modal.profileFlyout = this;
            
            console.log(modal);
    
            modal.$mount();  
            document.body.appendChild(modal.$el);   

        },
        offer: function(){           


            var ComponentClass = Vue.extend(modalComponent);
            var modal = new ComponentClass();

            var candidate = {
                avatarLg: "",
                avatarSm: "",
                name: "",
                location: "",
                salary: "",
                supplier: ""
            };

            if(this.avatar.imgPath){
                candidate.avatarLg = "<img class='avatar avatar-lg' src='"+this.avatar.imgPath+"'/>";
                candidate.avatarSm = "<img class='avatar' src='"+this.avatar.imgPath+"'/>";
            }
            candidate.name = this.name;
            candidate.location = "Jacksonville FL.";
            candidate.supplier = "TalentLyft";
            candidate.salary = "$75/hr";

            modal.title = "Shortlist Candidate";
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
            modal.profileFlyout = this;
    
            modal.$mount();  
            document.body.appendChild(modal.$el);   

        }
    }
});
