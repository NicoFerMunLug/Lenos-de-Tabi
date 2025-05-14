import React from 'react';
import SectionHeader from '../components/SectionHeader';

const TechnicalSheet = () => {
  return (
    <section className="min-h-screen relative">
      <div 
        className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(60, 41, 21, 0.7), rgba(60, 41, 21, 0.4)), url("https://images.pexels.com/photos/4820714/pexels-photo-4820714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <div className="relative z-20 container mx-auto px-4 py-24 min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto text-cream-50">
          <SectionHeader
            id="ficha-técnica"
            title="Ficha técnica"
          />
          
          <div className="mt-8 space-y-6 text-lg bg-#3C2915  p-8 rounded-lg">
            <p className="text-justify">
              Sinopsis: “Detrás del cafetal” es una serie documental que busca retratar la realidad sobre la drogadicción que viven a diario los caficultores del Quindío. Lo que inicia con un viaje mostrando todo el proceso de recolección de café y de las manos que están detrás de ello pronto se convertirá en un retrato de la dura realidad que viven los recolectores y su lucha contra las diferentes drogas como el bazuco.
            </p>
            <p className="text-justify">
              La serie también busca indagar y exponer las razones detrás del consumo, el acceso a las drogas y el abandono por parte de las instituciones gubernamentales a una población vulnerable por las vivencias a las que se exponen día a día los caficultores.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-#4E3620  p-6 rounded-lg h-full shadow-lg">
                <h3 className="text-xl font-serif mb-3">Tagline</h3>
                <p className="text-justify">El verdadero aroma del café.</p>
              </div>
              <div className="bg-#4E3620  p-6 rounded-lg h-full shadow-lg">
                <h3 className="text-xl font-serif mb-3">Logline:</h3>
                <p className="text-justify">Tras los cafetales del Quindío, los recolectores a diario libran una batalla contra la drogadicción, tras las duras jornadas de trabajo los recolectores cuentan la realidad de su vida y la lucha por recuperarla, en un entorno apoderado por el narcotráfico.</p>
              </div>
              <div className="bg-#4E3620  p-6 rounded-lg h-full shadow-lg">
                <h3 className="text-xl font-serif mb-3">Storyline</h3>
                <p className="text-justify">La exportación del café es una de las principales fuentes de economía del país, gracias a ello muchas familias sobreviven día a día. A pesar de ellos detrás de los cultivos se esconde una realidad olvidada, donde el aroma del café se mezcla con una lucha silenciosa.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSheet;