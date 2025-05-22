import React from 'react';
import SectionHeader from '../components/SectionHeader';

const TechnicalSheet = () => {
  return (
    <section className="h-auto relative bg-[#6e322b] py-10">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
      />
      
      <div className="relative mx-auto h-auto flex items-center">
        <div className="max-w-5xl mx-auto text-cream-50">
          <SectionHeader
            id="ficha-técnica"
            title={<h2 className="text-4xl font-typewriter font-bold text-center" style={{ color: '#ffff'}}>Ficha técnica</h2>}
          />
          
          <div className="mt-8 space-y-6 text-lg p-8 rounded-lg">
            <p className="text-justify">
              “Detrás del cafetal” es una serie documental que busca retratar la realidad sobre la drogadicción que viven a diario los caficultores del Quindío. Lo que inicia con un viaje mostrando todo el proceso de recolección de café y de las manos que están detrás de ello pronto se convertirá en un retrato de la dura realidad que viven los recolectores y su lucha contra las diferentes drogas como el bazuco.
            </p>
            <p className="text-justify">
              La serie también busca indagar y exponer las razones detrás del consumo, el acceso a las drogas y el abandono por parte de las instituciones gubernamentales a una población vulnerable por las vivencias a las que se exponen día a día los caficultores.
            </p>
            {/* Tagline */}
                <div className="order-1 lg:order-1 bg-white/20 backdrop-blur-md p-6 rounded-lg h-full shadow-lg text-center">
                  <h3 className="text-xl font-serif mb-3">Tagline</h3>
                  <p>El verdadero aroma del café.</p>
                </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {/* Logline */}
                <div className="order-3 lg:order-2 bg-white/20 backdrop-blur-md p-6 rounded-lg h-full shadow-lg">
                  <h3 className="text-xl font-serif mb-3">Logline:</h3>
                  <p className="text-justify">
                    Tras los cafetales del Quindío, los recolectores a diario libran una batalla contra la drogadicción, tras las duras jornadas de trabajo los recolectores cuentan la realidad de su vida y la lucha por recuperarla, en un entorno apoderado por el narcotráfico.
                  </p>
                </div>
                
                {/* Storyline */}
                <div className="order-2 lg:order-3 bg-white/20 backdrop-blur-md p-6 rounded-lg h-full shadow-lg">
                  <h3 className="text-xl font-serif mb-3">Storyline</h3>
                  <p className="text-justify">
                    La exportación del café es una de las principales fuentes de economía del país, gracias a ello muchas familias sobreviven día a día. A pesar de ellos detrás de los cultivos se esconde una realidad olvidada, donde el aroma del café se mezcla con una lucha silenciosa.
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSheet;