const admin = require('../firebase/index');

// we need to check if the token is valid from firebase

exports.authCheck = (req, res, next) =>{
    console.log(req.headers); // token
    next();
}