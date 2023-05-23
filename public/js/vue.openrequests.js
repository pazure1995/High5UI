let openRequestApp = new Vue({
        el: '#OpenRequests', 
        data: {
            toggleView: {
                listview: true,
                gridview: false,
                tableview: false
            },
            statusView: {
                all: true,
                open: false,
                active: false,
                closed: false
            },
            sortCategories: [
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
            filterCategories: [
                {
                    title: "Request Title",
                    type: "list",
                    collapsed: false,
                    hasValues: false,
                    placeholder: "Filter Title",
                    options: [{
                        label: "Agile Coach",
                        value: false
                    },
                    {
                        label: "Development Manager",
                        value: false
                    },
                    {
                        label: "Java Developer II",
                        value: false
                    }]
                },
                {
                    title: "Request Type",
                    type: "list",
                    collapsed: false,
                    hasValues: false,
                    placeholder: "Filter Type",
                    options: [{
                        label: "Full Time",
                        value: false
                    },
                    {
                        label: "Contract",
                        value: false
                    },
                    {
                        label: "SOW",
                        value: false
                    }]
                },
                {
                    title: "Last Updated",
                    type: "daterange",
                    start: "",
                    end: "",
                    before: "",
                    after: "",
                    operator: "range",
                    collapsed: false,
                    hasValues: false
                },
                {
                    title: "Days Left To Fill",
                    type: "number",
                    value: "",
                    operator: "-1",
                    collapsed: false,
                    hasValues: false
                }
            ],
            requests: [],
            dropdownBox:{
                filterBox: false
            }
        },
        created: function(){
            this.seedData();
        },
        computed: {
            totalRequests: function () {
                // `this` points to the vm instance
                return this.requests.length;
            }
        },
        watch: {
            sortList: function (val) {
              if(val.length > 0){
                  this.sortHasSorts = true;
              }else{
                  this.sortHasSorts = false;
              }
            }
        },
        methods: {
            seedData: function(){
                var cnt = Math.floor(Math.random() * 20) + 11;
                var jobTitles = [
                    "Java Developer II",
                    "Hadoop Architect",
                    "UX Designer",
                    "Development Manager",
                    "QA Analyst II",
                    "Sr. Java Developer",
                    "Principal Lead Designer",
                    "Junior React Developer",
                    "React Developer II",
                    "Full Stack Engineer",
                    "Junior Designer",
                    "Project Manager",
                    "Scrum Master",
                    "Agile Coach",
                    "VP of Product",
                    "Product Design Lead",
                    "Interaction Designer"
                ]
                var jobTypes = ["Full Time","Contract","SOW"];
    
                var avatarColor = [
                    "avatar-purple1",
                    "avatar-green2",
                    "avatar-pink1",
                    "avatar-green3",
                    "avatar-blue1",
                    "avatar-blue2",
                    "avatar-orange1",
                    "avatar-orange2"
                ]
                var avatarInitials = [
                    "AO",
                    "JM",
                    "CC",
                    "RS",
                    "PN",
                    "JY",
                    "RD",
                    "DD"                 
                ]
    
                var requestStatuses = [
                    "open",
                    "active",
                    "closed"
                ]
        
                for(var i=0; i<cnt; i++){
    
                    var candidateAvatars = [
                        {
                            avatar: "<img src='https://randomuser.me/api/portraits/men/"+(Math.floor(Math.random() * 49) + 32)+".jpg' class='avatar avatar-bordered  ml-neg-10'>"
                        },
                        {
                            avatar: "<img src='https://randomuser.me/api/portraits/women/"+(Math.floor(Math.random() * 49) + 32)+".jpg' class='avatar avatar-bordered  ml-neg-10'>"
                        },
                        {
                            avatar: "<span class='avatar "+avatarColor[Math.floor(Math.random() * 7) + 0]+" avatar-bordered  ml-neg-10'>"+avatarInitials[Math.floor(Math.random() * 7) + 0]+"</span>"
                        }                
                    ];

                    var status = requestStatuses[Math.floor(Math.random() * 3) + 0];
                    var newCandidateCnt = 0;
                    var isExpiringSoon = false;
                    var timeLeft = "Filled"
                    if(status === "open"){
                        newCandidateCnt = Math.floor(Math.random() * 6) + 0;
                        isExpiringSoon = (((Math.floor(Math.random() * 20) + 0) < 10) ? true : false);
                        if(isExpiringSoon){
                            timeLeft = "5 day left to fill";
                        }else{
                            timeLeft = Math.floor(Math.random() * 90) + 6+" days left to fill";
                        }
                        
                    }
    
                    this.requests.push({
                        jobTitle: jobTitles[Math.floor(Math.random() * 17) + 0],
                        jobType: jobTypes[Math.floor(Math.random() * 3) + 0],
                        location: "Jacksonville FL.",
                        timeRemaining: timeLeft,
                        newCandidateCnt: newCandidateCnt,
                        isExpiringSoon: isExpiringSoon,
                        candidates: shuffle(candidateAvatars),
                        status: status,
                        isVisible: true
                    });
    
                    if(i === (cnt - 1)){
                        var open = getSectionOfList(this.requests,"status","open");
                        var active = getSectionOfList(this.requests,"status","active");
                        var closed = getSectionOfList(this.requests,"status","closed");
    
                        this.requests = open.concat(active,closed);
                    }
    
                }
    
    
                function getSectionOfList(array,property,value){
                    var list = [];
                    for(var i=0; i<array.length; i++){
                        if(array[i][property] === value){
                            list.push(array[i]);
                        }
                        if(i === (array.length - 1)){
                            return list;
                        }
                    }
                }
    
                function shuffle(array) {
                    var currentIndex = array.length,  randomIndex;
                  
                    // While there remain elements to shuffle...
                    while (0 !== currentIndex) {
                  
                      // Pick a remaining element...
                      randomIndex = Math.floor(Math.random() * currentIndex);
                      currentIndex--;
                  
                      // And swap it with the current element.
                      [array[currentIndex], array[randomIndex]] = [
                        array[randomIndex], array[currentIndex]];
                    }
                  
                    return array;
                  }
            },
            getTotalByStatus: function(status){
                var total = 0;
                for(var i=0; i<this.requests.length; i++){
                    if(this.requests[i].status === status){
                        total = total+1;
                    }
                    if(i === (this.requests.length - 1)){
                        return total;
                    }
                }   
            },
            setStatusView: function(status){
                this.statusView ={
                    all: false,
                    open: false,
                    active: false,
                    closed: false
                };
                this.statusView[status] = true;
                if(status === "all"){
                    this.setAllRequestsVisible();
                }else{
                    this.hideAllRequestsExcept(status);
                }
            },
            hideAllRequestsExcept: function(status){
                this.setAllRequestsVisible();
                for(var i=0; i<this.requests.length; i++){
                    console.log(this.requests[i].status);
                    if(this.requests[i].status !== status){
                        this.requests[i].isVisible = false;
                    }
                }             
            },
            setAllRequestsVisible: function(){
                for(var i=0; i<this.requests.length; i++){
                    this.requests[i].isVisible = true;
                }
            },
            updateTab: function(category,type){
                if(category[type]){
                    category[type] = false;
                }else{
                    category[type] = true;
                }   
            },
            resetTabs: function(category){
                for (var key in category) {
                    category[key] = false
                }
            },
            // registerGlobalClickEvents: function(){
            //     var app = this;
            //     document.addEventListener("click", function(evnt){
            //         if(evnt.target.classList.contains('dd-sort') === false
            //         && app.showSort === true){
            //             app.resetSortDropdownMenus();
            //             app.showSort = false;                  
            //         }
            //     });
            // },
            // removeActiveSortStates: function(){
            //     for(var i=0; i<this.sortList.length; i++){
            //         var ops = this.sortList[i].options;
            //         for(var x=0; x<ops.length; x++){
            //             ops[x].is_active=false;
            //         }
            //     }
            // },
            // setActiveSortState: function(sort){

            //     for(var i=0; i<sort.options.length; i++){
            //         if(sort.options[i].label === sort.label){
            //             sort.options[i].is_active = true;
            //         }else{
            //             sort.options[i].is_active = false;
            //         }
            //         if(i === (sort.options.length - 1)){
            //             return sort;
            //         }
            //     }
            // },
            // addSort: function(){
            //     this.resetSortDropdownMenus();

            //     var sort = {};
            //     sort.id = new Date().getTime();
            //     sort.label = "";
            //     sort.text = "";
            //     sort.showCategoryDropdownMenu = false,
            //     sort.showDirectionDropdownMenu = false,
            //     sort.options = JSON.parse(JSON.stringify(this.sortOptions));

                




            //     if(this.sortList.length === 0){
            //         sort.text = "By";
            //         sort.label = sort.options[0].label;
            //         this.setActiveSortState(sort);
            //         sort = mapParentIds(sort);
            //         this.sortList.push(sort);
            //     }else{
            //         sort.text = "And";

            //         var selectedLabels = [];
            //         for(var i =0; i<this.sortList.length; i++){
            //             selectedLabels.push(this.sortList[i].label);
            //         }

            //         var masterOptionsList = JSON.parse(JSON.stringify(this.sortOptions))
            //         var newOptions = [];
            //         masterOptionsList.forEach(function(op){
            //             if(!selectedLabels.includes(op.label)){
            //                 newOptions.push(op);
            //             }
            //         });

            //         sort.options = newOptions;

            //         sort.label = sort.options[0].label;
            //         this.setActiveSortState(sort);
            //         sort = mapParentIds(sort);
            //         this.sortList.push(sort);
                    
            //         this.cleanUpPreviousSorts(this.sortList);
            //     }


            //     function mapParentIds(list){
            //         for(var i=0; i<list.options.length; i++){
            //             list.options[i].parent_id = list.id;
            //             if(i === (list.options.length - 1)){
            //                 return list;
            //             }
            //         }
            //     }

            // },
            // cleanUpPreviousSorts: function(sortList,addLastRemoved,parentIdToExclude){
            //     var app = this;
            //     var selectedLabels = [];
            //     for(var i =0; i<sortList.length; i++){
            //         selectedLabels.push(sortList[i].label);
            //     }

            //     sortList.forEach(function(s){
            //         var newOp = [];
    
            //         s.options.forEach(function(op){
            //             if(op.is_active === false){
            //                 if(!selectedLabels.includes(op.label)){
            //                     newOp.push(op);
            //                 }
            //             }else{
            //                 newOp.push(op);
            //             }
            //         });

            //         if(addLastRemoved){
            //             var clonedLast = JSON.parse(JSON.stringify(app.lastSortCategoryToBeRemoved));
            //             clonedLast.is_active = false;
            //             clonedLast.parent_id = newOp[0].parent_id;
            //             if(clonedLast.parent_id !== parentIdToExclude){
            //                 newOp.splice(clonedLast.index, 0, clonedLast);
            //             }
                        
            //         }
            
            //         s.options = newOp;
                
                
            //     });
              
            // },
            // removeSort: function(el){
            //     var app = this;
            //     this.resetSortDropdownMenus();
            //     this.sortHasCategories = true;
            //     this.lastSortToBeRemoved = el;
            //     el.options.forEach(function(op){
            //         if(op.is_active){
            //             app.lastSortCategoryToBeRemoved = op;
            //         }
            //     });
            //     this.sortList = this.sortList.filter(function( obj ) {
            //         return obj.id !== el.id;
            //     });
            //     this.cleanUpPreviousSorts(this.sortList,true);
            // },
            // removeAllSorts: function(){
            //     this.resetSortDropdownMenus();
            //     this.sortList = [];
            // },
            // showSortDirectionDropdownMenu: function(el){

            //     //loop through all the other dmenus and close things first
            //     for(var i =0; i<this.sortList.length; i++){
            //         if(this.sortList[i].id !== el.id){
            //             this.sortList[i].showCategoryDropdownMenu = false;
            //             this.sortList[i].showDirectionDropdownMenu = false;     
            //         }
            //     }
            //     //then close the category menu
            //     el.showCategoryDropdownMenu = false;
            //     if(el.showDirectionDropdownMenu){
            //         el.showDirectionDropdownMenu = false;
            //     }else{
            //         el.showDirectionDropdownMenu = true;
            //     }
            // },
            // showSortCategoryDropdownMenu: function(el){

            //     for(var i =0; i<this.sortList.length; i++){
            //         if(this.sortList[i].id !== el.id){
            //             this.sortList[i].showCategoryDropdownMenu = false;
            //             this.sortList[i].showDirectionDropdownMenu = false;     
            //         }
            //     }

            //     el.showDirectionDropdownMenu = false;
            //     if(el.showCategoryDropdownMenu){
            //         el.showCategoryDropdownMenu = false;
            //     }else{
            //         el.showCategoryDropdownMenu = true;
            //     }
            // },
            // resetSortDropdownMenus: function(){
            //     for(var i =0; i<this.sortList.length; i++){
            //         this.sortList[i].showCategoryDropdownMenu = false;
            //         this.sortList[i].showDirectionDropdownMenu = false;
            //     }
            // },
            // dropdownSortClicked: function(el){
            //     if(el.target.classList.contains('reset-on-click')){
            //         this.resetSortDropdownMenus();
            //     }
            // },
            // setSortSelectCategory: function(value){

            //     //need to know what the  last value was
            //     //get the parent list by id
            //     var app = this;
            //     var parent_id = value.parent_id;
            //     var label = value.label;

            //     app.sortList.forEach(function(foo){
            //         if(foo.id === parent_id){
            //             //app.lastSortCategoryToBeRemoved = JSON.parse(JSON.stringify(foo));
            //             foo.options.forEach(function(ops){
            //                 if(ops.is_active){
            //                     app.lastSortCategoryToBeRemoved = JSON.parse(JSON.stringify(ops));
            //                 }
            //             });
            //         }
            //     });

            //     //setting the new label and the active state
            //     app.sortList.forEach(function(s){
            //         if(s.id === parent_id){
            //             s.label = label;
            //             app.setActiveSortState(s);
            //             app.cleanUpPreviousSorts(app.sortList,true,parent_id);
            //             app.resetSortDropdownMenus();
            //         }
            //     });
            // },
            // toggleSort: function(){
            //    if(this.showSort){
            //        this.resetSortDropdownMenus();
            //        this.showSort = false;
            //    }else{
            //        this.showSort = true;
            //    }
            // },
            onTabClick: function (category,val){
                var btngroup = document.getElementsByClassName("btn-group");
                var dropmenu = document.getElementsByClassName("dropdown-menu");

                if(btngroup){
                    for(var i =0; i<btngroup.length; i++){
                        btngroup[i].classList.remove("show");
                    }
                }
                if(dropmenu){
                    for(var i =0; i<dropmenu.length; i++){
                        dropmenu[i].classList.remove("show");
                    }
                }

                this.resetTabs(this[category]);
                this.updateTab(this[category],val);
            },
        }
    });