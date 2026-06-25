import Link from "next/link";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social-links";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaHackerrank,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiGeeksforgeeks,
} from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-50 py-8 md:py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        <div className="flex flex-col items-center gap-6 text-center">

          {/* Name */}

          <div>

            <h3 className="text-xl font-bold sm:text-2xl">
              {profile.name}
            </h3>

            <p className="mt-2 text-sm text-slate-500 sm:text-base">
              {profile.subtitle}
            </p>

          </div>

          {/* Social Links */}

          <div className="flex flex-wrap justify-center gap-5 text-xl sm:text-2xl">

            <Link
              href={socialLinks.github}
              target="_blank"
              className="text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:text-black"
            >
              <FaGithub />
            </Link>

            <Link
              href={socialLinks.linkedin}
              target="_blank"
              className="text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:text-blue-600"
            >
              <FaLinkedin />
            </Link>

            <Link
              href={socialLinks.instagram}
              target="_blank"
              className="text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:text-pink-600"
            >
              <FaInstagram />
            </Link>

            <Link
              href={socialLinks.leetcode}
              target="_blank"
              className="text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:text-yellow-500"
            >
              <SiLeetcode />
            </Link>

            <Link
              href={socialLinks.hackerrank}
              target="_blank"
              className="text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:text-green-600"
            >
              <FaHackerrank />
            </Link>

            <Link
              href={socialLinks.geeksforgeeks}
              target="_blank"
              className="text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:text-emerald-600"
            >
              <SiGeeksforgeeks />
            </Link>

          </div>

          {/* Email */}

          <a
            href={`mailto:${profile.email}`}
            className="break-all text-sm text-slate-500 transition hover:text-slate-800 sm:text-base"
          >
            {profile.email}
          </a>

          {/* Copyright */}

          <p className="text-center text-xs text-slate-400 sm:text-sm">
            © {new Date().getFullYear()} {profile.name}. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}