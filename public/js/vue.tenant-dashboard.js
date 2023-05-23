var tenantDashboard = new Vue({
    el: '#TenantDashboard',
    data: {
        tabs: {
            settings: true,
            employees: false,
            suppliers: false,
            learning: false
        }
    },
    methods: {
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