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
    <footer className="border-t bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex flex-col items-center gap-6">

          {/* Name */}
          <div className="text-center">

            <h3 className="text-2xl font-bold">
              {profile.name}
            </h3>

            <p className="mt-2 text-slate-500">
              {profile.subtitle}
            </p>

          </div>

          {/* Social Links */}

          <div className="flex flex-wrap justify-center gap-5 text-2xl">

            {/* GitHub */}
            <Link
              href={socialLinks.github}
              target="_blank"
              className="text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:text-black"
            >
              <FaGithub />
            </Link>

            {/* LinkedIn */}
            <Link
              href={socialLinks.linkedin}
              target="_blank"
              className="text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:text-blue-600"
            >
              <FaLinkedin />
            </Link>

            {/* Instagram */}
            <Link
              href={socialLinks.instagram}
              target="_blank"
              className="text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:text-pink-600"
            >
              <FaInstagram />
            </Link>

            {/* LeetCode */}
            <Link
              href={socialLinks.leetcode}
              target="_blank"
              className="text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:text-yellow-500"
            >
              <SiLeetcode />
            </Link>

            {/* HackerRank */}
            <Link
              href={socialLinks.hackerrank}
              target="_blank"
              className="text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:text-green-600"
            >
              <FaHackerrank />
            </Link>

            {/* GeeksforGeeks */}
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
            className="text-slate-500 transition hover:text-slate-800"
          >
            {profile.email}
          </a>

          {/* Copyright */}

          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} {profile.name}. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}