//Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database/db');
const Post = require('./database/model.js');
var mysql = require('mysql2');
var path = require('path');
var logger = require('morgan');

//Routes
const apiRouter = require('./routes/posts');
const { rootCertificates } = require('tls');

var app = express();

//Port settings
const PORT = process.env.PORT || 8080;

//Middleware (para poder rellenar el req.body)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/*app.use(logger('dev'));*/

//Routes
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/posts', require('./routes/posts'));

//Server
app.listen(PORT, function(){
  console.log(`App: http://localhost:${PORT}`);
  //Check database connection
  sequelize.sync({force: false}).then(()=>{ //con sync force:true borra la tabla si existe y despues la crea
    console.log('Connected!');
    }).catch(error=>{
    console.log('Connection error', error);
  });
});

app.use(bodyParser.urlencoded({extended:true}));

module.exports = app;
