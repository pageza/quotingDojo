const mongoose = require('mongoose')

//Creating mongoose Schema
const QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    quote: {type: String, required: true, minlength: 10}
})

//Creating the mongoose Model
const Quote = mongoose.model('Quote', QuoteSchema)