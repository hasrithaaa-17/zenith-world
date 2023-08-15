exports.homePage = (req, res) => {
    res.render('index');
};

// Display Men's Products
exports.showMensProducts = (req, res) => {
    res.render('mens');
};

// Display Women's Products
exports.showWomensProducts = (req, res) => {
    res.render('womens');
};

// Display Kids' Products
exports.showKidsProducts = (req, res) => {
    res.render('kids');
};

// Show Shopping Cart
// In this simple version, the cart is static and doesn't change
exports.showCart = (req, res) => {
    res.render('cart');
};

exports.login = (req, res) => {
    res.render('login');
}

exports.register = (req, res) => {
    res.render('register');
}

exports.showProductDetails = (req, res) => {
    res.render('product-details');
}