/*
 * CambioFit Blog — Artículos Educativos Optimizados para SEO y AdSense
 */
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Search, Clock, User } from "lucide-react";

const BLOG_ARTICLES = [
  {
    id: 1,
    title: "Déficit Calórico: La Clave para Perder Peso de Forma Sostenible",
    excerpt: "Descubre cómo crear un déficit calórico seguro y efectivo para perder peso sin sacrificar tu masa muscular.",
    category: "Nutrición",
    author: "CambioFit",
    date: "15 Mar 2026",
    readTime: "8 min"
  },
  {
    id: 2,
    title: "5 Ejercicios Comprobados para Ganar Músculo Rápidamente",
    excerpt: "Los ejercicios más efectivos para hipertrofia muscular, con instrucciones detalladas y progresión de entrenamiento.",
    category: "Ejercicio",
    author: "CambioFit",
    date: "14 Mar 2026",
    readTime: "10 min"
  },
  {
    id: 3,
    title: "Proteína: Guía Completa para Optimizar tu Ingesta",
    excerpt: "Todo lo que necesitas saber sobre proteína: cuánta necesitas, mejores fuentes y cómo optimizar tu consumo.",
    category: "Nutrición",
    author: "CambioFit",
    date: "13 Mar 2026",
    readTime: "9 min"
  },
  {
    id: 4,
    title: "Metabolismo Basal: Cómo Acelerarlo Naturalmente",
    excerpt: "Estrategias científicamente comprobadas para aumentar tu metabolismo y quemar más calorías en reposo.",
    category: "Nutrición",
    author: "CambioFit",
    date: "12 Mar 2026",
    readTime: "7 min"
  },
  {
    id: 5,
    title: "Rutina de Entrenamiento Full Body para Principiantes",
    excerpt: "Programa de entrenamiento completo para comenzar tu transformación física sin experiencia previa.",
    category: "Ejercicio",
    author: "CambioFit",
    date: "11 Mar 2026",
    readTime: "12 min"
  },
  {
    id: 6,
    title: "Carbohidratos: Desmintiendo Mitos y Optimizando tu Dieta",
    excerpt: "Aprende por qué los carbohidratos no son enemigos y cómo incluirlos estratégicamente en tu plan de nutrición.",
    category: "Nutrición",
    author: "CambioFit",
    date: "10 Mar 2026",
    readTime: "8 min"
  },
  {
    id: 7,
    title: "Grasas Saludables: Por Qué son Esenciales para tu Salud",
    excerpt: "Descubre cuáles son las grasas saludables y cómo incorporarlas en tu dieta para optimizar tu composición corporal.",
    category: "Nutrición",
    author: "CambioFit",
    date: "9 Mar 2026",
    readTime: "7 min"
  },
  {
    id: 8,
    title: "Hidratación: El Factor Olvidado en tu Transformación Física",
    excerpt: "Cómo la hidratación adecuada acelera tu metabolismo, mejora el rendimiento y facilita la pérdida de peso.",
    category: "Nutrición",
    author: "CambioFit",
    date: "8 Mar 2026",
    readTime: "6 min"
  },
  {
    id: 9,
    title: "Recuperación Muscular: Estrategias para Maximizar Resultados",
    excerpt: "Técnicas de recuperación post-entrenamiento para optimizar el crecimiento muscular y prevenir lesiones.",
    category: "Ejercicio",
    author: "CambioFit",
    date: "7 Mar 2026",
    readTime: "9 min"
  },
  {
    id: 10,
    title: "Sueño y Fitness: Cómo el Descanso Acelera tu Transformación",
    excerpt: "La ciencia detrás de cómo dormir bien es fundamental para perder peso y ganar músculo.",
    category: "Estilo de Vida",
    author: "CambioFit",
    date: "6 Mar 2026",
    readTime: "8 min"
  },
  {
    id: 11,
    title: "Estrés y Peso: Cómo Controlar el Cortisol para Perder Grasa",
    excerpt: "Entiende la relación entre estrés crónico y ganancia de peso, y aprende estrategias para controlarlo.",
    category: "Estilo de Vida",
    author: "CambioFit",
    date: "5 Mar 2026",
    readTime: "7 min"
  },
  {
    id: 12,
    title: "Suplementación: Qué Funciona Realmente y Qué Evitar",
    excerpt: "Guía basada en evidencia sobre suplementos de fitness: cuáles son efectivos y cuáles son una pérdida de dinero.",
    category: "Nutrición",
    author: "CambioFit",
    date: "4 Mar 2026",
    readTime: "10 min"
  }
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["Nutrición", "Ejercicio", "Estilo de Vida"];

  const filteredArticles = useMemo(() => {
    return BLOG_ARTICLES.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="pt-24 pb-12 px-4 md:px-8 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-6xl mx-auto text-white">
          <h1 className="text-5xl md:text-6xl font-black mb-4">Blog de Fitness y Nutrición</h1>
          <p className="text-xl opacity-90">
            Artículos educativos sobre dieta, ejercicio y transformación física
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 px-4 md:px-8 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="mb-8 relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className={selectedCategory === null ? "bg-orange-500 hover:bg-orange-600" : ""}
            >
              Todos ({BLOG_ARTICLES.length})
            </Button>
            {categories.map(cat => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className={selectedCategory === cat ? "bg-orange-500 hover:bg-orange-600" : ""}
              >
                {cat} ({BLOG_ARTICLES.filter(a => a.category === cat).length})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-slate-600">No se encontraron artículos. Intenta con otros términos de búsqueda.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredArticles.map(article => (
                <article key={article.id} className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className="text-xs font-semibold text-orange-600 uppercase bg-orange-50 px-3 py-1 rounded">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <User className="w-3 h-3" />
                        {article.author}
                      </div>
                      <span className="text-xs text-slate-500">{article.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 md:px-8 bg-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            No te pierdas nuevos artículos
          </h2>
          <p className="text-slate-600 mb-6">
            Suscríbete para recibir los últimos artículos sobre fitness, nutrición y transformación física.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Suscribirse
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
