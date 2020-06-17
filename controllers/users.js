const User = require('../models').User;

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
    })
    .then(userProfile => {
        res.render('users/profile.ejs', {
            user:userProfile
        })
    })
}

const editProfile = (req, res) => {
    User.update(req.body, {
        where: {id: req.params.index},
        returning: true
    })
    .then(updatedUser => {
        res.redirect(`/users/profile/${req.params.index}`);
    })
}

module.exports = {
    deleteUser,
    renderProfile,
    editProfile
}