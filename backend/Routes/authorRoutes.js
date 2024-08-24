const express = require('express');
const authorController = require('../controllers/authorController');
const {uploadPhoto} = require('./../controllers/uploadController');
const authorValidation = require('./../Midelwares/validations/authorValidation');
const validatorResult = require('./../Midelwares/validations/validatorResult');



const router = express.Router();

router.route('/').get(authorController.getAllAuthors).post(uploadPhoto,authorValidation.insert,validatorResult,authorController.createAuthor);

router.route('/:id').get(authorController.getAuthorById).put(uploadPhoto,authorValidation.update,validatorResult,authorController.updateAuthor).delete(authorController.deleteAuthor)



module.exports = router;
