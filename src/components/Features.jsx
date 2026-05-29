import React from "react";
import { Award, Mic, BookOpen, Users } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Mic className="text-purple-600" size={28} />,
      title: "Voice-Based Learning",
      desc: "Learn through simple voice interactions in your local language.",
    },
    {
      icon: <BookOpen className="text-purple-600" size={28} />,
      title: "Localized Lessons",
      desc: "Tailored courses in Hindi, Kannada, Tamil, and more.",
    },
    {
      icon: <Users className="text-purple-600" size={28} />,
      title: "Peer Community",
      desc: "Connect with other women learners and share experiences.",
    },
    {
      icon: <Award className="text-purple-600" size={28} />,
      title: "Certified Skills",
      desc: "Earn recognition for your progress and achievements.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Why Choose SheLearn AI
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
            >
              <div className="mb-4 flex justify-center">{f.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
