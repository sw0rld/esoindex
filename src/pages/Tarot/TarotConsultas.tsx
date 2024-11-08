import React from 'react';
import { Link } from 'react-router-dom';
import { Cards, Clock, Heart, Coins } from 'lucide-react';
import SEO from '../../components/SEO';

const consultaTypes = [
  {
    icon: <Cards className="w-8 h-8" />,
    title: 'Tirada de 1 Carta',
    description: 'Respuesta rápida y precisa a tu pregunta',
    path: '/tarot/consultas-tarot/consulta-1-carta'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Tirada del Tiempo',
    description: 'Descubre cuándo sucederá lo que esperas',
    path: '/tarot/consultas-tarot/tirada-tiempo'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Tirada del Amor',
    description: 'Guía para tus relaciones y vida amorosa',
    path: '/tarot/consultas-tarot/tirada-amor'
  },
  {
    icon: <Coins className="w-8 h-8" />,
    title: 'Tirada del Dinero',
    description: 'Orientación en temas financieros y laborales',
    path: '/tarot/consultas-tarot/tirada-dinero'
  }
];

const TarotConsultas = () => {
  return (
    <>
      <SEO
        title="Consultas de Tarot - Sabiduría Esotérica"
        description="Descubre tu destino con nuestras consultas de tarot personalizadas. Tiradas especializadas para amor, dinero, tiempo y más."
        keywords="consulta tarot, tirada tarot, lectura cartas, tarot amor, tarot dinero"
        canonical="/tarot/consultas-tarot"
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-purple-900 mb-8">
          Consultas de Tarot
        </h1>
        
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Explora nuestras diferentes tiradas de tarot, cada una diseñada para 
          brindarte claridad y guía en aspectos específicos de tu vida.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {consultaTypes.map((type) => (
            <Link
              key={type.path}
              to={type.path}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300
                            group-hover:shadow-xl group-hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4
                              rounded-full bg-purple-100 text-purple-600
                              group-hover:bg-purple-600 group-hover:text-white
                              transition-colors">
                  {type.icon}
                </div>
                <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">
                  {type.title}
                </h2>
                <p className="text-gray-600 text-center">
                  {type.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            ¿No estás seguro qué tipo de consulta necesitas?
          </p>
          <Link
            to="/tarot/informacion-tarot"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg
                     hover:bg-purple-700 transition-colors"
          >
            Aprende más sobre el Tarot
          </Link>
        </div>
      </div>
    </>
  );
};

export default TarotConsultas;