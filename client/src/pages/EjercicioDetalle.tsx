/*
 * CambioFit Ejercicio Detalle — Página completa de un ejercicio con guía paso a paso
 * SEO: cómo hacer [ejercicio], guía de ejercicio, técnica correcta
 */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLocation } from "wouter";
import { Clock, Users, Zap, Target, AlertCircle, CheckCircle, Share2, Heart, ArrowLeft, Repeat2 } from "lucide-react";
import { toast } from "sonner";

const exercises: Record<string, any> = {
  "hiit-total-body": {
    name: "HIIT Total Body 30 Min",
    category: "HIIT",
    level: "Intermedio",
    duration: "30 min",
    kcal: "350–450",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    description: "Una rutina de alta intensidad que trabaja todo el cuerpo. Perfecta para quemar grasa rápidamente sin necesidad de equipamiento.",
    equipment: "Sin equipamiento",
    difficulty: "Intermedio",
    exercises: [
      {
        name: "Calentamiento",
        duration: "5 min",
        description: "Trota en el lugar, estira brazos y piernas.",
      },
      {
        name: "Burpees",
        duration: "40 seg trabajo / 20 seg descanso",
        reps: "4 series",
        description: "De pie → Flexiona → Colócate en plancha → Flexión → Salta hacia arriba. Un ejercicio completo que trabaja todo el cuerpo.",
        form: [
          "Párate con los pies separados al ancho de los hombros",
          "Flexiona las rodillas y coloca las manos en el suelo",
          "Salta hacia atrás para quedar en posición de plancha",
          "Haz una flexión",
          "Salta hacia adelante para volver a la posición inicial",
          "Salta hacia arriba con los brazos extendidos",
        ],
      },
      {
        name: "Mountain Climbers",
        duration: "40 seg trabajo / 20 seg descanso",
        reps: "4 series",
        description: "En posición de plancha, lleva las rodillas alternadamente hacia el pecho de forma rápida.",
        form: [
          "Colócate en posición de plancha",
          "Mantén el core contraído",
          "Lleva la rodilla derecha hacia el pecho",
          "Rápidamente cambia a la rodilla izquierda",
          "Continúa alternando a ritmo rápido",
          "Mantén las caderas a la altura de los hombros",
        ],
      },
      {
        name: "Jump Squats",
        duration: "40 seg trabajo / 20 seg descanso",
        reps: "4 series",
        description: "Sentadillas explosivas que trabajan piernas y cardio.",
        form: [
          "Párate con los pies separados al ancho de los hombros",
          "Baja en sentadilla profunda",
          "Salta explosivamente hacia arriba",
          "Cae suavemente y vuelve a bajar",
          "Mantén el pecho levantado",
          "Las rodillas no deben pasar de las puntas de los pies",
        ],
      },
      {
        name: "High Knees",
        duration: "40 seg trabajo / 20 seg descanso",
        reps: "4 series",
        description: "Trota en el lugar levantando las rodillas lo más alto posible.",
        form: [
          "De pie, trota en el lugar",
          "Levanta las rodillas hasta la altura de la cadera",
          "Mueve los brazos como si estuvieras corriendo",
          "Mantén un ritmo rápido y controlado",
          "Mira hacia el frente",
        ],
      },
      {
        name: "Push-ups",
        duration: "40 seg trabajo / 20 seg descanso",
        reps: "4 series",
        description: "Flexiones clásicas para trabajar pecho, hombros y tríceps.",
        form: [
          "Colócate en posición de plancha",
          "Las manos deben estar al ancho de los hombros",
          "Baja el cuerpo hasta que el pecho casi toque el suelo",
          "Sube empujando con los brazos",
          "Mantén el core contraído durante todo el movimiento",
          "Respira: inhala al bajar, exhala al subir",
        ],
      },
      {
        name: "Enfriamiento",
        duration: "5 min",
        description: "Camina lentamente y estira todo el cuerpo.",
      },
    ],
    tips: [
      "Mantén una intensidad alta durante los 40 segundos de trabajo.",
      "Usa los 20 segundos de descanso para recuperarte, no para detenerte completamente.",
      "Si es muy intenso, reduce el tiempo de trabajo a 30 segundos.",
      "Haz esta rutina 3 veces por semana máximo para permitir recuperación.",
      "Hidrátate bien antes, durante y después.",
    ],
    modifications: [
      { level: "Principiante", desc: "Reduce a 20 seg trabajo / 40 seg descanso. Haz 2 series en lugar de 4." },
      { level: "Avanzado", desc: "Aumenta a 50 seg trabajo / 10 seg descanso. Añade 1 minuto más de trabajo." },
    ],
  },
  "fuerza-tren-superior": {
    name: "Fuerza Tren Superior",
    category: "Fuerza",
    level: "Avanzado",
    duration: "60 min",
    kcal: "250–350",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    description: "Rutina completa para desarrollar fuerza y músculo en pecho, espalda, hombros y brazos.",
    equipment: "Mancuernas, barra, banco",
    difficulty: "Avanzado",
    exercises: [
      {
        name: "Calentamiento",
        duration: "5-10 min",
        description: "Cardio ligero + estiramientos dinámicos",
      },
      {
        name: "Press de Banca",
        duration: "4 series x 6-8 reps",
        description: "Ejercicio principal para pecho.",
        form: [
          "Acuéstate en el banco con los pies en el suelo",
          "Agarra la barra al ancho de los hombros",
          "Baja la barra hasta el pecho",
          "Empuja hacia arriba explosivamente",
          "Mantén el control en la bajada",
        ],
      },
      {
        name: "Dominadas",
        duration: "4 series x 8-10 reps",
        description: "Ejercicio principal para espalda.",
        form: [
          "Cuelgate de la barra con las manos separadas al ancho de los hombros",
          "Sube tirando con los codos hacia abajo",
          "Lleva la barbilla por encima de la barra",
          "Baja controladamente",
        ],
      },
      {
        name: "Remo con Barra",
        duration: "4 series x 8 reps",
        description: "Trabajo de espalda media y baja.",
        form: [
          "De pie, flexiona las rodillas ligeramente",
          "Inclina el torso hacia adelante 45 grados",
          "Agarra la barra con las manos separadas",
          "Tira la barra hacia tu abdomen",
          "Controla la bajada",
        ],
      },
      {
        name: "Press Militar",
        duration: "3 series x 8 reps",
        description: "Trabajo de hombros y tríceps.",
        form: [
          "De pie, sostén la barra a la altura de los hombros",
          "Empuja la barra hacia arriba",
          "Extiende los brazos completamente",
          "Baja controladamente",
        ],
      },
      {
        name: "Curl de Bíceps",
        duration: "3 series x 10 reps",
        description: "Aislamiento de bíceps.",
        form: [
          "De pie con mancuernas a los lados",
          "Flexiona los codos llevando las mancuernas hacia los hombros",
          "Mantén los codos pegados al cuerpo",
          "Baja controladamente",
        ],
      },
    ],
    tips: [
      "Prioriza la forma correcta sobre el peso.",
      "Descansa 2-3 minutos entre series de ejercicios principales.",
      "Come proteína después del entrenamiento.",
      "Haz esta rutina 1-2 veces por semana.",
    ],
    modifications: [
      { level: "Intermedio", desc: "Reduce a 3 series en cada ejercicio. Usa menos peso." },
      { level: "Avanzado", desc: "Aumenta a 5 series. Añade ejercicios complementarios." },
    ],
  },
};

