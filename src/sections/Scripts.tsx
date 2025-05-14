import React from 'react';
import SectionHeader from '../components/SectionHeader';

const scripts = [
  {
    title: 'Guion Narrativo',
    description: 'Explora el guion narrativo que da vida a nuestra historia.',
    link: 'https://uexternadoedu-my.sharepoint.com/:w:/g/personal/annie_botia_uexternado_edu_co/EZji0R446Q9Jiw512rcHG0wB1xn0kWo0PtyVNE2zHCp4rQ?e=cvhKFZ',
    icon: '📜', // Puedes reemplazar esto con un ícono o imagen
  },
  {
    title: 'Guion Técnico',
    description: 'Descubre los detalles técnicos detrás de cada escena.',
    link: 'https://uexternadoedu-my.sharepoint.com/:x:/g/personal/annie_botia_uexternado_edu_co/EWdWcehjbzlNvJfS1-G1yJABd2M5i31npRKjX-5mQJeTTA?e=vmM5ab',
    icon: '🎥', // Puedes reemplazar esto con un ícono o imagen
  },
  {
    title: 'Plan de Rodaje y Pietaje',
    description: 'Consulta el plan de rodaje y pietaje de la producción.',
    link: 'https://uexternadoedu-my.sharepoint.com/:w:/g/personal/annie_botia_uexternado_edu_co/EZji0R446Q9Jiw512rcHG0wB1xn0kWo0PtyVNE2zHCp4rQ?e=cvhKFZ',
    icon: '🎬', // Puedes reemplazar esto con un ícono o imagen
  },
];

const Scripts = () => {
  return (
    <section className="h-screen py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* SectionHeader con solo el ID */}
        <SectionHeader id="guiones" />

        <h2 className="text-4xl font-serif font-bold text-center mb-8" style={{ color: '#6e322b' }}>
          Guiones
        </h2>
        <p className="text-center text-gray-700 mb-12">
          Descubre los documentos clave que estructuran nuestra producción.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scripts.map((script, index) => (
            <a
              key={index}
              href={script.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105"
            >
              <div className="text-6xl mb-4">{script.icon}</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#6e322b' }}>
                {script.title}
              </h3>
              <p className="text-gray-600">{script.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scripts;