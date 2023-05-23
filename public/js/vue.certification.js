var certificationComponent = Vue.component('certification', {
    data() {
        return {
            list: []
        }
    },
    props: {
        certification: {
            type: Array,
            default() {
                return [{
                    id: 1
                }]
            }
        }
    },
    created: function () {
        if(this.certification.length){
            this.list = this.certification;
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
        <div class="certfication">
            <div class="d-flex" v-for="item in list">
                <div class="mr-3">
                    <div class="avatar avatar-sm">{{item.id}}</div>
                </div>
                <div class="flex-grow-1">
                    <div class="row mb-2">
                        <div class="col-lg-6">
                            <div class="form-floating">
                                <input type="text" class="form-control" placeholder="Certification Name">
                                <label>Certification  Name</label>
                            </div> 
                        </div>
                        <div class="col-lg-6">
                            <div class="form-floating">
                                <input type="text" class="form-control" placeholder="Certificate #">
                                <label>Certificate #</label>
                            </div> 
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="form-floating form-date">
                                <label >Issue Date</label>
                                <input type="date" class="form-control date" placeholder="Issue Date">
                            </div> 
                        </div>
                        <div class="col-lg-6">
                            <div class="form-floating form-date">
                                <label >Expiry Date</label>
                                <input type="date" class="form-control date" placeholder="Expiry Date">
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


            <div  v-bind:class="{ 'ml-5': list.length }">
                <button 
                type="button" 
                v-on:click="add" 
                class="btn btn-sm btn-text">
                    <i class="fal fa-plus mr-1" aria-hidden="true"></i> 
                    <strong>Add Certification</strong>
                </button>
            </div>

        </div>
    `,
});