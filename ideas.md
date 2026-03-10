# Ideas de Diseño — CambioFit

## Concepto General
Sitio web de fitness y transformación física con identidad visual poderosa, energética y motivacional.

---

<response>
<idea>
**Design Movement:** Neo-Athletic Brutalism con acentos de energía vibrante

**Core Principles:**
1. Contraste extremo entre fondos oscuros y tipografía blanca/neón para transmitir potencia
2. Composición asimétrica con bloques de color que rompen la cuadrícula tradicional
3. Tipografía expresiva y condensada que transmite fuerza y movimiento
4. Fotografía de alto impacto con overlays de color que unifican la identidad

**Color Philosophy:**
- Fondo primario: negro profundo (#0A0A0A) — poder, seriedad, elegancia atlética
- Acento principal: verde lima eléctrico (#B5FF2B) — energía, vitalidad, progreso
- Acento secundario: naranja fuego (#FF5C1A) — pasión, motivación, calor
- Texto: blanco puro y grises cálidos para jerarquía
- Intención emocional: provocar urgencia y motivación, como el interior de un gimnasio de élite

**Layout Paradigm:**
- Secciones con clip-path diagonal para transiciones dinámicas entre bloques
- Hero de pantalla completa con texto superpuesto en diagonal
- Cards con bordes asimétricos y sombras de color
- Navegación horizontal fija con fondo translúcido y blur

**Signature Elements:**
1. Líneas diagonales de acento en verde lima que cortan secciones
2. Números estadísticos enormes (tipografía condensada) como elementos decorativos
3. Etiquetas de "badge" con bordes redondeados en verde lima sobre fondo oscuro

**Interaction Philosophy:**
- Hover effects con transformaciones de escala y cambio de color de acento
- Scroll-triggered animations que revelan contenido desde abajo con fade+slide
- Botones CTA con efecto de relleno de color al hover

**Animation:**
- Entrada de hero: texto aparece con stagger de 0.1s por palabra
- Cards: scale(1.03) + shadow al hover con transición de 200ms
- Secciones: fadeInUp con 60px de desplazamiento al entrar en viewport
- Contador animado para estadísticas (0 → número final)

**Typography System:**
- Display: Barlow Condensed ExtraBold — para títulos de impacto
- Body: DM Sans Regular/Medium — para legibilidad y modernidad
- Accent: Barlow Condensed Italic — para citas y destacados
</idea>
<probability>0.08</probability>
</response>

<response>
<idea>
**Design Movement:** Organic Wellness Modernism — minimalismo cálido con toques naturales

**Core Principles:**
1. Paleta terrosa y natural que evoca salud, naturaleza y bienestar auténtico
2. Espaciado generoso y tipografía serif elegante para transmitir confianza y autoridad
3. Fotografía luminosa y natural con tonos cálidos sin filtros artificiales
4. Composición centrada en el contenido con márgenes amplios

**Color Philosophy:**
- Fondo: crema cálido (#FAF7F2) — limpieza, calidez, naturalidad
- Primario: verde bosque (#2D6A4F) — salud, naturaleza, equilibrio
- Acento: terracota (#C1440E) — energía, vitalidad, calidez
- Texto: marrón oscuro (#2C1810) — legibilidad, calidez

**Layout Paradigm:**
- Grid editorial asimétrico con columnas de ancho variable
- Secciones con fondos alternados entre crema y verde muy suave
- Imágenes que sangran hasta el borde en mobile

**Signature Elements:**
1. Ilustraciones de línea fina de plantas y elementos naturales como separadores
2. Tipografía serif en títulos con tracking amplio
3. Círculos de fotografía recortada para testimonios

**Interaction Philosophy:**
- Transiciones suaves y lentas que transmiten calma y confianza
- Hover effects sutiles con cambio de color sin transformaciones bruscas

**Animation:**
- Fade in muy suave (opacity 0→1) con 800ms de duración
- Parallax sutil en imágenes de hero

**Typography System:**
- Display: Playfair Display Bold — elegancia y autoridad
- Body: Source Sans 3 — claridad y legibilidad
</idea>
<probability>0.07</probability>
</response>

<response>
<idea>
**Design Movement:** High-Energy Sport Tech — estética de app de fitness premium

**Core Principles:**
1. Gradientes vibrantes de naranja a rojo que transmiten fuego y transformación
2. Glassmorphism en cards para modernidad y profundidad visual
3. Tipografía sans-serif geométrica con pesos extremos para jerarquía clara
4. Fotografía de atletas en acción con overlays de gradiente que unifican la paleta

**Color Philosophy:**
- Fondo: blanco con secciones en gris muy claro (#F8F9FA) — limpieza y profesionalismo
- Gradiente primario: naranja (#FF6B35) → rojo coral (#FF3B5C) — energía y pasión
- Acento: azul eléctrico (#0066FF) — tecnología, confianza, frialdad que contrasta
- Texto: casi negro (#1A1A2E) — autoridad y legibilidad

**Layout Paradigm:**
- Secciones con fondos alternados blanco/gris claro
- Cards con glassmorphism y sombras suaves de color
- Hero con imagen de fondo y gradiente overlay

**Signature Elements:**
1. Gradiente naranja-rojo en botones CTA y elementos de acento
2. Cards con border-radius generoso y sombra de color tenue
3. Iconografía de línea fina en naranja

**Interaction Philosophy:**
- Hover con elevación de cards (translateY -4px + shadow más pronunciada)
- Botones con gradiente animado al hover

**Animation:**
- Scroll animations con Framer Motion para cada sección
- Contadores animados para estadísticas de impacto

**Typography System:**
- Display: Montserrat ExtraBold — impacto y modernidad
- Body: Nunito Sans — amigable y legible
</idea>
<probability>0.09</probability>
</response>

---

## Decisión Final

**Filosofía elegida: High-Energy Sport Tech (Opción 3)**

Razones:
- Equilibra energía vibrante con profesionalismo (fondo blanco + acentos de gradiente)
- El glassmorphism en cards da modernidad sin sacrificar legibilidad
- La paleta naranja-rojo es universalmente asociada con fitness y motivación
- Montserrat + Nunito Sans son una combinación probada para sitios de salud y deporte
- Permite monetización con AdSense sin conflictos visuales (fondo claro)
