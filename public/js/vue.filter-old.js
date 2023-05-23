var filterComponent = Vue.component('filters', {
    data() {
        return {
            show: false,
            hasItems: false,
            hasCategories: true,
            list: [],
            options: [],
            styleObject: {
                right: "0px"
            }
        }
    },
    props: {
        categories: Array,
        right: String
    },
    created: function () {
        this.registerGlobalClickEvents();

        var categories = [
            {
                title: "Job Title",
                options: [{
                    label: "Web Designer",
                    selected: false
                },
                {
                    label: "UX Designer",
                    selected: false
                },
                {
                    label: "Interaction Designer",
                    selected: false
                }]
            }
        ]


        this.styleObject.right = this.right;
    },
    destroyed: function(){},
    methods: {
        registerGlobalClickEvents: function(){
            var app = this;
            document.addEventListener("click", function(evnt){
                if(evnt.target.classList.contains('dd-filter') === false
                && app.show === true){
                    app.resetDropdownMenus();
                    app.show = false;                  
                }
            });
        },
        removeActiveStates: function(){
            for(var i=0; i<this.list.length; i++){
                var ops = this.list[i].options;
                for(var x=0; x<ops.length; x++){
                    ops[x].is_active=false;
                }
            }
        },
        setActiveState: function(item){

            for(var i=0; i<item.options.length; i++){
                if(item.options[i].label === item.label){
                    item.options[i].is_active = true;
                }else{
                    item.options[i].is_active = false;
                }
                if(i === (item.options.length - 1)){
                    return item;
                }
            }
        },
        add: function(){
            this.resetDropdownMenus();
            var item = {};
            item.id = new Date().getTime();
            item.label = "";
            item.text = "";
            item.showCategoryDropdownMenu = false,
            item.showDirectionDropdownMenu = false,
            item.options = JSON.parse(JSON.stringify(this.categories));


            if(this.list.length === 0){
                item.text = "By";
                item.label = item.options[0].label;
                this.setActiveState(item);
                item = mapParentIds(item);
                this.list.push(item);
            }else{
                item.text = "And";

                var selectedLabels = [];
                for(var i =0; i<this.list.length; i++){
                    selectedLabels.push(this.list[i].label);
                }

                var masterOptionsList = JSON.parse(JSON.stringify(this.categories))
                var newOptions = [];
                masterOptionsList.forEach(function(op){
                    if(!selectedLabels.includes(op.label)){
                        newOptions.push(op);
                    }
                });

                item.options = newOptions;

                item.label = item.options[0].label;
                this.setActiveSortState(item);
                item = mapParentIds(sort);
                this.sortList.push(item);
                
                this.cleanUpPreviousSorts(this.list);
            }


            function mapParentIds(list){
                for(var i=0; i<list.options.length; i++){
                    list.options[i].parent_id = list.id;
                    if(i === (list.options.length - 1)){
                        return list;
                    }
                }
            }

        },
        cleanUpPreviousItems: function(list,addLastRemoved,parentIdToExclude){
            var app = this;
            var selectedLabels = [];
            for(var i =0; i<list.length; i++){
                selectedLabels.push(list[i].label);
            }

            list.forEach(function(s){
                var newOp = [];

                s.options.forEach(function(op){
                    if(op.is_active === false){
                        if(!selectedLabels.includes(op.label)){
                            newOp.push(op);
                        }
                    }else{
                        newOp.push(op);
                    }
                });

                if(addLastRemoved){
                    var clonedLast = JSON.parse(JSON.stringify(app.lastCategoryToBeRemoved));
                    clonedLast.is_active = false;
                    clonedLast.parent_id = newOp[0].parent_id;
                    if(clonedLast.parent_id !== parentIdToExclude){
                        newOp.splice(clonedLast.index, 0, clonedLast);
                    }
                    
                }
        
                s.options = newOp;
            
            
            });
          
        },
        remove: function(el){
            var app = this;
            this.resetDropdownMenus();
            this.hasCategories = true;
            this.lastItemToBeRemoved = el;
            el.options.forEach(function(op){
                if(op.is_active){
                    app.lastItemCategoryToBeRemoved = op;
                }
            });
            this.list = this.list.filter(function( obj ) {
                return obj.id !== el.id;
            });
            this.cleanUpPreviousItems(this.list,true);
        },
        removeAll: function(){
            this.resetDropdownMenus();
            this.list = [];
        },
        showDirectionDropdownMenu: function(el){

            //loop through all the other dmenus and close things first
            for(var i =0; i<this.list.length; i++){
                if(this.list[i].id !== el.id){
                    this.list[i].showCategoryDropdownMenu = false;
                    this.list[i].showDirectionDropdownMenu = false;     
                }
            }
            //then close the category menu
            el.showCategoryDropdownMenu = false;
            if(el.showDirectionDropdownMenu){
                el.showDirectionDropdownMenu = false;
            }else{
                el.showDirectionDropdownMenu = true;
            }
        },
        showCategoryDropdownMenu: function(el){

            for(var i =0; i<this.list.length; i++){
                if(this.list[i].id !== el.id){
                    this.list[i].showCategoryDropdownMenu = false;
                    this.list[i].showDirectionDropdownMenu = false;     
                }
            }

            el.showDirectionDropdownMenu = false;
            if(el.showCategoryDropdownMenu){
                el.showCategoryDropdownMenu = false;
            }else{
                el.showCategoryDropdownMenu = true;
            }
        },
        resetDropdownMenus: function(){
            for(var i =0; i<this.list.length; i++){
                this.list[i].showCategoryDropdownMenu = false;
                this.list[i].showDirectionDropdownMenu = false;
            }
        },
        showClicked: function(el){
            if(el.target.classList.contains('reset-on-click')){
                this.resetDropdownMenus();
            }
        },
        setItemSelectCategory: function(value){

            //need to know what the  last value was
            //get the parent list by id
            var app = this;
            var parent_id = value.parent_id;
            var label = value.label;

            app.list.forEach(function(foo){
                if(foo.id === parent_id){
                    foo.options.forEach(function(ops){
                        if(ops.is_active){
                            app.lastCategoryToBeRemoved = JSON.parse(JSON.stringify(ops));
                        }
                    });
                }
            });

            //setting the new label and the active state
            app.list.forEach(function(s){
                if(s.id === parent_id){
                    s.label = label;
                    app.setActiveItemState(s);
                    app.cleanUpPreviousItems(app.sortList,true,parent_id);
                    app.resetDropdownMenus();
                }
            });
        },
        toggle: function(){
           if(this.show){
               this.reset();
               this.show = false;
           }else{
               this.show = true;
           }
        }
    },
    template: `
        <div v-on:click="showClicked" class="dropdown-sort dd-filter">
        <button 
        type="button" 
        v-on:click="toggle"
        v-bind:class="{ 'btn-gray': hasItems }"
        class="btn btn-sm w-auto btn-text-accent dd-filter">
            <i aria-hidden="true" class="fas fa-filter font-14 dd-filter"></i>
            <span class="dd-filter d-none-1024">Filter</span> /
            <span class="dd-filter">{{list.length}}</span>
        </button>
        <div
        v-if="show"
        class="dropdown-sort-menu reset-on-click dd-filter" v-bind:style="styleObject">
            <div class="dd-filter-header d-flex justify-content-between align-items-center dd-filter reset-on-click">
                <div>
                    <button type="button" v-on:click="toggle" 
                    class="btn btn-sm btn-primary dd-filter mr-3 dd-hide dd-inline-1024">
                        <strong class="dd-filter">
                        <i class="fal fa-check fa-fw mr-1"></i>
                        Done
                        </strong>
                    </button>
                    <h6 class="mb-0 reset-on-click dd-filter dd-hide-1024">Filter</h6>
                </div>
                <div>
                    <button 
                    type="button" 
                    v-on:click="add" 
                    v-if="hasCategories"
                    class="btn btn-text dd-filter dd-hide dd-inline-1024">
                        <i class="fal fa-plus mr-2 dd-filter"></i>
                        <strong class="dd-filter">Add Filter</strong>
                    </button>
                    <span class="mx-3 font-muted dd-hide dd-inline-1024">|</span>
                    <button type="button" v-on:click="removeAll" class="btn btn-text dd-filter"><strong class="dd-filter">Clear All</strong></button>
                </div>
            </div>
            <div class="dd-filter-body dd-filter">
                <div v-for="(item,index) in list"
                class="d-flex align-items-center justify-content-end mt-3 dd-filter">
                    <div class="dropdown dropdown-select mr-2 dd-filter w-100">
                        <button v-on:click="showCategoryDropdownMenu(item)" class="btn btn-secondary dropdown-toggle dd-filter w-100 d-flex align-items-center justify-content-between" type="button">
                            <span class="dd-filter" v-html="sort.label"></span>
                        </button>
                        <ul class="dropdown-menu dd-filter" v-if="item.showCategoryDropdownMenu">
                            <li class="dd-filter" 
                            v-for="(option,index) in sort.options">
                                <button type="button"
                                class="dd-filter" 
                                v-bind:class="{ 'dd-active': option.is_active }"
                                v-on:click="setSelectCategory(option)" 
                                v-html="option.label"></button>
                            </li>
                        </ul>
                    </div>
                    <div class="dropdown dropdown-select dd-filter">
                        <button 
                        v-on:click="showDirectionDropdownMenu(item)"
                        class="btn btn-secondary dropdown-toggle dd-filter" type="button" >
                            <i class="fal fa-sort-amount-down mr-2 dd-filter"></i> Asc<span class="dd-hide-1024">ending</span>
                        </button>
                        <ul class="dropdown-menu dd-filter" 
                        v-if="item.DirectionDropdownMenu">
                            <li class="dd-filter">
                                <button type="button" class="dd-filter"><i class="fal fa-fw fa-sort-amount-down mr-2 dd-filter"></i> Asc<span class="dd-hide-1024">ending</span></button>
                            </li>
                            <li class="dd-filter"><button type="button" class="dd-filter"><i class="fal fa-fw fa-sort-amount-up mr-2 dd-filter"></i> Desc<span class="dd-hide-1024">ending</span></button></li>
                        </ul>
                    </div>
                    <button type="button" v-on:click="remove(item)" class="btn btn-text ml-2 mr-1 dd-filter">
                        <strong class="dd-filter font-muted">
                            <i class="fas fa-times-circle dd-filter"></i>
                            </strong>
                        </button>
                </div>
            </div>
            <button 
            type="button" 
            v-on:click="add" 
            v-if="hasCategories"
            class="btn btn-text mt-4 dd-filter dd-hide-1024">
                <i class="fal fa-plus mr-2 dd-filter"></i>
                <strong class="dd-filter">Add Filter</strong>
            </button>
        </div>

    </div>
    
    `,
});