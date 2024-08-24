'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {

    toJSON() {
      const attributes = { ...this.get() };
      attributes.photo = `${process.env.BASE_URL || 'http://localhost:3000'}/images/books/${attributes.photo}`;
      return attributes;
    }
    static associate(models) {

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
    timestamps: false,
    sequelize,
    modelName: 'Book',
  });

  return Book;
};
