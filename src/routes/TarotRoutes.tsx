import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TarotConsultas from '../pages/Tarot/TarotConsultas';
import TarotInformacion from '../pages/Tarot/TarotInformacion';
import NotFound from '../pages/NotFound';

const TarotRoutes = () => {
  return (
    <Routes>
      <Route path="consultas-tarot" element={<TarotConsultas />} />
      <Route path="informacion-tarot/*" element={<TarotInformacion />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default TarotRoutes;