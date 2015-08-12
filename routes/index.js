var express = require('express');
var https = require('https');
var router = express.Router();
var fs =require("fs");
var upload = require('multer')({dest: '.public/images/upload' });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',say:'hello' });
}).get('/upload', function(req, res, next) {
  res.render('assist');
}).get('/login', function(req, res, next) {
  res.render('login', { title: 'Express',say:'hello' });
}).post('/doLogin', function(req, res, next) {

  req.session.user={"name":req.query.username,"password":req.query.password};
  console.log(req.session.user);
  res.send({code:"0000",msg:"ok"});
}).post('/uploadImg',upload.single('wangEditor_uploadImg'),function(req, res, next) {
  res.set('Content-Type', 'text/html');
  res.set('Charset ', 'utf-8');
  var tmp_path=req.file.path;
  var timestamp=new Date().getTime();
  var target_path = './public/images/upload/' + timestamp+req.file.originalname;
  var url="images/upload/"+timestamp+req.file.originalname;
  fs.rename(tmp_path, target_path, function(err) {
    if (err) throw err;
    fs.unlink(tmp_path, function () {
      if (err) throw err;
    });
  });
      res.send("<iframe src=/upload#ok|"+url+"></iframe> ")
}).get('/index/authcode', function(req, res, next) {
  var getRandom = function(start,end){
    return start+Math.random()*(end-start);
  };

}).get('/jsTikect', function(req, res, next) {
  var appid='wx9044e7f4cc0ee338';
  var AppSecret='392587cb09bc9b68616153795a932367';
  var http ="https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET";
  var realToken=http.replace("APPID",appid).replace("APPSECRET",AppSecret);
  https.get(http,function(resp){
    resp.setEncoding('utf8');
    resp.on('data', function (data) {
      console.log('BODY: ' + data);
      res.send(data);
    });


  }).on('error', function(e) {
    console.error(e);
  });
});

module.exports = router;
