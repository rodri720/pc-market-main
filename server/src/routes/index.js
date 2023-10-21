const { Router } = require("express");
const { getUser } = require('../Controllers/getUser');
const { getProducts } = require('../Controllers/getProducts');
const  postProducts  = require('../Controllers/postProducts'); 
const { postUser } = require('../Controllers/postUser');
const router = Router();

router.get('/users', getUser);
router.get('/products', getProducts);
router.post('/products', postProducts); 
router.post('/users', postUser);
    
module.exports = router;
