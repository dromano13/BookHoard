require('dotenv').config();

const express = require('express');

const bodyParser = require('body-parser');

const methodOverride = require('method-override');

const app = express();

const routes = require('./routes');

const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    let token = req.query.token;
    
    jwt.verify(
      token, process.env.JWT_SECRET,
      (err, decodedUser) => {
        if (err || !decodedUser){
            res.send(err)          
        } 
        req.user = decodedUser;
        
        next();
      }
    )
  }


app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.render('users/index.ejs')
})


app.use('/users', verifyToken, routes.users);
app.use('/auth', routes.auth);
app.use('/books', routes.books);

app.listen(process.env.PORT, () => {
    console.log('I am listening');
});