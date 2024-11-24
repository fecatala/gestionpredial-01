import React, { useState } from 'react';
import { Send } from 'lucide-react';
import MapSelector from './MapSelector';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'Agrícola',
    message: '',
  });

  const [location, setLocation] = useState({
    center: { lat: -33.4489, lng: -70.6693 }, // Santiago, Chile
    radius: 5, // 5km default radius
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...formData, searchLocation: location });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Terreno</label>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option>Agrícola</option>
            <option>Urbano</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Área de Búsqueda</label>
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">Radio de búsqueda (km)</label>
          <input
            type="range"
            min="1"
            max="50"
            value={location.radius}
            onChange={(e) => setLocation(prev => ({ ...prev, radius: Number(e.target.value) }))}
            className="w-full h-2 bg-emerald-200 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-sm text-gray-600">{location.radius} km</span>
        </div>
        <div className="rounded-lg overflow-hidden border border-gray-200">
          <MapSelector
            center={location.center}
            radius={location.radius}
            onCenterChange={(center) => setLocation(prev => ({ ...prev, center }))}
            onRadiusChange={(radius) => setLocation(prev => ({ ...prev, radius }))}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center"
      >
        Enviar Consulta
        <Send className="ml-2 h-5 w-5" />
      </button>
    </form>
  );
}