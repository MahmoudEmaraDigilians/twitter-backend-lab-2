const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8
    },
    avatar: {
        type: String,
        trim: true
    },
    tweets_count: {
        type: Number,
        default: 0,
    },
    followers_count: {
        type: Number,
        default: 0,
    },
    followings_count:{
        type: Number,
        default: 0,
    }
},
{
    timestamps: { 
        createdAt: 'created_at', 
        updatedAt: 'updated_at' 
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User