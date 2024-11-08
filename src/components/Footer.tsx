import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tarot" className="text-gray-600 hover:text-purple-600">
                  Tarot
                </Link>
              </li>
              <li>
                <Link to="/astrologia" className="text-gray-600 hover:text-purple-600">
                  Astrología
                </Link>
              </li>
              <li>
                <Link to="/horoscopo" className="text-gray-600 hover:text-purple-600">
                  Horóscopo
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Información</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre-nosotros" className="text-gray-600 hover:text-purple-600">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-600 hover:text-purple-600">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-purple-600">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacidad" className="text-gray-600 hover:text-purple-600">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/terminos" className="text-gray-600 hover:text-purple-600">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-600 hover:text-purple-600">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="mailto:contact@esoteric-wisdom.com"
                className="text-gray-600 hover:text-purple-600"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Sabiduría Esotérica. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;