"use server";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
    return NextResponse.json({"radio": "http://23.239.22.251:8000/listen.pls?sid=1"});
}