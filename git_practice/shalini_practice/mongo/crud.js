// filename: mongoose-crud-example.js

import mongoose from 'mongoose';

async function main() {
  // 1. Connect to MongoDB
  await mongoose.connect('mongodb://localhost:27017/mydb');
  console.log('Connected to MongoDB');

  // 2. Define a schema
  const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
  });

  // 3. Create a model
  const User = mongoose.model('User', userSchema);

  // 4. CREATE
  const newUser = new User({ name: 'Ram', age: 25 });
  await newUser.save();
  console.log('User created:', newUser);

  // 5. READ
  const usersOver20 = await User.find({ age: { $gt: 20 } });
  console.log('Users over 20:', usersOver20);

  // 6. UPDATE
  await User.updateOne({ name: 'Ram' }, { $set: { age: 26 } });
  console.log('Updated Ram\'s age to 26');

  // 7. READ single user
  const ram = await User.findOne({ name: 'Ram' });
  console.log('Ram:', ram);

  // 8. DELETE
  await User.deleteOne({ name: 'Ram' });
  console.log('Deleted user Ram');

  // 9. Close connection
  await mongoose.connection.close();
  console.log('Connection closed');
}

main().catch(err => console.error(err));
