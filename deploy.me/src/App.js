import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import SignupForm from "./components/SignupForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <Hero />
      <Features />
      <SignupForm />
      <Footer />
    </div>
  );
}

export default App;
