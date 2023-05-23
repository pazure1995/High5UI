var app = new Vue({
    el: '#HMProfile',
    data: {
        resumeFile: "",
        addInfo: false,  
        addInfowork: false,  
        addInfoCertificate: false,  
        addInfoLicence: false,  
        addBtn: true,
        addBtnwork: true,
        addBtnCertificate: true,
        addBtnLicence: true,
        myStory: "Nothing to report....",
        skills: [
            {
                text: "HTML"
            },
            {
                text: "CSS"
            },
            {
                text: "Javascript"
            },
            {
                text: "AWS"
            }
        ],
        education: [
            {
                id: 1,
            },
            {
                id: 2,
            }
        ],
        experience: [
            {
                id: 1
            },
            {
                id: 2
            }
        ],
        certifications: [
            {
                id: 1
            }
        ],
        licenses: [
            {
                id: 1
            }
        ],
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
            contact: {
                readOnly: true,
                submittingForm: false,
                showSuccessMessage: false
            },
            story: {
                readOnly: true,
                submittingForm: false,
                showSuccessMessage: false
            },
            social: {
                readOnly: true,
                submittingForm: false,
                showSuccessMessage: false
            },
            education: {
                readOnly: true,
                submittingForm: false,
                showSuccessMessage: false
            },
            experience: {
                readOnly: true,
                submittingForm: false,
                showSuccessMessage: false
            },
            certifications: {
                readOnly: true,
                submittingForm: false,
                showSuccessMessage: false
            },
            licenses: {
                readOnly: true,
                submittingForm: false,
                showSuccessMessage: false
            },
            resumes: {
                readOnly: true,
                submittingForm: false,
                showSuccessMessage: false,
                upload: false
            },
            security: {
                password: "Test@123!!",
                passwordConfirmation: "",
                readOnly: true,
                submittingForm: false,
                disableNewPassword: false,
                showSuccessMessage: false,
                showPassword: false,
                passwordLength: false,
                passwordCondition: false,
                passwordMisMatch: false,
                enableConfirm: false,
                formReady: false
            }
        },
        showPassword: false
    },
    created: function(){
        this.validatePassword();
    },
    methods: {
        showRecordModal: function(){
            var ComponentClass = Vue.extend(modalRecord);
            var modal = new ComponentClass();

            modal.title="Record Interview";
            modal.isLarge = true;
    
            modal.$mount();  
            document.body.appendChild(modal.$el); 
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
        validatePassword: function(){
            console.log(this.form.security.password);
            var enableCnt = 0;
            var charecters = /^[A-Za-z]+$/;
            var numberPresent = /^(?=.*[0-9])/;
            var specialCharacterPresent = /^(?=.*[!@#$%^&*])/;

            if(this.form.security.password.trim().length >= 8){
                this.form.security.passwordLength = true;
                enableCnt = enableCnt + 1;
            }else{
                this.form.security.passwordLength = false;
            }
    
            if(numberPresent.test(this.form.security.password) || specialCharacterPresent.test(this.form.security.password)) {
                enableCnt = enableCnt + 1;
                this.form.security.passwordCondition = true;
            }else{
                this.form.security.passwordCondition = false;
            }
            if(this.form.security.passwordLength === true && this.form.security.passwordCondition === true){
                if(this.form.security.password != this.form.security.passwordConfirmation){
                    this.form.security.passwordMisMatch = true;
                }
                else{
                    this.form.security.passwordMisMatch = false;
                }
                this.form.security.enableConfirm = true;
            }else{
                this.form.security.enableConfirm = false;
                this.form.security.enableAgreement = false;
                this.form.security.formReady = false;
            }
        },
        revealPassword: function(property){
            console.log(property);
            if(this.form[property].showPassword){
                this.form[property].showPassword = false;
            }else{
                this.form[property].showPassword = true;
            }
        },
        submitForm: function(property){
            var app = this;

            app.form[property].submittingForm = true;
            setTimeout(function(){
                app.form[property].submittingForm = false;
                app.form[property].showSuccessMessage = true;
                setTimeout(function(){
                    app.form[property].showSuccessMessage = false;
                    app.form[property].readOnly = true;
                },2000);

            },2000);
        },
        toggleForm: function(property){
            if(this.form[property].readOnly){
                this.form[property].readOnly = false
            }else{
                this.form[property].readOnly = true;
            }
            this.form.resumes.upload = false;
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
        updateResume: function(){
            document.getElementById('resumeFile').click();
            // this.resumeFile.click();
        }
    }
});