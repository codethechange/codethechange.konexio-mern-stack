import mongoose from 'mongoose';
import User from '../src/models/user'
/*
 * File: matching.js
 * -----------------
 * Presents the implementation of the matching algorithm.
 */

 function languageMatch(mentorLanguages, menteeLanguages) {
     let intersection = 0;
     if (menteeLanguages.english == true) {
         if (mentorLanguages.english == true) {
             intersection++;
         }
     }
     if (menteeLanguages.french == true) {
         if (mentorLanguages.french == true) {
             intersection++;
         }
     }
     if (intersection > 0) {
         return true;
     } else {
         return false;
     }
 }

// Implement the updated matching function here.
export function match2(userId) {

  // First, match2() finds data about the current user.
  User.findOne(
      { _id: userId },
      function(err, user) {
          err ? console.log(err) : findUsers(user, 'users', {}, doMatching)
      }
  );

  // Then, match2() finds the entire collection of users and starts matching with the callback.
  function findUsers(currUser, name, query, callback) {
      mongoose.connection.db.collection(name, function(err, collection) {
          collection.find(query).toArray(function(err, data) {
              if (err) {
                  console.log(err)
              } else {
                  //console.log(data);
                  callback(currUser, data);
              }
          });
      });
  }

  // Callback function; the matching process should be done here and log an ObjectId of the chosen user.
  let doMatching = (currUser, usersData) => {

      let candidates = [];
      if (currUser.isMentee) {
          for (let i = 0; i < usersData.length; i++) {
              if (!usersData[i].isMentee && typeof usersData[i].usersMatched != 'undefined' &&
                  usersData[i].usersMatched.length < 6) {
                      candidates.push(usersData[i]);
              }
          }
      } else {
          for (let i = 0; i < usersData.length; i++) {
              if (usersData[i].isMentee && typeof usersData[i].usersMatched != 'undefined' &&
                  usersData[i].usersMatched.length < 1) {
                      candidates.push(usersData[i]);
              }
          }
      };

      let language_match = [];
      for (let i = 0; i < candidates.length; i++) {
          if (languageMatch(candidates[i].languages, currUser.languages)) {
              language_match.push(candidates[i]);
          }
      }

      let intermediate = new Map();
      language_match.sort(function(user1, user2) {

              const skill1 = user1.skills;
              const skill2 = user2.skills;
              let intersection1 = 0;
              let intersection2 = 0;

              if (skill1.computerLiteracy && currUser.skills.computerLiteracy) {
                  intersection1++;
              }
              if (skill1.coding && currUser.skills.coding) {
                  intersection1++;
              }
              if (skill1.education && currUser.skills.education) {
                  intersection1++;
              }
              if (skill1.leadership && currUser.skills.leadership) {
                  intersection1++;
              }
              if (skill1.personalDevelopment && currUser.skills.personalDevelopment) {
                  intersection1++;
              }
              intermediate[user1._id] = intersection1;

              if (skill2.computerLiteracy && currUser.skills.computerLiteracy) {
                  intersection2++;
              }
              if (skill2.coding && currUser.skills.coding) {
                  intersection2++;
              }
              if (skill2.education && currUser.skills.education) {
                  intersection2++;
              }
              if (skill2.leadership && currUser.skills.leadership) {
                  intersection2++;
              }
              if (skill2.personalDevelopment && currUser.skills.personalDevelopment) {
                  intersection2++;
              }
              intermediate[user2._id] = intersection2;
              return intersection2 - intersection1;

      });

      let topPriority = intermediate[language_match[0]._id];
      let finalChoice = [];

      for (let i = 0; i < language_match.length; i++) {
          if (intermediate[language_match[i]._id] === topPriority) {
              finalChoice.push(language_match[i]);
          }
      }
      console.log(finalChoice[Math.floor(Math.random() * finalChoice.length)]._id);
  }
}

/* Example run */
//console.log(match(users, '7sq7biew9e08492lm2975e'));
