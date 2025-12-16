import {Product, Order} from './definitions'
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

export async function fetchOrdersByUser(): Promise<Order[]> {
    const session = await auth();
    try{
        const data = await sql.unsafe<Order[]>(`SELECT * FROM orders WHERE customer_id = ${session?.user?.id}`);
        return data;
    } catch(err) {
        console.log("Database error ", err);
        return [];
    }
}

