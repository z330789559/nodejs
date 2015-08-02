var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('views/index', { title: 'Express',say:'hello' });
}).get('/acitivity', function(req, res, next) {
  console.log(req.query);
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
  res.send(JSON.stringify(data));
});

module.exports = router;
