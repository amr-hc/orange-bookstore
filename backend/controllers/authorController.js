const { Author } = require('../models');

exports.getAllAuthors = async (req, res) => {
  const { page = 1, limit = 100 } = req.query;
  const authors = await Author.findAndCountAll({
    limit: parseInt(limit),
    offset: (page - 1) * limit,
    include: ['books'],
    distinct: true
  });
  res.json(authors);
};

exports.getAuthorById = async (req, res) => {
  const author = await Author.findByPk(req.params.id, {
    include: ['books']
  });
  if (author) {
    res.json(author);
  } else {
    res.status(404).send('Author not found');
  }
};

exports.createAuthor = async (req, res) => {
  const newAuthor = await Author.create(req.body);
  res.status(201).json(newAuthor);
};

exports.updateAuthor = async (req, res) => {
  const author = await Author.findByPk(req.params.id);
  if (author) {
    await author.update(req.body);
    res.json(author);
  } else {
    res.status(404).send('Author not found');
  }
};

exports.deleteAuthor = async (req, res) => {
  const author = await Author.findByPk(req.params.id);
  if (author) {
    await author.destroy();
    res.status(204).send();
  } else {
    res.status(404).send('Author not found');
  }
};
