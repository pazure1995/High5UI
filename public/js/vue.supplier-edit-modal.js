var modalSupplierEditComponent = Vue.component('suppliereditmodal', {
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
            supplier: {},
            suppliers: [],
            clone: {},
            parent:{},
        }
    },
    mounted: function(){
        console.log(this.supplier);
        this.clone = JSON.parse(JSON.stringify(this.supplier));
        console.log(this.clone);
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
            setTimeout(function(){

                app.scrollToTop();

                app.submittingForm = true;
                app.formComplete = true;
                
            },2000);
        },
        resetSupplierForm: function(){
            this.submittingForm = false;
            this.formComplete = false;
        }
    },
    template: `
<div class="bl-modal" v-bind:class="{ 'reveal-overlay': revealOverlay,'reveal-card':revealCard, 'remove-card': removeCard }">
<div class="bl-modal-overlay"></div>
<div class="bl-modal-container">
    <div class="bl-modal-card bl-modal-card-lg">
        <div class="bl-modal-header">
        <h6 class="bl-modal-title">Edit Supplier</h6>
            <button type="button" v-on:click="close" class="close p-0 bl-modal-close-btn" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div v-if="showBody" class="bl-modal-body">
            
            <div class="container" v-if="!formComplete">
                <div class="row ">
                    <div class="col-lg-12 mb-2 mb-lg-0">
                        <div class="form-floating">
                            <input type="text" v-model="clone.name" class="form-control" placeholder="Enter a job title">
                            <label >Supplier Company Name*</label>
                        </div> 
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p class="mb-1"><label>Point of Contact</label></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 mb-2 mb-lg-0">
                        <div class="form-floating">
                            <input type="text" v-model="clone.pocName"  class="form-control" placeholder="Enter a job title">
                            <label >First and Last Name*</label>
                        </div>
                    </div> 
                    <div class="col-lg-6">        
                        <div class="form-floating">
                            <input type="email" v-model="clone.pocEmail"  class="form-control" placeholder="Enter a job title">
                            <label >Email*</label>
                        </div>
                    </div>
                </div> 
            </div>
            <div v-else>
                <h6>Request Submitted</h6>
                <p>A request to update this supplier has been sent to your administrator.  You will be notified when the administrator approves or rejects your request. </p>
                <div>
                    <button type="button" v-on:click="close"  class="btn btn-secondary btn-sm">Close</button>
                </div>
            </div>
     
        </div>
        <div v-if="!formComplete" class="modal-footer">
            <button type="button" v-on:click="close"  class="btn btn-secondary btn-sm">Cancel</button>
            <button type="button" v-on:click="submit"  class="btn btn-primary btn-sm">
                <span v-if="!submittingForm">Update Supplier</span>
                <span v-if="submittingForm">
                    Updating Supplier
                <img width="20px" src="/images/button-loader.gif"/>
                </span>
            </button>
        </div>
    </div>
</div>
</div>

    `,
});
