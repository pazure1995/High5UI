var modalCandidateScheduleInterview = Vue.component('modal', {
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
            talentInterviewTimeSlot: null,
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
            suggestTimes: false
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
		deleteItem: function(check,e){
			this.parent.deleteItem(check);
            this.close(e);
		},
        confirm: function(){
            var app = this;

            app.submittingForm = true;
            app.successMessage.title = "Interview Scheduled!";
            app.successMessage.subtitle = "<p>Your Interview for UI Senior Developer Has Been Scheduled</p>";


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
                        label: "Duration",
                        value: "1hr"
                    },
                    {
                        label: "Add To",
                        value: `<div class="mt-2">
                        <a href="#" target="_blank" class="btn btn-sm btn-secondary">
                        Google Calendar
                        </a>
                        &nbsp;&nbsp;
                        <a href="#" class="btn btn-sm btn-secondary">
                            Outlook Calendar (.ics)
                        </a>
                        &nbsp;&nbsp;
                        <a
                            href="#"
                            target="_blank"
                            class="btn btn-sm btn-secondary"
                        >
                            Yahoo Calendar
                        </a>
                    </div>
                    `
                    }
                ]

                if(app.suggestTimes){
                    app.successMessage.details = [
                        {
                            label: "Job Title",
                            value: "UI Senior Developer"
                        },
                        {
                            label: "Type",
                            value: "Face To Face"
                        },
                        {
                            label: "Location",
                            value: "1200 Downtown Ave Jacksonville FL. 32246"
                        },
                        {
                            label: "Duration",
                            value: "1hr"
                        },
                        {
                            label: "Times Suggested",
                            value: `<ul class="mt-2 ml-3">
                                <li>August 4th 2021 @11:00am</li>
                                <li>August 4th 2021 @12:00pm</li>
                                <li>August 6th 2021 @2:00pm</li>
                                <li>August 5th 2021 @2:00pm</li>
                        </ul>
                        `
                        }
                    ]
                }

                

                //simulating success response
                app.formComplete = true;
                app.hideBody = true;
                app.showTalentScheduleInterview = false;
                app.animateSuccess('#DisqualifySuccessAnimation');

                if(app.suggestTimes){
                    CandidateRequests.removeInterview(false);
                }else{
                    CandidateRequests.removeInterview(true);
                }

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
                                <p class="mb-1"><strong>Interview Details</strong></p>
                                <div class="card card-flat card-lg">
                                    <div class="card-body">
                                        <div class="mb-2">
                                            <label class="d-block font-bold pt-0">Type</label>
                                            <div>Face to Face</div>
                                        </div>
                                        <div class="mb-2">
                                            <label class="d-block font-bold pt-0">Location</label>
                                            <div>1200 Downtown Ave Jacksonville FL. 32246</div>
                                        </div>
                                        <div class="mb-2">
                                            <label class="d-block font-bold pt-0">Additional Information</label>
                                            <p>Please be ready to present on your portolio of work</p>
                                        </div>
                                    </div>
                                </div> 
                                <div v-if="!suggestTimes">
                                    <p class="mb-1 mt-3"><strong>Available Timeslots</strong></p>
                                    <div class="card card-flat card-lg">
                                        <div class="card-body">
                                            <p>Please select one of the available time slots</p>
                                            <div class="form-check my-2">
                                                <input 
                                                v-model="talentInterviewTimeSlot" v-bind:value="'Tuesday August 9th 2021 @ 11:00 am'"
                                                class="form-check-input p-0 mt-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                                <label class="form-check-label pt-1" for="flexRadioDefault1">
                                                Tuesday August 9th 2021 @ 11:00 am
                                                </label>
                                            </div>
                                            <div class="form-check my-2">
                                                <input 
                                                v-model="talentInterviewTimeSlot" v-bind:value="'Tuesday August 9th 2021 @ 2:00 pm'"
                                                class="form-check-input p-0 mt-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                                                <label class="form-check-label pt-1" for="flexRadioDefault2">
                                                Tuesday August 9th 2021 @ 2:00 pm
                                                </label>
                                            </div>
                                            <button 
                                            v-on:click="suggestTimesToggle($event)""
                                            type="text" class="btn btn-text mt-2">Suggest another time?</button>
                                        </div>
                                    </div> 
                                </div>
                                <div v-else>
                                    <div class="card card-flat bg-gray4 mt-3">
                                        <div class="card-body">
                                            <p>Please suggest 4 available timeslots for this interview based on your current availability</p>
                                            <div class="row mb-2">
                                                <div class="col-lg-12 d-flex flex-column flex-md-row">
                                                    <div class="form-floating form-date w-100"><label>Available Date Option 1*</label> <input type="date" placeholder="Enter Date" class="form-control date" /></div>
                                                    <div class="w-100 d-flex">
                                                        <div class="form-floating w-50"><input type="text" placeholder="Enter Time" class="form-control" /> <label>Time</label></div>
                                                        <div class="form-floating w-50">
                                                            <select id="floatingSelect" class="form-select">
                                                                <option selected="selected" value="AM">AM</option>
                                                                <option value="PM">PM</option>
                                                            </select>
                                                            <label>AM/PM</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mb-2">
                                                <div class="col-lg-12 d-flex flex-column flex-md-row">
                                                    <div class="form-floating form-date w-100"><label>Available Date Option 2*</label> <input type="date" placeholder="Enter Date" class="form-control date" /></div>
                                                    <div class="w-100 d-flex">
                                                        <div class="form-floating w-50"><input type="text" placeholder="Enter Time" class="form-control" /> <label>Time</label></div>
                                                        <div class="form-floating w-50">
                                                            <select id="floatingSelect" class="form-select">
                                                                <option selected="selected" value="AM">AM</option>
                                                                <option value="PM">PM</option>
                                                            </select>
                                                            <label>AM/PM</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mb-2">
                                                <div class="col-lg-12 d-flex flex-column flex-md-row">
                                                    <div class="form-floating form-date w-100"><label>Available Date Option 3*</label> <input type="date" placeholder="Enter Date" class="form-control date" /></div>
                                                    <div class="w-100 d-flex">
                                                        <div class="form-floating w-50"><input type="text" placeholder="Enter Time" class="form-control" /> <label>Time</label></div>
                                                        <div class="form-floating w-50">
                                                            <select id="floatingSelect" class="form-select">
                                                                <option selected="selected" value="AM">AM</option>
                                                                <option value="PM">PM</option>
                                                            </select>
                                                            <label>AM/PM</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mb-2">
                                                <div class="col-lg-12 d-flex flex-column flex-md-row">
                                                    <div class="form-floating form-date w-100"><label>Available Date Option 4*</label> <input type="date" placeholder="Enter Date" class="form-control date" /></div>
                                                    <div class="w-100 d-flex">
                                                        <div class="form-floating w-50"><input type="text" placeholder="Enter Time" class="form-control" /> <label>Time</label></div>
                                                        <div class="form-floating w-50">
                                                            <select id="floatingSelect" class="form-select">
                                                                <option selected="selected" value="AM">AM</option>
                                                                <option value="PM">PM</option>
                                                            </select>
                                                            <label>AM/PM</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button 
                                            v-on:click="suggestTimesToggle($event)"
                                            type="text" class="btn btn-text mt-2">Show Original Timeslots</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" v-on:click="close" :disabled="submittingForm" class="btn btn-secondary mr-3 closable">Close</button>
                                <button v-if="!suggestTimes" type="button" :disabled="talentInterviewTimeSlot === null" v-on:click="confirm"  class="btn btn-primary">
                                    <span v-if="!submittingForm">
                                        Confirm Timeslot
                                    </span>
                                    <span v-if="submittingForm">
                                        Confirming Timeslot
                                    <img width="20px" src="/images/button-loader.gif"/>
                                    </span>
                                </button>
                                <button v-else type="button"  v-on:click="confirm"  class="btn btn-primary">
                                    <span v-if="!submittingForm">
                                        Suggest Timeslots
                                    </span>
                                    <span v-if="submittingForm">
                                        Submitting Suggestions
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
