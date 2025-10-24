import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Workshop from "./pages/Workshop";
import ThankYou from "./pages/ThankYou";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

// Detect GitHub Pages subdirectory deploys (e.g., /vissper) and set basename dynamically.
// Custom domains and local development serve from the root path.
const isSubdirectoryDeploy = window.location.pathname.startsWith("/vissper");
const basename = isSubdirectoryDeploy ? "/vissper" : "/";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={basename}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/thankyou" element={<ThankYou />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
