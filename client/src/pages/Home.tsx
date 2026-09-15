import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "../pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "../components/ErrorBoundary";
import { ThemeProvider } from "../contexts/ThemeContext";
import Home from "../pages/Home";
import Maintenance from "../components/Maintenance";

// 🟢 Mude para 'true' para ativar a manutenção no site
// 🔴 Mude para 'false' para exibir o site normalmente
const IS_MAINTENANCE_MODE = true;


function Router() {
  if (IS_MAINTENANCE_MODE) {
    return <Maintenance />;
  }

  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;