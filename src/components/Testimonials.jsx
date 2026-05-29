import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Lakshmi, Karnataka",
      quote:
        "AI Tutor taught me how to use my phone to sell handmade baskets online!",
    },
    {
      name: "Radha, Tamil Nadu",
      quote:
        "I learned basic accounting and how to track my business expenses easily.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-purple-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Women Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md border border-purple-100"
            >
              <p className="text-gray-600 italic mb-4">“{t.quote}”</p>
              <p className="font-semibold text-purple-700">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
