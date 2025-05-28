import BlockUserBtn from "@/components/custom/BlockUserBtn";
import { prisma } from "@/lib/prisma";

export default async function Clothes() {
  const users = await prisma.user.findMany();
  console.log(users);
  return (
    <>
      <div className="grid gap-10 max-w-[1250px] mx-auto grid-cols-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="border-1 w-[300px] h-[310px] border-black flex flex-col items-center justify-center rounded-lg "
          >
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-lg font-semibold mt-2">{user.role}</p>
            <div className="flex items-center gap-2 mt-5">
              <BlockUserBtn userId={user.id} initialBlocked={user.isBlocked} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
