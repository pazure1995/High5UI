var modalTenantComponent = Vue.component('modaltenant', {
    data() {
        return {
            title: '',
            label: '',
            closeBtnText: 'close',
            revealOverlay: false,
            revealCard: false,
            removeCard: false,
            formComplete: false,
            showSuccessDetails: false,
            showSuccessMessage: false,
            submittingForm: false,
            isGeneric: false,
            showBody: true,
            isSmall: false,
            successMessage: {
                title: "",
                subtitle: "",
                details: []
            },
            tenants: [
                {tier: 1,id: 1, text: "TalentYeti"},
                {tier: 1,id: 2, text: "Modis"},
                {tier: 1,id: 4, text: "Logitech" }               
            ],
            item: {
                id: "",
                firstName: "",
                lastName: "",
                type: "-1",
                email: "",
                city: "",
                country: ""
            },
            isAssign: false,
            isUpdate: false,
            parent: {},
            flyout: {}
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
        submit: function(){
            var app = this;

            app.submittingForm = true;
            if(app.isUpdate){
                app.successMessage.title = "User Updated!";
                app.successMessage.details = [
                    {
                        label: "Name",
                        value: "David Macdonald"
                    },
                    {
                        label: "Type",
                        value: "H5 Coordinator"
                    },
                    {
                        label: "Email",
                        value: "someone@company.com"
                    },
                    {
                        label: "City",
                        value: "Jacksonville Fl."
                    },
                    {
                        label: "Country",
                        value: "United States"
                    }
                ]
            }
            if(app.isAssign){
                app.successMessage.title = "Tenants Assigned!";
                app.successMessage.details = [
                    {
                        label: "Name",
                        value: "David Macdonald"
                    },
                    {
                        label: "Tenants",
                        value: "<ul class='ml-3'><li>TalentYeti</li><li>Logitech</li></ul>"
                    }
                ]
            }
            if(app.isGeneric){
                app.successMessage.title = app.label="  Created/Updated";
                app.successMessage.details = [
                    {
                        label: "Property 1",
                        value: "Lorem Ipsum"
                    },
                    {
                        label: "Property 2",
                        value: "Lorem Ipsum"
                    }
                ]
            }
            if(app.isUpdate === false && app.isAssign === false && app.isGeneric === false){
                app.successMessage.title = "User Added!";
                app.successMessage.details = [
                    {
                        label: "Name",
                        value: "David Macdonald"
                    },
                    {
                        label: "Type",
                        value: "H5 Coordinator"
                    },
                    {
                        label: "Email",
                        value: "someone@company.com"
                    },
                    {
                        label: "City",
                        value: "Jacksonville Fl."
                    },
                    {
                        label: "Country",
                        value: "United States"
                    }
                ]
            }
            setTimeout(function(){

                app.scrollToTop();

                app.showBody = false;

                app.isSmall = true;
                app.formComplete = true;
                app.hideBody = true;
                app.showSuccessDetails = true;
                app.animateSuccess('#SuccessAnimation');

                if(!app.isGeneric){
                    app.parent.list.unshift(app.item);
                }


            },2000);
        }
    },
    template: `
<div class="bl-modal" v-bind:class="{ 'reveal-overlay': revealOverlay,'reveal-card':revealCard, 'remove-card': removeCard }">
    <div class="bl-modal-overlay"></div>
    <div class="bl-modal-container">
        <div class="bl-modal-card" v-bind:class="{'bl-modal-card-lg': isSmall === false,'bl-modal-card-md': isSmall === true}">
            <div class="bl-modal-header">
                <h6 v-if="title" class="bl-modal-title">{{title}}</h6>
                <button type="button" v-on:click="close" class="close p-0 bl-modal-close-btn" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div v-if="showBody" class="bl-modal-body pb-0">
                <div v-if="isAssign === false && isGeneric === false" class="card card-flat card-borderless bg-gray4 text-center">
                    <div class="card-body">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="form-floating">
                                        <select v-model="item.type" class="form-control">
                                            <option value="-1">Select Type</option>
                                            <option value="Sales Admin">Sales Admin</option>
                                            <option value="H5 Coordinator">H5 Coordinator</option>
                                            <option value="Community Manager">Community Manager</option>
                                        </select>
                                        <label>User Type</label>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="form-floating">
                                        <input v-model="firstName" type="text" placeholder="First Name" class="form-control"/>
                                        <label>First Name</label>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="form-floating">
                                        <input v-model="lastName" type="text" placeholder="Last Name" class="form-control"/>
                                        <label>Last Name</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-lg-4">
                                    <div class="form-floating">
                                        <input v-model="email" type="text" placeholder="First Name" class="form-control"/>
                                        <label>Email</label>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="form-floating">
                                        <input v-model="city" type="text" placeholder="First Name" class="form-control"/>
                                        <label>City</label>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="form-floating">
                                        <input v-model="country" type="text" placeholder="Last Name" class="form-control"/>
                                        <label>Country</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="isAssign === true" class="card card-flat card-borderless bg-gray4 text-center">
                    <div class="card-body">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 text-left">
                                    <label class="pt-0">Select Tenants</label>
                                    <select2 :options="tenants">
                                        <option disabled value="0">Select one</option>
                                    </select2>
                                </div>                     
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="isGeneric" class="p-5 text-center b-gray3">
                        <p class="mb-0">Put {{label}} form here</p>
                </div>
            </div>
            <div v-bind:class="{ 'd-none': formComplete }" class="modal-footer mt-4 mb-0">
                <button type="button" v-on:click="close" :disabled="submittingForm" class="btn btn-secondary mr-2" data-dismiss="modal">Cancel</button>
                <button type="button" v-on:click="submit"  class="btn btn-primary">
                    <span v-if="submittingForm == false && showSuccessMessage == false">Submit</span>
                    <span v-if="submittingForm">
                        <span v-if="isAssign === false && isGeneric === false">
                            Submitting User
                        </span>
                        <span v-if="isAssign === true">
                            Adding Tenants
                        </span>
                        <span v-if="isGeneric === true">
                            Adding {{label}}
                        </span>
                        <img width="20px" src="/images/button-loader.gif" />
                    </span>
                    <span v-if="showSuccessMessage">
                        <span v-if="isAssign === false && isGeneric === false">
                            User Added!
                        </span>
                        <span v-if="isAssign === true">
                            Tenants Added
                        </span>
                        <span v-if="isGeneric === true">
                            {{label}} Added
                        </span>
                    </span>
                </button>
            </div>
            <div v-bind:class="{ 'd-block': formComplete }" class="section section-sm pb-0" style="display: none;">
                <div id="SuccessAnimation" class="success-animation">
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
