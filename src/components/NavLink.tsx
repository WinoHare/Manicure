"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
};

export default function NavLink({ to, children }: NavLinkProps) {
  const pathname = usePathname();
  return (
    <Link
      href={to}
      className={classNames(
        "font-CormGara text-lg h-8 hover:opacity-50 transition-opacity",
        pathname === to ? "text-gold border-b-2" : "text-white",
      )}
    >
      {children}
    </Link>
  );
}
