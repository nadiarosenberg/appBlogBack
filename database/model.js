const {Model, DataTypes} = require('sequelize');
const sequelize = require('./db.js');

class Post extends Model{}

Post.init({
    post_title: {
        type: DataTypes.STRING,
        //defaultValue: 'Titulo'
        allowNull: false
    },
    post_content: {
        type: DataTypes.TEXT,
        //defaultValue: 'Content'
        allowNull: false
    },
    post_image: {
        type: DataTypes.STRING,
        //defaultValue: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2020/04/como-congelar-pure-de-papa-drong.jpg'
    },
    post_type: {
        type: DataTypes.STRING,
        //defaultValue: 'Receta'
    },
    post_date:{
        type: DataTypes.DATE,
        //defaultValue: '2021-04-21'
    } 
},{
    sequelize,
    modelName: 'post'
});


module.exports = Post;