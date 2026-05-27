"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Productos", href: "#productos" },
  { label: "Precios", href: "#precios" },
  { label: "Contactos", href: "#contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#080D1A]/90 backdrop-blur-md border-b border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center shrink-0">
            <span className="text-2xl font-extrabold leading-none text-white">
              Trekan
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-[#006AFF] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop auth buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#login"
              className="text-sm font-medium text-gray-300 hover:text-[#006AFF] px-3 py-1.5 rounded transition-colors"
            >
              Login
            </a>
            <a
              href="#registro"
              className="text-sm font-semibold text-white px-5 py-1.5 rounded transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#006AFF" }}
            >
              Registro
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded text-gray-300 hover:text-[#006AFF] focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A0E1F] border-t border-white/10 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-[#006AFF] py-2.5 border-b border-white/10 last:border-0 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-3">
            <a
              href="#login"
              className="text-sm font-medium text-gray-300 hover:text-[#006AFF] py-1.5 px-2 rounded transition-colors"
            >
              Login
            </a>
            <a
              href="#registro"
              className="text-sm font-semibold text-white py-2 px-4 rounded text-center hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#006AFF" }}
            >
              Registro
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
