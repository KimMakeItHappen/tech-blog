const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Comment extends Model {}

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
    blog_id: {
      references: {
        model: "post",
        key: "id"
      }
    } 
  },
  {
    sequelize
  }
);

module.exports = Comment;