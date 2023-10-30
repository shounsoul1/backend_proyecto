// router.get('/prueba/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const empleado = await Empleado.findById(id).populate('cargo').exec();
//         console.log(empleado);
//         res.status(200).json(empleado);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: 'Error al obtener empleado' });
//     }
// });


// router.get('/prueba', async (req, res) => {
//     try {
//         const cargo = await Empleado.find({}).populate('cargo').exec();
//         console.log(cargo);
//         res.status(200).json(cargo);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: 'Error al obtener cargo' });
//     }
// });

// router.get('/prueba', async (req, res) => {
//     try {
//         const cargo = await Empleado.findOne({}).populate('cargo').exec();
//         console.log(cargo);
//         res.status(200).json(cargo);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: 'Error al obtener permiso' });
//     }
// });