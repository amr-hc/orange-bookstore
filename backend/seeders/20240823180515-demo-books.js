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
        photo: 'https://www.ts95studios.com/images/Subpage%20Images/graphic%20design/bookcovers/TheSecretLibrary_FantasyBookCoverDesign.jpg',
        pages: Math.floor(Math.random() * 100),
        price : (Math.random() * 1000).toFixed(2),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'A Game of Thrones',
        description: 'The first book in A Song of Ice and Fire series.',
        author_id: authorRows[Math.floor(Math.random() * 10)].id,
        photo: 'https://marketplace.canva.com/EAFfSnGl7II/2/0/1003w/canva-elegant-dark-woods-fantasy-photo-book-cover-vAt8PH1CmqQ.jpg',
        pages: Math.floor(Math.random() * 100),
        price : (Math.random() * 1000).toFixed(2),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Fellowship of the Ring',
        description: 'The first book in The Lord of the Rings series.',
        author_id: authorRows[Math.floor(Math.random() * 10)].id,
        photo: 'https://m.media-amazon.com/images/M/MV5BMTc3NTUzNTI4MV5BMl5BanBnXkFtZTgwNjU0NjU5NzE@._V1_FMjpg_UX1000_.jpg',
        pages: Math.floor(Math.random() * 100),
        price : (Math.random() * 1000).toFixed(2),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);




  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Books', null, {});


  }
};
