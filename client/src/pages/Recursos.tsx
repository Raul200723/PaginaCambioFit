/*
 * CambioFit Recursos Page — Ebooks, guías descargables, plantillas de seguimiento
 * SEO: recursos fitness gratis, ebooks dieta, guías ejercicio, plantillas seguimiento
 */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "wouter";
import { Download, BookOpen, FileText, BarChart2, Star, ArrowRight, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const freeResources = [
  {
    title: "Guía de Inicio: Tu Primera Semana Fitness",
    desc: "Todo lo que necesitas saber para empezar tu transformación. Plan de dieta y ejercicio para la primera semana.",
    type: "PDF Guía",
    pages: "24 páginas",
    icon: BookOpen,
    color: "text-orange-500",
    bg: "bg-orange-50",
    downloads: "12,450",
    rating: 4.9,
  },
  {
    title: "Plantilla de Seguimiento de Dieta (Excel)",
    desc: "Registra tus comidas, calorías y macros diariamente. Incluye gráficas automáticas de progreso.",
    type: "Plantilla Excel",
    pages: "10 hojas",
    icon: BarChart2,
    color: "text-green-500",
    bg: "bg-green-50",
    downloads: "8,230",
    rating: 4.8,
  },
  {
    title: "Plantilla de Registro de Entrenamiento",
    desc: "Lleva el control de tus rutinas, pesos, series y repeticiones. Visualiza tu progreso de fuerza.",
    type: "Plantilla PDF",
    pages: "8 páginas",
    icon: FileText,
    color: "text-blue-500",
    bg: "bg-blue-50",
    downloads: "9,870",
    rating: 4.7,
  },
  {
    title: "Lista de Compras Saludables",
    desc: "Lista completa de alimentos saludables organizados por categoría. Perfecta para hacer la compra semanal.",
    type: "PDF Lista",
    pages: "4 páginas",
    icon: FileText,
    color: "text-purple-500",
    bg: "bg-purple-50",
    downloads: "15,600",
    rating: 4.9,
  },
];

const premiumResources = [
  {
    title: "Ebook: La Biblia del Fitness — Guía Completa",
    desc: "200 páginas con todo lo que necesitas saber sobre nutrición, entrenamiento y mentalidad para transformar tu cuerpo.",
    type: "Ebook PDF",
    pages: "200 páginas",
    icon: BookOpen,
    includes: ["Plan de 12 semanas", "100+ recetas", "30 rutinas", "Calculadora de macros"],
    img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=200&fit=crop",
  },
  {
    title: "Programa Completo Pérdida de Peso 90 Días",
    desc: "El programa más completo para perder peso de forma definitiva. Incluye dieta, ejercicio y seguimiento semanal.",
    type: "Programa Completo",
    pages: "90 días",
    icon: BarChart2,
    includes: ["Plan dieta 90 días", "Rutinas progresivas", "Soporte por email", "Comunidad privada"],
    img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=300&h=200&fit=crop",
  },
  {
    title: "Guía Completa de Nutrición Deportiva",
    desc: "Todo sobre suplementación, timing de nutrientes, hidratación y optimización del rendimiento deportivo.",
    type: "Guía PDF",
    pages: "80 páginas",
    icon: FileText,
    includes: ["Guía de suplementos", "Planes de hidratación", "Recetas pre/post entreno", "Calculadoras"],
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=300&h=200&fit=crop",
  },
];

const tools = [
  {
    name: "Calculadora de Calorías",
    desc: "Calcula tus calorías diarias según tu objetivo, peso, altura y nivel de actividad.",
    icon: "🔢",
  },
  {
    name: "Calculadora de IMC",
    desc: "Conoce tu Índice de Masa Corporal y qué significa para tu salud.",
    icon: "📊",
  },
  {
    name: "Calculadora de Macros",
    desc: "Obtén tu distribución ideal de proteínas, carbohidratos y grasas.",
    icon: "⚖️",
  },
  {
    name: "Generador de Rutinas",
    desc: "Crea tu rutina personalizada según tu nivel, objetivo y equipamiento disponible.",
    icon: "💪",
  },
];

export default function Recursos() {
  useScrollReveal();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container">
          <div className="max-w-2xl reveal">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Recursos y Herramientas</span>
            <h1 className="section-title text-gray-900 mt-2">
              Recursos Gratuitos<br />
              <span className="gradient-brand-text">Para Tu Transformación</span>
            </h1>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              Descarga guías, plantillas y ebooks creados por expertos. Todo lo que necesitas para empezar y mantener tu transformación física.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              {[
                { value: "50+", label: "Recursos disponibles" },
                { value: "45K+", label: "Descargas totales" },
                { value: "100%", label: "Gratis para empezar" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl px-5 py-3 border border-gray-100 shadow-sm text-center">
                  <p className="font-black text-xl gradient-brand-text" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {s.value}
                  </p>
                  <p className="text-gray-500 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Free resources */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14 reveal">
            <span className="text-green-500 font-bold text-sm uppercase tracking-wider">100% Gratis</span>
            <h2 className="section-title text-gray-900 mt-2">
              Recursos Gratuitos<br />
              <span className="gradient-brand-text">Para Descargar Ahora</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {freeResources.map((res, i) => (
              <div
                key={res.title}
                className={`reveal reveal-delay-${(i % 2) + 1} card-hover bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex gap-5`}
              >
                <div className={`w-14 h-14 ${res.bg} rounded-xl flex items-center justify-center shrink-0`}>
                  <res.icon className={`w-7 h-7 ${res.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="font-bold text-gray-900 text-base leading-snug" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {res.title}
                    </h3>
                    <span className="bg-green-100 text-green-600 text-xs font-bold px-2.5 py-1 rounded-full shrink-0">
                      GRATIS
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{res.desc}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <span>{res.type}</span>
                    <span>·</span>
                    <span>{res.pages}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Download className="w-3.5 h-3.5" />
                      {res.downloads}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                      {res.rating}
                    </span>
                  </div>
                  <button
                    onClick={() => toast.success(`Descargando: ${res.title}`, { description: "Tu descarga comenzará en breve." })}
                    className="btn-gradient px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Descargar Gratis
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12 reveal">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Herramientas Online</span>
            <h2 className="section-title text-gray-900 mt-2">
              Calculadoras y<br />
              <span className="gradient-brand-text">Herramientas Gratis</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {tools.map((tool, i) => (
              <div
                key={tool.name}
                className={`reveal reveal-delay-${(i % 4) + 1} card-hover bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm cursor-pointer`}
                onClick={() => toast.info(tool.name, { description: "Herramienta disponible próximamente." })}
              >
                <span className="text-4xl mb-4 block">{tool.icon}</span>
                <h3 className="font-bold text-gray-900 text-base mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {tool.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{tool.desc}</p>
                <span className="text-orange-500 text-sm font-semibold flex items-center justify-center gap-1">
                  Usar herramienta <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium resources */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14 reveal">
            <span className="text-green-500 font-bold text-sm uppercase tracking-wider">100% Gratis</span>
            <h2 className="section-title text-gray-900 mt-2">
              Recursos Avanzados<br />
              <span className="gradient-brand-text">Completamente Gratis</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Programas completos y guías avanzadas. Todo sin costo, sin suscripciones, sin compromisos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {premiumResources.map((res, i) => (
              <div
                key={res.title}
                className={`reveal reveal-delay-${i + 1} card-hover rounded-2xl overflow-hidden border border-gray-100 shadow-sm`}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={res.img}
                    alt={res.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    GRATIS
                  </div>
                </div>
                <div className="p-5 bg-white">
                  <h3 className="font-bold text-gray-900 text-base mb-2 leading-snug" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {res.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{res.desc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {res.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => toast.success("¡Descarga iniciada!", { description: "Tu archivo está listo." })}
                    className="btn-gradient w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Descargar Gratis
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-brand">
        <div className="container text-center reveal">
          <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            ¿No Sabes Por Dónde Empezar?
          </h2>
          <p className="text-white/85 mb-8 max-w-lg mx-auto">
            Descarga nuestra guía de inicio gratuita y comienza tu transformación hoy mismo.
          </p>
          <button
            onClick={() => toast.success("¡Guía descargada!", { description: "Revisa tu carpeta de descargas." })}
            className="px-10 py-4 bg-white text-orange-600 font-black rounded-xl hover:bg-orange-50 transition-colors shadow-lg flex items-center gap-3 mx-auto"
          >
            <Download className="w-5 h-5" />
            Descargar Guía Gratis
          </button>
        </div>
      </section>
    </div>
  );
}
