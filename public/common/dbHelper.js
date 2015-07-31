/**
 * Created by Administrator on 2015/7/12.
 */
var mongoose =require('mongoose');
var db=mongoose.createConnection('mongodb://127.0.0.1:27017/admin');
db.on('error', function(error) {
    console.log(error);
});

// Schema 结构
var UserSchema = new mongoose.Schema({
    username : {type : [String],index:true, default : '匿名用户'},
    password : {type : String},
    title    : {type : String},
    content  : {type : String},
    time     : {type : Date, default: Date.now},
    age      : {type : Number}
},{ minimize: false });
//UserSchema.set(option, value);
//autoIndex
//capped
//collection
//id
//_id
//minimize
//read
//safe
//shardKey
//strict
//toJSON
//toObject
//validateBeforeSave
//versionKey
//skipVersioning
UserSchema.virtual('person.all').get(function () {
    return this.username + ' ' + this.title+' '+this.age;
});
//console.log('%s is insane', person.person.all);
//virtual 的用法
//personSchema.virtual('name.full').set(function (name) {
//var split = name.split(' ');
//this.name.first = split[0];
//this.name.last = split[1];
//});
// 添加 mongoose 实例方法
UserSchema.methods.findbyusername = function(username, callback) {
    return this.model('User').find({username: username}, callback);
}
// 添加 mongoose 静态方法，静态方法在Model层就能使用
UserSchema.statics.findbytitle = function(title, callback) {
    return this.model('User').find({title: title}, callback);
}
// model
var User = db.model('User', UserSchema);
module.exports={
    User:User,
    db:db
}
//// 增加记录 基于 entity 操作
//var doc = {username : 'libaozhong',password:"123456", title : 'emtity_demo_title', content : 'emtity_demo_content'};
//var person = new User(doc);
//person.save(function(error) {
//    if(error) {
//        console.log(error);
//    } else {
//        console.log('saved OK!');
//    }
//    // 关闭数据库链接
//    db.close();
//});
//// 增加记录 基于model操作
//var doc = {username : 'model_demo_username', title : 'model_demo_title', content : 'model_demo_content'};
//User.create(doc, function(error){
//    if(error) {
//        console.log(error);
//    } else {
//        console.log('save ok');
//    }
//    // 关闭数据库链接
//    db.close();
//});
//var callback=function(data){
//    console.log(data);
//}
//// 修改记录
////mongooseModel.update(conditions, update, options, callback);
//var conditions = {username : 'model_demo_username'};
//var update     = {$set : {age : 27, title : 'model_demo_title_update'}};
//var options    = {upset : true};
//User.update(conditions, update, options, function(error){
//    if(error) {
//        console.log(error);
//    } else {
//        console.log('update ok!');
//    }
//    //关闭数据库链接
//    db.close();
//});
//// 查询
//// 基于实例方法的查询
//var mongooseEntity = new User({});
//mongooseEntity.findbyusername('libaozhong', function(error, result){
//    if(error) {
//        console.log(error);
//    } else {
//        console.log(result);
//    }
//    //关闭数据库链接
//    db.close();
//});
//// 基于静态方法的查询
//User.findbytitle('emtity_demo_title', function(error, result){
//    if(error) {
//        console.log(error);
//    } else {
//        console.log(result);
//    }
//    //关闭数据库链接
//    db.close();
//});
//// mongoose find
//var criteria = {title : 'emtity_demo_title'}; // 查询条件
//var fields   = {title : 1, content : 1, time : 1}; // 待返回的字段
//var options  = {};
//User.find(criteria, fields, options, function(error, result){
//    if(error) {
//        console.log(error);
//    } else {
//        console.log(result);
//    }
//    //关闭数据库链接
//    db.close();
//});
//// 删除记录
//var conditions = {username: 'emtity_demo_username'};
//User.remove(conditions, function(error){
//    if(error) {
//        console.log(error);
//    } else {
//        console.log('delete ok!');
//    }
//
//    //关闭数据库链接
//    db.close();
//});