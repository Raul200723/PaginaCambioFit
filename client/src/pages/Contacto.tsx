/*
 * CambioFit Contacto Page — Formulario de contacto, newsletter, redes sociales
 * SEO: contacto CambioFit, suscripción fitness, plan personalizado
 */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { Mail, Phone, MessageSquare, Send, Instagram, Youtube, Facebook, Twitter, CheckCircle, Flame, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const plans = [
  { value: "perdida-peso", label: "Pérdida de Peso" },
  { value: "ganar-musculo", label: "Ganar Músculo" },
  { value: "mantenimiento", label: "Mantenimiento" },
  { value: "fitness-casa", label: "Fitness en Casa" },
  { value: "otro", label: "Otro" },
];

const faqs = [
  {
    q: "¿Los planes son realmente gratuitos?",
    a: "Sí, tenemos planes básicos completamente gratuitos. Los planes premium ofrecen más personalización y seguimiento.",
  },
  {
    q: "¿Cuánto tiempo tarda en verse resultados?",
    a: "La mayoría de usuarios ven cambios visibles en 4–6 semanas siguiendo el plan consistentemente.",
  },
  {
    q: "¿Necesito ir al gimnasio?",
    a: "No. Tenemos rutinas para casa sin equipamiento y también para gimnasio. Tú eliges.",
  },
  {
    q: "¿Los planes son para hombres y mujeres?",
    a: "Sí, todos nuestros planes están adaptados para cualquier género, edad y nivel de condición física.",
  },
  {
    q: "¿Puedo cancelar mi suscripción premium en cualquier momento?",
    a: "Absolutamente. No hay contratos ni compromisos. Cancela cuando quieras desde tu perfil.",
  },
];

export default function Contacto() {
  useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", goal: "", message: "" });
  const [newsletter, setNewsletter] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("¡Mensaje enviado!", {
      description: "Te responderemos en menos de 24 horas.",
    });
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Suscripción exitosa!", {
      description: "Tu plan gratuito está en camino.",
    });
    setNewsletter("");
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-20 gradient-brand">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center reveal">
            <span className="text-white/70 font-bold text-sm uppercase tracking-wider">Contacto</span>
            <h1 className="section-title text-white mt-2">
              Empieza Tu<br />Transformación Hoy
            </h1>
            <p className="text-white/85 mt-4 text-lg">
              Cuéntanos tu objetivo y te ayudaremos a crear el plan perfecto para ti. Sin compromisos, sin tarjeta de crédito.
            </p>
          </div>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Form */}
            <div className="reveal">
              <h2 className="text-2xl font-black text-gray-900 mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Solicita Tu Plan Personalizado
              </h2>
              <p className="text-gray-500 mb-8">
                Completa el formulario y un experto de CambioFit se pondrá en contacto contigo en menos de 24 horas.
              </p>

              {submitted ? (
                <div className="p-8 bg-green-50 rounded-2xl border border-green-200 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-black text-gray-900 mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="text-gray-600">
                    Gracias por contactarnos. Te responderemos en menos de 24 horas con tu plan personalizado.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 btn-gradient px-6 py-3 rounded-xl font-bold"
                  >
                    Enviar Otro Mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Tu nombre"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-900"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="tu@correo.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-900"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      ¿Cuál es tu objetivo principal?
                    </label>
                    <select
                      value={form.goal}
                      onChange={(e) => setForm({ ...form, goal: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-900 bg-white"
                    >
                      <option value="">Selecciona tu objetivo</option>
                      {plans.map((p) => (
                        <option key={p.value} value={p.value}>{p.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Cuéntanos más sobre ti
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="¿Cuánto tiempo llevas entrenando? ¿Tienes alguna restricción alimentaria? ¿Qué has intentado antes?"
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-900 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gradient w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3"
                  >
                    <Send className="w-5 h-5" />
                    Enviar y Obtener Mi Plan Gratis
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    Al enviar aceptas nuestra política de privacidad. Sin spam, prometido.
                  </p>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="reveal space-y-6">
              {/* Contact cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Mail, title: "Email", value: "hola@cambiofit.com", color: "text-orange-500", bg: "bg-orange-50" },
                  { icon: Phone, title: "WhatsApp", value: "+1 (555) 123-4567", color: "text-green-500", bg: "bg-green-50" },
                  { icon: MessageSquare, title: "Chat en vivo", value: "Lun–Vie 9:00–18:00", color: "text-blue-500", bg: "bg-blue-50" },
                  { icon: Flame, title: "Respuesta", value: "Menos de 24 horas", color: "text-red-500", bg: "bg-red-50" },
                ].map((item) => (
                  <div key={item.title} className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className={`w-11 h-11 ${item.bg} rounded-xl flex items-center justify-center shrink-0`}>
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase">{item.title}</p>
                      <p className="font-bold text-gray-900 text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social media */}
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Síguenos en Redes Sociales
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Instagram, name: "Instagram", handle: "@cambiofit", color: "from-purple-500 to-pink-500", followers: "45K" },
                    { icon: Youtube, name: "YouTube", handle: "CambioFit", color: "from-red-500 to-red-600", followers: "28K" },
                    { icon: Facebook, name: "Facebook", handle: "CambioFit", color: "from-blue-600 to-blue-700", followers: "32K" },
                    { icon: Twitter, name: "Twitter/X", handle: "@cambiofit", color: "from-gray-700 to-gray-900", followers: "15K" },
                  ].map((social) => (
                    <button
                      key={social.name}
                      onClick={() => toast.info(`Siguiendo en ${social.name}`, { description: `Visita ${social.handle}` })}
                      className={`p-4 bg-gradient-to-r ${social.color} rounded-xl text-white flex items-center gap-3 hover:opacity-90 transition-opacity`}
                    >
                      <social.icon className="w-5 h-5" />
                      <div className="text-left">
                        <p className="font-bold text-sm">{social.name}</p>
                        <p className="text-white/70 text-xs">{social.followers} seguidores</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="p-6 gradient-brand rounded-2xl text-white">
                <h3 className="font-black text-xl mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Newsletter Semanal
                </h3>
                <p className="text-white/85 text-sm mb-4">
                  Recibe los mejores consejos de fitness, recetas y motivación cada semana.
                </p>
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <input
                    type="email"
                    value={newsletter}
                    onChange={(e) => setNewsletter(e.target.value)}
                    placeholder="Tu correo"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
                    required
                  />
                  <button type="submit" className="px-5 py-2.5 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-colors text-sm flex items-center gap-1">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-14 reveal">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Preguntas Frecuentes</span>
            <h2 className="section-title text-gray-900 mt-2">
              Resolvemos Tus<br />
              <span className="gradient-brand-text">Dudas</span>
            </h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                className={`reveal reveal-delay-${(i % 3) + 1} bg-white rounded-2xl p-6 border border-gray-100 shadow-sm`}
              >
                <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {faq.q}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
