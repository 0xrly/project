import React from 'react';
import { Menu, Flag } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-blue-900 text-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Flag className="h-6 w-6" />
            <span className="font-semibold text-lg">Seguridad Nacional de Cuba</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#introduccion" className="hover:text-blue-200 transition-colors">Introducción</a>
            <a href="#historia" className="hover:text-blue-200 transition-colors">Historia</a>
            <a href="#amenazas" className="hover:text-blue-200 transition-colors">Amenazas</a>
            <a href="#defensa" className="hover:text-blue-200 transition-colors">Defensa</a>
          </div>
          <div className="md:hidden">
            <button className="p-2 rounded-md hover:bg-blue-800">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;