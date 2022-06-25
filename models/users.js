import {getData} from './db.js';
import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';


const User = getData.sequelizeClient.define('cat_user',{
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey:true
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: 'cat_user',
    freezeTableName: true,
    hooks: {
        beforeCreate: (user, options) =>{
            {
                user.password = user.password && user.password != "" ? bcrypt.hashSync(user.password,10):"";
            }
        }
    }
});




export const getUsers = User;