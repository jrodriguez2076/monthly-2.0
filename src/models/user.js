import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  password: String,
  email: String,
  avatar: String,
});
const User = mongoose.model('User', userSchema);
export default User;
