import express from 'express';


const router = express.Router();

router.get('/', (req, res) => {
    res.send('Auth Route');
});



export default router;