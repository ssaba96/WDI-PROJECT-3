const mongoose = require('mongoose');
// const bcrpyt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true},
  email: { type: String, required: true},
  password: { type: String, required: true}
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
