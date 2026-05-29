import React, { useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";

export default function Navbar({ selectedLanguage, setSelectedLanguage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const languages = ["English", "Hindi", "Kannada", "Tamil"];

  return (
    <nav className="bg-white/90 backdrop-blur-lg shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <BookOpen className="text-purple-600" size={28} />
          <h1 className="text-2xl font-bold text-gray-800">SheLearn AI</h1>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-700 hover:text-purple-600">
            Features
          </a>
          <a href="#modules" className="text-gray-700 hover:text-purple-600">
            Modules
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-purple-600">
            Stories
          </a>

          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="border rounded-lg px-3 py-1 text-gray-700 focus:ring-2 focus:ring-purple-400"
          >
            {languages.map((lang) => (
              <option key={lang}>{lang}</option>
            ))}
          </select>
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-4">
          <a href="#features" className="block py-2 text-gray-700">
            Features
          </a>
          <a href="#modules" className="block py-2 text-gray-700">
            Modules
          </a>
          <a href="#testimonials" className="block py-2 text-gray-700">
            Stories
          </a>
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="mt-2 w-full border rounded-lg px-3 py-1 text-gray-700"
          >
            {languages.map((lang) => (
              <option key={lang}>{lang}</option>
            ))}
          </select>
        </div>
      )}
    </nav>
  );
}
