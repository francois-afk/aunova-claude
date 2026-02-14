"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 md:py-6">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <Link href="/" className="text-2xl md:text-4xl font-bold text-teal-500">
          Aunova
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-teal-500"
          aria-label="Toggle menu"
        >
          <span className="material-icons text-3xl">
            {isOpen ? "close" : "menu"}
          </span>
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex gap-10">
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

      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium transition ${
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
      )}
    </nav>
  );
}
