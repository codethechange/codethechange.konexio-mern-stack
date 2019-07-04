import token from '../services/token';
import User from '../models/user';
import { match2 } from '../matching';

export default {
    signup : (req, res, next) => {
        const { email, password, firstName, lastName, phoneNumber, isMentee, age, gender, english, french,
          other, course, skill1, skill2, skill3, skill4, skill5, countryOfOrigin, usersMatched } = req.body;

        if (!email || !password) {
            return res
                .status(422)
                .send({error: 'You must provide email and password.'});
        }
        User
            .findOne({
                email: email
            }, function (err, existingUser) {
                if (err) return res.status(422).send(err);
                if (existingUser) {
                    return res
                        .status(422)
                        .send({error: 'Email is in use'});
                }
                const user = new User({
                    name: {
                        first: firstName,
                        last: lastName
                    },
                    email: email,
                    password: password,
                    phone: {
                        number: phoneNumber
                    },
                    isMentee: isMentee,
                    age: age,
                    gender: gender,
                    languages: {
                        english: english,
                        french: french,
                        other: other
                    },
                    course: course,
                    skills: {
                        computerLiteracy: skill1,
                        coding: skill2,
                        education: skill3,
                        leadership: skill4,
                        personalDevelopment: skill5
                    },
                    countryOfOrigin: countryOfOrigin,
                    usersMatched: usersMatched
                })

                user.save(function (err, savedUser) {
                    if (err) {
                        return next(err)
                    }

                    res.json({
                        success: true,
                        token: token.generateToken(savedUser)
                    })
                })
            })
    },

    signin: (req, res, next) => {
        const email = req.body.email;
        const password = req.body.password;
        if (!email || !password) {
            return res
                .status(422)
                .send({error: 'You must provide email and password.'});
        }
        User
            .findOne({
                email: email
            }, function (err, existingUser) {
                if (err || !existingUser) {
                    return res.status(401).send(err || {error: "User Not Found"})
                }
                if (existingUser) {
                    existingUser.comparedPassword(password, function(err, good) {
                        if (err || !good) {
                                return res.status(401).send(err || 'User not found')
                            }

                            res.send({
                                token: token.generateToken(existingUser)
                            })
                    })
                }
            })
    },

    updateProfile: (req, res, next) => {
        req.user.comparedPassword(req.body.password, (err, good) => {
            if (err || !good) return res.status(401).send(err || 'Incorrect Password')
            const userId = req.user._id;
            const newProfile = {
                name: {
                    first: req.body.firstName,
                    last: req.body.lastName
                },
                isMentee: req.body.isMentee,
                age: req.body.age,
                gender: req.body.gender,
                languages: {
                    english: req.body.english,
                    french: req.body.french,
                    other: req.body.other
                },
                course: req.body.course,
                skills: {
                    computerLiteracy: req.body.skill1,
                    coding: req.body.skill2,
                    education: req.body.skill3,
                    leadership: req.body.skill4,
                    personalDevelopment: req.body.skill5
                },
                countryOfOrigin: req.body.countryOfOrigin,
                usersMatched: req.body.usersMatched
            };
            delete newProfile.email;
            delete newProfile.phone;
            delete newProfile.password;

            User.findByIdAndUpdate(userId, newProfile, {new: true})
            .then(newUser=>{
                res.sendStatus(200);
            })
            .catch(next)
        })
    },

    updateMatch: (req, res, next) => {
          const userId = req.user._id;
          console.log(userId);
          match2(userId);
          const newProfile = {
              name: {
                  first: req.body.firstName,
                  last: req.body.lastName
              },
              isMentee: req.body.isMentee,
              age: req.body.age,
              gender: req.body.gender,
              languages: {
                  english: req.body.english,
                  french: req.body.french,
                  other: req.body.other
              },
              course: req.body.course,
              skills: {
                  computerLiteracy: req.body.skill1,
                  coding: req.body.skill2,
                  education: req.body.skill3,
                  leadership: req.body.skill4,
                  personalDevelopment: req.body.skill5
              },
              countryOfOrigin: req.body.countryOfOrigin,
              usersMatched: req.body.usersMatched
          };
          //newProfile.usersMatched.push(userId);
          delete newProfile.email;
          delete newProfile.phone;
          delete newProfile.password;

          User.findByIdAndUpdate(userId, newProfile, {new: true})
          .then(newUser=>{
              res.sendStatus(200);
          })
          .catch(next)
  }

}
