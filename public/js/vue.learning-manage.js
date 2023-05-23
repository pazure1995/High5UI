var manageLearningComponent = Vue.component('manage-learning', {
    data() {
        return {
            modules: [],
        }
    },
    created: function(){
        this.seedData();
    },
    methods: {
        seedData: function(){
            var cnt = 10;
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


            var difficulty = [
                "beginner",
                "intermediate",
                "advanced",
                "expert"
            ];

            var duration = [
                "30m",
                "1h",
                "2h",
                "10h"
            ];
    
            for(var i=0; i<cnt; i++){

                this.modules.push({
                    id: new Date().getTime() * (i+1),
                    title: titles[Math.floor(Math.random() * 17) + 0],
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    lastUpdated: "2 days ago",
                    difficulty: difficulty[Math.floor(Math.random() * 4) + 0],
                    duration: duration[Math.floor(Math.random() * 4) + 0],
                });

            }

        },
        assign: function(item){
            var ComponentClass = Vue.extend(modalLearningAssignComponent);
            var modal = new ComponentClass();
            modal.item = item;
            modal.parent = this;
            modal.title = "Assign Learning Modules";
            modal.$mount();  
            document.body.appendChild(modal.$el); 
        },
        show: function(item){
            var ComponentClass = Vue.extend(learningFlyoutComponent);
            var flyout = new ComponentClass();


            flyout.item = item;
            flyout.parent = this;
            flyout.isAssignment = true;


            this.interviewFlyout = flyout;

            flyout.$mount();  
            document.body.appendChild(flyout.$el);
        }
    },
    template: `
   <div class="px-3">
       <div>
           <div class="d-flex align-items-center justify-content-between mb-3">
               <h6 class="m-0">Learning</h6>
           </div>
           <div class="d-flex align-items-center justify-content-between flex-wrap">
               <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                   <select class="form-select mb-2">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="all">All</option>
                   </select>
               </div>
               <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12">
               <div class="mb-2">
                   <input type="text" id="searchCourses" aria-describedby="searchCourses" placeholder="Search Courses"  class="form-control small font-14"> 
               </div>
               </div>
           </div>
       </div>
        <div class="table-cards-1024">
            <table class="table table-hoverable">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in modules" :key="index" >
                    <td v-on:click="show(item)">
                        <h6 class="mb-1">{{item.title}}</h6>
                        <p class="mb-0">{{item.description}}</p>
                        <div class=" py-2 mt-2">

                        <span 
                        v-bind:class="{
                            'tag-blue3': item.difficulty === 'beginner',
                            'tag-orange1': item.difficulty === 'intermediate',
                            'tag-red1': item.difficulty === 'advanced',
                            'tag-coral': item.difficulty === 'expert'
                        }"
                        class="mr-2 tag font-bold">{{item.difficulty}}</span>

                            <span class="tag mb-1"><i aria-hidden="true" class="far fa-fw fa-stopwatch mr-1"></i> Duration: {{item.duration}}</span> 
                            <span class="tag mb-1"><i aria-hidden="true" class="fal fa-fw fa-clock mr-1"></i> Last Updated: {{item.lastUpdated}}</span>
                            <span class="tag mb-1"><i aria-hidden="true" class="fal fa-fw fa-user-plus mr-1"></i> Assigned: 2</span>
                            <span class="tag mb-1"><i aria-hidden="true" class="fal fa-fw fa-check-circle mr-1"></i> Completed: 2</span>
                        </div>

                    </td>
                    <td class="align-top no-hover">
                        <div class="d-flex align-items-center justify-content-end">
                            <button v-on:click="assign(item)" type="button" class="btn btn-sm">Assign</button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="col-xl-12 d-flex align-items-center mt-3 mb-2 flex-wrap-370 text-center-370">
                <div class="w-100-370 mb-point5-370">
                    Showing 4 of 24
                </div>
                <div class="ml-auto mx-auto-370 d-flex align-items-center">
                    <button type="button" disabled class="btn btn-icon px-2"><i class="fal fa-chevron-circle-left"></i></button>
                    <button type="button" disabled class="btn btn-text px-2">1</button>
                    <button type="button" class="btn btn-text px-2">2</button>
                    <button type="button" class="btn btn-text px-2">3</button>
                    <button type="button" class="btn btn-text px-2">4</button>
                    <button type="button" class="btn btn-text px-2">...</button>
                    <button type="button" class="btn btn-icon px-2"><i class="fal fa-chevron-circle-right"></i></button>
                </div>
            </div>
        </div>
   </div>
    `,
});
    