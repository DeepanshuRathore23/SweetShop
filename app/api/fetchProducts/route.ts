import { fetchProducts } from "../../lib/data";
import { NextResponse } from "next/server";

export async function GET() {
        try{
            const data = await fetchProducts();
            // console.log("These are the fetched products at api fetch folder: ", data);
    
            return  NextResponse.json(data);
        } catch(error) {
            console.error("Failed to fetch posts:", error);
        }
    }