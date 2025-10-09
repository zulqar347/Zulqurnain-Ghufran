"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "ZG_Commerce",
      description:
        "A responsive and scalable Ecommerce store built with Next.js.",
      img: "/zg_commerce.PNG",
      link: "https://zg-commerce.vercel.app/",
    },
    {
      title: "E-commerce Store",
      description:
        "A modern full-stack store with cart, payments, and admin dashboard.",
      img: "/Ecommerce.png",
      link: "#",
    },
    {
      title: "Online Earning App",
      description: "An online earning app built using React and Django.",
      img: "/earnifyProject.jpg",
      link: "https://earnify-frontend.onrender.com",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio built with React and Django.",
      img: "/Portfolio.png",
      link: "https://portfolio-site-o7m4.onrender.com/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          My Projects
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A collection of my favorite works showcasing creativity,
          functionality, and design excellence.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg overflow-hidden hover:scale-[1.03] hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative w-full h-56 sm:h-64">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover transform hover:scale-110 transition duration-700"
                priority
              />
            </div>

            <div className="p-6 flex flex-col justify-between h-48">
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-indigo-400">
                  {project.title}
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <Link
                href={project.link}
                target="_blank"
                className="mt-4 inline-block text-center w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-full font-medium text-white transition"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>
    </div>
  );
}
