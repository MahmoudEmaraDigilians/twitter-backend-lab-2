const express = require('express')
const tweetController = require('./../controllers/tweetController')
const router = express.Router()

// get user feed (user tweets + followings tweets)
router.get('/feed', tweetController.userFeed)

// // Create a new tweet
router.post('/', tweetController.createTweet)

router.route('/:id')
    .get(tweetController.getTweet) // Get Tweet Details 
    .patch(tweetController.updateTweet) // Edit Tweet
    .delete(tweetController.deleteTweet) // Delete Tweet

module.exports = router