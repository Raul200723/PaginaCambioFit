/*
 * CambioFit Ejercicio Page — Rutinas de ejercicio, guías paso a paso
 * SEO: rutinas de ejercicio, fitness en casa, entrenamiento HIIT, ganar músculo
 */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "wouter";
import { Dumbbell, Clock, Zap, Target, Play, ChevronRight, ArrowRight, Users, TrendingUp } from "lucide-react";
import { toast } from "sonner";

const WORKOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663422138565/DHaZUEWUxgJfyccs8zR34y/workout-routine-34rorNNAKtj3zmFMqHZZDp.webp";

const categories = [
  { name: "HIIT", icon: Zap, color: "text-orange-500", bg: "bg-orange-50", count: 45 },
  { name: "Fuerza", icon: Dumbbell, color: "text-blue-500", bg: "bg-blue-50", count: 62 },
  { name: "En Casa", icon: Target, color: "text-green-500", bg: "bg-green-50", count: 38 },
  { name: "Cardio", icon: TrendingUp, color: "text-red-500", bg: "bg-red-50", count: 29 },
  { name: "Yoga/Flex", icon: Users, color: "text-purple-500", bg: "bg-purple-50", count: 24 },
  { name: "Funcional", icon: Clock, color: "text-yellow-600", bg: "bg-yellow-50", count: 31 },
];

