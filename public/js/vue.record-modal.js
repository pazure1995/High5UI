var modalRecord = Vue.component('modal', {
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
            disableSubmit: true
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
                                <div class="d-flex align-items-center bg-gray3 justify-content-center" style="width: 100%; height: 500px;">
                                    <p class="mb-0">Add Recording Iframe Here</p>
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
