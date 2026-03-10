/*
 * CambioFit Receta Detalle — Página completa de una receta con ingredientes, pasos, nutrición
 * SEO: receta saludable, receta fitness, cómo preparar [receta]
 */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLocation } from "wouter";
import { Clock, Users, Flame, Apple, ChefHat, CheckCircle, Share2, Heart, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const recipes: Record<string, any> = {
  "bowl-proteina-quinoa": {
    name: "Bowl de Proteína con Quinoa",
    category: "Almuerzo",
    time: "20 min",
    servings: 1,
    difficulty: "Fácil",
    kcal: 420,
    protein: 38,
    carbs: 45,
    fat: 12,
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
    description: "Un bowl nutritivo y delicioso perfecto para después del entrenamiento o como almuerzo saludable. Alto en proteína, fibra y nutrientes.",
    ingredients: [
      { item: "Pechuga de pollo cocida", amount: "150g" },
      { item: "Quinoa cocida", amount: "100g" },
      { item: "Aguacate", amount: "1/2" },
      { item: "Tomate cherry", amount: "100g" },
      { item: "Espinaca fresca", amount: "50g" },
      { item: "Zanahoria rallada", amount: "50g" },
      { item: "Limón", amount: "1" },
      { item: "Aceite de oliva", amount: "1 cucharada" },
      { item: "Sal y pimienta", amount: "al gusto" },
    ],
    steps: [
      "Cocina la quinoa según las instrucciones del paquete (15 minutos aprox). Déjala enfriar.",
      "Corta el pollo cocido en cubos pequeños.",
      "Pica el aguacate en cubos y rocía con limón para evitar que se oxide.",
      "Corta los tomates cherry por la mitad.",
      "En un bowl, coloca la quinoa como base.",
      "Distribuye encima el pollo, aguacate, tomates, espinaca y zanahoria.",
      "Aliña con aceite de oliva, sal, pimienta y un poco más de limón.",
      "¡Mezcla bien y disfruta!",
    ],
    tips: [
      "Puedes preparar la quinoa el día anterior para ahorrar tiempo.",
      "Sustituye el pollo por pavo, atún o tofu si lo prefieres.",
      "Añade garbanzos cocidos para más proteína vegetal.",
      "Sírvelo frío o tibio según tu preferencia.",
    ],
    nutrition: [
      { label: "Calorías", value: "420 kcal" },
      { label: "Proteína", value: "38g" },
      { label: "Carbohidratos", value: "45g" },
      { label: "Grasas", value: "12g" },
      { label: "Fibra", value: "8g" },
    ],
  },
  "tortilla-claras-espinacas": {
    name: "Tortilla de Claras con Espinacas",
    category: "Desayuno",
    time: "10 min",
    servings: 1,
    difficulty: "Muy Fácil",
    kcal: 280,
    protein: 32,
    carbs: 5,
    fat: 14,
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
    description: "Una tortilla proteica perfecta para empezar el día con energía. Baja en carbohidratos, alta en proteína.",
    ingredients: [
      { item: "Claras de huevo", amount: "4" },
      { item: "Espinaca fresca", amount: "100g" },
      { item: "Cebolla", amount: "1/4" },
      { item: "Tomate", amount: "1/4" },
      { item: "Queso bajo en grasa", amount: "30g" },
      { item: "Aceite de oliva spray", amount: "al gusto" },
      { item: "Sal y pimienta", amount: "al gusto" },
    ],
    steps: [
      "Bate las claras de huevo en un bowl hasta que estén espumosas.",
      "Calienta una sartén antiadherente a fuego medio-alto con spray de aceite.",
      "Pica la cebolla y el tomate en cubos pequeños.",
      "Añade la cebolla a la sartén y sofríe 1 minuto.",
      "Agrega la espinaca y cocina hasta que se marchite (2 minutos).",
      "Vierte las claras batidas sobre las verduras.",
      "Cuando empiece a cuajar, añade el tomate y el queso.",
      "Dobla la tortilla por la mitad y sirve caliente.",
    ],
    tips: [
      "Usa claras de huevo para reducir calorías y grasas.",
      "Puedes añadir champiñones, pimientos o cualquier verdura que tengas.",
      "Prepárala sin aceite usando spray para reducir calorías.",
      "Perfecta para llevar como desayuno al trabajo.",
    ],
    nutrition: [
      { label: "Calorías", value: "280 kcal" },
      { label: "Proteína", value: "32g" },
      { label: "Carbohidratos", value: "5g" },
      { label: "Grasas", value: "14g" },
      { label: "Fibra", value: "1g" },
    ],
  },
};

export default function RecetaDetalle() {
  useScrollReveal();
  const [location] = useLocation();
  const recipeId = location.split("/").pop() || "bowl-proteina-quinoa";
  const recipe = recipes[recipeId] || recipes["bowl-proteina-quinoa"];

  return (
    <div className="min-h-screen pt-16 pb-20">
      {/* Hero con imagen */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={recipe.img}
          alt={recipe.name}
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
            <span className="text-orange-400 font-bold text-sm uppercase tracking-wider">{recipe.category}</span>
            <h1 className="text-4xl font-black text-white mt-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {recipe.name}
            </h1>
            <div className="flex flex-wrap gap-4 mt-4">
              {[
                { icon: Clock, label: recipe.time },
                { icon: Users, label: `${recipe.servings} porción` },
                { icon: ChefHat, label: recipe.difficulty },
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
                  Acerca de esta receta
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">{recipe.description}</p>
              </div>

              {/* Ingredientes */}
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Ingredientes
                </h2>
                <div className="space-y-3">
                  {recipe.ingredients.map((ing: any, i: number) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                      <span className="flex-1 text-gray-700">{ing.item}</span>
                      <span className="font-semibold text-gray-900 text-sm">{ing.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pasos */}
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Paso a Paso
                </h2>
                <div className="space-y-4">
                  {recipe.steps.map((step: string, i: number) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full gradient-brand flex items-center justify-center shrink-0">
                        <span className="font-black text-white text-sm">{i + 1}</span>
                      </div>
                      <div className="pt-1">
                        <p className="text-gray-700 leading-relaxed">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips */}
              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <h3 className="font-black text-gray-900 mb-4 flex items-center gap-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <span className="text-2xl">💡</span>
                  Consejos
                </h3>
                <ul className="space-y-2">
                  {recipe.tips.map((tip: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span className="text-orange-500 font-bold mt-0.5">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="reveal space-y-6">
              {/* Nutrición */}
              <div className="sticky top-24 p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100">
                <h3 className="font-black text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Información Nutricional
                </h3>
                <div className="space-y-3">
                  {recipe.nutrition.map((item: any, i: number) => (
                    <div key={i} className="flex justify-between items-center pb-3 border-b border-orange-200 last:border-0 last:pb-0">
                      <span className="text-gray-600 text-sm">{item.label}</span>
                      <span className="font-black text-gray-900">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Macros */}
              <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-black text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Macronutrientes
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Proteína", value: recipe.protein, color: "bg-orange-500", icon: "🥚" },
                    { label: "Carbos", value: recipe.carbs, color: "bg-green-500", icon: "🌾" },
                    { label: "Grasas", value: recipe.fat, color: "bg-blue-500", icon: "🥑" },
                  ].map((macro) => (
                    <div key={macro.label}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                          <span>{macro.icon}</span>
                          {macro.label}
                        </span>
                        <span className="font-black text-gray-900">{macro.value}g</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className={`h-full ${macro.color}`} style={{ width: `${(macro.value / 50) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Acciones */}
              <div className="flex gap-3">
                <button
                  onClick={() => toast.success("¡Receta guardada!", { description: "La encontrarás en tu perfil." })}
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
