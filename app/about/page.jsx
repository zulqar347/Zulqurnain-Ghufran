"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Floating Glow Accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 z-10">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl">
            <Image
              src="/My Pic.jpg" // 👈 place this image inside the /public folder
              alt="Zulqurnain Ghufran"
              fill
              className="object-cover transform hover:scale-110 transition duration-500"
              priority
            />
          </div>
        </div>

        {/* About Text */}
        <div className="max-w-xl text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h1>

          <p className="text-gray-300 leading-relaxed">
            Hi, I'm <span className="font-semibold">Zulqurnain Ghufran</span>, a
            passionate{" "}
            <span className="text-indigo-400 font-medium">
              Full-Stack Developer
            </span>{" "}
            with expertise in building modern, scalable, and responsive web
            applications. I specialize in{" "}
            <span className="text-indigo-400">Python (Django)</span> and{" "}
            <span className="text-indigo-400">React</span>, crafting digital
            solutions that combine performance and beauty.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Over the past year, I’ve developed multiple projects including
            e-commerce platforms, portfolio websites, and productivity tools. I
            aim to help individuals and businesses bring their ideas to life
            with clean, efficient code and sleek UI design.
          </p>

          {/* Skills */}
          <div>
            <h2 className="text-2xl font-semibold text-indigo-400 mb-3">
              Skills
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-300">
              <li className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm text-sm hover:bg-indigo-600/30 transition">
                Python & Django
              </li>
              <li className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm text-sm hover:bg-indigo-600/30 transition">
                JavaScript & React
              </li>
              <li className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm text-sm hover:bg-indigo-600/30 transition">
                REST APIs
              </li>
              <li className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm text-sm hover:bg-indigo-600/30 transition">
                Responsive Design
              </li>
              <li className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm text-sm hover:bg-indigo-600/30 transition">
                PostgreSQL / SQLite
              </li>
              <li className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm text-sm hover:bg-indigo-600/30 transition">
                Git & Version Control
              </li>
            </ul>
          </div>

          {/* Resume Button */}
          <div className="pt-4">
            <Link
              href="/resume" // 👈 put your resume file inside /public
              //   target="_blank"
              className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full font-semibold shadow-md transition transform hover:-translate-y-1"
            >
              View Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
