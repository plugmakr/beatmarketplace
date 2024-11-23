import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BrowseBeats from "./pages/BrowseBeats";
import BrowseKits from "./pages/BrowseKits";
import HowItWorks from "./pages/HowItWorks";
import BeatDetails from "./pages/BeatDetails";
import KitDetails from "./pages/KitDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/browse-beats" element={<BrowseBeats />} />
          <Route path="/browse-kits" element={<BrowseKits />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/beats/:id" element={<BeatDetails />} />
          <Route path="/kits/:id" element={<KitDetails />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;