let CandidateJobs = new Vue({
    el: '#CandidateJobs', 
    data: {
        toggleView: {
            listview: true,
            gridview: false,
            tableview: false
        },
        statusView: {
            matched: true,
            favorited: false,
            hot: false,
            rtr: false,
            applied: false
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
                title: "Is New?",
                label: "Show Only New Jobs",
                type: "boolean",
                value: false,
                collapsed: false,
                hasValues: false
            },
            {
                title: "Job Title",
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
                title: "Job Type",
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
                title: "Posted Date",
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
                title: "Contract Rate Range",
                type: "numberrange",
                value1: "",
                value2: "",
                operator: "-1",
                collapsed: false,
                hasValues: false,
                showCurrency: true,
                showRate: true
            },
            {
                title: "Salary Range",
                type: "numberrange",
                value1: "",
                value2: "",
                operator: "-1",
                collapsed: false,
                hasValues: false,
                showCurrency: true
            },
            {
                title: "SOW Rate Range",
                type: "numberrange",
                value1: "",
                value2: "",
                operator: "-1",
                collapsed: false,
                hasValues: false,
                showCurrency: true
            },
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
        console.log(this.statusView);
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
        initTooltips: function(){
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                var placement = tooltipTriggerEl.dataset.bsPlacement;
                return new bootstrap.Tooltip(tooltipTriggerEl,{placement: placement});
            });
        },
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
                "matched",
                "favorited",
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
                if(status === "matched" || status === "hot"){
                    autoMatchCnt = Math.round(Math.random());
                }
                var isExpiringSoon = false;
                var timeLeft = "2 days ago";
                var jobType = jobTypes[Math.floor(Math.random() * 3) + 0];

                var priceRange = "$80K - $100K";
                if(jobType === "Contract"){
                    priceRange = "$25-$45/hr";
                }
                if(jobType === "SOW"){
                    priceRange = "$15k - 25k";
                }

                var statusMsg = "";
                if(status === 'favorited'){
                    statusMsg = "Job Favorited on 8/1/2021 @12:30pm";
                }

                this.requests.push({
                    id: new Date().getTime() * (i+1),
                    jobTitle: jobTitles[Math.floor(Math.random() * 17) + 0],
                    jobType: jobType,
                    location: "Jacksonville FL.",
                    timeRemaining: timeLeft,
                    autoMatchCnt: autoMatchCnt,
                    isExpiringSoon: isExpiringSoon,
                    candidates: shuffle(candidateAvatars),
                    status: status,
                    isVisible: true,
                    priceRange: priceRange,
                    statusMsg: statusMsg,
                    showStatusProgress: false,
                    rejecting: false,
                    rejected: false,
                    approving: false,
                    approved: false,
                    rep: ""
                });

                if(i === (cnt - 1)){
                    var matched = getSectionOfList(this.requests,"status","matched");
                    var favorited = getSectionOfList(this.requests,"status","favorited");
                    var hot = getSectionOfList(this.requests,"status","hot");
                    var rtr = getSectionOfList(this.requests,"status","rtr");

                    this.requests = matched.concat(favorited).concat(hot);

                    this.requests.sort((a, b) => (a.autoMatchCnt === 0) ? 1 : -1)
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
                matched: false,
                favorited: false,
                hot: false,
                rtr: false,
                applied: false
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
        showJob: function(item){
            var ComponentClass = Vue.extend(candidateJobFlyoutComponent);
            var flyout = new ComponentClass();

            flyout.title = item.jobTitle;
            flyout.item = item;
            flyout.parent = this;

            this.interviewFlyout = flyout;

            flyout.$mount();  
            document.body.appendChild(flyout.$el);
            //this.initTooltips();
        },
        favorite: function(item){
            var foundItem = {};
            for(var i = 0; i<this.requests.length; i++){
                if(this.requests[i].id === item.id){
                    foundItem = this.requests[i];
                    foundItem.status = "favorited";
                    foundItem.statusMsg = "Job Favorited on 8/1/2021 @12:30pm";
                    foundItem.isVisible = false;
                    foundItem.timeRemaining = "Today @3:00pm"
                }
            }
        },
        discard: function(item){
            var filtered = this.requests.filter(function(value, index, arr){ 
                return value.id !== item.id;
            });
            this.requests = filtered;   
        },
        apply: function(item){
            var ComponentClass = Vue.extend(modalCandidateApply);
            var modal = new ComponentClass();

            modal.title="Apply";
            modal.isMedium = true;
            modal.body = `
                <div class='text-center'>
                    <h6>`+item.jobTitle+`</h6>
                    <p>`+item.jobType+` / `+item.location+` / `+item.priceRange+`</p>
                </div>
            `;
            modal.parent = this;
            modal.parentItem = item;
    
            modal.$mount();  
            document.body.appendChild(modal.$el); 
        },
        updateApplied: function(item){
            for(var i = 0; i<this.requests.length; i++){
                if(this.requests[i].id === item.id){
                    this.requests[i].status = "applied";
                    this.requests[i].statusMsg = "Applied on 8/1/2021 @12:30pm";
                }
            }
        }
    }
});