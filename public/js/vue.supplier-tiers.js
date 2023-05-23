var supplierTiersComponent =  Vue.component('suppliertiers', {
    data: function () {
      return {
        list: [],
        hasTiers: false,
        releaseToPublic: false,
        isOutOfOptions: false,
        showAddSupplierForm: false,
        submittingAddSupplier: false,
        formComplete: false,
        suppliers: [
            { tier: 1, id: 1, text: "TalentYeti"},
            { tier: 1, id: 2, text: "Modis"},
            { tier: 1, id: 3, text: "Interactive Resources"},
            { tier: 1, id: 4, text: "High5" }               
        ],
        durations: [
            { id: 1,  text: "1 hour",selected: true},
            { id: 2,  text: "4 hours"},
            { id: 3,  text: "8 hours"},
            { id: 4,  text: "1 day" },
            { id: 5,  text: "2 days" },
            { id: 6,  text: "5 days" },
            { id: 7,  text: "1 week" }                               
        ],
        select2Instances: []
      }
    },
    props: {
      tiers: {
        type: Object,
        default: []
      }
    },
    watch: {
        list: function(val){
            console.log(val);
            if(val.length){
                this.hasTiers = true;
            }else{
                this.hasTiers = false;
            }
        }
    },
    created: function(){
        if(this.tiers.tiers.length){
            this.list = this.tiers.tiers;
            this.releaseToPublic = this.tiers.releaseToPublic;
        }
    },
    methods: {
        resetSupplierForm: function(){
            this.formComplete = false;
        },
        registerSelect2: function(instance){
            this.select2Instances.push(instance);
        },
        updateSelect2: function(updatedList,tierId){


            for(var i = 0; i<this.list.length; i++){
                var obj = this.list[i];

                obj.suppliers
  
                if(obj.tier === tierId){
                    obj.suppliers = updatedList;
                }
                if(i === (this.list.length - 1)){

                    if(this.getUnselectedSuppliers().length >=1){
                        this.isListOutOfOptions(this.getUnselectedSuppliers(),true);
                    }else{
                        this.isListOutOfOptions(this.getUnselectedSuppliers());
                    }

                    this.redraw();
                }
            }
        },
        remove: function(item){
            this.list = this.list.filter(function( obj ) {
                return obj.tier !== item.tier;
            });
            this.isListOutOfOptions(this.getUnselectedSuppliers(),true);
            this.redraw();
        },
        redraw: function(){

            var newList = [];
            var unselected = this.getUnselectedSuppliers();
      
            for(var i = 0; i<this.list.length; i++){
                var tier = this.list[i];
                var suppliers = this.list[i].suppliers;

                //first update the tier numbers so they are in order
                var id = (i+1);
                tier.tier = id;

                var newSupplierArray = [];

                for(var x = 0; x<suppliers.length; x++){

                    if(suppliers[x].selected){
                        suppliers[x].tier = id;
                        newSupplierArray.push(suppliers[x]);
                    }
                }

                for(var x = 0; x<unselected.length; x++){
          
                        unselected[x].tier = id;
                        newSupplierArray.push(unselected[x]);
                    
                }

                tier.suppliers = newSupplierArray;
        
  
                newList.push(tier);

                if(i === (this.list.length - 1)){
                    this.list = [];
                    this.list = newList;
                }
            }
            
        },
        add: function(){

            if(this.list.length){
                var unselected = this.getUnselectedSuppliers();
                this.isListOutOfOptions(unselected);

                this.list.push({
                    tier: this.list.length + 1,
                    suppliers: unselected,
                    duration: JSON.parse(JSON.stringify(this.durations))
                });
            }else{
                this.list.push({
                    tier: 1,
                    suppliers: this.suppliers,
                    duration: JSON.parse(JSON.stringify(this.durations))
                }); 
            }

        },
        submitAddSupplier: function(){
            this.submittingAddSupplier = true;

            setTimeout(() => {
                this.formComplete = true;
                this.submittingAddSupplier = false;
            }, 2000);
        },
        toggleAddSupplier: function(){
            if(this.showAddSupplierForm){
                this.showAddSupplierForm = false;
                this.formComplete = false;
            }else{
                this.showAddSupplierForm = true;
            }
        },
        isListOutOfOptions: function(remainingOptions,isRemoval){
            if(isRemoval){
                this.isOutOfOptions = false;
            }else{
                if(remainingOptions.length <= 1){
                    this.isOutOfOptions = true;
                }else{
                    this.isOutOfOptions = false;
                }
            }
        },
        getUnselectedSuppliers: function(){

            var suppliers = JSON.parse(JSON.stringify(this.suppliers));
            var selected = this.getSelectedSuppliers();
            var unselected = [];

            for(var i = 0; i<suppliers.length; i++){
                var s = suppliers[i];
                var isfound = false;
                for(var x = 0; x<selected.length; x++){
                    var se = selected[x];
                    
                    if(se.text === s.text){
                        isfound = true;
                    }

                    if(x === (selected.length - 1) && isfound === false){
                        s.tier = this.list.length + 1;
                        unselected.push(s);
                    }
                }
            }
            return unselected;
        },
        getSelectedSuppliers: function(){
            var selected = [];
            for(var i =0; i<this.list.length; i++){
                var suppliers = this.list[i].suppliers;
                suppliers.forEach(function(supplier){
                    if(supplier.selected){
                        selected.push(supplier);
                    }
                });
            }
            return selected;
        }
    },
    template: `
    <div  class="supplier-tiers table-cards-1024">
        <table class="table">
            <thead>
                <tr>
                    <th>Tier</th>
                    <th>Supplier</th>
                    <th>Duration</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr  v-for="item in list">
                    <td class="w-100-1024 d-flex-1024" style="width: 30px;">
                        <span class="d-none d-flex-1024 font-bold me-1">Tier: </span>
                        <span>{{item.tier}}</span>
                    </td>
                    <td>
                       <span class="d-none d-block-1024 font-bold mt-2 mb-1">Supplier: </span>
                        <select2 :options="item.suppliers" style="z-index:2">
                            <option disabled value="0">Select one</option>
                        </select2>
                    </td>
                    <td style="width: 150px;">
                        <span class="d-none d-block-1024 font-bold mt-2 mb-1">Duration: </span>
                        <div class="d-flex">
                            <select class="form-select">
                                <option 
                                v-for="option in item.duration" 
                                :selected="option.selected">{{option.text}}</option>
                            </select>   
                        </div>                                    
                    </td>
                    <td class="w-100-1024 text-right-1024" style="width: 30px;">
                        <button type="button" v-on:click="remove(item)" class="btn btn-icon">
                            <i class="fal fa-fw fa-trash-alt"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="d-flex align-items-center mt-3 wrap-reverse-370 flex-column-370 justify-content-center-370 justify-content-between-400">
            <button 
            :disabled="isOutOfOptions" 
            type="button" 
            v-on:click="add" 
            class="btn btn-sm btn-text">
                <i class="fal fa-plus mr-1" aria-hidden="true"></i> 
                <strong>Add Tier</strong>
            </button>
            <addsupplier></addsupplier>
        </div>


        <hr/>
        <div class="d-flex align-items-center justify-content-between pb-3 wrap-reverse-370">
            <div>
                <label class="p-0">Release to public after last tier duration completes?</label>
            </div>
            <div class="form-check form-switch mb-point5-370">
                <input :disabled="!hasTiers" class="form-check-input" type="checkbox">
            </div>
        </div>

    </div>
    `
  });