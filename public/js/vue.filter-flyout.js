var filterFlyoutComponent = Vue.component('filter-flyout', {
    data() {
        return {
            filters: [],
            parent: {},
            cnt: 0
        }
    },
    created: function () {
        //document.querySelectorAll('.view-panel').forEach(e => e.remove());

        for(var i = 0; i<this.filters.length; i++){
            this.filters[i].id = i;
            if(this.filters[i].type === "list"){
                for(var x = 0; x<this.filters.options.length; x++){
                    this.filters.options[x].id = x;
                }
            }
        }

        this.show();
    },
    destroyed: function(){
        el = this.$el;
        el.parentNode.removeChild(el);
    },
    methods: {
        show: function(){
            var app = this;
            app.showFlyout = true;
        },
        close: function(){
            var app = this;
            app.parent.cnt = this.cnt;
            app.parent.list = this.filters;
            app.$destroy();
        },
        toggleCollapse: function(item){
            if(item.collapsed){
                item.collapsed = false;
            }else{
                item.collapsed = true;
            }
        },
        clearAll: function(){
            for(var i = 0; i<this.filters.length; i++){
                this.reset(this.filters[i]);
            }
        },
        reset: function(item){
            if(item.type === "boolean"){
                item.value = false;
                item.hasValues = false;
                console.log(item);
            }
            if(item.type === 'list'){
                item.hasValues = false;
                for(var i = 0; i<item.options.length; i++){
                    item.options[i].value = false;
                }
            }
            if(item.type === 'numberrange'){
                item.hasValues = false;
                item.value1 = "";
                item.value2 = "";

            }
            if(item.type === 'daterange'){
                item.hasValues = false;
                item.start = "";
                item.end = "";
                item.before = "";
                item.after = "";
                item.operator = "range";
            }
            if(item.type === 'number'){
                item.hasValues = false;
                item.value = "";
                item.operator = "-1";
            }

            this.valueChanged(item,true);
        },
        incrementCnt: function(){
            this.cnt = this.cnt + 1;
        },
        valueChanged: function(item,forceClear){
            this.cnt = 0;

            for(var i = 0; i<this.filters.length; i++){

                var filter = this.filters[i];

  
                if(filter.type === "boolean"){

                    if(filter.id !== item.id && filter.value === true){
                        this.incrementCnt();
                        filter.hasValues = true;
                    }else{
                        if(filter.id === item.id && forceClear !== true){
                            if(filter.value === false){
                                this.incrementCnt();
                                filter.hasValues = true;
                            }else{
                                filter.hasValues = false;
                            }
                        }
                    }

                }
                if(filter.type === "list"){

                    filter.hasValues = false;

                    for(var x = 0; x<filter.options.length; x++){

                        if(filter.options[x].id !== item.id
                        && filter.options[x].value === true){
                            this.incrementCnt();
                            filter.hasValues = true;
                        }else{
        
                            if(filter.options[x].id === item.id
                            && filter.options[x].value === false){

                                this.incrementCnt();
                                filter.hasValues = true;
                            }
                        }

                    }
                
                }
                if(filter.type === "numberrange"){
                    filter.hasValues = false;
                    if(filter.value1.length && filter.value2.length){
                        filter.hasValues = true;
                        this.incrementCnt();
                    }else{
                        filter.hasValues = false;
                    }
                }
                if(filter.type === "daterange"){
                    filter.hasValues = false;
                    if(filter.operator === 'after' && filter.after.length > 0){
                        this.incrementCnt();
                        filter.hasValues = true;              
                    }
                    if(filter.operator === 'before' && filter.before.length > 0){
                        this.incrementCnt();
                        filter.hasValues = true;                 
                    }
                    if(filter.operator === 'between' && filter.start.length > 0 && filter.end.length > 0){
                        this.incrementCnt();
                        filter.hasValues = true;                    
                    }
                }
                if(filter.type === "number"){
                    if(filter.value.length){
                        filter.hasValues = true;
                        this.incrementCnt();
                    }else{
                        filter.hasValues = false;
                    }
                }             
            }
        }
    },
    template: `
        <div class="view-panel" v-bind:class="{ show: showFlyout}">
            <div class="view-panel-header view-panel-header-sm">
                <div class="px-3 py-3">
                    <button 
                    type="button" 
                    v-on:click="close" 
                    class="btn btn-sm btn-primary">
                        <i class="fal fa-check fa-fw mr-1"></i> Done
                    </button>
                </div>
                <div class="d-flex flex-row align-items-center justify-content-between">
                    <div class="px-3">
                        <h6>Filter / {{cnt}}</h6>
                    </div>
                    <div class="px-3">
                        <button
                        v-on:click="clearAll()"
                        type="button" class="btn btn-text">
                            <span class="font-bold">Clear All</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="view-panel-body view-panel-body-sm">
                <div v-for="item in filters">
                    <div class="mb-2">
                        <button 
                        v-on:click="toggleCollapse(item)"
                        type="button" class="btn btn-collapsible">
                            <i  v-if="!item.collapsed"  class="fal fa-angle-down fa-fw"></i>
                            <i v-else class="fal fa-angle-up fa-fw"></i>
                            <span class="p-relative">
                                <small>{{item.title}}</small>
                                <span v-if="item.hasValues" class="jewel">
                                </span>
                            </span>
                        </button>
                    </div>
                    <div v-bind:class="{'d-none': item.collapsed}"  class="mb-4 ml-4 pl-1">
                        <div v-if="item.type === 'boolean'">
                            <div class="hoverable d-flex align-items-center justify-space-between">
                                <div 
                                v-bind:class="{ 'font-bold': item.value }"
                                class="w-75">
                                    <label :for="item.id" class="p-0">{{item.label}}</label>
                                </div>
                                <div class="w-25 d-flex justify-content-end">
                                    <div class="form-check form-switch">
                                        <input 
                                        v-model="item.value" 
                                        :checked="item.value" 
                                        v-on:click="valueChanged(item)"
                                        :id="item.id"
                                        class="form-check-input" type="checkbox">
                                    </div>                
                                </div>
                            </div>
                        </div>
                        <div v-if="item.type === 'list'">
                            <input type="text" class="form-control form-control-filter" placeholder="Type to filter list"/>
                            <div
                            v-for="option in item.options"
                            class="hoverable d-flex justify-space-between align-items-center">
                                <div 
                                v-bind:class="{ 'font-bold': option.value }"
                                class="w-75">
                                    <label :for="option.id" class="p-0">{{option.label}}</label>
                                </div>
                                <div class="w-25 d-flex justify-content-end">
                                    <div class="form-check form-switch">
                                        <input 
                                        v-model="option.value" 
                                        :checked="option.value"  
                                        v-on:click="valueChanged(option)"
                                        :id="option.id"
                                        class="form-check-input" type="checkbox">
                                    </div>                
                                </div>
                            </div>
                        </div>
                        <div v-if="item.type === 'daterange'">

                            <div class="d-flex">
                                <select 
                                v-on:change="valueChanged(item)"
                                v-model="item.operator" 
                                class="form-select w-50 mx-1">
                                    <option selected disabled value="range">Select Range</option>
                                    <option value="after">After</option>
                                    <option value="before">Before</option>
                                    <option value="between">Between</option>
                                </select>
                                
                                <input v-if="item.operator == 'between'" 
                                v-model="item.start" 
                                v-on:change="valueChanged(item)"
                                type="date" class="form-control date" placeholder="Begin">
                                
                                <input 
                                v-if="item.operator == 'between'" 
                                v-model="item.end" 
                                v-on:change="valueChanged(item)"
                                type="date" class="form-control date" placeholder="End">

                                <input 
                                v-if="item.operator == 'before'" 
                                v-model="item.before" 
                                v-on:change="valueChanged(item)"
                                type="date" class="form-control date" placeholder="Before">
                                
                                <input v-if="item.operator == 'after'"
                                 v-model="item.after"
                                 v-on:change="valueChanged(item)" 
                                 type="date" class="form-control date" placeholder="After">
                            </div>
                        </div>
                        <div v-if="item.type === 'number'">
                            <div class="d-flex">
                                <select 
                                v-on:change="valueChanged(item)"
                                v-model="item.operator" 
                                class="form-select w-50 mx-1">
                                    <option selected disabled value="-1">Condition</option>
                                    <option value="equals">Equals</option>
                                    <option value="lessthan">Less Than</option>
                                    <option value="greaterthan">Greater Than</option>
                                    <option value="lessthanequalto">Less than Or Equal To</option>
                                    <option value="greaterthanequalto">Greater than Or Equal To</option>
                                </select>
                                <input 
                                v-on:blur="valueChanged(item)"
                                v-on:keyup.enter="valueChanged(item)"
                                v-model="item.value"
                                type="number" 
                                class="form-control w-50 mx-1" 
                                placeholder="Value">
                            </div>
                        </div>
                        <div v-if="item.type === 'numberrange'">
                            <div class="d-flex d-block-600  align-items-center">
                                <div class="d-flex align-items-center w-100">
                                    <div class="form-floating w-50">
                                        <input 
                                            v-on:blur="valueChanged(item)"
                                            v-on:keyup.enter="valueChanged(item)"
                                            v-model="item.value1"
                                            type="number" 
                                            class="form-control mx-1" 
                                            placeholder="Minimum"/>
                                            <label>Minimum</label>
                                    </div>

                                    <div class="form-floating w-50">
                                        <input 
                                            v-on:blur="valueChanged(item)"
                                            v-on:keyup.enter="valueChanged(item)"
                                            v-model="item.value2"
                                            type="number" 
                                            class="form-control mx-1" 
                                            placeholder="Maximum"/>
                                            <label>Maximum</label>
                                    </div>
                                </div>
                                <div 
                                v-if="item.showCurrency"
                                class="d-flex ml-1 w-100">                  
                                    <div class="form-floating mr-1" v-bind:class="{'w-50':item.showRate,'w-100':!item.showRate}">
                                        <select class="form-select"  >
                                            <option selected>USD</option>
                                            <option value="1">EUR</option>
                                            <option value="2">ARS</option>
                                        </select>
                                        <label >Currency</label>
                                    </div>
                                    <div v-if="item.showRate" class="form-floating w-50">
                                        <select class="form-select"  >
                                            <option selected>/Hour</option>
                                            <option value="1">/Annual</option>
                                        </select>
                                        <label >Type</label>
                                    </div>   
                                </div>
                            </div>
                    
                        </div>
                        <div class="d-flex justify-content-end py-2 px-1">
                            <button
                            v-on:click="reset(item)"
                            type="button" class="btn btn-text">
                                <small>Clear {{item.title}}</small>
                            </button>
                        </div>
                        <hr class="m-0"/>
                    </div>
                </div>
            </div>
        </div>
    `,
});