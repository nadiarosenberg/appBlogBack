const router = require('express').Router();
const Post = require('../database/model.js'); //sin llaves se trae todo, con llaves se extrae solo el subvalor
const {check, validationResult} = require('express-validator');

/* POST/api/posts */
router.post('/import/', (req, res)=>{
    Post.create({
        post_title: req.body.title,
        post_content: req.body.content,
        post_image: req.body.image,
        post_type: req.body.type,
        post_date: req.body.date
    }).then(post =>{
        res.json(post)
    })
});

/* GET/api/posts //Show all posts: date, ID, title, image, type */
router.get('/list/', (req, res) =>{
    Post.findAll({ 
        attributes: ['id', 'post_title', 'post_image', 'post_type', 'post_date'] 
    }).then(post =>{
        res.json(post); //send to client the response as json 
    })
});

/* GET/api/posts/:id //If exists, show details */
router.get('/:id', (req, res) =>{
    Post.findOne(req.body, {
        where: {id: req.params.id}
    }).then(post =>{
        res.json(post);
    });
});

    /*
    if(id){
        res.json({success: 'This is the post'}); //send to the client the response as json 
    }else{
        res.json({error: 'The post does not exist'})
    } // update post si lo enviado desde el cliente coincide*/


/* PUT/api/posts/:id //If exists, update it */
router.put('/:id', (req, res) =>{
    Post.update(req.body, {
        where: {id: req.params.id}
    }).then(post =>{
        res.json(post);
    }); // update post si lo enviado desde el cliente coincide
});
    /*
    if(id){
        res.json({success: 'Post updated'}); //send to client the response as json 
    }else{
        res.json({error: 'The post does not exist'})
    } // update post si lo enviado desde el cliente coincide*/

/*DELETE/api/posts/:id //IF exists, delete it */
router.delete('/:id', (req, res) =>{
    Post.destroy({
        where: {id: req.params.id}
    }).then(post =>{
        res.json(post);
    }); 
    // delete post si lo enviado desde el cliente coincide
    /*if(id){
        res.json({success: 'Post deleted'}); //send to client the response as json 
    }else{
        res.json({error: 'The post does not exist'})
    } // update post si lo enviado desde el cliente coincide*/
});

module.exports = router;