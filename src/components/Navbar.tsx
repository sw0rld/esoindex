import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cards, Sparkles, Sun, Heart, Hash, Wand2 } from 'lucide-react';

const navItems = [
  {
    path: '/tarot',
    icon: <Cards className="w-6 h-6" />,
    label: 'Tarot',
    subItems: [
      { path: '/tarot/consultas-tarot', label: 'Consultas de Tarot' },
      { path: '/tarot/informacion-tarot', label: 'Información de Tarot' }
    ]
  },
  {
    path: '/astrologia',
    icon: <Sparkles className="w-6 h-6" />,
    label: 'Astrología',
    subItems: [
      { path: '/astrologia/consultas-astrologicas', label: 'Consultas Astrológicas' },
      { path: '/astrologia/informacion-astrologia', label: 'Información Astrológica' }
    ]
  },
  {
    path: '/horoscopo',
    icon: <Sun className="w-6 h-6" />,
    label: 'Horóscopo',
    subItems: [
      { path: '/horoscopo/horoscopo-diario', label: 'Horóscopo Diario' },
      { path: '/horoscopo/horoscopo-signos', label: 'Signos del Zodiaco' }
    ]
  },
  {
    path: '/amor',
    icon: <Heart className="w-6 h-6" />,
    label: 'Amor',
    subItems: [
      { path: '/amor/consultas-amor', label: 'Consultas de Amor' },
      { path: '/amor/informacion-amor', label: 'Información sobre Amor' }
    ]
  },
  {
    path: '/numerologia',
    icon: <Hash className="w-6 h-6" />,
    label: 'Numerología',
    subItems: [
      { path: '/numerologia/calculos-numerologicos', label: 'Cálculos Numerológicos' },
      { path: '/numerologia/informacion-numerologia', label: 'Información Numerológica' }
    ]
  },
  {
    path: '/esoterismo',
    icon: <Wand2 className="w-6 h-6" />,
    label: 'Esoterismo',
    subItems: [
      { path: '/esoterismo/interpretacion-adivinacion', label: 'Interpretación y Adivinación' },
      { path: '/esoterismo/hechizos-rituales', label: 'Hechizos y Rituales' }
    ]
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (path: string) => {
    setActiveSubmenu(activeSubmenu === path ? null : path);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg md:hidden"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Navbar Container */}
      <motion.nav
        initial={false}
        animate={{
          width: isOpen ? '100%' : '0%',
          opacity: isOpen ? 1 : 0
        }}
        className={`fixed md:relative md:w-64 h-full bg-white shadow-xl z-40 overflow-hidden
                   transition-all duration-300 ease-in-out ${isOpen ? 'w-full' : 'w-0'} md:opacity-100`}
      >
        <div className="h-full overflow-y-auto py-20 md:py-8 px-4">
          {navItems.map((item) => (
            <div key={item.path} className="mb-2">
              <button
                onClick={() => toggleSubmenu(item.path)}
                className="w-full flex items-center p-3 rounded-lg hover:bg-purple-50
                         text-gray-700 hover:text-purple-600 transition-colors"
              >
                {item.icon}
                <span className="ml-3 font-medium">{item.label}</span>
              </button>

              <AnimatePresence>
                {activeSubmenu === item.path && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-8 overflow-hidden"
                  >
                    {item.subItems.map((subItem) => (
                      <NavLink
                        key={subItem.path}
                        to={subItem.path}
                        className={({ isActive }) =>
                          `block py-2 px-4 rounded-md text-sm ${
                            isActive
                              ? 'text-purple-600 bg-purple-50'
                              : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                          }`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.label}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;