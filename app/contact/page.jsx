"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_a7uugrb", // 🔹 Replace with your EmailJS Service ID
        "template_7la0iub", // 🔹 Replace with your EmailJS Template ID
        e.target,
        "60me3X2NKHecWMJ24" // 🔹 Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          e.target.reset();
          setLoading(false);
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
          console.error(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Glow Accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="max-w-lg w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 z-10 border border-white/10">
        <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Contact Me
        </h1>
        <p className="text-center text-gray-300 mb-8">
          Have a question or want to collaborate? Fill out the form below and
          I’ll get back to you soon.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-white placeholder-gray-400 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-white placeholder-gray-400 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Write your message..."
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-white placeholder-gray-400 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-full font-semibold transition ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
