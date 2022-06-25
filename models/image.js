import {getData} from './db.js';
import { DataTypes } from 'sequelize';


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
});

export const getImg = img;