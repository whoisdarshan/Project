const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name:{type:String},
        email:{type:String,unique:true,required:true},
        password:{type:String},
        profile:{type:String},
        phone:{type:Number},
        isDelete:{type:Boolean,default : false},
        admin:{type:Boolean,default:false}
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports= mongoose.model("users",userSchema);