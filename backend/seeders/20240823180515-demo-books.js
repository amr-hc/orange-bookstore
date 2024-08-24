'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const authors = await queryInterface.sequelize.query(
      `SELECT id from Authors;`
    );

    const authorRows = authors[0];

    await queryInterface.bulkInsert('Books', [
      {
        title: 'Harry Potter and the Philosopher\'s Stone',
        description: 'A young wizard journey begins.',
        author_id: authorRows[Math.floor(Math.random() * 10)].id,
        photo: 'default1.jpg',
        pages: Math.floor(Math.random() * 100),
        price : (Math.random() * 1000).toFixed(2),
      },
      {
        title: 'A Game of Thrones',
        description: 'The first book in A Song of Ice and Fire series.',
        author_id: authorRows[Math.floor(Math.random() * 10)].id,
        photo: 'default2.webp',
        pages: Math.floor(Math.random() * 100),
        price : (Math.random() * 1000).toFixed(2),
      },
      {
        title: 'The Fellowship of the Ring',
        description: 'The first book in The Lord of the Rings series.',
        author_id: authorRows[Math.floor(Math.random() * 10)].id,
        photo: 'default3.jpg',
        pages: Math.floor(Math.random() * 100),
        price : (Math.random() * 1000).toFixed(2),
      },
    ]);

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Books', null, {});

  }
};
