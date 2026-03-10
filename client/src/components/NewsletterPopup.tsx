/*
 * CambioFit Newsletter Popup — aparece después de 8 segundos
 * Soft popup con glassmorphism y CTA de suscripción
 */
import { useState, useEffect } from "react";
import { X, Flame, Gift } from "lucide-react";
import { toast } from "sonner";

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const alreadyDismissed = localStorage.getItem("cf_popup_dismissed");
    if (alreadyDismissed) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setDismissed(true);
    localStorage.setItem("cf_popup_dismissed", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("¡Bienvenido a CambioFit!", {
        description: "Tu plan gratuito está en camino a tu correo.",
      });
      handleDismiss();
    }
  };

  if (!isVisible || dismissed) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleDismiss}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-fade-up">
        {/* Top gradient bar */}
        <div className="gradient-brand h-2" />

        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors z-10"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          {/* Icon */}
          <div className="w-16 h-16 gradient-brand rounded-2xl flex items-center justify-center mb-5 mx-auto shadow-lg">
            <Gift className="w-8 h-8 text-white" />
          </div>

          <h2
            className="text-2xl font-black text-center text-gray-900 mb-2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            ¡Plan Gratis Para Ti!
          </h2>
          <p className="text-gray-500 text-center text-sm mb-6">
            Suscríbete y recibe tu <strong>plan de dieta y ejercicio personalizado</strong> completamente gratis + acceso a nuestra comunidad exclusiva.
          </p>

          {/* Benefits */}
          <ul className="space-y-2 mb-6">
            {[
              "Plan de dieta de 4 semanas",
              "Rutina de ejercicio en casa",
              "Guía de macronutrientes",
              "Acceso a la comunidad privada",
            ].map((benefit) => (
              <li key={benefit} className="flex items-center gap-2 text-sm text-gray-700">
                <Flame className="w-4 h-4 text-orange-500 shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-900 placeholder-gray-400"
              required
            />
            <button
              type="submit"
              className="btn-gradient w-full py-3 rounded-xl font-bold text-base"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Descargar Mi Plan Gratis
            </button>
          </form>

          <p className="text-xs text-gray-400 text-center mt-3">
            Sin spam. Cancela cuando quieras.
          </p>
        </div>
      </div>
    </div>
  );
}
