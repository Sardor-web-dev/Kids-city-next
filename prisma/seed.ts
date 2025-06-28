import { PrismaClient, Prisma } from '../app/generated/prisma';
import { withAccelerate } from '@prisma/extension-accelerate';

const prisma = new PrismaClient().$extends(withAccelerate());

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Sardor',
    email: 'dzamolovsardor5@gmail.com',
    password: 'Sardor 2010',
    role: 'ADMIN',
    clothes: {
      create: [
        {
          name: 'T-shirt',
          description: 'Summer T-shirt',
          Image:
            'https://png.pngtree.com/png-clipart/20230607/ourmid/pngtree-black-t-shirt-mockup-new-model-realistic-png-image_7122610.png',
          gender: 'boy',
          price: 100000,
        },
        {
          name: 'Hoodie',
          description: 'Winter Hoodie',
          Image:
            'https://img.pikbest.com/png-images/20240712/mockup-blank-flat-blue-hoodie_10664614.png!sw800',
          gender: 'boy',
          price: 120000,
        },
      ],
    },
  },
];

export async function main() {
  for (const user of userData) {
    await prisma.user.create({ data: user });
  }
}

main();
