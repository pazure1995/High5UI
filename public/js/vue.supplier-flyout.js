var supplierFlyoutWidget = Vue.component('supplier-flyout', {
    data() {
        return {
            showFlyout: false,
            request: {},
            candidate: {},
            collapsible: {
                general: false,
                address: false,
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
        deactivate: function(item){
            this.parent.deactivateItem(item);
        },
        activate: function(item){
            this.parent.activateItem(item);
        },
        edit: function(item){
            this.parent.editItem(item);
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
                            <h5 class="mr-2 mb-1">{{item.name}}</h5>
                            <span v-if="item.isActive" class="tag tag-green1">Active</span>
                            <span v-else class="tag">Inactive</span>
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
                                    <button v-if="item.isActive" type="button" v-on:click="deactivate(item)" class="dropdown-item">Deactivate</button>
                                    <button v-else type="button" v-on:click="activate(item)" class="dropdown-item">Activate</button>
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
                v-on:click="onCollapsibleClick('general')"
                type="button" class="btn btn-collapsible">
                    <i v-if="!collapsible.general" class="fal fa-angle-down fa-fw"></i>
                    <i v-else class="fal fa-angle-up fa-fw"></i>
                    <span><small>General</small></span>
                </button>
            </div>

            <div v-bind:class="{'d-none': collapsible.general}"  class="mb-4 ml-4">
                
                <div class="d-flex mb-2 pl-1">
                    <div>
                        <i class="fas fa-fw fa-user"></i>
                    </div>
                    <div class="ml-2">
                        <p class="mb-0">{{item.pocName}} </p>
                        <p class="mb-0"><small>Point of Contact Name</small></p>
                    </div>                                   
                </div> 

                <div class="d-flex mb-2 pl-1">
                    <div>
                        <i class="fas fa-fw fa-envelope"></i>
                    </div>
                    <div class="ml-2">
                        <p class="mb-0">{{item.pocEmail}} </p>
                        <p class="mb-0"><small>Point of Contact Email</small></p>
                    </div>                                   
                </div>
                <div class="d-flex mb-2 pl-1">
                    <div>
                        <i class="fas fa-fw fa-map-pin"></i>
                    </div>
                    <div class="ml-2">
                        <p class="mb-0">100 Jax St. Jacksoville FL. 32225 United States </p>
                        <p class="mb-0"><small>Address</small></p>
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