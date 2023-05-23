var modalEmployeeComponent = Vue.component('modalemployee', {
    data() {
        return {
            title: '',
            closeBtnText: 'close',
            revealOverlay: false,
            revealCard: false,
            removeCard: false,
            formComplete: false,
            showSuccessDetails: false,
            showSuccessMessage: false,
            submittingForm: false,
            showBody: true,
            size: {
                sm: false,
                md: true,
                lg: false,
                full: false
            },
            successMessage: {
                title: "",
                subtitle: "",
                details: []
            },
            employee:{
                id: "",
                firstName: "",
                middleName: "",
                LastName: "",
                email: "",
                phone: "",
                designation: "",
                role: "-1"
            },
            tabs: {
                excelUpload: false,
                manualEntry: true,
            },
            parent: {},
            employees: {},
            employeeCopy:{},
            flyout: {}
        }
    },
    //enabling the button by checking all required fields are filled out
    computed: {
        isComplete () {
          return this.employee.firstName && this.employee.lastName && this.employee.email;
        }
    },
    created: function () {
        this.show();
    },
    destroyed: function(){
        modal = this.$el;
        modal.parentNode.removeChild(modal);
    },
    methods: {
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
        scrollToTop: function(){
            var myDiv = document.getElementsByClassName("bl-modal-container");
            myDiv[0].scrollTop = 0;
        },
        submit: function(){
            var app = this;

            app.submittingForm = true;
            app.successMessage.title = "Employee Added!";
            app.successMessage.subtitle = "<p>A new employee has been added</p>";
            setTimeout(function(){

                app.scrollToTop();

                app.showBody = false;


                app.successMessage.details = [
                    {
                        label: "Employee",
                        value: app.employee.firstName
                    },
                    {
                        label: "Email",
                        value: app.employee.email
                    },
                    {
                        label: "Role",
                        value: app.employee.role
                    }
                ];

                app.size.md = false;
                app.size.sm = true;
                app.formComplete = true;
                app.hideBody = true;
                app.showSuccessDetails = true;
                app.animateSuccess('#EmployeeManageSuccessAnimation');

                //instead of emitting the event pushing the data to parent from here
                app.parent.employees.push(app.employee);

            },2000);
        },
        update: function(){
            var app = this;

            app.submittingForm = true;
            app.successMessage.title = "Employee Updated!";
            app.successMessage.subtitle = "<p>An existing employee has been updated</p>";

            setTimeout(function(){

                app.scrollToTop();

                app.showBody = false;


                app.successMessage.details = [
                    {
                        label: "Employee",
                        value: app.employeeCopy.firstName
                    },
                    {
                        label: "Email",
                        value: app.employeeCopy.email
                    },
                    {
                        label: "Role",
                        value: app.employeeCopy.role
                    }
                ];

                app.size.md = false;
                app.size.sm = true;
                app.formComplete = true;
                app.hideBody = true;
                app.showSuccessDetails = true;
                app.animateSuccess('#EmployeeManageSuccessAnimation');

                //compare the employee and delete it
                var findTheIndex;
                var compareArray = app.parent.employees.filter(function(employee) {
                    if (employee.id === app.employeeCopy.id){
                        findTheIndex = app.parent.employees.indexOf(employee);
                        app.parent.employees.splice(app.parent.employees.findIndex(function(i){
                            return i.id === employee.id;
                        }), 1);
                    }
                })[0];
                //pushing the updated value to the employees object
                console.log(app.employeeCopy);
                app.parent.employees.splice(findTheIndex, 0, app.employeeCopy);

                console.log(app.parent);
                app.parent.employee = app.employeeCopy;

            },2000);
        },
    },
    template: `
<div class="bl-modal" v-bind:class="{ 'reveal-overlay': revealOverlay,'reveal-card':revealCard, 'remove-card': removeCard }">
    <div class="bl-modal-overlay"></div>
    <div class="bl-modal-container">
        <div class="bl-modal-card" v-bind:class="{'bl-modal-card-sm': size.sm,'bl-modal-card-md': size.md,'bl-modal-card-lg': size.lg,'bl-modal-card-full': size.full}">
            <div class="bl-modal-header">
                <h6 v-if="title" class="bl-modal-title">{{title}}</h6>
                <button type="button" v-on:click="close" class="close p-0 bl-modal-close-btn" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div v-if="showBody" class="bl-modal-body">
                <!-- Tabs -->
                <ul class="nav nav-tabs pt-1 justify-content-center">
                    <li class="nav-item">
                        <button v-bind:class="{active: tabs.excelUpload}" v-on:click="onTabClick('tabs','excelUpload')" type="button" class="nav-link pb-3">
                            Excel Upload
                        </button>
                    </li>
                    <li class="nav-item">
                        <button v-bind:class="{active: tabs.manualEntry}" v-on:click="onTabClick('tabs','manualEntry')" type="button" class="nav-link pb-3">
                            Manual Entry
                        </button>
                    </li>
                </ul>
                <hr class="mt-0" />
                <div v-if="tabs.excelUpload">
                    <h6>Step 1</h6>
                    <p><a href="/docs/candidate-template.xlsx" class="btn">Download the .xlxs template</a></p>
                    <h6>Step 2</h6>
                    <fileuploader></fileuploader>
                </div>
                <div v-if="tabs.manualEntry">
                    <!-- Manual Entry Form Begins here -->
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <div class="form-floating mb-2">
                                <input type="text" id="firstName" aria-describedby="EmployeeFirstName" v-if="title == 'Add Employee' " v-model="employee.firstName" placeholder="First Name" class="form-control" />
                                <input type="text" id="firstName" aria-describedby="EmployeeFirstName" v-if="title == 'Update Employee' " v-model="employeeCopy.firstName" placeholder="First Name" class="form-control" />
                                <label for="firstName">First Name <span class="font-red font-small">*</span></label>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <div class="form-floating mb-2">
                                <input type="text" id="lastName" aria-describedby="EmployeeLastName" v-if="title == 'Add Employee' " v-model="employee.lastName" placeholder="Last Name" class="form-control" />
                                <input type="text" id="lastName" aria-describedby="EmployeeLastName" v-if="title == 'Update Employee' " v-model="employeeCopy.lastName" placeholder="Last Name" class="form-control" />
                                <label for="lastName">Last Name <span class="font-red font-small">*</span></label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <div class="form-floating mb-2">
                                <input type="text" id="employEmailId" aria-describedby="employEmailId" v-if="title == 'Add Employee' " v-model="employee.email" placeholder="Email" class="form-control" />
                                <input type="text" id="employEmailId" aria-describedby="employEmailId" v-if="title == 'Update Employee' " v-model="employeeCopy.email" placeholder="Email" class="form-control" />
                                <label for="employEmailId">Email <span class="font-red font-small">*</span></label>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <div class="form-floating mb-2">
                                <input type="text" id="employeePhone" aria-describedby="employeePhone" v-if="title == 'Add Employee' " v-model="employee.phone" placeholder="Phone" class="form-control" />
                                <input type="text" id="employeePhone" aria-describedby="employeePhone" v-if="title == 'Update Employee' " v-model="employeeCopy.phone" placeholder="Phone" class="form-control" />
                                <label for="employeePhone">Phone</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="form-floating mb-2">
                        
                                <select class="form-select" id="employeeRole" v-if="title == 'Add Employee' " aria-describedby="employeeRole" v-model="employee.role">
                                    <option value="-1" disabled>Select Role</option>
                                    <option value="Recruiter">Recruiter</option>
                                    <option value="Candidate">Candidate</option>
                                    <option value="Hiring manager">Hiring Manager</option>
                                </select>
                                <select class="form-select" id="employeeRole" v-if="title == 'Update Employee' " aria-describedby="employeeRole" v-model="employeeCopy.role">
                                    <option value="-1" disabled>Role</option>
                                    <option value="Recruiter">Recruiter</option>
                                    <option value="Candidate">Candidate</option>
                                    <option value="Hiring Manager">Hiring Manager</option>
                                </select>
                                <label>Role<span class="font-red font-small">*</span></label>
                            </div>
                        </div>
                    </div>
                    <!-- Manual Entry Form ends here -->
                </div>
                <!-- Tabs -->
            </div>
            <div v-bind:class="{ 'd-none': formComplete }" class="modal-footer mt-4 mb-0">
                <button type="button" v-on:click="close" :disabled="submittingForm" class="btn btn-secondary mr-2" data-dismiss="modal">Cancel</button>
                <button v-if="title == 'Add Employee' " type="button" v-on:click="submit" :disabled="!isComplete" class="btn btn-primary">
                    <span v-if="submittingForm == false && showSuccessMessage == false">Submit</span>
                    <span v-if="submittingForm">
                        Adding Employee
                        <img width="20px" src="/images/button-loader.gif" />
                    </span>
                    <span v-if="showSuccessMessage">Employee Added!</span>
                </button>
                <button v-if="title == 'Update Employee' " type="button" v-on:click="update(employee)" class="btn btn-primary">
                    <span v-if="submittingForm == false && showSuccessMessage == false">Save</span>
                    <span v-if="submittingForm">
                        Updating Employee
                        <img width="20px" src="/images/button-loader.gif" />
                    </span>
                    <span v-if="showSuccessMessage">Employee Updated!</span>
                </button>
            </div>
            <div v-bind:class="{ 'd-block': formComplete }" class="section section-sm pb-0" style="display: none;">
                <div id="EmployeeManageSuccessAnimation" class="success-animation">
                    <div class="checkmark">
                        <lottie-player id="LottieCheckmark" background="transparent" src="/lottie/checkmark.json" speed="1"></lottie-player>
                    </div>
                    <div class="sparkles">
                        <lottie-player id="LottieSparkles" background="transparent" src="/lottie/sparkles.json" speed="1"></lottie-player>
                    </div>
                </div>
                <div class="success-message" style="opacity: 0;">
                    <div class="container">
                        <div class="col-lg-12">
                            <h4 class="text-center">{{successMessage.title}}</h4>
                            <div class="text-center" v-if="successMessage.subtitle" v-html="successMessage.subtitle"></div>
                            <div v-if="showSuccessDetails" class="card card-flat card-lg">
                                <div class="card-body">
                                    <div v-for="item in successMessage.details" class="mb-2">
                                        <label class="d-block font-bold pt-0">{{item.label}}</label>
                                        <div v-html="item.value"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center py-4">
                                <button type="button" v-on:click="close" class="btn btn-secondary mr-2" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


    `,
});
