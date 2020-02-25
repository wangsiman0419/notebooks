const moogoose=require('./db');
var AdminSchema=moogoose.Schema({
    name:String,
    age:Number
})
var Admin=moogoose.model('Admin',AdminSchema,'admin');
module.exports=Admin;