const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const mongoose = require('mongoose');






//Setting the port and instantiating an express app
const port = 8080
const app = express();

//Setting the app to use a static file and allowing for POST, as well as setting up session
app.use(flash())
app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret: 'mySecret',
    cookie: {maxAge: 60000}
}));

//Setting view engie to EJS and pointing it to the directory
app.set('view engine', 'ejs')
app.set('views', __dirname + '/client/views')

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

//Setting the server to listen on the specified port
app.listen(port, () => {
    console.log(`Server started on `, port);
});