/*
 * CambioFit Sobre Nosotros — Historia, misión, valores y equipo
 * SEO: sobre nosotros, quiénes somos, misión, valores
 */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Heart, Target, Users, Zap, Award, TrendingUp } from "lucide-react";

export default function SobreNosotros() {
  useScrollReveal();

  const values = [
    {
      icon: Heart,
      title: "Pasión por la Salud",
      desc: "Creemos que todos merecen una vida saludable y activa. Nuestra pasión es ayudarte a lograrlo.",
    },
    {
      icon: Target,
      title: "Objetivos Realistas",
      desc: "No promovemos soluciones mágicas. Ofrecemos planes científicos y alcanzables para tu transformación.",
    },
    {
      icon: Users,
      title: "Comunidad Fuerte",
      desc: "Creemos en el poder de la comunidad. Juntos somos más fuertes y nos motivamos mutuamente.",
    },
    {
      icon: Zap,
      title: "Energía y Motivación",
      desc: "Transmitimos energía positiva para que mantengas la motivación en tu camino de transformación.",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Transformaciones Reales" },
    { number: "50+", label: "Planes Personalizados" },
    { number: "200+", label: "Recetas Saludables" },
    { number: "100+", label: "Rutinas de Ejercicio" },
  ];

  return (
    <div className="min-h-screen pt-20 pb-20 bg-white">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50 border-b border-orange-100">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-black text-gray-900 mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Somos CambioFit
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Una plataforma dedicada a transformar vidas a través de planes de dieta efectivos, rutinas de ejercicio científicas y una comunidad que te apoya en cada paso de tu viaje hacia la salud.
            </p>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <div className="reveal space-y-8">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  CambioFit nació en 2020 de una idea simple pero poderosa: <strong>democratizar el acceso a información de fitness de calidad</strong>. Nuestro fundador, Juan García, experimentó su propia transformación física y se dio cuenta de que la mayoría de las personas no tienen acceso a planes personalizados de calidad.
                </p>
                <p>
                  Después de trabajar con nutricionistas, entrenadores personales y coaches de fitness, decidimos crear una plataforma que reuniera todo el conocimiento en un solo lugar, accesible para todos y completamente gratuita.
                </p>
                <p>
                  Hoy, CambioFit ayuda a más de 10,000 personas cada mes a lograr sus objetivos de transformación física. Nuestro contenido ha sido validado por profesionales de la salud y está basado en ciencia sólida.
                </p>
              </div>
            </div>

            {/* Misión y Visión */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="p-8 bg-blue-50 rounded-2xl border border-blue-200">
                <h3 className="text-2xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Nuestra Misión
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Proporcionar planes de dieta, rutinas de ejercicio y recursos educativos de alta calidad, completamente gratis, para que cualquier persona pueda lograr su transformación física sin barreras económicas.
                </p>
              </div>
              <div className="p-8 bg-green-50 rounded-2xl border border-green-200">
                <h3 className="text-2xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Nuestra Visión
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Ser la plataforma número uno en habla hispana para transformación física, donde millones de personas encuentren inspiración, conocimiento y comunidad para vivir vidas más saludables y activas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="reveal">
            <h2 className="text-3xl font-black text-gray-900 mb-12 text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Nuestros Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, i) => (
                <div key={i} className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-black text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-16">
        <div className="container">
          <div className="reveal">
            <h2 className="text-3xl font-black text-gray-900 mb-12 text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Nuestro Impacto
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-200 text-center">
                  <div className="text-3xl font-black text-orange-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-700 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegir CambioFit */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-3xl">
          <div className="reveal">
            <h2 className="text-3xl font-black text-gray-900 mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              ¿Por Qué Elegir CambioFit?
            </h2>
            <div className="space-y-4">
              {[
                "✅ Completamente GRATIS — Sin suscripciones ocultas ni pagos",
                "✅ Contenido Científico — Validado por profesionales de la salud",
                "✅ Planes Personalizables — Adaptables a tu nivel y objetivos",
                "✅ Comunidad Activa — Más de 10,000 personas transformándose",
                "✅ Actualización Constante — Nuevas recetas y rutinas cada semana",
                "✅ Acceso Total — Todos los recursos disponibles sin restricciones",
                "✅ Diseño Intuitivo — Fácil de navegar y usar",
                "✅ Soporte Dedicado — Equipo listo para ayudarte",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                  <span className="text-lg">{item.split(" ")[0]}</span>
                  <span className="text-gray-700 font-semibold">{item.slice(3)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <div className="reveal">
            <h2 className="text-3xl font-black text-gray-900 mb-12 text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Nuestro Equipo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Juan García",
                  role: "Fundador & CEO",
                  bio: "Entrenador personal certificado con 10+ años de experiencia en transformación física.",
                },
                {
                  name: "María López",
                  role: "Nutricionista Jefe",
                  bio: "Nutricionista deportiva colegiada especializada en planes personalizados.",
                },
                {
                  name: "Carlos Rodríguez",
                  role: "Coach de Fitness",
                  bio: "Entrenador de fuerza e HIIT con certificaciones internacionales.",
                },
                {
                  name: "Ana Martínez",
                  role: "Especialista en Contenido",
                  bio: "Comunicadora de salud dedicada a hacer la información accesible.",
                },
              ].map((member, i) => (
                <div key={i} className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-200">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-orange-600 font-bold text-sm mb-2">{member.role}</p>
                  <p className="text-gray-700 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-red-600">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Únete a Nuestra Comunidad
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Miles de personas ya están transformando sus vidas. ¿Estás listo para ser el próximo?
          </p>
          <a href="/" className="inline-block px-8 py-4 bg-white text-orange-600 font-black rounded-xl hover:bg-gray-100 transition-colors">
            Empieza Tu Transformación Hoy
          </a>
        </div>
      </section>
    </div>
  );
}
