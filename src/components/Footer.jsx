import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Brand */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">deploy.me</h2>
          <p className="mt-2 text-sm text-white">
            Ship apps faster. Deploy with confidence.
          </p>
          <p className="mt-4 text-sm text-gray-400">
            © {new Date().getFullYear()} deploy.me. All rights reserved.
          </p>
        </div>

        {/* Company */}
        <div>
          <h5 className="text-white font-semibold mb-2">Company</h5>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#careers" className="hover:text-white transition">Careers</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h5 className="text-white font-semibold mb-2">Resources</h5>
          <ul className="space-y-2">
            <li><a href="#blog" className="hover:text-white transition">Blog</a></li>
            <li><a href="#help" className="hover:text-white transition">Help Center</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h5 className="text-white font-semibold mb-2">Connect</h5>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-white transition"><FaGithub size={20} /></a>
            <a href="#" className="hover:text-white transition"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
