const express = require('express');
const bookController = require('../controllers/bookController');
const {uploadPhoto} = require('./../controllers/uploadController');

const router = express.Router();

router.route('/').get(bookController.getAllBooks).post(uploadPhoto,bookController.createBook);

router.route('/:id').get(bookController.getBookById).put(uploadPhoto,bookController.updateBook).delete(bookController.deleteBook)


module.exports = router;
