import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Songs route');
});



export default router;