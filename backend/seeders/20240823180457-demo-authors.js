'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Authors', [
      {
        name: 'J.K. Rowling',
        email: 'jkrowling@example.com',
        bio: 'Author of the Harry Potter series',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'George R.R. Martin',
        email: 'grrm@example.com',
        bio: 'Author of A Song of Ice and Fire',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'J.R.R. Tolkien',
        email: 'tolkien@example.com',
        bio: 'Author of The Lord of the Rings',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Stephen King',
        email: 'sking@example.com',
        bio: 'Author of many horror and suspense novels, including "The Shining".',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Agatha Christie',
        email: 'achristie@example.com',
        bio: 'Famous for her detective novels, including Hercule Poirot and Miss Marple.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Isaac Asimov',
        email: 'iasimov@example.com',
        bio: 'Renowned for his science fiction works and popular science books.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ernest Hemingway',
        email: 'ehemingway@example.com',
        bio: 'Notable for his novels "The Old Man and the Sea" and "For Whom the Bell Tolls".',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'F. Scott Fitzgerald',
        email: 'fscott@example.com',
        bio: 'Best known for "The Great Gatsby".',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jane Austen',
        email: 'jausten@example.com',
        bio: 'Known for her novels "Pride and Prejudice" and "Sense and Sensibility".',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mark Twain',
        email: 'mtwain@example.com',
        bio: 'Author of "The Adventures of Tom Sawyer" and "Adventures of Huckleberry Finn".',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Authors', null, {});
  }
};
