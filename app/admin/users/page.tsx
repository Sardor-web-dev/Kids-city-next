import BlockUserBtn from "@/components/custom/BlockUserBtn";
import { prisma } from "@/lib/prisma";

export default async function Users() {
  const users = await prisma.user.findMany();

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Пользователи</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between transition hover:scale-[1.02] hover:shadow-lg"
          >
            <div className="text-center">
              <h2 className="text-xl font-bold">
                {user.name || "Имя отсутствует"}
              </h2>
              <p className="text-gray-600 text-sm break-words mt-1">
                {user.email}
              </p>
              <p className="text-sm mt-2 font-semibold text-blue-600 uppercase">
                {user.role}
              </p>
              {user.isBlocked && (
                <p className="text-red-500 text-sm mt-1 font-medium">
                  Заблокирован
                </p>
              )}
            </div>
            <div className="mt-6 flex justify-center">
              <BlockUserBtn userId={user.id} initialBlocked={user.isBlocked} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
