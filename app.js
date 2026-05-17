const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Hello express"
    })
})

let dburl = "mongodb+srv://om537791_db_user:0C7f1juM2LFDMulv@twitter.j2iajct.mongodb.net/?appName=Twitter"
const conn = mongoose.connect(dburl)
if(conn){
    console.log("DB Connection Ready")
}

module.exports = app