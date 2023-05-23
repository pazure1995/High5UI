var workExperienceComponent = Vue.component('workexperience', {
    data() {
        return {
            list: []
        }
    },
    props: {
        workhistory: {
            type: Array,
            default() {
                return [{
                    id: 1
                }]
            }
        }
    },
    created: function () {
        if(this.workhistory.length){
            this.list = this.workhistory;
        }
    },
    destroyed: function(){},
    methods: {
        add: function(){
            this.list.push({
                id: this.list.length + 1
            });
        },
        remove: function(item){
            var id = item.id;
            for(var i=0; i<this.list.length; i++){
                if(this.list[i].id === id){
                    this.list.splice(i, 1);
                }
            }
            for(var i=0; i<this.list.length; i++){
                this.list[i].id = i+1;
            }
        }
    },
    template: `
        <div class="work-experience">
            <div class="d-flex" v-for="item in list">
                <div class="mr-3">
                    <div class="avatar avatar-sm">{{item.id}}</div>
                </div>
                <div>
                    <div class="row mb-2">
                        <div class="col-lg-6">
                            <div class="form-floating">
                                <input type="text" class="form-control" placeholder="Employer Name">
                                <label>Employer Name</label>
                            </div> 
                        </div>
                        <div class="col-lg-6">
                            <div class="form-floating">
                                <select class="form-select">
                                    <option selected>Select Industry</option>
                                    <option>Aviation</option>
                                    <option>Staffing</option>
                                    <option>Communication</option>
                                </select>
                                <label>Industry</label>
                            </div> 
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-lg-4">
                            <div class="form-floating">
                                <input type="text" class="form-control" placeholder="Job Title">
                                <label>Job Title</label>
                            </div> 
                        </div>
                        <div class="col-lg-4">        
                            <div class="form-floating form-date">
                                <label >Start Date</label>
                                <input type="date" class="form-control date" placeholder="Start Date">
                            </div> 
                        </div>
                        <div class="col-lg-4">        
                            <div class="form-floating form-date">
                                <label >End Date</label>
                                <input type="date" class="form-control date" placeholder="End Date">
                            </div> 
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Experience Description"></textarea>
                                <label>Experience Description</label>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-12">
                            <hr/>
                        </div>
                    </div>
                </div>
                <div class="ml-3">
                    <button type="button" v-on:click="remove(item)" class="btn btn-icon">
                        <i class="fal fa-fw fa-trash-alt"></i>
                    </button>
                </div>

            </div>


            <div v-bind:class="{ 'ml-5': list.length }">
                <button 
                type="button" 
                v-on:click="add" 
                class="btn btn-sm btn-text">
                    <i class="fal fa-plus mr-1" aria-hidden="true"></i> 
                    <strong>Add Experience</strong>
                </button>
            </div>

        </div>
    `,
});