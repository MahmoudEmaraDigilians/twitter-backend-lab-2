const mongoose = require('mongoose')

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 280,
        trim: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comments_count: {
        type: Number,
        default: 0
    },
    likes_count: {
        type: Number,
        default: 0
    }    
},
{
    timestamps: { 
        createdAt: 'created_at', 
        updatedAt: 'updated_at' 
    }
})

const Tweet = mongoose.model('Tweet', tweetSchema)
module.exports = Tweet