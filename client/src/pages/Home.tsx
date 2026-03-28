/*
 * CambioFit Home — Blog de Fitness y Nutrición
 * Optimizado para SEO y Google AdSense
 */
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Utensils, Dumbbell, BookOpen } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Tu Transformación Física Comienza Aquí
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Descubre planes de dieta efectivos, rutinas de ejercicio comprobadas y consejos de nutrición basados en ciencia. Todo lo que necesitas para lograr tu cambio físico.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/blog">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Leer Blog <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/dietas">
              <Button size="lg" variant="outline">
                Ver Dietas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
            ¿Qué encontrarás en CambioFit?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
              <Utensils className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Planes de Dieta</h3>
              <p className="text-slate-700">
                Descubre planes alimenticios efectivos, recetas saludables y consejos de nutrición para lograr tus objetivos de cambio físico.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <Dumbbell className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Rutinas de Ejercicio</h3>
              <p className="text-slate-700">
                Rutinas de entrenamiento para todos los niveles, desde principiante hasta avanzado, con instrucciones paso a paso.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
              <BookOpen className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Blog Educativo</h3>
              <p className="text-slate-700">
                Artículos detallados sobre nutrición, fitness, pérdida de peso, ganancia muscular y estilo de vida saludable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-slate-900">Últimos Artículos</h2>
            <Link href="/blog">
              <Button variant="outline">Ver Todo <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Déficit Calórico: La Clave para Perder Peso",
                excerpt: "Aprende cómo crear un déficit calórico seguro y sostenible para lograr pérdida de peso sin perder masa muscular.",
                category: "Nutrición",
                date: "15 Mar 2026"
              },
              {
                title: "5 Ejercicios Comprobados para Ganar Músculo",
                excerpt: "Descubre los ejercicios más efectivos para ganar masa muscular y cómo incorporarlos en tu rutina de entrenamiento.",
                category: "Ejercicio",
                date: "14 Mar 2026"
              },
              {
                title: "Proteína: Todo lo que Necesitas Saber",
                excerpt: "Guía completa sobre proteína: cuánta necesitas, mejores fuentes, y cómo optimizar tu ingesta para resultados.",
                category: "Nutrición",
                date: "13 Mar 2026"
              }
            ].map((article, idx) => (
              <article key={idx} className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gradient-to-br from-slate-200 to-slate-300"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-orange-600 uppercase">{article.category}</span>
                    <span className="text-xs text-slate-500">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{article.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{article.excerpt}</p>
                  <Link href="/blog">
                    <Button variant="ghost" className="text-orange-600 hover:text-orange-700 p-0">
                      Leer más <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Comienza tu Transformación Hoy</h2>
          <p className="text-xl mb-8 opacity-90">
            Accede a cientos de artículos, planes de dieta y rutinas de ejercicio completamente gratis.
          </p>
          <Link href="/blog">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-slate-100">
              Explorar Blog <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
