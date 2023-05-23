var pendingApprovals = Vue.component('pending-approvals', {
    data() {
        return {
            pendingApprovals: [
                {
                    id: new Date().getTime() * (Math.floor(Math.random() * 200) + 1),
                    company: 'Hammock Creative',
                    adminName: 'Garrett M',
                    createdDate: '6 - Aug - 2021',
                    requestedBy: 'Fossil',
                    submitting: false,
                    submitted: false,
                    status: ""
                },
                {
                    id: new Date().getTime() * (Math.floor(Math.random() * 200) + 1),
                    company: 'Big Creations',
                    adminName: 'Subu S',
                    createdDate: '3 - Aug - 2021',
                    requestedBy: 'Evolven',
                    submitting: false,
                    submitted: false,
                    status: ""
                },
                {
                    id: new Date().getTime() * (Math.floor(Math.random() * 200) + 1),
                    company: 'Intel',
                    adminName: 'Antony M',
                    createdDate: '1 - Aug - 2021',
                    requestedBy: 'ADP',
                    submitting: false,
                    submitted: false,
                    status: ""
                },
                {
                    id: new Date().getTime() * (Math.floor(Math.random() * 200) + 1),
                    company: 'Apple',
                    adminName: 'Joseph Doe',
                    createdDate: '29 - Sep - 2021',
                    requestedBy: 'Fujitsu',
                    submitting: false,
                    submitted: false,
                    status: ""
                },
                {
                    id: new Date().getTime() * (Math.floor(Math.random() * 200) + 1),
                    company: 'Hammock Creative',
                    adminName: 'Garrett M',
                    createdDate: '6 - Aug - 2021',
                    requestedBy: 'Fossil',
                    submitting: false,
                    submitted: false,
                    status: ""
                },
                {
                    id: new Date().getTime() * (Math.floor(Math.random() * 200) + 1),
                    company: 'Big Creations',
                    adminName: 'Subu S',
                    createdDate: '3 - Aug - 2021',
                    requestedBy: 'Evolven',
                    submitting: false,
                    submitted: false,
                    status: ""
                },
                {
                    id: new Date().getTime() * (Math.floor(Math.random() * 200) + 1),
                    company: 'Intel',
                    adminName: 'Antony M',
                    createdDate: '1 - Aug - 2021',
                    requestedBy: 'ADP',
                    submitting: false,
                    submitted: false,
                    status: ""
                },
                {
                    id: new Date().getTime() * (Math.floor(Math.random() * 200) + 1),
                    company: 'Apple',
                    adminName: 'Joseph Doe',
                    createdDate: '29 - Sep - 2021',
                    requestedBy: 'Fujitsu',
                    submitting: false,
                    submitted: false,
                    status: ""
                },
                {
                    id: new Date().getTime() * (Math.floor(Math.random() * 200) + 1),
                    company: 'Intel',
                    adminName: 'Antony M',
                    createdDate: '1 - Aug - 2021',
                    requestedBy: 'ADP',
                    submitting: false,
                    submitted: false,
                    status: ""
                },
                {
                    id: new Date().getTime() * (Math.floor(Math.random() * 200) + 1),
                    company: 'Apple',
                    adminName: 'Joseph Doe',
                    createdDate: '29 - Sep - 2021',
                    requestedBy: 'Fujitsu',
                    submitting: false,
                    submitted: false,
                    status: ""
                }
            ]
        }
    },
    methods: {
        submit: function(item,isReject){
            var app = this;
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
    },
    template: `
    <!-- root div -->
    <div>
        <div class="p-3 mb-2">
            <div class="d-flex align-items-center justify-content-between mb-3">
                <h6 class="m-0">Pending Approvals</h6>
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
                        <input type="text" placeholder="Search Approvals"  class="form-control small font-14"> 
                    </div>
                </div>
        </div>
        <!-- table body -->
        <div class="px-3 pt-0 table-cards-1024">
            <table class="table table-hoverabletable-cards-1024">
                <thead>
                <tr>
                    <th scope="col">Company</th>
                    <th scope="col">Admin Name</th>
                    <th scope="col">Created Date</th>
                    <th scope="col">Requested By</th>
                    <th scope="col" align="right"></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in pendingApprovals" :key="index">
                    <td>
                        <span>
                            <span class="font-bold d-inline-1024 d-none">Company : </span>
                            {{item.company}}
                        </span>
                    </td>
                    <td>
                        <span>
                            <span class="font-bold d-inline-1024 d-none">Admin Name : </span>
                            {{item.adminName}}
                        </span>
                    </td>
                    <td>
                        <span>
                            <span class="font-bold d-inline-1024 d-none">Created By : </span>
                            {{item.createdDate}}
                        </span>
                    </td>
                    <td>
                        <span>
                             <span class="font-bold d-inline-1024 d-none">Requested By : </span>
                            {{item.requestedBy}}
                        </span>
                    </td>
                    <td>
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