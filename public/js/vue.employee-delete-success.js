var modalEmployeeDeleteComponent = Vue.component('employee-delete-success', {
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
            employee:{},
            employees: {},
            parent:{},
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
        submit: function(employee){
            var app = this;
            app.submittingForm = true;
            app.successMessage.title = "Employee Deleted!";
            app.successMessage.subtitle = "<p>The selected employee has been deleted</p>";
            setTimeout(function(){

                app.scrollToTop();

                app.showBody = false;

                //Subu update the details with values from the user entered in the form
                //these values should be attached to the employee object in the data  
                // - Subu: Done

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
                
                //instead of emitting the event deleting the data to parent from here
                app.parent.employees.splice(app.parent.employees.findIndex(function(i){
                    return i.id === employee.id;
                }), 1);
                app.parent.showFlyout = false;  // closing the flyout after deleting the selected employee
                
            },2000);
        }
    },
    template: `
<div class="bl-modal" v-bind:class="{ 'reveal-overlay': revealOverlay,'reveal-card':revealCard, 'remove-card': removeCard }">
<div class="bl-modal-overlay"></div>
<div class="bl-modal-container">
    <div class="bl-modal-card" 
    v-bind:class="{'bl-modal-card-sm': size.sm,'bl-modal-card-md': size.md,'bl-modal-card-lg': size.lg,'bl-modal-card-full': size.full}">
        <div class="bl-modal-header">
            <button type="button" v-on:click="close" class="close p-0 bl-modal-close-btn" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div v-if="showBody" class="bl-modal-body">
        
            <div class="text-center">
                <div class="avatar avatar-lg avatar-red2"><i class="fas fa-exclamation-triangle fa-fw"></i></div>
                <p class="text-center lead mt-3">
                    Are you sure you want to delete this Employee?  
                </p>
                <p>Name: {{employee.firstName}} {{employee.lastName}}</p>
            </div>
            <div class="text-center my-4">
                <button type="button" v-on:click="close" :disabled="submittingForm" class="btn btn-secondary mr-2" data-dismiss="modal">Cancel</button>
                <button type="button" v-on:click="submit(employee)"  class="btn btn-primary">
                    <span v-if="submittingForm == false && showSuccessMessage == false">Delete</span>
                    <span v-if="submittingForm">
                        Deleting Employee
                        <img width="20px" src="/images/button-loader.gif"/>
                    </span>
                    <span v-if="showSuccessMessage">Employee Deleted!</span>
                </button>
            </div>

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
