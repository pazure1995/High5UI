let CandidateRequests = new Vue({
    el: '#CandidateRequests', 
    data: {
        rtrList: [],
        assessmentsList: [],
        interviewList: [],
        masterList: [],
        toggleView: {
            listview: true,
            gridview: false
        },
        sortCategories: [
            {
                parent_id: -1, 
                index: 0,
                value: "tag",
                label: "<i class='fal fa-fw fa-tag mr-2 dd-sort'></i> Todo Tag",
                is_active: false,
            },
            {
                parent_id: -1, 
                index: 1,
                value: "assessmenttype",
                label: "<i class='fal fa-fw fa-star-half-alt mr-2 dd-sort'></i> Assessment Type",
                is_active: false,
            },
            {
                parent_id: -1, 
                index: 2,
                value: "interviewtype",
                label: "<i class='fal fa-fw fa-comments mr-2 dd-sort'></i> Interview Type",
                is_active: false,
            },
            {
                parent_id: -1, 
                index: 3,
                value: "jobtitle",
                label: "<i class='fal fa-fw fa-briefcase mr-2 dd-sort'></i> Job Title",
                is_active: false,
            },{
                parent_id: -1, 
                index: 4,
                value: "jobtype",
                label: "<i class='fal fa-fw fa-id-card-alt mr-2 dd-sort'></i> Job Type",
                is_active: false
            },{
                parent_id: -1,
                index: 5, 
                value: "location",
                label: "<i class='fal fa-fw fa-map-marker-alt mr-2 dd-sort'></i> Location",
                is_active: false
            },{
                parent_id: -1, 
                index: 6,
                value: "posteddate",
                label: "<i class='fal fa-fw fa-calendar-alt mr-2 dd-sort'></i>Posted Date",
                is_active: false
            },{
                parent_id: -1, 
                index: 7,
                value: "requestedby",
                label: "<i class='fal fa-fw fa-user-friends mr-2 dd-sort'></i>Requested By",
                is_active: false
            },{
                parent_id: -1, 
                index: 8,
                value: "rate",
                label: "<i class='fal fa-fw fa-piggy-bank mr-2 dd-sort'></i>Rate",
                is_active: false
            }
        ],
        filterCategories: [
            {
                title: "Is New?",
                label: "Show Only New Todos",
                type: "boolean",
                value: false,
                collapsed: false,
                hasValues: false
            },
            {
                title: "Assessment Type",
                type: "list",
                collapsed: false,
                hasValues: false,
                options: [{
                    label: "1 Way Video Interview",
                    value: false
                },
                {
                    label: "Multiple Choice Questionaire",
                    value: false
                }]
            },
            {
                title: "Interview Type",
                type: "list",
                collapsed: false,
                hasValues: false,
                options: [{
                    label: "Face to Face",
                    value: false
                },
                {
                    label: "Group Interview",
                    value: false
                }]
            },
            {
                title: "Job Title",
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
                title: "Job Type",
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
                title: "Job Location",
                type: "list",
                collapsed: false,
                hasValues: false,
                options: [{
                    label: "Jacksonville FL.",
                    value: false
                },
                {
                    label: "Miami FL.",
                    value: false
                },
                {
                    label: "Atlanta GA.",
                    value: false
                }]
            },
            {
                title: "Contract Rate Range",
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
                title: "Salary Range",
                type: "numberrange",
                value1: "",
                value2: "",
                operator: "-1",
                collapsed: false,
                hasValues: false,
                showCurrency: true
            },
            {
                title: "SOW Rate Range",
                type: "numberrange",
                value1: "",
                value2: "",
                operator: "-1",
                collapsed: false,
                hasValues: false,
                showCurrency: true
            },
            {
                title: "Posted Date",
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
        statusView: {
            rtr: true,
            assessments: false,
            learning: false
        },
        visibleTotal: 0,
        visibleStatus: "",
        flyout: {},
        interviewFlyout: {}
    },
    created: function(){
        this.seed();
    },
    methods: {
        seed: function(){
            var jobTitles = [
                "Senior React Developer",
                "Database Architect",
                "QA Manager",
                "UX Designer",
                "Hadoop Architect"
            ];
            var companies = [
                "High5",
                "ETeam",
                "Apple",
                "Facebook",
                "Google"
            ];
            var locations = [
                "Jacksonville FL.",
                "Miami FL.",
                "Orlando FL.",
                "Tampa FL.",
                "Tallahassee FL."
            ];

            for(var i=0; i<5; i++){
                this.rtrList.push({
                    id: new Date().getTime() * (i+1),
                    jobTitle: jobTitles[i],
                    company: companies[i],
                    location: locations[i],
                    type: "Full Time",
                    rate: "$80K-$90k",
                    posted: "1 day ago",
                    approving: false,
                    approved: false,
                    rejecting: false,
                    rejected: false,
                    statusMsg: "",
                    showStatusProgress: false,
                    startStatusProgress: false,
                    isNew: ((i < 2) ? true : false)
                })
            }


            this.assessmentsList.push({
                id: new Date().getTime() * 2,
                title: "React/Redux",
                type: "1-Way Video Interview",
                posted: "1 day ago",
                requestedBy: "Chuck Young",
                company: "eTeam",
                isNew: false,
                approving: false,
                approved: false,
                rejecting: false,
                rejected: false,
                statusMsg: "",
                showStatusProgress: false,
                startStatusProgress: false,
                totalLength: "120",
                completed: "0%",
            });
            this.assessmentsList.push({
                id: new Date().getTime() * 3,
                title: "OOP principals",
                type: "MCQ",
                posted: "1 day ago",
                requestedBy: "Chuck Young",
                company: "eTeam",
                isNew: true,
                approving: false,
                approved: false,
                rejecting: false,
                rejected: false,
                statusMsg: "",
                showStatusProgress: false,
                startStatusProgress: false,
                totalLength: "120",
                completed: "0%",
            });

            this.interviewList.push({
                title: "UI Senior Developer",
                type: "Face to Face",
                posted: "1 day ago",
                requestedBy: "Chuck Young",
                company: "eTeam",
                isNew: false,
                rejecting: false,
                rejected: false,
                statusMsg: "",
                showStatusProgress: false,
                startStatusProgress: false
            });        
            
            this.masterList = this.rtrList.concat(this.assessmentsList).concat(this.interviewList);

            this.setStatusView("all");

        },
        getTotalByStatus: function(status){
            if(status === "rtr"){
                return this.rtrList.length;
            }
            if(status === "assessments"){
                return this.assessmentsList.length;
            }
            if(status === "interviews"){
                return this.interviewList.length;
            }
            if(status === "all"){
                return this.interviewList.length + this.rtrList.length + this.assessmentsList.length;
            }
        },
        setStatusView: function(status){
            this.statusView ={
                rtr: false,
                assessments: false,
                learning: false
            };
            this.statusView[status] = true;

            if(status === "rtr"){
                this.visibleStatus = "RTR";
                this.visibleTotal = this.getTotalByStatus("rtr");
            }
            if(status === "assessments"){
                this.visibleStatus = "Assessments";
                this.visibleTotal = this.getTotalByStatus("assessments");
            }
            if(status === "interviews"){
                this.visibleStatus = "Interviews";
                this.visibleTotal = this.getTotalByStatus("interviews");
            }
            if(status === "all"){
                this.visibleStatus = "";
                this.visibleTotal = this.getTotalByStatus("all");
            }

            console.log(this.visibleStatus);
            console.log(this.visibleTotal);
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
        approveRTR: function(item){
            var app = this;
            item.approving = true;

            setTimeout(() => {
                item.approving = false
                item.approved = true;
                item.statusMsg="RTR request accepted on "+new Date(Date.now()).toDateString();
                item.showStatusProgress = true;

                var isVisible = false;
                if(CandidateJobs.statusView.rtr){
                    isVisible = true;
                }


                CandidateJobs.requests.push({
                    jobTitle: item.jobTitle,
                    title: item.jobTitle,
                    jobType:  item.type,
                    statusMsg: item.statusMsg,
                    status: "rtr",
                    location: "Jacksonville FL.",
                    timeRemaining: "1 min ago",
                    autoMatchCnt: "0",
                    isExpiringSoon: false,
                    candidates: [],
                    isVisible: isVisible,
                    priceRange: item.rate,
                    rep: "By John Smith @TekSystems"
                });

                setTimeout(() => {
                    item.startStatusProgress = true;
                    setTimeout(() => {
                        item.startStatusProgress = true;
                        app.removeRTR(item);
                    }, 2100);
                }, 100);
            }, 2000);
        },
        scheduleInterview: function(item){
            var ComponentClass = Vue.extend(modalCandidateScheduleInterview);
            var modal = new ComponentClass();

            modal.title="Schedule Interview";
            modal.showTalentScheduleInterview = true;
            modal.isMedium = true;
            modal.body = `
                <div class='text-center'>
                    <h6>`+item.title+`</h6>
                    <p>By `+item.requestedBy+` @`+item.company+`</p>
                </div>
            `;
            modal.parent = this;
            modal.parentItem = item;
    
            modal.$mount();  
            document.body.appendChild(modal.$el); 
        },
        rejectRTR: function(item){
            var app = this;
            item.rejecting = true;

            setTimeout(() => {
                item.rejecting = false
                item.rejected = true;
                item.statusMsg="RTR request rejected on "+new Date(Date.now()).toDateString()
                item.showStatusProgress = true;
                
                setTimeout(() => {
                    item.startStatusProgress = true;
                    setTimeout(() => {
                        item.startStatusProgress = true;
                        app.removeRTR(item);
                    }, 2100);
                }, 100);
            }, 2000);
        },
        rejectAssessment: function(item){
            var app = this;
            item.rejecting = true;

            setTimeout(() => {
                item.rejecting = false
                item.rejected = true;
                item.statusMsg="Assessment rejected on "+new Date(Date.now()).toDateString()
                item.showStatusProgress = true;
                
                setTimeout(() => {
                    item.startStatusProgress = true;
                    setTimeout(() => {
                        item.startStatusProgress = true;
                        app.removeAssessment(item);
                    }, 2100);
                }, 100);
            }, 2000);
        },
        rejectInterview: function(item){
            var app = this;
            item.rejecting = true;

            setTimeout(() => {
                item.rejecting = false
                item.rejected = true;
                item.statusMsg="Interview request rejected on "+new Date(Date.now()).toDateString()
                item.showStatusProgress = true;
                
                setTimeout(() => {
                    item.startStatusProgress = true;
                    setTimeout(() => {
                        item.startStatusProgress = true;
                        app.removeInterview(false);
                    }, 2100);
                }, 100);
            }, 2000);
        },
        removeRTR: function(item){
            var filtered = this.rtrList.filter(function(value, index, arr){ 
                return value.id !== item.id;
            });
            this.rtrList = filtered;        
        },
        removeAssessment: function(item){
            var filtered = this.assessmentsList.filter(function(value, index, arr){ 
                return value.id !== item.id;
            });
            this.assessmentsList = filtered;        
        },
        removeInterview: function(addToScheduledInterviews){
            console.log(addToScheduledInterviews);
            if(this.interviewFlyout.item){
                this.interviewFlyout.item.showStatusProgress = true;
                if(addToScheduledInterviews){
                    this.interviewFlyout.item.statusMsg = "Interview Scheduled for August 1st 2021 @ 2:00pm";
                }else{
                    this.interviewFlyout.item.statusMsg = "You suggested alternative times on August 2nd 2021 @1:34pm";
                }
            }
            if(addToScheduledInterviews){
                var item = this.interviewList[0];
                item.interviewer = "Chuck Young";
                item.duration = "1hr";
                item.date = "8/1/2021 @ 3:00pm";
                item.location = "1200 Downtown Ave Jacksonville FL. 32246";
                item.statusMsg = "Interview Scheduled for August 1st 2021 @ 2:00pm";
                item.showStatusProgress = true;
                item.startStatusProgress = true;
                CandidateInterviewApp.list.push(item);
            }
            this.interviewList = [];      
        },
        showRTR: function(item){
            var ComponentClass = Vue.extend(rtrFlyoutComponent);
            var rtrFlyout = new ComponentClass();


            rtrFlyout.title = item.jobTitle;
            rtrFlyout.item = item;
            rtrFlyout.parent = this;

            this.flyout = rtrFlyout;

            rtrFlyout.$mount();  
            document.body.appendChild(rtrFlyout.$el);
        },
        showInterview: function(item){
            var ComponentClass = Vue.extend(interviewFlyoutComponent);
            var flyout = new ComponentClass();


            flyout.title = item.jobTitle;
            flyout.item = item;
            flyout.parent = this;

            this.interviewFlyout = flyout;

            flyout.$mount();  
            document.body.appendChild(flyout.$el);
        }
    }
});