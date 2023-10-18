import mongoose from 'mongoose'

const admin = new mongoose.Schema({
        _id:{
            type: String,
            required: true,
        },
        usuario:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true
        }

})

export default mongoose.model('administradores', admin)