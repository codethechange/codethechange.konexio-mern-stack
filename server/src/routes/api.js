import Authentication from '../controllers/authentication';

const router = require('express').Router();

router.get('/', (req, res)=>{
    res.send('connected');
})

router.get('/userProfile', (req, res)=>{
    res.send(req.user);
})

router.post('/userProfile', Authentication.updateProfile)

router.post('/userProfile/match', Authentication.updateMatch)

export default router;
