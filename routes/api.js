const router = require('express').Router();
const {Posts_table} = require('../db_config.js');
const {check, validationResult} = require('express-validator');

/* GET/api/posts //Show all posts: date, ID, title, image, type */
router.get('/api/posts', async(req, res) =>{
    const posts = await Posts_table.findAll({ attributes: ['id', 'post_title', 'post_image', 'post_type', 'post_date'] });
    res.json(posts); //send to client the response as json 
});

/* GET/api/posts/:id //If exists, show details */
router.get('/api/posts/:id', async(req, res) =>{
    await Posts_table.findById(req.body, {
        where: {id: req.params.post_id}
    });
    if(id){
        res.json({success: 'This is the post'}); //send to the client the response as json 
    }else{
        res.json({error: 'The post does not exist'})
    } // update post si lo enviado desde el cliente coincide
});

/* POST/api/posts */
router.post('/api/form', [
    check('post_image', 'Format must be .png, .jpg, .jpeg').not().isEmpty(),
    check('post_title', 'Obligatory field').not().isEmpty(),
    check('post_content', 'Obligatory field').not().isEmpty(),
], async(req, res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()}); 
    }
    const post = await Posts_table.create(req.body);
    res.json(posts); //send to client the response as json 
});

/* PUT/api/posts/:id //If exists, update it */
router.put('/api/posts/:id', async(req, res) =>{
    await Posts_table.update(req.body, {
        where: {id: req.params.post_id}
    }); // update post si lo enviado desde el cliente coincide
    if(id){
        res.json({success: 'Post updated'}); //send to client the response as json 
    }else{
        res.json({error: 'The post does not exist'})
    } // update post si lo enviado desde el cliente coincide
});

/*DELETE/api/posts/:id //IF exists, delete it */
router.delete('/api/posts/:id', async(req, res) =>{
    await Posts_table.destroy(req.body, {
        where: {id: req.params.post_id}
    }); // delete post si lo enviado desde el cliente coincide
    if(id){
        res.json({success: 'Post deleted'}); //send to client the response as json 
    }else{
        res.json({error: 'The post does not exist'})
    } // update post si lo enviado desde el cliente coincide
});

module.exports = router;