var rolesComponent = Vue.component('roles', {
    data() {
        return {
            isActive: false,
            roles: [
                {
                    text: "Admin",
                    selected: true
                },
                {
                    text: "Hiring Manager",
                    selected: true
                },
                {
                    text: "Recruiter",
                    selected: true
                },
                {
                    text: "Candidate",
                    selected: true
                }
            ],
            rolesCopy: [
                {
                    text: "Admin",
                    selected: true
                },
                {
                    text: "Hiring Manager",
                    selected: true
                },
                {
                    text: "Recruiter",
                    selected: true
                },
                {
                    text: "Candidate",
                    selected: true
                }
            ],
            submitting: false,
            submitted: false
        }
    },
    methods: {
        toggleActive: function(){
            if(this.isActive){
                this.rolesCopy = JSON.parse(JSON.stringify(this.roles));
                this.isActive = false;
            }else{
                this.isActive = true;
            }
        },
        save: function(){
            var app = this;
            app.submitting = true;
            setTimeout(() => {
                app.submitting = false;
                app.submitted = true;
                setTimeout(() => {

                    app.roles = JSON.parse(JSON.stringify(app.rolesCopy));

                    app.submitted = false;
                    app.submitting = false;
                    app.isActive = false;
                }, 1000);
            }, 2000);
        }
    },
    template: `
    <!-- root div -->
    <div>
        <div class="p-3 mb-2">
            <div class="d-flex align-items-center justify-content-between mb-3">
                <h6 class="m-0">Roles</h6>
                <button v-if="!isActive" v-on:click="toggleActive" class="btn btn-sm">Edit</button>
                <div v-else>
                    <div v-if="submitting === false && submitted === false">
                        <button  v-on:click="toggleActive" class="btn btn-sm btn-secondary">Cancel</button>
                        <button  v-on:click="save" class="btn btn-sm btn-primary">Save</button>
                    </div>
                    <div v-if="submitting === true && submitted === false">
                        <button type="button" disabled class="btn btn-square">
                            <img style="width: 20px;" src="/images/button-loader-white.gif"/>
                        </button>
                    </div>
                    <div v-if="submitted">
                        <span class="text-success">
                        <i class="far fa-check mr-1"></i>
                            Changes Saved
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <p>
                    Select roles for your organization who would be involved in this system:
                </p>
            </div>
            <!-- action panel -->
            <div v-if="!isActive">
                <div v-for="item in roles" class="pt-1">
                    <div class="d-flex align-items-center justify-content-between">
                        <label class="p-0">{{item.text}}</label>
                        <div>
                            <span v-if="item.selected" class="tag tag-green2">Active</span>
                            <span v-else class="tag tag-red2">Inactive</span>
                        </div>
                    </div>
                    <hr class="mt-2 mb-1"/>
                </div>
            </div>
            <div v-if="isActive">
                <div v-for="item in rolesCopy" class="pt-1">
                    <div class="d-flex align-items-center justify-content-between">
                        <label class="p-0">{{item.text}}</label>
                        <div class="form-check form-switch">
                            <input :disabled="submitting === true || submitted === true" class="form-check-input" v-model="item.selected" type="checkbox" >
                        </div>
                    </div>
                    <hr class="mt-2 mb-1"/>
                </div>
            </div>
        </div>
    </div>
    <!-- root div -->
    `,
});