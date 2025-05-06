import { PrismaClient, Prisma } from "../app/generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient().$extends(withAccelerate());

const adminData: Prisma.AdminCreateInput[] = [
  {
    name: "Sardor",
    email: "dzamolovsardor5@gmail.com",
    password: "Sardor 2010",
    clothes: {
      create: [
        {
          name: "Join the Prisma Discord",
          description: "https://pris.ly/discord",
          Image: "https://i.pin",
          Price: 100,
          Size: "L",
          gender: "girl",
        },
        {
          name: "Join the Prisma Discord",
          description: "https://pris.ly/discord",
          Image: "https://i.pin",
          Price: 100,
          Size: "L",
          gender: "girl",
        },
      ],
    },
  },
];

export async function main() {
  for (const admin of adminData) {
    await prisma.admin.create({ data: admin });
  }
}

main();
