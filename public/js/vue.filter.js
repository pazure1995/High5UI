var filterComponent = Vue.component('filters', {
    data() {
        return {
            hasItems: false,
            list: [],
            cnt: 0
        }
    },
    props: {
        categories: Array
    },
    watch: {
        cnt: function(val){
            if(val > 0){
                this.hasItems = true;
            }else{
                this.hasItems = false;
            }
        }
    },
    created: function () {

        this.list = this.categories;

        for(var i = 0; i<this.list.length; i++){
            this.list[i].id = "id_"+new Date().getTime() * Math.floor(Math.random() * 2000) + 1;
            if(this.list[i].type === "list"){
                for(var x = 0; x<this.list[i].options.length; x++){
                    this.list[i].options[x].id = "id_"+new Date().getTime() * Math.floor(Math.random() * 2000) + 1 * (x+1);
                }
            }
        }

    },
    methods: {
        clearAll: function(){

        },
        toggle: function(){
            var ComponentClass = Vue.extend(filterFlyoutComponent);
            var flyout = new ComponentClass();
            flyout.filters = this.list;
            flyout.parent = this;
            flyout.cnt = this.cnt;
    
            flyout.$mount();  
            document.body.appendChild(flyout.$el);  
        }
    },
    template: `
        <div class="dropdown-sort dd-filter">
            <button 
            type="button" 
            v-on:click="toggle"
            v-bind:class="{ 'btn-gray': hasItems }"
            class="btn btn-sm w-auto btn-text-accent dd-filter">
                <i aria-hidden="true" class="fas fa-filter font-14 dd-filter"></i>
                <span class="dd-filter d-none-1024">Filter</span> /
                <span class="dd-filter">{{cnt}}</span>
            </button>
        </div>
    `,
});