import React from 'react';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import PropertyCard from './components/PropertyCard';
import ImageCarousel from './components/ImageCarousel';
import ContactForm from './components/ContactForm';
import { MapPin, FileSearch, Calculator, Users, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="inicio" className="relative pt-24 pb-12 px-4">
        <ImageCarousel />
        <div className="max-w-7xl mx-auto py-20 text-center text-white relative z-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Encuentra el Terreno Perfecto para tu Inversión
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Asesoría especializada en terrenos agrícolas y urbanos sin construcciones
          </p>
          <a href="#contacto" className="inline-flex items-center bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors">
            Consulta Gratis
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              Icon={MapPin}
              title="Evaluación de Terrenos"
              description="Análisis detallado de ubicación, características y potencial de desarrollo."
            />
            <ServiceCard
              Icon={FileSearch}
              title="Due Diligence"
              description="Verificación legal y técnica completa de la propiedad."
            />
            <ServiceCard
              Icon={Calculator}
              title="Análisis de Inversión"
              description="Estudio de rentabilidad y proyecciones financieras."
            />
            <ServiceCard
              Icon={Users}
              title="Negociación"
              description="Representación y asesoría en el proceso de compra."
            />
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="terrenos" className="py-20 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Terrenos Destacados</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PropertyCard
              image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              title="Terreno Agrícola Valle Central"
              location="San Fernando, VI Región"
              area="5 hectáreas"
              price="$150.000.000"
              type="agricultural"
            />
            <PropertyCard
              image="https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              title="Parcela Vista al Mar"
              location="Puchuncaví, V Región"
              area="5000 m²"
              price="$180.000.000"
              type="urban"
            />
            <PropertyCard
              image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              title="Terreno Agrícola Precordillera"
              location="Curicó, VII Región"
              area="10 hectáreas"
              price="$280.000.000"
              type="agricultural"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestro Proceso</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "01", title: "Evaluación Inicial", desc: "Análisis de tus necesidades y objetivos" },
              { number: "02", title: "Búsqueda", desc: "Selección de propiedades que cumplan tus criterios" },
              { number: "03", title: "Análisis", desc: "Estudio técnico y legal detallado" },
              { number: "04", title: "Cierre", desc: "Acompañamiento en la negociación y compra" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contacta con Nosotros</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <MapPin className="h-8 w-8 text-emerald-500" />
              <span className="ml-2 text-xl font-bold text-white">TerraPro Asesorías</span>
            </div>
            <p className="text-gray-400">
              Expertos en asesoría para la compra de terrenos agrícolas y urbanos.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="mb-2">Email: contacto@terrapro.cl</p>
            <p>Teléfono: +56 9 1234 5678</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Horario de Atención</h3>
            <p className="mb-2">Lunes a Viernes: 9:00 - 18:00</p>
            <p>Sábado: 10:00 - 14:00</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} TerraPro Asesorías. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;