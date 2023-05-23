// app/routes.js
var User = require("./models/user.js");

module.exports = function(app, passport) {


    app.get('/',function(req, res) {
        res.render('index.ejs'); // load the index.ejs file    
    });

    //hiring manager specific routes
    app.get('/hiringmanager/dashboard',function(req, res) {
        res.render('hiringmanager/dashboard.ejs'); // load the index.ejs file    
    });
    app.get('/hiringmanager/assignments',function(req, res) {
        res.render('hiringmanager/assignments.ejs'); // load the assignments.ejs file    
    });
    app.get('/hiringmanager/requests',function(req, res) {
        res.render('hiringmanager/requests.ejs'); // load the requests.ejs file    
    });
    app.get('/hiringmanager/request/:requestId',function(req, res) {
        res.render('hiringmanager/request.ejs'); // load the request.ejs file    
    });
    app.get('/hiringmanager/candidates',function(req, res) {
        res.render('hiringmanager/candidates.ejs'); // load the candidates.ejs file    
    });
    app.get('/hiringmanager/candidate/:candidateId',function(req, res) {
        res.render('hiringmanager/candidate-profile.ejs'); // load the candidates.ejs file    
    });
    app.get('/hiringmanager/profile',function(req, res) {
        res.render('hiringmanager/profile.ejs'); // load the hiring manager profile.ejs file    
    });
    app.get('/hiringmanager/preferences',function(req, res) {
        res.render('hiringmanager/preferences.ejs'); // load the hiring manager profile.ejs file    
    });

    //recruiter specific pages
    app.get('/recruiter/dashboard',function(req, res) {
        res.render('recruiter/dashboard.ejs'); // load the index.ejs file    
    });

    app.get('/recruiter/jobs',function(req, res) {
        res.render('recruiter/jobs.ejs'); // load the requests.ejs file    
    });
    app.get('/recruiter/jobs/:jobId',function(req, res) {
        res.render('recruiter/job.ejs'); // load the request.ejs file    
    });
    app.get('/recruiter/talent',function(req, res) {
        res.render('recruiter/talent.ejs'); // load the candidates.ejs file    
    });
    app.get('/recruiter/talent/:talentId',function(req, res) {
        res.render('recruiter/talent-profile.ejs'); // load the candidates.ejs file    
    });
    app.get('/recruiter/source/:jobId',function(req, res) {
        res.render('recruiter/source.ejs'); // load the candidates.ejs file    
    });
    app.get('/recruiter/submit/:candiateId',function(req, res) {
        res.render('recruiter/submit.ejs'); // load the candidates.ejs file    
    });
    app.get('/recruiter/profile',function(req, res) {
        res.render('recruiter/profile.ejs'); // load the hiring manager profile.ejs file    
    });
    app.get('/recruiter/preferences',function(req, res) {
        res.render('recruiter/preferences.ejs'); // load the hiring manager profile.ejs file    
    });

    //tenant specific pages
    app.get('/tenant/dashboard',function(req, res) {
        res.render('tenant/dashboard.ejs'); // load the index.ejs file    
    });

    app.get('/tenant/jobs',function(req, res) {
        res.render('tenant/jobs.ejs'); // load the requests.ejs file    
    });
    app.get('/tenant/jobs/:jobId',function(req, res) {
        res.render('tenant/job.ejs'); // load the request.ejs file    
    });
    app.get('/tenant/talent',function(req, res) {
        res.render('tenant/talent.ejs'); // load the candidates.ejs file    
    });
    app.get('/tenant/talent/:talentId',function(req, res) {
        res.render('tenant/talent-profile.ejs'); // load the candidates.ejs file    
    });
    app.get('/tenant/source/:jobId',function(req, res) {
        res.render('tenant/source.ejs'); // load the candidates.ejs file    
    });
    app.get('/tenant/submit/:candiateId',function(req, res) {
        res.render('tenant/submit.ejs'); // load the candidates.ejs file    
    });
    app.get('/tenant/profile',function(req, res) {
        res.render('tenant/profile.ejs'); // load the hiring manager profile.ejs file    
    });
    app.get('/tenant/preferences',function(req, res) {
        res.render('tenant/preferences.ejs'); // load the hiring manager profile.ejs file    
    });

    //Admin Dashboards
    app.get('/superadmin/dashboard',function(req, res) {
        res.render('superadmin/dashboard.ejs'); // load the index.ejs file    
    });

    app.get('/high5coordinator/dashboard',function(req, res) {
        res.render('high5coordinator/dashboard.ejs'); // load the index.ejs file    
    });
    app.get('/high5coordinator/admin',function(req, res) {
        res.render('high5coordinator/admin.ejs'); // load the index.ejs file    
    });
    app.get('/high5coordinator/hiringmanager',function(req, res) {
        res.render('high5coordinator/hiringmanager.ejs'); // load the index.ejs file    
    });
    app.get('/high5coordinator/recruiter',function(req, res) {
        res.render('high5coordinator/recruiter.ejs'); // load the index.ejs file    
    });

    app.get('/communitymanager/dashboard',function(req, res) {
        res.render('communitymanager/dashboard.ejs'); // load the index.ejs file    
    });
    app.get('/communitymanager/admin',function(req, res) {
        res.render('communitymanager/admin.ejs'); // load the index.ejs file    
    });
    app.get('/communitymanager/hiringmanager',function(req, res) {
        res.render('communitymanager/hiringmanager.ejs'); // load the index.ejs file    
    });
    app.get('/communitymanager/recruiter',function(req, res) {
        res.render('communitymanager/recruiter.ejs'); // load the index.ejs file    
    });

    app.get('/salesadmin/dashboard',function(req, res) {
        res.render('salesadmin/dashboard.ejs'); // load the index.ejs file    
    });


    //Super Admin specific pages
    app.get('/widgets/dashboard',function(req, res) {
        res.render('widgets/dashboard.ejs'); // load the index.ejs file    
    });


    //candidate specific pages
    app.get('/candidate/dashboard',function(req, res) {
        res.render('candidate/dashboard.ejs'); // load the index.ejs file    
    });
    app.get('/candidate/assessments',function(req, res) {
        res.render('candidate/assessments.ejs'); // load the index.ejs file    
    });
    app.get('/candidate/assessments/:assessmentId',function(req, res) {
        res.render('candidate/assessment.ejs'); // load the index.ejs file    
    });
    app.get('/candidate/interviews',function(req, res) {
        res.render('candidate/interviews.ejs'); // load the index.ejs file    
    });
    app.get('/candidate/interviews/:interviewId',function(req, res) {
        res.render('candidate/interview.ejs'); // load the index.ejs file    
    });
    app.get('/candidate/jobs/:jobId',function(req, res) {
        res.render('candidate/job.ejs'); // load the index.ejs file    
    });
    app.get('/candidate/jobs',function(req, res) {
        res.render('candidate/jobs.ejs'); // load the index.ejs file    
    });
    app.get('/candidate/learning',function(req, res) {
        res.render('candidate/learning.ejs'); // load the index.ejs file    
    });
    app.get('/candidate/learning/:learningId',function(req, res) {
        res.render('candidate/learning-module.ejs'); // load the index.ejs file    
    });
    app.get('/candidate/profile',function(req, res) {
        res.render('candidate/profile.ejs'); // load the index.ejs file    
    });
    app.get('/candidate/preferences',function(req, res) {
        res.render('candidate/preferences.ejs'); // load the index.ejs file    
    });

    //global links
    app.get('/terms-and-conditions',function(req, res) {
        res.render('terms-and-conditions.ejs'); // load the terms-and-condition.ejs file    
    });
   

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {
        // render the page and pass in any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage') }); 
    });
    // =================================================================
    // Forgot Password  & Password Setup ===============================
    // =================================================================
    app.get('/forgot-password', function(req, res) {
        res.render('forgot-password.ejs'); // load the forgotpassword.ejs file 
    });
    app.get('/password-setup', function(req, res) {
        res.render('password-setup.ejs'); // load the password-setup.ejs file 
    });


    app.post('/login', function(req, res) {
        var sessionUser = new User({username: req.body.username,password: req.body.password});

        if(req.session.user === undefined){
            if(sessionUser.authenticate(sessionUser)){
                req.session.user = sessionUser;
                res.redirect('/');
            }else{
            res.render('login.ejs', {
                message : "Authentication Failed"
            });
            }
        }else{
            res.redirect('/');
        }

    });


    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.session.user = undefined;
        res.redirect('/login');
    });

    app.get('*', function(req, res){
        res.render('404.ejs'); // load the index.ejs file   
    });


};


function isAuthenticated(req,res,next){

    // if user is authenticated in the session, carry on 
    if (req.session.user !== undefined)
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/login');
}