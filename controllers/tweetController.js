const Comment = require('../models/commentModel')
const Follow = require('../models/followModel')
const Tweet = require('./../models/tweetModel')

exports.userFeed = async (req, res) => {
    const userId = "9906f871e7e2e46e1e3fe627"
    const userFollowings = await Follow.find({ follower_id: userId }).distinct('following_id')
    const tweetAuthors = [...userFollowings, userId]
    // const userTweets = await Tweet.find({ user_id: userId })
    const userTweets = await Tweet.find({ user_id: { $in: tweetAuthors } })
    res.status(200).json({
        message: "User Tweets",
        tweetsCount: userTweets.length,
        tweets: userTweets
    })
}

exports.createTweet = async (req, res) => {
    const userId = "9906f871e7e2e46e1e3fe627"
    const { content } = req.body
    const newTweet = await Tweet.create({ content: content, user_id: userId })
    res.status(201).json({
        message: "A new tweet has been created",
        tweet: newTweet
    })
}

exports.deleteTweet = async (req, res) => {
    const tweetId = req.params.id
    const userId = "9906f871e7e2e46e1e3fe627" // This User Created the Tweet
    // const userId = "167612b2015dcd91083159ae" // Other User for Testing

    const myTweet = await Tweet.findById(tweetId)
    if(myTweet.user_id == userId){
        await Tweet.findByIdAndDelete(tweetId)
        res.status(204).json({
            message: "A Tweet has been deleted"
        })
    } else {
        res.status(401).json({
            message: "You're not authorized to delete this tweet"
        })
    }
}

exports.getTweet = async (req, res) => {
    const tweetId = req.params.id
    const tweet = await Tweet.findById(tweetId)
    const comments = await Comment.find({ tweet_id: tweetId })
    res.status(200).json({
        message: "Tweet details",
        tweet,
        noOfComments: comments.length,
        comments
    })
}

exports.updateTweet = async (req, res) => {
    const tweetId = req.params.id
    const userId = "12947c19914cdcc206a42efb" // This User Created the Tweet
    // const userId = "167612b2015dcd91083159ae" // Other User for Testing
    const { content } = req.body
    const myTweet = await Tweet.findById(tweetId)
    if(myTweet.user_id == userId){
        const updatedTweet = await Tweet.findByIdAndUpdate(tweetId, { content: content }, { new: true })
        res.status(200).json({
            message: "Tweet has been updated",
            tweet: updatedTweet
        })
    } else {
        res.status(401).json({
            message: "You can't Update others' Tweets"
        })
    }
}