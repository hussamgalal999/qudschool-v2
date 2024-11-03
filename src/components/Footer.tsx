import React from 'react';
import { BookOpen, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-white">QudSchool</span>
            </div>
            <p className="text-gray-400">
              Empowering the next generation with digital skills and creative thinking
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Courses</a></li>
              <li><a href="#" className="hover:text-blue-400">Teachers</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-400">Parent Guide</a></li>
              <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-400"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-400"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-400"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 QudSchool. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400">Terms of Service</a>
              <a href="#" className="hover:text-blue-400">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;