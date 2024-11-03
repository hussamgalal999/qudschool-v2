import React from 'react';
import { BookOpen } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">QudSchool</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600">Courses</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Age Groups</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">About Us</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-blue-600 hover:text-blue-700">Log In</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;