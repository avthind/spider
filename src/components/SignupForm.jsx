import React from "react";

const SignupForm = () => {
  return (
    <section id="signup" className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Join the Beta
        </h3>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Be the first to experience faster, smarter deployments. 
          Get early access to deploy.me and transform your workflow.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-lg border-2 border-gray-200 text-gray-900 focus:outline-none focus:border-blue-500 transition"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transition transform hover:scale-105"
          >
            Get Early Access
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignupForm;
