import {Product} from '../lib/definitions'
import postgres from 'postgres'
import { auth } from '@/auth';

const sql = postgres(process.env.POSTGRES_URL!, {ssl: 'require'});

export async function fetchProducts(): Promise<Product[]>{
    try {
        const data = await sql.unsafe<Product[]>(`SELECT * FROM products`);
        // console.log("These are the products fetched at data.ts : ", data);
        return data;
    } catch (error) {
        console.error("Database error: ", error);
        return [];
    }
}

