'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  
  class Author extends Model {


    toJSON() {
      const attributes = { ...this.get() };
      attributes.photo = `${process.env.BASE_URL || 'http://localhost:3000'}/images/authors/${attributes.photo}`;
      return attributes;
    }

    static associate(models) {

      Author.hasMany(models.Book, {
        foreignKey: 'author_id',
        as: 'books' 
      });
      
    }
  }

  Author.init({
    name: DataTypes.STRING,
    photo: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Author',
  });
  return Author;
};