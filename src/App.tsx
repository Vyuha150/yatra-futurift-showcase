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
import Opportunities from "./pages/Opportunities";

import ProductDetail from "./pages/ProductDetail";
import PassengerElevators from "./pages/PassengerElevators";
import FreightElevators from "./pages/FreightElevators";
import HospitalElevators from "./pages/HospitalElevators";
import GlassElevators from "./pages/GlassElevators";
import HomeElevators from "./pages/HomeElevators";
import CabinShowcase from "./pages/CabinShowcase";
import MovingWalkWays from "./pages/MovingWalkWays";
import PublicEscalators from "./pages/PublicEscalators";
import MRL from "./pages/MRL";
import Hydraulic from "./pages/Hydraulic"
import CommercialEscalators from "./pages/CommercialEscalators"
import ProjectsandCasestudies from "./pages/ProjectsandCasestudies";
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
          <Route path="/opportunities" element={<Opportunities />} />
          
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/passenger-elevators" element={<PassengerElevators />} />
          <Route path="/freight-elevators" element={<FreightElevators />} />
          <Route path="/hospital-elevators" element={<HospitalElevators />} />
          <Route path="/glass-elevators" element={<GlassElevators />} />
          <Route path="/home-elevators" element={<HomeElevators />} />
          <Route path="/cabins" element={<CabinShowcase />} />
          <Route path="/mrl" element={<MRL/>}/>
          <Route path="/hydraulic" element={<Hydraulic/>}/>
          <Route path="/commercial" element={<CommercialEscalators/>}/>
          <Route path="/casestudies" element={<ProjectsandCasestudies/>}/>
          <Route
            path="/moving-walkways-escalators"
            element={<MovingWalkWays />}
          />
          <Route
            path="/public-transport-escalators"
            element={<PublicEscalators />}
          />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
