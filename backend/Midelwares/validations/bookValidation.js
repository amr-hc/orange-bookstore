const {body} = require('express-validator');
const { Author } = require('../../models');


checkIdAuthor = async (value)=>{
    const author = await Author.findByPk(value);
    if (!author) {
      return Promise.reject('Author ID does not exist');
    }
}

exports.insert=[
    body('title').isLength({ min: 3 }).withMessage('Title must be at least 3 characters long'),
    body('description').optional().isLength({ max: 1000 }).withMessage('Description must be less than 1000 characters'),
    body('author_id').isInt().withMessage('Author ID must be a valid integer').custom(checkIdAuthor),
    body('pages').isInt({ min: 1 }).withMessage('Pages must be a positive integer'),
    body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number')
]

exports.update=[
    body('title').optional().isLength({ min: 3 }).withMessage('Title must be at least 3 characters long'),
    body('description').optional().isLength({ max: 1000 }).withMessage('Description must be less than 1000 characters'),
    body('author_id').optional().isInt().withMessage('Author ID must be a valid integer').custom(checkIdAuthor),
    body('pages').optional().isInt({ min: 1 }).withMessage('Pages must be a positive integer'),
    body('price').optional().isFloat({ min: 0 }).withMessage('Price must be a positive number')
]