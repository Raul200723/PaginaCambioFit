/*
 * CambioFit Home — Página de Inicio Profesional
 * Propuesta de valor clara, beneficios, artículos destacados
 */
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Zap, Heart, Brain, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const FEATURED_ARTICLES = [
  {
    id: 1,
    title: "Cómo Crear un Déficit Calórico Sostenible para Perder Grasa",
    excerpt: "Aprende los principios científicos detrás de la pérdida de peso y cómo crear un déficit calórico que sea sostenible a largo plazo.",
    category: "Nutrición",
    date: "15 Mar 2026",
    slug: "deficit-calorico-sostenible"
  },
  {
    id: 2,
    title: "Entrenamiento de Fuerza para Principiantes: Guía Completa",
    excerpt: "Descubre cómo comenzar con el entrenamiento de fuerza, qué ejercicios hacer y cómo progresar de forma segura.",
    category: "Entrenamiento",
    date: "12 Mar 2026",
    slug: "entrenamiento-fuerza-principiantes"
  },
  {
    id: 3,
    title: "Proteína: Todo lo que Necesitas Saber sobre este Macronutriente",
    excerpt: "Entiende por qué la proteína es crucial para la composición corporal y cómo calcular tu ingesta diaria.",
    category: "Nutrición",
    date: "10 Mar 2026",
    slug: "proteina-macronutriente"
  }
];

const BENEFITS = [
  {
    icon: Heart,
    title: "Salud Cardiovascular",
    description: "El ejercicio regular fortalece tu corazón y mejora la circulación sanguínea, reduciendo riesgos de enfermedades."
  },
  {
    icon: Brain,
    title: "Bienestar Mental",
    description: "La actividad física libera endorfinas que mejoran tu estado de ánimo y reducen estrés y ansiedad."
  },
  {
    icon: TrendingUp,
    title: "Transformación Física",
    description: "Con consistencia, verás cambios reales en tu composición corporal, fuerza y resistencia."
  },
  {
    icon: Zap,
    title: "Energía Duradera",
    description: "Una buena alimentación y ejercicio te dan energía sostenida durante todo el día."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 md:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Tu Transformación Comienza Hoy
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                CambioFit es tu guía completa para perder peso, ganar músculo y construir hábitos saludables que duren toda la vida. Basado en ciencia, práctico y accesible.
              </p>
              <div className="flex gap-4">
                <Link href="/blog">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
                    Explorar Blog <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/sobre-nosotros">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                    Conoce Más
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="relative">
                <div className="w-full aspect-square bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Zap className="w-24 h-24 text-orange-400 mx-auto mb-4" />
                    <p className="text-2xl font-bold">Cambio Real</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is CambioFit */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-6 text-slate-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            ¿Qué es CambioFit?
          </h2>
          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            CambioFit es un blog educativo dedicado a proporcionar información práctica, basada en ciencia y libre de marketing engañoso sobre fitness, nutrición y transformación física.
          </p>
          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            No vendemos suplementos milagro ni promesas falsas. En cambio, compartimos estrategias probadas que funcionan: déficit calórico para perder grasa, entrenamiento de fuerza para ganar músculo, y hábitos sostenibles que puedes mantener de por vida.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              { label: "Artículos Originales", value: "10+" },
              { label: "Información Basada en Ciencia", value: "100%" },
              { label: "Contenido Gratuito", value: "Siempre" }
            ].map((stat) => (
              <div key={stat.label} className="p-6 bg-white rounded-lg border border-slate-200 text-center">
                <p className="text-3xl font-black text-orange-500 mb-2">{stat.value}</p>
                <p className="text-slate-600 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-slate-900 text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Beneficios de una Vida Saludable
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="p-8 bg-gray-50 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                      <p className="text-slate-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-black text-slate-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Artículos Destacados
            </h2>
            <Link href="/blog">
              <Button variant="ghost" className="text-orange-500 hover:text-orange-600">
                Ver Todos <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {FEATURED_ARTICLES.map((article) => (
              <Link key={article.id} href={`/blog/${article.slug}`}>
                <div className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600"></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-slate-500">{article.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Comienza tu Transformación
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Descubre cómo miles de personas han logrado sus objetivos de fitness con información práctica y basada en ciencia.
          </p>
          <Link href="/blog">
            <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold">
              Leer Artículos Gratis <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
