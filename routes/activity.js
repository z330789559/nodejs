/**
 * Created by Administrator on 2015/8/8.
 */
var express = require('express');
var router = express.Router();
router.get('/', function(req, res) {
    var Activity=dbHelper.Activity;
    console.log(req.query);
  var json=  Activity.findByActivityName("张三丰",res);
    var data={result:[{
        startCity: "上海",
        startTime:"2014-12-25",
        activityDays:"4",
        costFee:500,
        activityTitle:"太极",
        personNum:"12-15",
        imgName:"taiji.jpg",
        activityOwer:"张三丰",
        memerberRank:"高级"
    },{
        startCity: "北京",
        startTime:"2015-12-25",
        activityDays:"11",
        costFee:13000,
        activityTitle:"去西藏看山",
        personNum:"12-15",
        imgName:"xizhang.jpg",
        activityOwer:"达赖喇嘛",
        memerberRank:"专家"
    }]};
    console.log(data);

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