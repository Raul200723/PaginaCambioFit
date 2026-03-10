/*
 * CambioFit Transformaciones Page — Historias de éxito, antes y después
 * SEO: transformaciones físicas, cambios físicos reales, antes y después fitness
 */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "wouter";
import { Star, ArrowRight, Clock, TrendingDown, TrendingUp, Award } from "lucide-react";
import { toast } from "sonner";

const TRANSFORM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663422138565/DHaZUEWUxgJfyccs8zR34y/transformation-gGyBDSqxwACBnQ8diN9v7c.webp";

const transformations = [
  {
    name: "Carlos Mendoza",
    age: 34,
    goal: "Pérdida de peso",
    before: { weight: "98 kg", fat: "32%", time: "Antes" },
    after: { weight: "80 kg", fat: "18%", time: "4 meses" },
    lost: "18 kg",
    program: "Plan Pérdida de Peso + HIIT",
    quote: "Nunca pensé que podría lograrlo. CambioFit me dio las herramientas y la motivación que necesitaba.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
    rating: 5,
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=350&h=450&fit=crop",
  },
  {
    name: "María González",
    age: 28,
    goal: "Tonificación muscular",
    before: { weight: "62 kg", fat: "28%", time: "Antes" },
    after: { weight: "65 kg", fat: "20%", time: "5 meses" },
    lost: "+8 kg músculo",
    program: "Plan Volumen + Fuerza",
    quote: "Quería ganar músculo pero sin perder mi figura femenina. Este programa fue perfecto para mí.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face",
    rating: 5,
    img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=350&h=450&fit=crop",
  },
  {
    name: "Roberto Silva",
    age: 42,
    goal: "Pérdida de grasa",
    before: { weight: "105 kg", fat: "38%", time: "Antes" },
    after: { weight: "87 kg", fat: "22%", time: "6 meses" },
    lost: "18 kg",
    program: "Plan Keto + Cardio",
    quote: "A los 42 años logré la mejor forma física de mi vida. Es posible a cualquier edad.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
    rating: 5,
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=350&h=450&fit=crop",
  },
  {
    name: "Ana Rodríguez",
    age: 25,
    goal: "Pérdida de peso postparto",
    before: { weight: "78 kg", fat: "35%", time: "Antes" },
    after: { weight: "60 kg", fat: "22%", time: "7 meses" },
    lost: "18 kg",
    program: "Plan Pérdida de Peso + Yoga",
    quote: "Después del embarazo recuperé mi cuerpo y mi confianza. Las rutinas son seguras y efectivas.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face",
    rating: 5,
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=350&h=450&fit=crop",
  },
  {
    name: "Diego Martínez",
    age: 19,
    goal: "Ganar masa muscular",
    before: { weight: "65 kg", fat: "15%", time: "Antes" },
    after: { weight: "80 kg", fat: "12%", time: "8 meses" },
    lost: "+15 kg músculo",
    program: "Plan Volumen + Fuerza Avanzada",
    quote: "Empecé muy delgado y sin saber nada de entrenamiento. Ahora tengo el cuerpo que siempre quise.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face",
    rating: 5,
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=350&h=450&fit=crop",
  },
  {
    name: "Laura Fernández",
    age: 38,
    goal: "Salud y bienestar",
    before: { weight: "72 kg", fat: "30%", time: "Antes" },
    after: { weight: "62 kg", fat: "22%", time: "5 meses" },
    lost: "10 kg",
    program: "Plan Mantenimiento + HIIT",
    quote: "No solo perdí peso, mejoré mi energía, mi sueño y mi estado de ánimo. CambioFit transformó mi vida.",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=120&h=120&fit=crop&crop=face",
    rating: 5,
    img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=350&h=450&fit=crop",
  },
];

const stats = [
  { value: "10,000+", label: "Transformaciones documentadas", icon: Award },
  { value: "4.9/5", label: "Valoración promedio", icon: Star },
  { value: "94%", label: "Logran su objetivo", icon: TrendingDown },
  { value: "87%", label: "Mantienen resultados a 1 año", icon: TrendingUp },
];

