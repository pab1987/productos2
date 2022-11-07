import { DataTypes } from "sequelize";
import { dataBase } from "../config/dataBase.js";

const Producto = dataBase.define('producto', {
  nombreProducto:{
    type: DataTypes.STRING,
    allowNull: false
  },
  precioProducto:{
    type: DataTypes.STRING,
    allowNull: false
  },
  referenciaProducto:{
    type: DataTypes.STRING,
    allowNull: false
  },
  cantidadProducto:{
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcionProducto:{
    type: DataTypes.STRING,
    allowNull: false
  }
  
})

export{
  Producto
}