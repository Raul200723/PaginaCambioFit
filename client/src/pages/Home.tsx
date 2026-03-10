/*
 * CambioFit Home Page — High-Energy Sport Tech
 * Hero + Stats + Benefits + Diets preview + Exercise preview + Testimonials + CTA
 * Dark text on light backgrounds, white text on gradient/dark backgrounds
 */
import { Link } from "wouter";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCounter } from "@/hooks/useCounter";
import {
  Flame, ArrowRight, Star, CheckCircle, Play,
  Apple, Dumbbell, Users, TrendingUp, Award, Zap,
  ChevronRight, Heart, Target
} from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663422138565/DHaZUEWUxgJfyccs8zR34y/hero-fitness-jm7WWJ4C6uHjk3epRo7ESv.webp";
const FOOD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663422138565/DHaZUEWUxgJfyccs8zR34y/healthy-food-ccTZeyNJRPWkAjJvobEkJp.webp";
const WORKOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663422138565/DHaZUEWUxgJfyccs8zR34y/workout-routine-34rorNNAKtj3zmFMqHZZDp.webp";
const TRANSFORM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663422138565/DHaZUEWUxgJfyccs8zR34y/transformation-gGyBDSqxwACBnQ8diN9v7c.webp";
const NUTRITION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663422138565/DHaZUEWUxgJfyccs8zR34y/nutrition-infographic-7abEZHbUCpGeornDvy9LqK.webp";

