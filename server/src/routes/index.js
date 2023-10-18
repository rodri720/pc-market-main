const { Router } = require("express");
const { getUser } = require('../Controllers/getUser');
const { getProducts } = require('../Controllers/getProducts');
const router = Router();

router.get('/users/:id', getUser);
router.get('/products', getProducts);

module.exports = router; // Export the 'router' object without calling it as a function
