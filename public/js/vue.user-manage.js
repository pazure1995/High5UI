var manageUsers = Vue.component('manage-users', {
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


            var names = [
                "John Doe",
                "Jane Doe",
                "Robert Stone",
                "Bill Thomas",
                "Sarah Daily",
                "Jennifer Mackenzie"
            ];

            var type = [
                "H5 Coordinator",
                "Sales Admin",
                "Community Manager"
            ];

    
            for(var i=0; i<60; i++){

                var isVisible = false;
                if(i < 10){
                    isVisible = true;
                }

                var name = names[Math.floor(Math.random() * 6) + 0];
                var firstName = name.split(" ")[0];
                var lastName = name.split(" ")[1];;

                this.list.push({
                    id: new Date().getTime() * (i+1),
                    name: name,
                    firstName: firstName,
                    lastName: lastName,
                    type: type[Math.floor(Math.random() * 3) + 0],
                    email: "name@company.com",
                    city: "Jacksonville FL.",
                    country: "United States",
                    isActive: true,
                    isVisible: isVisible
                });

     

            }

        },
        add: function(){
            var ComponentClass = Vue.extend(modalTenantComponent);
            var modal = new ComponentClass();
            modal.title = "Add User";
            modal.parent = this;
            modal.$mount();  
            document.body.appendChild(modal.$el); 
        },
        assign: function(item){
            var ComponentClass = Vue.extend(modalTenantComponent);
            var modal = new ComponentClass();
            modal.title = "Assign User";
            modal.isAssign = true;
            modal.isSmall = true;
            modal.parent = this;
            modal.item = item;
            modal.$mount();  
            document.body.appendChild(modal.$el); 
        },
        show: function(item){
            var ComponentClass = Vue.extend(userFlyoutWidget);
            var flyout = new ComponentClass();
            flyout.item = item;
            flyout.parent = this;        
            flyout.$mount();
            document.body.appendChild(flyout.$el);
        },
        editItem: function(item){
   
            var ComponentClass = Vue.extend(modalTenantComponent);
            var modal = new ComponentClass();

            modal.title = "Update User";
            modal.item = item;
            modal.isUpdate = true;
            modal.parent = this;
            modal.$mount();  
            document.body.appendChild(modal.$el); 
        },
        deleteItem: function(item){
            var ComponentClass = Vue.extend(modalUserDeleteComponent);
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
                <h6 class="m-0">Users</h6>
                <button type="button" v-on:click="add" class="btn btn-sm"><i class="fal fa-user-plus mr-2"></i>Add User</button>
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
                        <input type="text"  placeholder="Search Users" class="form-control small font-14">
                    </div>
                </div>
            </div>
        </div>

        <div class="pt-0 mb-3 table-cards-1024">
            <table class="table table-hoverable-cells">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Type</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="item.isVisible"  v-for="(item, index) in list" :key="index">
                        <td class="d-flex-1024"  v-on:click="show(item)">
                            <span class="d-none d-flex-1024 font-bold me-1">Name: </span>
                            <span>{{item.name}}</span>
                        </td>
                        <td class="d-flex-1024"  v-on:click="show(item)">
                            <span class="d-none d-flex-1024 font-bold me-1">Email: </span>
                            {{item.email}}
                        </td>
                        <td class="d-flex-1024"  v-on:click="show(item)">
                            <span class="d-none d-flex-1024 font-bold me-1">Type: </span>
                            {{item.type}}
                        </td>
                        <td class="text-right no-hover">
                            <div class="d-flex align-items-center justify-content-end">
                                <button v-if="item.type === 'H5 Coordinator' || item.type === 'Community Manager'"
                                 v-on:click="assign(item)" type="button" class="btn btn-secondary btn-sm">Assign</button>
                                <div class="dropdown ml-2">
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