import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const prisma = new PrismaClient()

    const { title, message, id } = await req.json();

    const data = await prisma.post.create({
        data: {
            title: title,
            message: message,
            updatedAt: new Date(),
            userId: id
        }
    });
    return NextResponse.json(data);
};

