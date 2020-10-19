// to create the user we need to populate the infor from firebase in authmiddlewares
// and bring the model ==>

const User = require('../models/user');

exports.createOrUpdateUser = async  (req,res) => {
    const {name, picture, email} = req.user; // <== from firebase authmidleware
    // when we have thes info we need to create
                                            //find by email, updated name and picture that means
    const user = await User.findOneAndUpdate({email: email}, {name:name, picture:picture}, {new:true}) // if exist user from database updated with the new info!

    if(user){
        console.log('user updated', user)
        res.json(user)
    } else{
        const newUser = await new User({
            email,
            name,
            picture,
        }).save();
        console.log('user created', newUser)
        res.json(newUser)
    }
};