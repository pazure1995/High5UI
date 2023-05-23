var widgetsDashboard = new Vue({
    el: '#WidgetsDashboard',
    data: {
        tabs: {
            approvals: true,
            tenants: false,
            users: false,
            settings: false,
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