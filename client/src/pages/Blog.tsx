/*
 * CambioFit Blog Page — Artículos de salud, ejercicio, nutrición y motivación
 * SEO: blog fitness, artículos salud, consejos nutrición, rutinas ejercicio
 */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { Clock, User, Tag, ArrowRight, Search, ChevronRight } from "lucide-react";
import { toast } from "sonner";

const categories = ["Todos", "Nutrición", "Ejercicio", "Motivación", "Pérdida de Peso", "Músculo", "Recetas", "Estilo de Vida"];

const posts = [
  {
    title: "Los 10 Mejores Alimentos Para Perder Grasa Corporal",
    excerpt: "Descubre qué alimentos aceleran tu metabolismo y te ayudan a quemar grasa de forma natural. Incluye lista de compras y consejos prácticos.",
    category: "Nutrición",
    author: "Dr. Martínez",
    date: "8 Mar 2025",
    readTime: "8 min",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
    featured: true,
    tags: ["dieta", "pérdida de peso", "nutrición"],
  },
  {
    title: "Rutina HIIT de 20 Minutos Para Quemar Grasa en Casa",
    excerpt: "Sin equipamiento, sin excusas. Esta rutina de alta intensidad quema hasta 400 calorías en solo 20 minutos desde la comodidad de tu hogar.",
    category: "Ejercicio",
    author: "Coach Ana",
    date: "5 Mar 2025",
    readTime: "6 min",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    featured: false,
    tags: ["HIIT", "fitness en casa", "cardio"],
  },
  {
    title: "Cómo Calcular Tus Macros Para Tu Objetivo Fitness",
    excerpt: "Guía completa para calcular proteínas, carbohidratos y grasas según tu objetivo: perder peso, ganar músculo o mantener tu físico actual.",
    category: "Nutrición",
    author: "Nutricionista López",
    date: "1 Mar 2025",
    readTime: "10 min",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
    featured: false,
    tags: ["macros", "dieta", "nutrición deportiva"],
  },
  {
    title: "5 Errores que Sabotean Tu Pérdida de Peso",
    excerpt: "¿Haces dieta y ejercicio pero no ves resultados? Descubre los errores más comunes que impiden bajar de peso y cómo corregirlos.",
    category: "Pérdida de Peso",
    author: "Dr. Martínez",
    date: "25 Feb 2025",
    readTime: "7 min",
    img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
    featured: false,
    tags: ["pérdida de peso", "errores", "consejos"],
  },
  {
    title: "Guía Completa Para Ganar Músculo: Todo lo que Necesitas Saber",
    excerpt: "Desde la frecuencia de entrenamiento hasta la nutrición óptima. Todo lo que necesitas saber para ganar masa muscular de forma efectiva.",
    category: "Músculo",
    author: "Coach Roberto",
    date: "20 Feb 2025",
    readTime: "12 min",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    featured: false,
    tags: ["músculo", "hipertrofia", "entrenamiento"],
  },
  {
    title: "Receta: Bowl de Proteína con Quinoa y Aguacate",
    excerpt: "Una receta deliciosa, nutritiva y fácil de preparar. Alta en proteínas, perfecta para después del entrenamiento o como almuerzo saludable.",
    category: "Recetas",
    author: "Chef Fitness",
    date: "15 Feb 2025",
    readTime: "5 min",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
    featured: false,
    tags: ["recetas", "proteína", "quinoa"],
  },
  {
    title: "Cómo Mantener la Motivación Para Hacer Ejercicio",
    excerpt: "Los secretos psicológicos para mantener la constancia en el gimnasio. Técnicas probadas que usan los atletas de élite para no rendirse.",
    category: "Motivación",
    author: "Psicóloga Deportiva",
    date: "10 Feb 2025",
    readTime: "9 min",
    img: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&h=400&fit=crop",
    featured: false,
    tags: ["motivación", "hábitos", "mentalidad"],
  },
  {
    title: "El Sueño y la Recuperación: Claves del Progreso Físico",
    excerpt: "Dormir bien no es opcional si quieres resultados. Descubre cómo el sueño afecta tu composición corporal, hormonas y rendimiento deportivo.",
    category: "Estilo de Vida",
    author: "Dr. Martínez",
    date: "5 Feb 2025",
    readTime: "8 min",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
    featured: false,
    tags: ["sueño", "recuperación", "bienestar"],
  },
];

export default function Blog() {
  useScrollReveal();
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === "Todos" || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const featuredPost = posts.find((p) => p.featured);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container">
          <div className="max-w-2xl reveal">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Blog CambioFit</span>
            <h1 className="section-title text-gray-900 mt-2">
              Artículos de Salud,<br />
              <span className="gradient-brand-text">Fitness y Nutrición</span>
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
              Contenido experto sobre dietas efectivas, rutinas de ejercicio, pérdida de peso y estilo de vida saludable.
            </p>
          </div>

          {/* Search */}
          <div className="mt-8 reveal max-w-lg">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar artículos..."
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured post */}
      {featuredPost && (
        <section className="py-12 bg-white">
          <div className="container">
            <div className="reveal">
              <span className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-6 block">Artículo Destacado</span>
              <div
                className="card-hover rounded-2xl overflow-hidden border border-gray-100 shadow-md cursor-pointer"
                onClick={() => toast.info(featuredPost.title, { description: "Artículo completo próximamente." })}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={featuredPost.img}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      Destacado
                    </span>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <span className="text-orange-500 text-sm font-bold mb-2">{featuredPost.category}</span>
                    <h2 className="text-2xl font-black text-gray-900 mb-3 leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-500 leading-relaxed mb-5">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-5">
                      <span className="flex items-center gap-1.5">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime} lectura
                      </span>
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-orange-500 font-bold">
                      Leer artículo completo <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories filter */}
      <section className="py-6 bg-gray-50 border-y border-gray-100 sticky top-16 z-30">
        <div className="container">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "gradient-brand text-white shadow-md"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-orange-300 hover:text-orange-500"
                }`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 bg-white">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No se encontraron artículos para tu búsqueda.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, i) => (
                <div
                  key={post.title}
                  className={`reveal reveal-delay-${(i % 3) + 1} card-hover bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm cursor-pointer`}
                  onClick={() => toast.info(post.title, { description: "Artículo completo próximamente." })}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 hover:text-orange-500 transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-3">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Tag className="w-2.5 h-2.5" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        {post.author}
                      </span>
                      <span className="text-orange-500 text-sm font-semibold flex items-center gap-1">
                        Leer <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center reveal">
            <h2 className="text-3xl font-black text-gray-900 mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              No Te Pierdas Ningún Artículo
            </h2>
            <p className="text-gray-500 mb-6">Suscríbete y recibe los mejores artículos de fitness directamente en tu correo.</p>
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("¡Suscripción exitosa!", { description: "Recibirás nuestros artículos cada semana." });
              }}
            >
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
              <button type="submit" className="btn-gradient px-8 py-3 rounded-xl font-bold whitespace-nowrap">
                Suscribirme
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
