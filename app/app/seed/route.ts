
import {users} from '../../lib/placeholder-data'
import postgres from 'postgres'
import bcrypt from 'bcrypt';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require'});

async function seedUser(sqlInstance: typeof sql){
    await sqlInstance`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sqlInstance`CREATE TABLE IF NOT EXISTS users(
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        dob DATE,
        phone VARCHAR(20)
    )`;

    for (const user of users) {
        const [day, month, year] = user.dob.split('-');
        const formattedDob = `${year}-${month}-${day}`;

        const hashedPass = await bcrypt.hash(user.password, 10);

        await sqlInstance`
            INSERT INTO users(email, password, name, dob, phone)
            VALUES(${user.email}, ${hashedPass}, ${user.name}, ${formattedDob}, ${user.phone})
            ;
        `;
    }

}

export async function GET() {
    try{
        await sql.begin(async (tx) => {
            await seedUser(tx);
        });

        return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
        return Response.json({ error: String(error) });
    }
}
