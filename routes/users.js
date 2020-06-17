const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


router.delete('/:index', ctrl.users.deleteUser);
router.get('/profile/:index', ctrl.users.renderProfile);
router.put('/profile/:index', ctrl.users.editProfile);

module.exports = router;