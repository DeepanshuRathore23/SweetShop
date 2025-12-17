
import {users, products, orders} from '../lib/placeholder-data'
import postgres from 'postgres'
// import bcrypt from 'bcrypt';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require'});