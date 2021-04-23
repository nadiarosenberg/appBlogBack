/*const router = require('express').Router();
const {Posts} = require('../database/db.js');
const {check, validationResult} = require('express-validator');

app.get('/', function(req, res){
  Post.create({
    post_title: 'Fideos',
    post_content: 'Estos son unos ricos fideos',
    post_image: 'Estos son unos lindos fideos',
    post_type: 'Receta',
    post_date: new Date(2021,4,21)
  }).then(()=>{
    console.log('Data added!');
  }).catch(error=>{
    console.log('Creation error', error);
  });
  Post.findAll().then(posts =>{
    res.json(posts);
  })
});*/