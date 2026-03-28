/*
 * CambioFit Ejercicios — Rutinas de Entrenamiento Gratis
 */
import { useState, useMemo } from "react";
import { Search, Zap, Clock, BarChart3 } from "lucide-react";

const EJERCICIOS = [
  {
    id: 1,
    title: "Rutina Full Body para Principiantes",
    difficulty: "Principiante",
    duration: "30 min",
    frequency: "3 veces por semana",
    exercises: [
      { name: "Sentadillas", sets: "3x12", description: "Posición: pies al ancho de hombros, baja hasta 90 grados" },
      { name: "Flexiones", sets: "3x10", description: "Cuerpo recto, baja hasta casi tocar el piso" },
      { name: "Remo con mancuerna", sets: "3x12", description: "Una mancuerna, tira hacia la cadera" },
      { name: "Press de hombro", sets: "3x10", description: "Levanta la mancuerna sobre la cabeza" },
      { name: "Abdominales", sets: "3x15", description: "Contrae el abdomen, sube lentamente" }
    ]
  },
  {
    id: 2,
    title: "HIIT de 20 Minutos - Cardio en Casa",
    difficulty: "Intermedio",
    duration: "20 min",
    frequency: "3-4 veces por semana",
    exercises: [
      { name: "Burpees", sets: "40 seg intenso / 20 seg descanso", description: "Salta hacia arriba, baja y haz flexión" },
      { name: "Mountain Climbers", sets: "40 seg intenso / 20 seg descanso", description: "Posición de flexión, alterna rodillas rápido" },
      { name: "Saltos de cuerda", sets: "40 seg intenso / 20 seg descanso", description: "Salta continuamente a ritmo rápido" },
      { name: "Sentadillas con salto", sets: "40 seg intenso / 20 seg descanso", description: "Baja en sentadilla y salta hacia arriba" },
      { name: "Descanso activo", sets: "1 min", description: "Camina en el lugar respirando profundo" }
    ]
  },
  {
    id: 3,
    title: "Entrenamiento de Pecho y Tríceps",
    difficulty: "Intermedio",
    duration: "45 min",
    frequency: "1-2 veces por semana",
    exercises: [
      { name: "Press de banca", sets: "4x8", description: "Barra a la altura del pecho, sube con control" },
      { name: "Flexiones inclinadas", sets: "3x12", description: "Manos en banco, cuerpo inclinado" },
      { name: "Aperturas con mancuernas", sets: "3x12", description: "Brazos abiertos, baja las mancuernas en arco" },
      { name: "Fondos en banco", sets: "3x12", description: "Usa un banco, baja el cuerpo" },
      { name: "Extensiones de tríceps", sets: "3x12", description: "Mancuerna sobre la cabeza, baja hacia atrás" }
    ]
  },
  {
    id: 4,
    title: "Entrenamiento de Espalda y Bíceps",
    difficulty: "Intermedio",
    duration: "45 min",
    frequency: "1-2 veces por semana",
    exercises: [
      { name: "Remo con barra", sets: "4x8", description: "Tira la barra hacia el pecho, mantén la espalda recta" },
      { name: "Dominadas", sets: "3x8", description: "Agarre ancho, sube hasta que la barbilla pase la barra" },
      { name: "Remo inclinado", sets: "3x12", description: "Banco inclinado, tira mancuernas hacia el pecho" },
      { name: "Curl de bíceps", sets: "3x12", description: "Brazos a los lados, flexiona los codos" },
      { name: "Curl martillo", sets: "3x12", description: "Mancuernas neutras, flexiona los codos" }
    ]
  },
  {
    id: 5,
    title: "Entrenamiento de Piernas",
    difficulty: "Avanzado",
    duration: "50 min",
    frequency: "1-2 veces por semana",
    exercises: [
      { name: "Sentadillas profundas", sets: "4x10", description: "Baja hasta que los muslos estén paralelos" },
      { name: "Peso muerto", sets: "4x8", description: "Barra a la altura de las espinillas, levanta con las piernas" },
      { name: "Prensa de piernas", sets: "3x12", description: "Máquina, baja hasta 90 grados" },
      { name: "Extensiones de cuádriceps", sets: "3x12", description: "Máquina, extiende las piernas" },
      { name: "Curl de isquiotibiales", sets: "3x12", description: "Máquina, flexiona las piernas" }
    ]
  },
  {
    id: 6,
    title: "Yoga para Flexibilidad y Recuperación",
    difficulty: "Principiante",
    duration: "30 min",
    frequency: "3-4 veces por semana",
    exercises: [
      { name: "Postura del gato-vaca", sets: "10 repeticiones", description: "Alterna entre arquearse y hundirse" },
      { name: "Postura del niño", sets: "1 min", description: "Siéntate sobre los talones, brazos extendidos" },
      { name: "Estiramiento de piernas", sets: "30 seg c/lado", description: "Levanta una pierna hacia el pecho" },
      { name: "Postura del árbol", sets: "30 seg c/lado", description: "De pie, coloca un pie en el muslo interno" },
      { name: "Savasana", sets: "5 min", description: "Acuéstate boca arriba, relájate completamente" }
    ]
  }
];

export default function Ejercicios() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  const filteredEjercicios = useMemo(() => {
    return EJERCICIOS.filter(ej => {
      const matchSearch = ej.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchDifficulty = !selectedDifficulty || ej.difficulty === selectedDifficulty;
      return matchSearch && matchDifficulty;
    });
  }, [searchTerm, selectedDifficulty]);

  const difficulties = ["Principiante", "Intermedio", "Avanzado"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="pt-24 pb-12 px-4 md:px-8 bg-gradient-to-r from-blue-500 to-cyan-500">
        <div className="max-w-6xl mx-auto text-white">
          <h1 className="text-5xl md:text-6xl font-black mb-4">Ejercicios Gratis</h1>
          <p className="text-xl opacity-90">
            Rutinas de entrenamiento para todos los niveles y objetivos
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 px-4 md:px-8 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          {/* Search */}
          <div className="mb-6 relative max-w-md">
            <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar rutinas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Difficulty Filter */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedDifficulty(null)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                selectedDifficulty === null
                  ? "bg-blue-500 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Todos ({EJERCICIOS.length})
            </button>
            {difficulties.map(diff => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  selectedDifficulty === diff
                    ? "bg-blue-500 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {diff} ({EJERCICIOS.filter(e => e.difficulty === diff).length})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Ejercicios */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {filteredEjercicios.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-slate-600">No se encontraron rutinas.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredEjercicios.map(ej => (
                <div key={ej.id} className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-blue-200 to-blue-300"></div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{ej.title}</h3>
                        <div className="flex gap-4 text-sm text-slate-600">
                          <div className="flex items-center gap-1">
                            <Zap className="w-4 h-4" />
                            {ej.difficulty}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {ej.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <BarChart3 className="w-4 h-4" />
                            {ej.frequency}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900">Ejercicios:</h4>
                      {ej.exercises.map((ex, idx) => (
                        <div key={idx} className="p-3 bg-slate-50 rounded-lg">
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-semibold text-slate-900">{ex.name}</span>
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{ex.sets}</span>
                          </div>
                          <p className="text-sm text-slate-600">{ex.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
