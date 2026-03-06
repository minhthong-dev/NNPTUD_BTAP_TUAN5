const mongoose = require('mongoose');
const Integer = require('mongoose-int32');
let userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        fullName: {
            type: String,
            required: true
        },
        avaterUrl:{
            type: String,
            default: ''
        },
        loginCount:{
            type:Integer,
            default: 0
        },
        Status:{
            type: Boolean,
            default: false
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: mongoose.Types.ObjectId,
            ref:'role',
            required: true
        },
        isDeleted:{
            type:Boolean,
            default:false
        }
    }, {
    timestamps: true
})
module.exports = mongoose.model('users', userSchema) 