import { formularioCliente, crearCliente } from '../controllers/clienteController.js'

const clienteRouter = express.Router()



clienteRouter.post('/cliente', formularioCliente)
clienteRouter.post('/cliente', crearCliente)

export {
    clienteRouter
}
