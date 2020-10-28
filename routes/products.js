const express = require('express');
const router = express.Router();

//middlewares
const { 

    authCheck,
    adminCheck 
    
} = require('../middlewares/auth');



// import controllers
const { create,
        
    } = require('../controllers/productsControllers');

router.post('/products', authCheck, adminCheck, create);

module.exports = router;