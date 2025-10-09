"use client";

import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center justify-center px-6 py-12 space-y-10 overflow-hidden">
      {/* Profile Section */}
      <div className="text-center space-y-4 z-10">
        <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
          <Image
            src="/My Pic.jpg"
            alt="Zulqurnain Ghufran"
            fill
            sizes="(max-width: 768px) 128px, (max-width: 1200px) 160px, 160px"
            className="object-cover transform hover:scale-110 transition duration-500"
            priority
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-wide">
          Zulqurnain Ghufran
        </h1>
        <p className="text-lg text-gray-300 font-light">
          Full-Stack Developer | Python • Django • React & Next.js
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 z-10">
        <Link
          href="/projects"
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full font-semibold shadow-md transition transform hover:-translate-y-1 text-center"
        >
          View My Work
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 border border-indigo-500 hover:bg-indigo-500/10 rounded-full font-semibold transition transform hover:-translate-y-1 text-center"
        >
          Contact Me
        </Link>
      </div>

      {/* About Section */}
      <div className="max-w-2xl text-center space-y-5 z-10">
        <h2 className="text-2xl font-semibold text-indigo-400">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          Hi, I`m <span className="font-semibold">Zulqurnain Ghufran</span>, a
          passionate{" "}
          <span className="text-indigo-400">Full-Stack Developer</span> skilled
          in <span className="text-indigo-400">Python (Django)</span> and{" "}
          <span className="text-indigo-400">React + Next.js</span>. I love
          building scalable, efficient, and visually striking applications.
        </p>
        <p className="text-gray-300 leading-relaxed">
          I focus on creating clean code, smooth user experiences, and modern
          UI. Whether it’s an e-commerce platform or a productivity app, I aim
          to turn ideas into digital reality.
        </p>
      </div>

      {/* Floating Glow Accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/20 blur-3xl rounded-full animate-pulse" />
    </div>
  );
}
