const mongoose = require('mongoose')
const Quote = mongoose.model('Quote')   

module.exports = {
    show: (req, res) => {
        Quote.find()
            .then(data => res.render('quotes',{quotes: data}))
            .catch(err => res.json(err))
    },
    create: (req,res) => {
        const quote = new Quote(req.body);
        quote.save()
             .then(() => res.redirect('/'))
             .catch(err => {
                console.log("There is an error", err);
                for (let key in err.errors){
                    req.flash('Registration', err.errors[key].path)
                }
            res.redirect('/')
        });
    }
}