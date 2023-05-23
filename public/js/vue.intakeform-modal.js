var modalIntakeFormComponent = Vue.component('modalintakeform', {
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
<div class="modal fade" id="NewRequestModal" 
    data-backdrop="static"
    tabindex="-1" 
    role="dialog" 
    aria-labelledby="NewRequestModal" 
    aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header"v-bind:class="{ 'd-flex': formComplete,'justify-content-end': formComplete }" >
          <h6 class="modal-title" v-if="!formComplete" id="exampleModalLabel">Create Request For Work</h6>
          <button type="button" v-on:click="closed" :disabled="creatingRequest" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" v-bind:class="{ 'p-2': formComplete }">
            <div  v-bind:class="{ 'd-block': formComplete }" style="display: none;">
                <div class="success-animation">
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
                            <h4 class="text-center">Request Created!</h4>
                            <p class="text-center">Your Request for a <br/><strong>Full Time Big Data Architect</strong> <br/>has been created</p>
                            <div class="card card-flat card-lg">
                                <div class="card-body">
                                    <div class="mb-2">
                                        <label class="d-block font-bold pt-0">Number of Positions</label>
                                       1
                                    </div>
                                    <div class="mb-2">
                                        <label class="d-block font-bold pt-0">Start Date</label>
                                        1/1/2021
                                    </div>
                                    <div class="mb-2">
                                        <label class="d-block font-bold pt-0">Location</label>
                                        Jacksonville Fl.
                                    </div>
                                    <div class="mb-2">
                                        <label class="d-block font-bold pt-0">Maximum Annual Salary</label>
                                        $120K
                                    </div>
                                    <div class="mb-2">
                                        <label class="d-block font-bold pt-0">Required Skills</label>
                                        <div class="mt-1">
                                            <span class="tag tag-blue3">Hadoop</span>
                                            <span class="tag tag-blue3">Azure DevOps</span>
                                            <span class="tag tag-blue3">Lucene</span>
                                            <span class="tag tag-blue3">Nuxt.js</span>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="text-center my-4">
                                <button type="button" v-on:click="closed" class="btn btn-secondary mr-2" data-dismiss="modal">Exit</button>
                                <a href="/request" class="btn btn-primary">View Request</a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div v-bind:class="{ 'd-none': formComplete }">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-12 mb-3">
                            <p class="lead">
                                What type of work are you looking to get done? 
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 d-flex flex-column flex-lg-row">
                            <button 
                            v-on:click="onTypeClick('fulltime')" 
                            type="button" 
                            v-bind:class="{selected: fulltimeSelected}"
                            class="card card-flat p-0 mr-2 mb-2 mb-lg-0">
                                <div class="card-body text-left text-left">
                                    <div class="d-flex">
                                        <div v-if="fulltimeSelected" class="mr-3 font-green font-16">
                                            <i class="fad fa-check-circle"></i>
                                        </div>
                                        <div v-else class="mr-3 font-muted font-16">
                                            <i class="fad fa-circle"></i>
                                        </div>                                   
                                        <div>
                                            <div><strong class="font-blue_primary">Full Time</strong></div>
                                            <p class="mb-0">Hire for a full time position</p>
                                        </div>
                                    </div>
                                </div>
                            </button>

                            <button 
                            v-on:click="onTypeClick('contract')" 
                            type="button" 
                            v-bind:class="{selected: contractSelected}"
                            class="card card-flat p-0 mr-2 mb-2 mb-lg-0">
                                <div class="card-body text-left">
                                    <div class="d-flex">
                                        <div v-if="contractSelected" class="mr-3 font-green font-16">
                                            <i class="fad fa-check-circle"></i>
                                        </div>
                                        <div v-else class="mr-3 font-muted font-16">
                                            <i class="fad fa-circle"></i>
                                        </div>  
                                        <div>
                                            <div><strong class="font-blue_primary">Contract</strong></div>
                                            <p class="mb-0">Hire a contractor for a specified duration</p>
                                        </div>
                                    </div>
                                </div>
                            </button>

                            <button 
                            v-on:click="onTypeClick('sow')" 
                            type="button" 
                            v-bind:class="{selected: sowSelected}"
                            class="card card-flat p-0 mb-2 mb-lg-0">
                                <div class="card-body text-left">
                                    <div class="d-flex">
                                        <div v-if="sowSelected" class="mr-3 font-green font-16">
                                            <i class="fad fa-check-circle"></i>
                                        </div>
                                        <div v-else class="mr-3 font-muted font-16">
                                            <i class="fad fa-circle"></i>
                                        </div>  
                                        <div>
                                            <div><strong class="font-blue_primary">SOW</strong></div>
                                            <p class="mb-0">Complete a project with requirements</p>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                    
                    <div v-if="typeSelected" class="section section-xs pb-0">
                        <div class="row">
                            <div class="col-xl-12">
                                <p class="mt-3 pb-0">
                                    Please complete the form below to create your <strong>{{type}}</strong> request.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div v-if="fulltimeSelected">
                        <%-partial('_request-fulltime-default-fields')%>
                    </div>
                    <div v-if="contractSelected">
                        <div class="row">
                            <div class="col-12">
                                <div class="text-right mb-1"><small>* Denotes Required Field</small></div>
                                <div class="card card-flat bg-gray4 mb-3">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="form-floating">
                                                    <input v-model="title" type="text" class="form-control" placeholder="Enter a job title">
                                                    <label >Job Title*</label>
                                                </div> 
                                            </div>
                                        </div> 
                                    </div>
                                </div> 
                                <div class="card card-flat bg-gray4 mb-3">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <p class="mb-1">Preferred Start Date*</p>
                                                        <div class="form-group form-date">
                                                            <input v-model="startDate" type="date" class="form-control date" placeholder="Enter preferred start date">
                                                        </div> 
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <p class="mb-1">Contract Duration*</p>
                                                        <div class="row">
                                                            <div class="col-lg-6 mb-2 mb-lg-0">      
                                                                <div class="form-floating">
                                                                    <input v-model="durationMonths" type="number" class="form-control" placeholder="Months">
                                                                    <label >Months</label>
                                                                </div> 
                                                            </div>
                                                            <div class="col-lg-6">        
                                                                <div class="form-floating">
                                                                    <input v-model="durationDays" type="number" class="form-control" placeholder="Months">
                                                                    <label >Days</label>
                                                                </div> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </div> 
                                <div class="card card-flat bg-gray4 mb-3">
                                    <div class="card-body">                            
                                        <div class="row">
                                            <div class="col-lg-4 mb-2 mb-lg-0">
                                                <div class="form-floating">
                                                    <input v-model="numberOfPositions" type="number" min="1" class="form-control" placeholder="Enter Total Number of Positions">
                                                    <label >Number of Positions</label>
                                                    <small>This number cannot be zero</small>
                                                </div> 
                                            </div>
                                            <div class="col-lg-4 mb-2 mb-lg-0">
                                                <div class="form-floating">
                                                    <input v-model="allowedSubmittals" type="number" min="1" class="form-control" placeholder="Enter Total Number of Allowed Submittals">
                                                    <label >Allowed Submittals </label>
                                                    <small>This number cannot be zero</small>
                                                </div> 
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="form-floating input-group">
                                                    <span class="input-group-text">$</span>
                                                    <input v-model="salary" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                                                    <label >Maximum Hourly Rate*</label>
                                                </div>
                                                <small>Enter the maximum hourly rate you are willing to pay for this contractor</small>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div class="card card-flat bg-gray4 mb-3">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-lg-6">        
                                                <div class="form-floating form-date">
                                                    <label >Active From*</label>
                                                    <input v-model="activeFrom"  type="date" class="form-control date" placeholder="Enter Active Date">
                                                </div> 
                                            </div>
                                            <div class="col-lg-6">        
                                                <div class="form-floating form-date">
                                                    <label >Expires On*</label>
                                                    <input v-model="expiresOn" type="date" class="form-control date" placeholder="Enter Expires Date">
                                                </div> 
                                            </div>
                                        </div> 
                                    </div>
                                </div> 
                                <div class="card card-flat bg-gray4 mb-3">
                                    <div class="card-body">                            
                                        <div class="row">
                                            <div class="col-lg-6 mb-2 mb-lg-0">
                                                <p class="mb-1">Placement Fee</p>
                                                <div class="d-flex">
                                                    <div class="form-floating w-50">
                                                        <input v-model="placementFee" type="number" min="1" class="form-control" placeholder="Enter Amount">
                                                        <label >Amount</label>
                                                    </div> 
                                                    <div class="form-floating w-50 ml-1">
                                                        <select class="form-select"  >
                                                        <option selected>USD</option>
                                                        <option value="1">EUR</option>
                                                        <option value="2">ARS</option>
                                                        </select>
                                                        <label >Currency</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 mb-2 mb-lg-0">
                                                <p class="mb-1">Candidate Referral Bonus</p>
                                                <div class="d-flex">
                                                    <div class="form-floating">
                                                        <input v-model="referralFee" type="number" min="1" class="form-control" placeholder="Enter Referral Fee">
                                                        <label >Amount</label>
                                                    </div> 
                                                    <div class="form-floating w-50 ml-1">
                                                        <select class="form-select"  >
                                                        <option selected>USD</option>
                                                        <option value="1">EUR</option>
                                                        <option value="2">ARS</option>
                                                        </select>
                                                        <label >Currency</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div class="card card-flat bg-gray4 mb-3">
                                    <div class="card-body">                              
                                        <div class="row">
                                            <div class="col-lg-4 d-flex align-items-center mb-2 mb-lg-0 justify-content-end justify-content-lg-start">
                                                <div class="form-check form-switch d-flex align-items-center">
                                                    <label class="form-check-label pt-0" for="remoteSwitch">Is Remote?</label>
                                                    <input v-model="isRemote" class="form-check-input ml-3" type="checkbox" id="remoteSwitch">
                                                </div>
                                            </div>
                                            <div class="col-lg-8">
                                                <div class="form-floating">
                                                    <input v-model="location" :disabled="isRemote" type="text" class="form-control" placeholder="Enter a job location">
                                                    <label>Onsite Location</label>
                                                </div> 
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                                <div class="card card-flat bg-gray4 mb-3">
                                    <div class="card-body">      
                                        
										<div class="form-floating">
											<select class="form-select">
												<option selected value="true">Yes</option>
												<option value="false">No release directly to public</option>
											</select>
											<label >Use Preferred Suppliers?</label>
										</div>
										<p class="mt-1 text-right">
											<button type="button" v-on:click="togglePreferredSuppliers" class="btn btn-link">
												<span v-if="!managepreferredsuppliers">Edit Preferred Suppliers</span>
												<span v-else>Close</span>
											</button>
										</p>

										<div class="card card-flat" v-if="managepreferredsuppliers">
                                            <div class="card-body">
											    <suppliertiers :tiers="supplierTiers"></suppliertiers>
                                            </div>
										</div>
                                    </div>
                                </div>
                                <div class="card card-flat bg-gray4 mb-3">
                                    <div class="card-body pt-0">  
                                        <div class="form-floating">
                                            <div class="form-group">
                                                <label class="mb-2">Required Skills</label>
                                                <vuetagsinput></vuetagsinputs>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                                <div class="card card-flat bg-gray4 mb-3">
                                    <div class="card-body pt-0">  
                                        <p class="mb-2"><label >Enter the job description or 
                                            <button 
                                            type="button" 
                                            v-on:click="toggleUploader" 
                                            class="btn btn-text">
                                                <strong>upload a job description document</strong>
                                            </button></label></p> 
                                        <small>Accepted File Type: <strong>.docx, .pdf</strong></small> 
                                        
                                        <div v-if="showUploaderWidget">
                                            <fileuploader
                                            @uploaded="handleFileUpload"
                                            @cancel="toggleUploader"
                                            showcancel="true"
                                            ></fileuploader>
                                        </div>
                                        <div class="form-floating">
                                            <div class="form-floating form-wyziwig">
                                                <div class="wyziwig">
                                                    <div class="wyziwig-menu">
                                                        <button type="button" class="btn btn-icon">
                                                            <i class="fad fa-bold"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-icon">
                                                            <i class="fad fa-italic"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-icon">
                                                            <i class="fad fa-list-ul"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-icon">
                                                            <i class="fad fa-list-ol"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <textarea v-model="description" class="form-control" rows="6"></textarea>
                                            </div> 
                                        </div> 
                                    </div>
                                </div>   
                                <div class="card card-flat bg-gray4 mb-3">
                                    <div class="card-body">  
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Leave submittal instructions" style="height: 100px"></textarea>
                                            <label>Submittal Instructions</label>
                                        </div>
                                    </div>
                                </div>              
                            </div>
                        </div>
                    </div>
                    <div v-if="sowSelected">
                        <div class="row">
                            <div class="col-12">
                                <div class="text-right mb-1"><small>* Denotes Required Field</small></div>
                                <div class="card card-flat bg-gray4 mb-3">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-lg-6 mb-2 mb-lg-0">
                                                <div class="form-floating">
                                                    <input v-model="title" type="text" class="form-control" placeholder="Enter a job title">
                                                    <label >Project Title*</label>
                                                </div> 
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-floating form-date">
                                                    <input v-model="completionDate" type="date" class="form-control date" placeholder="Enter Completion Date">
                                                    <label>Project Completion Date*</label>
                                                </div> 
                                                <small>Enter the date that you need this project completed by.</small>
                                            </div>
                                        </div> 
                                    </div>
                                </div> 
                                <div class="card card-flat bg-gray4 mb-3">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-lg-6">        
                                                <div class="form-floating form-date">
                                                    <label >Active From*</label>
                                                    <input v-model="activeFrom"  type="date" class="form-control date" placeholder="Enter Active Date">
                                                </div> 
                                            </div>
                                            <div class="col-lg-6">        
                                                <div class="form-floating form-date">
                                                    <label >Expires On*</label>
                                                    <input v-model="expiresOn" type="date" class="form-control date" placeholder="Enter Expires Date">
                                                </div> 
                                            </div>
                                        </div> 
                                    </div>
                                </div> 
                                <div class="card card-flat bg-gray4 mb-3">
                                    <div class="card-body">                            
                                        <div class="row">
                                            <div class="col-lg-6 mb-2 mb-lg-0">
                                                <p class="mb-1">Placement Fee</p>
                                                <div class="d-flex">
                                                    <div class="form-floating w-50">
                                                        <input v-model="placementFee" type="number" min="1" class="form-control" placeholder="Enter Amount">
                                                        <label >Amount</label>
                                                    </div> 
                                                    <div class="form-floating w-50 ml-1">
                                                        <select class="form-select"  >
                                                        <option selected>USD</option>
                                                        <option value="1">EUR</option>
                                                        <option value="2">ARS</option>
                                                        </select>
                                                        <label >Currency</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 mb-2 mb-lg-0">
                                                <p class="mb-1">Candidate Referral Bonus</p>
                                                <div class="d-flex">
                                                    <div class="form-floating">
                                                        <input v-model="referralFee" type="number" min="1" class="form-control" placeholder="Enter Referral Fee">
                                                        <label >Amount</label>
                                                    </div> 
                                                    <div class="form-floating w-50 ml-1">
                                                        <select class="form-select"  >
                                                        <option selected>USD</option>
                                                        <option value="1">EUR</option>
                                                        <option value="2">ARS</option>
                                                        </select>
                                                        <label >Currency</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div class="card card-flat bg-gray4 mb-3">
                                    <div class="card-body">                              
                                        <div class="row">
                                            <div class="col-lg-4 d-flex align-items-center mb-2 mb-lg-0 justify-content-end justify-content-lg-start">
                                                <div class="form-check form-switch d-flex align-items-center">
                                                    <label class="form-check-label pt-0" for="remoteSwitch">Is Remote?</label>
                                                    <input v-model="isRemote" class="form-check-input ml-3" type="checkbox" id="remoteSwitch">
                                                </div>
                                            </div>
                                            <div class="col-lg-8">
                                                <div class="form-floating">
                                                    <input v-model="location" :disabled="isRemote" type="text" class="form-control" placeholder="Enter a job location">
                                                    <label>Onsite Location</label>
                                                </div> 
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                                <div class="card card-flat bg-gray4 mb-3">
                                    <div class="card-body">      
                                        
										<div class="form-floating">
											<select class="form-select">
												<option selected value="true">Yes</option>
												<option value="false">No release directly to public</option>
											</select>
											<label >Use Preferred Suppliers?</label>
										</div>
										<p class="mt-1 text-right">
											<button type="button" v-on:click="togglePreferredSuppliers" class="btn btn-link">
												<span v-if="!managepreferredsuppliers">Edit Preferred Suppliers</span>
												<span v-else>Close</span>
											</button>
										</p>

										<div v-if="managepreferredsuppliers">
											<suppliertiers :tiers="supplierTiers"></suppliertiers>
										</div>
                                    </div>
                                </div>
                                <div class="card card-flat bg-gray4 mb-3">
                                    <div class="card-body">                            
                                        <div class="row">
                                            <div class="col-lg-8">
                                                <div class="form-floating input-group">
                                                    <span class="input-group-text">$</span>
                                                    <input v-model="budget" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                                                    <label >Maximum Project Budget*</label>
                                                </div>
                                                <small>Enter the maximum cost you are willing to pay for this project</small>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div class="card card-flat bg-gray4 mb-3">
                                    <div class="card-body">  
                                        <p class="mb-2"><label >Enter the profject description or <a href="#">upload a project description document</a></label></p> 
                                        <small>Accepted File Type: <strong>.docx, .pdf</strong></small>                        
                                        <div class="form-floating">
                                            <div class="form-floating form-wyziwig">
                                                <div class="wyziwig">
                                                    <div class="wyziwig-menu">
                                                        <button type="button" class="btn btn-icon">
                                                            <i class="fad fa-bold"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-icon">
                                                            <i class="fad fa-italic"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-icon">
                                                            <i class="fad fa-list-ul"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-icon">
                                                            <i class="fad fa-list-ol"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <textarea v-model="description" class="form-control" rows="6"></textarea>
                                            </div> 
                                        </div> 
                                    </div>
                                </div>  
                                <div class="card card-flat bg-gray4 mb-3">
                                    <div class="card-body">  
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Leave submittal instructions" style="height: 100px"></textarea>
                                            <label>Submittal Instructions</label>
                                        </div>
                                    </div>
                                </div>               
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        <div v-if="!formComplete" class="modal-footer">
            <div class="modal-body py-2">
                <div v-if="hasCreateError" class="alert alert-danger d-block mt-2">
                    <div class="inner d-flex">
                        <div class="mr-2">
                            <i class="far fa-exclamation-circle font-red font-18"></i>
                        </div>
                        <div>
                            <h6 class="title mb-0">Unable To Create Request</h6>
                            <p class="description">We're sorry but we were unable to create this request at this time.  Please try again in a few minutes and if the problem still persists, please <a href="/support">contact support</a></p>
                        </div>
                    </div>
                </div>
            </div>
          <button type="button" v-on:click="closed" :disabled="creatingRequest" class="btn btn-secondary btn-sm" data-dismiss="modal">Cancel</button>
          <button type="button" v-on:click="submit" :disabled="disableSubmit" class="btn btn-primary btn-sm">
              <span v-if="!creatingRequest">Create</span>
              <span v-if="creatingRequest">
                  Creating Request
                <img width="20px" src="/images/button-loader.gif"/>
              </span>
            </button>
        </div>
      </div>
    </div>
</div>
    `,
});
