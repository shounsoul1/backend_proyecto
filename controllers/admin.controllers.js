import Admin from '../models/Admin.js'

export const obtenerAdmin = async(req,res)=>{
    try{
        const admin = await Admin.find();
        if(!admin){
            res.status(404).json({message: 'No se encontro ningun administrador'})
        }else{
            res.status(200).json(admin)
            console.log(admin)
        }
    }catch(error){
        console.log(error)
    }
}

export const obtenerPorId = async (req,res)=>{
    try{
        const id = req.params.id;
        const cuentas = await Admin.findById(id)
        if(!cuentas){
            res.status(404).json({message: 'Cuenta no encontrada'})
        }else{
            res.status(200).json(cuentas)
            console.log(cuentas)
        }
    }catch(error){
        console.log(error)
        res.status(500).json({message: 'Internal server error'})
    }
}

export const crearAdmin = async (req,res)=>{
    try{
        const {_id, usuario, password} = req.body
        const nuevoAdmin = new Admin({
            _id,
            usuario,
            password
        });  
        await nuevoAdmin.save();
        res.status(200).json(nuevoAdmin)
    }catch(error){
        console.log(error)
        res.status(500).json({message: 'Internal server error'})
    }
}

export const actualizarAdmin = async (req,res)=>{
    try{
        const id = req.params.id;
        const adminActualizado = req.body;
        const result = await Admin.findByIdAndUpdate(id, adminActualizado, {new:true})
        if(!result){
            res.status(404).json({message: 'No se encontro el usuario'})
        }else{
            res.status(200).json(result)
            console.log(result)
        }
    }catch(error){
        console.log(error)
        res.status(500).json({message: 'Internal server error'})
    }
}

export const borrarAdmin = async (req,res)=>{
    try{
        const usuario = await Admin.findByIdAndDelete(req.params.id);
        if(!usuario){
            res.status(404).json({message: 'No se encontro el usuario'})            
        }else{
            res.status(200).json(usuario)
            console.log(usuario)
        }
    }catch(error){
        console.log(error)
        res.status(500).json({message: 'Internal server error'})
    }
}


// controllers para la zona de login y logout

export const verificarLogin = async (req,res)=>{
    try{
        const {usuario, password} = req.body;
        const usuarioVerificado = await Admin.findOne({usuario, password})
        console.log(usuarioVerificado)
        if(usuarioVerificado){
            res.status(200).json({success: true, usuario: usuarioVerificado})
        }else{
            res.status(404).json({success: false, message: 'Credenciales invalidas'})
        }
    }catch(error){
        console.log(error)
        res.status(404).json({message: 'Internal server error'})
    }
}

export const cerrarSesion = async (req, res) => {
    try {
        res.status(200).json({ success: true, message: 'Cierre de sesión exitoso' });
        console.log({message: 'Cierre de sesión exitoso'})
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error interno del servidor' });
    }
}

export default {
    obtenerAdmin,
    obtenerPorId,
    crearAdmin,
    actualizarAdmin,
    borrarAdmin,
    verificarLogin,
    cerrarSesion
}