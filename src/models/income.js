import mongoose from 'mongoose';

const incomeSchema = new mongoose.Schema({
  user: String,
  amount: Number,
  description: String,
  monthly: Boolean,
});
const Income = mongoose.model('Income', incomeSchema);
export default Income;
