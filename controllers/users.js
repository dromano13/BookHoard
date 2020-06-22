const Book = require('../models').Book;

const User = require('../models').User;

const jwt = require('jsonwebtoken');

const deleteUser = (req, res) => {
    User.destroy({
        where: {id: req.params.index}
    })
    .then(() => {
        res.redirect('/');
    })
}

const renderProfile = (req, res) => {
    User.findByPk(req.params.index, {
        include: [{
            model: Book,
            attributes: ['id', 'title']
        }]
    })
    .then(userProfile => {
        res.render('users/profile.ejs', {
            user: userProfile,
            token: req.query.token
        })
    })
}

const editProfile = (req, res) => {
    if(!req.body.img) {
        delete req.body.img
    }
    User.update(req.body, {
        where: {id: req.params.index},
        returning: true
    })
    .then(updatedUser => {
        res.redirect(`/users/profile/${req.params.index}/?token=${req.query.token}`);
    })
}

module.exports = {
    deleteUser,
    renderProfile,
    editProfile
}