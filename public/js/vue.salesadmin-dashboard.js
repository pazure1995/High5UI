var salesAdminDashboard = new Vue({
    el: '#SalesAdminDashboard',
    data: {
        tabs: {
            approvals: true,
            tenants: false,
            employees: false,
            clients: true,
            suppliers: false
        },
        clients: {
            headers: ["Name","Location","Jobs","Candidates","Added On"],
            list: []
        },
        suppliers: {
            headers: ["Name","Point of Contact","Type","Added On","Scheduled Interviews"],
            list: []
        }
    },
    created: function(){
        this.seedClients();
        this.seedSuppliers();
    },
    methods: {
        seedClients: function(){
            var cnt = 6;
            var companies = [
                "Hammock Creative Inc.",
                "High5",
                "eTeam",
                "Google",
                "Apple",
                "Microsoft",
                "IBM",
                "Modus",
                "Bank of America",
                "Capital One"
            ];


            var locations = [
                "Jacksonvill Fl",
                "New York NY",
                "Denvoer CO",
                "Miami FL"
            ];


    
            for(var i=0; i<cnt; i++){


                this.clients.list.push({
                    id: new Date().getTime() * (i+1),
                    company: companies[Math.floor(Math.random() * 10) + 0],
                    location: locations[Math.floor(Math.random() * 4) + 0],
                    jobs: Math.floor(Math.random() * 100) + 10,
                    candidates: Math.floor(Math.random() * 300) + 10,
                    addedOn: "2 days ago"
                });

            }
        },
        seedSuppliers: function(){
            var cnt = 10;
            var companies = [
                "Jobaio",
                "TopTenTalent",
                "TeamSource",
                "WorkBright",
                "PeopleFinder",
                "MyNextHire",
                "PeopleFirst.co",
                "Talagenics",
                "TalentRite",
                "Modulus",
                "SwiftHire",
                "The People's Staffing Co",
                "HireRite",
                "QuickHire",
                "ProTek",
                "Source.it",
                "GroupSource",
                "PeopleWave",
                "Hirocity",
                "Staff Now"
            ];


            var locations = [
                "Jacksonvill FL",
                "New York NY",
                "Denvoer CO",
                "Miami FL"
            ];

            var names = [
                "Jason Mendouza",
                "Sarah Best",
                "Thelma Arora",
                "Jose Urbaez",
                "Jose Urbaez",
                "Kerry Forest",
                "Velda Dairy",
                "Rose Thomas",
                "Mike Macintosh",
                "Aaron Clark"
            ];


    
            for(var i=0; i<cnt; i++){
                var contactName = "John Doe";
                var type = "Corporation";
                if (i % 3 == 0){
                    type = "Independent";
                    contactName = names[i];
                }

                this.suppliers.list.push({
                    id: new Date().getTime() * (i+1),
                    company: companies[Math.floor(Math.random() * 20) + 0],
                    location: locations[Math.floor(Math.random() * 4) + 0],
                    contactName: contactName,
                    contactEmail: "person@company.com",
                    addedOn: "2 days ago",
                    hasScheduledInterviews: false,
                    hasCompletedInterviews: false, 
                    type: type,
                    submitting: false,
                    submitted: false,
                    avatarLg: "",
                    avatarsm: ""
                });

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
    }
});