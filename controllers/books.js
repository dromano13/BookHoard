const Book = require('../models').Book;

const User = require('../models').User;

const Format = require('../models').Format;

const jwt = require('jsonwebtoken');


const index = (req, res) => {
    Book.findAll()
    .then(allBooks => {
        res.render('index.ejs', {
            books : allBooks,
            token: req.query.token
        });
    })
};

const show = (req, res) => {
    Book.findByPk(req.params.index, {
        include : [{
            model: User,
            attributes: ['name']
            },
            {
                model: Format
            }
        ],
         attributes: ['title', 'author', 'genre', 'img']
    })
    .then(foundBook => {
        Format.findAll()
        .then(allFormats => {
            res.render('show.ejs', {
            book: foundBook,
            formats: allFormats,
            token: req.query.token
            });
        })
    })
}

const renderNew = (req, res) => {
    res.render('new.ejs', {
        token: req.query.token
    });
}

const postBook = (req, res) => {
    req.body.userId=req.user.id;
    if(!req.body.img) {
        delete req.body.img
    }
    Book.create(req.body)
    .then(newBook => {
        res.redirect(`/books/?token=${req.query.token}`)
    })
}

const deleteBook = (req, res) => {
    Book.destroy({
        where: {id: req.params.index}
    })
    .then(() => {
        res.redirect(`/books/?token=${req.query.token}`)
    })
}

const renderEdit = (req, res) => {
    Book.findByPk(req.params.index, {
        include: [Format]
    })
    .then(foundBook => {
        Format.findAll()
        .then(allFormats => {
            res.render('edit.ejs', {
                book: foundBook,
                formats: allFormats,
                token: req.query.token,
                userId: req.params.id
            });
        })
    })
}

const editBook = (req, res) => {
    Book.update(req.body, {
        where: {id: req.params.index},
        returning: true
    })
    .then(updatedBook => {
        Format.findByPk(req.body.format)
        .then(foundFormat => {
            Book.findByPk(req.params.index)
            .then(foundBook => {
                foundBook.addFormat(foundFormat);
                res.redirect(`/users/profile/${req.params.id}?token=${req.query.token}`)
            })
        })
    })
}

module.exports = {
    index,
    show,
    renderNew,
    postBook,
    deleteBook,
    renderEdit,
    editBook
}
