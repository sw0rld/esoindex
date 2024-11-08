import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <>
      <SEO
        title="Página no encontrada - Sabiduría Esotérica"
        description="Lo sentimos, la página que buscas no existe."
        keywords="404, página no encontrada, error"
        canonical="/404"
      />
      
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
          <p className="text-2xl text-gray-700 mb-8">Página no encontrada</p>
          <p className="text-gray-600 mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg
                     hover:bg-purple-700 transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Volver al inicio
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;