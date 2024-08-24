const express = require('express');
const authorController = require('../controllers/authorController');
const {uploadPhoto} = require('./../controllers/uploadController');

const router = express.Router();

router.route('/').get(authorController.getAllAuthors).post(uploadPhoto,authorController.createAuthor);

router.route('/:id').get(authorController.getAuthorById).put(uploadPhoto,authorController.updateAuthor).delete(authorController.deleteAuthor)



module.exports = router;