function StatCard({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(end);
  return (
    <div className="text-center">
      <div ref={ref as any} className="stat-number gradient-brand-text">
        {count.toLocaleString()}{suffix}
      </div>
      <p className="text-gray-500 text-sm mt-1 font-medium">{label}</p>
    </div>
  );
}

const dietPlans = [
  {
    name: "Plan Pérdida de Peso",
    desc: "Déficit calórico inteligente con alimentos saciantes. Pierde grasa sin perder músculo.",
    kcal: "1,400–1,800 kcal",
    weeks: "8 semanas",
    color: "from-orange-500 to-red-500",
    icon: "🥗",
  },
  {
    name: "Plan Volumen Muscular",
    desc: "Superávit calórico controlado con proteínas de calidad para ganar masa muscular.",
    kcal: "2,800–3,200 kcal",
    weeks: "12 semanas",
    color: "from-blue-500 to-indigo-600",
    icon: "💪",
  },
  {
    name: "Plan Mantenimiento",
    desc: "Equilibrio perfecto entre macros para mantener tu peso ideal y energía óptima.",
    kcal: "2,000–2,400 kcal",
    weeks: "Indefinido",
    color: "from-green-500 to-emerald-600",
    icon: "⚖️",
  },
];

const workouts = [
  {
    name: "Entrenamiento HIIT",
    desc: "Alta intensidad para quemar grasa en menos tiempo. Ideal para principiantes y avanzados.",
    duration: "30 min",
    level: "Todos los niveles",
    icon: Zap,
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    name: "Fuerza y Músculo",
    desc: "Rutinas de pesas progresivas para desarrollar fuerza y definición muscular.",
    duration: "60 min",
    level: "Intermedio–Avanzado",
    icon: Dumbbell,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    name: "Fitness en Casa",
    desc: "Sin equipamiento. Solo tu cuerpo y motivación para transformarte desde casa.",
    duration: "45 min",
    level: "Principiante",
    icon: Heart,
    color: "text-green-500",
    bg: "bg-green-50",
  },
];

const testimonials = [
  {
    name: "Carlos Mendoza",
    result: "Perdió 18 kg en 4 meses",
    text: "CambioFit cambió mi vida. Los planes de dieta son fáciles de seguir y los resultados son increíbles. Nunca pensé que podría lograr esto.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "María González",
    result: "Ganó 8 kg de músculo",
    text: "Las rutinas de ejercicio son perfectas. Claras, progresivas y con resultados visibles desde la primera semana. La comunidad es increíble.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Roberto Silva",
    result: "Redujo 12% grasa corporal",
    text: "Llevaba años intentando cambiar mi cuerpo sin éxito. Con CambioFit finalmente entendí cómo funciona la nutrición y el entrenamiento.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
  },
];

const blogPosts = [
  {
    title: "Los 10 Mejores Alimentos Para Perder Grasa",
    category: "Nutrición",
    date: "8 Mar 2025",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=250&fit=crop",
    slug: "/blog",
  },
  {
    title: "Rutina de 20 Minutos Para Quemar Grasa en Casa",
    category: "Ejercicio",
    date: "5 Mar 2025",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    slug: "/blog",
  },
  {
    title: "Cómo Calcular Tus Macros Para Tu Objetivo",
    category: "Dietas",
    date: "1 Mar 2025",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop",
    slug: "/blog",
  },
];

export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Atleta entrenando en gimnasio con iluminación dramática naranja"
            className="w-full h-full object-cover object-center opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 mb-6 animate-fade-up">
              <Flame className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                +10,000 transformaciones reales
              </span>
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 animate-fade-up"
              style={{ fontFamily: "'Montserrat', sans-serif", animationDelay: "0.1s" }}
            >
              Tu{" "}
              <span className="gradient-brand-text">Transformación</span>
              <br />
              Física Comienza
              <br />
              <span className="text-orange-400">Hoy</span>
            </h1>

            <p
              className="text-lg text-gray-300 mb-8 leading-relaxed animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Planes de dieta personalizados, rutinas de ejercicio efectivas y una comunidad que te apoya. Todo lo que necesitas para cambiar tu cuerpo y tu vida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link href="/contacto">
                <button className="btn-gradient px-8 py-4 rounded-xl text-lg font-bold flex items-center gap-3">
                  <Flame className="w-5 h-5" />
                  Empieza Tu Plan Gratis
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/transformaciones">
                <button className="px-8 py-4 rounded-xl text-lg font-bold flex items-center gap-3 bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm">
                  <Play className="w-5 h-5" />
                  Ver Transformaciones
                </button>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-5 mt-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              {[
                { icon: CheckCircle, text: "Sin contratos" },
                { icon: Award, text: "Resultados garantizados" },
                { icon: Users, text: "Comunidad activa" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-gray-300 text-sm">
                  <Icon className="w-4 h-4 text-orange-400" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 text-xs animate-bounce">
          <span>Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent" />
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
            <StatCard end={10000} suffix="+" label="Personas transformadas" />
            <StatCard end={500} suffix="+" label="Planes de dieta" />
            <StatCard end={300} suffix="+" label="Rutinas de ejercicio" />
            <StatCard end={98} suffix="%" label="Satisfacción de usuarios" />
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-14 reveal">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Por qué CambioFit</span>
            <h2 className="section-title text-gray-900 mt-2">
              Todo lo que Necesitas para<br />
              <span className="gradient-brand-text">Cambiar Tu Cuerpo</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Un enfoque integral que combina nutrición, ejercicio y mentalidad para resultados duraderos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Apple,
                title: "Planes de Dieta Personalizados",
                desc: "Planes alimenticios adaptados a tu objetivo, metabolismo y preferencias. Sin hambre, sin restricciones extremas.",
                color: "text-orange-500",
                bg: "bg-orange-50",
              },
              {
                icon: Dumbbell,
                title: "Rutinas de Ejercicio Efectivas",
                desc: "Desde principiantes hasta avanzados. Rutinas en casa o gimnasio con guías paso a paso y videos demostrativos.",
                color: "text-blue-500",
                bg: "bg-blue-50",
              },
              {
                icon: TrendingUp,
                title: "Seguimiento de Progreso",
                desc: "Herramientas para medir tu avance: peso, medidas, fotos y estadísticas que te mantienen motivado.",
                color: "text-green-500",
                bg: "bg-green-50",
              },
              {
                icon: Users,
                title: "Comunidad de Apoyo",
                desc: "Únete a miles de personas con los mismos objetivos. Comparte logros, dudas y motivación.",
                color: "text-purple-500",
                bg: "bg-purple-50",
              },
              {
                icon: Award,
                title: "Contenido Experto",
                desc: "Todo el contenido está creado por nutricionistas y entrenadores certificados con años de experiencia.",
                color: "text-red-500",
                bg: "bg-red-50",
              },
              {
                icon: Target,
                title: "Resultados Reales",
                desc: "Más de 10,000 transformaciones documentadas. Métodos probados que funcionan para cualquier tipo de cuerpo.",
                color: "text-yellow-500",
                bg: "bg-yellow-50",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`reveal reveal-delay-${(i % 3) + 1} card-hover bg-white rounded-2xl p-6 border border-gray-100 shadow-sm`}
              >
                <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3
                  className="font-bold text-gray-900 text-lg mb-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DIET PLANS ===== */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-14 gap-4">
            <div className="reveal">
              <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Nutrición</span>
              <h2 className="section-title text-gray-900 mt-2">
                Planes de Dieta que<br />
                <span className="gradient-brand-text">Realmente Funcionan</span>
              </h2>
            </div>
            <Link href="/dietas">
              <button className="reveal flex items-center gap-2 text-orange-500 font-bold hover:gap-3 transition-all">
                Ver todos los planes <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {dietPlans.map((plan, i) => (
              <div
                key={plan.name}
                className={`reveal reveal-delay-${i + 1} card-hover rounded-2xl overflow-hidden border border-gray-100 shadow-sm`}
              >
                <div className={`bg-gradient-to-r ${plan.color} p-6 text-white`}>
                  <span className="text-4xl mb-3 block">{plan.icon}</span>
                  <h3 className="font-black text-xl" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {plan.name}
                  </h3>
                  <div className="flex gap-3 mt-3">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">{plan.kcal}</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">{plan.weeks}</span>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{plan.desc}</p>
                  <Link href="/dietas">
                    <button className="w-full py-2.5 rounded-xl border-2 border-gray-200 text-gray-700 font-bold text-sm hover:border-orange-400 hover:text-orange-500 transition-colors">
                      Ver Plan Completo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Food image */}
          <div className="reveal rounded-2xl overflow-hidden shadow-lg">
            <img
              src={FOOD_IMG}
              alt="Comida saludable: pollo a la plancha, quinoa, brócoli y frutas frescas para dieta fitness"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== EXERCISE ===== */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="reveal">
                <span className="text-orange-400 font-bold text-sm uppercase tracking-wider">Entrenamiento</span>
                <h2 className="section-title text-white mt-2">
                  Rutinas de Ejercicio
                  <br />
                  <span className="gradient-brand-text">Para Cada Objetivo</span>
                </h2>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  Desde entrenamientos HIIT de alta intensidad hasta rutinas de fuerza progresiva. Todos los niveles, en casa o en el gimnasio.
                </p>
              </div>

              <div className="space-y-4 mt-8">
                {workouts.map((w, i) => (
                  <div
                    key={w.name}
                    className={`reveal reveal-delay-${i + 1} flex items-start gap-4 p-4 rounded-xl bg-gray-800/60 border border-gray-700 hover:border-orange-500/50 transition-colors`}
                  >
                    <div className={`w-10 h-10 ${w.bg} rounded-lg flex items-center justify-center shrink-0`}>
                      <w.icon className={`w-5 h-5 ${w.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-white text-base" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {w.name}
                      </h3>
                      <p className="text-gray-400 text-sm mt-0.5">{w.desc}</p>
                      <div className="flex gap-3 mt-2">
                        <span className="text-xs text-orange-400 font-semibold">{w.duration}</span>
                        <span className="text-xs text-gray-500">·</span>
                        <span className="text-xs text-gray-400">{w.level}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-500 shrink-0 mt-1" />
                  </div>
                ))}
              </div>

              <div className="mt-8 reveal">
                <Link href="/ejercicio">
                  <button className="btn-gradient px-8 py-4 rounded-xl font-bold flex items-center gap-3">
                    <Dumbbell className="w-5 h-5" />
                    Explorar Todas las Rutinas
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="reveal">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={WORKOUT_IMG}
                  alt="Atleta realizando sentadilla con barra en gimnasio - rutina de fuerza y músculo"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Link href="/ejercicio">
                    <button className="w-20 h-20 bg-white/20 backdrop-blur-sm border-2 border-white/50 rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </button>
                  </Link>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass-card rounded-xl p-3 flex items-center gap-3">
                    <div className="w-10 h-10 gradient-brand rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">Rutina HIIT Avanzada</p>
                      <p className="text-gray-500 text-xs">30 min · Quema 400 kcal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRANSFORMATION ===== */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14 reveal">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Historias Reales</span>
            <h2 className="section-title text-gray-900 mt-2">
              Transformaciones que<br />
              <span className="gradient-brand-text">Inspiran</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Personas reales con resultados reales. Descubre cómo CambioFit transformó sus vidas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-14">
            <div className="reveal">
              <img
                src={TRANSFORM_IMG}
                alt="Transformación física: antes y después de seguir el programa CambioFit"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
            <div className="reveal">
              <div className="space-y-6">
                <div className="p-6 bg-orange-50 rounded-2xl border border-orange-100">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face"
                      alt="Carlos Mendoza - testimonio CambioFit"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>Carlos Mendoza</p>
                      <p className="text-orange-500 text-sm font-semibold">Perdió 18 kg en 4 meses</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed italic">
                    "Llevaba 5 años intentando perder peso sin éxito. Con CambioFit entendí que no se trata de pasar hambre, sino de comer bien y entrenar inteligente. En 4 meses perdí 18 kg y me siento mejor que nunca."
                  </p>
                  <div className="flex gap-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Peso perdido", value: "18 kg" },
                    { label: "Tiempo", value: "4 meses" },
                    { label: "Grasa corporal", value: "-12%" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-4 bg-gray-50 rounded-xl">
                      <p className="font-black text-2xl gradient-brand-text" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {stat.value}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <Link href="/transformaciones">
                  <button className="btn-gradient w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3">
                    Ver Más Transformaciones
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NUTRITION INFOGRAPHIC ===== */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Nutrición</span>
              <h2 className="section-title text-gray-900 mt-2">
                Aprende a Comer
                <br />
                <span className="gradient-brand-text">Para Tu Objetivo</span>
              </h2>
              <p className="text-gray-500 mt-4 leading-relaxed">
                La nutrición es el 70% de cualquier transformación física. Aprende a calcular tus macronutrientes, elegir los alimentos correctos y crear hábitos alimenticios sostenibles.
              </p>
              <ul className="space-y-3 mt-6">
                {[
                  "Proteínas: construye y mantiene músculo",
                  "Carbohidratos: energía para entrenar y vivir",
                  "Grasas saludables: hormonas y bienestar",
                  "Micronutrientes: vitaminas y minerales esenciales",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/dietas">
                <button className="mt-8 btn-gradient px-8 py-4 rounded-xl font-bold flex items-center gap-3">
                  Explorar Planes de Dieta
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
            <div className="reveal">
              <img
                src={NUTRITION_IMG}
                alt="Infografía de macronutrientes: proteínas, carbohidratos y grasas saludables para fitness"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14 reveal">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Testimonios</span>
            <h2 className="section-title text-gray-900 mt-2">
              Lo que Dicen Nuestros<br />
              <span className="gradient-brand-text">Usuarios</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`reveal reveal-delay-${i + 1} card-hover bg-white rounded-2xl p-6 border border-gray-100 shadow-sm`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={`${t.name} - testimonio usuario CambioFit`}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-900 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {t.name}
                    </p>
                    <p className="text-orange-500 text-xs font-semibold">{t.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLOG PREVIEW ===== */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-14 gap-4">
            <div className="reveal">
              <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Blog</span>
              <h2 className="section-title text-gray-900 mt-2">
                Artículos de Salud<br />
                <span className="gradient-brand-text">y Fitness</span>
              </h2>
            </div>
            <Link href="/blog">
              <button className="reveal flex items-center gap-2 text-orange-500 font-bold hover:gap-3 transition-all">
                Ver todos los artículos <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <Link key={post.title} href={post.slug}>
                <div className={`reveal reveal-delay-${i + 1} card-hover bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm cursor-pointer`}>
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-400 text-xs mb-2">{post.date}</p>
                    <h3
                      className="font-bold text-gray-900 text-base leading-snug hover:text-orange-500 transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-1 mt-3 text-orange-500 text-sm font-semibold">
                      Leer más <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-24 gradient-brand relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="container relative z-10 text-center">
          <div className="reveal max-w-2xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-black text-white mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              ¿Listo para Tu Transformación?
            </h2>
            <p className="text-white/85 text-lg mb-8">
              Únete a más de 10,000 personas que ya cambiaron su cuerpo y su vida con CambioFit. Tu primer plan es completamente gratis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <button className="px-10 py-4 bg-white text-orange-600 font-black text-lg rounded-xl hover:bg-orange-50 transition-colors shadow-lg flex items-center gap-3">
                  <Flame className="w-6 h-6" />
                  Descarga Tu Plan Gratis
                </button>
              </Link>
              <Link href="/transformaciones">
                <button className="px-10 py-4 bg-white/20 text-white font-bold text-lg rounded-xl hover:bg-white/30 transition-colors border border-white/30 backdrop-blur-sm">
                  Ver Resultados
                </button>
              </Link>
            </div>
            <p className="text-white/60 text-sm mt-5">Sin tarjeta de crédito · Sin compromisos · Cancela cuando quieras</p>
          </div>
        </div>
      </section>
    </div>
  );
}
