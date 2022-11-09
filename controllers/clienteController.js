import { Cliente } from "../models/ClienteModel.js";

const {nombre, apellido, documento, correo, direccion, telefono, token} = Cliente

const generarId = () =>
  Math.random().toString(32).substring(2) + Date.now().toString(32);

const formularioCliente = (req, res) => {
  res.render("client/cliente", {
    nombreVista: "Nuevo Cliente",
  });
};

const crearCliente = async (req, res) => {
  await check("nombre")
    .notEmpty()
    .withMessage("El campo nombre es obligatorio")
    .run(req);
  await check("apellido")
    .notEmpty()
    .withMessage("El campo apellido es obligatorio")
    .run(req);
  await check("documento")
    .notEmpty()
    .withMessage("El campo documento es obligatorio")
    .run(req);
  await check("correo")
    .isEmail()
    .withMessage("El correo debe llevar un formato valido")
    .run(req);
  await check("direccion")
    .notEmpty()
    .withMessage("La direccion es obligatoria")
    .run(req);
  await check("telefono")
    .notEmpty()
    .withMessage("El campo telefono es obligatorio")
    .run(req);

  let listadoErrores = validationResult(req);

  if (!listadoErrores.isEmpty()) {
    return res.render("client/cliente", {
      nombreVista: "Nuevo Cliente",
      errores: listadoErrores.array(),
      cliente: {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        documento: req.body.documento,
        correo: req.body.correo,
        direccion: req.body.direccion,
        telefono: req.body.telefono
      },
    });
  }
  const {nombre, apellido, documento, correo, direccion, telefono, token} = req.body;

  const validarCliente = await Usuario.findOne({ where: { correo } });

  if (validarCliente) {
    return res.render("client/cliente", {
      nombreVista: "Nuevo Cliente",
      errores: [{ msg: "El cliente ya existe en la base de datos" }],
      cliente: {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        documento: req.body.documento,
        correo: req.body.correo,
        direccion: req.body.direccion,
        telefono: req.body.telefono
      },
    });
  }

  const cliente = await Cliente.create({
    nombre,
    apellido,
    documento,
    correo,
    direccion,
    telefono
  });

};

/* const formularioRecuperar = (req, res) => {
  res.render("auth/recuperar", {
    nombreVista: "Recuperar Usuario",
  });
}; */

export {
  formularioCliente,
  crearCliente
};
