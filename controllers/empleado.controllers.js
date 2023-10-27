import Empleado from "../models/Empleado.js";

export const obtenerEmpleados = async (req,res)=>{
    try{
        const empleado = await Empleado.find();
        if(!empleado){
            res.status(404).json({message: 'No se encontro ningun empleado'})
        }else{
            console.log(empleado)
            res.status(200).json(empleado)
        }
    }catch(error){
        res.status(501).json(error)
    }
}

export const obtenerEmpleadoPorId = async (req,res)=>{
    try{
        const id = req.params.id;
        const empleado = await Empleado.findById(id)
        if(!empleado){
            res.status(404).json({message: 'Empleado no encontrado'})
        }else{
            res.status(200).json(empleado)
            console.log(empleado)
        }
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}

export const crearEmpleado = async (req,res)=>{
    try{
        const {nombre, apellido_paterno, apellido_materno, cargo, celular, informacion_detallada} = req.body;
        const nuevoEmpleado = new Empleado({
            nombre,
            apellido_paterno,
            apellido_materno,
            cargo,
            celular,
            informacion_detallada: {
                fecha_nacimiento,
                tipo_documento,
                numero_identificacion,
                tipo_sangre,
                estado_civil,
                genero,
                nivel_estudios,
                direccion: {
                    calle,
                    ciudad,
                    municipio,
                    codigo_postal,
                    pais
                }
            }
        });
        await nuevoEmpleado.save();
        res.status(200).json(nuevoEmpleado);
    }catch(error){
        console.log(error)
        res.status(500).json({message: `No se pudo crear el empleado ${error}`})
    }
}

export const actualizarEmpleado = async (req,res)=>{
    try{
        const id = req.params.id;
        const empleadoActualizado = req.body;
        const result = await Empleado.findByIdAndUpdate(id, empleadoActualizado, {new:true})
        if(!result){
            res.status(404).json({message: 'Empleado no encontrado'})
        }else{
            res.status(200).json(result)
            console.log(result)
        }
    }catch(error){
        console.log(error)
    }
}

export const borrarEmpleado = async (req,res)=>{
    try{
        const empleadoEliminado = await Empleado.findByIdAndDelete(req.params.id)
        if(!empleadoEliminado){
            res.status(404).json({message: 'Empleado no encontrado'})
        }else{
            res.status(200).json({message: 'Empleado eliminado con éxito', empleado: empleadoEliminado})
            console.log(empleadoEliminado)
        }
    }catch(error){
        console.log(error)
        res.status(500).json({message: 'Internal server error'})
    }
}

export default {
    obtenerEmpleados,
    obtenerEmpleadoPorId,
    crearEmpleado,
    actualizarEmpleado,
    borrarEmpleado
}