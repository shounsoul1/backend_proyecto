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

export default {
    obtenerCargos
}