import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import {User} from './app/lib/definitions'
import bcrypt from 'bcrypt';
import postgres from 'postgres';
 
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });
 
async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User[]>`SELECT * FROM users WHERE email=${email}`;
    // console.log(user);
    const users = await sql`SELECT * FROM users`
    console.log(users);
    return user[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
 
export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
 
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
            
          if (!user) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);
          console.log("at auth, id = ", user.id)
          if (passwordsMatch) return {
            id: user.id,
            name: user.name,
            email: user.email
          };
        }
        
        console.log("Invalid Credentials");
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({token, user }) {
        if(user ) {
            token.id = user.id;
        }
        return token;
    },
    async session({ session, token }) {
        if (session.user) {
          session.user.id = token.id as string; // 🔑 expose to session
        }
        return session;
      },
  }
});