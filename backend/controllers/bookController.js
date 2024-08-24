const path = require('path');
const fs = require('fs');
const uploadController = require('./uploadController');
const { Book } = require('../models');
const { Op } = require('sequelize');


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
    if (req.file){
      await uploadController.saveImage("books", req, res);
    }else{
      req.body.photo="default.jpg";
    }
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);

    } catch (error) {
      next(error);
    }

  };
  

exports.updateBook = async (req, res) => {
  const book = await Book.findByPk(req.params.id);

  if (book) {

    if (req.file){

      await uploadController.saveImage("books", req, res);

      if(book.photo != "default.jpg"){

        const oldPhotoPath = path.join(__dirname, '..', 'images', 'books', book.photo);
        
        if (fs.existsSync(oldPhotoPath)) {
          fs.unlinkSync(oldPhotoPath);
        }

      }

    }

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


exports.searchBookByTitle = async (req, res) => {
  try {
      const title = req.params.title;
      const books = await Book.findAll({
        where: {
          title: {
            [Op.like]: `%${title}%`
          }
        },
        include: ['author']
      });
    

      res.status(200).json(books);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
}
