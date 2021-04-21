module.exports = (sequelize, type) =>{
    return sequelize.define('post',{
       id:{
            type: type.INTEGER,
            primeryKey: true,
            allowNull: false,
            primaryKey: true,
        },
        post_title: type.STRING,
        post_content: type.STRING,
        post_image: type.STRING,
        post_type: type.STRING,
        post_date: type.DATE,
    })
}