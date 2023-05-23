const sitesearchfield = new Vue({
    el: '#SiteSearchField',
    data: {
        searchTerm: ""
    },
    created: function(){
        this.registerGlobalClickEvents();
    },
    watch: {
        searchTerm: function(val){
            if(val.length){
                sitesearchresults.showSearchResults = true;
            }else{
                sitesearchresults.showSearchResults = false;
            }
        }
    },
    methods: {
        showHistory: function(){
            sitesearchresults.show = true;
        },
        registerGlobalClickEvents: function(){
            var app = this;
            document.addEventListener("click", function(evnt){
                if(evnt.target.classList.contains('sitesearch') === false
                && sitesearchresults.show === true){
                    sitesearchresults.show = false;                
                }
            });
        },
    }
});

const sitesearchresults = new Vue({
    el: '#SearchResults',
    data: {
        show: false,
        showSearchResults: false
    }
});