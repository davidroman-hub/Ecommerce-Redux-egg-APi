const express = require('express');
const router = express.Router();

//middlewares
const { 

    authCheck,
    adminCheck 
    
} = require('../middlewares/auth');



// import controllers
const { createCategory,
        readCategory, 
        updateCategory, 
        removeCategory, 
        listCategories 
    } = require('../controllers/categoryControllers');

router.post('/category', authCheck, adminCheck, createCategory);
router.get('/categories', authCheck, adminCheck, listCategories);
router.get('/category/:slug', authCheck, adminCheck, readCategory);
router.put('/category/:slug', authCheck, adminCheck, updateCategory);
router.delete('/category:slug', authCheck, adminCheck, removeCategory);

module.exports = router;
