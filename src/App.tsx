import React from 'react';
import { AlertTriangle, History, Shield, Users, Building2, Radio, FileText, Target, Globe, DollarSign, Ban, Briefcase, UserCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import InfoCard from './components/InfoCard';
import Footer from './components/Footer';
import habanaImage from './assets/habana.jpg';
import restriccionesImage from './assets/restricciones.jpg';
import vitalesImage from './assets/vitales.webp';
import defensaImage from './assets/defensa.webp'
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      
      {/* Authors Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white py-8 shadow-md"
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Autores</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-blue-50"
              >
                <UserCircle className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <p className="font-medium text-gray-800">Kleyris Edenia Torres Ramos</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-blue-50"
              >
                <UserCircle className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <p className="font-medium text-gray-800">José Carlos Pérez Cáceres</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-blue-50"
              >
                <UserCircle className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <p className="font-medium text-gray-800">Orlando Farid Giquez Tarafa</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      <Section id="introduccion" title="Introducción">
        <div className="prose max-w-none mb-8">
          <p className="text-lg text-gray-700">
            La seguridad nacional de Cuba representa un complejo entramado de desafíos, estrategias y respuestas 
            que han evolucionado a lo largo de más de seis décadas. En este análisis, exploramos los diversos 
            aspectos que conforman la política de seguridad nacional cubana y su impacto en la sociedad.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard
            icon={AlertTriangle}
            title="Conceptos Fundamentales"
            description="Definiciones y marco teórico sobre riesgos, amenazas y agresiones en el contexto cubano."
            delay={0.2}
          />
          <InfoCard
            icon={Target}
            title="Objetivos Estratégicos"
            description="Metas y prioridades en la protección de la soberanía y los intereses nacionales."
            delay={0.4}
          />
          <InfoCard
            icon={Globe}
            title="Contexto Internacional"
            description="Análisis del papel de Cuba en el escenario geopolítico global y regional."
            delay={0.6}
          />
        </div>
      </Section>

      <Section id="historia" title="Evolución Histórica" className="bg-white">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Cronología de la Defensa Nacional</h3>
            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 10 }}
                className="border-l-4 border-blue-600 pl-4"
              >
                <h4 className="font-semibold text-lg">1959 - 1960</h4>
                <p className="text-gray-600">Establecimiento de las bases del sistema de defensa nacional tras el triunfo de la Revolución.</p>
              </motion.div>
              <motion.div 
                whileHover={{ x: 10 }}
                className="border-l-4 border-blue-600 pl-4"
              >
                <h4 className="font-semibold text-lg">1961</h4>
                <p className="text-gray-600">Victoria de Playa Girón y consolidación de las estrategias defensivas.</p>
              </motion.div>
              <motion.div 
                whileHover={{ x: 10 }}
                className="border-l-4 border-blue-600 pl-4"
              >
                <h4 className="font-semibold text-lg">1962</h4>
                <p className="text-gray-600">Crisis de Octubre y su impacto en la política de defensa.</p>
              </motion.div>
              <motion.div 
                whileHover={{ x: 10 }}
                className="border-l-4 border-blue-600 pl-4"
              >
                <h4 className="font-semibold text-lg">1963 - 1990</h4>
                <p className="text-gray-600">Desarrollo y fortalecimiento del concepto de Guerra de Todo el Pueblo.</p>
              </motion.div>
            </div>
          </div>
          <div className="space-y-6">
    

            <motion.img
              whileHover={{ scale: 1.05 }}
              src={habanaImage}
              alt="La Habana histórica"
              className="w-full h-72 object-cover rounded-lg mb-4 shadow-lg"
            />
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-2">Lecciones Históricas</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <History className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Importancia de la preparación militar del pueblo</span>
                </li>
                <li className="flex items-center">
                  <History className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Desarrollo de estrategias defensivas propias</span>
                </li>
                <li className="flex items-center">
                  <History className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Valor de la unidad nacional</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section id="amenazas" title="Amenazas Actuales">
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Impacto del Bloqueo Económico</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <img
                src={restriccionesImage}
                alt="Puerto comercial"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold mb-3">Restricciones Comerciales</h4>
              <p className="text-gray-600">
                El bloqueo afecta severamente el comercio internacional de Cuba, limitando el acceso a mercados,
                tecnologías y recursos esenciales para el desarrollo económico.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <img
                src={vitalesImage}
                alt="Sistema de salud"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold mb-3">Impacto en Sectores Vitales</h4>
              <p className="text-gray-600">
                Sectores como la salud, educación y transporte se ven afectados por las restricciones,
                dificultando el acceso a medicamentos y equipos médicos esenciales.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <DollarSign className="h-8 w-8 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold mb-3">Impacto Financiero</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Restricciones bancarias internacionales</li>
              <li>• Limitaciones en inversiones extranjeras</li>
              <li>• Obstáculos en transacciones comerciales</li>
            </ul>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <Ban className="h-8 w-8 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold mb-3">Restricciones Tecnológicas</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Acceso limitado a tecnologías avanzadas</li>
              <li>• Dificultades en telecomunicaciones</li>
              <li>• Barreras en desarrollo digital</li>
            </ul>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <Briefcase className="h-8 w-8 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold mb-3">Efectos Laborales</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Impacto en empleo y salarios</li>
              <li>• Limitaciones en desarrollo profesional</li>
              <li>• Afectaciones a sectores productivos</li>
            </ul>
          </motion.div>
        </div>
      </Section>

      <Section id="defensa" title="Sistema de Defensa" className="bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img
          src={defensaImage}
            alt="Defensa y seguridad"
            className="w-full h-96 object-cover rounded-lg shadow-xl mb-8"
          />
          <p className="text-lg text-gray-700">
            El sistema de defensa nacional cubano se fundamenta en la participación activa de toda la sociedad, 
            combinando elementos militares, civiles y sociales en una estrategia integral de protección de la soberanía.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-blue-50 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Doctrina Militar</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">Guerra de Todo el Pueblo</h4>
                  <p className="text-gray-600">Estrategia defensiva que involucra a toda la población en la defensa del país.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">Zonas de Defensa</h4>
                  <p className="text-gray-600">Organización territorial para la defensa y protección de la población.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">Preparación Militar</h4>
                  <p className="text-gray-600">Sistema de entrenamiento y capacitación para la defensa nacional.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-blue-50 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Participación Popular</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Users className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">Organización Social</h4>
                  <p className="text-gray-600">Estructuras comunitarias para la defensa y protección civil.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">Educación en Defensa</h4>
                  <p className="text-gray-600">Programas de formación y concientización sobre seguridad nacional.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">Movilización Popular</h4>
                  <p className="text-gray-600">Capacidad de respuesta ante situaciones de emergencia.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

export default App;