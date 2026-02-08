"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-6">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <Link href="/" className="text-4xl font-bold text-teal-500">
          Aunova
        </Link>
        <div className="flex gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xl font-medium transition ${
                pathname === link.href
                  ? "text-teal-500"
                  : "text-gray-600 hover:text-teal-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
