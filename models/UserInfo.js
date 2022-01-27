import mongoose from 'mongoose';
    
const UserSchema = new mongoose.Schema({
    name: String,
    link: String,
    phoneFirst: String,
    phoneSecond: String,
    createdAt: {
        type: Date,
        default: new Date().toLocaleString('en-US', {
            timeZone: 'America/Sao_Paulo'
        })
    }
})

const User = mongoose.models.User || mongoose.model('User', UserSchema)

export default User