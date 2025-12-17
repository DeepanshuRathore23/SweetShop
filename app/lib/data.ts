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

export async function fetchOrdersByUser(): Promise<(Order & {product_name: string})[]> {
    const session = await auth();
    if (!session?.user?.id) return [];
    console.log("At data.ts = ", session)
    try{
        const data = await sql<(Order & {product_name: string})[]>`SELECT 
            orders.*,
            products.product_name AS product_name
            FROM orders
            JOIN products
            ON orders.product_id = products.id
            WHERE orders.customer_id = ${session.user.id}`;
        // console.log(session?.user)
        return data;
    } catch(err) {
        console.log("Database error ", err);
        return [];
    }
}

