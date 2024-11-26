"use client";

import Link from "next/link";
import { Ticket } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-black dark:bg-white text-white dark:text-black">
      <div className="container mx-auto md:px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mb-6 md:mb-0">
            <Ticket className="h-6 w-6" />
            <span className="font-bold text-xl">TechHub</span>
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap gap-6 justify-center md:justify-end">
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
            <Link href="/events" className="hover:underline">
              Events
            </Link>
            <Link href="/communities" className="hover:underline">
              Communities
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} TechHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
