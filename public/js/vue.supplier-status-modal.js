var modalSupplierStatusComponent = Vue.component('supplier-status-modal', {
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
            isActivate: false,
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
            supplier:{},
            suppliers: [],
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
        submit: function(supplier){
            var app = this;
            app.submittingForm = true;
            app.successMessage.title = "Supplier Deactivated!";
            app.successMessage.subtitle = "<p>The selected suppliers has been deactivated</p>";
            setTimeout(function(){

                app.scrollToTop();

                app.showBody = false;


                app.successMessage.details = [
                    {
                        label: "Supplier",
                        value: app.supplier.name
                    }
                ];

                app.size.md = false;
                app.size.sm = true;
                app.formComplete = true;
                app.hideBody = true;
                app.showSuccessDetails = true;
                app.animateSuccess('#SuccessAnimation');


                for(var i = 0; i<app.suppliers.length; i++){
                    if(app.suppliers[i].id === supplier.id){
                        if(app.isActivate){
                            app.suppliers[i].isActive = true;
                        }else{
                            app.suppliers[i].isActive = false;
                        }
                    }
                }

                
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
                <div v-if="isActivate">
                    <div class="avatar avatar-lg avatar-blue1"><i class="fas fa-info fa-fw"></i></div>
                    <p class="text-center lead mt-3">
                        Are you sure you want to activate this supplier?  
                    </p>
                </div>
                <div v-else>
                    <div class="avatar avatar-lg avatar-red2"><i class="fas fa-exclamation-triangle fa-fw"></i></div>
                    <p class="text-center lead mt-3">
                        Are you sure you want to deactivate this supplier?  
                    </p>
                </div>              
                <p>Name: {{supplier.name}}</p>
            </div>
            <div class="text-center my-4">
                <button type="button" v-on:click="close" :disabled="submittingForm" class="btn btn-secondary mr-2" data-dismiss="modal">No, Cancel</button>
                <div class="d-inline-block" v-if="isActivate">
                    <button type="button" v-on:click="submit(supplier)"  class="btn btn-primary">
                        <span v-if="submittingForm == false && showSuccessMessage == false">Yes, Activate</span>
                        <span v-if="submittingForm">
                            Activating Supplier
                            <img width="20px" src="/images/button-loader.gif"/>
                        </span>
                        <span v-if="showSuccessMessage">Supplier Activated!</span>
                    </button>
                </div>
                <div v-else class="d-inline-block">
                    <button type="button" v-on:click="submit(supplier)"  class="btn btn-primary">
                        <span v-if="submittingForm == false && showSuccessMessage == false">Yes, Deactivate</span>
                        <span v-if="submittingForm">
                            Deactivating Supplier
                            <img width="20px" src="/images/button-loader.gif"/>
                        </span>
                        <span v-if="showSuccessMessage">Supplier Deactivated!</span>
                    </button>
                </div>
            </div>

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
