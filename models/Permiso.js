import mongoose from "mongoose";

const permiso = new mongoose.Schema({
    empleado_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'empleados',
        required: true
    },
    tipo_permiso:{
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    justificante:{
        type: String,
        required: true
    },
    nombre:{
        type: String,
        required: true
    }
})

export default mongoose.model('permisos', permiso)