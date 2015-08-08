/**
 * Created by Administrator on 2015/7/12.
 */
var mongoose =require('mongoose');
var options = {
    db: { native_parser: true },
    server: { poolSize: 5 },
};
options.server.socketOptions = { keepAlive: 1 };
var db=mongoose.createConnection('mongodb://127.0.0.1:27017/admin',options);
db.on('error', function(error) {
    console.log(error);
});

// Schema 结构
var UserSchema = new mongoose.Schema({
    username : {type : [String],index:true, default : '匿名用户'},
    password : {type : String},
    photo    : {type : String},
    iphone  : {type : [String]},
    time     : {type : Date, default: Date.now},
    age      : {type : Number},
    address   :{type : String},
    openid   :{type : String},
    sex      :{type : String},
    rank     :{type : Number},
    payAccount   :{
        weixin:{type : String},
        yinhangka:{type : [String]},
        zhibao:{type : String}
    },
    activity:{ type: String},
    subscibe:{ type: String},
    registerMember:{type : Boolean}
},{ minimize: false });

var ActivitySchema = new mongoose.Schema({
    activityname : {type : [String],index:true},
    startcity : {type : String},
    activityaddress : {type : String},
    activityImg:{type : String},
    fee    : {type :Number},
    catalog  : {type : [String]},
    starttime     : {type : Date, default: Date.now},
    overtime     : {type : Date, default: Date.now},
    subscribeendtime     : {type : Date, default: Date.now},
    activityDesciption   :{type : String},
    activityContent   :{type : Buffer},
    activityTitle   :{type : String},
    reader      :{type : Number},
    share     :{type : Number},
    limit     :{type : Number},
    feerate     :{type : Number},
    publishstatus :{type:Boolean},//1 活动创建 2后台审核 3审核通过  4已发布 5已取消  6活动结束  8已生成结算单
    publicshtime:{type : Date, default: Date.now},
    publisher: { type: String},
    subscibe:{ type: String}
},{ minimize: false });

var SubscribeSchema = new mongoose.Schema({
    username : {type : String,index:true, default : '匿名用户'},
    subscribeNum : {type : Number},
    subscribeStatus    : {type : String},//1.已报名 2.已支付 3已取消，4 退款中 5 退款结束
    iphone  : {type : [String]},
    subscribetime     : {type : Date, default: Date.now},
    activity:{ type: String },
    user: { type: String }
},{ minimize: false });
var CommentSchema = new mongoose.Schema({
    Commentcontent : {type : String},
    Commenttime     : {type : Date, default: Date.now},
    activity:{ type: String},
    user: { type:String}
},{ minimize: false });
var SettlementSchema = new mongoose.Schema({
    activity:{ type:String},
    activityname : {type : [String],index:true},
    totalfee     : {type : Date, default: Date.now},
    employrate   : {type : Number},
    payfee       :{type : Number},
    username     : {type : String},
    payAccount   :{
        weixin:{type : String},
        yinhangka:{type : [String]},
        zhibao:{type : String}
    },
    SettlementStatus:{type : String} //0 生成结算单 1结算成功 2结算失败
},{ minimize: false });
UserSchema.virtual('userIndentity.full').get(function () {
    return {
        openid:this.openid,
        iphone:this.iphone
    };
});
var User = db.model('User', UserSchema);
var Activity=db.model('Activity', ActivitySchema);
var Comment=db.model('Comment', SubscribeSchema);
var Settlement=db.model('Settlement', SubscribeSchema);
var Subscribe=db.model('Subscribe', SubscribeSchema);

