var manageTenants = Vue.component('manage-tenants', {
    data() {
        return {
            list: []
        };
    },
    created: function(){
        this.seedData();
    },
    methods: {
        seedData: function(){
            var cnt = 10;
            var companies = [
                "Hammock Creative Inc.",
                "High5",
                "eTeam",
                "Google",
                "Apple",
                "Microsoft",
                "IBM",
                "Modus",
                "Bank of America",
                "Capital One"
            ];


            var name = [
                "John Doe",
                "Jane Doe",
                "Robert Stone",
                "Bill Thomas",
                "Sarah Daily",
                "Jennifer Mackenzie"
            ];

            var type = [
                "Staffing Agency",
                "Client",
                "Staffing Agency",
                "Client"
            ];

    
            for(var i=0; i<60; i++){

                var isVisible = false;
                if(i < 10){
                    isVisible = true;
                }

                this.list.push({
                    id: new Date().getTime() * (i+1),
                    company: companies[Math.floor(Math.random() * 10) + 0],
                    name: name[Math.floor(Math.random() * 6) + 0],
                    type: type[Math.floor(Math.random() * 4) + 0],
                    email: "name@company.com",
                    isActive: true,
                    isVisible: isVisible
                });

            }

        },
        add: function(){
            var ComponentClass = Vue.extend(modalTenantComponent);
            var modal = new ComponentClass();
            modal.title = "Add Tenant";
            modal.parent = this;
            modal.$mount();  
            document.body.appendChild(modal.$el); 
        },
        show: function(item){
            console.log(item);
            var ComponentClass = Vue.extend(tenantFlyoutWidget);
            var flyout = new ComponentClass();
            flyout.item = item;
            flyout.parent = this;        
            flyout.$mount();
            document.body.appendChild(flyout.$el);
        },
        editItem: function(item){
   
            var ComponentClass = Vue.extend(modalTenantComponent);
            var modal = new ComponentClass();

            modal.title = "Update Tenant";
            modal.item = item;
            modal.isUpdate = true;
            modal.parent = this;
            modal.$mount();  
            document.body.appendChild(modal.$el); 
        },
        deleteItem: function(item){
            var ComponentClass = Vue.extend(modalTenantDeleteComponent);
            var modal = new ComponentClass();
            modal.item = item;
            modal.parent = this;
            modal.$mount();
            document.body.appendChild(modal.$el);
        }
    },
    template: `
    <div class="px-3">
        <div class=" mb-2">
            <div class="d-flex align-items-center justify-content-between mb-4">
                <h6 class="m-0">Tenants</h6>
                <button type="button" v-on:click="add" class="btn btn-sm"><i class="fal fa-user-plus mr-2"></i>Add Tenant</button>
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap">
                <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                    <select class="form-select mb-2">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="all">All</option>
                    </select>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                <div class="mb-2">
                <input type="text"  placeholder="Search Tenants" class="form-control small font-14">
                </div>
                </div>
            </div>
        </div>

        <div class="pt-0 mb-3 table-cards-1024">
            <table class="table table-hoverable-cells">
                <thead>
                <tr>
                    <th scope="col">Company</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Type</th>
                    <th scope="col">Status</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>

                <tr v-if="item.isVisible"  v-for="(item, index) in list" :key="index">
                    <td class="d-flex-1024"  v-on:click="show(item)">
                        <span class="d-none d-flex-1024 font-bold me-1">Company: </span>
                        <strong>{{item.company}}</strong>
                    </td>
                    <td class="d-flex-1024" v-on:click="show(item)">
                        <span class="d-none d-flex-1024 font-bold me-1">Name: </span>
                        {{item.name}}
                    </td>
                    <td class="d-flex-1024" v-on:click="show(item)">
                        <span class="d-none d-flex-1024 font-bold me-1">Email: </span>
                        {{item.email}}
                    </td>
                    <td class="d-flex-1024" v-on:click="show(item)">
                        <span class="d-none d-flex-1024 font-bold me-1">Type: </span>
                        {{item.type}}
                    </td>
                    <td  class="d-flex-1024"  v-on:click="show(item)">
                        <span class="d-none d-flex-1024 font-bold me-1">Status: </span>
                        <span class="tag tag-green2" v-if="item.isActive">
                            Active
                        </span>
                        <span class="tag tag-red2" v-else>
                            Inactive
                        </span>
                    </td>
                    <td class="text-right no-hover">
                        <div class="d-flex align-items-center justify-content-end">
                            <div class="dropdown">
                                <button type="button" 
                                data-toggle="dropdown" 
                                aria-haspopup="true" 
                                aria-expanded="false" 
                                class="btn btn-icon dropdown-toggle">
                                    <i class="far fa-ellipsis-v"></i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <button v-on:click="editItem(item)" type="button" class="dropdown-item"><i class="fas fa-edit mr-2"></i> Edit</a></button> 
                                    <button v-on:click="deleteItem(item)" type="button" class="dropdown-item"><i class="fa fa-trash mr-2" aria-hidden="true"></i> Delete</button>
                                </div>
                            </div>              
                        </div>
                    </td>
                </tr>

                </tbody>
            </table>
            <hr class="m-0"/>
            <div class="d-flex align-items-center mt-3 mb-2 flex-wrap-370">
                <div class="text-center-370 w-100-370 mb-point5-370">
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
    `,
});