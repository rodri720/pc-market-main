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

router.get('/profile', (req, res) => {
    if (req.session.login) {
        res.render('shop/profile');
    } else {
        res.send('Please login to view this page!');
    }
    res.end();  
});

router.post('/logout', (req, res) => {
    req.logOut();
    res.redirect("/"); 
  });
  
module.exports = router;
