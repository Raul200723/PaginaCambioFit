/*
 * CambioFit Dietas Page — Planes alimenticios, recetas y consejos nutricionales
 * SEO: dietas efectivas, planes alimenticios, nutrición deportiva, pérdida de peso
 */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "wouter";
import { Apple, Clock, Flame, CheckCircle, ArrowRight, Star, Download } from "lucide-react";
import { toast } from "sonner";
import { downloadPlanAsHTML } from "@/lib/generatePlanPDF";

const FOOD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663422138565/DHaZUEWUxgJfyccs8zR34y/healthy-food-ccTZeyNJRPWkAjJvobEkJp.webp";
const NUTRITION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663422138565/DHaZUEWUxgJfyccs8zR34y/nutrition-infographic-7abEZHbUCpGeornDvy9LqK.webp";

const plans = [
  {
    name: "Plan Pérdida de Peso",
    subtitle: "Déficit calórico inteligente",
    kcal: "1,400–1,800 kcal",
    protein: "35%",
    carbs: "40%",
    fat: "25%",
    weeks: "8 semanas",
    level: "Todos los niveles",
    color: "from-orange-500 to-red-500",
    features: [
      "Plan de 56 días completo",
      "Lista de compras semanal",
      "Recetas bajas en calorías",
      "Control de porciones",
      "Snacks saludables incluidos",
    ],
    popular: true,
  },
  {
    name: "Plan Volumen Muscular",
    subtitle: "Superávit calórico controlado",
    kcal: "2,800–3,200 kcal",
    protein: "40%",
    carbs: "45%",
    fat: "15%",
    weeks: "12 semanas",
    level: "Intermedio–Avanzado",
    color: "from-blue-500 to-indigo-600",
    features: [
      "Plan de 84 días completo",
      "Timing de nutrientes",
      "Suplementación recomendada",
      "Comidas pre/post entreno",
      "Recetas altas en proteína",
    ],
    popular: false,
  },
  {
    name: "Plan Mantenimiento",
    subtitle: "Equilibrio y bienestar",
    kcal: "2,000–2,400 kcal",
    protein: "30%",
    carbs: "45%",
    fat: "25%",
    weeks: "Indefinido",
    level: "Todos los niveles",
    color: "from-green-500 to-emerald-600",
    features: [
      "Guía de alimentación flexible",
      "Regla 80/20 explicada",
      "Comer fuera de casa",
      "Recetas equilibradas",
      "Hábitos sostenibles",
    ],
    popular: false,
  },
  {
    name: "Plan Keto Adaptado",
    subtitle: "Cetosis para quemar grasa",
    kcal: "1,600–2,000 kcal",
    protein: "25%",
    carbs: "5%",
    fat: "70%",
    weeks: "6 semanas",
    level: "Avanzado",
    color: "from-purple-500 to-pink-600",
    features: [
      "Guía de adaptación cetogénica",
      "Lista de alimentos permitidos",
      "Recetas keto deliciosas",
      "Control de electrolitos",
      "Seguimiento de cetonas",
    ],
    popular: false,
  },
];

const recipes = [
  {
    name: "Bowl de Proteína con Quinoa",
    kcal: 420,
    protein: 38,
    time: "20 min",
    category: "Almuerzo",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop",
  },
  {
    name: "Tortilla de Claras con Espinacas",
    kcal: 280,
    protein: 32,
    time: "10 min",
    category: "Desayuno",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=300&h=200&fit=crop",
  },
  {
    name: "Salmón al Horno con Verduras",
    kcal: 380,
    protein: 42,
    time: "30 min",
    category: "Cena",
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=200&fit=crop",
  },
  {
    name: "Batido Verde Energizante",
    kcal: 180,
    protein: 15,
    time: "5 min",
    category: "Snack",
    img: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=300&h=200&fit=crop",
  },
  {
    name: "Pollo a la Plancha con Arroz Integral",
    kcal: 450,
    protein: 48,
    time: "25 min",
    category: "Almuerzo",
    img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=300&h=200&fit=crop",
  },
  {
    name: "Avena Proteica con Frutas",
    kcal: 320,
    protein: 22,
    time: "8 min",
    category: "Desayuno",
    img: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=300&h=200&fit=crop",
  },
];

