import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
  user: String,
  date: Date,
  location: String,
  amount: Number,
  description: String,
  budget: String,
  monthly: Boolean,
});
const Expense = mongoose.model('Expense', expenseSchema);
export default Expense;
