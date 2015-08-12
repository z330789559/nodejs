/**
 * Created by Administrator on 2015/8/8.
 */
var express = require('express');
var router = express.Router();
router.get('/', function(req, res) {
    var Activity=dbHelper.Activity;
    console.log(req.query);
  var json=  Activity.findByActivityName("张三丰",res);

}).get('/:id', function(req, res) {
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

}).get('/publish', function(req, res) {
   console.log("publish");

}).get('/manage', function(req, res) {
    console.log("manage");

}).post("/add",function(req, res){
    var Activity=dbHelper.Activity;
    Activity.saveActivity({
        activityname : "张三丰",
        startcity : "上海",
        activityaddress : "tianlin1",
        activityImg:"taiji.jpg",
        fee    : 100,
        catalog  : "户外",
        starttime     : "2014-12-25",
        overtime     : "2014-12-25",
        subscribeendtime     :"2014-12-25",
        activityDesciption   :"世界之大无奇不有",
        activityContent   :"世界之大无奇不有"
    });
    res.send("post");
});
module.exports = router;