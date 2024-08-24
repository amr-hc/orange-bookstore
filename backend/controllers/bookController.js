const { Book } = require('../models');
const uploadController = require('./uploadController');

exports.getAllBooks = async (req, res) => {
  const books = await Book.findAll({ include: ['author'] });
  res.json(books);
};

exports.getBookById = async (req, res) => {
  const book = await Book.findByPk(req.params.id, { include: ['author'] });
  if (book) {
    res.json(book);
  } else {
    res.status(404).send('Book not found');
  }
};

exports.createBook = async (req, res, next) => {
    try {

    await uploadController.saveImage("books", req, res);
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);

    } catch (error) {
      next(error);
    }

  };
  

exports.updateBook = async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if (book) {
    await book.update(req.body);
    res.json(book);
  } else {
    res.status(404).send('Book not found');
  }
};

exports.deleteBook = async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if (book) {
    await book.destroy();
    res.status(204).send();
  } else {
    res.status(404).send('Book not found');
  }
};
