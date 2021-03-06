const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true},
  email: { type: String, required: true},
  password: { type: String, required: true},
  avatar: { type: String, default: '/assets/default-avatar.png' }
}, {
  id: false
});

userSchema.virtual('museums', {
  localField: '_id',
  foreignField: 'owner',
  ref: 'Museum'
});

userSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.password;
    return json;
  }
});


userSchema.virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfrimation){
    this._passwordConfirmation = passwordConfrimation;
  });

userSchema.pre('validate', function checkPasswordMatch(next){
  if(this.isModified('password') && this._passwordConfirmation !== this.password) {
    this.invalidate('passwordConfirmation', 'incorrect password match');
  }
  next();
});

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password,
      bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
