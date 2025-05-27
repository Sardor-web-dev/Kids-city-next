"use client";
import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();
  console.log("Client session:", session);
  console.log("Client user role:", session?.user?.role);

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {session?.user?.name}</p>
      <p>Email: {session?.user?.email}</p>
      <p>Role: {session?.user?.role}</p>
    </div>
  );
}
