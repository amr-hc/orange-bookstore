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
        description: 'A young wizard\'s journey begins.',
        author_id: authorRows[Math.floor(Math.random() * 10)].id,
        photo: 'default1.jpg',
        pages: Math.floor(Math.random() * 100) + 100,
        price: (Math.random() * 1000).toFixed(2),
      },
      {
        title: 'A Game of Thrones',
        description: 'The first book in A Song of Ice and Fire series.',
        author_id: authorRows[Math.floor(Math.random() * 10)].id,
        photo: 'default2.webp',
        pages: Math.floor(Math.random() * 100) + 100,
        price: (Math.random() * 1000).toFixed(2),
      },
      {
        title: 'The Fellowship of the Ring',
        description: 'The first book in The Lord of the Rings series.',
        author_id: authorRows[Math.floor(Math.random() * 10)].id,
        photo: 'default3.jpg',
        pages: Math.floor(Math.random() * 100) + 100,
        price: (Math.random() * 1000).toFixed(2),
      },
      {
        title: 'Harry Potter and the Chamber of Secrets',
        description: 'The second book in the Harry Potter series.',
        author_id: authorRows[Math.floor(Math.random() * 10)].id,
        photo: 'default2.webp',
        pages: Math.floor(Math.random() * 100) + 100,
        price: (Math.random() * 1000).toFixed(2),
      },
      {
        title: 'A Clash of Kings',
        description: 'The second book in A Song of Ice and Fire series.',
        author_id: authorRows[Math.floor(Math.random() * 10)].id,
        photo: 'default3.jpg',
        pages: Math.floor(Math.random() * 100) + 100,
        price: (Math.random() * 1000).toFixed(2),
      },
      {
        title: 'The Two Towers',
        description: 'The second book in The Lord of the Rings series.',
        author_id: authorRows[Math.floor(Math.random() * 10)].id,
        photo: 'default1.jpg',
        pages: Math.floor(Math.random() * 100) + 100,
        price: (Math.random() * 1000).toFixed(2),
      },
      {
        title: 'Harry Potter and the Prisoner of Azkaban',
        description: 'The third book in the Harry Potter series.',
        author_id: authorRows[Math.floor(Math.random() * 10)].id,
        photo: 'default3.jpg',
        pages: Math.floor(Math.random() * 100) + 100,
        price: (Math.random() * 1000).toFixed(2),
      },
      {
        title: 'A Storm of Swords',
        description: 'The third book in A Song of Ice and Fire series.',
        author_id: authorRows[Math.floor(Math.random() * 10)].id,
        photo: 'default1.jpg',
        pages: Math.floor(Math.random() * 100) + 100,
        price: (Math.random() * 1000).toFixed(2),
      },
      {
        title: 'The Return of the King',
        description: 'The third book in The Lord of the Rings series.',
        author_id: authorRows[Math.floor(Math.random() * 10)].id,
        photo: 'default3.jpg',
        pages: Math.floor(Math.random() * 100) + 100,
        price: (Math.random() * 1000).toFixed(2),
      },
      {
        title: 'Harry Potter and the Goblet of Fire',
        description: 'The fourth book in the Harry Potter series.',
        author_id: authorRows[Math.floor(Math.random() * 10)].id,
        photo: 'default1.jpg',
        pages: Math.floor(Math.random() * 100) + 100,
        price: (Math.random() * 1000).toFixed(2),
      },
      {
        title: 'A Feast for Crows',
        description: 'The fourth book in A Song of Ice and Fire series.',
        author_id: authorRows[Math.floor(Math.random() * 10)].id,
        photo: 'default1.jpg',
        pages: Math.floor(Math.random() * 100) + 100,
        price: (Math.random() * 1000).toFixed(2),
      },
      {
        title: 'The Hobbit',
        description: 'A prelude to The Lord of the Rings series.',
        author_id: authorRows[Math.floor(Math.random() * 10)].id,
        photo: 'default3.jpg',
        pages: Math.floor(Math.random() * 100) + 100,
        price: (Math.random() * 1000).toFixed(2),
      },
    ]);
  

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Books', null, {});

  }
};
