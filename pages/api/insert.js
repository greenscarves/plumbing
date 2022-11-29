import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const val = await prisma.stoic.create({
        data: {
            name: "hello",
        },
    });
}

export default async function handler(req, res) {
    await main();
    res.redirect("/")
}