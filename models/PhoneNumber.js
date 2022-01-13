import mongoose from 'mongoose';
    
const PhoneSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneFirst: String,
    phoneSecond: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Phone = mongoose.models.Phone || mongoose.model('Phone', PhoneSchema)

export default Phone