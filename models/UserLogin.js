import mongoose from 'mongoose';
    
const UserSchema = new mongoose.Schema({
    name: String,
    password: String,
    link: String,
}, {timestamps: true})

const UserData = mongoose.models.UserData || mongoose.model('UserData', UserSchema)

export default UserData