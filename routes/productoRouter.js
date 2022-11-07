import { formularioProducto, crearProducto } from '../controllers/productoController.js'

const productoRouter = express.Router()



productoRouter.post('/producto', formularioProducto)
productoRouter.post('/producto', crearProducto)

export {
    productoRouter
}
