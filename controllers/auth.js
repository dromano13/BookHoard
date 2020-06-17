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
        })
    })    
}

module.exports = {
    renderSignup,
    signup
}