import express from 'express'
import { formularioProducto, crearProducto } from '../controllers/productoContoller.js'

const productoRouter = express.Router()



productoRouter.get('/producto',formularioProducto)
productoRouter.post('/producto',crearProducto)

export {
    productoRouter
}
