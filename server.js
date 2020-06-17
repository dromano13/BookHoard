require('dotenv').config();

const express = require('express');

const bodyParser = require('body-parser');

const methodOverride = require('method-override');

const app = express();

const routes = require('./routes');


app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.render('users/index.ejs')
})


app.use('/users', routes.users);
app.use('/auth', routes.auth);

app.listen(process.env.PORT, () => {
    console.log('I am listening');
});