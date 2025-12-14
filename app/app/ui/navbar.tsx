import Link from "next/link";
import { auth } from "@/auth";
import Image from "next/image";

export default async function Navbar() {
    const session = await auth();
    const isLoggedIn = session?.user;
    
    return (
        <div className="bg-blue-200">
            <nav className="flex justify-between items-center px-8 py-4 bg-white/70 shadow-md sticky top-0 z-50">
                <h1 className="text-2xl font-bold text-rose-600">
                🍬 SweetMart
                </h1>

                {/* <FaUserCircle className="text-3xl text-gray-700 hover:text-rose-500 cursor-pointer transition" /> */}
                { isLoggedIn ? (
                    <>
                      <Link href='/dashboard'>
                        <Image
                          width={70}
                          height={70}
                          className="border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-50"
                          src="/user.png"
                          alt="user"
                          
                        />
                      </Link>
                      
                    </>
                  ) : (
                    <>
                      <Link href="/login" className="border border-gray-300 text-black px-3 py-1 rounded-md hover:bg-gray-50">
                        Sign in
                      </Link>
                    </>
                  )}
            </nav>
        </div>
        
    );
  }
  