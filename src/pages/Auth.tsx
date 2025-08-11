import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import AuthForm from "@/components/Auth/AuthForm";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { useLocation, useNavigate } from "react-router-dom";

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [otpMode, setOtpMode] = useState(false);
  const [emailForOtp, setEmailForOtp] = useState("");
  const [devOtp, setDevOtp] = useState(""); // For dev mode
  const [activeTab, setActiveTab] = useState("login");

  // Determine tab from path (/login or /signup)
  useEffect(() => {
    if (location.pathname.includes("signup")) {
      setActiveTab("signup");
    } else if (location.pathname.includes("login")) {
      setActiveTab("login");
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface-glass to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-neon-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-neon-cyan/3 to-neon-blue/3 rounded-full blur-3xl"></div>
      </div>

      <Navigation />

      <div className="flex flex-1 items-center justify-center min-h-[calc(100vh-88px)] px-4 py-8">
        <motion.div
          className="w-full max-w-md bg-surface-glass/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-surface-glass/20 relative overflow-hidden"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Glass reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl"></div>

          {/* Content */}
          <div className="relative z-10 p-8">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                {otpMode
                  ? "Verify Email"
                  : activeTab === "login"
                  ? "Welcome Back"
                  : "Create Account"}
              </h1>
              <p className="text-muted-foreground">
                {otpMode
                  ? "Enter the verification code sent to your email"
                  : activeTab === "login"
                  ? "Sign in to your account to continue"
                  : "Join us and start your journey"}
              </p>
            </motion.div>

            <Tabs
              value={otpMode ? "otp" : activeTab}
              className="w-full"
              onValueChange={(v) => {
                if (v !== "otp") {
                  setActiveTab(v);
                  navigate(v === "login" ? "/login" : "/signup");
                }
              }}
            >
              <TabsList className="w-full flex justify-between mb-8 bg-surface-glass/50 backdrop-blur-sm border border-surface-glass/30 rounded-xl p-1">
                <TabsTrigger
                  value="login"
                  className="flex-1 data-[state=active]:bg-gradient-accent data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg transition-all duration-300"
                >
                  Sign In
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  className="flex-1 data-[state=active]:bg-gradient-accent data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg transition-all duration-300"
                >
                  Sign Up
                </TabsTrigger>
                <TabsTrigger
                  value="otp"
                  className="flex-1 data-[state=active]:bg-gradient-accent data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg transition-all duration-300"
                  disabled={!otpMode}
                >
                  Verify
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-0">
                <AuthForm
                  mode="login"
                  onOtpRequest={(email, otp) => {
                    setEmailForOtp(email);
                    setDevOtp(otp);
                    setOtpMode(true);
                  }}
                />
              </TabsContent>

              <TabsContent value="signup" className="space-y-0">
                <AuthForm
                  mode="signup"
                  onOtpRequest={(email, otp) => {
                    setEmailForOtp(email);
                    setDevOtp(otp);
                    setOtpMode(true);
                  }}
                />
              </TabsContent>

              <TabsContent value="otp" className="space-y-0">
                <AuthForm
                  mode="otp"
                  email={emailForOtp}
                  devOtp={devOtp}
                  onOtpSuccess={() => {
                    setOtpMode(false);
                    setActiveTab("login");
                    navigate("/login");
                  }}
                />
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Auth;
