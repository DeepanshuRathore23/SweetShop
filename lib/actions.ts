'use server';
 
import { signIn } from '@/auth';
import postgres from 'postgres';
import { AuthError } from 'next-auth';
import { Admin } from './placeholder-data'
import { redirect } from "next/navigation";
import bcrypt from 'bcrypt';
import credentials from 'next-auth/providers/credentials';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require'});
 
 
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    const res = await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function signUp(prevState: string | undefined, formData: FormData) {
  const firstName = formData.get("first-name") as string;
  const lastName = formData.get("last-name") as string;
  const name = firstName + " " + lastName;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const dob  = formData.get("dob") as string;
  const phone = formData.get("phone") as string;


  if(!name || !email || !password) {
    console.log("All feilds are required");
    return "All fields are required";
  }

  // console.log(name, email);

    ///check if user pre exists
    const existing = await sql`SELECT * FROM users WHERE email = ${email}`;
    if(existing.count > 0) {
      return "User already exists.";
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    //insert users
    await sql`
      INSERT INTO users (name, email, password, dob, phone)
      VALUES (${name}, ${email}, ${hashedPassword}, ${dob}, ${phone});
    `;

    //auto signIn
    const logDone = await signIn("credentials", {email, password, redirectTo: '/dashboard'});
   

    return "success";
  
}



export async function adminLogin(
  prevState: string | undefined,
  formData: FormData
) {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const redirectTo =
    formData.get("redirectTo")?.toString() || "/admin-dashboard";

  if (!email || !password) {
    return "Email and password are required";
  }

  // ✅ Validate admin from placeholder-data
  if (Admin.email !== email || Admin.password !== password) {
    return "Invalid admin credentials";
  }

  try {
    // ✅ THIS CREATES SESSION
    await signIn("credentials", {
      email,
      password,
      role: "admin",        // 👈 important
      redirectTo,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return "Admin login failed";
    }
    throw error;
  }
}

