/*
 * CambioFit Navbar — High-Energy Sport Tech
 * Fixed top nav with blur background, gradient CTA button, mobile hamburger menu
 * Montserrat font for nav links, orange gradient accent
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Flame, Dumbbell } from "lucide-react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/recetas", label: "Recetas" },
  { href: "/ejercicios", label: "Ejercicios" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre-nosotros", label: "Sobre Nosotros" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl gradient-brand flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <span
                className="font-black text-xl tracking-tight"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span className="gradient-brand-text">Cambio</span>
                <span className="text-gray-900">Fit</span>
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`nav-link px-3 py-2 rounded-lg text-sm transition-all ${
                    location === link.href
                      ? "text-orange-500 bg-orange-50"
                      : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">

            <button
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-gray-100 shadow-xl`}
      >
        <div className="container py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`nav-link block px-4 py-3 rounded-xl text-base transition-all ${
                  location === link.href
                    ? "text-orange-500 bg-orange-50 font-bold"
                    : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}

        </div>
      </div>
    </nav>
  );
}
