const express = require('express')
const mongoose = require('mongoose')
const tweetRouter = require('./routes/tweetRoutes')
const User = require('./models/userModel')
const app = express()

app.use(express.json())
app.use('/api/v1/tweets', tweetRouter)


createUser = async (req, res) => {
    const newUser = await User.create({ name: "Test User", "email": "test@email.com", "password": "123456789" })
    res.status(200).json({
        message: "User has been added ",
        newUser
    })
}

app.post('/api/v1/users', createUser)

let dburl = "mongodb+srv://om537791_db_user:0C7f1juM2LFDMulv@twitter.j2iajct.mongodb.net/twitter?appName=Twitter"
const conn = mongoose.connect(dburl)
if(conn){
    console.log("DB Connection Ready")
}

module.exports = app