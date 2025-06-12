"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Header from "./Header";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const inAdmin = pathname.startsWith("/admin");

  return (
    <>
      <div>
        <section className="pl-2 pr-2">
          {!inAdmin && <Header />}
          {children}
          {!inAdmin && <Footer />}
        </section>
      </div>
    </>
  );
}
