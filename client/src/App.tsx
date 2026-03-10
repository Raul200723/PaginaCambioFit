/*
 * CambioFit App — High-Energy Sport Tech
 * Routes: Home, Dietas, Ejercicio, Transformaciones, Blog, Recursos, Contacto
 * Layout: Navbar (fixed top) + Page content + Footer + NewsletterPopup
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsletterPopup from "./components/NewsletterPopup";
import Home from "./pages/Home";
import Dietas from "./pages/Dietas";
import Ejercicio from "./pages/Ejercicio";
import RecetaDetalle from "./pages/RecetaDetalle";
import EjercicioDetalle from "./pages/EjercicioDetalle";
import Transformaciones from "./pages/Transformaciones";
import Blog from "./pages/Blog";
import Recursos from "./pages/Recursos";
import Contacto from "./pages/Contacto";
import { useLocation } from "wouter";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/dietas" component={Dietas} />
      <Route path="/dietas/:id" component={RecetaDetalle} />
      <Route path="/ejercicio" component={Ejercicio} />
      <Route path="/ejercicio/:id" component={EjercicioDetalle} />
      <Route path="/transformaciones" component={Transformaciones} />
      <Route path="/blog" component={Blog} />
      <Route path="/recursos" component={Recursos} />
      <Route path="/contacto" component={Contacto} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster position="top-right" richColors />
          <Navbar />
          <Router />
          <Footer />
          <NewsletterPopup />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
