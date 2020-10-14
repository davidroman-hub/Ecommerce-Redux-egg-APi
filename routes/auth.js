const express = require('express');
const router = express.Router();

//middlewares
const {authCheck} = require('../middlewares/auth');


// import controllers
const {createOrUpdateUser} = require('../controllers/authControllers');

router.post('/create-or-update-user', authCheck, createOrUpdateUser );


module.exports = router;
