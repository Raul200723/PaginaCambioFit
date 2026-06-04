/*
 * CambioFit Contacto — Página de Contacto
 */
import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Mensaje enviado correctamente", {
        description: "Nos pondremos en contacto pronto."
      });
      
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Error al enviar el mensaje", {
        description: "Por favor, intenta de nuevo."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-24 pb-12 px-4 md:px-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Contacto
          </h1>
          <p className="text-xl opacity-90">
            ¿Tienes preguntas o sugerencias? Nos encantaría escucharte.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 bg-gray-50 rounded-lg border border-slate-200 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Email</h3>
            <a href="mailto:contacto@cambiofit.com" className="text-orange-500 hover:text-orange-600">
              contacto@cambiofit.com
            </a>
          </div>

          <div className="p-8 bg-gray-50 rounded-lg border border-slate-200 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Ubicación</h3>
            <p className="text-slate-600">
              Plataforma Online Global
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-lg border border-slate-200 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Disponibilidad</h3>
            <p className="text-slate-600">
              Disponible 24/7
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Envíanos un Mensaje
          </h2>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg border border-slate-200">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Tu nombre"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="tu@email.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 mb-2">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Asunto del mensaje"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Tu mensaje aquí..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 font-semibold flex items-center justify-center gap-2"
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"} <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Preguntas Frecuentes
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "¿Cuánto tiempo tardan en responder?",
                a: "Respondemos la mayoría de consultas dentro de 24-48 horas."
              },
              {
                q: "¿Puedo hacer consultas sobre nutrición personalizada?",
                a: "Ofrecemos información educativa general. Para asesoramiento personalizado, recomendamos consultar con un nutricionista certificado."
              },
              {
                q: "¿Venden productos o suplementos?",
                a: "No. CambioFit es un blog educativo 100% gratuito sin fines de lucro comercial."
              },
              {
                q: "¿Puedo usar el contenido de CambioFit en mi sitio?",
                a: "Todo nuestro contenido está protegido por derechos de autor. Puedes compartir artículos con atribución adecuada."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-lg border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">{item.q}</h3>
                <p className="text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
