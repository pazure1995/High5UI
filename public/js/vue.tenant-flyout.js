var tenantFlyoutWidget = Vue.component('tenant-flyout', {
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
                                <span v-if="item.isActive" class="tag tag-green2">Active</span>
                                <span v-else class="tag tag-red2">Inactive</span>
                            </div>
                        </div>                    
                    </div>
                    <div class="ml-auto d-flex align-items-center">
                        <div>
                            <div class="btn-group btn-group-sm btn-split">
                                <button type="button" v-on:click="edit(item)" class="btn btn-sm">Edit</button>
                                <button type="button" class="btn btn-sm dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="sr-only">Toggle Dropdown</span>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right">
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
                        <i class="fas fa-building"></i>
                    </div>
                    <div class="ml-2">
                        <p class="mb-0">{{item.company}} </p>
                        <p class="mb-0"><small>Company</small></p>
                    </div>                                   
                </div> 

                <div class="d-flex mb-2 pl-1">
                    <div>
                        <i class="fas fa-envelope-open-text"></i>
                    </div>
                    <div class="ml-2">
                        <p class="mb-0">{{item.email}} </p>
                        <p class="mb-0"><small>Email</small></p>
                    </div>                                   
                </div> 
                <div class="d-flex mb-2 pl-1">
                    <div>
                        <i class="fas fa-shapes"></i>
                    </div>
                    <div class="ml-2">
                        <p class="mb-0">{{item.type}} </p>
                        <p class="mb-0"><small>Type</small></p>
                    </div>                                   
                </div> 

            </div>
            <div class="mb-2">
                <button
                v-on:click="onCollapsibleClick('ach')"
                type="button" class="btn btn-collapsible">
                    <i v-if="!collapsible.ach" class="fal fa-angle-down fa-fw"></i>
                    <i v-else class="fal fa-angle-up fa-fw"></i>
                    <span><small>ACH</small></span>
                </button>
            </div>

            <div v-bind:class="{'d-none': collapsible.ach}"  class="mb-4 ml-4">
                
                <div class="d-flex mb-2 pl-1">
                    <div>
                        <i class="fas fa-fw fa-university"></i>
                    </div>
                    <div class="ml-2">
                        <p class="mb-0">Capital Bank</p>
                        <p class="mb-0"><small>Bank Name</small></p>
                    </div>                                   
                </div> 

                <div class="d-flex mb-2 pl-1">
                    <div>
                        <i class="fas fa-fw fa-map-pin"></i>
                    </div>
                    <div class="ml-2">
                        <p class="mb-0">300 Capital Avenue, Jacksonville FL. 32225 United States </p>
                        <p class="mb-0"><small>Bank Address</small></p>
                    </div>                                   
                </div>
                <div class="d-flex mb-2 pl-1">
                    <div>
                        <i class="fas fa-fw fa-signature"></i>
                    </div>
                    <div class="ml-2">
                        <p class="mb-0">Joe Silva </p>
                        <p class="mb-0"><small>Name on account</small></p>
                    </div>                                   
                </div>
                <div class="d-flex mb-2 pl-1">
                    <div>
                        #
                    </div>
                    <div class="ml-2">
                        <p class="mb-0">Routing Number </p>
                        <p class="mb-0"><small>123123123213</small></p>
                    </div>                                   
                </div>
                <div class="d-flex mb-2 pl-1">
                    <div>
                        #
                    </div>
                    <div class="ml-2">
                        <p class="mb-0">Account Number </p>
                        <p class="mb-0"><small>18832983298</small></p>
                    </div>                                   
                </div>
            </div>
            <div class="mb-2">
                <button
                v-on:click="onCollapsibleClick('apikey')"
                type="button" class="btn btn-collapsible">
                    <i v-if="!collapsible.apikey" class="fal fa-angle-down fa-fw"></i>
                    <i v-else class="fal fa-angle-up fa-fw"></i>
                    <span><small>API Key</small></span>
                </button>
            </div>

            <div v-bind:class="{'d-none': collapsible.apikey}"  class="mb-4 ml-4">
                
                <div class="d-flex mb-2 pl-1">
                    <div>
                        <i class="fas fa-fw fa-sitemap"></i>
                    </div>
                    <div class="ml-2">
                        <p class="mb-0">http://biz.api.com</p>
                        <p class="mb-0"><small>Rest API URL</small></p>
                    </div>                                   
                </div> 

                <div class="d-flex mb-2 pl-1">
                    <div>
                        <i class="fas fa-fw fa-key"></i>
                    </div>
                    <div class="ml-2">
                        <p class="mb-0">12312kkjlk21s3d3 </p>
                        <p class="mb-0"><small>Access Key</small></p>
                    </div>                                   
                </div>
                <div class="d-flex mb-2 pl-1">
                    <div>
                        <i class="fas fa-fw fa-mask"></i>
                    </div>
                    <div class="ml-2">
                        <p class="mb-0">HammockCreative</p>
                        <p class="mb-0"><small>Secret</small></p>
                    </div>                                   
                </div>
            </div>
        </div>
    </div>
`
});