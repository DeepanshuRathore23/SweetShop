import { fetchOrdersByUser } from "@/lib/data"
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const data = await fetchOrdersByUser();
        return NextResponse.json(data);
    } catch(err) {
        console.error("Failed to fetch orders by user", err);
    }
}