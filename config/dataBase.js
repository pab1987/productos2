import { Sequelize } from "sequelize";

const dataBase = new Sequelize('db_user', 'root', 'root', {
  host: 'localhost',
  port: '8889',
  dialect: 'mysql',
  define: {
    timestamps: true
  }
})

export{
  dataBase
}