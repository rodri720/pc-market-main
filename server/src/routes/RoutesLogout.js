const express = require('express');
const { requiresAuth } = require('express-openid-connect');

const router = express.Router();

router.get('/', requiresAuth(), (req, res) => {
  req.logout(); 

  
  res.redirect('/');
});
router.post('/', requiresAuth(), (req, res) => {
    req.logOut();
  
    
    res.redirect("/");
  });
  
module.exports = router;