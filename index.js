import express from "express";
import router from './routes/routes.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
dotenv.config()
//configuracion mongodb
const mongoURI = process.env.DB_URL;

mongoose.connect(mongoURI)
const db = mongoose.connection;

db.on('error',(error)=>{
    console.log(error + "Algo anda mal")
})

db.once('connected', ()=>{
    console.log('Conexion con la base de datos exitosa 🎉')
})


// configuracion del servidor
const app = express();
app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api',router)

app.listen(3000)
console.log(`Corriendo server en el puerto http://localhost:${process.env.PORT}/productos 🚀`)