import mongoose from 'mongoose';

import Income from './income';
import Expense from './expense';
import Budget from './budget';


const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true});
};
const models = { Income, Expense, Budget };

export { connectDb };
export default models;