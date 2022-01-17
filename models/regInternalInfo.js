import mongoose from 'mongoose';
    
const regInternalSchema = new mongoose.Schema({
    name: String,
    userType: String,
    temperature: String,
    hourEnter: String,
    hourLeft: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const regInternal = mongoose.models.regInternal || mongoose.model('regInternal', regInternalSchema)

export default regInternal