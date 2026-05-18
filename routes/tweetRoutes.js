const express = require('express')
const tweetController = require('./../controllers/tweetController')
const router = express.Router()

// get user feed (user tweets + followings tweets)
router.get('/feed', tweetController.userFeed)

// // Create a new tweet
router.post('/', tweetController.testMethod)

router.route('/:id')
    .get(tweetController.testMethod) // Get Tweet Details 
    .put(tweetController.testMethod) // Edit Tweet
    .delete(tweetController.testMethod) // Delete Tweet

module.exports = router