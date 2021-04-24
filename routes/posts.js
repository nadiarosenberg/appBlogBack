const router = require('express').Router();
const Post = require('../database/model.js'); //sin llaves se trae todo, con llaves se extrae solo el subvalor
const {check, validationResult} = require('express-validator');

//Datos de prueba
Post.create({
        post_title: 'Fideos',
        post_content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit in aptent cubilia sagittis, justo id suspendisse quisque diam dui tempor scelerisque felis fames. Diam quis netus ac nisi vehicula ridiculus porta, sodales enim mauris blandit accumsan habitant rutrum vel, potenti arcu inceptos hac curabitur posuere. Ultricies cum congue rhoncus torquent, non auctor scelerisque. Eget ligula potenti parturient nisi pulvinar imperdiet vitae, platea non donec dui ac dapibus libero metus, pellentesque pharetra ullamcorper inceptos suspendisse porttitor. Nunc libero aenean erat placerat molestie tellus id curabitur pretium conubia sagittis nisi eleifend nullam eros, phasellus montes bibendum dapibus aptent fames neque arcu condimentum nostra semper vulputate egestas. Vivamus eu erat sollicitudin vulputate donec penatibus quis cras ultricies tempus vehicula, pulvinar taciti ante congue elementum mattis nam in praesent curae tristique aptent, ornare nisi sociosqu himenaeos bibendum nibh tellus conubia scelerisque fringilla.',
        post_image: 'https://recetasfideos.pro/wp-content/uploads/2019/08/tallarines-a-la-romana.jpg',
        post_type: 'Receta',
        post_date: '2021-04-21'
}).then(console.log);

Post.create({
        post_title: 'Carne',
        post_content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit in aptent cubilia sagittis, justo id suspendisse quisque diam dui tempor scelerisque felis fames. Diam quis netus ac nisi vehicula ridiculus porta, sodales enim mauris blandit accumsan habitant rutrum vel, potenti arcu inceptos hac curabitur posuere. Ultricies cum congue rhoncus torquent, non auctor scelerisque. Eget ligula potenti parturient nisi pulvinar imperdiet vitae, platea non donec dui ac dapibus libero metus, pellentesque pharetra ullamcorper inceptos suspendisse porttitor. Nunc libero aenean erat placerat molestie tellus id curabitur pretium conubia sagittis nisi eleifend nullam eros, phasellus montes bibendum dapibus aptent fames neque arcu condimentum nostra semper vulputate egestas. Vivamus eu erat sollicitudin vulputate donec penatibus quis cras ultricies tempus vehicula, pulvinar taciti ante congue elementum mattis nam in praesent curae tristique aptent, ornare nisi sociosqu himenaeos bibendum nibh tellus conubia scelerisque fringilla.',
        post_image: 'http://c.files.bbci.co.uk/3A14/production/_106486841_gettyimages-535786572.jpg',
        post_type: 'Receta',
        post_date: '2021-04-21'
}).then(console.log);

/* POST/api/posts/import */
router.post('/import/', (req, res)=>{
    Post.create({
        post_title: req.body.post_title,
        post_content: req.body.post_content,
        post_image: req.body.post_image,
        post_type: req.body.post_type,
        post_date: req.body.post_date
    }).then(post =>{
        res.json(post)
    }).catch('Error getting list');
});

/* GET/api/posts/list //Show all posts: date, ID, title, image, type */
router.get('/list/', (req, res) =>{
    Post.findAll({
        order: [
            ['post_date', 'DESC']
        ],
        attributes: ['id', 'post_title', 'post_image', 'post_type', 'post_date']
    }).then(post =>{
        res.json(post); //send to client the response as json 
    }).catch('Error getting posts'); 
});

/* GET/api/posts/:id //If exists, show details */
router.get('/:id', (req, res) =>{
    Post.findOne(req.body, {
        where: {id: req.params.id}
    }).then(post =>{
        res.json(post); //get post si lo enviado desde el cliente coincide
    }).catch('The post does not exist'); 
});

/* PUT/api/posts/:id //If exists, update it */
router.put('/:id', (req, res) =>{
    Post.update(req.body, {
        where: {id: req.params.id}
    }).then(post =>{
        res.json(post);// update post si lo enviado desde el cliente coincide
    });
});

/*DELETE/api/posts/:id //IF exists, delete it */
router.delete('/:id', (req, res) =>{
    Post.destroy({
        where: {id: req.params.id}
    }).then(post =>{
        res.json(post);    // delete post si lo enviado desde el cliente coincide
    }).catch('The post does not exist');
});

module.exports = router;