const express = require('express');
const bookController = require('../controllers/bookController');
const {uploadPhoto} = require('./../controllers/uploadController');
const bookValidation = require('./../Midelwares/validations/bookValidation');
const validatorResult = require('./../Midelwares/validations/validatorResult');



const router = express.Router();

router.route('/').get(bookController.getAllBooks).post(uploadPhoto,bookValidation.insert,validatorResult,bookController.createBook);

router.route('/:id').get(bookController.getBookById).put(uploadPhoto,bookValidation.update,validatorResult,bookController.updateBook).delete(bookController.deleteBook)


module.exports = router;
