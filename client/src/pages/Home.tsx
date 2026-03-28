/*
 * CambioFit Home — Blog Puro de Fitness
 * Sin suscripciones, sin compras, solo contenido educativo gratis
 */
import { Link } from "wouter";
import { BookOpen, Utensils, Dumbbell, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            CambioFit: Tu Blog de Fitness Gratis
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Descubre recetas saludables, rutinas de ejercicio y artículos educativos sobre nutrición y transformación física. Todo completamente gratis.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 px-4 md:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
            Explora Nuestro Contenido
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Recetas */}
            <Link href="/recetas">
              <div className="p-8 rounded-xl bg-white border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
                <Utensils className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Recetas Saludables</h3>
                <p className="text-slate-600 mb-4">
                  Recetas deliciosas y nutritivas para tu transformación física. Ingredientes, pasos y información nutricional completa.
                </p>
                <div className="flex items-center text-orange-500 font-semibold">
                  Ver Recetas <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Ejercicios */}
            <Link href="/ejercicios">
              <div className="p-8 rounded-xl bg-white border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
                <Dumbbell className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Ejercicios Gratis</h3>
                <p className="text-slate-600 mb-4">
                  Rutinas completas de entrenamiento con instrucciones paso a paso. Para todos los niveles y objetivos.
                </p>
                <div className="flex items-center text-blue-500 font-semibold">
                  Ver Ejercicios <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Blog */}
            <Link href="/blog">
              <div className="p-8 rounded-xl bg-white border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
                <BookOpen className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Blog Educativo</h3>
                <p className="text-slate-600 mb-4">
                  Artículos detallados sobre nutrición, fitness, pérdida de peso y estilo de vida saludable.
                </p>
                <div className="flex items-center text-green-500 font-semibold">
                  Leer Blog <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Contenido Popular</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Featured Recipe */}
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-200 to-orange-300"></div>
              <div className="p-6">
                <span className="text-xs font-semibold text-orange-600 uppercase">Receta Destacada</span>
                <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3">
                  Ensalada de Proteína con Pollo y Quinoa
                </h3>
                <p className="text-slate-600 mb-4">
                  Una receta deliciosa, nutritiva y fácil de preparar. Alta en proteínas, perfecta para después del entrenamiento.
                </p>
                <Link href="/recetas">
                  <div className="text-orange-600 font-semibold cursor-pointer hover:text-orange-700">
                    Ver Receta Completa →
                  </div>
                </Link>
              </div>
            </div>

            {/* Featured Exercise */}
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-200 to-blue-300"></div>
              <div className="p-6">
                <span className="text-xs font-semibold text-blue-600 uppercase">Ejercicio Destacado</span>
                <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3">
                  Rutina Full Body para Principiantes
                </h3>
                <p className="text-slate-600 mb-4">
                  Programa de entrenamiento completo para comenzar tu transformación física sin experiencia previa.
                </p>
                <Link href="/ejercicios">
                  <div className="text-blue-600 font-semibold cursor-pointer hover:text-blue-700">
                    Ver Rutina Completa →
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-4 md:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Todo el Contenido es 100% Gratis
          </h2>
          <p className="text-lg text-slate-600">
            En CambioFit creemos que la información sobre salud y fitness debe ser accesible para todos. 
            Disfruta de recetas, ejercicios y artículos educativos sin costo alguno.
          </p>
        </div>
      </section>
    </div>
  );
}
