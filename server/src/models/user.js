import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

// Define the model
const userSchema = new mongoose.Schema({
    name: {
        first: String,
        last: String,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    emailVerified: {
        type: Boolean,
        default: false
    },
    phone: {
        number: {
            type: String
        },
        verified: {
            type: Boolean,
            default: false
        }
    },
    isMentee: Boolean,
    age: Number,
    gender: String,
    languages: {
        english: {
            type: Boolean,
            default: false
        },
        french: {
            type: Boolean,
            default: false
        },
        other: {
            type: Boolean,
            default: false
        }
    },
    course: String,
    skills: {
      computerLiteracy: {
        type: Boolean,
        default: false
      },
      coding: {
        type: Boolean,
        default: false
      },
      education: {
        type: Boolean,
        default: false
      },
      leadership: {
        type: Boolean,
        default: false
      },
      personalDevelopment: {
        type: Boolean,
        default: false
      }
    },
    countryOfOrigin: String,
    usersMatched: [{type: mongoose.Schema.Types.ObjectId}],
    password: String
})

userSchema.pre('save', function(next){
    // get access to user model, then we can use user.email, user.password
    const user = this;

    bcrypt.genSalt(10, function(err, salt){
        if (err) { return next(err) }

        bcrypt.hash(user.password, salt, null, function(err, hash){
            if (err) { return next(err); }

            user.password = hash;
            next()
        })
    })
})

// Make use of methods for comparedPassword
userSchema.methods.comparedPassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, good){
        if (err ) { return cb(err)};
        cb(null, good);
    })
}

// Export the model
export default (mongoose.models && mongoose.models.User
  ? mongoose.models.User 
  : mongoose.model('User', userSchema));
