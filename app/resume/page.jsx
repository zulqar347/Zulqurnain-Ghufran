"use client";

import React from "react";

export default function ResumePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 py-16 overflow-hidden">
      {/* Floating Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto space-y-16 z-10">
        {/* Header */}
        <header className="text-center space-y-3">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            My Resume
          </h1>
          <p className="text-gray-400 text-lg">
            Full-Stack Developer | Python • Django • React
          </p>
        </header>

        {/* Profile Summary */}
        <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-white/10 hover:border-indigo-500/40 transition">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-3">
            Profile
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Full-Stack Developer with 2+ years of experience in building
            scalable web applications. Skilled in Python, Django, React, and
            responsive design. Passionate about creating solutions that are both
            functional and visually appealing.
          </p>
        </section>

        {/* Education */}
        <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-white/10 hover:border-indigo-500/40 transition">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">
            Education
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">
                Bachelor of Science in Mathematics (Minor in Computer Science)
              </h3>
              <p className="text-gray-400 text-sm">
                GPGC Haripur | 2022 - 2026
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">High School</h3>
              <p className="text-gray-400 text-sm">
                GHSS Kakotri | 2018 - 2020
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-white/10 hover:border-indigo-500/40 transition">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">
            Skills
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-300">
            {[
              "Python & Django",
              "React, Next.js & JavaScript",
              "HTML, CSS, Tailwind",
              "REST API Development",
              "MongoDB, SQL & PostgreSQL",
              "Git & Version Control",
            ].map((skill, i) => (
              <li
                key={i}
                className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm text-sm hover:bg-indigo-600/30 transition"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Experience */}
        <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-white/10 hover:border-indigo-500/40 transition">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">
            Experience
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg">Freelance Web Developer</h3>
              <p className="text-gray-400 text-sm mb-2">
                Self-Employed | 2023 - Present
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>
                  Built responsive web applications for clients using React and
                  Django.
                </li>
                <li>
                  Implemented APIs, user authentication, and database
                  integration.
                </li>
                <li>Optimized websites for performance and SEO.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Intern - Web Developer</h3>
              <p className="text-gray-400 text-sm mb-2">
                Tech Solutions Ltd | 2022 - 2023
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>
                  Assisted in developing internal dashboard tools using Django.
                </li>
                <li>Maintained existing web applications and fixed bugs.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certifications (optional) */}
        {/* 
        <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-white/10 hover:border-indigo-500/40 transition">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">Certifications</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Python Django Full-Stack Development - Coursera</li>
            <li>React JS Front-End Development - Udemy</li>
          </ul>
        </section>
        */}

        {/* Download Resume */}
        <div className="text-center pt-6">
          <a
            href="/resume.pdf" // 👈 place your resume file in /public
            download
            className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full font-semibold shadow-md transition transform hover:-translate-y-1"
          >
            Download Resume PDF
          </a>
        </div>
      </div>
    </div>
  );
}
