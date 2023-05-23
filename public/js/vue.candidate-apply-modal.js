var modalCandidateApply = Vue.component('modal', {
    data() {
        return {
            title: '',
            isMedium: false,
            isLarge: false,
            isFullScreen: false,
            revealOverlay: false,
            revealCard: false,
            removeCard: false,
            parent: {},
            parentItem: {},
            successMessage: {
                title: "",
                subtitle: "",
                details: []
            },
            showSuccessDetails: true,
            formComplete: false,
            hasSubmitError: false,
            submittingForm: false,
            disableSubmit: true,
            suggestTimes: false,
            reason: ""
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
        close: function(e){
            
            if(e.target.classList.contains('closable')){
                var app = this;
                app.removeCard = true;
                setTimeout(() => {
                    app.revealOverlay = false;
                    app.enableBodyScroll();
                    
                    setTimeout(() => {
                        app.$destroy();
                    }, 600);            

                }, 10);
            }
        },
        disableBodyScroll: function(){
            document.body.classList.add("no-scroll");
        },
        enableBodyScroll: function(){
            document.body.classList.remove("no-scroll");
        },
        confirm: function(){
            var app = this;
            app.submittingForm = true;
            app.successMessage.title = "Application Submitted!";
            app.successMessage.subtitle = "<p>Your application for "+this.parentItem.title+" has been submitted</p>";


           // app.parentItem.statusMsg="Interview schduled for "+this.talentInterviewTimeSlot;

            if(this.suggestTimes){
                app.successMessage.title = "Suggestions Submitted"
                app.successMessage.subtitle = "<p>Your time suggestions have been submitted</p>";
                //app.parentItem.statusMsg="You suggested new timeslots for this interview on 9/2/2021 @1:34pm";
            }

            setTimeout(function(){

                app.scrollToTop();

  
                app.successMessage.details = [
                    {
                        label: "Title",
                        value: app.parentItem.jobTitle
                    },
                    {
                        label: "Type",
                        value: app.parentItem.jobType
                    },
                    {
                        label: "Location",
                        value: app.parentItem.location
                    },
                    {
                        label: "Rate",
                        value: app.parentItem.priceRange
                    },
                    {
                        label: "Reason",
                        value: app.reason
                    }
                ]


                

                //simulating success response
                app.formComplete = true;
                app.hideBody = true;
                app.showTalentScheduleInterview = false;
                app.animateSuccess('#DisqualifySuccessAnimation');

                app.parent.updateApplied(app.parentItem);


            },2000);
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
        suggestTimesToggle: function(e){
            e.target.blur()
            if(this.suggestTimes){
                this.suggestTimes = false;
            }else{
                this.suggestTimes = true;
            }
        }
    },
    template: `
    <div class="bl-modal" v-bind:class="{ 'reveal-overlay': revealOverlay,'reveal-card':revealCard, 'remove-card': removeCard, 'bl-modal-fullscreen': isFullScreen }">
    <div 
    v-on:click="close"
    class="bl-modal-overlay closable"></div>
    <div 
    v-on:click="close"
    class="bl-modal-container closable">
        <div 
        class="container closable">
            <div 
            class="row justify-content-center closable">
                <div 
                class="col-lg-10 closable">
                    <div
                    class="bl-modal-card" 
                    v-bind:class="{ 'bl-modal-card-lg': isLarge, 'bl-modal-card-md': isMedium}">
                        <div v-if="!formComplete">
                            <div  class="bl-modal-header">
                                <h6 v-if="title" class="bl-modal-title">{{title}}</h6>
                                <button  type="button" v-on:click="close" class="close p-0 bl-modal-close-btn closable" data-dismiss="modal" aria-label="Close">
                                <i class="fal fa-times closable"></i>
                                </button>
                            </div>
                            <div class="bl-modal-body">            
                                <div v-html="body"></div>
                            </div>
                            <div class="bl-modal-body pt-0">
                                <div class="card card-flat card-lg">
                                    <div class="card-body">
                                        <div class="form-floating">
                                            <textarea v-model="reason" class="form-control" placeholder="Why Me?" style="height: 100px"></textarea>
                                            <label>Why are you a good fit for this position?</label>
                                        </div>
                                    </div>
                                </div> 

                            </div>
                            <div class="modal-footer">
                                <button type="button" v-on:click="close" :disabled="submittingForm" class="btn btn-secondary mr-3 closable">Close</button>
                                <button v-if="!suggestTimes" type="button" v-on:click="confirm"  class="btn btn-primary">
                                    <span v-if="!submittingForm">
                                        Submit Application
                                    </span>
                                    <span v-if="submittingForm">
                                        Submitting
                                    <img width="20px" src="/images/button-loader.gif"/>
                                    </span>
                                </button>
                            </div> 
                        </div>

                        <div  v-bind:class="{ 'd-block': formComplete }" class="section section-sm pb-0" style="display: none;">
                            <div id="DisqualifySuccessAnimation" class="success-animation">
                                <div class="checkmark">
                                    <lottie-player 
                                    id="LottieCheckmark"
                                    background="transparent" 
                                    src="/lottie/checkmark.json"
                                    speed="1"></lottie-player>
                                </div>
                                <div class="sparkles">
                                    <lottie-player 
                                    id="LottieSparkles"
                                    background="transparent" 
                                    src="/lottie/sparkles.json"
                                    speed="1"></lottie-player>
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
                                            <button type="button" v-on:click="close" class="btn btn-secondary mr-2 closable" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>             
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `
});
