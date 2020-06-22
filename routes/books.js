const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.books.index);
router.get('/new', ctrl.books.renderNew);
router.get('/:index', ctrl.books.show);
router.post('/', ctrl.books.postBook);
router.delete('/:index', ctrl.books.deleteBook);
router.get('/:index/edit', ctrl.books.renderEdit);
router.put('/:index', ctrl.books.editBook);

module.exports = router;