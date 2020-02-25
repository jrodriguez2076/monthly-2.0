import mongoose from 'mongoose';

import Income from './income';
import Expense from './expense';
import Budget from './budget';
import User from './user';


const connectDb = () => {
  console.log("trying to connect to" + process.env.DATABASE_URL)
  return mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true});
};
const models = { Income, Expense, Budget, User };

export { connectDb };
export default models;