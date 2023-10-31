import Permiso from "../models/Permiso.js";

export const obtenerPermisos = async (req,res)=>{
    try {
        const permiso = await Permiso.find().populate('empleado_id').exec();
        console.log(permiso);
        if(!permiso){
            res.status(404).json({message: 'No existen registros de permisos'})
        }else{
            res.status(200).json(permiso);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const obtenerPermisoId = async (req,res) =>{
    try {
        const id = req.params.id;
        const permiso = await Permiso.findById(id).populate('empleado_id');
        console.log(permiso);
        if(!permiso){
            res.status(404).json({message: `No existen registros con la id: ${id}`})
        }else{
            res.status(200).json(permiso);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const crearPermiso = async (req,res)=>{
    try {
        const {empleado_id, tipo_permiso, fecha, justificante, nombre} = req.body;
        const nuevoPermiso = new Permiso({
            empleado_id,
            tipo_permiso,
            fecha,
            justificante,
            nombre
        })
        await nuevoPermiso.save()
        res.status(200).json(nuevoPermiso)
        console.log(nuevoPermiso)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'No se pudo crear el permiso'});
    }
}

export const actualizarPermiso = async (req,res)=>{
    try{
        const id = req.params.id;
        const permisoActualizado = req.body;
        const result = await Permiso.findByIdAndUpdate(id, permisoActualizado, {new:true}).populate('empleado_id');
        if(!result){
            res.status(404).json({message: 'No existe el registro'})
        }else{
            res.status(200).json(result)
            console.log(result)
        }
    }catch(error){
        console.log(error)
        res.status(500).json({message: 'Internal server error'})
    }
}

export const borrarPermiso = async (req,res)=>{
    try{
        const result = await Permiso.findByIdAndDelete(req.params.id);
        if(!result){
            res.status(404).json({message: 'No se encontro el permiso'})
        }else{
            res.status(200).json(result)
        }
    }catch(error){
        console.log(error)
        res.status(500).json({message: 'Internal server error'})
    }
}

export default {
    obtenerPermisos,
    obtenerPermisoId,
    crearPermiso,
    actualizarPermiso,
    borrarPermiso
}
