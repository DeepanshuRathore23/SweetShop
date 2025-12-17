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

export async function fetchOrdersByUser(): Promise<(Order & {product_name: string, price: number})[]> {
    const session = await auth();
    if (!session?.user?.id) return [];
    console.log("At data.ts = ", session)
    try{
        const data = await sql<(Order & {product_name: string, price: number})[]>`SELECT 
            orders.*,
            products.product_name AS product_name,
            products.price AS price
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

export async function placeOrder(productId: number): Promise<boolean> {
    const session = await auth();
    if(!session?.user?.id) {
        return false;
    }

    const userId = session.user.id;

    // console.log("product id = ", productId);
    // console.log("user id = ", userId);

    try{
        const res = await sql`UPDATE products
            SET in_stock = in_stock - 1
            WHERE id = ${productId} AND in_stock > 0
            RETURNING id
        `;

        if (res.length === 0) {
            throw new Error("Out of stock");
        }

        await sql`INSERT INTO orders (product_id, customer_id) 
        VALUES (${productId}, ${session.user?.id})`;
        return true;
    } catch(err) {
        console.error("Error at order in data.ts ", err);
        return false;
    }
}

