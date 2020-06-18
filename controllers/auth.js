require(`dotenv`).config();

const User = require(`../models`).User;
const bcrypt = require('bcryptjs');

const renderSignup = (req, res) => {
    res.render(`users/signup.ejs`);
}

const signup = (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return res.status(500).json(err);

        bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
            if(err) return res.status(500).json(err);
            req.body.password = hashedPwd;

        User.create(req.body)
        .then(newUser => {
            res.redirect(`/users/profile/${newUser.id}`);
            })
            .catch(err => {
                console.log(err);
                res.send(`err ${err}`);
            }) 
        });
    });    
}

const renderLogin = (req, res) => {
    res.render(`users/login.ejs`);
}

const login = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(foundUser => {
        if(foundUser){
            bcrypt.compare(req.body.password, foundUser.password, (err, match) => {
                if (match) {
                    res.redirect(`/users/profile/${foundUser.id}`);
                } else {
                  return res.sendStatus(400);
                }
            })
        }
    })
}

module.exports = {
    renderSignup,
    signup,
    renderLogin,
    login
}