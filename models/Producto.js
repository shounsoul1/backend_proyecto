import mongoose from 'mongoose'

const producto = new mongoose.Schema({  
    tipo: {
        type: String,
        required: true
    },
    nombre:{
        type: String,
        required: true
    } ,
    descripcion:{
        type: String,
        required: true
    } ,
    imagen:{
        type: String,
        required: true
    } ,
    precio:{
        type: String,
        required: true
    } 
});

export default mongoose.model('productos', producto)