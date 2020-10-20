const admin = require('../firebase/index');
const User = require('../models/user');
// we need to check if the token is valid from firebase

exports.authCheck = async (req, res, next) =>{
    //console.log(req.headers); // token
    try {
        const firebaseUser = await admin
        .auth()
        .verifyIdToken(req.headers.authtoken);
        //console.log('firebase user in authcheck', firebaseUser)
        // now how we have the info.. we need to put this in our database ad create an user with the same info!
        req.user = firebaseUser;
        next()
    } catch (error) {
        res.status(401).json({
            error:'Invalid or expired token'
        });
    }
};

// to know if hte user that will do the request is admin!


exports.adminCheck = async(req,res,next) => {
    const { email } = req.user
    
    const adminUser = await User.findOne({email: email}).exec()

    if(adminUser.role !== 'admin'){
        res.status(403).json({
            err:'Admin Resource. Access denied.'
        })
    } else{
        next();
    }
}