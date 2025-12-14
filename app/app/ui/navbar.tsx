import Link from "next/link";
// import { auth } from "@/auth";
import Image from "next/image";

export default async function Navbar() {
    // const session = await auth();
    const session = {
        user1: true
    };

    return (
        <div className="bg-blue-200">
            <nav className="flex justify-between items-center px-8 py-4 bg-white/70 shadow-md sticky top-0 z-50">
                <h1 className="text-2xl font-bold text-rose-600">
                🍬 SweetMart
                </h1>

                {/* <FaUserCircle className="text-3xl text-gray-700 hover:text-rose-500 cursor-pointer transition" /> */}
            </nav>
        </div>
        
    );
  }
  