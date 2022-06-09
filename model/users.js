import { getData } from "./db.js";
import Sequelize from "sequelize";

const user = getData.SequelizeClient.define(
  'cat_users',
  {
    id: { type: Sequelize.SMALLINT, primaryKey: true },
    username: Sequelize.STRING,
    //email: Sequelize.STRING,
    //password: Sequelize.STRING,
   // phone_number: Sequelize.STRING,
  },
  {
    tableName: "cat_users",
    createdAt:false,
    updatedAt:false,
  }
);

export const getUsers = user;
