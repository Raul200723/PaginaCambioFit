/*
 * CambioFit Recetas — Recetas Saludables Gratis
 */
import { useState, useMemo } from "react";
import { Search, Clock, Users, Flame } from "lucide-react";

const RECETAS = [
  {
    id: 1,
    title: "Ensalada de Proteína con Pollo y Quinoa",
    time: "15 min",
    servings: 2,
    calories: 380,
    ingredients: [
      "200g pechuga de pollo cocida",
      "1 taza quinoa cocida",
      "2 tazas espinaca fresca",
      "1 tomate mediano",
      "1/2 aguacate",
      "2 cucharadas aceite de oliva",
      "1 limón",
      "Sal y pimienta"
    ],
    instructions: [
      "Cocina la quinoa según las instrucciones del paquete",
      "Corta el pollo en cubos pequeños",
      "Prepara la espinaca y pica el tomate",
      "En un tazón grande, mezcla quinoa, pollo y verduras",
      "Aliña con aceite de oliva, jugo de limón, sal y pimienta",
      "Sirve inmediatamente"
    ],
    macros: "Proteína: 35g | Carbos: 42g | Grasas: 12g"
  },
  {
    id: 2,
    title: "Batido de Proteína con Plátano y Mantequilla de Maní",
    time: "5 min",
    servings: 1,
    calories: 320,
    ingredients: [
      "1 scoop proteína en polvo",
      "1 plátano mediano",
      "2 cucharadas mantequilla de maní natural",
      "1 taza leche desnatada",
      "1/2 taza hielo",
      "1 cucharadita miel"
    ],
    instructions: [
      "Añade la leche al vaso de la licuadora",
      "Agrega el scoop de proteína",
      "Pela y corta el plátano en trozos",
      "Añade plátano, mantequilla de maní e hielo",
      "Licúa hasta obtener una consistencia suave",
      "Sirve inmediatamente"
    ],
    macros: "Proteína: 28g | Carbos: 35g | Grasas: 8g"
  },
  {
    id: 3,
    title: "Pechuga de Pollo al Horno con Verduras",
    time: "30 min",
    servings: 3,
    calories: 250,
    ingredients: [
      "3 pechugas de pollo (200g c/u)",
      "2 tazas brócoli",
      "2 zanahorias medianas",
      "2 cucharadas aceite de oliva",
      "3 dientes ajo picado",
      "Limón, sal y pimienta",
      "Hierbas secas (orégano, tomillo)"
    ],
    instructions: [
      "Precalienta el horno a 200°C",
      "Coloca las pechugas en una bandeja",
      "Corta las verduras en trozos medianos",
      "Distribuye verduras alrededor del pollo",
      "Rocía con aceite de oliva y sazona",
      "Hornea por 25-30 minutos hasta que el pollo esté cocido"
    ],
    macros: "Proteína: 45g | Carbos: 18g | Grasas: 8g"
  },
  {
    id: 4,
    title: "Omelette de Claras de Huevo con Espinaca",
    time: "10 min",
    servings: 1,
    calories: 150,
    ingredients: [
      "4 claras de huevo",
      "1 taza espinaca fresca",
      "1/4 cebolla picada",
      "1 tomate pequeño picado",
      "1 cucharada aceite de oliva",
      "Sal y pimienta",
      "Queso bajo en grasa (opcional)"
    ],
    instructions: [
      "Bate las claras de huevo en un tazón",
      "Calienta aceite en una sartén antiadherente",
      "Saltea cebolla y espinaca",
      "Vierte las claras batidas",
      "Cuando empiece a cuajar, añade tomate",
      "Dobla por la mitad y sirve"
    ],
    macros: "Proteína: 28g | Carbos: 8g | Grasas: 5g"
  },
  {
    id: 5,
    title: "Smoothie Bowl de Frutas y Granola",
    time: "8 min",
    servings: 1,
    calories: 290,
    ingredients: [
      "1 taza yogur griego bajo en grasa",
      "1 taza frutas congeladas (arándanos, fresas)",
      "1/2 plátano",
      "1/4 taza granola",
      "1 cucharada miel",
      "1 cucharada almendras picadas",
      "Coco rallado (opcional)"
    ],
    instructions: [
      "Licúa yogur con frutas congeladas y plátano",
      "Vierte la mezcla en un tazón",
      "Decora con granola, almendras y miel",
      "Añade coco rallado si deseas",
      "Sirve inmediatamente con cuchara"
    ],
    macros: "Proteína: 20g | Carbos: 45g | Grasas: 6g"
  },
  {
    id: 6,
    title: "Salmón a la Parrilla con Limón y Hierbas",
    time: "20 min",
    servings: 2,
    calories: 320,
    ingredients: [
      "2 filetes salmón (180g c/u)",
      "2 limones",
      "3 cucharadas aceite de oliva",
      "4 dientes ajo picado",
      "Hierbas frescas (eneldo, perejil)",
      "Sal y pimienta",
      "Espárragos frescos"
    ],
    instructions: [
      "Precalienta la parrilla a temperatura media-alta",
      "Sazona el salmón con sal, pimienta y ajo",
      "Rocía con aceite de oliva",
      "Coloca en la parrilla 4-5 minutos por lado",
      "Exprime limón fresco sobre el salmón",
      "Sirve con espárragos a la parrilla"
    ],
    macros: "Proteína: 40g | Carbos: 5g | Grasas: 18g"
  }
];

export default function Recetas() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecetas = useMemo(() => {
    return RECETAS.filter(receta =>
      receta.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      receta.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="pt-24 pb-12 px-4 md:px-8 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-6xl mx-auto text-white">
          <h1 className="text-5xl md:text-6xl font-black mb-4">Recetas Saludables Gratis</h1>
          <p className="text-xl opacity-90">
            Recetas deliciosas y nutritivas para tu transformación física
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-12 px-4 md:px-8 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar recetas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>
      </section>

      {/* Recetas Grid */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {filteredRecetas.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-slate-600">No se encontraron recetas.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredRecetas.map(receta => (
                <div key={receta.id} className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-orange-200 to-orange-300"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{receta.title}</h3>
                    
                    <div className="flex gap-4 mb-4 text-sm text-slate-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {receta.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {receta.servings} porciones
                      </div>
                      <div className="flex items-center gap-1">
                        <Flame className="w-4 h-4" />
                        {receta.calories} cal
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-900 mb-2">Ingredientes:</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        {receta.ingredients.slice(0, 4).map((ing, idx) => (
                          <li key={idx}>• {ing}</li>
                        ))}
                        {receta.ingredients.length > 4 && (
                          <li className="text-slate-500">+ {receta.ingredients.length - 4} más...</li>
                        )}
                      </ul>
                    </div>

                    <div className="mb-4 p-3 bg-slate-50 rounded-lg text-sm">
                      <p className="text-slate-700"><strong>Macros:</strong> {receta.macros}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Pasos:</h4>
                      <ol className="text-sm text-slate-600 space-y-1">
                        {receta.instructions.slice(0, 3).map((step, idx) => (
                          <li key={idx}>{idx + 1}. {step}</li>
                        ))}
                        {receta.instructions.length > 3 && (
                          <li className="text-slate-500">+ {receta.instructions.length - 3} pasos más...</li>
                        )}
                      </ol>
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