export default function Dietas() {
  useScrollReveal();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Nutrición y Dietas</span>
              <h1 className="section-title text-gray-900 mt-2">
                Planes de Dieta<br />
                <span className="gradient-brand-text">Efectivos y Reales</span>
              </h1>
              <p className="text-gray-600 mt-4 leading-relaxed text-lg">
                Planes alimenticios diseñados por nutricionistas para pérdida de peso, ganancia muscular y mantenimiento. Sin hambre, sin restricciones extremas.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {["Sin hambre", "Resultados en 4 semanas", "Fácil de seguir", "Recetas deliciosas"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-white border border-orange-200 text-orange-600 text-sm font-semibold rounded-full">
                    ✓ {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => toast.success("¡Plan descargado!", { description: "Revisa tu carpeta de descargas." })}
                className="btn-gradient mt-8 px-8 py-4 rounded-xl font-bold flex items-center gap-3"
              >
                <Download className="w-5 h-5" />
                Descargar Plan Gratis
              </button>
            </div>
            <div className="reveal">
              <img
                src={FOOD_IMG}
                alt="Preparación de comidas saludables para dieta fitness: pollo, quinoa, verduras y frutas"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14 reveal">
            <h2 className="section-title text-gray-900">
              Elige Tu Plan<br />
              <span className="gradient-brand-text">Alimenticio</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Cada plan está diseñado para un objetivo específico. Elige el que mejor se adapte a tus metas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                className={`reveal reveal-delay-${(i % 2) + 1} card-hover rounded-2xl overflow-hidden border ${plan.popular ? "border-orange-300 shadow-lg shadow-orange-100" : "border-gray-100 shadow-sm"} relative`}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4 z-10 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Más Popular
                  </div>
                )}
                <div className={`bg-gradient-to-r ${plan.color} p-6 text-white`}>
                  <h3 className="font-black text-xl" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {plan.name}
                  </h3>
                  <p className="text-white/80 text-sm mt-1">{plan.subtitle}</p>
                  <div className="flex gap-3 mt-4 flex-wrap">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">{plan.kcal}</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">{plan.weeks}</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">{plan.level}</span>
                  </div>
                  {/* Macro bars */}
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {[
                      { label: "Proteína", value: plan.protein },
                      { label: "Carbos", value: plan.carbs },
                      { label: "Grasas", value: plan.fat },
                    ].map((macro) => (
                      <div key={macro.label} className="text-center bg-white/10 rounded-lg p-2">
                        <p className="font-black text-lg">{macro.value}</p>
                        <p className="text-white/70 text-xs">{macro.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <ul className="space-y-2.5 mb-5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
              <button
                onClick={() => {
                  downloadPlanAsHTML({
                    name: plan.name,
                    subtitle: plan.subtitle,
                    kcal: plan.kcal,
                    protein: plan.protein,
                    carbs: plan.carbs,
                    fat: plan.fat,
                    weeks: plan.weeks,
                    level: plan.level,
                    features: plan.features,
                  });
                  toast.success(`¡${plan.name} descargado!`, { description: "Abre el archivo en tu navegador." });
                }}
                className="btn-gradient w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Descargar Plan Gratis
              </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition infographic */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <img
                src={NUTRITION_IMG}
                alt="Guía visual de macronutrientes: proteínas, carbohidratos y grasas para dieta fitness"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
            <div className="reveal">
              <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Educación Nutricional</span>
              <h2 className="section-title text-gray-900 mt-2">
                Entiende los<br />
                <span className="gradient-brand-text">Macronutrientes</span>
              </h2>
              <p className="text-gray-500 mt-4 leading-relaxed">
                La clave de cualquier dieta exitosa es entender qué comes y por qué. Los macronutrientes son los pilares de tu alimentación.
              </p>
              <div className="space-y-4 mt-6">
                {[
                  { name: "Proteínas", desc: "Construyen y reparan músculo. Fuentes: pollo, huevos, legumbres.", color: "bg-orange-500", pct: "35%" },
                  { name: "Carbohidratos", desc: "Energía para entrenar y funcionar. Fuentes: avena, arroz integral, frutas.", color: "bg-green-500", pct: "45%" },
                  { name: "Grasas Saludables", desc: "Hormonas y absorción de vitaminas. Fuentes: aguacate, nueces, aceite de oliva.", color: "bg-blue-500", pct: "20%" },
                ].map((macro) => (
                  <div key={macro.name} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                    <div className={`w-3 h-3 ${macro.color} rounded-full mt-1.5 shrink-0`} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-gray-900 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          {macro.name}
                        </span>
                        <span className="text-gray-500 text-xs">{macro.pct}</span>
                      </div>
                      <p className="text-gray-500 text-xs">{macro.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recipes */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14 reveal">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Recetas Saludables</span>
            <h2 className="section-title text-gray-900 mt-2">
              Recetas Deliciosas y<br />
              <span className="gradient-brand-text">Nutritivas</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe, i) => (
              <div
                key={recipe.name}
                className={`reveal reveal-delay-${(i % 3) + 1} card-hover bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm`}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={recipe.img}
                    alt={`Receta saludable: ${recipe.name} - dieta fitness`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    {recipe.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-base mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {recipe.name}
                  </h3>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-orange-400" />
                      {recipe.kcal} kcal
                    </span>
                    <span className="flex items-center gap-1">
                      <Apple className="w-3.5 h-3.5 text-green-400" />
                      {recipe.protein}g proteína
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-400" />
                      {recipe.time}
                    </span>
                  </div>
                  <Link href={`/dietas/${recipe.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}>
                    <button className="w-full mt-4 py-2 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold hover:border-orange-400 hover:text-orange-500 transition-colors">
                      Ver Receta Completa
                    </button>
                  </Link>
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
            Empieza Tu Plan de Dieta Hoy
          </h2>
          <p className="text-white/85 mb-8 max-w-lg mx-auto">
            Descarga tu plan personalizado y comienza tu transformación esta misma semana.
          </p>
          <Link href="/contacto">
            <button className="px-10 py-4 bg-white text-orange-600 font-black rounded-xl hover:bg-orange-50 transition-colors shadow-lg">
              Obtener Mi Plan Gratis
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
