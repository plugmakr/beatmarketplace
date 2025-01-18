import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Login from "@/pages/auth/Login";
import Index from "./pages/Index";
import BrowseBeats from "./pages/BrowseBeats";
import BrowseKits from "./pages/BrowseKits";
import HowItWorks from "./pages/HowItWorks";
import BeatDetails from "./pages/BeatDetails";
import KitDetails from "./pages/KitDetails";
import ArtistProfile from "./pages/ArtistProfile";
import AdminPortal from "./pages/AdminPortal";
import ArtistPortal from "./pages/ArtistPortal";
import SellerPortal from "./pages/SellerPortal";
import Pricing from "./pages/Pricing";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <TooltipProvider>
            <div className="min-h-screen bg-black">
              <Routes>
                {/* Public Routes */}
                <Route index element={<Index />} />
                <Route path="/browse-beats" element={<BrowseBeats />} />
                <Route path="/browse-kits" element={<BrowseKits />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/beats/:id" element={<BeatDetails />} />
                <Route path="/kits/:id" element={<KitDetails />} />
                <Route path="/seller/:id" element={<ArtistProfile />} />
                <Route path="/artists/:id" element={<ArtistProfile />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/pricing" element={<Pricing />} />

                {/* Protected Routes */}
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute allowedRoles={["admin"]}>
                      <AdminPortal />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/artist-portal"
                  element={
                    <ProtectedRoute allowedRoles={["artist"]}>
                      <ArtistPortal />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/seller-portal"
                  element={
                    <ProtectedRoute allowedRoles={["seller"]}>
                      <SellerPortal />
                    </ProtectedRoute>
                  }
                />

                {/* Catch-all route */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
              <Toaster />
              <Sonner />
            </div>
          </TooltipProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;