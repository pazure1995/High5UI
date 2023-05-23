var managePrivileges = Vue.component('manage-privileges', {
    data() {
        return {
            isEditable: false,
            adminList: [],
            adminCloneList: [],
            hiringManagerList: [],
            hiringManagerCloneList: [],
            recruiterList: [],
            recruiterCloneList: [],
            candidateList: [],
            candidateCloneList: [],
            collapsible: {
                admin: false,
                hiringManager: false,
                recruiter: false,
                candidate: false
            },
            submitting: false,
            submitted: false
        }
    },
    watch: {

    },
    created: function(){
        this.seed();
    },
    methods: {
        seed: function(){

            var adminValues = [
                {
                    value: 'Add/Edit Jobs'
                },
                {
                    value: 'View jobs'
                },
                {
                    value: 'Add/Edit candidates'
                },
                {
                    value: 'View candidates'
                },
                {
                    value: 'Manage Profile'
                },
                {
                    value: 'Share jobs'
                },
                {
                    value: 'Share jobs using company account'
                },
                {
                    value: 'Source candidate for a job'
                },
                {
                    value: 'Submit a candidate for a job'
                },
                {
                    value: 'Send RTR request to a candidate'
                },
                {
                    value: 'View RTR preview'
                },
                {
                    value: 'Shortlist candidates for a job'
                },
                {
                    value: 'Schedule interview for a candidate'
                },
                {
                    value: 'Mark a candidate as hired for a job'
                },
                {
                    value: 'Send jobs to multiple candidate using mail merge'
                },
                {
                    value: 'Add Employee'
                },
                {
                    value: 'Manage Roles'
                },
                {
                    value: 'Add Preferred Supplier'
                },
                {
                    value: 'Manage Tier'
                },
                {
                    value: 'Manage Privilege'
                },
                {
                    value: 'Add New Supplier'
                },
                {
                    value: 'Manage Tenant'
                },
                {
                    value: 'Add Hiring Manager'
                },
                {
                    value: 'Add Recruiter'
                },
                {
                    value: 'Assign MCQ assessment'
                },
                {
                    value: 'Assign One-Way Interview'
                },
                {
                    value: 'Assign Two-Way Interview'
                },
                {
                    value: 'Assign Learning'
                },
                {
                    value: 'Resend RTR'
                },
                {
                    value: 'Interviewed'
                }
            ];
            var hiringManagerValues = [
                {
                    value: 'Shortlist candidates for a job'
                },
                {
                    value: 'Manage Privilege'
                },
                {
                    value: 'Add / Edit Jobs'
                },
                {

                    value: 'Mark a candidate as hired for a job'
                },
                {
                    value: 'Assign Two-Way Interview'
                },
                {
                    value: 'View candidates'
                },
                {
                    value: 'Manage Tenant'
                },
                {
                    value: 'View RTR preview'
                },
                {
                    value: 'Submit a candidate for a job'
                },
                {
                    value: 'Share jobs'
                },
                {
                    value: 'Add Employee'
                },
                {
                    value: 'Add Hiring Manager'
                },
                {
                    value: 'Send jobs to multiple candidate using mail merge'
                },
                {
                    value: 'Share jobs using company account'
                },
                {
                    value: 'Interviewed'
                },
                {
                    value: 'Send RTR request to a candidate'
                },
                {
                    value: 'Add New Supplier'
                },
                {
                    value: 'View jobs'
                },
                {
                    value: 'Add Recruiter'
                },
                {
                    value: 'Schedule interview for a candidate'
                },
                {
                    value: 'Resend RTR'
                },
                {
                    value: 'Manage Tier'
                },
                {
                    value: 'Assign One-Way Interview'
                },
                {
                    value: 'Manage Profile'
                },
                {
                    value: 'Add Preferred Supplier'
                },
                {
                    value: 'Source candidate for a job'
                },
                {
                    value: 'Deactivate Account'
                },
                {
                    value: 'Manage Roles'
                },
                {
                    value: 'Add/Edit candidates'
                },
                {
                    value: 'Assign MCQ assessment'
                },
                {
                    value: 'Assign Learning'
                },
            ];
            var recruiterValues = [
                {
                    value: 'Share jobs'
                },
                {
                    value: 'Add New Supplier'
                },
                {
                    value: 'Send RTR request to a candidate'
                },
                {
                    value: 'Deactivate Account'
                },
                {
                    value: 'Add Preferred Supplier'
                },
                {
                    value: 'Source candidate for a job'
                },
                {
                    value: 'View jobs'
                },
                {
                    value: 'Assign Learning'
                },
                {
                    value: 'Assign MCQ assessment'
                },
                {
                    value: 'Manage Roles'
                },
                {
                    value: 'Assign One-Way Interview'
                },
                {
                    value: 'Resend RTR'
                },
                {
                    value: 'Manage Profile'
                },
                {
                    value: 'Schedule interview for a candidate'
                },
                {
                    value: 'Submit a candidate for a job'
                },
                {
                    value: 'Manage Tier'
                },
                {
                    value: 'Add Recruiter'
                },
                {
                    value: 'Shortlist candidates for a job'
                },
                {
                    value: 'Manage Privilege'
                },
                {
                    value: 'Share jobs using company account'
                },
                {
                    value: 'Add / Edit Jobs'
                },
                {
                    value: 'Add Hiring Manager'
                },
                {
                    value: 'Send jobs to multiple candidate using mail merge'
                },
                {
                    value: 'Add/Edit candidates'
                },
                {
                    value: 'Add Employee'
                },
                {
                    value: 'View candidates'
                },
                {
                    value: 'Interviewed'
                },
                {
                    value: 'Assign Two-Way Interview'
                },
                {
                    value: 'Mark a candidate as hired for a job'
                },
                {
                    value: 'Manage Tenant'
                },
                {
                    value: 'View RTR preview'
                },
            ];
            var candidateValues =  [
                {
                    value: 'Refer Candidates for a Job'
                },
                {
                    value: 'Manage Profile'
                },
                {
                    value: 'View jobs'
                },
                {
                    value: 'Assign One-Way Interview'
                },
                {
                    value: 'Apply for a job'
                },
                {
                    value: 'Assign MCQ assessment'
                },
                {
                    value: 'Share jobs'
                },
                {
                    value: 'View RTR preview'
                },
            ];

            for(var i =0; i<adminValues.length; i++){
                this.adminList.push({
                    id: new Date().getTime() * (Math.floor(Math.random() * 200) + (i+1)),
                    selected: true,
                    value: adminValues[i].value
                });
                if(i === (adminValues.length - 1)){
                    
                    this.adminCloneList = JSON.parse(JSON.stringify(this.adminList));
                    console.log("admin clone list");
                    console.log(this.adminCloneList);
                }
            }

            for(var i =0; i<hiringManagerValues.length; i++){
                this.hiringManagerList.push({
                    id: new Date().getTime() * (Math.floor(Math.random() * 200) + (i+1)),
                    selected: true,
                    value: hiringManagerValues[i].value
                });
                if(i === (hiringManagerValues.length - 1)){
                    this.hiringManagerCloneList = JSON.parse(JSON.stringify(this.hiringManagerList));
                }
            }

            for(var i =0; i<candidateValues.length; i++){
                this.candidateList.push({
                    id: new Date().getTime() * (Math.floor(Math.random() * 200) + (i+1)),
                    selected: true,
                    value: candidateValues[i].value
                });
                if(i === (candidateValues.length - 1)){
                    this.candidateCloneList = JSON.parse(JSON.stringify(this.candidateList));
                }
            }

            for(var i =0; i<recruiterValues.length; i++){
                this.recruiterList.push({
                    id: new Date().getTime() * (Math.floor(Math.random() * 200) + (i+1)),
                    selected: true,
                    value: recruiterValues[i].value
                });
                if(i === (recruiterValues.length - 1)){
                    this.recruiterCloneList = JSON.parse(JSON.stringify(this.recruiterList));
                }
            }

        },
        toggleEdit: function(){
            if(this.isEditable){

                //reset the cloned list back to the master
                this.adminCloneList = JSON.parse(JSON.stringify(this.adminList));
                this.hiringManagerCloneList = JSON.parse(JSON.stringify(this.hiringManagerList));
                this.recruiterCloneList = JSON.parse(JSON.stringify(this.recruiterList));
                this.candidateCloneList = JSON.parse(JSON.stringify(this.candidateList));

                this.isEditable = false;
            }else{
                this.isEditable = true;
            }
        },
        totalSelected: function(list){
            var cnt = 0;
            for(var i =0; i<list.length; i++){
                if(list[i].selected){
                    cnt = cnt + 1;
                }
                if(i === (list.length - 1)){
                    return cnt;
                }
            }
        },
        toggleCollapsible: function(key){
            if(this.collapsible[key]){
                this.collapsible[key] = false;
            }else{
                this.collapsible[key] = true;
            }
        },
        save(){
            var app = this;
            app.submitting = true;
            setTimeout(() => {
                app.submitting = false;
                app.submitted = true;
                setTimeout(() => {
                    
                    //set the cloned list on the master list
                    app.adminList = JSON.parse(JSON.stringify(this.adminCloneList));
                    app.hiringManagerList = JSON.parse(JSON.stringify(this.hiringManagerCloneList));;
                    app.recruiterList = JSON.parse(JSON.stringify(this.recruiterCloneList));
                    app.candidateList = JSON.parse(JSON.stringify(this.candidateCloneList));

                    
                    app.submitted = false;
                    app.isEditable = false;

                }, 1000);
            }, 2000);

        }
    },
    template: `
<div>
    <div class="p-3 mb-2">
        <div class="d-flex align-items-center justify-content-between mb-3 flex-wrap-370">
            <h6 class="m-0 w-100-370 mb-point5-370">Privileges</h6>
            <button v-on:click="toggleEdit" v-if="!isEditable" class="btn btn-sm">Edit</button>
            <div v-else>
                <div v-if="submitting === false && submitted === false">
                    <button  v-on:click="toggleEdit" class="btn btn-sm btn-secondary">Cancel</button>
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

        <!--admin start-->
        <div class="card card-flat mb-1">
            <div class="card-body">
                <div v-on:click="toggleCollapsible('admin')" class="btn btn-collapsible d-flex align-items-center px-1">
                    <p class="mb-0 font-14 pl-2 pl-0-370">Admin ({{totalSelected(adminList)}}/{{adminList.length}})</p>
                    <div class="ml-auto">
                        <button type="button" class="btn btn-icon">
                            <i v-if="collapsible.admin" aria-hidden="true" class="fal fa-fw fa-chevron-square-down"></i>
                            <i v-else aria-hidden="true" class="fal fa-fw fa-chevron-square-up"></i>
                        </button>
                    </div>
                </div>
                <hr v-if="collapsible.admin" class="mt-2" />
                <div v-if="collapsible.admin">
                    <div v-for="(item,index) in adminList" v-if="!isEditable" v-bind:class="{'bg-gray3': index % 2 === 0}" class="d-flex align-items-center justify-content-between py-1 ml-1 pl-2 flex-wrap-370">
                        <div class="w-100-370 mb-point5-370" v-bind:class="{'font-bold':item.selected}">
                            {{item.value}}
                        </div>
                        <div class="w-100-370 mb-point5-370">
                            <span v-if="item.selected" class="tag tag-green2">Enabled</span>
                            <span v-else class="tag tag-red2">Disabled</span>
                        </div>
                    </div>
                </div>
                <div v-if="collapsible.admin">
                    <div v-for="(item,index) in adminCloneList" v-if="isEditable" v-bind:class="{'bg-gray3': index % 2 === 0}" class="d-flex align-items-center justify-content-between py-1 pl-2 flex-wrap-370">
                        <div class="w-100-370 mb-point5-370" v-bind:class="{'font-bold':item.selected}">
                            {{item.value}}
                        </div>
                        <div class="form-check form-switch w-100-370 mb-point5-370">
                            <input :disabled="submitting === true || submitted === true" class="form-check-input" v-model="item.selected" type="checkbox" >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--admin end-->

        <!--hiringmanager start-->
        <div class="card card-flat mb-1">
            <div class="card-body">
                <div v-on:click="toggleCollapsible('hiringManager')" class="btn btn-collapsible d-flex align-items-center px-1">
                    <p class="mb-0 font-14 pl-2 pl-0-370">Hiring Manager ({{totalSelected(hiringManagerList)}}/{{hiringManagerList.length}})</p>
                    <div class="ml-auto">
                        <button type="button" class="btn btn-icon">
                            <i v-if="collapsible.admin" aria-hidden="true" class="fal fa-fw fa-chevron-square-down"></i>
                            <i v-else aria-hidden="true" class="fal fa-fw fa-chevron-square-up"></i>
                        </button>
                    </div>
                </div>
                <hr v-if="collapsible.hiringManager" class="mt-2" />
                <div v-if="collapsible.hiringManager">
                    <div v-for="(item,index) in hiringManagerList" v-if="!isEditable" v-bind:class="{'bg-gray3': index % 2 === 0}" class="d-flex align-items-center justify-content-between py-1 ml-1 pl-2 flex-wrap-370">
                        <div class="w-100-370 mb-point5-370" v-bind:class="{'font-bold':item.selected}">
                            {{item.value}}
                        </div>
                        <div class="w-100-370 mb-point5-370">
                            <span v-if="item.selected" class="tag tag-green2">Enabled</span>
                            <span v-else class="tag tag-red2">Disabled</span>
                        </div>
                    </div>
                </div>
                <div v-if="collapsible.hiringManager">
                    <div v-for="(item,index) in hiringManagerCloneList" v-if="isEditable" v-bind:class="{'bg-gray3': index % 2 === 0}" class="d-flex align-items-center justify-content-between py-1 ml-1 pl-2 flex-wrap-370">
                        <div class="w-100-370 mb-point5-370" v-bind:class="{'font-bold':item.selected}">
                            {{item.value}}
                        </div>
                        <div class="form-check form-switch w-100-370 mb-point5-370">
                            <input :disabled="submitting === true || submitted === true" class="form-check-input" v-model="item.selected" type="checkbox" >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--hiringmanager end-->

         <!--recruiter start-->
         <div class="card card-flat mb-1">
            <div class="card-body">
                <div v-on:click="toggleCollapsible('recruiter')" class="btn btn-collapsible d-flex align-items-center px-1">
                    <p class="mb-0 font-14 pl-2 pl-0-370">Recruiter ({{totalSelected(recruiterList)}}/{{recruiterList.length}})</p>
                    <div class="ml-auto">
                        <button type="button" class="btn btn-icon">
                            <i v-if="collapsible.recruiter" aria-hidden="true" class="fal fa-fw fa-chevron-square-down"></i>
                            <i v-else aria-hidden="true" class="fal fa-fw fa-chevron-square-up"></i>
                        </button>
                    </div>
                </div>
                <hr v-if="collapsible.recruiter" class="mt-2" />
                <div v-if="collapsible.recruiter">
                    <div v-for="(item,index) in recruiterList" v-if="!isEditable" v-bind:class="{'bg-gray3': index % 2 === 0}" class="d-flex align-items-center justify-content-between py-1 pl-2 flex-wrap-370">
                        <div class="w-100-370 mb-point5-370" v-bind:class="{'font-bold':item.selected}">
                            {{item.value}}
                        </div>
                        <div class="w-100-370 mb-point5-370">
                            <span v-if="item.selected" class="tag tag-green2">Enabled</span>
                            <span v-else class="tag tag-red2">Disabled</span>
                        </div>
                    </div>
                </div>
                <div v-if="collapsible.recruiter">
                    <div v-for="(item,index) in recruiterCloneList" v-if="isEditable" v-bind:class="{'bg-gray3': index % 2 === 0}" class="d-flex align-items-center justify-content-between py-1 pl-2 flex-wrap-370">
                        <div class="w-100-370 mb-point5-370" v-bind:class="{'font-bold':item.selected}">
                            {{item.value}}
                        </div>
                        <div class="form-check form-switch w-100-370 mb-point5-370">
                            <input :disabled="submitting === true || submitted === true" class="form-check-input" v-model="item.selected" type="checkbox" >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--recruiter end-->    
        
         <!--candidate start-->
         <div class="card card-flat mb-1">
            <div class="card-body">
                <div v-on:click="toggleCollapsible('candidate')" class="btn btn-collapsible d-flex align-items-center px-1">
                    <p class="mb-0 font-14 pl-2 pl-0-370">Candidate ({{totalSelected(candidateList)}}/{{candidateList.length}})</p>
                    <div class="ml-auto">
                        <button type="button" class="btn btn-icon">
                            <i v-if="collapsible.candidate" aria-hidden="true" class="fal fa-fw fa-chevron-square-down"></i>
                            <i v-else aria-hidden="true" class="fal fa-fw fa-chevron-square-up"></i>
                        </button>
                    </div>
                </div>
                <hr v-if="collapsible.candidate" class="mt-2" />
                <div v-if="collapsible.candidate">
                    <div v-for="(item,index) in candidateList" v-if="!isEditable" v-bind:class="{'bg-gray3': index % 2 === 0}" class="d-flex align-items-center justify-content-between py-1 pl-2 flex-wrap-370">
                        <div class="w-100-370 mb-point5-370" v-bind:class="{'font-bold':item.selected}">
                            {{item.value}}
                        </div>
                        <div class="w-100-370 mb-point5-370">
                            <span v-if="item.selected" class="tag tag-green2">Enabled</span>
                            <span v-else class="tag tag-red2">Disabled</span>
                        </div>
                    </div>
                </div>
                <div v-if="collapsible.candidate">
                    <div v-for="(item,index) in candidateCloneList" v-if="isEditable" v-bind:class="{'bg-gray3': index % 2 === 0}" class="d-flex align-items-center justify-content-between py-1 pl-2 flex-wrap-370">
                        <div class="w-100-370 mb-point5-370" v-bind:class="{'font-bold':item.selected}">
                            {{item.value}}
                        </div>
                        <div class="form-check form-switch w-100-370 mb-point5-370">
                            <input :disabled="submitting === true || submitted === true" class="form-check-input" v-model="item.selected" type="checkbox" >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--candidate end-->   

    </div>
</div>

    `,
});