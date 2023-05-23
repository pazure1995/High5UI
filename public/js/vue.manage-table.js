var manageTable = Vue.component('manage-table', {
    data() {
        return {
            masterItem: {
                header: [],
                list: []
            },
            toggleView: {
                table: false,
                list: true,
                grid: false
            }
        };
    },
    mounted: function(){
        if(this.item){
            this.masterItem = this.item;
        }
    },
    props: {
        title: {
            type: String,
            default: ""
        },
        item: {
            type: Object,
            default: function () {
                return {}
            }
        },
        path: {
            type: String,
            default: "high5coordinator"
        }
    },
    methods: {
        add: function(){
            var ComponentClass = Vue.extend(modalTenantComponent);
            var modal = new ComponentClass();
            modal.title = "Add "+this.title;
            modal.label = this.title;
            modal.isGeneric = true;
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

            modal.title = "Update "+this.title;
            modal.item = item;
            modal.isUpdate = true;
            modal.isGeneric = true;
            modal.parent = this;
            modal.$mount();  
            document.body.appendChild(modal.$el); 
        },
        deleteItem: function(item){
            var ComponentClass = Vue.extend(modalTenantDeleteComponent);
            var modal = new ComponentClass();
            item.name = item.company;
            modal.isGeneric = true;
            modal.title = this.title;
            modal.item = item;
            modal.parent = this;
            modal.$mount();
            document.body.appendChild(modal.$el);
        },
        updateTab: function(category,type){
            if(category[type]){
                category[type] = false;
            }else{
                category[type] = true;
            }   
        },
        resetTabs: function(category){
            for (var key in category) {
                category[key] = false
            }
        },
        onTabClick: function (category,val){
            this.resetTabs(this[category]);
            this.updateTab(this[category],val);
        },
    },
    template: `
<div class="px-3">
    <div class="mb-2">
        <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center mb-2">
                <h6 v-if="title.length" class="mt-0 mb-0 mr-3">
                    {{title}}
                </h6>
            
                <div class="mr-3">	
                    <select class="form-select font-14">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="all">All</option>
                    </select>
                </div>
                <div>
                    <input type="text" placeholder="Search Clients" class="form-control font-14" />
                </div>

            </div>
            <div class="d-flex align-items-center">
                <div class="d-none d-xl-flex nav nav-tabs justify-content-between px-1">
                    <div class="nav-item w-25 d-flex justify-content-center">
                        <button v-bind:class="{active: toggleView.list}" v-on:click="onTabClick('toggleView','list')" type="button" class="nav-link pb-3 bg-transparent">
                            <i class="fas fa-list"></i>
                        </button>
                    </div>
                    <div class="nav-item w-25 d-flex justify-content-center">
                        <button v-bind:class="{active: toggleView.grid}" v-on:click="onTabClick('toggleView','grid')" type="button" class="nav-link pb-3 bg-transparent">
                            <i class="fas fa-th-large"></i>
                        </button>
                    </div>
                    <div class="nav-item w-25 d-flex justify-content-center">
                        <button v-bind:class="{active: toggleView.table}" v-on:click="onTabClick('toggleView','table')" type="button" class="nav-link pb-3 bg-transparent">
                            <i class="fas fa-table"></i>
                        </button>
                    </div>
                </div>
                <button type="button" v-on:click="add" class="btn btn-sm ml-3"><i class="fal fa-user-plus mr-2"></i>Add {{title}}</button>
            </div>
        </div>
        <hr class="mt-0"/>
    </div>

    <div v-if="toggleView.table" class="pt-0 mb-3 table-cards-1024">
        <table class="table table-hoverable-cells">
            <thead>
                <tr>
                    <th scope="col" v-for="(item,index) in masterItem.headers">{{item}}</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in masterItem.list" :key="index">
                    <td class="d-flex-1024 p-0">
                        <a :href="'/' + path + '/admin'" class="font-primary d-block w-100 p-2 no-hover">
                            <span class="d-none d-flex-1024 font-bold me-1">Company: </span>
                            <strong>{{item.company}}</strong>
                         </a>
                    </td>
                    <td class="d-flex-1024 p-0">
                        <a :href="'/' + path + '/admin'" class="font-primary d-block w-100 p-2 no-hover font-regular">
                            <span class="d-none d-flex-1024 font-bold me-1">Location: </span>
                            {{item.location}}
                        </a>
                    </td>
                    <td class="d-flex-1024 p-0">
                        <a :href="'/' + path + '/admin'" class="font-primary d-block w-100 p-2 no-hover font-regular">
                            <span class="d-none d-flex-1024 font-bold me-1">Jobs: </span>
                            {{item.jobs}}
                        </a>
                    </td>
                    <td class="d-flex-1024 p-0">
                        <a :href="'/' + path + '/admin'" class="font-primary d-block w-100 p-2 no-hover font-regular">
                            <span class="d-none d-flex-1024 font-bold me-1">Candidates: </span>
                            {{item.candidates}}
                        </a>
                    </td>
                    <td class="d-flex-1024 p-0">
                        <a :href="'/' + path + '/admin'" class="font-primary d-block w-100 p-2 no-hover font-regular">
                            <span class="d-none d-flex-1024 font-bold me-1">Added On: </span>
                            {{item.addedOn}}
                        </a>
                    </td>
                    <td class="text-right no-hover">
                        <div class="d-flex align-items-center justify-content-end">
                            <div class="dropdown">
                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn btn-icon dropdown-toggle">
                                    <i class="far fa-ellipsis-v"></i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <button v-on:click="editItem(item)" type="button" class="dropdown-item"><i class="fas fa-edit mr-2"></i> Edit</button>
                                    <button v-on:click="deleteItem(item)" type="button" class="dropdown-item"><i class="fa fa-trash mr-2" aria-hidden="true"></i> Delete</button>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <hr class="m-0" />
        <div class="d-flex align-items-center mt-3 mb-2 flex-wrap-370">
            <div class="text-center-370 w-100-370 mb-point5-370">
                Showing 6 of 6
            </div>
        </div>
    </div>
    <div v-if="toggleView.grid" class="pt-0 mb-3">
        <div>
            <div class="row">
                <div v-for="(item, index) in masterItem.list" class="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex">
                    <a :href="'/' + path + '/admin'" class="card card-flat mb-2 w-100">
                        <div class="card-body">
                            <div class="d-flex mt-2 mb-2 align-items-center justify-content-between">
                                <h6 class="mb-0">{{item.company}}</h6>
                                <div class="dropdown">
                                    <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn btn-icon dropdown-toggle">
                                        <i class="far fa-ellipsis-v"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <button v-on:click="editItem(item)" type="button" class="dropdown-item"><i class="fas fa-edit mr-2"></i> Edit</button>
                                        <button v-on:click="deleteItem(item)" type="button" class="dropdown-item"><i class="fa fa-trash mr-2" aria-hidden="true"></i> Delete</button>
                                    </div>
                                </div>
                            </div>
                            <div class="p-1 font-regular">
                                <div>
                                    <i class="far fa-fw fa-map me-2"></i>
                                    <span>{{item.location}}</span>
                                </div>
                            </div>
                            <div class="p-1 font-regular">
                                <div>
                                    <i class="far fa-fw fa-briefcase me-2"></i>
                                    <span>{{item.jobs}}</span>
                                </div>
                            </div>
                            <div class="p-1 font-regular">
                                <div>
                                    <i class="far fa-fw fa-users me-2"></i>
                                    <span>{{item.candidates}}</span>
                                </div>
                            </div>
                            <div class="p-1 font-regular">
                                <div>
                                    <i class="far fa-fw fa-clock me-2"></i>
                                    <span>{{item.addedOn}}</span>
                                </div>
                            </div>
                        </div>
                </a>
                </div>
                <hr class="mb-0 mt-2" />
                <div class="d-flex align-items-center mt-3 mb-2 flex-wrap-370">
                    <div class="text-center-370 w-100-370 mb-point5-370">
                        Showing 6 of 6
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="toggleView.list" class="pt-0 mb-3">
        <div v-for="(item, index) in masterItem.list" class="card card-flat card-hoverable card-hoverable-notransform mb-1">
            <div class="card-body d-flex justify-content-between">
                <a :href="'/' + path + '/admin'" class="font-primary no-hover w-100">
                    <h6 class="mb-0">{{item.company}}</h6>   
                    <div class="d-flex mt-1">
                        <div class="card card-borderless card-flat mr-2">
                            <div class="card-body pl-0 py-0 font-regular">
                                <small>{{masterItem.headers[1]}}</small>
                                <div>
                                    <i class="far fa-fw fa-map mr-1"></i>
                                    <span>{{item.location}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="card card-borderless card-flat mr-2">
                            <div class="card-body pl-0 py-0 font-regular">
                                <small>{{masterItem.headers[2]}}</small>
                                <div>
                                    <i class="far fa-fw fa-briefcase mr-1"></i>
                                    <span>{{item.jobs}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="card card-borderless card-flat mr-2">
                            <div class="card-body pl-0 py-0 font-regular">
                                <small>{{masterItem.headers[3]}}</small>
                                <div>
                                    <i class="far fa-fw fa-users mr-1"></i>
                                    <span>{{item.candidates}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="card card-borderless card-flat mr-2">
                            <div class="card-body pl-0 py-0 font-regular">
                                <small>{{masterItem.headers[4]}}</small>
                                <div>
                                    <i class="far fa-fw fa-clock mr-1"></i>
                                    <span>{{item.addedOn}}</span>
                                </div>
                            </div>
                        </div>
                    </div>    
                </a>    
                <div class="dropdown">
                    <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn btn-icon dropdown-toggle">
                        <i class="far fa-ellipsis-v"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                        <button v-on:click="editItem(item)" type="button" class="dropdown-item"><i class="fas fa-edit mr-2"></i> Edit</button>
                        <button v-on:click="deleteItem(item)" type="button" class="dropdown-item"><i class="fa fa-trash mr-2" aria-hidden="true"></i> Delete</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="d-flex align-items-center mt-3 mb-2 flex-wrap-370">
            <div class="text-center-370 w-100-370 mb-point5-370">
                Showing 6 of 6
            </div>
        </div>
    </div>
</div>
    `,
});