let CandidateProfileWidget = new Vue({
    el: '#CandidateProfileWidget', 
    data: {
        list: [],
        resumes: [
            {
                id: 1,
                filename: "John Doe Resume 2020.docx"
            },
            {
                id: 2,
                filename: "John Doe Resume 2020.pdf"
            }
        ],
        form:{
            resumes: {
                readOnly: true,
                submittingForm: false,
                showSuccessMessage: false,
                upload: false
            }
        }
    },
    created: function(){},
    methods: {
        showRecordModal: function(){
            var ComponentClass = Vue.extend(modalRecord);
            var modal = new ComponentClass();

            modal.title="Record Interview";
            modal.isLarge = true;
    
            modal.$mount();  
            document.body.appendChild(modal.$el); 
        },
        toggleForm: function(property){
            if(this.form[property].readOnly){
                this.form[property].readOnly = false
            }else{
                this.form[property].readOnly = true;
            }
            this.form.resumes.upload = false;
        },
        handleResumeUpload: function(uploader){
            var app = this;
            uploader.files.forEach(function(obj){
                app.resumes.push({
                    id: app.resumes.length + 1,
                    filename: obj.name
                });
            });
        },
        toggleResumeUploader: function(){
            if(this.form.resumes.upload){
                this.form.resumes.upload = false;
            }else{
                this.form.resumes.upload = true;
            }
        },
        removeResume: function(resume){
            for(var i=0; i<this.resumes.length; i++){
                if(this.resumes[i].id === resume.id){
                    this.resumes.splice(i, 1);
                }
            }          
        },
    }
});
