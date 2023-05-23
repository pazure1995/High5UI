var User = function (data) {  
    this.username = data.username;
    this.password = data.password;

    this.authenticate = function(user){
        var ret = false;

        for(var i=0; i<users.length; i++){
            if(users[i].email === user.username && users[i].pwd === user.password){
                ret = true
            }
        }

        return ret;

    }

    this.get = function(user){
        var ret = {};
        for(var i=0; i<users.length; i++){
            if(users[i].email === user.username && users[i].pwd === user.password){
                ret = users[i];
            }
        }    

        return ret;    
    }

}
var users = [
    {
        id: "1",
        company: "Company",
        fName: "fname",
        lName: "lname",
        email: "company@company.com",
        enabled: true,
        pwd: "Dem0!@#$"
    }                                                       
]
module.exports = User;