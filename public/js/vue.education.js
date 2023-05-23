var educationComponent = Vue.component('education', {
    data() {
        return {
            list: []
        }
    },
    props: {
        education: {
            type: Array,
            default() {
                return [{
                    id: 1
                }]
            }
        }
    },
    created: function () {
        if(this.education.length){
            this.list = this.education;
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
        <div class="education">
            <div class="d-flex" v-for="item in list">
                <div class="mr-3">
                    <div class="avatar avatar-sm">{{item.id}}</div>
                </div>
                <div>
                    <div class="row mb-2">
                        <div class="col-lg-6">
                            <div class="form-floating">
                                <select class="form-select">
                                    <option selected>Select Year</option>
                                    <option>1972</option>
                                    <option>1973</option>
                                    <option>Communication</option>
                                </select>
                                <label>Year Graduated</label>
                            </div> 
                        </div>
                        <div class="col-lg-6">
                            <div class="form-floating">
                                <select class="form-select">
                                    <option selected>Select Type</option>
                                    <option>Professional</option>
                                    <option>Doctorate</option>
                                </select>
                                <label>Type of Education</label>
                            </div> 
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-lg-4">
                            <div class="form-floating">
                                <input type="text" class="form-control" placeholder="Education Program">
                                <label>Education Program</label>
                            </div> 
                        </div>
                        <div class="col-lg-4">        
                            <div class="form-floating">
                                <input type="text" class="form-control" placeholder="School">
                                <label>School</label>
                            </div> 
                        </div>
                        <div class="col-lg-4">        
                            <div class="form-floating">
                                <input type="text" class="form-control" placeholder="Major">
                                <label>Major</label>
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
                    <strong>Add Education</strong>
                </button>
            </div>

        </div>
    `,
});