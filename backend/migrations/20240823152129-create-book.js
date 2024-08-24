'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      photo: {
        type: Sequelize.STRING
      },
      pages: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.FLOAT
      },
      author_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Authors', 
          key: 'id',
        },
        onDelete: 'CASCADE',
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Books');
  }
};