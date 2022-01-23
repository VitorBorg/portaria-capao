import mongoose from 'mongoose';
    
const regExternalSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneFirst: String,
    temperature: String,
    hourEnter: String,
    hourLeft: String,
    createdAt: {
        type: Date,
        default: new Date().toLocaleString('en-US', {
            timeZone: 'America/Sao_Paulo'
        })
    }
})

const regExternal = mongoose.models.regExternal || mongoose.model('regExternal', regExternalSchema)

export default regExternal