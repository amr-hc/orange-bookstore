'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define association here
      Book.belongsTo(models.Author, {
        foreignKey: 'author_id',
        as: 'author',
      });
    }
  }

  Book.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pages: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Book',
  });

  return Book;
};
