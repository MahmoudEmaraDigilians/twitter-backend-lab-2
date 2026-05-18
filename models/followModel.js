const mongoose = require('mongoose')

const followSchema = new mongoose.Schema({
    follower_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    following_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, {
    timestamps: { 
        createdAt: 'created_at', 
        updatedAt: 'updated_at' 
    }
})

const Follow = mongoose.model('Follow', followSchema)
module.exports = Follow