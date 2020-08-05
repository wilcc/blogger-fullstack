const mongoose = require('mongoose')

const BlogSchema  = new mongoose.Schema({
    title: String,
    author: String,
    subject: String,
    article:String
})

module.exports = mongoose.model('blog',BlogSchema)