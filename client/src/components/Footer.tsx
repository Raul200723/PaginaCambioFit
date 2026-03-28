/*
 * CambioFit Footer — High-Energy Sport Tech
 * Dark background with gradient accent, social links, newsletter signup
 */
import { Link } from "wouter";
import { Dumbbell, Instagram, Youtube, Facebook, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("¡Suscripción exitosa! Revisa tu correo.", {
        description: "Recibirás nuestros mejores consejos de fitness.",
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-gray-950 text-white">
      {/* Newsletter Banner */}
      <div className="gradient-brand py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Únete a la Comunidad CambioFit
              </h3>
              <p className="text-white/85 mt-1">Recibe planes, recetas y motivación directo en tu correo.</p>
            </div>
            <form onSubmit={handleNewsletter} className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                className="flex-1 md:w-72 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-colors flex items-center gap-2 whitespace-nowrap"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Suscribirse <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl gradient-brand flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <span className="font-black text-xl" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <span className="gradient-brand-text">Cambio</span>Fit
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Tu plataforma de referencia para cambios físicos reales. Dietas, ejercicio y comunidad para transformar tu vida.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
                { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Secciones */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Secciones
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/recetas", label: "Recetas Gratis" },
                { href: "/ejercicios", label: "Ejercicios Gratis" },
                { href: "/blog", label: "Blog de Fitness" },
                { href: "/sobre-nosotros", label: "Sobre Nosotros" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-gray-400 hover:text-orange-400 text-sm transition-colors flex items-center gap-2">
                      <ArrowRight className="w-3 h-3" />
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Recursos
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Guía de Nutrición", href: "/blog" },
                { label: "Rutinas Gratis", href: "/ejercicios" },
                { label: "Recetas Saludables", href: "/recetas" },
                { label: "Artículos", href: "/blog" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <span className="text-gray-400 hover:text-orange-400 text-sm transition-colors flex items-center gap-2">
                      <ArrowRight className="w-3 h-3" />
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Información */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Información
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <a href="mailto:info@cambiofit.com" className="hover:text-orange-400 transition-colors">
                  info@cambiofit.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>Plataforma Online Global</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <span className="text-xs text-orange-400 font-semibold">24/7</span>
                <span>Disponible en línea</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
              © 2026 CambioFit. Todos los derechos reservados. | Blog educativo de fitness y nutrición.
          </p>
          <div className="flex gap-5 text-sm text-gray-500">
            <Link href="/politica-privacidad">
              <span className="hover:text-orange-400 cursor-pointer transition-colors">Política de Privacidad</span>
            </Link>
            <Link href="/aviso-legal">
              <span className="hover:text-orange-400 cursor-pointer transition-colors">Términos de Uso</span>
            </Link>
            <Link href="/politica-cookies">
              <span className="hover:text-orange-400 cursor-pointer transition-colors">Cookies</span>
            </Link>
            <Link href="/sobre-nosotros">
              <span className="hover:text-orange-400 cursor-pointer transition-colors">Sobre Nosotros</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
