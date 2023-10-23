import Producto from '../models/Producto.js'

// funcion para traer todos los productos usando el metodo GET
export const traerProductos = async (req,res)=>{
    try{
        const productos = await Producto.find();
        console.log(productos)  
        if(!productos){
            res.status(404).json({message: 'No se encontraron productos'})
        }else{
            res.status(200).json(productos)
            console.log(productos)
        }
    }catch(error){
        console.log(error)
        res.status(500).json({message:"Internal server error"})
    }    
}

// funcion para traer los productos por su id usando el metodo GET
export const traerProductoPorId = async (req,res)=>{
    try{
        const id = req.params.id;
        const productos = await Producto.findById(id);
        if(!productos){
            res.status(404).json({message: 'No se encontro el producto'})
        }else{
            res.status(200).json(productos)
        }
        
    }catch(error){
        res.status(500).json({message: `Internal server error ${error}`})
        console.log(error)
    }
}

// funcion para insertar los productos a la api usando el metodo POST
export const crearProducto = async (req,res)=>{
    try{
        const {tipo, nombre, descripcion, imagen, precio} = req.body;
        const nuevoProducto = new Producto({
            tipo,
            nombre,
            descripcion,
            imagen,
            precio 
        });

        await nuevoProducto.save();
        res.status(200).json(nuevoProducto);
    }catch(error){
        console.log(error);
        res.status(500).json({message: `No se pudo crear el producto ${error}`});
    }
}

// funcion para actualizar los productos de la api por su id usando el metodo PUT
export const actualizarProducto = async (req,res)=>{
    try{
        const id = req.params.id;
        const productoActualizado = req.body;
        const result = await Producto.findByIdAndUpdate(id, productoActualizado, {new:true})
        if(!result){
            res.status(404).json({message: 'No se encontro el producto'})
        }else{
            res.status(200).json(result)
            console.log(result)
        }
        
    }catch(error){
        console.log(error)
        res.status(500).json({message: 'Internal server error'})
    }
}

// funcion para borrar los productos por el id usando el metodo DELETE
export const borrarProducto = async (req,res)=>{
    try{
        const producto = await Producto.findByIdAndDelete(req.params.id)
        if(!producto){
            return res.status(404).json({message: 'Producto no encontrado'})
        }else{
            res.status(200).json(producto)
            console.log(producto)
        }
    }catch(error){
        console.log(error)
        res.status(500).json({message:'Internal server error'})
    }
}



export default {
    traerProductos,
    traerProductoPorId,
    crearProducto,
    actualizarProducto,
    borrarProducto
}