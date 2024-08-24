'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Authors', [
      {
        name: 'J.K. Rowling',
        bio: 'Author of the Harry Potter series',
        photo: 'default.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'George R.R. Martin',
        bio: 'Author of A Song of Ice and Fire',
        photo: 'default1.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'J.R.R. Tolkien',
        bio: 'Author of The Lord of the Rings',
        photo: 'default2.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Stephen King',
        bio: 'Author of many horror and suspense novels, including "The Shining".',
        photo: 'default1.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Agatha Christie',
        bio: 'Famous for her detective novels, including Hercule Poirot and Miss Marple.',
        photo: 'default1.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Isaac Asimov',
        bio: 'Renowned for his science fiction works and popular science books.',
        photo: 'default2.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ernest Hemingway',
        bio: 'Notable for his novels "The Old Man and the Sea" and "For Whom the Bell Tolls".',
        photo: 'default1.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'F. Scott Fitzgerald',
        bio: 'Best known for "The Great Gatsby".',
        photo: 'default2.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jane Austen',
        bio: 'Known for her novels "Pride and Prejudice" and "Sense and Sensibility".',
        photo: 'default1.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mark Twain',
        bio: 'Author of "The Adventures of Tom Sawyer" and "Adventures of Huckleberry Finn".',
        photo: 'default2.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Authors', null, {});
  }
};
