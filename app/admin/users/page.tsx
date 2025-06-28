import BlockUserBtn from '@/components/custom/BlockUserBtn';
import { prisma } from '@/lib/prisma';

export default async function Users() {
  const users = await prisma.user.findMany();

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-10">
      <h1 className="mb-8 text-center text-3xl font-bold">Пользователи</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {users.map(user => (
          <div
            key={user.id}
            className="flex flex-col justify-between rounded-xl bg-white p-6 shadow-md transition hover:scale-[1.02] hover:shadow-lg"
          >
            <div className="text-center">
              <h2 className="text-xl font-bold">{user.name || 'Имя отсутствует'}</h2>
              <p className="mt-1 text-sm break-words text-gray-600">{user.email}</p>
              <p className="mt-2 text-sm font-semibold text-blue-600 uppercase">{user.role}</p>
              {user.isBlocked && (
                <p className="mt-1 text-sm font-medium text-red-500">Заблокирован</p>
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
