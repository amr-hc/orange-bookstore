const express = require('express');
const bookController = require('../controllers/bookController');
const uploadController = require('./../controllers/uploadController');

const router = express.Router();

router.route('/').get(bookController.getAllBooks).post(uploadController.uploadPhoto,bookController.createBook);

router.route('/:id').get(bookController.getBookById).put(bookController.updateBook).delete(bookController.deleteBook)


module.exports = router;
