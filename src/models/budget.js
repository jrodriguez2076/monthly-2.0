import mongoose from 'mongoose';

const budgetSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  description: String,
  icon: String,
});
const Budget = mongoose.model('Budget', budgetSchema);
export default Budget;
