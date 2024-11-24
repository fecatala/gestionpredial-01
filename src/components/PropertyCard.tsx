import React from 'react';

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  area: string;
  price: string;
  type: 'agricultural' | 'urban';
}

export default function PropertyCard({ image, title, location, area, price, type }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2 ${
          type === 'agricultural' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
        }`}>
          {type === 'agricultural' ? 'Agrícola' : 'Urbano'}
        </span>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{location}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{area}</span>
          <span className="font-semibold text-emerald-600">{price}</span>
        </div>
      </div>
    </div>
  );
}