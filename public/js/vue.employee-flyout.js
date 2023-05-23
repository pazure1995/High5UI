var employeeFlyoutWidget = Vue.component('employee-flyout', {
    data() {
        return {
            showFlyout: false,
            request: {},
            candidate: {},
            collapsible: {
                stats: false,
                skills: false,
                description: false,
                education: false,
                certifications: false,
                industries: false,
                workHours: false,
                overtime: false,
                travel: false,
                drugTest: false,
                backgroundCheck: false,
                securityClearance: false,
                disqualifiedCandidates: true,
            },
            employee: {},
            employees: {},
            employeeCopy: {}
        }
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
        confirm: function(employee){
            var ComponentClass = Vue.extend(modalEmployeeDeleteComponent);
            var modal = new ComponentClass();
            modal.$mount();
            modal.flyout = this.showFlyout;
            modal.employee = employee;
            modal.employees = this.employees;
            modal.parent = this;
            document.body.appendChild(modal.$el);
        },
        edit: function(employee){
            var ComponentClass = Vue.extend(modalEmployeeComponent);
            var modal = new ComponentClass();

            modal.title = "Update Employee";
            this.employeeCopy = JSON.parse(JSON.stringify(this.employee));
            modal.$mount();  
            modal.employee = employee;
            modal.employees = this.employees;
            modal.employeeCopy = this.employeeCopy;
            modal.parent = this;
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
                            <h5 class="mr-2 mb-2">{{employee.firstName}}  {{employee.middleName}} {{employee.lastName}}</h5>
                            <div class="mb-2">
                                <span class="tag">{{employee.role}}</span>
                            </div>
                        </div>                    
                    </div>
                    <div class="ml-auto d-flex align-items-center">
                        <div>
                            <div class="btn-group btn-group-sm btn-split">
                                <button type="button" v-on:click="edit(employee)" class="btn btn-sm">Edit</button>
                                <button type="button" class="btn btn-sm dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="sr-only">Toggle Dropdown</span>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <button type="button" v-on:click="confirm(employee)" class="dropdown-item">Remove</button>
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
                        <i class="fas fa-envelope-open-text"></i>
                    </div>
                    <div class="ml-2">
                        <p class="mb-0">{{employee.email}} </p>
                        <p class="mb-0"><small>Email</small></p>
                    </div>                                   
                </div> 

                <div class="d-flex mb-2 pl-1">
                    <div>
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <div class="ml-2">
                        <p class="mb-0">{{employee.phone}} </p>
                        <p class="mb-0"><small>Phone</small></p>
                    </div>                                   
                </div>

                <div class="d-flex mb-2 pl-1">
                    <div>
                        <i class="fas fa-id-card"></i> 
                    </div>
                    <div class="ml-2">
                        <p class="mb-0">{{employee.designation}} </p>
                        <p class="mb-0"><small>Designation</small></p>
                    </div>                                   
                </div>

            </div>
        </div>
    </div>
`
});