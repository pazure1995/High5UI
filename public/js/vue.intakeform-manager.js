var intakeFormManager = Vue.component('intakeform-manager', {
    data() {
        return {
            pendingApprovals: [
                {
                    id: new Date().getTime() * (Math.floor(Math.random() * 200) + 1),
                    title: 'Senior VP of Marketing',
                    location: 'Jacksonville FL.',
                    type: 'Full Time',
                    approver: 'John Doe',
                    isApproved: false,
                    isRejected: false,
                    isPending: true
                },
                {
                    id: new Date().getTime() * (Math.floor(Math.random() * 200) + 1),
                    title: 'Junior Data Scientist',
                    location: 'Jacksonville FL.',
                    type: 'Full Time',
                    approver: 'John Doe',
                    isApproved: false,
                    isRejected: true,
                    isPending: false
                },
                {
                    id: new Date().getTime() * (Math.floor(Math.random() * 200) + 1),
                    title: 'Web Designer',
                    location: 'Jacksonville FL.',
                    type: 'Contract',
                    approver: 'John Doe',
                    isApproved: true,
                    isRejected: false,
                    isPending: false
                },
                {
                    id: new Date().getTime() * (Math.floor(Math.random() * 200) + 1),
                    title: 'Mobile Application',
                    location: 'Jacksonville FL.',
                    type: 'SOW',
                    approver: 'John Doe',
                    isApproved: true,
                    isRejected: false,
                    isPending: false
                }
            ]
        }
    },
    methods: {
        add: function(){
            var el = document.getElementById("CreateRequestTitle");
            console.log(el);
            el.innerHTML = "Intake Form";
            newRequestModal.isIntakeForm = true;
            console.log(newRequestModal);
        },
        show: function(item){
            var ComponentClass = Vue.extend(candidateJobFlyoutComponent);
            var flyout = new ComponentClass();

            flyout.title = item.title;
            flyout.isIntakeForm = true;
            flyout.isApproved = item.isApproved;
            flyout.isPending = item.isPending;
            flyout.isRejected = item.isRejected;
            flyout.item = item;
            flyout.parent = this;

            this.interviewFlyout = flyout;

            flyout.$mount();  
            document.body.appendChild(flyout.$el);
     
        },
    },
    template: `
    <!-- root div -->
    <div>
        <div class="p-3 mb-2">
        <div class="d-flex align-items-center justify-content-between mb-4">
                <h6 class="m-0">Intake Forms</h6>
                <button type="button" v-on:click="add" data-toggle="modal" data-target="#NewRequestModal"  class="btn btn-sm"><i class="fal fa-user-plus mr-2"></i>Add Intake Form</button>
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap">
                    <div class="col-lg-3 col-md-4 col-sm-12 col-12">
                        <select class="form-select mb-2">
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="all">All</option>
                        </select>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-12 col-12">
                        <input type="text" placeholder="Search Intake Forms"  class="form-control small font-14"> 
                    </div>
                </div>
        </div>
        <!-- table body -->
        <div class="px-3 pt-0 table-cards-1024">
            <table class="table table-hoverable-cells table-hoverabletable-cards-1024">
                <thead>
                <tr>
                    <th scope="col">Job Title</th>
                    <th scope="col">Job Type</th>
                    <th scope="col">Location</th>
                    <th scope="col">Approver</th>
                    <th class="text-right" scope="col">Status</th>
                    <th scope="col" align="right"></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in pendingApprovals" :key="index">
                    <td v-on:click="show(item)">
                        <span>
                            <span class="font-bold d-inline-1024 d-none">Job Title: </span>
                            <strong>{{item.title}}</strong>
                        </span>
                    </td>
                    <td v-on:click="show(item)">
                        <span>
                            <span class="font-bold d-inline-1024 d-none">Type: </span>
                            {{item.type}}
                        </span>
                    </td>
                    <td v-on:click="show(item)">
                        <span>
                            <span class="font-bold d-inline-1024 d-none">Location: </span>
                            {{item.location}}
                        </span>
                    </td>
                    <td v-on:click="show(item)">
                        <span>
                             <span class="font-bold d-inline-1024 d-none">Approver: </span>
                            {{item.approver}}
                        </span>
                    </td>
                    <td v-on:click="show(item)" class="text-right">
                        <span>
                             <span class="font-bold d-inline-1024 d-none">Status: </span>
                             <span v-if="item.isApproved" class="tag tag-green1">Approved</span>
                             <span v-if="item.isRejected" class="tag tag-red1">Rejected</span>
                             <span v-if="item.isPending" class="tag tag-orange1">Pending</span>
                            
                        </span>
                    </td>
                    <td class="text-right no-hover">
                        <div class="dropdown">
                            <button 
                            type="button" 
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="false" 
                            class="btn btn-icon dropdown-toggle">
                                <i class="far fa-ellipsis-v"></i>
                            </button>
                            <div class="dropdown-menu dropdown-menu-right">
                                <button 
                                type="button" class="dropdown-item"><i class="far fa-edit mr-2"></i> Edit</button> 
                                <button 
                                type="button" class="dropdown-item"><i class="far fa-trash-alt mr-2"></i> Delete</button>
                            </div>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <!-- table body -->
        <!-- pagination -->
        <hr class="m-0"/>
        <div class="col-xl-12 d-flex align-items-center mt-3 mb-2 px-3 flex-wrap-370">
            <div class="text-center-370 w-100-370 mb-point5-370">
                Showing 4 of 24
            </div>
            <div class="ml-auto mx-auto-370 d-flex align-items-center">
                <button type="butotn" disabled class="btn btn-icon px-2"><i class="fal fa-chevron-circle-left"></i></button>
                <button type="button" disabled class="btn btn-text px-2">1</button>
                <button type="button" class="btn btn-text px-2">2</button>
                <button type="button" class="btn btn-text px-2">3</button>
                <button type="button" class="btn btn-text px-2">4</button>
                <button type="button" class="btn btn-text px-2">...</button>
                <button type="butotn" class="btn btn-icon px-2"><i class="fal fa-chevron-circle-right"></i></button>
            </div>
        </div>
        <!-- pagination -->
    </div>
    <!-- root div -->
    `,
});