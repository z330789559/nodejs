var express = require('express');
var async = require('async');
var router = express.Router();

/* GET users listing. */
router.get('activity/:name', function(req, res, next) {
    var User=dbHelper.User;
    var Activity=dbHelper.Activity;
     var users=[];
    var activitys=[];
    var result=function(activity){
        res.send(JSON.stringify(activity));
    };
    var getUser=function(user){
        if(user.activity){
            Activity.findById(user.activity,result);
        }
    };
    User.findByUserName(req.params.name,getUser);

}).get('/add', function(req, res, next) {
    var User=dbHelper.User;
    var doc={
        username :"zhangsan",
        password : "123456",
        photo    : "",
        iphone  : "13122529229",
        time     : "2015-08-08",
        age      : 31,
        address   :"河南正阳",
        openid   :"123123123wqewqeqw",
        activity:"55c5a33aa682a5a80fc87698"
    }
    console.log("保存成功");
    User.saveUser(doc);
});
module.exports = router;
