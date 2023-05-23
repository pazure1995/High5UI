let CandidateInterviewApp = new Vue({
    el: '#CandidateInterviews', 
    data: {
        list: []
    },
    created: function(){
        this.seed();
    },
    methods: {
        seed: function(){
            this.list.push({
                title: "Interaction Designer",
                type: "2 Way Video",
                interviewer: "Chuck Young",
                duration: "1hr",
                date: "8/1/2021 @ 3:00pm",
                location: "100 jax st, Jacksonville Fl. 323232",
                isNew: false,
                rejecting: false,
                rejected: false,
                statusMsg: "",
                showStatusProgress: true,
                startStatusProgress: true,
                statusMsg: "Interview Scheduled for August 1st 2021 @ 2:00pm"
            },{
                title: "Web Designer",
                type: "Multiple Choice Questinaire",
                interviewer: "Chuck Young, Dan Davidson",
                duration: "1.5hrs",
                date: "8/1/2021 @ 3:00pm",
                location: "100 jax st, Jacksonville Fl. 323232",
                isNew: false,
                rejecting: false,
                rejected: false,
                statusMsg: "",
                showStatusProgress: true,
                startStatusProgress: true,
                statusMsg: "Interview Scheduled for August 1st 2021 @ 2:00pm"
            });  
        },
        showItem: function(item){
            var ComponentClass = Vue.extend(interviewFlyoutComponent);
            var flyout = new ComponentClass();


            console.log(item);
            flyout.title = item.jobTitle;
            flyout.item = item;
            flyout.parent = this;

            this.interviewFlyout = flyout;

            flyout.$mount();  
            document.body.appendChild(flyout.$el);
        }
    }
});
