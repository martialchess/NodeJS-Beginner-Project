const User = require('../models/user');

exports.getLogin = (req, res, next) => {
    // const isLoggedIn = req
    // .get('Cookie')
    // .split(';')[4]
    // .trim()
    // .split('=')[1] === 'true';
    console.log(req.session.isLoggedIn);
    res.render('auth/login', {
        pageTitle: 'Login',
        path: '/login',
        isAuthenticated: false
    });
};

exports.postLogin = (req, res, next) => {
    // res.setHeader('Set-Cookie', 'loggedIn=true; HttpOnly');
    User.findById('68ee0eaf09c1b264f50bda62')
    .then(user => {
        req.session.isLoggedIn = true;
        req.session.user = user;
        req.session.save(err => {
            console.log(err);
            res.redirect('/');
        });
    })
    .catch(err => console.log(err));
};

exports.postLogout = (req, res, next) => {
    req.session.destroy((err) => {
        console.log(err);
        res.redirect('/');
    });
};