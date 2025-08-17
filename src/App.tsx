import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Career from "./pages/Career";
import ProjectsSolutions from "./pages/ProjectsSolutions";
import InnovationsTech from "./pages/InnovationsTech";
import SupportServices from "./pages/SupportServices";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import OTPVerification from "./pages/OTPVerification";
import NotFound from "./pages/NotFound";
import PartnerApplicationForm from "./components/ui/PartnerApplicationForm";
import FeedbackForm from "./components/ui/FeedBackForm";
import ServiceRequestForm from "./components/ui/ServiceRequestForm";
import ClientForm from "./components/ui/ClientForm";
import PriceQuotation from "./components/ui/PriceQuotation";
import VerifyEmail from "./pages/VerifyEmail";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import UserProfile from "./pages/UserProfile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/projects" element={<ProjectsSolutions />} />
          <Route path="/innovations" element={<InnovationsTech />} />
          <Route path="/support" element={<SupportServices />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/partner-application"
            element={<PartnerApplicationForm />}
          />
          <Route path="/FeedBack" element={<FeedbackForm />} />
          <Route path="/service-request" element={<ServiceRequestForm />} />
          <Route path="/clientForm" element={<ClientForm />} />
          <Route path="/quotationform" element={<PriceQuotation />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otp-verification" element={<OTPVerification />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/userprofile" element={<UserProfile />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
