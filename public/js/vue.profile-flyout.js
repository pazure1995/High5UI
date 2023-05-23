var profileFlyoutComponent = Vue.component('profile-flyout', {
    template: '#profile-flyout-template',
    data() {
        return {
            location: '',
            salary: '',
            skills: [],
            workHistory: [],
            certifications: [],
            education: [],
            name: "",
            avatar: "",
            supplier: "",
            supplierAvatar: "",
            video1way: true,
            video2way: true,
            videomcq: true,
            resumedoc: true,
            resumevideo: true,
            history: [],
            interviews: [],
            status: "",
            isPending: false,
            isSubmitted: false,
            isShortlisted: false,
            isInterviewed: false,
            isHired: false,
            isDisqualified: false,
            showFlyout: false,
            isMultipleRequestView: false,
            viewAllSkills: false,
            isRecruiter: false,
            request: null,
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
                resumes: true,
                preferredIndustries: false,
                securityClearance: true,
                request_1: true,
                request_1_skills: false,
                request_1_description: false,
                request_1_general: false,
                request_2: true,
                request_2_skills: false,
                request_2_description: false,
                request_2_general: false,
                request_3: true,
                request_3_skills: false,
                request_3_description: false,
                request_3_general: false,
                request_4: true,
                request_4_skills: false,
                request_4_description: false,
                request_4_general: false,
                assessment1: false
            },
            tabs: {
                overview: true,
                assessments: false,
                requests: false,
                screenings: false,
                resumes: false,
                interviews: false,
                history: false   
            },
            requestTabs1: {
                request_1_details: true,
                request_1_screenings: false,
                request_1_resumes: false,
                request_1_interviews: false,
                request_1_history: false
            },
            requestTabs2: {
                request_2_details: true,
                request_2_screenings: false,
                request_2_resumes: false,
                request_2_interviews: false,
                request_2_history: false,
            },
            requestTabs3: {
                request_2_details: true,
                request_2_screenings: false,
                request_2_resumes: false,
                request_2_interviews: false,
                request_2_history: false,
            },
            requestTabs4: {
                request_2_details: true,
                request_2_screenings: false,
                request_2_resumes: false,
                request_2_interviews: false,
                request_2_history: false,
            },
            sortRight: "-50px",
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
            filterCategories: [
                {
                    title: "Request Title",
                    type: "list",
                    collapsed: false,
                    hasValues: false,
                    placeholder: "Filter Title",
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
                    title: "Status",
                    type: "list",
                    collapsed: false,
                    hasValues: false,
                    placeholder: "Filter Status",
                    options: [{
                        label: "Automatched",
                        value: false
                    },
                    {
                        label: "Sourced",
                        value: false
                    },
                    {
                        label: "Submitted",
                        value: false
                    },
                    {
                        label: "Shortlisted",
                        value: false
                    },
                    {
                        label: "Offered",
                        value: false
                    },
                    {
                        label: "Hired",
                        value: false
                    },
                    {
                        label: "Disqualified",
                        value: false
                    }]
                },
                {
                    title: "Request Type",
                    type: "list",
                    collapsed: false,
                    hasValues: false,
                    placeholder: "Filter Type",
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
            candidate: null
        }
    },
    created: function () {
        document.querySelectorAll('.view-panel').forEach(e => e.remove());
        this.show();
    },
    destroyed: function(){
        el = this.$el;
        el.parentNode.removeChild(el);
    },
    methods: {
        assignAssessment: function(candidate){
            var ComponentClass = Vue.extend(modalComponent);
            var modal = new ComponentClass();

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
        resendRTR: function(candidate){
            var ComponentClass = Vue.extend(modalComponent);
            var modal = new ComponentClass();


            modal.title = "Resend RTR";
            modal.icon = `<div class="text-center">`+candidate.avatarLg+`</div>`;
            modal.body = `
            <div class="text-center">
                <h6 class='mt-3'>`+candidate.candidateName+`</h6>
                <h6><small>For: React Native Developer</small></h6>
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

            var jobTitle = "";

            if(candidate.jobTitle){
                jobTitle = candidate.jobTitle;
            }else{
                jobTitle = "React Native Developer";
            }


            candidate.jobTitle = jobTitle;

            if(candidate.name){
                candidate.candidateName = candidate.name;
            }

            var avatar = "";
            if(candidate.avatar.imgPath){
                avatar = "<img class='avatar avatar-lg' src='"+candidate.avatar.imgPath+"'/>"
            }
            if(candidate.avatar.color){
                avatar = "<span class='avatar avatar-lg "+candidate.avatar.color+"'>"+candidate.avatar.initials+"</span>"
            }
            if(candidate.avatarLg){
                avatar = candidate.avatarLg;
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
        show: function(){
            var app = this;
            app.showFlyout = true;
        },
        close: function(){
            var app = this;
            app.showFlyout = false;
        },
        rescheduleInterview: function(){
            requestApp.scheduleInterview(this.candidate);
        },
        cancelInterview: function(candidate){
            var ComponentClass = Vue.extend(modalComponent);
            var modal = new ComponentClass();

            modal.title = "Scheduled Interviews";

            modal.showScheduledInterviews = true;
            modal.hideBody = true;
            modal.isMedium = true;
            modal.hideCloseButton = true;
            modal.candidate = candidate;
            modal.showCancelInterviewForm = true;
    
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
        onDisqualifyClick: function(){
            this.candidate.isReviewed = true;

            var ComponentClass = Vue.extend(modalComponent);
            var modal = new ComponentClass();

            modal.title = "Disqualify Candidate";
            modal.icon = `<div class="text-center">`+this.candidate.avatarLg+`</div>`;
            modal.body = `
            <div class="text-center">
                <h6 class='mt-3'>`+this.candidate.name+`</h6>
                <p>`+this.candidate.location+` / `+this.candidate.supplier+` / `+this.candidate.salary+`</p>
            </div>`;
            modal.candidate = this.candidate;
            modal.showDisqualifiedForm= true;
            modal.isMedium = true;
            modal.hideCloseButton = true;
            modal.profileFlyout = this;
  
            modal.$mount();  
            document.body.appendChild(modal.$el);         
        },
        shortlist: function(){

            this.candidate.isReviewed = true;

            var ComponentClass = Vue.extend(modalComponent);
            var modal = new ComponentClass();

            console.log(this.candidate);
            modal.title = "Shortlist Candidate";
            modal.icon = `<div class="text-center">`+this.candidate.avatarLg+`</div>`;
            modal.body = `
            <div class="text-center">
                <h6 class='mt-3'>`+this.candidate.name+`</h6>
                <p>`+this.candidate.location+` / `+this.candidate.supplier+` / `+this.candidate.salary+`</p>
            </div>`;
            modal.candidate = this.candidate;
            modal.showShortListForm = true;
            modal.isMedium = true;
            modal.hideCloseButton = true;
            modal.profileFlyout = this;
            
            console.log(modal);
    
            modal.$mount();  
            document.body.appendChild(modal.$el);   

        },
        offer: function(){           

            this.candidate.isReviewed = true;

            var ComponentClass = Vue.extend(modalComponent);
            var modal = new ComponentClass();

            modal.title = "Make An Offer";
            modal.icon = `<div class="text-center">`+this.candidate.avatarLg+`</div>`;
            modal.body = `
            <div class="text-center">
                <h6 class='mt-3'>`+this.candidate.name+`</h6>
                <p>`+this.candidate.location+` / `+this.candidate.supplier+` / `+this.candidate.salary+`</p>
            </div>`;
            modal.candidate = this.candidate;
            modal.showMakeAnOfferForm = true;
            modal.isMedium = true;
            modal.hideCloseButton = true;
            modal.profileFlyout = this;
    
            modal.$mount();  
            document.body.appendChild(modal.$el);   

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
            this.resetTabs(this[category]);
            this.updateTab(this[category],val);
        },
        toggleAllSkills: function(el){
            if(this.viewAllSkills){
                this.viewAllSkills = false;
            }else{
                this.viewAllSkills = true;
            }
            el.target.blur();
        }
    }
});