export default function Transformaciones() {
  useScrollReveal();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={TRANSFORM_IMG} alt="Transformación física CambioFit" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center reveal">
            <span className="text-orange-400 font-bold text-sm uppercase tracking-wider">Historias Reales</span>
            <h1 className="section-title text-white mt-2">
              Transformaciones que<br />
              <span className="gradient-brand-text">Cambian Vidas</span>
            </h1>
            <p className="text-gray-300 mt-4 text-lg leading-relaxed">
              Personas reales, resultados reales. Descubre cómo miles de personas transformaron su cuerpo y su vida con CambioFit.
            </p>
            <Link href="/contacto">
              <button className="btn-gradient mt-8 px-10 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-3">
                Empieza Tu Transformación
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`reveal reveal-delay-${i + 1} text-center`}>
                <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <p className="stat-number gradient-brand-text">{stat.value}</p>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured transformation */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-14 reveal">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Transformación Destacada</span>
            <h2 className="section-title text-gray-900 mt-2">
              La Historia de<br />
              <span className="gradient-brand-text">Carlos Mendoza</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <img
                src={TRANSFORM_IMG}
                alt="Transformación física de Carlos Mendoza: perdió 18 kg en 4 meses con CambioFit"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
            <div className="reveal space-y-6">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Peso perdido", value: "18 kg" },
                  { label: "Tiempo", value: "4 meses" },
                  { label: "Grasa corporal", value: "-14%" },
                ].map((s) => (
                  <div key={s.label} className="text-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <p className="font-black text-2xl gradient-brand-text" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {s.value}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-white rounded-2xl border border-orange-100 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed italic text-base">
                  "Llevaba 5 años intentando perder peso sin éxito. Con CambioFit entendí que no se trata de pasar hambre, sino de comer bien y entrenar inteligente. En 4 meses perdí 18 kg y me siento mejor que nunca. Mi energía, mi sueño y mi confianza mejoraron completamente."
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face"
                    alt="Carlos Mendoza"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>Carlos Mendoza, 34 años</p>
                    <p className="text-orange-500 text-sm font-semibold">Plan Pérdida de Peso + HIIT</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1 p-4 bg-red-50 rounded-xl border border-red-100">
                  <p className="text-xs text-gray-500 mb-1 font-semibold uppercase">Antes</p>
                  <p className="font-black text-gray-900 text-xl">98 kg</p>
                  <p className="text-gray-500 text-xs">32% grasa corporal</p>
                </div>
                <div className="flex items-center text-gray-300 text-2xl font-bold">→</div>
                <div className="flex-1 p-4 bg-green-50 rounded-xl border border-green-100">
                  <p className="text-xs text-gray-500 mb-1 font-semibold uppercase">Después</p>
                  <p className="font-black text-green-600 text-xl">80 kg</p>
                  <p className="text-gray-500 text-xs">18% grasa corporal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All transformations */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14 reveal">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Comunidad CambioFit</span>
            <h2 className="section-title text-gray-900 mt-2">
              Más Historias de<br />
              <span className="gradient-brand-text">Éxito</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transformations.map((t, i) => (
              <div
                key={t.name}
                className={`reveal reveal-delay-${(i % 3) + 1} card-hover bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={t.img}
                    alt={`Transformación física de ${t.name} - ${t.goal}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      {t.lost}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-900 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {t.name}, {t.age} años
                      </p>
                      <p className="text-orange-500 text-xs font-semibold">{t.goal}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm italic leading-relaxed mb-3">"{t.quote}"</p>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Clock className="w-3.5 h-3.5" />
                    {t.after.time} · {t.program}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-brand">
        <div className="container text-center reveal">
          <h2 className="text-4xl font-black text-white mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Sé la Próxima Historia de Éxito
          </h2>
          <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">
            Miles de personas ya lo lograron. Ahora es tu turno. Empieza hoy con tu plan personalizado gratuito.
          </p>
          <Link href="/contacto">
            <button className="px-12 py-5 bg-white text-orange-600 font-black text-xl rounded-xl hover:bg-orange-50 transition-colors shadow-xl">
              Empieza Tu Transformación Gratis
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
