/*
 * CambioFit App — Blog de Fitness Optimizado para AdSense
 * Routes: Home, Blog, Dietas, Ejercicio, Sobre Nosotros, Políticas Legales
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Recetas from "./pages/Recetas";
import Ejercicios from "./pages/Ejercicios";
import Dietas from "./pages/Dietas";
import Ejercicio from "./pages/Ejercicio";
import SobreNosotros from "./pages/SobreNosotros";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import AvisoLegal from "./pages/AvisoLegal";
import PoliticaCookies from "./pages/PoliticaCookies";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/recetas" component={Recetas} />
      <Route path="/ejercicios" component={Ejercicios} />
      <Route path="/dietas" component={Dietas} />
      <Route path="/ejercicio" component={Ejercicio} />
      <Route path="/sobre-nosotros" component={SobreNosotros} />
      <Route path="/politica-privacidad" component={PoliticaPrivacidad} />
      <Route path="/aviso-legal" component={AvisoLegal} />
      <Route path="/politica-cookies" component={PoliticaCookies} />
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
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
