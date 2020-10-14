const express = require('express');
const router = express.Router();

router.get('/create-or-update-user', (req,res) => {
    res.json({
        data:'you hit create-or-update node app'
    })
})


module.exports = router;