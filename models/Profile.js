import {getData} from './db.js';
import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';

const profile = getData.sequelizeClient.define('cat_profile',{
    id:{
        type: DataTypes.UUID,
        defaultvalue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: true
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique:{
            arg: true,
            msg: 'This username is already taken.'
        },
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    phone_number: DataTypes.STRING,
},{
    tableName: 'cat_profile',
    freezeTableName: true,
    hooks: {
        beforeCreate: (user, options) =>{
            {
                user.password = user.password && user.password != "" ? bcrypt.hashSync(user.password,10):"";
            }
        }
    }
});

export const getProfile = profile;