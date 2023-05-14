import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const prisma = new PrismaClient();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const examples = await prisma.post.findFirst({
        where: {
            id: id?.toString(),
        },
        select: {
            id: true,
            title: true,
            userId: true,
            message: true,
            createdAt: true,
            updatedAt: true,
            user: {
                select: {
                    name: true,
                    image: true,
                }
            },
            comments: {
                where: {
                    isDeleted: false,
                },
                select: {
                    id: true,
                    message: true,
                    createdAt: true,
                    user: {
                        select: {
                            name: true,
                            image: true,
                        }
                    }
                },
                orderBy: {
                    createdAt: "asc"
                }
            }
        },
    });
    return NextResponse.json(examples);
};