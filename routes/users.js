var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var User=dbHelper.User;
    var db=dbHelper.db;
  var doc = {username : 'libaozhong7',password:"123456", title : '太极', content : 'dajiatubuzou1'};
    var person = new User(doc);
person.save(function(error) {
    if(error) {
        console.log(error);
    } else {
        console.log('saved OK!');
    }
    // 关闭数据库链接
});
//    User.create(doc, function(error){
//    if(error) {
//        console.log(error);
//    } else {
//        console.log('save ok');
//    }
//        db.close();
//    // 关闭数据库链接
//});
    person.findbyusername("libaozhong7",function(error,result){
        if(error) {
            console.log(error);
        } else {
            console.log(result);
        }
        //关闭数据库链接
    });
//User.findbytitle("太极",function(error,result){
//        if(error) {
//        console.log(error);
//    } else {
//        console.log(result);
//    }
//    //关闭数据库链接
//    db.close();
//});
//  var criteria = {title : 'xinlvcheng'}; // 查询条件
//var fields   = {title : 1,username:1, content : 1, time : 1,age:1}; // 待返回的字段
//var options  = {};
//User.find(criteria, fields, options, function(error, result){
//    if(error) {
//        console.log(error);
//    } else {
//      console.log('find ok');
//        console.log(result);
//    }
//    //关闭数据库链接
//});
//
//  var conditions = {username : 'libaozhong'};
//var update     = {$set : {age : 27, title : 'xinlvchengUpdate'}};
//var options    = {upset : true};
//User.update(conditions, update, options, function(error){
//    if(error) {
//        console.log(error);
//    } else {
//        console.log('update ok!');
//    }
//    //关闭数据库链接
//});

  res.send('respond with a resource late');

}).get('/host', function(req, res, next) {
  res.send(req.path);

});


module.exports = router;
