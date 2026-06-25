"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-6">

        {/* Logo */}

        <a
          href="#home"
          className="font-bold tracking-tight text-slate-900 transition hover:text-blue-600"
        >
          {/* Mobile & Tablet */}

          <span className="text-lg lg:hidden">
            {profile.shortName}
          </span>

          {/* Desktop */}

          <span className="hidden text-xl lg:block">
            {profile.name}
          </span>
        </a>

        {/* Desktop Navigation */}

        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-blue-600"
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden"
          aria-label="Toggle Navigation"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-slate-700" />
          ) : (
            <Menu className="h-6 w-6 text-slate-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="border-t border-slate-200 bg-white shadow-md lg:hidden">
          <div className="flex flex-col px-5 py-4">

            {navigation.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
              >
                {item.title}
              </a>
            ))}

          </div>
        </div>
      )}
    </nav>
  );
}