const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        trim: true,
        required: true,
        maxLength: 280,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    tweet_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet',
        required: true,
    },
    likes_count: {
        type: Number,
        default: 0
    }
}, {
    timestamps: { 
        createdAt: 'created_at', 
        updatedAt: 'updated_at' 
    }
})

const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment