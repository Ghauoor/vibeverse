const express = require('express');


const router = express.Router();

router.get('/', (req, res) => {
    res.send('Songs route');
});


module.exports = router;