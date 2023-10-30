import mongoose from 'mongoose';

const vacacion = new mongoose.Schema({
    empleado_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'empleados',
        required: true
    },
    fecha_ingreso_trabajo:{
        type: String,
        required: true
    },
    fecha_inicio:{
        type: String,
        required: true
    },
    fecha_fin:{
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    }
})

export default mongoose.model('vacaciones', vacacion)