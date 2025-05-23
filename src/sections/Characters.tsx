import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import SectionHeader from '../components/SectionHeader';

const characters = [
  /*Personajes*/
  {
    name: 'Interpretado por: Santiago Montoya Bermúdez',
    role: 'David Alberto Giraldo (Niño)',
    image: '../../public/img/personajes/David_giraldo.webp',
    clasificacion: 'Actor',
    description:
      'Tiene 11 años, es nacido en Filandia, Quindío y cursa quinto grado. Está expuesto a un ambiente de trabajo arduo, pero a su vez, crece bajo la influencia del consumo de drogas. A pesar de vivir bajo las dificultades de un niño campesino mantiene su pasión por jugar fútbol, gracias a su inocencia trata de ser feliz sobrellevando los problemas que tiene en su casa.',
  },
  {
    name: 'Interpretado por: Santiago Montoya Bermúdez',
    role: 'David Alberto Giraldo (Adulto)',
    image: '../../public/img/personajes/reinel.webp',
    clasificacion: 'Actor',
    description:
      'Ha vivido en Filandia, Quindío toda su vida, actualmente tiene 52 años y trabaja como jornalero en una finca cafetera. La curiosidad en los cafetales lo volvió consumidor de sustancias alucinógenas. Su falta de decisión y abstinencia para dejar el consumo de drogas es una situación que termina por desestabilizar su relación con su esposa e hijos.',
  },
  {
    name: 'Interpretado por: Fernando Lopera',
    role: 'Papá de David',
    image: '../../public/img/personajes/Papa_david.webp',
    clasificacion: 'Actor',
    description:
      'Es un jornalero que recolecta café desde niño, con este trabajo consigue el sustento económico para su casa, pero el consumo de drogas en su ambiente laboral termina afectando la relación con su familia.',
  },
  {
    name: 'Interpretado por: Gloria Bernal',
    role: 'Mamá de David',
    image: '../../public/img/personajes/Mama_david.webp',
    clasificacion: 'Actriz',
    description:
      'Es una ama de casa de 54 años y la dedicación a su hogar es la demostración de amor más clara que tiene hacia su hijo David Alberto y a su esposo.',
  },
  /*Entrevistados*/
  {
    name: 'Juan Carlos Patiño Zambrano',
    role: 'director del Hospital Mental de Filandia',
    image: '../../public/img/personajes/entrevistados/Juan_Carlos_Patiño.png',
    clasificacion: 'Entrevistado',
    description:
      'Es el director del Hospital Mental de Filandia. Años atrás se desempeñó como concejal de Armenia, lo que le da más respaldo, autoridad y veracidad a la información que brinde.',
  },
  {
    name: 'Carlos Arturo López',
    role: 'Vocero de la Unión de Cafeteros de Colombia',
    image: '../../public/img/personajes/entrevistados/Carlos_Arturo_Lopez.png',
    clasificacion: 'Entrevistado',
    description:
      'Es el vocero de la Unión de Cafeteros de Colombia, grupo sindical que vela por los derechos de los/as trabajadores/as en los cafetales del Quindío. Ha liderado luchas en contra de las grandes empresas, como Juan Valdez, y es una figura representativa para los jornaleros de la región.',
  },
  {
    name: 'Bernardo Pachón',
    role: 'Administrador de fincas',
    image: '../../public/img/personajes/entrevistados/Bernardo_Pachon.png',
    clasificacion: 'Entrevistado',
    description:
      'Es un administrador de fincas cafeteras ubicadas en Barcelona, Quindío. Él ha dedicado toda su vida a la producción y cosecha de café como su profesión, influenciado por toda su familia que también ha sido cafetera.',
  },
  {
    name: 'Oscar Cabrera Erazo',
    role: 'Psiquiatra',
    image: '../../public/img/personajes/entrevistados/Oscar_Cabrera_Erazo.png',
    clasificacion: 'Entrevistado',
    description:
      'Oscar Cabrera Erazo es el psiquiatra del hospital mental de filandia desde hace varios años. Su labor se ha caracterizado por un compromiso con la comunidad y con sus pacientes; especialmente en el tratamiento mancomunado con los nexos familiares que, para el, son clave para que las personas puedan superar sus adicciones.',
  },
  {
    name: 'Carlos Alberto Gómez',
    role: 'Secretario de salud',
    image: '../../public/img/personajes/entrevistados/Carlos_Alberto_Gomez.png',
    clasificacion: 'Entrevistado',
    description:
      'Carlos Alberto Gómez es el actual secretario de salud del Quindío. Junto con su equipo han buscado la forma de erradicar El problema de drogadicción en los campos y zonas cafeteras. Se encarga de brindar una visión institucional del tema central de la serie.',
  },
  {
    name: 'William Ríos Gómez',
    role: 'Jornaleros',
    image: '../../public/img/personajes/entrevistados/William_Rios_Gomez.png',
    clasificacion: 'Entrevistado',
    description:
      'William Ríos Gómez es un jornalero del departamento del Quindío, nacido y criado en Filandia. Ha pasado toda su vida trabajando entre cafetales, una labor que aprendió desde niño gracias a su familia, que siempre se ha dedicado al campo. Conoce como la palma de su mano el trabajo de campo, especialmente el cultivo y la recolección del café, y ha sido testigo de cómo han cambiado las condiciones para los trabajadores rurales a lo largo de los años. Su experiencia le permite hablar con claridad sobre lo que realmente sucede en las fincas.',
  },
  {
    name: 'Consumidor anónimo',
    role: 'Jornalero',
    image: '../../public/img/personajes/entrevistados/Caficultor_Consumidor.png',
    clasificacion: 'Entrevistado',
    description:
      'Este personaje es un hombre de mediana edad cuya vida ha estado marcada por el trabajo duro y decisiones complejas. Ha sido jornalero desde joven, oficios que han dejado huella en su cuerpo que hablan de años entre cafetales. Su paso por el consumo de sustancias, iniciado desde temprano, se refleja más en la forma en que se mueve y en lo que comparte sobre su historia. Vive las consecuencias de sus elecciones, que reconoce sus errores y que ahora, dentro de una fundación de rehabilitación, está en proceso de mejora personal.',
  },
];

  const Characters = () => {
    return (
      <section className="h-auto bg-[#6e322b] py-10">
        <div className="container mx-auto px-4">
          <SectionHeader
            id="personajes"
            title={<h2 className="text-4xl font-typewriter font-bold text-center mb-8" style={{ color: '#ffff' }}>Personajes y entrevistados</h2>}
          />

          <Swiper
            modules={[EffectCoverflow, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1} // default para móvil
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mt-12"
          >
            {characters.map((character, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative group w-80 h-100 mx-auto overflow-hidden rounded-lg shadow-lg"
                  onMouseEnter={(e) => e.currentTarget.closest('.swiper').swiper.autoplay.stop()}
                  onMouseLeave={(e) => e.currentTarget.closest('.swiper').swiper.autoplay.start()}
                >
                  {/* Foto */}
                  <img
                    src={character.image}
                    alt={character.name}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ height: '30rem', width: '100%' }}
                  />
                  {/* Fondo borroso y texto al hacer hover */}
                  <div className="absolute inset-0 bg-black/70 backdrop-blur-md flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-bold italic">{character.clasificacion}</p>
                    <p className="text-center mt-4 text-white font-bold italic">{character.description}</p>
                  </div>

                  <div className="text-center mt-4">
                    <p className="text-white font-bold italic">{character.name}</p>
                    <p className="text-white font-bold italic">{character.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
  };

  export default Characters;