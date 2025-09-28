import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-6">
          Ship apps faster with <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">deploy.me</span>
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          The developer-first platform for seamless deploys, built for speed and scale. 
          From development to production in minutes, not hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#signup"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transition transform hover:scale-105"
          >
            Get Early Access
          </a>
          <a
            href="#demo"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            View Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
