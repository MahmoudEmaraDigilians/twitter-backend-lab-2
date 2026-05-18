const Follow = require('../models/followModel')
const Tweet = require('./../models/tweetModel')

exports.testMethod = (req, res) => {
    res.status(200).json({
        message: "Hello express"
    })
}

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