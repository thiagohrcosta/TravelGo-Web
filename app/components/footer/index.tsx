import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">

          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-blue-900">
                Travel<span className="text-orange-500">Go</span>
              </span>
            </div>

            <p className="mt-4 text-sm text-slate-600">
              Discover and book the best travel destinations worldwide with ease
              and confidence.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-semibold text-slate-800">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/about" className="hover:text-blue-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-blue-600">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/deals" className="hover:text-blue-600">
                  Deals
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 font-semibold text-slate-800">
              Support
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-semibold text-slate-800">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="rounded-full bg-white p-2 shadow-sm hover:bg-blue-50"
              >
                <Facebook className="h-5 w-5 text-blue-600" />
              </a>
              <a
                href="#"
                className="rounded-full bg-white p-2 shadow-sm hover:bg-blue-50"
              >
                <Instagram className="h-5 w-5 text-pink-500" />
              </a>
              <a
                href="#"
                className="rounded-full bg-white p-2 shadow-sm hover:bg-blue-50"
              >
                <Twitter className="h-5 w-5 text-sky-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} TravelGo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
