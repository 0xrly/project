import React from 'react';
import { Mail, Phone, MapPin, Globe, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@seguridadnacional.cu</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+53 7 123 4567</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>La Habana, Cuba</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#introduccion" className="hover:text-blue-200 transition-colors">
                  Introducción
                </a>
              </li>
              <li>
                <a href="#historia" className="hover:text-blue-200 transition-colors">
                  Historia
                </a>
              </li>
              <li>
                <a href="#amenazas" className="hover:text-blue-200 transition-colors">
                  Amenazas
                </a>
              </li>
              <li>
                <a href="#defensa" className="hover:text-blue-200 transition-colors">
                  Defensa
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  Documentos Oficiales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  Publicaciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  Galería de Medios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Globe className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Suscríbete a nuestro boletín informativo para mantenerte actualizado sobre temas de seguridad nacional.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-800 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} Seguridad Nacional de Cuba. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;