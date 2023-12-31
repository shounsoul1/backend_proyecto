import {Router} from 'express'
import {traerProductos, traerProductoPorId, crearProducto, actualizarProducto, borrarProducto} from '../controllers/producto.controllers.js';
import {obtenerAdmin, obtenerPorId, crearAdmin, actualizarAdmin, borrarAdmin, verificarLogin, cerrarSesion} from '../controllers/admin.controllers.js';
import {obtenerEmpleados, obtenerEmpleadoPorId, crearEmpleado, actualizarEmpleado, borrarEmpleado} from '../controllers/empleado.controllers.js'
import {obtenerPermisos,obtenerPermisoId, crearPermiso, actualizarPermiso, borrarPermiso} from '../controllers/permiso.controllers.js';
import {obtenerCargos, crearCargo, borrarCargo, actualizarCargo} from '../controllers/cargo.controllers.js';
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
router.post('/logout', cerrarSesion)

// rutas para empleados
router.get('/empleados', obtenerEmpleados)
router.get('/empleadoId/:id', obtenerEmpleadoPorId)
router.post('/crearEmpleado', crearEmpleado)
router.put('/actualizarEmpleado/:id', actualizarEmpleado)
router.delete('/borrarEmpleado/:id', borrarEmpleado)


// ruta para cargos
router.get('/cargos', obtenerCargos)
router.post('/crearCargo', crearCargo)
router.put('/actualizarCargo:/id', actualizarCargo)
router.delete('/borrarCargo/:id', borrarCargo)


// rutas para permisos
router.get('/permisos', obtenerPermisos)
router.get('/permisosId/:id', obtenerPermisoId)
router.post('/crearPermiso', crearPermiso)
router.put('/actualizarPermiso/:id', actualizarPermiso)
router.delete('/borrarPermiso/:id', borrarPermiso)





export default router;
