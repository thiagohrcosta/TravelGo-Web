"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NavbarItems } from "./navbaritems";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="TravelGo Logo"
            width={140}
            height={40}
            priority
          />
        </Link>

        {/* Desktop menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {NavbarItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-slate-700 hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/auth/login"
            className="rounded-md border border-blue-600 px-4 py-2 font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            Sign in
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col gap-6 px-6 py-6">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="font-medium text-slate-700"
            >
              Home
            </Link>

            <Link
              href="/destinations"
              onClick={() => setOpen(false)}
              className="font-medium text-slate-700"
            >
              Destinations
            </Link>

            <Link
              href="/deals"
              onClick={() => setOpen(false)}
              className="font-medium text-orange-500"
            >
              Deals
            </Link>

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="font-medium text-slate-700"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="font-medium text-slate-700"
            >
              Contact
            </Link>

            <Link
              href="/auth/login"
              onClick={() => setOpen(false)}
              className="rounded-md bg-blue-600 px-4 py-2 text-center font-medium text-white hover:bg-blue-700"
            >
              Sign in
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
