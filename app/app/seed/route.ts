
import {users, products, orders} from '../../lib/placeholder-data'
import postgres from 'postgres'
import bcrypt from 'bcrypt';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require'});

// async function seedProducts(sqlInstance: typeof sql) {
//     await sqlInstance`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//     await sqlInstance`CREATE TABLE IF NOT EXISTS products(
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         product_name VARCHAR(255) NOT NULL,
//         price INTEGER,
//         category VARCHAR(255),
//         in_stock INTEGER
//     )`;

//     for(const product of products) {
//         await sqlInstance`
//             INSERT INTO products(product_name, price, category, in_stock)
//             VALUES(${product.name}, ${product.price}, ${product.category}, ${product.inStock})
//             ;
//         `;
//     }
// }

async function seedOrders(sqlInstance: typeof sql) {
    await sqlInstance`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sqlInstance`CREATE TABLE IF NOT EXISTS orders(
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        product_id UUID REFERENCES products(id),
        customer_id UUID REFERENCES users(id)
    )`;

    for(const order of orders) {
        const customer_id = await sqlInstance`SELECT id FROM users WHERE email = ${order.userEmail}`
        const product_id = await sqlInstance`SELECT id FROM products WHERE product_name = ${order.productName}`

        //if user or product not present
        if(!customer_id.length || !product_id.length) {
            console.warn("Skipping order, user or product not found:", order);
            continue;
        }

        await sqlInstance`
            INSERT INTO orders(product_id, customer_id)
            VALUES(${product_id[0].id}, ${customer_id[0].id})
            ;
        `;
    }
}


// async function seedUser(sqlInstance: typeof sql){
//     await sqlInstance`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//     await sqlInstance`CREATE TABLE IF NOT EXISTS users(
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         email VARCHAR(255) NOT NULL,
//         password VARCHAR(255) NOT NULL,
//         name VARCHAR(255) NOT NULL,
//         dob DATE,
//         phone VARCHAR(20)
//     )`;

//     for (const user of users) {
//         const [day, month, year] = user.dob.split('-');
//         const formattedDob = `${year}-${month}-${day}`;

//         const hashedPass = await bcrypt.hash(user.password, 10);

//         await sqlInstance`
//             INSERT INTO users(email, password, name, dob, phone)
//             VALUES(${user.email}, ${hashedPass}, ${user.name}, ${formattedDob}, ${user.phone})
//             ;
//         `;
//     }

// }

export async function GET() {
    try{
        await sql.begin(async (tx) => {
            // await seedUser(tx);
            // await seedProducts(tx);
            // await seedOrders(tx);
        });

        return Response.json({ message: 'Orders seeded successfully' });
    } catch (error) {
        return Response.json({ error: String(error) });
    }
}
