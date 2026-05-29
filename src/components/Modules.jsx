import React from "react";

export default function Modules() {
  const modules = [
    "Digital Literacy",
    "Business Skills",
    "Access to Markets",
    "Financial Literacy",
  ];

  return (
    <section id="modules" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Learning Modules
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {modules.map((m, i) => (
            <div
              key={i}
              className="bg-purple-50 border border-purple-100 rounded-2xl py-8 px-4 hover:bg-purple-100 transition"
            >
              <h3 className="text-purple-700 font-semibold">{m}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
