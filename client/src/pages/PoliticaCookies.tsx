/*
 * CambioFit Política de Cookies — Información sobre cookies y consentimiento
 * SEO: política de cookies, consentimiento cookies, GDPR
 */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Cookie, Settings, Info, CheckCircle } from "lucide-react";

export default function PoliticaCookies() {
  useScrollReveal();

  return (
    <div className="min-h-screen pt-20 pb-20 bg-white">
      {/* Hero */}
      <section className="py-12 bg-gradient-to-br from-amber-50 to-yellow-50 border-b border-amber-100">
        <div className="container">
          <div className="flex items-center gap-4 mb-4">
            <Cookie className="w-8 h-8 text-amber-600" />
            <span className="text-amber-600 font-bold text-sm uppercase tracking-wider">Tecnología</span>
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Política de Cookies
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Información sobre cómo utilizamos cookies y tecnologías similares en CambioFit.
          </p>
          <p className="text-gray-500 text-sm mt-4">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-12">
        <div className="container max-w-3xl">
          <div className="space-y-12 reveal">
            {/* 1. Qué son las cookies */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <Info className="w-6 h-6 text-amber-600" />
                1. ¿Qué Son las Cookies?
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Permiten que el sitio recuerde información sobre ti y tu navegación.
                </p>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <p className="text-sm">
                    <strong>Ejemplo:</strong> Una cookie puede recordar que iniciaste sesión, tus preferencias de idioma o los artículos que visitaste.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Tipos de cookies */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                2. Tipos de Cookies que Utilizamos
              </h2>
              <div className="space-y-6">
                {/* Cookies esenciales */}
                <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Cookies Esenciales
                  </h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Necesarias para el funcionamiento básico del sitio.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1 pl-6">
                    <li>• Autenticación de usuarios</li>
                    <li>• Seguridad y prevención de fraude</li>
                    <li>• Preferencias de sesión</li>
                    <li>• Idioma y zona horaria</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-2"><strong>Duración:</strong> Sesión o 1 año</p>
                </div>

                {/* Cookies analíticas */}
                <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Cookies Analíticas
                  </h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Nos ayudan a entender cómo usas el sitio (Google Analytics).
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1 pl-6">
                    <li>• Páginas visitadas</li>
                    <li>• Tiempo de permanencia</li>
                    <li>• Tasa de rebote</li>
                    <li>• Dispositivo y navegador</li>
                    <li>• Ubicación geográfica (aproximada)</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-2"><strong>Duración:</strong> 2 años</p>
                </div>

                {/* Cookies publicitarias */}
                <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    Cookies Publicitarias
                  </h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Utilizadas por Google AdSense para mostrar anuncios relevantes.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1 pl-6">
                    <li>• Historial de navegación</li>
                    <li>• Intereses y preferencias</li>
                    <li>• Frecuencia de anuncios</li>
                    <li>• Rendimiento de anuncios</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-2"><strong>Duración:</strong> Hasta 2 años</p>
                </div>

                {/* Cookies de redes sociales */}
                <div className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    Cookies de Redes Sociales
                  </h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Para compartir contenido en redes sociales (Facebook, Twitter, Instagram).
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1 pl-6">
                    <li>• Seguimiento de comparticiones</li>
                    <li>• Integración de botones sociales</li>
                    <li>• Análisis de redes sociales</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-2"><strong>Duración:</strong> Variable según la red social</p>
                </div>
              </div>
            </div>

            {/* 3. Tabla de cookies específicas */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                3. Cookies Específicas Utilizadas
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-amber-100">
                      <th className="border border-amber-300 p-3 text-left font-bold">Nombre</th>
                      <th className="border border-amber-300 p-3 text-left font-bold">Proveedor</th>
                      <th className="border border-amber-300 p-3 text-left font-bold">Tipo</th>
                      <th className="border border-amber-300 p-3 text-left font-bold">Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-200 p-3">_ga</td>
                      <td className="border border-gray-200 p-3">Google Analytics</td>
                      <td className="border border-gray-200 p-3">Analítica</td>
                      <td className="border border-gray-200 p-3">2 años</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-200 p-3">_gid</td>
                      <td className="border border-gray-200 p-3">Google Analytics</td>
                      <td className="border border-gray-200 p-3">Analítica</td>
                      <td className="border border-gray-200 p-3">24 horas</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-200 p-3">NID</td>
                      <td className="border border-gray-200 p-3">Google AdSense</td>
                      <td className="border border-gray-200 p-3">Publicidad</td>
                      <td className="border border-gray-200 p-3">6 meses</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-200 p-3">IDE</td>
                      <td className="border border-gray-200 p-3">Google DoubleClick</td>
                      <td className="border border-gray-200 p-3">Publicidad</td>
                      <td className="border border-gray-200 p-3">1 año</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-200 p-3">fr</td>
                      <td className="border border-gray-200 p-3">Facebook</td>
                      <td className="border border-gray-200 p-3">Redes sociales</td>
                      <td className="border border-gray-200 p-3">3 meses</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4. Cómo controlar las cookies */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <Settings className="w-6 h-6 text-amber-600" />
                4. Cómo Controlar las Cookies
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Puedes controlar y eliminar cookies de varias formas:
                </p>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-bold mb-2">En tu navegador:</h3>
                  <ul className="space-y-2 text-sm pl-6">
                    <li className="flex gap-3">
                      <span className="text-amber-600 font-bold">•</span>
                      <span><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-amber-600 font-bold">•</span>
                      <span><strong>Firefox:</strong> Preferencias → Privacidad → Cookies</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-amber-600 font-bold">•</span>
                      <span><strong>Safari:</strong> Preferencias → Privacidad → Cookies</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-amber-600 font-bold">•</span>
                      <span><strong>Edge:</strong> Configuración → Privacidad → Cookies</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-bold mb-2">Opciones específicas:</h3>
                  <ul className="space-y-2 text-sm pl-6">
                    <li className="flex gap-3">
                      <span className="text-amber-600 font-bold">•</span>
                      <span><strong>Google Analytics:</strong> Instala la <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" className="text-amber-600 hover:underline">extensión de exclusión de Google Analytics</a></span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-amber-600 font-bold">•</span>
                      <span><strong>Google Ads:</strong> Gestiona preferencias en <a href="https://myadcenter.google.com" target="_blank" className="text-amber-600 hover:underline">Mi Centro de Anuncios</a></span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-amber-600 font-bold">•</span>
                      <span><strong>Publicidad comportamental:</strong> Visita <a href="https://www.aboutads.info" target="_blank" className="text-amber-600 hover:underline">aboutads.info</a></span>
                    </li>
                  </ul>
                </div>

                <p className="text-sm text-gray-600 bg-yellow-50 p-4 rounded border border-yellow-200">
                  <strong>Nota:</strong> Desactivar cookies puede afectar la funcionalidad del sitio. Las cookies esenciales no pueden desactivarse.
                </p>
              </div>
            </div>

            {/* 5. Consentimiento */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                5. Tu Consentimiento
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Al continuar navegando en CambioFit, aceptas el uso de cookies de acuerdo con esta política. Puedes cambiar tus preferencias en cualquier momento.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm">
                    Si no aceptas el uso de cookies no esenciales, puedes continuar usando el sitio con funcionalidad limitada.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Cambios en esta política */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                6. Cambios en Esta Política
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Podemos actualizar esta política de cookies ocasionalmente. Te notificaremos de cambios significativos publicando la nueva política en este sitio.
                </p>
              </div>
            </div>

            {/* 7. Contacto */}
            <div className="bg-amber-50 p-8 rounded-2xl border border-amber-200">
              <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <Cookie className="w-6 h-6 text-amber-600" />
                7. Contacta Con Nosotros
              </h2>
              <p className="text-gray-700 mb-4">
                Si tienes preguntas sobre esta política de cookies:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> cookies@cambiofit.com</p>
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
