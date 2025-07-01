import React from 'react';
import { Zap, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl">Electric Vehicle Charge and Range Analysis</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of electric vehicle analytics and insights, 
              helping accelerate the transition to sustainable transportation 
              through data-driven solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">vprramodreddy59@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+91 8867549105</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Puttur, AP, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#dashboard" className="text-gray-300 hover:text-white transition-colors duration-200">Dashboard</a></li>
              <li><a href="#story" className="text-gray-300 hover:text-white transition-colors duration-200">Story</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-white transition-colors duration-200">Team</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">API Reference</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-300">
            <span>&copy; 2025 Electric Vehicle Charge and Range Analysis | </span>
            <a
            
              href="https://www.linkedin.com/in/v-pramod-reddy-01683a29b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline flex items-center space-x-1"
            >
    
              <span>V PRAMOD REDDY</span>
            </a>
          </div>
          <div className="mt-4 md:mt-0">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;