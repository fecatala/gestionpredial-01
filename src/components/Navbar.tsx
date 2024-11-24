import React from 'react';
import { MapPin, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <MapPin className="h-8 w-8 text-emerald-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">TerraPro Asesorías</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-emerald-600">Inicio</a>
            <a href="#servicios" className="text-gray-700 hover:text-emerald-600">Servicios</a>
            <a href="#terrenos" className="text-gray-700 hover:text-emerald-600">Terrenos</a>
            <a href="#proceso" className="text-gray-700 hover:text-emerald-600">Proceso</a>
            <a href="#contacto" className="text-gray-700 hover:text-emerald-600">Contacto</a>
            <div className="flex items-center text-emerald-600">
              <Phone className="h-5 w-5 mr-2" />
              <span>+56 9 1234 5678</span>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Inicio</a>
            <a href="#servicios" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Servicios</a>
            <a href="#terrenos" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Terrenos</a>
            <a href="#proceso" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Proceso</a>
            <a href="#contacto" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Contacto</a>
            <div className="flex items-center px-3 py-2 text-emerald-600">
              <Phone className="h-5 w-5 mr-2" />
              <span>+56 9 1234 5678</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}