var modalLearningAssignComponent = Vue.component('learningassignmodal', {
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
            successMessage: {
                title: "",
                subtitle: "",
                details: []
            },
            candidates: [],
			selectAll: false,
            selectedCnt: 0,
            item: {},
			isLarge: true,
			updateList: [],
            parent:{},
        }
    },
    watch: {
		selectAll: function(val){
			if(val){
				//select all
				for(var i=0; i<this.candidates.length; i++){
					this.candidates[i].isSelected = true;
					this.selectedCnt = this.selectedCnt + 1;
				}
			}else{
				//deselectAll
				this.selectedCnt = 0;
				for(var i=0; i<this.candidates.length; i++){
					this.candidates[i].isSelected = false;
				}
			}
		},
        candidates: {
            deep: true,
            handler(){
			  this.selectedCnt = 0;
              for(var i=0; i<this.candidates.length; i++){
				  if(this.candidates[i].isSelected){
					this.selectedCnt = this.selectedCnt + 1;
				  }
			  }
            }
        }
    },
    created: function () {
        this.show();
        this.seed();
    },
    destroyed: function(){
        modal = this.$el;
        modal.parentNode.removeChild(modal);
    },
    methods: {
        seed: function(){

            let names = [
                "John D",
                "Suzannah J",
                "Jenny R",
                "Chris W",
                "Stephan P",
                "Wallace C",
                "Brad P",
                "Debbie E",
                "Alicia J",
                "Jason Z",
                "Patrick M",
            ];  
            let title =[
                "Director of User Experience",
                "UX Researcher",
                "Lead Developer",
                "Cloud Expert",
                "MSP Expert",
                "CWM Expert",
                "Assistant Manager",
                "Director of User Experience",
                "UX Researcher",
                "Lead Developer",
                "Cloud Expert",
                "MSP Expert",
                "CWM Expert",
                "Assistant Manager"
            ];        

            for(var i=0; i<60; i++){

				var isVisible = false;
				if(i < 10){
					isVisible = true;
				}

                this.candidates.push({
                    name: names[i],
                    title: title[i],
                    isSelected: false,
					isVisible: isVisible,
					progress: "0%"
                })
            }
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
        submit: function(item){
            var app = this;

            app.submittingForm = true;
            app.successMessage.title = "Module Assigned!";
            app.successMessage.subtitle = "<p>"+this.item.title+" has been assigned to the following inviduals</p>";

            setTimeout(function(){

                app.scrollToTop();

                app.showBody = false;

				var list = "<ul class='ml-3'>";
				for(var i=0; i<app.candidates.length; i++){
					if(i < 10){
						list +="<li>"+app.candidates[i].name+"</li>";
					}
				}

				list +="</ul>";



                app.successMessage.details = [
                    {
                        label: "Title",
                        value: app.item.title
                    },
                    {
                        label: "Description",
                        value: app.item.description
                    },
                    {
                        label: "Individuals",
                        value: list
                    }
                ];

                app.formComplete = true;
                app.hideBody = true;
                app.showSuccessDetails = true;
				app.isLarge = false;
                app.animateSuccess('#successAnimation');

		
		
					for(var i=0; i<app.candidates.length; i++){
						if(i < 10){
							app.updateList.unshift(app.candidates[i]);
						}
					}
		
				

            },2000);
        }
    },
    template: `
        <div class="bl-modal" v-bind:class="{ 'reveal-overlay': revealOverlay,'reveal-card':revealCard, 'remove-card': removeCard }">
            <div class="bl-modal-overlay"></div>
            <div class="bl-modal-container">
                <div class="bl-modal-card" :class="isLarge ? 'bl-modal-card-lg' : 'bl-modal-card-md'">
                    <div class="bl-modal-header">
                        <h6 class="bl-modal-title">Assign Learning Module</h6>
                        <button type="button" v-on:click="close" class="close p-0 bl-modal-close-btn" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div v-if="!formComplete" class="bl-modal-body">
                        <div class="mb-3">
                            <h5 class="mb-0">{{item.title}}</h5>
                            <p class="mb-0">{{item.description}}</p>
                            <div class="py-2 mt-2">
                                <span
                                    v-bind:class="{
                            'tag-blue3': item.difficulty === 'beginner',
                            'tag-orange1': item.difficulty === 'intermediate',
                            'tag-red1': item.difficulty === 'advanced',
                            'tag-coral': item.difficulty === 'expert'
                        }"
                                    class="mr-2 tag font-bold"
                                >
                                    {{item.difficulty}}
                                </span>

                                <span class="mr-2"> <i aria-hidden="true" class="far fa-fw fa-stopwatch"></i> Duration: {{item.duration}}</span>
                                <span class="mr-2"><i aria-hidden="true" class="fal fa-fw fa-clock"></i> Last Updated: {{item.lastUpdated}}</span>
                            </div>

                            <hr class="mb-0 mt-4" />

                            <div class="table-cards-1024">
                            <table class="table">
                                <thead class="bg-gray3">
                                    <tr class="align-center">
                                        <th>
                                            <div class="form-check form-check-square">
                                                <input v-model="selectAll" class="form-check-input" type="checkbox" />
                                            </div>
                                        </th>
                                        <th class="align-center">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div>Talent</div>
                                                <div class="d-flex">
                                                    <select class="form-select mr-2">
                                                        <option value="10">10</option>
                                                        <option value="25">25</option>
                                                        <option value="50">50</option>
                                                        <option value="100">100</option>
                                                        <option value="all">All</option>
                                                    </select>
                                                    <input style="width: 200px;" type="text" class="form-control small font-14" placeholder="Search Talent" />
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-if="item.isVisible" v-for="item in candidates">
                                        <td style="width: 50px;">
                                            <div class="form-check form-check-square">
                                                <input v-model="item.isSelected" value="selected" class="form-check-input" type="checkbox" />
                                            </div>
                                        </td>
                                        <td>
                                            <h6 class="mb-0">{{item.name}}</h6>
                                            <p class="mb-0">{{item.title}}</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>

                            <div class="d-flex align-items-center flex-wrap-600 bg-gray3 p-3">
                                <div class="d-flex-600 w-100-600 align-items-center justify-content-between mb-2 m-md-0 wrap-reverse-370">
                                    <button type="button" class="btn btn-sm btn-secondary mr-1 w-100-370">Show Next 10</button>
                                    <span class="w-100-370 mb-point5-370 d-block-370 text-center-370">Showing 10 of 60</span>
                                </div>
                                <div class="ml-auto ml-sm-auto mr-sm-0 d-flex align-items-center justify-content-between-400 w-100-400 flex-wrap-370">
                                    <button type="button" v-on:click="close" class="btn btn-secondary btn-sm mr-1 w-100-370">Cancel</button>
                                    <button type="button" v-on:click="submit" class="btn btn-primary btn-sm w-100-370 mt-point5-370">
                                        <span v-if="!submittingForm">Assign Module ({{selectedCnt}})</span>
                                        <span v-if="submittingForm">
                                            Assigning Modules ({{selectedCnt}})
                                            <img width="20px" src="/images/button-loader.gif" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

					<div v-bind:class="{ 'd-block': formComplete }" class="section section-sm pb-0" style="display: none;">
						<div id="successAnimation" class="success-animation">
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
