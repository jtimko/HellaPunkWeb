"use server";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
    return NextResponse.json({"radio": "google.com"});
}