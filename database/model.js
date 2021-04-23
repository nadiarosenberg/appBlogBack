const {Model, DataTypes} = require('sequelize');
const sequelize = require('./db.js');

class Post extends Model{}

Post.init({
    post_title: DataTypes.STRING,
    post_content: DataTypes.TEXT,
    post_image: DataTypes.STRING,
    post_type: DataTypes.STRING,
    post_date: DataTypes.DATE,
},{
    sequelize,
    modelName: 'post'
});

module.exports = Post;