const routines = [
  {
    name: "HIIT Total Body 30 Min",
    level: "Intermedio",
    duration: "30 min",
    kcal: "350–450",
    category: "HIIT",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    exercises: ["Burpees", "Mountain Climbers", "Jump Squats", "High Knees", "Push-ups"],
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Fuerza Tren Superior",
    level: "Avanzado",
    duration: "60 min",
    kcal: "250–350",
    category: "Fuerza",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=250&fit=crop",
    exercises: ["Press Banca", "Dominadas", "Remo con Barra", "Press Militar", "Curl Bíceps"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Rutina en Casa Sin Equipamiento",
    level: "Principiante",
    duration: "45 min",
    kcal: "200–300",
    category: "En Casa",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=250&fit=crop",
    exercises: ["Sentadillas", "Flexiones", "Zancadas", "Abdominales", "Plancha"],
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Cardio Quema Grasa",
    level: "Todos",
    duration: "40 min",
    kcal: "400–500",
    category: "Cardio",
    img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&h=250&fit=crop",
    exercises: ["Carrera moderada", "Intervalos", "Saltos de cuerda", "Ciclismo", "Natación"],
    color: "from-red-500 to-pink-600",
  },
  {
    name: "Fuerza Tren Inferior",
    level: "Intermedio",
    duration: "55 min",
    kcal: "300–400",
    category: "Fuerza",
    img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&h=250&fit=crop",
    exercises: ["Sentadilla con Barra", "Peso Muerto", "Prensa", "Extensiones", "Curl Femoral"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Yoga y Flexibilidad",
    level: "Principiante",
    duration: "35 min",
    kcal: "100–150",
    category: "Yoga/Flex",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop",
    exercises: ["Saludo al Sol", "Guerrero I y II", "Perro Boca Abajo", "Paloma", "Savasana"],
    color: "from-purple-500 to-pink-500",
  },
];

const weeklyPlan = [
  { day: "Lunes", workout: "HIIT Total Body", duration: "30 min", focus: "Cardio + Fuerza" },
  { day: "Martes", workout: "Fuerza Tren Superior", duration: "60 min", focus: "Músculo" },
  { day: "Miércoles", workout: "Yoga y Recuperación", duration: "35 min", focus: "Flexibilidad" },
  { day: "Jueves", workout: "HIIT Cardio", duration: "40 min", focus: "Quema Grasa" },
  { day: "Viernes", workout: "Fuerza Tren Inferior", duration: "55 min", focus: "Músculo" },
  { day: "Sábado", workout: "Rutina en Casa", duration: "45 min", focus: "Funcional" },
  { day: "Domingo", workout: "Descanso Activo", duration: "20 min", focus: "Recuperación" },
];

export default function Ejercicio() {
  useScrollReveal();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-24 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={WORKOUT_IMG}
            alt="Entrenamiento de fuerza en gimnasio - rutinas de ejercicio CambioFit"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/70 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl reveal">
            <span className="text-orange-400 font-bold text-sm uppercase tracking-wider">Entrenamiento y Ejercicio</span>
            <h1 className="section-title text-white mt-2">
              Rutinas de Ejercicio<br />
              <span className="gradient-brand-text">Para Cada Objetivo</span>
            </h1>
            <p className="text-gray-300 mt-4 text-lg leading-relaxed">
              Más de 200 rutinas diseñadas por entrenadores certificados. Desde principiantes hasta atletas avanzados. En casa o en el gimnasio.
            </p>
            <div className="flex gap-4 mt-8">
              <button
                onClick={() => toast.success("¡Rutina iniciada!", { description: "Selecciona tu nivel para comenzar." })}
                className="btn-gradient px-8 py-4 rounded-xl font-bold flex items-center gap-3"
              >
                <Play className="w-5 h-5" />
                Empezar Ahora
              </button>
              <Link href="/contacto">
                <button className="px-8 py-4 rounded-xl font-bold flex items-center gap-3 bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all">
                  Mi Plan Personal
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-10 reveal">
            <h2 className="section-title text-gray-900">
              Categorías de<br />
              <span className="gradient-brand-text">Entrenamiento</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <div
                key={cat.name}
                className={`reveal reveal-delay-${(i % 3) + 1} card-hover text-center p-5 rounded-2xl ${cat.bg} border border-transparent hover:border-orange-200 cursor-pointer`}
                onClick={() => toast.info(`Categoría: ${cat.name}`, { description: `${cat.count} rutinas disponibles` })}
              >
                <cat.icon className={`w-8 h-8 ${cat.color} mx-auto mb-3`} />
                <p className="font-bold text-gray-900 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {cat.name}
                </p>
                <p className="text-gray-500 text-xs mt-1">{cat.count} rutinas</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Routines grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-14 reveal">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Rutinas Destacadas</span>
            <h2 className="section-title text-gray-900 mt-2">
              Las Rutinas Más<br />
              <span className="gradient-brand-text">Efectivas</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routines.map((routine, i) => (
              <div
                key={routine.name}
                className={`reveal reveal-delay-${(i % 3) + 1} card-hover bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={routine.img}
                    alt={`${routine.name} - rutina de ejercicio fitness`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className={`bg-gradient-to-r ${routine.color} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
                      {routine.category}
                    </span>
                    <span className="bg-black/40 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm">
                      {routine.level}
                    </span>
                  </div>
                  <button
                    className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                    onClick={() => toast.info(routine.name, { description: "Video tutorial próximamente disponible." })}
                  >
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm border-2 border-white/50 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </button>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-base mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {routine.name}
                  </h3>
                  <div className="flex gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-orange-400" />
                      {routine.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-yellow-400" />
                      {routine.kcal} kcal
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {routine.exercises.slice(0, 3).map((ex) => (
                      <span key={ex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {ex}
                      </span>
                    ))}
                    {routine.exercises.length > 3 && (
                      <span className="text-xs bg-orange-50 text-orange-500 px-2 py-1 rounded-full">
                        +{routine.exercises.length - 3} más
                      </span>
                    )}
                  </div>
                  <Link href={`/ejercicio/${routine.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}>
                    <button className="w-full py-2.5 rounded-xl border-2 border-gray-200 text-gray-700 text-sm font-bold hover:border-orange-400 hover:text-orange-500 transition-colors flex items-center justify-center gap-2">
                      Ver Rutina Completa <ChevronRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly plan */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14 reveal">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Plan Semanal</span>
            <h2 className="section-title text-gray-900 mt-2">
              Tu Semana de<br />
              <span className="gradient-brand-text">Entrenamiento Ideal</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Un plan semanal equilibrado que combina fuerza, cardio y recuperación para maximizar resultados.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
            {weeklyPlan.map((day, i) => (
              <div
                key={day.day}
                className={`reveal reveal-delay-${(i % 4) + 1} rounded-2xl p-4 text-center border transition-all cursor-pointer ${
                  day.day === "Domingo"
                    ? "bg-gray-50 border-gray-200"
                    : "bg-white border-gray-100 hover:border-orange-300 hover:shadow-md"
                }`}
              >
                <p className="font-black text-xs uppercase tracking-wider text-gray-400 mb-2">
                  {day.day.slice(0, 3)}
                </p>
                <div className={`w-10 h-10 mx-auto rounded-xl mb-3 flex items-center justify-center ${
                  day.day === "Domingo" ? "bg-gray-100" : "gradient-brand"
                }`}>
                  <Dumbbell className={`w-5 h-5 ${day.day === "Domingo" ? "text-gray-400" : "text-white"}`} />
                </div>
                <p className="font-bold text-gray-900 text-xs leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {day.workout}
                </p>
                <p className="text-gray-400 text-xs mt-1">{day.duration}</p>
                <span className={`inline-block mt-2 text-xs px-2 py-0.5 rounded-full font-semibold ${
                  day.day === "Domingo" ? "bg-gray-100 text-gray-500" : "bg-orange-50 text-orange-500"
                }`}>
                  {day.focus}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 reveal">
            <Link href="/contacto">
              <button className="btn-gradient px-10 py-4 rounded-xl font-bold flex items-center gap-3 mx-auto">
                Obtener Mi Plan Personalizado
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
