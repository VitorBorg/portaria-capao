import mongoose from 'mongoose';
    
const ClientSchema = new mongoose.Schema({
    name: String,
    temperature: String,
    hourEnterFinal: String,
    hourLeftFinal: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Client = mongoose.models.Client || mongoose.model('Client', ClientSchema)

export default Client