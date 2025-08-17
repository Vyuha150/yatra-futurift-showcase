import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleForgot = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const res = await fetch(`${apiUrl}/api/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage(data.error || "Failed to send OTP");
        return;
      }
      setMessage("Password reset OTP sent to your email.");
      // Optionally redirect to reset password page
      setTimeout(
        () =>
          (window.location.href =
            "/reset-password?email=" + encodeURIComponent(email)),
        1500
      );
    } catch (err) {
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="auth-page min-h-screen bg-gradient-to-br from-background via-surface-glass to-background relative overflow-hidden cursor-auto">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-neon-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-neon-cyan/3 to-neon-blue/3 rounded-full blur-3xl"></div>
      </div>
      {/* Back to Home Button */}
      <motion.div
        className="absolute top-6 left-6 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          to="/"
          className="flex items-center space-x-2 text-muted-foreground hover:text-neon-cyan transition-colors duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </motion.div>
      <div className="flex items-center justify-center min-h-screen px-4 py-8">
        <motion.div
          className="w-full max-w-md bg-surface-glass/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-surface-glass/20 relative overflow-hidden"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl"></div>
          <div className="relative z-10 p-8">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                Forgot Password
              </h1>
              <p className="text-muted-foreground">
                Enter your email to receive a password reset OTP
              </p>
            </motion.div>
            <form onSubmit={handleForgot} className="space-y-6">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-surface-glass/30 bg-surface-glass/50 backdrop-blur-sm focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground focus:outline-none caret-neon-cyan"
                required
              />
              <button
                type="submit"
                className="w-full py-3 bg-neon-cyan text-white rounded-lg font-semibold"
              >
                Send OTP
              </button>
              {message && (
                <div className="text-center text-muted-foreground mt-2">
                  {message}
                </div>
              )}
            </form>
            <div className="flex flex-col gap-2 mt-6 text-center">
              <Link
                to="/signin"
                className="text-neon-cyan hover:text-neon-blue transition-colors duration-300 font-medium"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="text-neon-cyan hover:text-neon-blue transition-colors duration-300 font-medium"
              >
                Sign Up
              </Link>
              <Link
                to="/reset-password"
                className="text-neon-cyan hover:text-neon-blue transition-colors duration-300 font-medium"
              >
                Reset Password
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ForgotPassword;
