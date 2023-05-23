var newRequestModal = new Vue({
    el: '#NewRequestModal',
        data: {
        type: "",
        creatingRequest: false,
        hasCreateError: false,
        formComplete: false,
        typeSelected: false,
        contractSelected: false,
        fulltimeSelected: false,
        isIntakeForm: false,
        sowSelected: false,
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
        showUploaderWidget: false,
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
    mounted: function(){
        var today = new Date();

        var month = today.getMonth()+1+"";
        var day = today.getDate()+"";

        if(month.length === 1){
            month = "0"+month;
        }

        if(day.length === 1){
            day = "0"+day;
        }

        var date = today.getFullYear()+'-'+month+'-'+day;

        this.activeFrom = date;
    },
    watch: {
        title: function (val) {
           this.validate();
        },
        startDate: function (val) {
            this.validate();
        },
        completionDate: function (val) {
            this.validate();
        },
        salary: function (val) {
            this.validate();
        },
        hourlyRate: function (val) {
            this.validate();
        },
        budget: function (val) {
            this.validate();
        }
    },
    methods: {
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
        toggleUploader: function(){
            console.log("toggle this");
            if(this.showUploaderWidget){
                this.showUploaderWidget = false;
            }else{
                this.showUploaderWidget = true;
            }
        },
        togglePreferredSuppliers: function(){
            if(this.managepreferredsuppliers){
                this.managepreferredsuppliers = false;
            }else{
                this.managepreferredsuppliers = true;
            }
        },
        onTypeClick: function(value){
            this.resetView();
            this.typeSelected = true;
            if(value === 'fulltime'){
                this.type = "Full Time"
                this.fulltimeSelected = true;
            }
            if(value === 'contract'){
                this.type = "Contract";
                this.contractSelected = true;
            }
            if(value === 'sow'){
                this.type = "SOW"
                this.sowSelected = true;
            }
            this.validate();
        },
        validate: function(){
            if(this.fulltimeSelected){
                var enableCnt = 0;
                if(this.title.length > 0){
                    enableCnt = enableCnt + 1;
                }
                if(this.startDate.length > 0){
                    enableCnt = enableCnt + 1;
                }
                if(this.salary.length > 0){
                    enableCnt = enableCnt + 1;
                }
                if(enableCnt === 3){
                    this.disableSubmit = false;
                }else{
                    this.disableSubmit = true;
                }
            }
            if(this.contractSelected){
                var enableCnt = 0;
                if(this.title.length > 0){
                    enableCnt = enableCnt + 1;
                }
                if(this.startDate.length > 0){
                    enableCnt = enableCnt + 1;
                }
                if(this.durationMonths.length > 0){
                    enableCnt = enableCnt + 1;
                }
                if(this.durationDays.length > 0){
                    enableCnt = enableCnt + 1;
                }
                if(this.hourlyRate.length > 0){
                    enableCnt = enableCnt + 1;
                }
                console.log(enableCnt);
                if(enableCnt === 5){
                    this.disableSubmit = false;
                }else{
                    this.disableSubmit = true;
                }
            }
            if(this.sowSelected){
                var enableCnt = 0;
                if(this.title.length > 0){
                    enableCnt = enableCnt + 1;
                }
                if(this.completionDate.length > 0){
                    enableCnt = enableCnt + 1;
                }
                if(this.budget.length > 0){
                    enableCnt = enableCnt + 1;
                }
                if(enableCnt === 3){
                    this.disableSubmit = false;
                }else{
                    this.disableSubmit = true;
                }
            }
        },
        resetView: function(){
            this.typeSelected = false;
            this.contractSelected = false;
            this.fulltimeSelected = false;
            this.sowSelected = false;
            this.formComplete = false;
            this.disableSubmit = true;
            this.hasCreateError = false;
            var md = document.querySelector('.modal-dialog');
            md.style.width = null;
            anime({
                targets: '#LottieSparkles',
                opacity: 1,
                delay: 1000
            });
            anime({
                targets: '.success-message',
                opacity: 0,
                delay: 1000
            });
        },
        resetFields: function(){
            this.title =  "";
            this.startDate = "";
            this.completionDate = "";
            this.durationMonths = "0";
            this.durationDays = "0";
            this.salary = "";
            this.hourlyRate = "";
            this.budget = "";
            this.location = "";
            this.isRemote = true;
            this.skills = "";
            this.description = "";
        },
        submit: function(){
            var app = this;
            app.creatingRequest = true;
            //simulating an ajax call
            setTimeout(function(){

                app.creatingRequest  = false;

                var success = Math.floor(Math.random() * 10) + 1;
                
                if(success <5){
                    //simulating an error response
                    app.hasCreateError = true;

                }else{
                    //simulating success response
                    app.formComplete = true;
                    var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
                    console.log('width: '+vw);
                    if(vw > 450){
                        anime({
                            targets: '.modal-dialog',
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

                    console.log(lotties);

                    var elem = document.querySelector('.success-animation');
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
                }
            },2000);
        },
        closed: function(){
            var app = this;
            setTimeout(function(){
                app.resetView();
                app.resetFields();
            },1000);
        }
    }
});