import mongoose from "mongoose";

const empleado = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido_paterno:{
        type: String,
        required: true
    },
    apellido_materno:{
        type: String,
        required: true
    },
    cargo:{
        type: String,
        required: true
    },
    celular:{
        type: String,
        required: true
    },
    informacion_detallada:{
        fecha_nacimiento:{
            type: String,
        },
        tipo_documento:{
            type: String,
        },
        numero_identificacion:{
            type: String,
        },
        tipo_sangre:{
            type: String,
        },
        estado_civil:{
            type: String,
        },
        genero:{
            type: String,
        },
        nivel_estudios:{
            type: String,
        },
        direccion:{
            calle:{
                type: String
            },
            ciudad:{
                type: String
            },
            municipio:{
                type: String,
            },
            codigo_postal:{
                type: String
            },
            pais:{
                type: String
            }
        }
    }
},{ select: true});

export default mongoose.model('empleados', empleado)