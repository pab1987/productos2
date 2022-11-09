import express from 'express'
import { formularioLogin, formularioCliente, formularioRegistro, formularioRecuperar , crearUsuario, activarUsuario} from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.get('/login', formularioLogin )
userRouter.get('/registro', formularioRegistro)
userRouter.post('/registro', crearUsuario)
userRouter.get('/recuperar', formularioRecuperar)
userRouter.get('/confirmarUsuario/:token', activarUsuario)
//userRouter.post('/cliente', formularioCliente)



export {
  userRouter
}