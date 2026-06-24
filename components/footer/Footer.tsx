import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaHackerrank,
} from "react-icons/fa";

import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col items-center gap-6">

          {/* Name */}
          <div className="text-center">
            <h3 className="text-2xl font-bold">
              Arun Perumal
            </h3>

            <p className="text-slate-500 mt-2">
              Frontend Developer • MERN Developer • CSE Student
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-5 text-2xl">

            {/* GitHub */}
            <Link
              href="#"
              target="_blank"
              className="text-slate-600 hover:text-black transition"
            >
              <FaGithub />
            </Link>

            {/* LinkedIn */}
            <Link
              href="#"
              target="_blank"
              className="text-slate-600 hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </Link>

            {/* Instagram */}
            <Link
              href="#"
              target="_blank"
              className="text-slate-600 hover:text-pink-600 transition"
            >
              <FaInstagram />
            </Link>

            {/* Twitter / X */}
            <Link
              href="#"
              target="_blank"
              className="text-slate-600 hover:text-sky-500 transition"
            >
              <FaTwitter />
            </Link>

            {/* LeetCode */}
            <Link
              href="#"
              target="_blank"
              className="text-slate-600 hover:text-yellow-500 transition"
            >
              <SiLeetcode />
            </Link>

            {/* HackerRank */}
            <Link
              href="#"
              target="_blank"
              className="text-slate-600 hover:text-green-600 transition"
            >
              <FaHackerrank />
            </Link>

            {/* GeeksforGeeks */}
            <Link
              href="#"
              target="_blank"
              className="text-slate-600 hover:text-green-700 transition"
            >
              <SiGeeksforgeeks />
            </Link>

          </div>

          {/* Email */}
          <div className="text-center">
            <a
              href="mailto:yourmail@example.com"
              className="text-slate-500 hover:text-slate-800 transition"
            >
              yourmail@example.com
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-slate-400">
            © 2026 Arun Perumal. All Rights Reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}