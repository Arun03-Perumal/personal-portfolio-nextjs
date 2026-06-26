"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";

import ThemeToggle from "@/components/theme/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-lg transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-6">

        {/* Logo */}
        <a
          href="#home"
          className="font-bold tracking-tight text-slate-900 transition hover:text-blue-600 dark:text-white"
        >
          <span className="text-lg lg:hidden">
            {profile.shortName}
          </span>

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
              className="text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Theme Toggle */}
          <div className="flex h-10 w-10 items-center justify-center">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-300 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
            aria-label="Toggle Navigation"
          >
            {isOpen ? (
              <X className="h-5 w-5 text-slate-700 dark:text-white" />
            ) : (
              <Menu className="h-5 w-5 text-slate-700 dark:text-white" />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white shadow-md dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <div className="flex flex-col px-5 py-4">

            {navigation.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition-colors duration-300 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
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