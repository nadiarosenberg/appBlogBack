const Sequelize = require('sequelize');
const Post_model = require('./models/post_table')

//Connection 
const sequelize = new Sequelize ('db_blog','root', '12345',{
    host: 'localhost',
    dialect: 'mysql'
});

//Table
const Posts_table = Post_model(sequelize, Sequelize);

sequelize.sync({force: false})
    .then(()=> {
        console.log('Table created!')
})

module.exports = {
    Posts_table
}

