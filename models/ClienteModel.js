import { DataTypes } from "sequelize";
import { dataBase } from "../config/dataBase.js";

const Cliente = dataBase.define('cliente', {
  nombre:{
    type: DataTypes.STRING,
    //allowNull: false
  },
  apellido:{
    type: DataTypes.STRING,
    //allowNull: false
  },
  documento:{
    type: DataTypes.STRING,
    //allowNull: false
  },
  correo: {
    type: DataTypes.STRING,
    //allowNull: false
  },
  direccion: {
    type: DataTypes.STRING,
    //allowNull: false
  },
  telefono: DataTypes.STRING,
  //allowNull: false
})

export{
  Cliente
}