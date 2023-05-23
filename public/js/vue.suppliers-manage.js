var manageSuppliersComponent = Vue.component('manage-suppliers', {
    data() {
        return {
            supplierTiers: {
                releaseToPublic: true,
                tiers: [
                    {
                        tier: 1,
                        suppliers: [
                            {
                                id: 1,
                                text: 'ADP',
                                status: 'Preferred Supplier',
                                date: '29-Jul-2021',
								selected: true,
                                tier: '1'
                            },
                            {
                                id: 2,
                                text: 'Doppler Labs',
                                status: 'Preferred Supplier',
                                date: '29-Jul-2021',
								selected: true,
                                tier: '1'
                            }
                        ],
                        duration: [
                            { id: 1, text: "1 hour",selected: true},
                            { id: 2, text: "4 hours"},
                            { id: 3, text: "8 hours"},
                            { id: 4, text: "1 day" },
                            { id: 5, text: "2 days" },
                            { id: 6, text: "5 days" },
                            { id: 7, text: "1 week" }                               
                        ]
                    },
                    {
                        tier: 2,
                        suppliers: [
                            {tier: 2,id: 3, text: "Interactive Resources", selected: true },
                            {tier: 2,id: 4, text: "High5" }               
                        ],
                        duration: [
                            { id: 1, text: "1 hour"},
                            { id: 2, text: "4 hours", selected: true},
                            { id: 3, text: "8 hours"},
                            { id: 4, text: "1 day" },
                            { id: 5, text: "2 days" },
                            { id: 6, text: "5 days" },
                            { id: 7, text: "1 week" }                               
                        ]
                }
            ]},
            suppliers: [
                {
                    id: 1,
                    name: 'ADP',
                    status: 'Preferred Supplier',
                    date: '29-Jul-2021',
                    tier: 'Tier 3',
					pocName: "Jason Bourne",
					pocEmail: "jb@company.com",
					isActive: true
                },
                {
                    id: 2,
                    name: 'Doppler Labs',
                    status: 'Preferred Supplier',
                    date: '29-Jul-2021',
                    tier: 'Tier 1',
					pocName: "Jason Bourne",
					pocEmail: "jb@company.com",
					isActive: true
                },
                {
                    id: 3,
                    name: 'Micro Gen',
                    status: 'Preferred Supplier',
                    date: '29-Jul-2021',
                    tier: 'Tier 1',
					pocName: "Jason Bourne",
					pocEmail: "jb@company.com",
					isActive: true
                },
                {
                    id: 4,
                    name: 'Emids',
                    status: 'Approved',
                    date: '22-Jul-2021',
                    tier: 'Not Specified',
					pocName: "Jason Bourne",
					pocEmail: "jb@company.com",
					isActive: true
                },
                {
                    id: 5,
                    name: 'Mindset',
                    status: 'Approved',
                    date: '2-Jul-2021',
                    tier: 'Not Specified',
					pocName: "Jason Bourne",
					pocEmail: "jb@company.com",
					isActive: true
                },
                {
                    id: 6,
                    name: 'Salesforce',
                    status: 'Approved',
                    date: '22-Jul-2021',
                    tier: 'Not Specified',
					pocName: "Jason Bourne",
					pocEmail: "jb@company.com",
					isActive: true
                },
                {
                    id: 7,
                    name: 'CGI Group Inc',
                    status: 'Approved',
                    date: '5-Aug-2021',
                    tier: 'Not Specified',
					pocName: "Jason Bourne",
					pocEmail: "jb@company.com",
					isActive: true
                },
                {
                    id: 8,
                    name: 'NimSoft',
                    status: 'Approved',
                    date: '28-Jul-2021',
                    tier: 'Not Specified',
					pocName: "Jason Bourne",
					pocEmail: "jb@company.com",
					isActive: true
                },
                {
                    id: 9,
                    name: 'Talentmet Inc',
                    status: 'Approved',
                    date: '27-Jul-2021',
                    tier: 'Not Specified',
					pocName: "Jason Bourne",
					pocEmail: "jb@company.com",
					isActive: true
                },
                {
                    id: 10,
                    name: 'CalciTech Ltd',
                    status: 'Approved',
                    date: '5-Aug-2021',
                    tier: 'Not Specified',
					pocName: "Jason Bourne",
					pocEmail: "jb@company.com",
					isActive: true
                }
            ],
        }
    },
    methods: {
        editItem: function(supplier){
            var ComponentClass = Vue.extend(modalSupplierEditComponent);
            var modal = new ComponentClass();
            modal.supplier = supplier;
            modal.suppliers = this.suppliers;
            modal.parent = this;
            modal.title = "Update Supplier";
            modal.$mount();  
            document.body.appendChild(modal.$el); 
        },
        deactivateItem: function(supplier){
            var ComponentClass = Vue.extend(modalSupplierStatusComponent);
            var modal = new ComponentClass();
            modal.$mount();
            modal.flyout = this.showFlyout;
            modal.supplier = supplier;
            modal.suppliers = this.suppliers;
            modal.parent = this;
            document.body.appendChild(modal.$el);
        },
        activateItem: function(supplier){
            var ComponentClass = Vue.extend(modalSupplierStatusComponent);
            var modal = new ComponentClass();
            modal.$mount();
            modal.flyout = this.showFlyout;
            modal.supplier = supplier;
            modal.suppliers = this.suppliers;
            modal.parent = this;
			modal.isActivate = true;
            document.body.appendChild(modal.$el);
        },
		show: function(supplier){
            var ComponentClass = Vue.extend(supplierFlyoutWidget);
            var flyout = new ComponentClass();
            
            flyout.$mount();
            flyout.item = supplier;
            flyout.parent = this;
            document.body.appendChild(flyout.$el);
		}
	},
    template: `
   <!--root div -->
   <div>


       <div class="card card-lg card-flat mb-3">
           <div class="card-body">
                <div class="d-flex align-items-center justify-content-between mb-4 flex-wrap-370">
                    <h6 class="m-0 w-100-370 mb-point5-370">Supplier Directory</h6>
					<addsupplier btnstyle=""></addsupplier>
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
                        <input type="text" id="searchSuppliers" aria-describedby="searchSuppliers" placeholder="Search Suppliers"  class="form-control small font-14"> 
                    </div>
                </div>


                    <table class="table table-hoverable-cells table-cards-1024 mt-md-0 mt-3">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Created Date</th>
                            <th scope="col">Tier</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr 
						v-bind:class="{'bg-gray3': !supplier.isActive}"
						v-for="(supplier, index) in suppliers" :key="index" >
                            <td v-on:click="show(supplier)">
                            	<span class="font-bold d-none d-inline-1024">Name : </span>
								<strong v-bind:class="{'font-regular': !supplier.isActive}">{{supplier.name}}</strong>
                            </td>
                            <td v-on:click="show(supplier)">
								<span class="font-bold d-none d-inline-1024">Status : </span> 
								<span v-if="supplier.isActive">
									{{supplier.status}}
								</span>
								<span v-else>
									Deactivated
								</span>
							</td>
                            <td v-on:click="show(supplier)"><span class="font-bold d-none d-inline-1024">Created Date : </span>{{supplier.date}}</td>
                            <td v-on:click="show(supplier)"><span class="font-bold d-none d-inline-1024">Tier : </span>{{supplier.tier}}</td>
                            <td class="no-hover text-right">
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
										v-on:click="editItem(supplier)"
										type="button" class="dropdown-item"><i class="far fa-edit mr-2"></i> Edit</button> 
										<button 
										v-if="supplier.isActive"
										v-on:click="deactivateItem(supplier)"
										type="button" class="dropdown-item"><i class="far fa-trash-alt mr-2"></i> Deactivate</button>
										<button 
										v-else
										v-on:click="activateItem(supplier)"
										type="button" class="dropdown-item"><i class="far fa-trash-alt mr-2"></i> Activate</button>
									</div>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <hr class="m-0"/>
                    <div class="col-xl-12 d-flex align-items-center mt-3 mb-2 flex-wrap-370 text-center-370">
                        <div class="w-100-370 mb-point5-370">
                            Showing 10 of 60
                        </div>
                        <div class="ml-auto mx-auto-370 d-flex align-items-center">
                            <button type="button" disabled="disabled" class="btn btn-icon px-2"><i class="fal fa-chevron-circle-left" aria-hidden="true"></i></button> <button type="button" disabled="disabled" class="btn btn-text px-2">1</button>
                            <button type="button" class="btn btn-text px-2">2</button> <button type="button" class="btn btn-text px-2">3</button> <button type="button" class="btn btn-text px-2">4</button>
                            <button type="button" class="btn btn-text px-2">...</button> <button type="button" class="btn btn-icon px-2"><i class="fal fa-chevron-circle-right" aria-hidden="true"></i></button>
                        </div>
                    </div>

            </div>
        </div>
        <div class="card card-lg card-flat">
            <div class="card-body">
                <h6>Preferred Suppliers</h6>
                <suppliertiers :tiers="supplierTiers"></suppliertiers>   
            </div>
        </div>
   </div>
   <!--root div -->
    `,
});
    