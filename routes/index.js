var express = require('express');
var https = require('https');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',say:'hello' });
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
