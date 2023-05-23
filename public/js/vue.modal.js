var modalComponent = Vue.component('modal', {
    template: '#modal-template',
    data() {
        return {
            modalType: 'alert',
            title: '',
            icon: '',
            body: '',
            closeBtnText: 'close',
            hideCloseButton: false,
            showModalToggleClose: true,
            isMedium: false,
            isLarge: false,
            isFullScreen: false,
            revealOverlay: false,
            revealCard: false,
            removeCard: false,
            candidate: null,
            request: null,
            showTalentScheduleInterview: false,
            showDisqualifiedForm: false,
            showShortListForm: false,
            showSupplierInterviewForm: false,
            showMakeAnOfferForm: false,
            formComplete: false,
            hasSubmitError: false,
            submittingForm: false,
            disableSubmit: true,
            creatingTalent: false,
            disqualifyReason: "",
            hideBody: false,
            showSuccessDetails: true,
            profileFlyout: null,
            interviewType: "-1",
            interviewer: "-1",
            isHMAttending: false,
            colleague: "",
            showCopiedMessage: false,
            revealCopiedMessage: false,
            showPublicShareLink: false,
            showAddCandidate: false,
            showEmailForm: false,
            showAllRequestsLink: false,
            showScheduledInterviews: false,
            showSupplierScheduledInterviews: false,
            showCancelInterviewForm: false,
            showSourceTalent: false,
            showResendRTR: false,
            assessmentTypeSelected: false,
            tovutiSelected: false,
            showAssignAssessment: false,
            isInterviewReschedule: false,
            showDeleteRequestForm: false,
            showEditRequestForm: false,
            showSuccessEditMessage: false,
            shortListForm: {
                hasInterviewType: false,
                hasInterviewer: false,
                is2Way: false,
                isMCQ: false,
                isF2F: false,
                isTelephone: false,
                isExpert: false,
                isHM: false,
                isSuggested: false,
                isGroup: false,
                colleague: "",
                interviewers: "",
                showExpertVendorOptions: false
            },
            successMessage: {
                title: "",
                subtitle: "",
                details: []
            },
            disableSubmit: true,
            numberOfPositions: 1,
            activeFrom: "",
            allowedSubmittals: 1,
            placementFee: "",
            referralFee: "",
            expiresOn: "",
            title: "",
            startDate: "",
            completionDate: "",
            durationMonths: "0",
            durationDays: "0",
            salary: "",
            hourlyRate: "",
            budget: "",
            location: "",
            isRemote: true,
            managepreferredsuppliers: false,
            skills: "",
            description: "",
            talentInterviewTimeSlot: null,
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
            ]},
            docSelected: false,
            excelSelected: false,
            manualSelected: false,
            positionTypes: [
                {tier: 1,id: 1, text: "Contract"},
                {tier: 1,id: 2, text: "Temp To Hire"},
                {tier: 1,id: 3, text: "Fulltime" },
                {tier: 1,id: 4, text: "Part Time" },
                {tier: 1,id: 5, text: "Volunteer" }               
            ],
            skillsets: [
                {tier: 1,id: 1, text: "R&D"},
                {tier: 1,id: 2, text: "Legal"},
                {tier: 1,id: 3, text: "Marketing" },
                {tier: 1,id: 4, text: "Accounting/Finance" },
                {tier: 1,id: 5, text: "Healthcare" }               
            ],
            talent: [{
                id: 0,
                isExpanded: true,
                collapsible: {
                    contact: false,
                    details: false,
                    experience: true,
                    education: true,
                    certifications: true,
                    licenses: true
                }
            }],
            assessmentOptions: [
                {tier: 1,id: 1, text: "Assessment 1"},
                {tier: 1,id: 2, text: "Assesment 2"},
                {tier: 1,id: 3, text: "Assessment 3" }  
            ],
            assessmentType: "-1",
            oneWayInterviewSelected: false,
            twoWayInterviewSelected: false,
            showUploaderWidget: false,
            isFromSubmitScreen: false,
            parent: {},
            parentItem: {}
        }
    },
    created: function () {
        this.show();
    },
    watch: {
        assessmentType: function(val){
            this.assessmentTypeSelected = true;
        },
        interviewType: function (val) {

            this.shortListForm.is2Way = false;
            this.shortListForm.isMCQ = false;
            this.shortListForm.isF2F = false;
            this.shortListForm.isTelephone = false;

            if(val !== "-1"){
                this.shortListForm.hasInterviewType = true;
                if(val === "2Way"){this.shortListForm.is2Way = true}
                if(val === "MCQ"){this.shortListForm.isMCQ = true}
                if(val === "F2F"){this.shortListForm.isF2F = true}
                if(val === "Telephone"){this.shortListForm.isTelephone = true}
            }
        },
        interviewer: function (val) {


            this.shortListForm.isExpert = false;
            this.shortListForm.isHM = false;
            this.shortListForm.isSuggested = false;
            this.shortListForm.isGroup = false;
            this.disableSubmit = true;
            this.isHMAttending = false;
            this.hasInterviewer = true;
            this.disableSubmit = false;
            this.shortListForm.showExpertVendorOptions = false;

            if(val !== "-1"){
                this.shortListForm.hasInterviewer = true;
                if(val === "expert"){this.shortListForm.isExpert = true}
                if(val === "hm"){
                    this.shortListForm.isHM = true;
                    this.isHMAttending = true;
                }
                if(val === "suggested"){this.shortListForm.isSuggested = true}
                if(val === "group"){
                    this.isHMAttending = true;
                    this.shortListForm.isGroup = true
                }
            }

            if(this.shortListForm.isGroup){
                this.disableSubmit = false;
            }
        }
    },
    destroyed: function(){
        modal = this.$el;
        modal.parentNode.removeChild(modal);
    },
    methods: {
        toggleUploader: function(){
            if(this.showUploaderWidget){
                this.showUploaderWidget = false;
            }else{
                this.showUploaderWidget = true;
            }
        },
        handleFileUpload: function(uploader){
            this.showUploaderWidget = false;
            this.description = `
React.js Developer
Jacksonville, FL
We Exist to Transform our Customers and Change Lives
Are you ready for an exciting opportunity to join our products team to help build and launch a new product for a fast growing, global software company? If this describes you and you want to work with a great team in a collaborative environment with a culture that transforms our customers and our team members, we want to hear from you. Don’t wait, this role has high potential for your career.
Summary:
RF-SMART is currently seeking a React.js Developer to work with an agile development team to build and maintain a new application built for RF-SMART. This role will focus primarily on developing and implementing user interface components using React.js concepts and workflows such as Redux, Flux and Webpack. You will also be responsible for profiling and improving front-end performance and documenting our front-end codebase.
To ensure success as a react.js developer, you should have in-depth knowledge of JavaScript and React concepts, excellent front-end coding skills, and a good understanding of progressive web applications. Ultimately, a top-class react.js developer should be able to design and build modern user interface components.
Love Where You Work: Steve Clampitt, Senior Technical Consultant said: “I chose RF-SMART for a few reasons: I’m a former RF-SMART employee; I have quite a few friends that still work here; I believe the culture here is one of the best I’ve ever experienced. That is true for my first tenure here as well as how I’ve been treated so far during the interview and on-boarding process."
Educations, Skills, and Experience:
BS in Computer Science or related field or equivalent professional experience
Demonstrated expertise in React architecture and solid experience with large projects
Minimum of 5 years of professional IT development/programming experience
Development experience with React tools including React.js, Webpack, Redux and Flux in a formal corporate environment
Highly proficient in collaborating with product stakeholders, and technical team members to deliver high-quality products
Experience with Web API consumption and SPA design and implementation
Experience with common development technologies such as HTML5, CSS3, NPM, Yarn, Babel, Webpack, etc.
Familiar working with RESTful APIs, JSON, and GIT
Experience in business applications in a corporate/company environment
Highly detailed, great communication, works well with a team
Knowledge of the following is a plus: Warehouse Manufacturing and Distribution Methodologies, NetSuite SuiteScript, and Shipping
Employer does not sponsor applicants for employment visa status (e.g., H-1B visa status).
General Information:
The above noted job description is not intended to be an exhaustive list of all duties and responsibilities that may be assigned, but rather to give personnel so classified a general sense of the responsibilities and expectations of the job. As the nature of business demands change so, too, may the essential functions of this specific position and/or the skills and abilities required. RF-SMART is an Equal Employment Opportunity (EEO) employer.
RF-SMART
30+ days ago
If you require alternative methods of application or screening, you must approach the employer directly to request this as Indeed is not responsible for the employer's application process.
            `
        },
        assessmentTypeChanged: function(){
            alert('test');
        },
        handleResumeUpload: function(uploader){
            var app = this;
            var cnt = 0;
            app.talent = [];
            uploader.files.forEach(function(obj){
                console.log(obj);
                app.talent.push({
                    id: cnt,
                    filename: obj.name,
                    isExpanded: true,
                    collapsible: {
                        contact: false,
                        details: false,
                        experience: true,
                        education: true,
                        certifications: true,
                        licenses: true
                    }
                });
                cnt++;
            });  
            
            app.docSelected = false;
            app.excelSelected = false;
            app.manualSelected = true;
        },
        onCollapsibleClick: function(id,val){
            if(this.talent[id].collapsible[val]){
                this.talent[id].collapsible[val] = false;
            }else{
                this.talent[id].collapsible[val] = true;
            }
        },
        toggleManualHeader: function(item){
            if(this.talent[item.id].isExpanded){
                this.talent[item.id].isExpanded = false;
            }else{
                this.talent[item.id].isExpanded = true;
            }
        },
        onCandidateAddTypeClick: function(type){

            this.disableSubmit = false;
            this.docSelected = false;
            this.excelSelected = false;
            this.manualSelected = false;

            if(type === "doc"){
                this.docSelected = true;
            }
            if(type === "excel"){
                this.excelSelected = true;
            }
            if(type === "manual"){
                this.manualSelected = true;
            }
        },
        togglePreferredSuppliers: function(){
            if(this.managepreferredsuppliers){
                this.managepreferredsuppliers = false;
            }else{
                this.managepreferredsuppliers = true;
            }
        },
        show: function(){
            this.disableBodyScroll();
            this.revealOverlay = true;
            setTimeout(() => {
                this.revealCard = true;
            }, 10);
        },
        close: function(){
            var app = this;
            app.removeCard = true;
            setTimeout(() => {
                app.revealOverlay = false;
                app.enableBodyScroll();
                
                setTimeout(() => {
                    app.$destroy();
                }, 600);            

            }, 10);
        },
        disableBodyScroll: function(){
            document.body.classList.add("no-scroll");
        },
        enableBodyScroll: function(){
            document.body.classList.remove("no-scroll");
        },
        animateSuccess: function(target){
            var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
                

            if(vw > 450){
                anime({
                    targets: '.bl-modal-body',
                    width: 400
                });
            }

            var lotties =`<div class="checkmark">
                        <lottie-player 
                        id="LottieCheckmark"
                        background="transparent" 
                        src="/lottie/checkmark.json"
                        speed="1" autoplay></lottie-player>
                    </div>
                    <div class="sparkles">
                        <lottie-player 
                        id="LottieSparkles"
                        background="transparent" 
                        src="/lottie/sparkles.json"
                        speed="1" autoplay></lottie-player>
                    </div>`;

        

            var elem = document.querySelector(target);
            var html = elem.innerHTML
            elem.innerHTML = lotties;

            anime({
                targets: '#LottieSparkles',
                opacity: 0,
                delay: 1000
            });
            anime({
                targets: '.success-message',
                opacity: 1,
                delay: 800,
                easing: 'linear'
            });
        },
        rescheduleInterview: function(){
            this.close();
            requestApp.scheduleInterview(this.candidate);
        },
        cancelInterview: function(){
            this.showCancelInterviewForm = true;
        },
        disregardCancelInterview: function(){
            this.showCancelInterviewForm = false;
        },
        copyShareLink: function(){
            var app = this;
            app.showCopiedMessage = true;
            setTimeout(function(){
                app.revealCopiedMessage = true;
            },500);
            setTimeout(function(){
                app.revealCopiedMessage = false;
                setTimeout(function(){
                    app.showCopiedMessage = false;
                },500);
            },2500);
        },
        confirmScheduledInterview: function(){
            var app = this;

            app.submittingForm = true;
            app.successMessage.title = "Interview Scheduled!";
            app.successMessage.subtitle = "<p>Your Interview for UI Senior Developer Has Been Scheduled</p>";
            app.parentItem.statusMsg="Interview schduled for "+this.talentInterviewTimeSlot

            setTimeout(function(){

                app.scrollToTop();

  
                app.successMessage.details = [
                    {
                        label: "Type",
                        value: "Face To Face"
                    },
                    {
                        label: "Location",
                        value: "1200 Downtown Ave Jacksonville FL. 32246"
                    },
                    {
                        label: "Time",
                        value: this.talentInterviewTimeSlot
                    },
                    {
                        label: "Add To",
                        value: `<div class="mt-2">
                        <a href="#" target="_blank" class="btn btn-secondary">
                        Google Calendar
                        </a>
                        &nbsp;&nbsp;
                        <a href="#" class="btn btn-secondary">
                            Outlook Calendar (.ics)
                        </a>
                        &nbsp;&nbsp;
                        <a
                            href="#"
                            target="_blank"
                            class="btn btn-secondary"
                        >
                            Yahoo Calendar
                        </a>
                    </div>
                    `
                    }
                ]

                

                //simulating success response
                app.formComplete = true;
                app.hideBody = true;
                app.showTalentScheduleInterview = false;
                app.animateSuccess('#DisqualifySuccessAnimation');
                CandidateRequests.removeInterview();

            },2000);
        },
        submitAssignAssessment: function(candidate){
            var app = this;

            app.submittingForm = true;
            app.successMessage.title = "Assessment Assigned!";
            app.successMessage.subtitle = "<p>Your Assessment has been assigned.</p>";
            console.log(candidate);
            setTimeout(function(){

                app.scrollToTop();

                if(!candidate.candidateName){
                    candidate.canddiateName = candidate.name;
                }

                app.showAssignAssessment = false;
                app.successMessage.details = [
                    {
                        label: "Candidate",
                        value: ""+candidate.candidateName
                    },
                    {
                        label: "Assessment Type",
                        value: "Tovuti"
                    },
                    {
                        label: "Assessment",
                        value: "Communications Skills"
                    },
                    {
                        label: "Date Sent",
                        value: new Date()+""
                    }
                ]



                //simulating success response
                app.formComplete = true;
                app.hideBody = true;
                app.animateSuccess('#DisqualifySuccessAnimation');

            },2000);
        },
        submitResendRTR: function(candidate){
            var app = this;

            app.submittingForm = true;
            app.successMessage.title = "RTR Sent!";
            app.successMessage.subtitle = "<p>Your RTR request has been resent.</p>";
            console.log(candidate);
            setTimeout(function(){

                app.scrollToTop();

                app.showResendRTR = false;
                app.successMessage.details = [
                    {
                        label: "Talent Name",
                        value: "<a href='/recruiter/talent/12312321-2'>"+candidate.candidateName+"</a>"
                    },
                    {
                        label: "Date Sent",
                        value: new Date()+""
                    }
                ]



                //simulating success response
                app.formComplete = true;
                app.hideBody = true;
                app.animateSuccess('#DisqualifySuccessAnimation');

            },2000);
        },
        submitEmailShare: function(){
            var app = this;

            app.submittingForm = true;
            app.successMessage.title = "Request Details Shared!";
            app.successMessage.subtitle = "<p>Your request for a Full Time Java Developer and it's details have been sent to johnD@company.com</p>";
            setTimeout(function(){

                app.scrollToTop();

                app.showEmailForm = false;
                app.successMessage.details = [
                    {
                        label: "Email",
                        value: "johnD@company.com"
                    },
                    {
                        label: "Date Sent",
                        value: new Date()+""
                    }
                ]



                //simulating success response
                app.formComplete = true;
                app.hideBody = true;
                app.animateSuccess('#DisqualifySuccessAnimation');

            },2000);
        },
        submitCreateTalent: function(){
            var app = this;

            app.submittingForm = true;
            app.successMessage.title = "Talent Created!";
            app.successMessage.subtitle = "<p>Your talent was created successfully</p>";
            setTimeout(function(){

                app.scrollToTop();

                app.showAddCandidate = false;
                if(app.talent.length === 1){
                    app.successMessage.details = [
                        {
                            label: "Name",
                            value: "John Doe"
                        },
                        {
                            label: "Email",
                            value: "johnD@company.com"
                        },
                        {
                            label: "Date Created",
                            value: new Date()+""
                        }
                    ]
                }else{
                    app.successMessage.details = [
                        {
                            label: "Candidate Name / Email",
                            value: "John Doe / johnD@company.com"
                        },
                        {
                            label: "Candidate Name / Email",
                            value: "Rene Junto / rj@company.com"
                        },
                        {
                            label: "Candidate Name / Email",
                            value: "Carrie Morgan / camorgan@company.com"
                        },
                        {
                            label: "Date Created",
                            value: new Date()+""
                        }
                    ]  
                }



                //simulating success response
                app.formComplete = true;
                app.hideBody = true;
                app.animateSuccess('#DisqualifySuccessAnimation');

            },2000);
        },
        submitEditRequest: function(){
            var app = this;

            app.submittingForm = true;
            setTimeout(function(){

                app.submittingForm = false;
                app.showSuccessEditMessage = true;
                setTimeout(function(){
                    app.showSuccessEditMessage = false;
                },2000);

            },2000);
        },
        submitSourceTalent: function(candidate){
            var app = this;

            app.submittingForm = true;
            app.successMessage.title = "Talent Submitted!";
            if(!candidate.bulkList){
                app.successMessage.subtitle = "<p>Your have successfully submitted <strong>"+candidate.candidateName+"</strong> for the position of <strong>"+candidate.jobTitle+"</strong></p>";
            }
            setTimeout(function(){

                app.scrollToTop();


                app.showSourceTalent = false;
                app.successMessage.details = [
                    {
                        label: "Position Title",
                        value: "<a href='/recruiter/jobs/232324324'>"+candidate.jobTitle+"</a>"
                    },
                    {
                        label: "Position ID",
                        value: "<a href='/recruiter/jobs/232324324'>334023-2</a>"
                    },
                    {
                        label: "Rate",
                        value: "80,000 USD/annual"
                    },
                    {
                        label: "Date Submitted",
                        value: new Date()+""
                    }
                ];
              
                app.successMessage.details = [
                    {
                        label: "Position Title",
                        value: "<a href='/recruiter/jobs/232324324'>"+candidate.jobTitle+"</a>"
                    },
                    {
                        label: "Position ID",
                        value: "<a href='/recruiter/jobs/232324324'>334023-2</a>"
                    },
                    {
                        label: "Talent Name",
                        value: "<a href='/recruiter/talent/232324324'>"+candidate.candidateName+"</a>"
                    },
                    {
                        label: "Rate",
                        value: "80,000 USD/annual"
                    },
                    {
                        label: "Date Submitted",
                        value: new Date()+""
                    }
                ];
                
                if(candidate.bulkList){
                    app.successMessage.details = [
                        {
                            label: "Position Title",
                            value: "<a href='/recruiter/jobs/232324324'>"+candidate.jobTitle+"</a>"
                        },
                        {
                            label: "Position ID",
                            value: "<a href='/recruiter/jobs/232324324'>334023-2</a>"
                        },
                        {
                            label: "Rate",
                            value: "80,000 USD/annual"
                        },
                        {
                            label: "Date Submitted",
                            value: new Date()+""
                        },
                        {
                            label: "Submitted Talent",
                            value: "<div class='mt-2'>"+candidate.bulkList+"</div>"
                        }
                    ];
                }
                if(candidate.isFromSubmitScreen){
                    app.successMessage.details = [
                        {
                            label: "Candidate Name",
                            value: "<a href='/recruiter/talent/232324324'>"+candidate.name+"</a>"
                        },
                        {
                            label: "Rate",
                            value: "80,000 USD/annual"
                        },
                        {
                            label: "Date Submitted",
                            value: new Date()+""
                        },
                        {
                            label: "Submitted Jobs",
                            value: "<div class='mt-2'>"+candidate.bulkList+"</div>"
                        }
                    ];                 
                }



                //simulating success response
                app.formComplete = true;
                app.hideBody = true;
                app.animateSuccess('#DisqualifySuccessAnimation');

                if(candidate.isAutomatched){
                    candidate.isAutomatched = false;
                    candidate.isSourced = true;
                    requestApp.automatchedCandidates = requestApp.automatchedCandidates .filter(function( obj ) {
                        return obj.name !== candidate.name;
                    });
                    candidate.isReviewed = true;
                    requestApp.hasReviewed();
                    requestApp.sourcedCandidates.push(candidate);
                }
                if(candidate.isFromSourcedScreen){
                    var isBulk = false;
                    if(candidate.bulkList){
                        isBulk = true;
                    }
    
                    requestApp.candidateSourcedComplete(candidate,isBulk);
                }
                if(candidate.isFromTalentProfileScreen){
                    allCandidatesView.candidateSourcedComplete(candidate);
                }
                if(candidate.isFromSubmitScreen){
                    var isBulk = false;
                    if(candidate.bulkList){
                        isBulk = true;
                    }
                    submitApp.removeRequest(candidate.request,isBulk);  
                }

            },2000);
        },
        submitDeleteRequest: function(){
            var app = this;

            app.submittingForm = true;
            app.successMessage.title = "Request Deleted!";
            app.successMessage.subtitle = "<p>Your request for a Full Time Java Developer and all of it's data has been deleted</p>";
            setTimeout(function(){

                app.scrollToTop();

                app.showDeleteRequestForm = false;
                app.creatingRequest  = false;
                app.showAllRequestsLink = true;
                app.successMessage.details = [
                    {
                        label: "Date Deleted",
                        value: new Date()+""
                    }
                ]



                //simulating success response
                app.formComplete = true;
                app.hideBody = true;
                app.animateSuccess('#DisqualifySuccessAnimation');

            },2000);
        },
        submitMakeAnOffer: function(){

            var app = this;

            app.submittingForm = true;
            app.successMessage.title = "Offer Submitted!";
            app.successMessage.subtitle = "<p class='text-center'>An offer has been extended to "+app.candidate.name+" for this request</p><p class='text-center'>Your High5 coordinator will handle the offer package and negotiations with the candidate from here.  Once the candidate has made a decision you will be notified. </p>"
            app.successMessage.details = [
                {
                    label: "Name",
                    value: app.candidate.name
                },
                {
                    label: "Date Submitted",
                    value: new Date()+""
                }
            ]
            setTimeout(function(){

                app.scrollToTop();

                app.creatingRequest  = false;

                //simulating success response
                app.formComplete = true;
                app.showMakeAnOfferForm = false;
                app.hideBody = true;
                app.animateSuccess('#DisqualifySuccessAnimation');



                if(app.candidate.isSubmitted){
                    requestApp.submittedCandidates = requestApp.submittedCandidates .filter(function( obj ) {
                        return obj.name !== app.candidate.name;
                    });
                }
                if(app.candidate.isShortlisted){
                    requestApp.shortListedCandidates = requestApp.shortListedCandidates .filter(function( obj ) {
                        return obj.name !== app.candidate.name;
                    });
                }
                if(app.candidate.isDisqualified){
                    requestApp.disqualifiedCandidates = requestApp.disqualifiedCandidates .filter(function( obj ) {
                        return obj.name !== app.candidate.name;
                    });
                }

                app.candidate.isSubmitted = false;
                app.candidate.isShortlisted = false;
                app.candidate.isDisqualified = false;
                app.candidate.isOffered = true;
                app.candidate.history.unshift({
                    timestamp: '1 min ago',
                    description: 'Offer Submitted',
                        comments: [
                            {
                                author: "System Generated",
                                message: "Offer has been submitted.  The offer package is not available at this time"
                            }
                        ]
                    });

                app.candidate.status = "<span class='tag tag-red1'>Offered</span>";
                app.candidate.updatedOn = "1 min ago";


                if(app.profileFlyout !== null){
                    app.profileFlyout.isDisqualified = false;
                    app.profileFlyout.isSubmitted = false;
                    app.profileFlyout.isInterviewed = false;
                    app.profileFlyout.isShortlisted = false;
                    app.profileFlyout.isOffered = true;
                    app.profileFlyout.status = "<span class='tag'>Offered</span>";
                    app.profileFlyout.history = app.candidate.history;
                    console.log(app.profileFlyout);
                }
                

                requestApp.offeredCandidates.unshift(app.candidate);

  
            },2000);
        },  
        submitCancelInterview: function(){
            var app = this;

            app.submittingForm = true;
            app.successMessage.title = "Interview Canceled!";
            app.successMessage.subtitle = "<p>Your scheduled interview with "+app.candidate.name+" has been canceled</p>";
            setTimeout(function(){

                app.scrollToTop();

                app.creatingRequest  = false;

                app.successMessage.details = [
                    {
                        label: "Reason for Canceling",
                        value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    }
                ]


                //simulating success response
                app.formComplete = true;
                app.showScheduledInterviews = false;
                app.hideBody = true;
                app.animateSuccess('#DisqualifySuccessAnimation');

            },2000);
        },
        submitDisqualify: function(){
            var app = this;

            app.submittingForm = true;
            app.successMessage.title = "Candidate Disqualified!";
            app.successMessage.subtitle = "<p class='text-center'>"+app.candidate.name+" has been disqualified from this request</p>"
            app.successMessage.details = [
                {
                    label: "Name",
                    value: app.candidate.name
                },
                {
                    label: "Submitted By",
                    value: app.candidate.supplier
                },
                {
                    label: "Reasons",
                    value: "Unsatisfactory Interivew"
                },
                {
                    label: "Additional comments or feedback",
                    value: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
                }
            ]
            setTimeout(function(){

                app.scrollToTop();

                app.creatingRequest  = false;

                //simulating success response
                app.formComplete = true;
                app.showDisqualifiedForm = false;
                app.hideBody = true;
                app.animateSuccess('#DisqualifySuccessAnimation');


                if(app.candidate.isSubmitted){
                    //remove from submttted
                    requestApp.submittedCandidates = requestApp.submittedCandidates .filter(function( obj ) {
                        return obj.name !== app.candidate.name;
                    });
                }
                if(app.candidate.isInterviewed){
                    requestApp.interviewedCandidates = requestApp.interviewedCandidates .filter(function( obj ) {
                        return obj.name !== app.candidate.name;
                    });
                }

                if(app.candidate.isShortlisted){
                    requestApp.shortListedCandidates = requestApp.shortListedCandidates .filter(function( obj ) {
                        return obj.name !== app.candidate.name;
                    });
                }

                app.candidate.isSubmitted = false;
                app.candidate.isShortlisted = false;
                app.candidate.isDisqualified = true;
                app.candidate.isOffered = false;
                app.candidate.reason = "Does Not Meet Job Requirements / Skill Set does not Match";
                app.candidate.history.unshift({
                    timestamp: '1 min ago',
                    description: 'Disqualified Feedback',
                        comments: [
                            {
                                author: "Garrett M. ",
                                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            }
                        ]
                    },{
                        timestamp: '1 min ago',
                        description: 'Disqualified',
                        comments: [
                            {
                                author: "System Generated",
                                message: app.candidate.reason
                            }
                        ]
                    });

                app.candidate.status = "<span class='tag tag-red1'>Disqualified</span>";
                app.candidate.updatedOn = "1 min ago";

                if(app.profileFlyout !== null){
                    app.profileFlyout.isDisqualified = true;
                    app.profileFlyout.isSubmitted = false;
                    app.profileFlyout.isInterviewed = false;
                    app.profileFlyout.isShortlisted = false;
                    app.profileFlyout.isOffered = false;
                    app.profileFlyout.status = "<span class='tag tag-red1'>Disqualified</span>";
                    app.profileFlyout.history = app.candidate.history;

                }
                

                requestApp.disqualifiedCandidates.unshift(app.candidate);

  
            },2000);
        },
        scrollToTop: function(){
            var myDiv = document.getElementsByClassName("bl-modal-container");
            myDiv[0].scrollTop = 0;
        },
        toggleExpertVettedOptions: function(val){
            this.shortListForm.showExpertVendorOptions = val;
        },
        submitSupplierInterview: function(){
            var app = this;

            app.submittingForm = true;
            app.successMessage.title = "Interview Scheduled!";
            app.successMessage.subtitle = "<p class='text-center'>"+app.candidate.company+" has been scheduled for an interview</p>"
            app.successMessage.details = [
                {
                    label: "Name",
                    value: app.candidate.name
                },
                {
                    label: "Interview Type",
                    value: "Phone"
                },
                {
                    label: "Interviewer(s)",
                    value: "Garrett M"
                },
                {
                    label: "Available Timeslots",
                    value: "<ul class='ml-3'><li>3/5/2021 @3:00 pm</li><li> 3/7/2021 @3:00 pm</li><li> 3/15/2021 @11:00 am</li><li>3/15/2021 @1:00 pm</li></ul>"
                },
                {
                    label: "Interview Duration",
                    value: "1 Hour"
                },
            ]
            setTimeout(function(){

                app.scrollToTop();

                app.creatingRequest  = false;

                //simulating success response
                app.formComplete = true;
                app.showSupplierInterviewForm= false;
                app.hideBody = true;
                app.animateSuccess('#DisqualifySuccessAnimation');
                app.candidate.hasScheduledInterviews = true;


  
            },2000);
        },
        submitShortList: function(){
            var app = this;

            app.submittingForm = true;
            app.successMessage.title = "Candidate Shortlisted!";
            app.successMessage.subtitle = "<p class='text-center'>"+app.candidate.name+" has been shortlisted</p><p>Your High5 Coordinator will begin the process to schedule the interview you've requested and contact you with any further questions.</p>"
            if(app.isInterviewReschedule){
                app.successMessage.title = "Interview Requested!";
                app.successMessage.subtitle = "<p class='text-center'>An interview has been requested with "+app.candidate.name+"</p>"
            }
            app.successMessage.details = [
                {
                    label: "Name",
                    value: app.candidate.name
                },
                {
                    label: "Interview Type",
                    value: "Phone"
                },
                {
                    label: "Interviewer(s)",
                    value: "Garrett M"
                },
                {
                    label: "Available Timeslots",
                    value: "<ul class='ml-3'><li>3/5/2021 @3:00 pm</li><li> 3/7/2021 @3:00 pm</li><li> 3/15/2021 @11:00 am</li><li>3/15/2021 @1:00 pm</li></ul>"
                },
                {
                    label: "Interview Duration",
                    value: "1 Hour"
                },
            ]
            setTimeout(function(){

                app.scrollToTop();

                app.creatingRequest  = false;

                //simulating success response
                app.formComplete = true;
                app.showShortListForm= false;
                app.hideBody = true;
                app.animateSuccess('#DisqualifySuccessAnimation');


                if(app.candidate.isSubmitted){
                    //remove from submttted
                    requestApp.submittedCandidates = requestApp.submittedCandidates .filter(function( obj ) {
                        return obj.name !== app.candidate.name;
                    });
                }

                if(app.candidate.isDisqualified){
                    //remove from submttted
                    requestApp.disqualifiedCandidates = requestApp.disqualifiedCandidates .filter(function( obj ) {
                        return obj.name !== app.candidate.name;
                    });
                }

                app.candidate.isSubmitted = false;
                app.candidate.isShortlisted = true;
                app.candidate.history.unshift({
                    timestamp: '1 min ago',
                    description: 'Candidate Shortlisted',
                    comments: [
                            {
                                author: "System Geneartoed",
                                message: "Video interview scheduleded for 3/5/2021"
                            }
                    ]
                    });

                app.candidate.status = "<span class='tag'>Shortlisted</span>";
                app.candidate.updatedOn = "1 min ago";


                if(app.profileFlyout !== null){
                    app.profileFlyout.isDisqualified = false;
                    app.profileFlyout.isSubmitted = false;
                    app.profileFlyout.isInterviewed = false;
                    app.profileFlyout.isShortlisted = true;
                    app.profileFlyout.isOffered = false;
                    app.profileFlyout.status = "<span class='tag'>Shortlisted</span>";
                    app.profileFlyout.history = app.candidate.history;

                }
                

                requestApp.shortListedCandidates.push(app.candidate);

  
            },2000);
        },
        validateDisqualify: function(){
            this.disableSubmit = false;
        }
    }
});
