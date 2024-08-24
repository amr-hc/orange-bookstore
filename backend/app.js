const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Author, Book } = require('./models');

const app = express();
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:4200'
}));
// CRUD Operations for Authors

// Get all authors with pagination
app.get('/authors', async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const authors = await Author.findAndCountAll({
    limit: parseInt(limit),
    offset: (page - 1) * limit,
    include: ['books']
  });
  res.json(authors);
});

// Get author by ID
app.get('/authors/:id', async (req, res) => {
  const author = await Author.findByPk(req.params.id, {
    include: ['books']
  });
  if (author) {
    res.json(author);
  } else {
    res.status(404).send('Author not found');
  }
});

// Create a new author
app.post('/authors', async (req, res) => {
  const newAuthor = await Author.create(req.body);
  res.status(201).json(newAuthor);
});

// Update an author
app.put('/authors/:id', async (req, res) => {
  const author = await Author.findByPk(req.params.id);
  if (author) {
    await author.update(req.body);
    res.json(author);
  } else {
    res.status(404).send('Author not found');
  }
});

// Delete an author
app.delete('/authors/:id', async (req, res) => {
  const author = await Author.findByPk(req.params.id);
  if (author) {
    await author.destroy();
    res.status(204).send();
  } else {
    res.status(404).send('Author not found');
  }
});

// CRUD Operations for Books

// Get all books
app.get('/books', async (req, res) => {
  const books = await Book.findAll({ include: ['author'] });
  res.json(books);
});

// Get book by ID
app.get('/books/:id', async (req, res) => {
  const book = await Book.findByPk(req.params.id, { include: ['author'] });
  if (book) {
    res.json(book);
  } else {
    res.status(404).send('Book not found');
  }
});

// Create a new book
app.post('/books', async (req, res) => {
  const newBook = await Book.create(req.body);
  res.status(201).json(newBook);
});

// Update a book
app.put('/books/:id', async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if (book) {
    await book.update(req.body);
    res.json(book);
  } else {
    res.status(404).send('Book not found');
  }
});

// Delete a book
app.delete('/books/:id', async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if (book) {
    await book.destroy();
    res.status(204).send();
  } else {
    res.status(404).send('Book not found');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
