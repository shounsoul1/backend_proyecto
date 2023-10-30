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
        const permiso = await Permiso.findById(id).populate('empleado_id').exec();
        console.log(permiso);
        if(!permiso){
            res.status(404).json({message: `No existen registros de la id: ${id}`})
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

export default {
    obtenerPermisos,
    obtenerPermisoId,
    crearPermiso
}
