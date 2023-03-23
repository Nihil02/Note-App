import {Pool} from "pg";
import dotenv from "dotenv";
//Extracting the credentials from the .env file
dotenv.config();

const pool = new Pool({
    user : process.env.PG_USER,
    password : process.env.PG_PASSWORD,
    host : process.env.PG_HOST,
    port : 5432,
    database : process.env.PG_DB
})

module.exports = pool;