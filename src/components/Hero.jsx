import React from "react";
import { Play, Mic } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Empowering <span className="text-purple-600">Rural Women</span> with
            AI Learning
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Learn digital skills, business basics, and access markets through an
            AI-powered tutor — in your language and voice.
          </p>

          <div className="flex gap-4">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 flex items-center gap-2">
              <Play size={18} /> Start Learning
            </button>
            <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 flex items-center gap-2">
              <Mic size={18} /> Voice Mode
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/22/19/15/woman-1850703_1280.jpg"
            alt="Rural Women Learning"
            className="rounded-2xl shadow-xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
            <p className="text-purple-600 font-semibold">AI Tutor Active</p>
            <p className="text-sm text-gray-500">24/7 Personalized Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
}
