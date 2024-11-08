import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      {/* Lazy loaded routes */}
      <Route
        path="/tarot/*"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <TarotRoutes />
          </React.Suspense>
        }
      />
      
      {/* Add other main section routes similarly */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const TarotRoutes = React.lazy(() => import('./TarotRoutes'));

export default AppRoutes;