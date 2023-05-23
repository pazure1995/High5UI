var pendingIntakeFormApprovals = Vue.component('pending-approvals-intakeforms', {
    data() {
        return {
            pendingApprovals: [
                {
                    id: new Date().getTime() * (Math.floor(Math.random() * 200) + 1),
                    title: 'Sr. Software Developer',
                    adminName: 'Garrett M',
                    createdDate: '6 - Aug - 2021',
                    requestedBy: 'Fossil',
                    submitting: false,
                    submitted: false,
                    status: ""
                },
                {
                    id: new Date().getTime() * (Math.floor(Math.random() * 200) + 1),
                    title: 'Junior Accountant',
                    adminName: 'Subu S',
                    createdDate: '3 - Aug - 2021',
                    requestedBy: 'Evolven',
                    submitting: false,
                    submitted: false,
                    status: ""
                }
            ]

        }
    },
    methods: {
        show: function(item){
            var ComponentClass = Vue.extend(candidateJobFlyoutComponent);
            var flyout = new ComponentClass();

            flyout.title = item.title;
            flyout.isIntakeForm = true;
            flyout.isApproved = false;
            flyout.isPending = true;
            flyout.isRejected = false;
            flyout.item = item;
            flyout.parent = this;
            flyout.showApproveReject = true;

            this.interviewFlyout = flyout;

            flyout.$mount();  
            document.body.appendChild(flyout.$el);
        },
        submit: function(item,isReject){
            var app = this;
            if(isReject){
                var ComponentClass = Vue.extend(modalIntakeFormRejectComponent);
                var modal = new ComponentClass();

                modal.title="Reject Intake Form";
                modal.showAddCandidate = true;
                modal.hideCloseButton = true;
                modal.hideBody = true;
        
                modal.$mount();  
                document.body.appendChild(modal.$el); 
            }else{
                item.submitting = true;
                setTimeout(() => {
                    item.submitted = true;
                    if(!isReject){
                        item.status = '<span class="text-success"><i class="far fa-check mr-1"></i>Approved</span>';
                    }else{
                        item.status = '<span class="text-danger"><i class="far fa-check mr-1"></i>Rejected</span>';
                    }
                    setTimeout(() => {
                        let list = app.pendingApprovals.filter(function (e) {
                            return e.id != item.id;
                        });

                        app.pendingApprovals = list;
                        
                    }, 1000);
                }, 2000);
            }
        }
    },
    template: `
    <!-- root div -->
    <div v-if="pendingApprovals.length > 0">
        <div class="p-3 mb-2">
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
            <table class="table table-hoverable-cells table-cards-1024">
                <thead>
                <tr>
                    <th scope="col">Job Title</th>
                    <th scope="col">Submitted By</th>
                    <th scope="col">Created Date</th>
                    <th scope="col" align="right"></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in pendingApprovals" :key="index">
                    <td v-on:click="show(item)">
                        <span>
                            <span class="font-bold d-inline-1024 d-none">Company : </span>
                            {{item.title}}
                        </span>
                    </td>
                    <td v-on:click="show(item)">
                        <span>
                            <span class="font-bold d-inline-1024 d-none">Admin Name : </span>
                            {{item.adminName}}
                        </span>
                    </td>
                    <td v-on:click="show(item)">
                        <span>
                            <span class="font-bold d-inline-1024 d-none">Created By : </span>
                            {{item.createdDate}}
                        </span>
                    </td>
                    <td class="no-hover">
                        <div class="d-flex align-items-center justify-content-xl-end justify-content-start">
                            <div v-if="!item.submitting">
                                <button type="button" v-on:click="submit(item)" class="btn btn-sm btn-primary me-2">Approve</button>
                                <button type="button" v-on:click="submit(item,true)" class="btn btn-sm btn-danger">Reject</button>
                            </div>
                            <button v-if="item.submitting === true && item.submitted === false" type="button" disabled class="btn btn-square">
                                <img style="width: 20px;" src="/images/button-loader-white.gif"/>
                            </button>
                            <span v-if="item.submitted" v-html="item.status">{{item.status}}</span>
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
                Showing 2 of 2
            </div>
        </div>
        <!-- pagination -->
    </div>
    <div v-else>
        <div class="text-center p-3">
            <div class="avatar avatar-lg">
                <i class="fad fa-folder-open"></i>
            </div>
            <div class="mt-2">
                No intake forms to review at this time
            </div>
        </div>
    </div>
    <!-- root div -->
    `,
});