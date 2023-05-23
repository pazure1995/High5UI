let CandidateAssessmentApp = new Vue({
    el: '#CandidateAssessments', 
    data: {
        list: []
    },
    created: function(){
        this.seed();
    },
    methods: {
        seed: function(){
            this.list.push({
                title: "Node.js Beginners",
                type: "Learning Module",
                totalLength: "120",
                completed: "60%",
            },{
                title: "Front End Technologies",
                type: "MCQ Assessment",
                totalLength: "120",
                completed: "30%",
            });  
        },
        showItem: function(item){

        }
    }
});
