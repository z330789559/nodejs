/**
 * Created by Administrator on 2015/8/8.
 */
var express = require('express');
var router = express.Router();
router.get('/', function(req, res) {
    var Activity=dbHelper.Activity;
    console.log(req.query);
  var json=  Activity.findByActivityName("张三丰",res);

}).get('activity/:id', function(req, res) {
    var id=req.params.id;
       console.log(id);
    var Activity=dbHelper.Activity;
    console.log(req.query);
    var process=function(data){
        res.send(JSON.stringify(data));
    };
    Activity.findById(id,process);

}).get('/me', function(req, res) {
    console.log("me");

}).get('/filter', function(req, res) {
    var Activity=dbHelper.Activity;
    var User=dbHelper.User;
      var userlog=req.session.user;
    var activityList=function(error,activities){
        res.send(JSON.stringify(activities));
    };
    var queryUserId=function(error,username){

        Activity.findListByFilter(username,activityList);
    };
    User.findByUserName(userlog.name,queryUserId);

}).get('/publish', function(req, res) {
   console.log("publish");

}).get('/manage', function(req, res) {
    console.log("manage");

}).post("/add",function(req, res){
    var Activity=dbHelper.Activity;
    var user=req.session.user;
    Activity.saveActivity({
        activityname : req.query.caption,
        activityaddress : req.query.activityCity,
        activityImg:req.query.activityImg,
        fee    : req.query.costfee,
        catalog  : req.query.activitycatalog,
        starttime     :req.query.activityStart,
        subscribeendtime     :req.query.subscriplimittime,
        activityDesciption   :req.query.activityDescription,
        activityContent   :req.query.content,
        publisher:user.name
    });
    res.send(JSON.stringify({"result":"ok"}));
});
module.exports = router;