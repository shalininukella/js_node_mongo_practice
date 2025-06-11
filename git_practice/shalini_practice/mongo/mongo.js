import mogoose from 'mongoose';

mongoose.connect('connection string')
    .then(() => console.log('connected'))
    .catch((e) => console.error(e));

const UserSchema = new mongoose.Schema({
    name:String,
    age: Number,
});

const User = mongoose.model('User', UserSchema);