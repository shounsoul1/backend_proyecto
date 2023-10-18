import {Router} from 'express'
import {traerProductos, traerProductoPorId, crearProducto, actualizarProducto, borrarProducto} from '../controllers/producto.controllers.js';
import { obtenerAdmin, obtenerPorId, crearAdmin, actualizarAdmin, borrarAdmin, verificarLogin } from '../controllers/admin.controllers.js';
const router = Router();
// rutas de la coleccion productos
router.get('/productos', traerProductos)
router.get('/productoById/:id', traerProductoPorId)
router.post('/crearProducto', crearProducto)
router.put('/actualizarProducto/:id', actualizarProducto)
router.delete('/borrarProducto/:id', borrarProducto)

// ruta para validacion de usuario
router.get('/administradores', obtenerAdmin)
router.get('/adminPorId/:id', obtenerPorId)
router.post('/crearAdmin', crearAdmin)
router.put('/actualizarAdmin/:id', actualizarAdmin)
router.delete('/borrarAdmin/:id', borrarAdmin)

// rutas para el login y logout
router.post('/login', verificarLogin)
// router.post('/logout', verificarLogout)


export default router;
