import React from "react";

export default function Stats() {
  const stats = [
    { label: "Languages Supported", value: "10+" },
    { label: "Women Trained", value: "25K+" },
    { label: "Communities Reached", value: "120+" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <h3 className="text-3xl font-bold text-purple-600">
              {stat.value}
            </h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
