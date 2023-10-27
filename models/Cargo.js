import mongoose from "mongoose";

const cargo = new mongoose.Schema({
    _id:{
        type: String,
        required: true,
    },
    nombre_cargo:{
        type: String,
        required: true,
    },
    descripcion:{
        type: String,
        required: true,
    }
})

export default mongoose.model('cargos', cargo)