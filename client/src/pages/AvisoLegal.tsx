/*
 * CambioFit Aviso Legal — Información legal, términos de uso, responsabilidades
 * SEO: aviso legal, términos de servicio, responsabilidad legal
 */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AlertTriangle, FileText, Scale, AlertCircle } from "lucide-react";

export default function AvisoLegal() {
  useScrollReveal();

  return (
    <div className="min-h-screen pt-20 pb-20 bg-white">
      {/* Hero */}
      <section className="py-12 bg-gradient-to-br from-orange-50 to-red-50 border-b border-orange-100">
        <div className="container">
          <div className="flex items-center gap-4 mb-4">
            <Scale className="w-8 h-8 text-orange-600" />
            <span className="text-orange-600 font-bold text-sm uppercase tracking-wider">Información Legal</span>
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Aviso Legal
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Información legal, términos de uso y responsabilidades de CambioFit.
          </p>
          <p className="text-gray-500 text-sm mt-4">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-12">
        <div className="container max-w-3xl">
          <div className="space-y-12 reveal">
            {/* 1. Información del sitio */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <FileText className="w-6 h-6 text-orange-600" />
                1. Información del Sitio Web
              </h2>
              <div className="space-y-4 text-gray-700 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p><strong>Nombre:</strong> CambioFit</p>
                <p><strong>Dominio:</strong> cambiofit.com</p>
                <p><strong>Propietario:</strong> CambioFit S.L.</p>
                <p><strong>NIF/CIF:</strong> B12345678</p>
                <p><strong>Dirección:</strong> Calle Fitness 123, 28001 Madrid, España</p>
                <p><strong>Email de contacto:</strong> legal@cambiofit.com</p>
                <p><strong>Teléfono:</strong> +34 91 123 4567</p>
                <p><strong>Inscripción Registro Mercantil:</strong> Tomo 12345, Folio 67890, Sección 8, Hoja M-123456</p>
              </div>
            </div>

            {/* 2. Objeto del sitio */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                2. Objeto del Sitio Web
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  CambioFit es un sitio web dedicado a proporcionar información, recursos y asesoramiento sobre:
                </p>
                <ul className="space-y-2 pl-6">
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Planes de dieta y nutrición</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Rutinas de ejercicio y fitness</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Estilo de vida saludable</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Transformaciones físicas y testimonios</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Artículos educativos sobre salud y bienestar</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. Condiciones de uso */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                3. Condiciones de Uso
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Al acceder y utilizar este sitio web, aceptas las siguientes condiciones:
                </p>
                <ul className="space-y-3 pl-6">
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Utilizarás el sitio solo para propósitos legales y de acuerdo con estas condiciones</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>No participarás en actividades que perjudiquen, dañen o impidan el funcionamiento del sitio</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>No intentarás obtener acceso no autorizado a sistemas o datos</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>No reproducirás, duplicarás o copiarás contenido sin permiso explícito</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Respetarás los derechos de propiedad intelectual de CambioFit y terceros</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 4. Disclaimer médico */}
            <div className="bg-red-50 p-8 rounded-2xl border-2 border-red-200">
              <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <AlertTriangle className="w-6 h-6 text-red-600" />
                4. Disclaimer Médico y de Salud
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="font-bold text-red-700">
                  ⚠️ IMPORTANTE: El contenido de este sitio web es solo informativo y educativo.
                </p>
                <ul className="space-y-3 pl-6">
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>No constituye asesoramiento médico, diagnóstico o tratamiento profesional</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Siempre consulta con un profesional de la salud calificado antes de iniciar cualquier programa de ejercicio o dieta</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>CambioFit no es responsable de lesiones, enfermedades o daños derivados del uso de este contenido</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Si tienes condiciones médicas preexistentes, consulta con tu médico antes de usar cualquier plan</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Los resultados varían según el individuo. No garantizamos resultados específicos</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 5. Responsabilidad limitada */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                5. Limitación de Responsabilidad
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  En la máxima medida permitida por la ley, CambioFit no será responsable por:
                </p>
                <ul className="space-y-3 pl-6">
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Daños directos, indirectos, incidentales, especiales o consecuentes</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Pérdida de datos, ingresos o beneficios</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Interrupción del servicio o disponibilidad del sitio</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Errores o imprecisiones en el contenido</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Acceso no autorizado a servidores o información personal</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 6. Propiedad intelectual */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                6. Derechos de Propiedad Intelectual
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Todo el contenido de este sitio web, incluyendo textos, imágenes, gráficos, logotipos y código, está protegido por derechos de autor y otras leyes de propiedad intelectual.
                </p>
                <ul className="space-y-3 pl-6">
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <span><strong>© 2026 CambioFit.</strong> Todos los derechos reservados</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Puedes usar el contenido solo para uso personal y no comercial</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>No puedes reproducir, distribuir o transmitir contenido sin permiso escrito</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Las marcas registradas y logotipos son propiedad de CambioFit</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 7. Enlaces externos */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                7. Enlaces Externos
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Este sitio puede contener enlaces a sitios web de terceros. CambioFit no es responsable por:
                </p>
                <ul className="space-y-3 pl-6">
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>El contenido de sitios web externos</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>La precisión o legalidad de información externa</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Daños resultantes del acceso a sitios externos</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm">
                  Los enlaces se proporcionan solo como referencia. No implican aprobación o asociación con sitios externos.
                </p>
              </div>
            </div>

            {/* 8. Publicidad y Google AdSense */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                8. Publicidad y Google AdSense
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Este sitio web contiene anuncios publicitarios de Google AdSense y otros proveedores de publicidad.
                </p>
                <ul className="space-y-3 pl-6">
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Los anuncios se muestran según tu historial de navegación e intereses</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>CambioFit no es responsable por el contenido de los anuncios</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Puedes controlar las preferencias de anuncios en tu cuenta de Google</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Lee la <a href="https://policies.google.com/privacy" target="_blank" className="text-orange-600 font-bold hover:underline">Política de Privacidad de Google</a></span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 9. Modificaciones */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                9. Cambios en Este Aviso Legal
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  CambioFit se reserva el derecho de modificar este aviso legal en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación. Tu uso continuado del sitio constituye aceptación de los cambios.
                </p>
              </div>
            </div>

            {/* 10. Contacto */}
            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200">
              <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <AlertCircle className="w-6 h-6 text-orange-600" />
                10. Contacto
              </h2>
              <p className="text-gray-700 mb-4">
                Si tienes preguntas sobre este aviso legal:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> legal@cambiofit.com</p>
                <p><strong>Dirección:</strong> Calle Fitness 123, 28001 Madrid, España</p>
                <p><strong>Teléfono:</strong> +34 91 123 4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
