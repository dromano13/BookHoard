const Book = require('../models').Book;

const User = require('../models').User;

const Format = require('../models').Format;


const index = (req, res) => {
    Book.findAll()
    .then(allBooks => {
        res.render('index.ejs', {
            books : allBooks
        });
    })
};

const show = (req, res) => {
    Book.findByPk(req.params.index, {
        include : [
            {
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
            formats: allFormats
            });
        })
    })
}

const renderNew = (req, res) => {
    res.render('new.ejs');
}

const postBook = (req, res) => {
    Book.create(req.body)
    .then(newBook => {
        res.redirect('/books')
    })
}

const deleteBook = (req, res) => {

    Book.destroy({
        where: {id: req.params.index}
    })
    .then(() => {
        res.redirect('/books')
    })
}

const renderEdit = (req, res) => {
    Book.findByPk(req.params.index)
    .then(foundBook => {
        Format.findAll()
        .then(allFormats => {
            res.render('edit.ejs', {
                book: foundBook,
                formats: allFormats
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
        Format.findByPk(req.body.season)
        .then(foundFormat => {
            Book.findByPk(req.params.index)
            .then(foundBook => {
                foundBook.addFormat(foundFormat);
                res.redirect('/books')
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

