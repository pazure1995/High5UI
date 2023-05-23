var modalIntakeFormRejectComponent = Vue.component('modalintakeformreject', {
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
            parent:{},
        }
    },
    //enabling the button by checking all required fields are filled out
    computed: {},
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
        scrollToTop: function(){
            var myDiv = document.getElementsByClassName("bl-modal-container");
            myDiv[0].scrollTop = 0;
        }
    },
    template: `
<div class="bl-modal" v-bind:class="{ 'reveal-overlay': revealOverlay,'reveal-card':revealCard, 'remove-card': removeCard }">
<div class="bl-modal-overlay"></div>
<div class="bl-modal-container">
    <div class="bl-modal-card bl-modal-card-md">
        <div class="bl-modal-header">
        <h6 class="bl-modal-title">Reject Intake Form</h6>
            <button type="button" v-on:click="close" class="close p-0 bl-modal-close-btn" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div v-if="showBody" class="bl-modal-body">
            
            <div class="container" v-if="!formComplete">
                <div class="row">
                    <div class="col-lg-12">
                        <h6>Senior Software Developer</h6>
                        <p>Full Time / Jacksonville FL.</p>
                        <div class="form-floating mt-3">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 300px"></textarea>
                            <label for="floatingTextarea2">Reason for rejecting?</label>
                        </div>
                        <div class="text-right mt-3">
                            <button type="button" v-on:click="close" data-dismiss="modal" class="btn btn-secondary btn-sm">Cancel</button>
                            <button type="button" class="btn btn-primary btn-sm">
                                <span>Submit</span>
                            </button>
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
