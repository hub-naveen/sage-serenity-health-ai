
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Doctor from "./pages/Doctor";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/about" element={<About />} />
          
          {/* User Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/risk-predictor" element={<Dashboard />} />
          <Route path="/trainer" element={<Dashboard />} />
          <Route path="/diet-planner" element={<Dashboard />} />
          <Route path="/chatbot" element={<Dashboard />} />
          <Route path="/ocr-scanner" element={<Dashboard />} />
          <Route path="/records" element={<Dashboard />} />
          <Route path="/settings" element={<Dashboard />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/users" element={<Admin />} />
          <Route path="/admin/content" element={<Admin />} />
          <Route path="/admin/permissions" element={<Admin />} />
          <Route path="/admin/settings" element={<Admin />} />

          {/* Doctor Routes */}
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/doctor/patients" element={<Doctor />} />
          <Route path="/doctor/reports" element={<Doctor />} />
          <Route path="/doctor/treatment-plans" element={<Doctor />} />
          <Route path="/doctor/appointments" element={<Doctor />} />
          <Route path="/doctor/messages" element={<Doctor />} />
          <Route path="/doctor/settings" element={<Doctor />} />

          {/* Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
