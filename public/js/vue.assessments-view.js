let AssessmentsApp = new Vue({
    el: '#AssessmentsApp', 
    data: {
        modules: [],
        toggleView: {
            listview: true,
            gridview: false,
            tableview: false
        },
        statusView: {
            all: true,
            inprogress: false,
            completed: false,
            notstarted: false
        },
        sortCategories: [
            {
                parent_id: -1, 
                index: 0,
                value: "title",
                label: "<i class='fal fa-fw fa-signature mr-2 dd-sort'></i> Title",
                is_active: false,
            },{
                parent_id: -1, 
                index: 1,
                value: "type",
                label: "<i class='fal fa-fw fa-layer-group mr-2 dd-sort'></i> Type",
                is_active: false
            },{
                parent_id: -1, 
                index: 1,
                value: "duration",
                label: "<i class='fal fa-fw fa-stopwatch mr-2 dd-sort'></i> Duration",
                is_active: false
            }
        ],
        filterCategories: [
            {
                title: "Type",
                type: "list",
                collapsed: false,
                hasValues: false,
                options: [{
                    label: "1 Way Video",
                    value: false
                },
                {
                    label: "MCQ",
                    value: false
                }]
            },
            {
                title: "Duration",
                type: "list",
                collapsed: false,
                hasValues: false,
                options: [{
                    label: "30m",
                    value: false
                },
                {
                    label: "1hr",
                    value: false
                },
                {
                    label: "2hr",
                    value: false
                },
                {
                    label: "10hr",
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
            }
        ],
        visibleTota: 0
    },
    created: function(){
        this.seedData();
    },
    computed: {
        totalItems: function () {
            return this.modules.length;
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
        initTooltips: function(){
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                var placement = tooltipTriggerEl.dataset.bsPlacement;
                return new bootstrap.Tooltip(tooltipTriggerEl,{placement: placement});
            });
        },
        seedData: function(){
            var cnt = Math.floor(Math.random() * 100) + 11;
            var titles = [
                "Java Techniques",
                "Hadoop",
                "User Centered Design",
                "Agile Development",
                "Webpack and Modules",
                "OOP Principals",
                "Design Principals",
                "React Development",
                "React Developer II",
                "Full Stack Engineer Tools",
                "Designer Thinking",
                "Project Manager Tools",
                "Scrum Master 101",
                "Agile Coach 101",
                "Product Strategies",
                "Vue 101",
                "HTML 101"
            ];

            var statuses = [
                "completed",
                "notstarted"
            ];

            var difficulty = [
                "1 Way Video",
                "2 Way Video",
                "MCQ"
            ];

            var duration = [
                "30m",
                "1h",
                "2h",
                "10h"
            ];
    
            for(var i=0; i<cnt; i++){



                var status = statuses[Math.floor(Math.random() * 2) + 0];
 

                this.modules.push({
                    id: new Date().getTime() * (i+1),
                    title: titles[Math.floor(Math.random() * 17) + 0],
                    status: status,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    isVisible: true,
                    lastUpdated: "2 days ago",
                    difficulty: difficulty[Math.floor(Math.random() * 3) + 0],
                    duration: duration[Math.floor(Math.random() * 4) + 0],
                });

                if(i === (cnt - 1)){
                    var inprogress = getSectionOfList(this.modules,"status","inprogress");
                    var completed = getSectionOfList(this.modules,"status","completed");
                    var notstarted = getSectionOfList(this.modules,"status","notstarted");
                    this.modules = inprogress.concat(completed).concat(notstarted);
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
        },
        getTotalByStatus: function(status){
            var total = 0;
            for(var i=0; i<this.modules.length; i++){
                if(this.modules[i].status === status){
                    total = total+1;
                }
                if(i === (this.modules.length - 1)){
                    return total;
                }
            }   
        },
        resetStatusView: function(){
            for (const property in this.statusView) {
                this.statusView[property] = false;
            }
        },
        setStatusView: function(status){
            this.resetStatusView();
            this.statusView[status] = true;
            if(status === "all"){
                this.setAllRequestsVisible();
            }else{
                this.hideAllRequestsExcept(status);
            }
        },
        hideAllRequestsExcept: function(status){
            this.setAllRequestsVisible();
            this.visibleTotal = 0;
            for(var i=0; i<this.modules.length; i++){
                if(this.modules[i].status !== status){
                    this.modules[i].isVisible = false;
                }else{
                    this.visibleTotal = this.visibleTotal + 1;
                }
            }        
        },
        setAllRequestsVisible: function(){
            this.visibleTotal = this.modules.length;
            for(var i=0; i<this.modules.length; i++){
                this.modules[i].isVisible = true;
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
        onTabClick: function (category,val){
            this.resetTabs(this[category]);
            this.updateTab(this[category],val);
        },
        onItemClick: function(item){
            var ComponentClass = Vue.extend(learningFlyoutComponent);
            var flyout = new ComponentClass();


            flyout.item = item;
            flyout.parent = this;
            flyout.isAssessment = true;

            this.interviewFlyout = flyout;

            flyout.$mount();  
            document.body.appendChild(flyout.$el);
        },
        showAssessmentModal: function(){
            var ComponentClass = Vue.extend(modalSelfAssessment);
            var modal = new ComponentClass();

            modal.title="Self Assessment";
            modal.isMedium = true;
    
            modal.$mount();  
            document.body.appendChild(modal.$el); 
        }
    }
});