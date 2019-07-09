import Authentication from '../controllers/authentication';
import User from '../models/user';

const router = require('express').Router();

router.get('/', (req, res)=>{
    res.send('connected');
})

router.get('/userProfile', (req, res)=>{
    res.send(req.user);
})

router.get('/userProfile/match', (req, res)=>{
    const { usersMatched } = req.user;
    //console.log(usersMatched);
    let matches = [];
    if (usersMatched.length === 0) {
        res.send(matches);
    } else {
        usersMatched.forEach(function(userId) {
            User.findOne(
                { _id: userId },
                function(err, user) {
                    err ? res.status(422).send({error: 'Cannot get user matches.'}) : matches.push(user);
                    if (usersMatched.length === matches.length) res.send(matches);
                }
            )
        })
    }
})

router.post('/userProfile', Authentication.updateProfile)

router.post('/userProfile/match', Authentication.updateMatch)

export default router;
