const admin = require('../firebase/index');

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