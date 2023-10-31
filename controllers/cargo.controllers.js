import Cargo from "../models/Cargo.js";

export const obtenerCargos = async (req,res)=>{
    try{
        const cargos = await Cargo.find();
        if(!cargos){
            res.status(404).json({message: 'Cargo no encontrado'})
        }else{
            res.status(200).json(cargos)
            console.log(cargos)
        }
    }catch(error){
        console.log(error)
    }
}

export const crearCargo = async (req,res)=>{
    try{
        const {_id, nombre_cargo, descripcion} = req.body;
        const cargoCreado = new Cargo({
            _id,
            nombre_cargo,
            descripcion
        })
        await cargoCreado.save()
        res.status(200).json(cargoCreado)
    }catch(error){
        console.log(error)
    }
}

export const actualizarCargo = async (req,res)=>{
    try{
        const id = req.params.id;
        const cargoActualizado = req.body;
        const result = await Cargo.findByIdAndUpdate(id, cargoActualizado, {new:true})
        if(!result){
            res.status(404).json({message: 'Cargo no encontrado'})
        }else{
            res.status(202).json(result)
            console.log(result)
        }
    }catch(error){
        console.log(error)
        res.status(500).json({message: 'Internal server error'})
    }
}

export const borrarCargo = async (req,res)=>{
    try{
        const borrar = await Cargo.findByIdAndDelete(req.params.id)
        if(!borrar){
            res.status(404).json({message: 'Cargo no encontrado'})
        }else{
            res.status(200).json(borrar)
            console.log(borrar)
        }
    }catch(error){
        console.log(error)
        res.status(500).json({message: 'Internal server error'})
    }
}

export default {
    obtenerCargos,
    crearCargo,
    borrarCargo,
    actualizarCargo
}