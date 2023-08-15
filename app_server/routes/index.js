const express = require('express');
const router = express.Router();

// Import controller methods
const shoppingController = require('../controller/shopping');
const othersController = require('../controller/others');

// Define routes

// Home page, assuming it showcases products
router.get('/', shoppingController.homePage);
router.get('/mens', shoppingController.showMensProducts);
router.get('/womens', shoppingController.showWomensProducts);
router.get('/kids', shoppingController.showKidsProducts);
router.get('/cart', shoppingController.showCart);
router.get('/login',shoppingController.login);
router.get('/register',shoppingController.register);
router.get('/products',shoppingController.showProductDetails);

// Other static pages
router.get('/about', othersController.showAbout);

// Export the router
module.exports = router;
