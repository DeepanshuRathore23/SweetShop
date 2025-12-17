import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { placeOrder } from "@/app/lib/data";

export async function POST(req: Request) { 
    try{
        const body = await req.json();
        const {productId} = body;

        const res = await placeOrder(productId);
        if(res) {
            return NextResponse.json (
                {message: "Order placed Successfully"},
                {status: 201}
            );
        } else {
            return NextResponse.json (
                {message: "Order failed"},
                {status: 500}
            );
        }

    } catch (err) {
        console.error("Error at order api", err);
    }
}