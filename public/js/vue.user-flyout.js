var userFlyoutWidget = Vue.component('user-flyout', {
    data() {
        return {
            showFlyout: false,
            request: {},
            candidate: {},
            collapsible: {
                stats: false,
                ach: false,
                apikey: false
            },
            item: {},
            parent: {}
        }
    },
    mounted: function(){
        console.log(this.item);
    },
    created: function () {
        document.querySelectorAll('.view-panel').forEach(e => e.remove());
        this.show();
    },
    destroyed: function(){
        el = this.$el;
        el.parentNode.removeChild(el);
    },
    methods: {
        confirm: function(item){
            var ComponentClass = Vue.extend(modalTenantDeleteComponent);
            var modal = new ComponentClass();
            modal.item = item;
            modal.parent = this.parent;
            modal.flyout = this; 
            modal.$mount();
            document.body.appendChild(modal.$el);
        },
        edit: function(item){
            var ComponentClass = Vue.extend(modalTenantComponent);
            var modal = new ComponentClass();

            modal.title = "Update Tenant";
            modal.item = item;
            modal.isUpdate = true;
            modal.parent = this.parent;
            modal.flyout = this;
            modal.$mount();  
            document.body.appendChild(modal.$el); 
        },
        assign: function(item){
            var ComponentClass = Vue.extend(modalTenantComponent);
            var modal = new ComponentClass();
            modal.title = "Assign Tenant";
            modal.isAssign = true;
            modal.isSmall = true;
            modal.parent = this;
            modal.item = item;
            modal.$mount();  
            document.body.appendChild(modal.$el); 
        },
        show: function(){
            this.showFlyout = true;
        },
        close: function(){
            this.showFlyout = false;
        },
        onCollapsibleClick: function(val){
            if(this.collapsible[val]){
                this.collapsible[val] = false;
            }else{
                this.collapsible[val] = true;
            }
        }
    },
    template: `
    <div class="view-panel" v-bind:class="{ show: showFlyout}">
        <div class="view-panel-header">
            <div class="px-3 py-2">
                <button
                v-on:click="close"
                type="button" class="btn btn-icon">
                    <i class="fal fa-times" aria-hidden="true"></i>
                </button>
            </div>
            <div class="px-3 mb-3">
                <div class="d-flex align-items-start flex-wrap-reverse">
                    <div class="d-flex">    
                        <div class="ml-3">
                            <h5 class="mr-2 mb-2">{{item.name}}</h5>
                            <div class="mb-2">
                                <span class="tag tag-blue3">{{item.type}}</span>
                            </div>
                        </div>                    
                    </div>
                    <div class="ml-auto d-flex align-items-center">
                        <div>
                            <div class="btn-group btn-group-sm btn-split">
                                <button type="button" v-on:click="assign(item)" class="btn btn-sm">Assign</button>
                                <button type="button" class="btn btn-sm dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="sr-only">Toggle Dropdown</span>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right">
                                <button type="button" v-on:click="edit(item)" class="dropdown-item">Edit</button>
                                    <button type="button" v-on:click="confirm(item)" class="dropdown-item">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="view-panel-body">
            <div class="mb-2">
                <button
                v-on:click="onCollapsibleClick('stats')"
                type="button" class="btn btn-collapsible">
                    <i v-if="!collapsible.stats" class="fal fa-angle-down fa-fw"></i>
                    <i v-else class="fal fa-angle-up fa-fw"></i>
                    <span><small>General</small></span>
                </button>
            </div>

            <div v-bind:class="{'d-none': collapsible.stats}"  class="mb-4 ml-4">
                
                <div class="d-flex mb-2 pl-1">
                    <div>
                        <i class="fas fa-fw fa-building"></i>
                    </div>
                    <div class="ml-2">
                        <p class="mb-0">{{item.name}} </p>
                        <p class="mb-0"><small>Name</small></p>
                    </div>                                   
                </div> 

                <div class="d-flex mb-2 pl-1">
                    <div>
                        <i class="fas fa-fw fa-envelope-open-text"></i>
                    </div>
                    <div class="ml-2">
                        <p class="mb-0">{{item.email}} </p>
                        <p class="mb-0"><small>Email</small></p>
                    </div>                                   
                </div> 
                <div class="d-flex mb-2 pl-1">
                    <div>
                        <i class="fas fa-fw fa-map-pin"></i>
                    </div>
                    <div class="ml-2">
                        <p class="mb-0">{{item.city}} </p>
                        <p class="mb-0"><small>City</small></p>
                    </div>                                   
                </div> 
                <div class="d-flex mb-2 pl-1">
                    <div>
                        <i class="fas fa-fw fa-map"></i>
                    </div>
                    <div class="ml-2">
                        <p class="mb-0">{{item.country}} </p>
                        <p class="mb-0"><small>Country</small></p>
                    </div>                                   
                </div> 
                <hr/>
                <div class="mb-2 pl-1">  
                    <p class="mb-1"><strong>Tenants</strong></p>  
                    <ul class="ml-3">
                        <li>Logitech</li>
                        <li>TalentYeti</li>
                    </ul>                             
                </div> 
            </div>
        </div>
    </div>
`
});