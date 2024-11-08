import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Cards, Users, GraduationCap } from 'lucide-react';
import SEO from '../../components/SEO';

const infoSections = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Historia y Origen',
    description: 'Descubre los orígenes y evolución del Tarot a través de los siglos',
    path: '/tarot/informacion-tarot/historia-origen-tarot'
  },
  {
    icon: <Cards className="w-8 h-8" />,
    title: 'Barajas de Tarot',
    description: 'Conoce los diferentes tipos de barajas y sus características',
    path: '/tarot/informacion-tarot/baraja-tarot'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Combinaciones',
    description: 'Aprende sobre las combinaciones de cartas y sus significados',
    path: '/tarot/informacion-tarot/combinaciones-tarot'
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: 'Aprende Tarot',
    description: 'Guías y consejos para aprender a leer el Tarot',
    path: '/tarot/informacion-tarot/aprender-tarot'
  }
];

const TarotInformacion = () => {
  return (
    <>
      <SEO
        title="Información sobre Tarot - Sabiduría Esotérica"
        description="Aprende todo sobre el Tarot: su historia, tipos de barajas, significados y cómo interpretarlo."
        keywords="información tarot, historia tarot, barajas tarot, aprender tarot"
        canonical="/tarot/informacion-tarot"
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-purple-900 mb-8">
          Información sobre Tarot
        </h1>

        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Explora el fascinante mundo del Tarot a través de nuestras guías detalladas
          y recursos educativos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {infoSections.map((section) => (
            <Link
              key={section.path}
              to={section.path}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300
                            group-hover:shadow-xl group-hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12
                                rounded-full bg-purple-100 text-purple-600
                                group-hover:bg-purple-600 group-hover:text-white
                                transition-colors">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800 ml-4">
                    {section.title}
                  </h2>
                </div>
                <p className="text-gray-600">
                  {section.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-purple-900 mb-4 text-center">
            ¿Listo para una consulta?
          </h3>
          <p className="text-gray-700 text-center mb-6">
            Aplica tus conocimientos con una lectura personalizada
          </p>
          <div className="text-center">
            <Link
              to="/tarot/consultas-tarot"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg
                       hover:bg-purple-700 transition-colors"
            >
              Realizar Consulta
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TarotInformacion;