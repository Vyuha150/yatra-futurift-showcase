import { useState, useEffect } from "react";
import AuthForm from "@/components/Auth/AuthForm";
import { motion } from "framer-motion";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const OTPVerification = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email") || "";
  const devOtp = searchParams.get("otp") || "";

  useEffect(() => {
    // Redirect to login if no email is provided
    if (!email) {
      navigate("/login");
    }
  }, [email, navigate]);

  return (
    <div className="auth-page min-h-screen bg-gradient-to-br from-background via-surface-glass to-background relative overflow-hidden cursor-auto">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-neon-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-neon-cyan/3 to-neon-blue/3 rounded-full blur-3xl"></div>
      </div>

      {/* Back to Sign Up Button */}
      <motion.div
        className="absolute top-6 left-6 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          to="/signup"
          className="flex items-center space-x-2 text-muted-foreground hover:text-neon-cyan transition-colors duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-medium">Back to Sign Up</span>
        </Link>
      </motion.div>

      <div className="flex items-center justify-center min-h-screen px-4 py-8">
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
                Verify Email
              </h1>
              <p className="text-muted-foreground">
                Enter the verification code sent to your email
              </p>
            </motion.div>

            <AuthForm
              mode="otp"
              email={email}
              devOtp={devOtp}
              onOtpSuccess={() => {
                navigate("/login");
              }}
            />

            <motion.div
              className="text-center mt-6 pt-6 border-t border-surface-glass/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-muted-foreground text-sm">
                Didn't receive the code?{" "}
                <button
                  onClick={() => window.location.reload()}
                  className="text-neon-cyan hover:text-neon-blue transition-colors duration-300 font-medium"
                >
                  Resend code
                </button>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OTPVerification;
