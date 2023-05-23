var sortComponent = Vue.component('sort', {
    data() {
        return {
            showSort: false,
            sortHasSorts: false,
            sortHasCategories: true,
            sortList: [],
            sortOptions: [
                {
                    parent_id: -1, 
                    index: 0,
                    value: "jobtitle",
                    label: "<i class='fal fa-fw fa-briefcase mr-2 dd-sort'></i> Job Title",
                    is_active: false,
                },{
                    parent_id: -1, 
                    index: 1,
                    value: "jobtype",
                    label: "<i class='fal fa-fw fa-id-card-alt mr-2 dd-sort'></i> Job Type",
                    is_active: false
                },{
                    parent_id: -1,
                    index: 2, 
                    value: "location",
                    label: "<i class='fal fa-fw fa-map-marker-alt mr-2 dd-sort'></i> Location",
                    is_active: false
                },{
                    parent_id: -1, 
                    index: 3,
                    value: "startdate",
                    label: "<i class='fal fa-fw fa-calendar-alt mr-2 dd-sort'></i>Preferred Start Date",
                    is_active: false
                },{
                    parent_id: -1, 
                    index: 4,
                    value: "newcandidate",
                    label: "<i class='fal fa-fw fa-user-friends mr-2 dd-sort'></i>New Candidates",
                    is_active: false
                }
            ],
            lastSortToBeRemoved: {},
            lastSortCategoryToBeRemoved: {},
            styleObject: {
                right: "0px"
            }
        }
    },
    props: {
        categories: Array,
        right: String
    },
    watch: {
        sortList: function(val){
            if(val.length > 0){
                this.sortHasSorts = true;
            }else{
                this.sortHasSorts = false;
            }
        }
    },
    created: function () {
        this.registerGlobalClickEvents();
        if(!this.categories){
            this.categories = this.sortOptions;
        }
        this.styleObject.right = this.right;
    },
    destroyed: function(){},
    methods: {
        registerGlobalClickEvents: function(){
            var app = this;
            document.addEventListener("click", function(evnt){
                if(evnt.target.classList.contains('dd-sort') === false
                && app.showSort === true){
                    app.resetSortDropdownMenus();
                    app.showSort = false;                  
                }
            });
        },
        removeActiveSortStates: function(){
            for(var i=0; i<this.sortList.length; i++){
                var ops = this.sortList[i].options;
                for(var x=0; x<ops.length; x++){
                    ops[x].is_active=false;
                }
            }
        },
        setActiveSortState: function(sort){
            for(var i=0; i<sort.options.length; i++){
                if(sort.options[i].label === sort.label){
                    sort.options[i].is_active = true;
                }else{
                    sort.options[i].is_active = false;
                }
                if(i === (sort.options.length - 1)){
                    return sort;
                }
            }
        },
        addSort: function(){
            this.resetSortDropdownMenus();
            var sort = {};
            sort.id = new Date().getTime();
            sort.label = "";
            sort.text = "";
            sort.showCategoryDropdownMenu = false,
            sort.showDirectionDropdownMenu = false,
            sort.options = JSON.parse(JSON.stringify(this.categories));


            if(this.sortList.length === 0){
                sort.text = "By";
                sort.label = sort.options[0].label;
                this.setActiveSortState(sort);
                sort = mapParentIds(sort);
                this.sortList.push(sort);
            }else{
                sort.text = "And";

                var selectedLabels = [];
                for(var i =0; i<this.sortList.length; i++){
                    selectedLabels.push(this.sortList[i].label);
                }

                var masterOptionsList = JSON.parse(JSON.stringify(this.categories))
                var newOptions = [];
                masterOptionsList.forEach(function(op){
                    if(!selectedLabels.includes(op.label)){
                        newOptions.push(op);
                    }
                });

                sort.options = newOptions;

                sort.label = sort.options[0].label;
                this.setActiveSortState(sort);
                sort = mapParentIds(sort);
                this.sortList.push(sort);
                
                this.cleanUpPreviousSorts(this.sortList);
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
        cleanUpPreviousSorts: function(sortList,addLastRemoved,parentIdToExclude){
            var app = this;
            var selectedLabels = [];
            for(var i =0; i<sortList.length; i++){
                selectedLabels.push(sortList[i].label);
            }

            sortList.forEach(function(s){
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
                    var clonedLast = JSON.parse(JSON.stringify(app.lastSortCategoryToBeRemoved));
                    clonedLast.is_active = false;
                    clonedLast.parent_id = newOp[0].parent_id;
                    if(clonedLast.parent_id !== parentIdToExclude){
                        newOp.splice(clonedLast.index, 0, clonedLast);
                    }
                    
                }
        
                s.options = newOp;
            
            
            });
          
        },
        removeSort: function(el){
            var app = this;
            this.resetSortDropdownMenus();
            this.sortHasCategories = true;
            this.lastSortToBeRemoved = el;
            el.options.forEach(function(op){
                if(op.is_active){
                    app.lastSortCategoryToBeRemoved = op;
                }
            });
            this.sortList = this.sortList.filter(function( obj ) {
                return obj.id !== el.id;
            });
            this.cleanUpPreviousSorts(this.sortList,true);
        },
        removeAllSorts: function(){
            this.resetSortDropdownMenus();
            this.sortList = [];
        },
        showSortDirectionDropdownMenu: function(el){

            //loop through all the other dmenus and close things first
            for(var i =0; i<this.sortList.length; i++){
                if(this.sortList[i].id !== el.id){
                    this.sortList[i].showCategoryDropdownMenu = false;
                    this.sortList[i].showDirectionDropdownMenu = false;     
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
        showSortCategoryDropdownMenu: function(el){

            for(var i =0; i<this.sortList.length; i++){
                if(this.sortList[i].id !== el.id){
                    this.sortList[i].showCategoryDropdownMenu = false;
                    this.sortList[i].showDirectionDropdownMenu = false;     
                }
            }

            el.showDirectionDropdownMenu = false;
            if(el.showCategoryDropdownMenu){
                el.showCategoryDropdownMenu = false;
            }else{
                el.showCategoryDropdownMenu = true;
            }
        },
        resetSortDropdownMenus: function(){
            for(var i =0; i<this.sortList.length; i++){
                this.sortList[i].showCategoryDropdownMenu = false;
                this.sortList[i].showDirectionDropdownMenu = false;
            }
        },
        dropdownSortClicked: function(el){
            if(el.target.classList.contains('reset-on-click')){
                this.resetSortDropdownMenus();
            }
        },
        setSortSelectCategory: function(value){

            //need to know what the  last value was
            //get the parent list by id
            var app = this;
            var parent_id = value.parent_id;
            var label = value.label;

            app.sortList.forEach(function(foo){
                if(foo.id === parent_id){
                    //app.lastSortCategoryToBeRemoved = JSON.parse(JSON.stringify(foo));
                    foo.options.forEach(function(ops){
                        if(ops.is_active){
                            app.lastSortCategoryToBeRemoved = JSON.parse(JSON.stringify(ops));
                        }
                    });
                }
            });

            //setting the new label and the active state
            app.sortList.forEach(function(s){
                if(s.id === parent_id){
                    s.label = label;
                    app.setActiveSortState(s);
                    app.cleanUpPreviousSorts(app.sortList,true,parent_id);
                    app.resetSortDropdownMenus();
                }
            });
        },
        toggleSort: function(){
           if(this.showSort){
               this.resetSortDropdownMenus();
               this.showSort = false;
           }else{
               this.showSort = true;
           }
        }
    },
    template: `
        <div v-on:click="dropdownSortClicked" class="dropdown-sort dd-sort">
        <button 
        type="button" 
        v-on:click="toggleSort"
        v-bind:class="{ 'btn-gray': sortHasSorts }"
        class="btn btn-sm w-auto btn-text-accent dd-sort">
            <i aria-hidden="true" class="fad fa-sort-down font-16 dd-sort"></i>
            <span class="dd-sort d-none-1024">Sort</span> /
            <span class="dd-sort">{{sortList.length}}</span>
        </button>
        <div
        v-if="showSort"
        class="dropdown-sort-menu reset-on-click dd-sort" v-bind:style="styleObject">
            <div class="dd-sort-header d-flex justify-content-between align-items-center dd-sort reset-on-click">
                <div>
                    <button type="button" v-on:click="toggleSort" 
                    class="btn btn-sm btn-primary dd-sort mr-3 dd-hide dd-inline-1024">
                        <strong class="dd-sort">
                        <i class="fal fa-check fa-fw mr-1"></i>
                        Done
                        </strong>
                    </button>
                    <h6 class="mb-0 reset-on-click dd-sort dd-hide-1024">Sort</h6>
                </div>
                <div>
                    <button 
                    type="button" 
                    v-on:click="addSort" 
                    v-if="sortHasCategories"
                    class="btn btn-text dd-sort dd-hide dd-inline-1024">
                        <i class="fal fa-plus mr-2 dd-sort"></i>
                        <strong class="dd-sort">Add Sort</strong>
                    </button>
                    <span class="mx-1 font-muted dd-hide dd-inline-1024">|</span>
                    <button type="button" v-on:click="removeAllSorts" class="btn btn-text dd-sort"><strong class="dd-sort">Clear All</strong></button>
                </div>
            </div>
            <div class="dd-sort-body dd-sort">
                <p class="mb-0 py-3 reset-on-click dd-sort" v-if="sortList.length == 0">
                    Sort by Job Title, Type, Location, Preferred Start Date, and New Candidates
                </p>
                <div v-for="(sort,index) in sortList"
                class="d-flex align-items-center justify-content-end mt-3 dd-sort">
                    <div class="dropdown dropdown-select mr-2 dd-sort w-100">
                        <button v-on:click="showSortCategoryDropdownMenu(sort)" class="btn btn-secondary dropdown-toggle dd-sort w-100 d-flex align-items-center justify-content-between" type="button">
                            <span class="dd-sort" v-html="sort.label"></span>
                        </button>
                        <ul class="dropdown-menu dd-sort" v-if="sort.showCategoryDropdownMenu">
                            <li class="dd-sort" 
                            v-for="(option,index) in sort.options">
                                <button type="button"
                                class="dd-sort" 
                                v-bind:class="{ 'dd-active': option.is_active }"
                                v-on:click="setSortSelectCategory(option)" 
                                v-html="option.label"></button>
                            </li>
                        </ul>
                    </div>
                    <div class="dropdown dropdown-select dd-sort">
                        <button 
                        v-on:click="showSortDirectionDropdownMenu(sort)"
                        class="btn btn-secondary dropdown-toggle dd-sort" type="button" >
                            <i class="fal fa-sort-amount-down mr-2 dd-sort"></i> Asc<span class="dd-hide-1024 dd-sort">ending</span>
                        </button>
                        <ul class="dropdown-menu dd-sort" 
                        v-if="sort.showDirectionDropdownMenu">
                            <li class="dd-sort">
                                <button type="button" class="dd-sort">
                                    <i class="fal fa-fw fa-sort-amount-down mr-2 dd-sort"></i> 
                                    Asc<span class="dd-hide-1024 dd-sort">ending</span></button>
                            </li>
                            <li class="dd-sort"><button type="button" class="dd-sort"><i class="fal fa-fw fa-sort-amount-up mr-2 dd-sort"></i> Desc<span class="dd-hide-1024 dd-sort">ending</span></button></li>
                        </ul>
                    </div>
                    <button type="button" v-on:click="removeSort(sort)" class="btn btn-text ml-2 mr-1 dd-sort">
                        <strong class="dd-sort font-muted">
                            <i class="fas fa-times-circle dd-sort"></i>
                            </strong>
                        </button>
                </div>
            </div>
            <button 
            type="button" 
            v-on:click="addSort" 
            v-if="sortHasCategories"
            class="btn btn-text mt-4 dd-sort dd-hide-1024">
                <i class="fal fa-plus mr-2 dd-sort"></i>
                <strong class="dd-sort">Add Sort</strong>
            </button>
        </div>

    </div>
    
    `,
});