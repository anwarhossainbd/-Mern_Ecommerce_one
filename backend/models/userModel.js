const mongoose = require("mongoose");
const validator = require("validator");

const userSchema =new mongoose.Schema({

    name:{
        type:String,
        required:[true,"Please Enter Your Name"],
        maxlength:[30,"Name can not exceed 30 Characters"],
        minlength:[3,"Name should have more than 3 Characters"]
    },

    email:{
        type:String,
        required:[true,"Please Enter Your Email"],
        unique:true,
        validate:[validator.isEmail, "Please Enter a valid Email"],
    },

    password:{
        type:String,
        required:[true,"Please Enter Your Password"],
        minlength:[8,"Password should be greater than 8 Characters"],
        select:false,
    },

    avatar:{
        public_id:{
            type:String,
            required:true
        },

        url:{
            type:String,
            required:true
        }
    },

    role:{
        type:String,
        default:"user",
    },

    resetPasswordToken:String,
    resetPasswordExpire: Date,

})


userSchema.pre("save")

module.exports = mongoose.model("User",userSchema)