export default function EjercicioDetalle() {
  useScrollReveal();
  const [location] = useLocation();
  const exerciseId = location.split("/").pop() || "hiit-total-body";
  const exercise = exercises[exerciseId] || exercises["hiit-total-body"];

  return (
    <div className="min-h-screen pt-16 pb-20">
      {/* Hero */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={exercise.img}
          alt={exercise.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute top-4 left-4">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="container">
            <span className="text-orange-400 font-bold text-sm uppercase tracking-wider">{exercise.category}</span>
            <h1 className="text-4xl font-black text-white mt-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {exercise.name}
            </h1>
            <div className="flex flex-wrap gap-4 mt-4">
              {[
                { icon: Clock, label: exercise.duration },
                { icon: Target, label: exercise.level },
                { icon: Zap, label: exercise.kcal },
              ].map((item) => (
                <span key={item.label} className="flex items-center gap-2 text-white/80 text-sm">
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 reveal space-y-12">
              {/* Descripción */}
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Acerca de este ejercicio
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">{exercise.description}</p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <p className="text-gray-500 text-sm mb-1">Equipamiento</p>
                    <p className="font-bold text-gray-900">{exercise.equipment}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <p className="text-gray-500 text-sm mb-1">Dificultad</p>
                    <p className="font-bold text-gray-900">{exercise.difficulty}</p>
                  </div>
                </div>
              </div>

              {/* Ejercicios */}
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Ejercicios Incluidos
                </h2>
                <div className="space-y-4">
                  {exercise.exercises.map((ex: any, i: number) => (
                    <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            {ex.name}
                          </h3>
                          <p className="text-orange-500 font-semibold text-sm mt-1">
                            {ex.duration} {ex.reps && `• ${ex.reps}`}
                          </p>
                        </div>
                        {ex.form && <Repeat2 className="w-5 h-5 text-gray-400 shrink-0" />}
                      </div>
                      <p className="text-gray-600 mb-4">{ex.description}</p>
                      {ex.form && (
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-gray-700 mb-3">Técnica correcta:</p>
                          {ex.form.map((step: string, j: number) => (
                            <div key={j} className="flex items-start gap-3">
                              <span className="text-orange-500 font-bold shrink-0">{j + 1}.</span>
                              <p className="text-gray-600 text-sm">{step}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips */}
              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <h3 className="font-black text-gray-900 mb-4 flex items-center gap-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <span className="text-2xl">💡</span>
                  Consejos Importantes
                </h3>
                <ul className="space-y-2">
                  {exercise.tips.map((tip: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modificaciones */}
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Adaptaciones por Nivel
                </h2>
                <div className="space-y-4">
                  {exercise.modifications.map((mod: any, i: number) => (
                    <div key={i} className="p-4 border-l-4 border-orange-500 bg-orange-50 rounded-lg">
                      <p className="font-bold text-gray-900 mb-2">{mod.level}</p>
                      <p className="text-gray-600">{mod.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="reveal space-y-6">
              {/* Resumen */}
              <div className="sticky top-24 p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100">
                <h3 className="font-black text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Resumen
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Duración", value: exercise.duration },
                    { label: "Calorías", value: exercise.kcal },
                    { label: "Nivel", value: exercise.level },
                    { label: "Equipamiento", value: exercise.equipment },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center pb-3 border-b border-orange-200 last:border-0 last:pb-0">
                      <span className="text-gray-600 text-sm">{item.label}</span>
                      <span className="font-bold text-gray-900">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advertencia */}
              <div className="p-4 bg-yellow-50 rounded-2xl border border-yellow-200">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-yellow-900 text-sm mb-1">Importante</p>
                    <p className="text-yellow-800 text-xs">Consulta con un profesional antes de comenzar un nuevo programa de ejercicio, especialmente si tienes lesiones previas.</p>
                  </div>
                </div>
              </div>

              {/* Acciones */}
              <div className="flex gap-3">
                <button
                  onClick={() => toast.success("¡Rutina guardada!", { description: "La encontrarás en tu perfil." })}
                  className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-bold hover:border-orange-400 hover:text-orange-500 transition-colors flex items-center justify-center gap-2"
                >
                  <Heart className="w-5 h-5" />
                  Guardar
                </button>
                <button
                  onClick={() => toast.success("¡Compartido!", { description: "Copia el enlace de tu navegador." })}
                  className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-bold hover:border-orange-400 hover:text-orange-500 transition-colors flex items-center justify-center gap-2"
                >
                  <Share2 className="w-5 h-5" />
                  Compartir
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
