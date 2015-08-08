var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var User=dbHelper.User;
    var db=dbHelper.db;
  var doc = {username : 'libaozhong7',password:"123456", title : '太极', content : 'dajiatubuzou1'};
    User.saveUser(doc);
  console.log(User.findByUserName("libaozhong7"));

  res.send('respond with a resource late');

}).get('/host', function(req, res, next) {
  res.send(req.path);

});


module.exports = router;
