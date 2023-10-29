import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true,
        unique : true
    },
    picture : String,
    password : String,
    provider : {
        type :String,
        default : "credentials"
    },
    role :{
        type : String,
        default : "user"
    }
},{
    timestamps : true
})

const users = mongoose.models.users || mongoose.model("users", userSchema)

export default users
