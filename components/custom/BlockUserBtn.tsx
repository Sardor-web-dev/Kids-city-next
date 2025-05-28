"use client";

import { useState } from "react";

const BlockUserBtn = ({
  userId,
  initialBlocked,
}: {
  userId: number;
  initialBlocked: boolean;
}) => {
  const [isBlocked, setIsBlocked] = useState(initialBlocked);

  async function handleToggleBlock() {
    const res = await fetch("/api/admin/block-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, block: !isBlocked }),
    });

    if (res.ok) {
      setIsBlocked(!isBlocked);
    }
  }

  return (
    <button
      onClick={handleToggleBlock}
      className={`${
        isBlocked ? "bg-green-500" : "bg-red-500"
      } text-white px-4 py-2 rounded-lg cursor-pointer`}
    >
      {isBlocked ? "Разблокировать" : "Заблокировать"}
    </button>
  );
};

export default BlockUserBtn;
