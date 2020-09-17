const mongoose = require('mongoose');
const quotes = require('../controllers/quotes');

    Quote = mongoose.model('Quote')

module.exports = (app) => {
    //Setting up routes
app.get('/', (req, res) => {
    res.render('index')
});
app.get('/quotes', (req,res) => {
    quotes.show(req,res)
});
app.post('/quotes', (req, res) => {
    quotes.create(req,res)
});
}