/*
 * CambioFit Blog — Artículos Originales sobre Fitness y Nutrición
 */
import { useState, useMemo } from "react";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const ARTICLES = [
  {
    id: 1,
    slug: "deficit-calorico-sostenible",
    title: "Cómo Crear un Déficit Calórico Sostenible para Perder Grasa",
    category: "Nutrición",
    date: "15 Mar 2026",
    author: "CambioFit",
    excerpt: "Aprende los principios científicos detrás de la pérdida de peso y cómo crear un déficit calórico que sea sostenible a largo plazo.",
    content: `La pérdida de peso es uno de los objetivos más comunes en fitness, pero también uno de los más malentendidos. Muchas personas buscan soluciones rápidas y extremas que no solo son insostenibles, sino que también pueden ser peligrosas para la salud. La verdad es que la pérdida de grasa sostenible se basa en un principio fundamental: crear un déficit calórico.

## ¿Qué es un Déficit Calórico?

Un déficit calórico ocurre cuando consumes menos calorías de las que tu cuerpo gasta. Tu cuerpo necesita una cantidad específica de energía para mantener todas sus funciones vitales, desde respirar hasta hacer ejercicio. Esta cantidad se conoce como gasto calórico total (TDEE, por sus siglas en inglés).

Cuando consumes menos calorías de las que gastas, tu cuerpo debe recurrir a sus reservas de energía almacenadas, principalmente en forma de grasa corporal. Este es el mecanismo fundamental detrás de cualquier pérdida de peso.

## Calculando tu TDEE

Para crear un déficit calórico efectivo, primero necesitas conocer tu TDEE. Este se calcula considerando:

1. **Metabolismo Basal (BMR)**: Las calorías que quemas en reposo
2. **Nivel de Actividad**: El ejercicio y movimiento diario

Existen varias fórmulas para calcularlo, como la ecuación de Mifflin-St Jeor. Una vez que conoces tu TDEE, puedes crear un déficit restando entre 300-500 calorías diarias, lo que resulta en una pérdida de aproximadamente 0.5-1 kg por semana.

## El Tamaño Importa: Déficit Moderado vs Agresivo

Un error común es crear un déficit demasiado grande. Aunque perderías peso más rápidamente, esto conlleva problemas:

- Pérdida de masa muscular
- Fatiga extrema
- Ralentización del metabolismo
- Mayor probabilidad de abandonar el plan
- Posibles deficiencias nutricionales

Un déficit moderado de 300-500 calorías es ideal porque:
- Preserva la masa muscular
- Mantiene los niveles de energía
- Es sostenible a largo plazo
- Produce resultados consistentes

## Estrategias Prácticas para Crear tu Déficit

**1. Aumenta tu Gasto Calórico**
El ejercicio, especialmente el entrenamiento de fuerza, aumenta tu TDEE. No solo quemas calorías durante el ejercicio, sino que también aumentas tu metabolismo basal.

**2. Reduce tu Ingesta de Forma Inteligente**
No se trata de comer menos de todo. Enfócate en:
- Aumentar proteína (más saciedad)
- Reducir calorías líquidas (bebidas azucaradas)
- Mantener volumen de comida (alimentos bajos en calorías pero voluminosos)

**3. Monitorea tu Progreso**
Pesa regularmente (idealmente semanalmente) y ajusta según sea necesario. Si no pierdes peso después de 2-3 semanas, reduce 100-200 calorías más.

## Errores Comunes a Evitar

- **Déficit demasiado agresivo**: Insostenible y contraproducente
- **No comer suficiente proteína**: Aumenta la pérdida muscular
- **Ignorar la composición corporal**: La báscula no lo dice todo
- **Falta de consistencia**: Un día perfecto no compensa una semana irregular
- **No ajustar según progreso**: Tu cuerpo se adapta, debes hacerlo también

## Conclusión

La pérdida de grasa sostenible no es complicada, pero requiere consistencia y paciencia. Un déficit calórico moderado, combinado con ejercicio de fuerza y suficiente proteína, es la fórmula probada para lograr cambios reales y duraderos. Recuerda que esto es un maratón, no una carrera de velocidad.`
  },
  {
    id: 2,
    slug: "entrenamiento-fuerza-principiantes",
    title: "Entrenamiento de Fuerza para Principiantes: Guía Completa",
    category: "Entrenamiento",
    date: "12 Mar 2026",
    author: "CambioFit",
    excerpt: "Descubre cómo comenzar con el entrenamiento de fuerza, qué ejercicios hacer y cómo progresar de forma segura.",
    content: `El entrenamiento de fuerza es uno de los pilares más importantes para lograr una transformación física real. Sin embargo, muchos principiantes se sienten intimidados o no saben por dónde empezar. Esta guía te llevará a través de todo lo que necesitas saber para comenzar tu viaje en el entrenamiento de fuerza de forma segura y efectiva.

## ¿Por Qué es Importante el Entrenamiento de Fuerza?

El entrenamiento de fuerza no solo te hace más fuerte. También:
- Aumenta la masa muscular
- Acelera el metabolismo
- Mejora la densidad ósea
- Reduce el riesgo de lesiones
- Mejora la postura y la salud articular
- Aumenta la confianza y autoestima

## Principios Fundamentales

**1. Progresión Gradual**
No comiences con pesos muy pesados. Es mejor comenzar ligero y aumentar gradualmente. Esto permite que tus tendones y ligamentos se adapten.

**2. Forma Correcta**
La técnica es más importante que el peso. Una repetición con forma correcta es más efectiva y segura que varias con forma pobre.

**3. Consistencia**
El entrenamiento de fuerza requiere consistencia. 3-4 sesiones por semana durante meses producirá resultados mucho mejores que entrenamientos intensos e irregulares.

## Ejercicios Básicos para Principiantes

**Sentadillas**
- Trabaja: Cuádriceps, glúteos, espalda baja
- Cómo: Pies al ancho de hombros, baja como si te sentaras en una silla, mantén el pecho arriba

**Press de Banca**
- Trabaja: Pecho, hombros, tríceps
- Cómo: Acuéstate, baja la barra a la altura del pecho, empuja hacia arriba

**Remo**
- Trabaja: Espalda, bíceps
- Cómo: Inclínate, tira la barra hacia tu abdomen, controla la bajada

**Press de Hombro**
- Trabaja: Hombros, tríceps
- Cómo: De pie, levanta la barra sobre tu cabeza, baja controladamente

**Peso Muerto**
- Trabaja: Espalda baja, glúteos, isquiotibiales
- Cómo: Pies al ancho de hombros, levanta manteniendo la espalda recta

## Programa de Entrenamiento para Principiantes

**Día 1: Pecho y Tríceps**
- Sentadillas: 3 series x 8-10 repeticiones
- Press de Banca: 3 series x 8-10 repeticiones
- Flexiones: 3 series x 8-12 repeticiones

**Día 2: Espalda y Bíceps**
- Remo: 3 series x 8-10 repeticiones
- Peso Muerto: 3 series x 5-8 repeticiones
- Curl de Bíceps: 3 series x 10-12 repeticiones

**Día 3: Piernas**
- Sentadillas: 4 series x 8-10 repeticiones
- Prensa de Piernas: 3 series x 10-12 repeticiones
- Curl de Isquiotibiales: 3 series x 10-12 repeticiones

## Cómo Progresar

La progresión es clave para continuar viendo resultados:
- Aumenta el peso cuando puedas completar todas las series y repeticiones con buena forma
- Aumenta gradualmente (5-10% es ideal)
- Mantén un registro de tus entrenamientos
- Cada 4-6 semanas, cambia los ejercicios ligeramente para evitar mesetas

## Errores Comunes a Evitar

- Comenzar con pesos demasiado pesados
- Sacrificar forma por peso
- No calentar adecuadamente
- Entrenar sin plan
- No descansar lo suficiente
- Cambiar de programa cada semana

## Nutrición y Recuperación

El entrenamiento es solo la mitad. Para ganar músculo necesitas:
- Suficiente proteína (1.6-2.2g por kg de peso corporal)
- Calorías adecuadas (ligero superávit para ganar músculo)
- 7-9 horas de sueño
- Descanso entre sesiones (48 horas para el mismo grupo muscular)

## Conclusión

El entrenamiento de fuerza es accesible para todos, independientemente de tu nivel actual. Comienza con ejercicios básicos, mantén la forma correcta, sé consistente y progresa gradualmente. En 3-6 meses verás cambios reales en tu fuerza, composición corporal y confianza.`
  },
  {
    id: 3,
    slug: "proteina-macronutriente",
    title: "Proteína: Todo lo que Necesitas Saber sobre este Macronutriente",
    category: "Nutrición",
    date: "10 Mar 2026",
    author: "CambioFit",
    excerpt: "Entiende por qué la proteína es crucial para la composición corporal y cómo calcular tu ingesta diaria.",
    content: `La proteína es uno de los tres macronutrientes esenciales, junto con carbohidratos y grasas. Si tu objetivo es perder grasa, ganar músculo o simplemente mejorar tu salud, entender la proteína es fundamental. Esta guía te explicará todo lo que necesitas saber.

## ¿Qué es la Proteína?

La proteína es una molécula compuesta por aminoácidos. Tu cuerpo usa estos aminoácidos para construir y reparar tejidos, incluyendo músculo, piel, cabello y enzimas. Existen 20 aminoácidos, de los cuales 9 son esenciales (tu cuerpo no puede producirlos, debes obtenerlos de la comida).

## ¿Por Qué es Importante la Proteína?

**1. Construcción y Reparación Muscular**
Cuando entrenas, creas micro-desgarros en el músculo. La proteína es necesaria para reparar estos desgarros y construir músculo más fuerte.

**2. Saciedad**
La proteína es el macronutriente más saciante. Te mantiene satisfecho por más tiempo, lo que facilita crear un déficit calórico.

**3. Termogénesis**
Tu cuerpo quema más calorías digiriendo proteína que otros macronutrientes (aproximadamente 20-30% de las calorías de la proteína se gastan en su digestión).

**4. Preservación Muscular**
Durante una pérdida de peso, suficiente proteína ayuda a preservar la masa muscular.

## ¿Cuánta Proteína Necesitas?

La recomendación general es:
- **Sedentario**: 0.8g por kg de peso corporal
- **Entrenamiento de fuerza**: 1.6-2.2g por kg de peso corporal
- **Pérdida de grasa**: 2-2.2g por kg (más alto para preservar músculo)

Ejemplo: Si pesas 70kg y entrenas fuerza, necesitas aproximadamente 112-154g de proteína diaria.

## Fuentes de Proteína

**Proteínas Animales (Completas)**
- Pollo: 31g por 100g
- Pavo: 29g por 100g
- Pescado: 20-25g por 100g
- Huevos: 6g por huevo
- Leche: 3.2g por 100ml
- Yogur griego: 10g por 100g
- Carne magra: 25-30g por 100g

**Proteínas Vegetales (Generalmente Incompletas)**
- Lentejas: 9g por 100g cocidas
- Garbanzos: 8g por 100g cocidos
- Tofu: 8g por 100g
- Tempeh: 19g por 100g
- Nueces: 5-9g por 100g
- Quinoa: 8g por 100g cocida

## Distribución de Proteína a lo Largo del Día

Aunque la cantidad total es lo más importante, distribuir la proteína ayuda:
- Desayuno: 25-35g
- Almuerzo: 25-35g
- Cena: 25-35g
- Snacks: 10-20g

Esto mantiene un aporte constante de aminoácidos y optimiza la síntesis proteica.

## Proteína en Polvo: ¿Es Necesaria?

No es esencial, pero es conveniente. Las opciones comunes son:
- **Whey Protein**: Rápida absorción, completa, económica
- **Caseína**: Absorción lenta, buena para antes de dormir
- **Proteína Vegetal**: Buena opción para veganos

Recuerda: La proteína en polvo es un suplemento, no un reemplazo para comida real.

## Errores Comunes

- **Exceso de proteína**: Más no siempre es mejor. El exceso se convierte en calorías
- **Ignorar otras fuentes de nutrientes**: Enfocarse solo en proteína
- **Proteína de baja calidad**: Asegúrate de que sea de buena fuente
- **No beber suficiente agua**: La proteína requiere más agua para su digestión

## Conclusión

La proteína es crucial para cualquier objetivo de fitness. Consume entre 1.6-2.2g por kg de peso corporal, distribuida a lo largo del día, desde fuentes variadas. Combinada con entrenamiento de fuerza y un déficit calórico, la proteína es una de las herramientas más poderosas para transformar tu cuerpo.`
  },
  {
    id: 4,
    slug: "cardio-vs-fuerza",
    title: "Cardio vs Entrenamiento de Fuerza: ¿Cuál es Mejor?",
    category: "Entrenamiento",
    date: "8 Mar 2026",
    author: "CambioFit",
    excerpt: "Compara el cardio y el entrenamiento de fuerza para entender cuál es mejor para tus objetivos.",
    content: `Una de las preguntas más comunes en fitness es: "¿Debo hacer cardio o entrenamiento de fuerza?" La respuesta es que ambos tienen beneficios, pero para la mayoría de objetivos de transformación física, el entrenamiento de fuerza debería ser la prioridad. Veamos por qué.

## Beneficios del Cardio

El cardio (ejercicio cardiovascular) incluye actividades como correr, ciclismo, natación y máquinas de cardio.

**Ventajas:**
- Mejora la salud cardiovascular
- Quema calorías durante el ejercicio
- Mejora la resistencia
- Reduce el estrés
- Accesible y requiere poco equipo

**Desventajas:**
- No construye masa muscular
- Puede causar pérdida muscular si se hace en exceso
- Quema calorías solo durante el ejercicio
- Puede ser aburrido
- Mayor riesgo de lesiones por uso repetitivo

## Beneficios del Entrenamiento de Fuerza

El entrenamiento de fuerza incluye levantamiento de pesas, ejercicios con peso corporal y máquinas de resistencia.

**Ventajas:**
- Construye y preserva masa muscular
- Aumenta el metabolismo basal
- Quema calorías durante y después del ejercicio (EPOC)
- Mejora la composición corporal
- Fortalece huesos y articulaciones
- Mejora la postura y previene lesiones
- Resultados más visibles

**Desventajas:**
- Requiere equipo (aunque puede hacerse en casa)
- Curva de aprendizaje más pronunciada
- Mayor riesgo de lesión si la forma es pobre

## Comparación Directa

**Para Pérdida de Grasa:**
El entrenamiento de fuerza es superior porque:
- Preserva la masa muscular
- Aumenta el metabolismo basal
- Crea un efecto "afterburn" (EPOC)
- Produce cambios más visibles en la composición corporal

**Para Ganancia Muscular:**
El entrenamiento de fuerza es esencial. El cardio no construye músculo.

**Para Salud Cardiovascular:**
Ambos son beneficiosos. El cardio es más específico, pero el entrenamiento de fuerza también mejora la salud del corazón.

**Para Resistencia:**
El cardio es superior.

## La Solución Óptima: Combinación

Para la mayoría de personas, la mejor estrategia es:

**Enfoque Principal: Entrenamiento de Fuerza**
- 3-4 sesiones por semana
- 45-60 minutos por sesión
- Enfocado en ejercicios compuestos

**Complemento: Cardio Moderado**
- 2-3 sesiones de 20-30 minutos
- Intensidad moderada (puedes hablar pero no cantar)
- O HIIT 1-2 veces por semana (15-20 minutos)

## Errores Comunes

- **Demasiado cardio**: Muchas personas hacen exceso de cardio y pierden músculo
- **Sin variedad**: Hacer siempre lo mismo causa mesetas
- **Ignorar la nutrición**: El ejercicio sin nutrición adecuada no produce resultados
- **Intensidad inconsistente**: Necesitas variar entre intensidad alta y moderada

## Conclusión

Si tu objetivo es transformar tu cuerpo (perder grasa y ganar músculo), el entrenamiento de fuerza debe ser tu prioridad. El cardio es un complemento valioso para la salud cardiovascular y quemar calorías adicionales, pero no debe reemplazar el entrenamiento de fuerza. La combinación de ambos, con énfasis en la fuerza, es la fórmula ganadora.`
  },
  {
    id: 5,
    slug: "carbohidratos-mito",
    title: "Carbohidratos: Desmintiendo el Mito de que Son Malos",
    category: "Nutrición",
    date: "5 Mar 2026",
    author: "CambioFit",
    excerpt: "Aprende por qué los carbohidratos no son el enemigo y cómo usarlos estratégicamente.",
    content: `Los carbohidratos tienen mala reputación. Muchas personas creen que son la razón por la que ganan peso y que deben evitarlos para perder grasa. Esto es un mito. Los carbohidratos son un macronutriente esencial que, cuando se usan correctamente, son tus aliados en la transformación física.

## ¿Qué Son los Carbohidratos?

Los carbohidratos son moléculas de azúcar que tu cuerpo descompone en glucosa, que luego usa como energía. Existen tres tipos:

**1. Azúcares Simples**
- Glucosa, fructosa, sacarosa
- Se absorben rápidamente
- Ejemplos: frutas, miel, azúcar refinado

**2. Carbohidratos Complejos**
- Almidón, fibra
- Se absorben más lentamente
- Ejemplos: arroz integral, avena, papas

**3. Fibra**
- Tipo especial de carbohidrato
- No se digiere completamente
- Ejemplos: verduras, frutas, legumbres

## ¿Por Qué los Carbohidratos Son Importantes?

**1. Energía**
Los carbohidratos son la fuente de energía preferida de tu cuerpo, especialmente para el cerebro y durante el ejercicio.

**2. Rendimiento en Entrenamientos**
Sin suficientes carbohidratos, tu rendimiento en el entrenamiento disminuye significativamente.

**3. Recuperación Muscular**
Los carbohidratos ayudan a reponer las reservas de glucógeno muscular después del ejercicio.

**4. Función Cerebral**
Tu cerebro prefiere glucosa. Los carbohidratos adecuados mejoran la concentración y el estado de ánimo.

## El Mito de los Carbohidratos y el Peso

La razón por la que los carbohidratos tienen mala reputación es que muchas personas consumen carbohidratos refinados en exceso:
- Pan blanco
- Pasteles y galletas
- Bebidas azucaradas
- Cereales azucarados

Estos carbohidratos:
- Son bajos en nutrientes
- No sacian mucho
- Se absorben rápidamente, causando picos de azúcar
- Son fáciles de comer en exceso

Pero esto no significa que todos los carbohidratos sean malos.

## Carbohidratos Buenos vs Malos

**Carbohidratos Buenos (Complejos, Integrales)**
- Arroz integral
- Avena
- Papas
- Batata
- Pan integral
- Legumbres
- Verduras
- Frutas

Estos tienen:
- Más fibra
- Más nutrientes
- Mayor saciedad
- Absorción más lenta

**Carbohidratos Malos (Refinados, Procesados)**
- Pan blanco
- Pasta blanca
- Azúcar
- Bebidas azucaradas
- Cereales azucarados
- Pasteles y galletas

## Cuántos Carbohidratos Necesitas

Depende de tu actividad:
- **Sedentario**: 2-3g por kg de peso corporal
- **Entrenamiento moderado**: 3-5g por kg
- **Entrenamiento intenso**: 5-7g por kg

Ejemplo: Si pesas 70kg y entrenas 4 veces por semana, necesitas aproximadamente 210-350g de carbohidratos diarios.

## Estrategia: Timing de Carbohidratos

**Pre-Entrenamiento (1-2 horas antes)**
- Carbohidrato complejo + proteína
- Ejemplo: Avena con plátano

**Post-Entrenamiento (0-2 horas después)**
- Carbohidrato + proteína
- Ejemplo: Arroz con pollo

**Resto del Día**
- Distribuye carbohidratos según tus necesidades totales

## Conclusión

Los carbohidratos no son el enemigo. El problema es elegir los tipos incorrectos y comer en exceso. Enfócate en carbohidratos complejos e integrales, consume la cantidad adecuada para tu actividad, y verás que puedes perder grasa mientras disfrutas de energía y rendimiento óptimos en tus entrenamientos.`
  },
  {
    id: 6,
    slug: "sueno-recuperacion",
    title: "La Importancia del Sueño en la Transformación Física",
    category: "Estilo de Vida",
    date: "2 Mar 2026",
    author: "CambioFit",
    excerpt: "Descubre cómo el sueño afecta tu composición corporal y cómo optimizarlo.",
    content: `Muchas personas se enfocan en dieta y ejercicio, pero ignoran uno de los factores más importantes para la transformación física: el sueño. La falta de sueño puede sabotear todos tus esfuerzos. Veamos por qué el sueño es tan crucial.

## Cómo el Sueño Afecta tu Composición Corporal

**1. Síntesis Proteica**
La mayor parte de la síntesis proteica (construcción muscular) ocurre durante el sueño. Sin sueño suficiente, no construyes músculo eficientemente.

**2. Regulación Hormonal**
El sueño regula dos hormonas cruciales:
- **Grelina**: Hormona del hambre. Aumenta con falta de sueño
- **Leptina**: Hormona de saciedad. Disminuye con falta de sueño

Resultado: Duermes poco, tienes más hambre.

**3. Cortisol**
La falta de sueño aumenta el cortisol (hormona del estrés), que:
- Aumenta el apetito
- Promueve el almacenamiento de grasa
- Reduce la síntesis proteica

**4. Metabolismo**
La falta de sueño ralentiza tu metabolismo, haciendo más difícil perder grasa.

**5. Rendimiento en Entrenamientos**
Sin sueño suficiente:
- Menor fuerza
- Menor resistencia
- Mayor riesgo de lesión
- Recuperación más lenta

## Cuánto Sueño Necesitas

La recomendación general es **7-9 horas por noche**. Sin embargo:
- Algunos necesitan 6 horas
- Otros necesitan 10 horas
- La consistencia es más importante que la cantidad exacta

## Cómo Optimizar tu Sueño

**1. Mantén una Rutina Consistente**
- Duerme a la misma hora cada noche
- Despiértate a la misma hora cada mañana
- Esto regula tu reloj biológico

**2. Crea un Ambiente Oscuro y Fresco**
- Temperatura: 16-19°C es ideal
- Oscuridad: Usa cortinas o antifaz
- Silencio: Usa tapones si es necesario

**3. Evita Pantallas 1-2 Horas Antes de Dormir**
- La luz azul de pantallas suprime la melatonina
- Lee un libro o medita en su lugar

**4. Evita Cafeína Después de las 2 PM**
- La cafeína tiene una vida media de 5-6 horas
- Después de las 2 PM, puede afectar tu sueño

**5. Evita Comidas Pesadas Antes de Dormir**
- Espera 2-3 horas después de comer
- Una comida ligera está bien

**6. Ejercita Regularmente**
- El ejercicio mejora la calidad del sueño
- Pero no ejercites 3 horas antes de dormir

**7. Maneja el Estrés**
- Meditación
- Respiración profunda
- Yoga
- Journaling

## Suplementos para el Sueño

Si tienes dificultades, considera:
- **Magnesio**: Ayuda a la relajación
- **Melatonina**: Regula el ciclo de sueño
- **Valeriana**: Hierba tradicional para el sueño
- **Glicina**: Aminoácido que mejora la calidad del sueño

Consulta con un profesional antes de usar suplementos.

## El Ciclo Completo: Entrenamiento → Sueño → Recuperación

1. **Entrenamiento**: Creas estímulo para el cambio
2. **Nutrición**: Proporcionas los bloques de construcción
3. **Sueño**: Tu cuerpo se recupera y construye
4. **Repetición**: Consistencia produce resultados

Sin sueño adecuado, este ciclo se rompe.

## Conclusión

El sueño no es un lujo, es una necesidad para la transformación física. 7-9 horas consistentes de sueño de calidad son tan importantes como tu dieta y entrenamiento. Optimiza tu ambiente de sueño, mantén una rutina consistente, y verás mejoras dramáticas en tu rendimiento, recuperación y composición corporal.`
  },
  {
    id: 7,
    slug: "metabolismo-velocidad",
    title: "¿Puedes Acelerar tu Metabolismo? La Verdad Científica",
    category: "Nutrición",
    date: "28 Feb 2026",
    author: "CambioFit",
    excerpt: "Descubre qué determina tu metabolismo y qué puedes hacer realmente para acelerarlo.",
    content: `"Tengo un metabolismo lento" es una excusa común para no perder peso. Pero ¿es realmente verdad? ¿Puedes acelerar tu metabolismo? La respuesta es más complicada de lo que parece.

## ¿Qué es el Metabolismo?

Tu metabolismo es la cantidad de calorías que tu cuerpo quema para mantener todas sus funciones vitales. Se divide en:

**1. Metabolismo Basal (BMR)**
- Calorías quemadas en reposo
- Representa 60-75% de tu gasto calórico total
- Determinado principalmente por: edad, sexo, peso, composición corporal

**2. Termogénesis Adaptativa**
- Calorías quemadas durante la digestión (10-15%)
- Calorías quemadas por movimiento no ejercicio (NEAT)

**3. Gasto de Ejercicio**
- Calorías quemadas durante el ejercicio (15-30%)

## ¿Qué Determina tu Metabolismo?

**Factores que NO puedes cambiar:**
- Edad (disminuye ~2% por década después de 30)
- Sexo (hombres tienen metabolismo más rápido)
- Genética (influye 20-30%)

**Factores que SÍ puedes cambiar:**
- Composición corporal
- Nivel de actividad
- Dieta
- Sueño
- Estrés

## Cómo Acelerar tu Metabolismo (Realísticamente)

**1. Construye Masa Muscular**
La masa muscular es metabólicamente activa. Cada kg de músculo quema aproximadamente 6 calorías en reposo. El entrenamiento de fuerza es la mejor manera de construir músculo.

**2. Aumenta tu Actividad General (NEAT)**
- Camina más
- Usa escaleras
- Párate mientras trabajas
- Pequeños movimientos suman

**3. Come Suficiente Proteína**
La proteína tiene mayor termogénesis que otros macronutrientes. Quemas más calorías digiriéndola.

**4. Entrena con Intensidad**
El HIIT (entrenamiento de intervalos de alta intensidad) crea un efecto "afterburn" donde quemas calorías después del ejercicio.

**5. Duerme Suficiente**
La falta de sueño ralentiza el metabolismo y aumenta el cortisol.

**6. Maneja el Estrés**
El estrés crónico aumenta el cortisol, que ralentiza el metabolismo.

## El Mito de la Dieta Extrema

Muchas personas creen que si comen muy poco, su metabolismo se ralentiza dramáticamente. Esto es parcialmente verdad:

- Un déficit calórico moderado (300-500 calorías) es sostenible
- Un déficit extremo (1000+ calorías) puede ralentizar el metabolismo
- Pero incluso con déficit extremo, tu metabolismo no se detiene

La verdad: Es mejor un déficit moderado consistente que un déficit extremo insostenible.

## Cambios Realistas en el Metabolismo

Si implementas todas las estrategias anteriores:
- Puedes aumentar tu metabolismo 5-15%
- Esto equivale a 100-300 calorías adicionales por día
- Combinado con déficit calórico, produce resultados significativos

## Lo Que NO Acelera tu Metabolismo

- Comer pequeñas comidas frecuentes (el total es lo que importa)
- Suplementos milagro
- Bebidas especiales
- Ayuno intermitente (por sí solo)

## Conclusión

Tu metabolismo no es tan "lento" como crees. Aunque hay factores genéticos, puedes hacer cambios reales construyendo músculo, siendo más activo, comiendo suficiente proteína y durmiendo bien. Estos cambios, combinados con un déficit calórico moderado, producen resultados consistentes y sostenibles. El metabolismo es importante, pero el déficit calórico sigue siendo el factor más importante para perder grasa.`
  },
  {
    id: 8,
    slug: "agua-hidratacion",
    title: "Hidratación y Agua: ¿Cuánta Necesitas Realmente?",
    category: "Nutrición",
    date: "25 Feb 2026",
    author: "CambioFit",
    excerpt: "Descubre la importancia de la hidratación y cómo calcular tu ingesta de agua.",
    content: `La hidratación es uno de los aspectos más subestimados de la salud y el fitness. Muchas personas no beben suficiente agua, lo que afecta su rendimiento, recuperación y composición corporal. Veamos qué necesitas saber.

## ¿Por Qué es Importante el Agua?

El agua constituye aproximadamente 60% de tu peso corporal y es esencial para:

**1. Rendimiento en Entrenamientos**
- Incluso una deshidratación leve (2%) reduce el rendimiento 10-20%
- Afecta la fuerza, resistencia y coordinación

**2. Recuperación Muscular**
- El agua transporta nutrientes a los músculos
- Necesaria para la síntesis proteica

**3. Regulación de Temperatura**
- El agua ayuda a mantener la temperatura corporal
- Crucial durante el ejercicio

**4. Digestión**
- Necesaria para digerir alimentos
- Especialmente importante con alta ingesta de proteína

**5. Función Cognitiva**
- Deshidratación afecta concentración y estado de ánimo
- Incluso 1-2% de deshidratación afecta el rendimiento mental

**6. Pérdida de Grasa**
- El agua aumenta la saciedad
- Beber agua antes de comer reduce la ingesta calórica
- Necesaria para el metabolismo

## ¿Cuánta Agua Necesitas?

La recomendación común de "8 vasos al día" es demasiado simplista. Depende de:

**Fórmula Básica:**
- 30-35 ml por kg de peso corporal
- Ejemplo: 70kg × 0.035 = 2.45 litros diarios

**Ajustes según Actividad:**
- Sedentario: 2-2.5 litros
- Ejercicio moderado: 2.5-3.5 litros
- Ejercicio intenso: 3.5-4+ litros

**Otros Factores:**
- Clima (más calor = más agua)
- Altitud (más agua)
- Dieta (más proteína = más agua)

## Señales de Deshidratación

- Sed
- Orina oscura
- Fatiga
- Dolores de cabeza
- Piel seca
- Rendimiento reducido en entrenamientos

## Cómo Optimizar tu Hidratación

**1. Bebe Consistentemente a lo Largo del Día**
- No esperes a tener sed
- Bebe pequeñas cantidades regularmente

**2. Bebe Antes, Durante y Después del Ejercicio**
- Antes (2-3 horas): 400-600 ml
- Durante (cada 15-20 min): 150-250 ml
- Después: 150% del peso perdido en 4-6 horas

**3. Usa la Orina como Indicador**
- Orina clara/pálida: Bien hidratado
- Orina amarilla oscura: Deshidratado

**4. Bebe Agua, Principalmente**
- Agua es la mejor opción
- Bebidas con electrolitos para ejercicio intenso (>60 min)
- Evita bebidas azucaradas

**5. Considera tu Dieta**
- Frutas y verduras contienen agua
- Caldo, té, café también cuentan (aunque diuréticos)

## Sobrehidratación: ¿Es Posible?

Sí, aunque es raro. La sobrehidratación (hiponatremia) ocurre cuando bebes demasiada agua sin electrolitos. Síntomas:
- Náuseas
- Confusión
- Convulsiones (casos extremos)

Esto es raro en la población general, pero puede ocurrir en atletas de resistencia. Solución: Bebe según sed y usa bebidas con electrolitos en ejercicio prolongado.

## Bebidas Alternativas

**Té y Café**
- Cuentan para hidratación
- Tienen efectos diuréticos leves
- Beneficios adicionales de antioxidantes

**Bebidas Deportivas**
- Útiles para ejercicio >60 minutos
- Proporcionan carbohidratos y electrolitos
- Innecesarias para ejercicio corto

**Agua con Sabor**
- Buena opción si agua pura es aburrida
- Asegúrate que no tenga azúcar

## Conclusión

La hidratación adecuada es fundamental para el rendimiento, recuperación y pérdida de grasa. Calcula tu ingesta según tu peso y actividad, bebe consistentemente a lo largo del día, y usa la orina como indicador. No es complicado, pero es fácil de ignorar. Hazlo una prioridad y verás mejoras en tu rendimiento y resultados.`
  },
  {
    id: 9,
    slug: "grasas-dieta",
    title: "Grasas Dietéticas: Por Qué no Debes Evitarlas",
    category: "Nutrición",
    date: "22 Feb 2026",
    author: "CambioFit",
    excerpt: "Aprende por qué las grasas son esenciales y cómo incluirlas en tu dieta.",
    content: `Durante décadas, las grasas fueron demonizadas. Se creía que comer grasa hacía que ganaras grasa. Esto es un mito. Las grasas dietéticas son esenciales para la salud y la transformación física.

## ¿Qué Son las Grasas?

Las grasas son moléculas compuestas por ácidos grasos. Existen varios tipos:

**1. Grasas Saturadas**
- Sólidas a temperatura ambiente
- Ejemplos: mantequilla, carne roja, coco
- Anteriormente consideradas "malas", pero la ciencia moderna es más matizada

**2. Grasas Insaturadas**
- Líquidas a temperatura ambiente
- Monoinsaturadas: Aceite de oliva, aguacate, nueces
- Poliinsaturadas: Pescado, semillas

**3. Grasas Trans**
- Artificiales, creadas por hidrogenación
- Definitivamente malas
- Evita a toda costa

## ¿Por Qué las Grasas Son Importantes?

**1. Producción Hormonal**
- Las grasas son necesarias para producir testosterona, estrógeno y otras hormonas
- Sin suficiente grasa, tu producción hormonal disminuye

**2. Absorción de Vitaminas**
- Las vitaminas A, D, E y K son liposolubles
- Necesitan grasa para ser absorbidas

**3. Función Cerebral**
- Tu cerebro es 60% grasa
- Necesita ácidos grasos omega-3 para funcionar óptimamente

**4. Saciedad**
- Las grasas son muy saciantes
- Ayudan a controlar el apetito

**5. Salud Cardiovascular**
- Grasas insaturadas mejoran la salud del corazón
- Reducen inflamación

## Grasas Buenas vs Malas

**Grasas Buenas (Incluir)**
- Aceite de oliva virgen extra
- Aguacate
- Nueces y almendras
- Pescado graso (salmón, sardinas)
- Huevos
- Coco (con moderación)
- Semillas (lino, chía)

**Grasas a Limitar**
- Grasas saturadas en exceso (aunque no son "malas")
- Grasas trans (evitar completamente)
- Aceites vegetales refinados

## Cuánta Grasa Necesitas

**Recomendación General:**
- 0.5-1.5g por kg de peso corporal
- Aproximadamente 20-35% de calorías totales

Ejemplo: Si consumes 2000 calorías, 400-700 calorías de grasa = 44-78g

**Distribución Según Objetivo:**
- Pérdida de grasa: 0.5-1g por kg (más bajo)
- Ganancia muscular: 0.8-1.5g por kg (más alto)

## Cómo Incluir Grasas Saludables

**Desayuno**
- Huevos con aguacate
- Yogur griego con nueces
- Avena con almendras

**Almuerzo/Cena**
- Salmón con aceite de oliva
- Pollo con salsa de aguacate
- Ensalada con aceite de oliva

**Snacks**
- Puñado de nueces
- Aguacate
- Semillas

## El Mito de "Comer Grasa Hace que Ganes Grasa"

Esto es falso. Lo que importa es:
- **Calorías totales**: Un exceso calórico causa ganancia de grasa, independientemente de la fuente
- **Composición corporal**: Con déficit calórico y proteína suficiente, puedes perder grasa incluso comiendo grasas

De hecho, muchas personas pierden más grasa cuando incluyen grasas saludables porque:
- Mayor saciedad
- Mejor adherencia
- Mejor función hormonal

## Errores Comunes

- **Evitar todas las grasas**: Contraproducente
- **Comer demasiada grasa**: Recuerda que es calórica (9 calorías/gramo vs 4 para proteína y carbohidratos)
- **Confundir grasas buenas con malas**: Aprende la diferencia
- **Ignorar el balance general**: Las grasas son importantes, pero el déficit calórico sigue siendo crucial

## Conclusión

Las grasas dietéticas no son el enemigo. Son esenciales para la salud hormonal, función cerebral y absorción de nutrientes. Incluye grasas saludables (aceite de oliva, aguacate, pescado, nueces) en tu dieta, mantén la cantidad apropiada para tu objetivo, y verás que puedes perder grasa mientras disfrutas de comida deliciosa y mantienes una salud óptima.`
  },
  {
    id: 10,
    slug: "consistencia-disciplina",
    title: "Consistencia vs Perfección: La Verdadera Clave del Éxito",
    category: "Estilo de Vida",
    date: "20 Feb 2026",
    author: "CambioFit",
    excerpt: "Descubre por qué la consistencia es más importante que la perfección en tu transformación.",
    content: `Muchas personas fracasan en sus objetivos de fitness no porque no sepan qué hacer, sino porque buscan la perfección. Creen que si no pueden hacer todo perfectamente, no vale la pena intentarlo. Esto es un error fundamental. La consistencia, no la perfección, es la verdadera clave del éxito.

## El Mito de la Perfección

Imagina dos personas:

**Persona A:**
- Lunes: Entrena perfecto, come perfecto
- Martes: Tiene un mal día, come pizza, salta el entrenamiento
- Miércoles: Se siente culpable, abandona
- Resultado: Fracaso

**Persona B:**
- Lunes: Entrena bien, come bien
- Martes: Tiene un mal día, come pizza, pero entrena de todas formas
- Miércoles: Vuelve a su rutina normal
- Resultado: Éxito a largo plazo

La diferencia es que la Persona B entiende que la perfección no es el objetivo. La consistencia sí.

## Por Qué la Consistencia Gana

**1. Efecto Compuesto**
- Pequeñas acciones consistentes producen resultados enormes con el tiempo
- Un entrenamiento perfecto no te cambia
- 52 entrenamientos mediocres al año sí

**2. Construcción de Hábitos**
- Los hábitos se construyen con repetición
- Necesitas hacer algo 66 veces en promedio para que se vuelva automático
- La perfección no es sostenible, los hábitos sí

**3. Adaptación Fisiológica**
- Tu cuerpo se adapta a estímulos consistentes
- Necesita tiempo para cambiar
- Un mes perfecto no compite con 6 meses consistentes

**4. Psicología**
- El éxito genera motivación
- Pequeños éxitos consistentes son más motivadores que un gran esfuerzo seguido de abandono

## La Regla del 80/20

Para la mayoría de personas:
- 80% del resultado viene del 20% de las acciones
- Enfócate en lo fundamental:
  - Déficit calórico consistente
  - Entrenamiento de fuerza 3-4 veces por semana
  - Suficiente proteína
  - Sueño adecuado

No necesitas:
- Macros perfectos
- Suplementos costosos
- Entrenamientos complicados
- Comidas gourmet

## Cómo Ser Consistente

**1. Comienza Pequeño**
- No intentes cambiar todo de una vez
- Comienza con un hábito: entrenar 3 veces por semana
- Después añade otro: comer más proteína
- Gradualmente construye

**2. Crea Sistemas, No Objetivos**
- Objetivo: "Perder 10kg" (vago, no sostenible)
- Sistema: "Entrenar 3 veces por semana, comer 150g proteína diaria" (concreto, medible)

**3. Prepárate para el Fracaso**
- Habrá días malos
- Tendrás comidas fuera de plan
- Saltarás entrenamientos
- Esto es normal, no es fracaso

**4. Mide el Progreso Correctamente**
- No solo la báscula
- Mide: fuerza, energía, cómo te ves, cómo se siente la ropa
- Celebra pequeñas victorias

**5. Encuentra Sostenibilidad**
- Si odias correr, no corras
- Si odias pollo, come otro tipo de proteína
- La mejor dieta es la que puedes mantener
- El mejor entrenamiento es el que harás consistentemente

## El Poder de la Consistencia Imperfecta

Ejemplo real:
- **Persona perfecta**: Entrena 5 días, come perfecto, pero solo lo hace 2 meses
- **Persona consistente**: Entrena 3 días, come bien 80% del tiempo, lo hace durante 1 año

Después de 1 año:
- Persona perfecta: Volvió al punto de partida
- Persona consistente: Transformación completa

## Errores Comunes

- **Abandonar por un mal día**: Un mal día no destruye meses de progreso
- **Buscar la dieta perfecta**: La mejor dieta es la que puedes mantener
- **Compararse con otros**: Otros tienen diferentes circunstancias
- **Esperar resultados inmediatos**: Los cambios toman tiempo

## Conclusión

La transformación física no es un sprint, es un maratón. La consistencia imperfecta vence a la perfección inconsistente. Comienza pequeño, crea sistemas, prepárate para los baches, y mantén el curso. En 6-12 meses de consistencia, verás resultados que la perfección de 2 meses nunca podría lograr. El éxito no es sobre ser perfecto, es sobre ser consistente.`
  },
  {
    id: 11,
    slug: "ayuno-intermitente",
    title: "Ayuno Intermitente: ¿Funciona Realmente?",
    category: "Nutrición",
    date: "18 Feb 2026",
    author: "CambioFit",
    excerpt: "Descubre qué es el ayuno intermitente y si es efectivo para perder grasa.",
    content: `El ayuno intermitente se ha vuelto muy popular en los últimos años. Muchas personas lo ven como una solución mágica para perder peso. Pero ¿funciona realmente? La respuesta es más matizada de lo que parece.

## ¿Qué es el Ayuno Intermitente?

El ayuno intermitente es un patrón de alimentación donde alternas períodos de ayuno con períodos de alimentación. Los protocolos más comunes son:

**16/8 (Más Popular)**
- Ayunas 16 horas
- Comes en una ventana de 8 horas
- Ejemplo: Ayunas de 8 PM a 12 PM, comes de 12 PM a 8 PM

**5:2**
- Comes normalmente 5 días
- Ayunas o comes muy poco (500 calorías) 2 días

**Eat-Stop-Eat**
- Ayunas 24 horas una o dos veces por semana

**OMAD (One Meal A Day)**
- Comes una sola comida al día

## ¿Funciona para Perder Grasa?

La respuesta corta: Sí, pero no por razones mágicas.

**La Verdad:**
El ayuno intermitente funciona porque:
- Reduce la ventana de alimentación, lo que generalmente resulta en menos calorías
- Es más fácil para algunas personas mantener un déficit calórico
- Puede reducir el picoteo

**Lo que NO hace:**
- No acelera el metabolismo
- No quema más grasa que un déficit calórico regular
- No es superior a otras formas de crear déficit calórico

Estudios muestran que el ayuno intermitente produce pérdida de peso similar a una dieta regular, siempre que el déficit calórico sea el mismo.

## Beneficios Potenciales del Ayuno Intermitente

**1. Simplicidad**
- Menos comidas para planificar
- Más fácil para algunas personas

**2. Posible Mejora de Sensibilidad a la Insulina**
- Algunos estudios sugieren beneficios
- Pero esto ocurre principalmente con déficit calórico

**3. Autofagia**
- Proceso de limpieza celular
- Ocurre durante ayunos prolongados (>24 horas)
- Beneficios aún no completamente claros en humanos

**4. Flexibilidad**
- Puedes comer comidas más grandes
- Algunos encuentran esto más satisfactorio

## Desventajas del Ayuno Intermitente

**1. Rendimiento en Entrenamientos**
- Entrenar en ayunas puede reducir rendimiento
- Especialmente si tu objetivo es ganar músculo

**2. Adherencia**
- Muchas personas encuentran difícil ayunar
- El hambre puede ser problemática

**3. Socialización**
- Puede ser difícil comer con otros
- Requiere disciplina

**4. No es Mejor para Preservar Músculo**
- Necesitas proteína suficiente
- El ayuno no preserva mejor el músculo que otras dietas

## ¿Es el Ayuno Intermitente para Ti?

**Bueno para:**
- Personas que encuentran fácil saltarse desayuno
- Personas que prefieren comidas más grandes
- Personas que quieren simplicidad

**No recomendado para:**
- Atletas de alto rendimiento
- Personas con historial de desórdenes alimenticios
- Personas que se sienten mal sin comer
- Mujeres embarazadas o lactantes

## Cómo Hacerlo Correctamente

Si decides intentar ayuno intermitente:

**1. Comienza Gradualmente**
- Comienza con 12/12 (12 horas ayuno, 12 horas alimentación)
- Aumenta gradualmente a 16/8

**2. Come Suficientes Calorías**
- El ayuno no significa comer lo que quieras
- Aún necesitas un déficit calórico

**3. Prioriza Proteína**
- En tu ventana de alimentación, come suficiente proteína
- Esto es crucial para preservar músculo

**4. Mantente Hidratado**
- Bebe agua durante el ayuno
- Café y té sin calorías están bien

**5. Escucha tu Cuerpo**
- Si te sientes mal, detente
- No es para todos

## Comparación: Ayuno Intermitente vs Dieta Regular

Con el mismo déficit calórico:
- **Pérdida de grasa**: Igual
- **Ganancia muscular**: Igual (con proteína suficiente)
- **Adherencia**: Depende de la persona

La mejor dieta es la que puedes mantener consistentemente.

## Conclusión

El ayuno intermitente no es mágico, pero puede ser una herramienta útil para algunas personas. Funciona porque reduce calorías, no porque sea inherentemente superior. Si te gusta la idea, pruébalo. Si no, una dieta regular con déficit calórico funciona igual de bien. Lo importante es encontrar un patrón que puedas mantener consistentemente.`
  },
  {
    id: 12,
    slug: "lesiones-prevencion",
    title: "Prevención de Lesiones: Cómo Entrenar Seguro",
    category: "Entrenamiento",
    date: "15 Feb 2026",
    author: "CambioFit",
    excerpt: "Aprende cómo prevenir lesiones y entrenar de forma segura a largo plazo.",
    content: `Una lesión puede detener tu progreso durante semanas o meses. Muchas personas se lesionan no porque el entrenamiento sea peligroso, sino porque entrenan incorrectamente. Aquí está cómo prevenir lesiones y entrenar seguro.

## Causas Comunes de Lesiones

**1. Forma Pobre**
- La causa número uno de lesiones
- Ocurre cuando sacrificas forma por peso
- Especialmente en ejercicios complejos

**2. Progresión Demasiado Rápida**
- Aumentar peso o volumen muy rápido
- Tus tendones y ligamentos necesitan tiempo para adaptarse

**3. Falta de Calentamiento**
- Músculos y articulaciones frías son más propensas a lesionarse
- El calentamiento es crucial

**4. Fatiga Acumulada**
- No recuperarse adecuadamente
- Entrenar duro sin descanso

**5. Desequilibrios Musculares**
- Entrenar solo ciertos grupos musculares
- Ignorar la espalda mientras enfatizas el pecho

**6. Movimientos Repetitivos**
- Hacer lo mismo todo el tiempo
- Sin variedad

## Cómo Prevenir Lesiones

**1. Domina la Forma Primero**
- Comienza sin peso o con peso muy ligero
- Aprende el movimiento correcto
- Aumenta peso gradualmente

**2. Calienta Adecuadamente**
- 5-10 minutos de cardio ligero
- Estiramientos dinámicos
- Series de calentamiento con peso ligero

**3. Progresa Gradualmente**
- Aumenta peso 5-10% cuando puedas completar todas las series
- No aumentes demasiado rápido
- Más importante es la consistencia que la cantidad

**4. Incluye Ejercicios de Movilidad**
- Trabajo de movilidad 2-3 veces por semana
- Yoga, estiramientos, trabajo de articulaciones
- Previene desequilibrios

**5. Descansa Adecuadamente**
- 48 horas entre sesiones del mismo grupo muscular
- 7-9 horas de sueño
- Días de descanso completo 1-2 veces por semana

**6. Varía tu Entrenamiento**
- Cambia ejercicios cada 4-6 semanas
- Varía rangos de repeticiones
- Incluye diferentes tipos de entrenamiento

**7. Escucha tu Cuerpo**
- Dolor agudo = detente inmediatamente
- Dolor sordo = puede ser normal
- Aprende la diferencia

## Ejercicios para Prevenir Lesiones

**Trabajo de Espalda**
- Remo, dominadas
- Previene desequilibrio pecho/espalda

**Trabajo de Hombro**
- Rotaciones de hombro
- Face pulls
- Previene problemas de hombro

**Trabajo de Cadera**
- Sentadillas, peso muerto
- Glute bridges
- Previene problemas de espalda baja

**Trabajo de Núcleo**
- Planchas, dead bugs
- Previene problemas de espalda

## Qué Hacer si te Lesionas

**Primeros Pasos:**
1. Detente inmediatamente
2. Hielo durante 15-20 minutos
3. Compresión y elevación
4. Descansa

**Después:**
- Consulta un profesional si el dolor persiste
- No ignores lesiones
- El descanso inicial previene problemas mayores

**Regreso al Entrenamiento:**
- Comienza con movimientos sin dolor
- Aumenta gradualmente
- No vuelvas a la intensidad anterior inmediatamente

## Ejercicios a Evitar o Hacer con Cuidado

**Riesgosos:**
- Sentadillas Smith (movimiento no natural)
- Leg press con rango completo (puede dañar espalda baja)
- Extensiones de cuello con peso
- Detrás del cuello press/pulldown

**Mejor Alternativa:**
- Sentadillas libres
- Prensa de piernas con rango moderado
- Rotaciones de cuello sin peso
- Frente del cuello press/pulldown

## Conclusión

La prevención de lesiones no es complicada. Aprende la forma correcta, calienta, progresa gradualmente, descansa adecuadamente, y varía tu entrenamiento. Una lesión puede detenerte meses. La prevención toma minutos. Invierte en prevención ahora para entrenar sin problemas durante años.`
  }
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(ARTICLES.map(a => a.category)));

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter(article => {
      const matchSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCategory = !selectedCategory || article.category === selectedCategory;
      return matchSearch && matchCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-24 pb-12 px-4 md:px-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Blog de Fitness
          </h1>
          <p className="text-xl opacity-90">
            Artículos originales sobre nutrición, entrenamiento y transformación física basados en ciencia.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 px-4 md:px-8 bg-gray-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 relative max-w-md">
            <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                selectedCategory === null
                  ? "bg-orange-500 text-white"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              Todos ({ARTICLES.length})
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  selectedCategory === cat
                    ? "bg-orange-500 text-white"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {cat} ({ARTICLES.filter(a => a.category === cat).length})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-slate-600">No se encontraron artículos.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map(article => (
                <Link key={article.id} href={`/blog/${article.slug}`}>
                  <div className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                    <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600"></div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {article.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-slate-600 text-sm line-clamp-3 mb-4">
                        {article.excerpt}
                      </p>
                      <div className="mt-auto flex items-center text-orange-500 font-semibold text-sm">
                        Leer más <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
