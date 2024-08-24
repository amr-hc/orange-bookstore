const {body} = require('express-validator');

exports.insert=[
    body("name").isAlpha().withMessage("name must be string").isLength({min:3}).withMessage("Must be at least 3 characters"),
    body('bio').optional().isLength({ max: 500 }).withMessage('Bio must be less than 500 characters'),

]

exports.update=[
    body("name").optional().isAlpha().withMessage("name must be string").isLength({min:3}).withMessage("Must be at least 3 characters"),
    body('bio').optional().isLength({ max: 500 }).withMessage('Bio must be less than 500 characters'),
]