var UserDao={
        saveUser:function(JsonObj){
             var  userEntity  =new User(JsonObj);
               userEntity.save();
        },
        findUserIdentity:function(JsonObj){
        return User.userIndentity.full;
        },
        findByUserName:function(name){
            User.find({'username':name}, function (err, users) {
                return users;
            });
        },
        findByCondition:function(jsonObj){
            User.find(jsonObj, function (err, users) {
                return users;
            });
        },
          findById:function(id){
              User.findById(id,function(err,User){
                return User;
              });
          },
            updateByid:function(id,obj){
                    User.update({_id:id},{$set:obj},function(err){});
            },
        updateByCondition:function(obj){
          var conditions = obj.conditions;
          var update     = {$set :obj.update};
          var options    = {upset : true};
         User.update(conditions, update, options, function(error){
            if(error) {
                console.log(error);
            } else {
                console.log('update ok!');
            }
        });
     }
}
var ActivityDAO={
    saveActivity:function(JsonObj){
        var  activityEntity  =new Activity(JsonObj);
        try{
        activityEntity.save();
        }catch(err){
            console.log(err);
        }
    },
    findByActivityName:function(name,res){
        Activity.find({'activityname':name}, function (err, activitys) {
            res.send(JSON.stringify(activitys));
        });
    },
    findById:function(id){
        Activity.findById(id,function(err,activity){
            return activity;
        });
    },
    updateByid:function(id,obj){
        Activity.update({_id:id},{$set:obj},function(err){});
    },
    findByCondition:function(jsonObj){
        Activity.find(jsonObj, function (err, activitys) {
            return activitys;
        });
        //User
        //    .find({})
        //    .where('name.last').equals('Ghost')
        //    .where('age').gt(17).lt(66)
        //    .where('likes').in(['vaporizing', 'talking'])
        //    .limit(10)
        //    .sort('-occupation')
        //    .select('name occupation')
        //    .exec(callback);
    },
    updateByCondition:function(obj){
        var conditions = obj.conditions;
        var update     = {$set :obj.update};
        var options    = {upset : true};
        Activity.update(conditions, update, options, function(error){
            if(error) {
                console.log(error);
            } else {
                console.log('update ok!');
            }
        });
    }
}
var CommentDAO={
    saveComment:function(JsonObj){
        var  commentEntity  =new User(JsonObj);
        commentEntity.save();
    },
    findById:function(id){
        Comment.findById(id,function(err,comment){
            return comment;
        });
    },
    updateByid:function(id,obj){
        Comment.update({_id:id},{$set:obj},function(err){});
    },
    findByCondition:function(jsonObj){
        Comment.find(jsonObj, function (err, comments) {
            return comments;
        });
    },
    updateByCondition:function(obj){
        var conditions = obj.conditions;
        var update     = {$set :obj.update};
        var options    = {upset : true};
        Comment.update(conditions, update, options, function(error){
            if(error) {
                console.log(error);
            } else {
                console.log('update ok!');
            }
        });
    }
}
var SettlementDAO={
    saveSettlement:function(JsonObj){
        var  settlementEntity  =new User(JsonObj);
        settlementEntity.save();
    },
    findById:function(id){
        Settlement.findById(id,function(err,settlement){
            return settlement;
        });
    },
    updateByid:function(id,obj){
        Settlement.update({_id:id},{$set:obj},function(err){});
    },
    findByCondition:function(jsonObj){
        Settlement.find(jsonObj, function (err, settlements) {
            return settlements;
        });
    },
    updateByCondition:function(obj){
        var conditions = obj.conditions;
        var update     = {$set :obj.update};
        var options    = {upset : true};
        Settlement.update(conditions, update, options, function(error){
            if(error) {
                console.log(error);
            } else {
                console.log('update ok!');
            }
        });
    }
}
var SubscribeDAO={
    saveSubscribe:function(JsonObj){
        var  subscribeEntity  =new User(JsonObj);
        subscribeEntity.save();
    },
    findById:function(id){
        Subscribe.findById(id,function(err,subscribe){
            return subscribe;
        });
    },
    updateByid:function(id,obj){
        Subscribe.update({_id:id},{$set:obj},function(err){});
    },
    findByCondition:function(jsonObj){
        Subscribe.find(jsonObj, function (err, subscribes) {
            return subscribes;
        });

    },
    updateByCondition:function(obj){
        var conditions = obj.conditions;
        var update     = {$set :obj.update};
        var options    = {upset : true};
        Subscribe.update(conditions, update, options, function(error){
            if(error) {
                console.log(error);
            } else {
                console.log('update ok!');
            }
        });
    }
}

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

module.exports={
    User:UserDao,
    Activity:ActivityDAO,
    Comment:CommentDAO,
    Settlement:SettlementDAO,
    Subscribe:SubscribeDAO,
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