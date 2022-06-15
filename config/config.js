import path from 'path';
import dotenv from 'dotenv';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const data = dotenv.config({
    path: path.resolve(__dirname, `../environments/.env.${process.env.NODE_ENV}`)
})

export const db = {
    user: data.parsed.USER,
    host: data.parsed.HOST,
    database: data.parsed.DATABASE,
    password: data.parsed.PASSWORD,
};

export const api = {
    port: data.parsed.PORT,
};
// export const db = {
//   user: "ysisandlpbolnl",
//   host: "ec2-52-72-99-110.compute-1.amazonaws.com",
//   database: "de7kr334l5csjr",
//   password: "f10cc760a9a39337eac377043fd57706c033db64817fe88195e491276d1caf77",
//   port: "5432",
// };

