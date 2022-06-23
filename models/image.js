import { getData } from "./db.js";
import { DataTypes } from "sequelize";
import bcrypt from 'bcrypt';

const img = getData.sequelizeClient.define('cat_img',{
    id:{
        type: DataTypes.UUID,
        defaultvalue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    tableName: 'cat_img',
    freezeTableName: true,
    hooks: {
        beforeCreate: (user, options) =>{
            {
                user.password = user.password && user.password != "" ? bcrypt.hashSync(user.password,10):"";
            }
        }
    }
});


export const getImg = img;