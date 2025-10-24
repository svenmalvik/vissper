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

const queryClient = new QueryClient();

// Use /vissper basename only for GitHub Pages subdirectory deployment
// Custom domain (vissper.com) serves from root, so no basename needed
const basename = window.location.hostname === 'vissper.com' ? '/' : '/vissper';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={basename}>
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
