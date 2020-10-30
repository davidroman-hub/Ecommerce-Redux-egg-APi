const express = require('express');
const router = express.Router();

//middlewares
const { 

    authCheck,
    adminCheck 
    
} = require('../middlewares/auth');



// import controllers
const { create,
        read,
        
    } = require('../controllers/productsControllers');

router.post('/product', authCheck, adminCheck, create);
router.get('/products', read);
module.exports = router;