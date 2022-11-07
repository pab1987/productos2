import { Producto } from "../models/ProductoModel.js";

//const {nombre, apellido, documento, correo, direccion, telefono, token} = cliente

const generarId = () =>
  Math.random().toString(32).substring(2) + Date.now().toString(32);

const formularioProducto = (req, res) => {
  res.render("product/producto", {
    nombreVista: "Nuevo Producto",
  });
};

const crearProducto = async (req, res) => {
  await check("nombre")
    .notEmpty()
    .withMessage("El campo nombre es obligatorio")
    .run(req);
  await check("precio")
    .notEmpty()
    .withMessage("El campo precio es obligatorio")
    .run(req);
  await check("referencia")
    .notEmpty()
    .withMessage("El campo referencia es obligatorio")
    .run(req);
  await check("cantidad")
    .isEmail()
    .withMessage("El campo cantidad es obligatorio")
    .run(req);
  await check("descripcion")
    .notEmpty()
    .withMessage("La descripcion es obligatoria")
    .run(req);

  let listadoErrores = validationResult(req);

  if (!listadoErrores.isEmpty()) {
    return res.render("product/producto", {
      nombreVista: "Nuevo Producto",
      errores: listadoErrores.array(),
      producto: {
        nombre: req.body.nombre,
        precio: req.body.precio,
        referencia: req.body.referencia,
        cantidad: req.body.cantidad,
        descripcion: req.body.descripcion
      },
    });
  }
  const {nombre, precio, referencia, cantidad, descripcion} = req.body;

  const validarProducto = await Usuario.findOne({ where: { nombre } });

  if (validarProducto) {
    return res.render("product/producto", {
      nombreVista: "Nuevo Producto",
      errores: [{ msg: "El producto ya existe en la base de datos" }],
      producto: {
        nombre: req.body.nombre,
        precio: req.body.precio,
        referencia: req.body.referencia,
        cantidad: req.body.cantidad,
        descripcion: req.body.descripcion
      },
    });
  }

  const producto = await Producto.create({
    nombre,
    precio,
    referencia,
    cantidad,
    descripcion
  });

};

/* const formularioRecuperar = (req, res) => {
  res.render("auth/recuperar", {
    nombreVista: "Recuperar Usuario",
  });
}; */

export {
  formularioProducto,
  crearProducto
};
