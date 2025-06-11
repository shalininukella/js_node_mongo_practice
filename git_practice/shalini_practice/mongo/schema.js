import mongoose from 'mongoose';

const USerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },
    email:{
        type : String,
        required: true,
        unique: true,
    },
    age:{
        type : Number,
        min:0
    }
})

const User = mongoose.model('User', USerSchema);

export default User;