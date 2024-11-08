import React from 'react';
import { Link } from 'react-router-dom';
import { Cards, Sparkles, Sun, Heart, Hash, Wand2 } from 'lucide-react';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <>
      <SEO
        title="Sabiduría Esotérica - Tu guía espiritual"
        description="Descubre los secretos del tarot, astrología, horóscopo, amor, numerología y esoterismo. Consultas personalizadas y guía espiritual."
        keywords="tarot, astrología, horóscopo, amor, numerología, esoterismo, consultas espirituales"
        canonical="/"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-purple-900 mb-8">
            Sabiduría Esotérica
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { icon: <Cards className="w-8 h-8" />, title: 'Tarot', path: '/tarot' },
              { icon: <Sparkles className="w-8 h-8" />, title: 'Astrología', path: '/astrologia' },
              { icon: <Sun className="w-8 h-8" />, title: 'Horóscopo', path: '/horoscopo' },
              { icon: <Heart className="w-8 h-8" />, title: 'Amor', path: '/amor' },
              { icon: <Hash className="w-8 h-8" />, title: 'Numerología', path: '/numerologia' },
              { icon: <Wand2 className="w-8 h-8" />, title: 'Esoterismo', path: '/esoterismo' }
            ].map((section) => (
              <Link
                key={section.path}
                to={section.path}
                className="transform hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 text-purple-600">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-center text-gray-800">
                    {section.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;