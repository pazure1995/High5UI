let allJobViews = new Vue({
    el: '#AllJobViews', 
    data: {
        toggleView: {
            listview: true,
            gridview: false,
            tableview: false
        },
        statusView: {
            all: true,
            open: false,
            hot: false
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
        visibleTotal: 0,
        requests: [],
        dropdownBox:{
            filterBox: false
        }
    },
    mounted: function(){
        if(this.$el.attributes.statusstart.value){
            this.setStatusView(this.$el.attributes.statusstart.value);
        }
        if(this.$el.attributes.viewstart.value){
            this.onTabClick('toggleView',this.$el.attributes.viewstart.value);
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
                "hot"
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
                var autoMatchCnt = 0;
                var isExpiringSoon = false;
                var timeLeft = "Filled"
                if(status === "open"){
                    autoMatchCnt = Math.floor(Math.random() * 6) + 0;
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
                    autoMatchCnt: autoMatchCnt,
                    isExpiringSoon: isExpiringSoon,
                    candidates: shuffle(candidateAvatars),
                    status: status,
                    isVisible: true
                });

                if(i === (cnt - 1)){
                    var open = getSectionOfList(this.requests,"status","open");
                    var hot = getSectionOfList(this.requests,"status","hot");

                    this.requests = open.concat(hot);
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
                hot: false
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
            this.visibleTotal = 0;
            for(var i=0; i<this.requests.length; i++){
                if(this.requests[i].status !== status){
                    this.requests[i].isVisible = false;
                }else{
                    this.visibleTotal = this.visibleTotal + 1;
                }
            }        
        },
        setAllRequestsVisible: function(){
            this.visibleTotal = this.requests.length;
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