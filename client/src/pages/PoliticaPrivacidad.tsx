/*
 * CambioFit Política de Privacidad — Cumple con GDPR, CCPA y requisitos de Google AdSense
 * SEO: política de privacidad, protección de datos, privacidad usuario
 */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Shield, Lock, Eye, Database, Mail, CheckCircle } from "lucide-react";

export default function PoliticaPrivacidad() {
  useScrollReveal();

  return (
    <div className="min-h-screen pt-20 pb-20 bg-white">
      {/* Hero */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50 border-b border-blue-100">
        <div className="container">
          <div className="flex items-center gap-4 mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">Privacidad y Seguridad</span>
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Política de Privacidad
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            En CambioFit, tu privacidad es nuestra prioridad. Esta política explica cómo recopilamos, usamos y protegemos tus datos personales.
          </p>
          <p className="text-gray-500 text-sm mt-4">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-12">
        <div className="container max-w-3xl">
          <div className="space-y-12 reveal">
            {/* 1. Información que recopilamos */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <Database className="w-6 h-6 text-blue-600" />
                1. Información que Recopilamos
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Recopilamos información de varias formas para mejorar tu experiencia en CambioFit:
                </p>
                <ul className="space-y-3 pl-6">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Información de contacto:</strong> Nombre, correo electrónico, teléfono (cuando te suscribes a nuestro newsletter o contactas con nosotros)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Datos de navegación:</strong> Dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia (mediante Google Analytics)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Cookies:</strong> Identificadores únicos para recordar preferencias y mejorar tu experiencia</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Información de dispositivo:</strong> Sistema operativo, resolución de pantalla, idioma preferido</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Cómo usamos tu información */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <Eye className="w-6 h-6 text-blue-600" />
                2. Cómo Usamos Tu Información
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>Utilizamos tu información para:</p>
                <ul className="space-y-3 pl-6">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span>Enviarte contenido, actualizaciones y ofertas especiales (solo si lo autorizas)</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span>Responder tus consultas y proporcionar soporte al cliente</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span>Analizar el comportamiento del usuario para mejorar nuestro sitio web</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span>Mostrar anuncios personalizados (a través de Google AdSense y socios publicitarios)</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span>Cumplir con obligaciones legales y proteger nuestros derechos</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. Compartir información */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                3. Compartir Tu Información
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  No vendemos ni compartimos tu información personal con terceros, excepto en los siguientes casos:
                </p>
                <ul className="space-y-3 pl-6">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Proveedores de servicios:</strong> Empresas que nos ayudan a operar el sitio (hosting, email, analytics)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Google AdSense:</strong> Para mostrar anuncios personalizados basados en tu navegación</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Requisitos legales:</strong> Si lo exige la ley o una orden judicial</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 4. Seguridad de datos */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <Lock className="w-6 h-6 text-blue-600" />
                4. Seguridad de Datos
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Implementamos medidas de seguridad estándar de la industria para proteger tu información:
                </p>
                <ul className="space-y-3 pl-6">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Encriptación SSL/TLS para todas las conexiones</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Servidores seguros con acceso restringido</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Políticas de acceso de datos limitadas</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Monitoreo continuo de amenazas de seguridad</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-gray-600 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <strong>Nota:</strong> Aunque implementamos medidas de seguridad robustas, ningún método de transmisión por internet es 100% seguro. Usamos nuestros mejores esfuerzos para proteger tu información.
                </p>
              </div>
            </div>

            {/* 5. Tus derechos */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                5. Tus Derechos (GDPR y CCPA)
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Bajo las regulaciones GDPR (Europa) y CCPA (California), tienes derecho a:
                </p>
                <ul className="space-y-3 pl-6">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Acceder:</strong> Solicitar una copia de tus datos personales</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Rectificar:</strong> Corregir información inexacta</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Eliminar:</strong> Solicitar la eliminación de tus datos ("derecho al olvido")</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Oponerme:</strong> Rechazar el procesamiento de tus datos para ciertos fines</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm">
                  Para ejercer cualquiera de estos derechos, contacta con nosotros en <strong>privacy@cambiofit.com</strong>
                </p>
              </div>
            </div>

            {/* 6. Cookies */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                6. Política de Cookies
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Utilizamos cookies para mejorar tu experiencia. Puedes controlar las cookies desde tu navegador:
                </p>
                <ul className="space-y-3 pl-6">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento del sitio</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Cookies analíticas:</strong> Nos ayudan a entender cómo usas el sitio (Google Analytics)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Cookies publicitarias:</strong> Utilizadas por Google AdSense para mostrar anuncios relevantes</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm">
                  Puedes desactivar cookies en tu navegador, pero esto puede afectar la funcionalidad del sitio.
                </p>
              </div>
            </div>

            {/* 7. Retención de datos */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                7. Retención de Datos
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Conservamos tu información personal solo el tiempo necesario para:
                </p>
                <ul className="space-y-3 pl-6">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Proporcionar nuestros servicios</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Cumplir con obligaciones legales</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Resolver disputas</span>
                  </li>
                </ul>
                <p className="mt-4">
                  Puedes solicitar la eliminación de tus datos en cualquier momento contactando a <strong>privacy@cambiofit.com</strong>
                </p>
              </div>
            </div>

            {/* 8. Cambios en esta política */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                8. Cambios en Esta Política
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos de cambios significativos publicando la nueva política en este sitio y actualizando la fecha de "Última actualización".
                </p>
              </div>
            </div>

            {/* 9. Contacto */}
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200">
              <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <Mail className="w-6 h-6 text-blue-600" />
                9. Contacta Con Nosotros
              </h2>
              <p className="text-gray-700 mb-4">
                Si tienes preguntas sobre esta política de privacidad o cómo manejamos tus datos:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> privacy@cambiofit.com</p>
                <p><strong>Dirección:</strong> CambioFit, Madrid, España</p>
                <p><strong>Teléfono:</strong> +34 91 123 4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
