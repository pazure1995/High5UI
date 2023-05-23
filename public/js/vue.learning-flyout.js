var learningFlyoutComponent = Vue.component('profile-flyout', {
    data() {
        return {
            showFlyout: false,
            request: {},
            candidate: {},
            item: {},
            parent: {},
            isAssessment: false,
            tabs: {
                assigned: true,
                completed: false
            },
            assigned: [
                {
                    name: "Chris Smith",
                    progress: "20%"
                },
                {
                    name: "Sarah Dosier",
                    progress: "80%"
                }
            ],
            completed: [
                {
                    name: "Reginald Fitzpatrick",
                },
                {
                    name: "Jane Seymour",

                }
            ]
        }
    },
    watch: {
        item: function(val){
            console.log("item changed");
            console.log(val);
        } 
    },
    created: function () {
        document.querySelectorAll('.view-panel').forEach(e => e.remove());
        this.show();
    },
    destroyed: function(){
        el = this.$el;
        el.parentNode.removeChild(el);
    },
    methods: {
        show: function(){
            this.showFlyout = true;
        },
        close: function(){
            this.showFlyout = false;
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
        assign: function(){
            var ComponentClass = Vue.extend(modalLearningAssignComponent);
            var modal = new ComponentClass();
            modal.item = this.item;
            modal.parent = this;
            modal.updateList = this.assigned;
            modal.title = "Assign Learning Modules";
            modal.$mount();  
            document.body.appendChild(modal.$el); 
        },
    },
    template: `
    <div class="view-panel" v-bind:class="{ show: showFlyout}">
        <div class="view-panel-header">
            <div class="p-relative">
                <div class="px-3 py-2 d-flex">
                    <button
                    v-on:click="close"
                    type="button" class="btn btn-icon">
                        <i class="fal fa-times" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            <div class="px-2 mb-3">
                <div class="d-flex align-items-start justify-content-between flex-wrap-reverse">
                    <div class="d-flex ">    
                        <div class="ml-2">
                        <span 
                            v-if="!isAssessment"
                            v-bind:class="{
                                'tag-blue3': item.difficulty === 'beginner',
                                'tag-orange1': item.difficulty === 'intermediate',
                                'tag-red1': item.difficulty === 'advanced',
                                'tag-coral': item.difficulty === 'expert'
                            }"
                            class="mr-2 tag font-bold">{{item.difficulty}}
                        </span>
                        <span v-else                             
                        v-bind:class="{
                                'tag-blue1': item.difficulty === '1 Way Video',
                                'tag-orange1': item.difficulty === '2 Way Video',
                                'tag-red1': item.difficulty === 'MCQ'
                            }"
                            class="mr-2 tag font-bold">{{item.difficulty}}
                        </span>
                            <h5 class="mr-2 mt-2 mb-1">{{item.title}}</h5>
                            <div class="mb-2">
                                <span class="mr-2">Duration: {{item.duration}} / Last Updated: {{item.lastUpdated}}</span>
                            </div>
                        </div>                    
                    </div>
                    <div v-if="isAssignment">
                        <button v-on:click="assign" type="button"  class="btn btn-sm mb-2 ml-2 m-sm-0">
                            Assign
                        </button>
                    </div>
                    <div v-else>
                        <a v-if="item.status !== 'completed' && isAssessment === false" class="btn btn-sm btn-primary" href="/candidate/learning/12321">
                            <span v-if="item.status === 'inprogress'">Resume</span>
                            <span v-if="item.status !== 'inprogress' && item.status !== 'completed'">Start</span>
                        </a>
                        <a v-if="isAssessment === true && item.status !== 'completed'" class="btn btn-sm btn-primary" href="/candidate/assessments/12321">
                            <span v-if="item.status === 'inprogress'">Resume</span>
                            <span v-if="item.status !== 'inprogress' && item.status !== 'completed'">Start</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="view-panel-body">
            <div v-if="!isAssignment" class="mt-2">
                <p class="mb-1"><strong>Progress</strong></p>
                <div v-if="item.status === 'inprogress'">
                    <small>20% Complete</small>
                    <div class="alert-progress alert-progress-static bg-gray3">
                        <div style="width: 20%;" class="alert-progress-bar"></div>
                    </div>
                </div>
                <div v-if="item.status === 'completed'">
                    <small>100% Complete</small>
                    <div class="alert-progress alert-progress-static bg-green1">

                    </div>
                </div>
                <div v-if="item.status !== 'completed' && item.status !== 'inprogress'">
                    <small>Not Started</small>
                    <div class="alert-progress alert-progress-static bg-gray3">
                        <div style="width: 0%;" class="alert-progress-bar bg-green1"></div>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <p><strong>Description</strong></p>
                <p>{{item.description}}</p>
            </div>
            <div class="mt-2" v-if="isAssignment">
                <ul class="nav nav-tabs mt-3">
                    <li class="nav-item">
                        <button 
                        v-bind:class="{active: tabs.assigned}"
                        v-on:click="onTabClick('tabs','assigned')"                           
                        type="button" class="nav-link pb-3">
                        Assigned
                        </button>
                    </li>
                    <li class="nav-item">
                        <button 
                        v-bind:class="{active: tabs.completed}"
                        v-on:click="onTabClick('tabs','completed')"                           
                        type="button" class="nav-link pb-3">
                        Completed
                        </button>
                    </li>
                </ul>
                <hr class="m-0"/>
                <div class="mt-2" v-if="tabs.assigned">
                    <a href="/tenant/talent/123123221" class="card card-flat mb-1" 
                    v-for="item in assigned">
                        <div class="card-body">
                            <h6>{{item.name}}</h6>
                            <div>
                                <small>{{item.progress}} Complete</small>
                                <div class="alert-progress alert-progress-static bg-gray3">
                                    <div class="alert-progress-bar" style="width: 0;" v-bind:style="{ width: item.progress }"></div>
                                </div>
                            </div>
                        </div>
                    </a>

                </div>
                <div v-if="tabs.completed">
                    <a href="/tenant/talent/123123221" class="card card-flat mb-1" 
                    v-for="item in completed">
                        <div class="card-body">
                            <h6>{{item.name}}</h6>
                            <div>
                                <small>100% Complete</small>
                                <div class="alert-progress alert-progress-static bg-green1">
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    </div>
`
});