import React from "react";

const features = [
  { title: "One-Click Deploys", desc: "Push your code and watch it go live instantly." },
  { title: "Scalable by Default", desc: "From side projects to enterprise apps, we’ve got you covered." },
  { title: "Built for Teams", desc: "Collaborate with your team and ship features faster." },
  { title: "Analytics Ready", desc: "Track performance and monitor deployments in real-time." },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Why deploy.me?
        </h3>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Everything you need to deploy faster, scale smarter, and ship with confidence.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition transform border border-blue-100"
            >
              <h4 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {f.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
