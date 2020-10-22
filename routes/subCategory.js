const express = require('express');
const router = express.Router();

//middlewares
const { 

    authCheck,
    adminCheck 
    
} = require('../middlewares/auth');



// import controllers
const { createSubCategory,
        readSubCategory, 
        updateSubCategory, 
        removeSubCategory, 
        listSubCategories 
    } = require('../controllers/subCategoryControllers');

router.post('/sub', authCheck, adminCheck, createSubCategory);
router.get('/subs', listSubCategories);
router.get('/sub/:slug', readSubCategory);
router.put('/sub/:slug', authCheck, adminCheck, updateSubCategory);
router.delete('/sub/:slug', authCheck, adminCheck, removeSubCategory);

module.exports = router;
