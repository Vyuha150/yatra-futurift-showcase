import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Mail, Lock, Shield } from "lucide-react";

const ResetPassword = () => {
  const [form, setForm] = useState({
    email: "",
    otp: "",
    newPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setMessage("");
  };

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const res = await fetch(`${apiUrl}/api/auth/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          otp: form.otp,
          newPassword: form.newPassword,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage(data.error || "Failed to reset password");
        return;
      }
      setMessage("Password reset successful!");
      setTimeout(() => navigate("/signin"), 1500);
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
          {/* Glass reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl"></div>
          <div className="relative z-10 p-8">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                Reset Password
              </h1>
              <p className="text-muted-foreground">
                Enter your email, OTP, and new password
              </p>
            </motion.div>
            <form onSubmit={handleReset} className="space-y-6">
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-surface-glass/30 bg-surface-glass/50 backdrop-blur-sm focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground focus:outline-none caret-neon-cyan"
                  required
                />
              </div>
              <div className="relative">
                <Shield className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  name="otp"
                  placeholder="OTP"
                  value={form.otp}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-surface-glass/30 bg-surface-glass/50 backdrop-blur-sm focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground focus:outline-none caret-neon-cyan"
                  required
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="newPassword"
                  placeholder="New Password"
                  value={form.newPassword}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-surface-glass/30 bg-surface-glass/50 backdrop-blur-sm focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground focus:outline-none caret-neon-cyan"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-muted-foreground"
                  onClick={() => setShowPassword((prev) => !prev)}
                  tabIndex={-1}
                >
                  {showPassword ? <Lock /> : <Lock />}
                </button>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-neon-cyan text-white rounded-lg font-semibold"
              >
                Reset Password
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
                to="/forgot-password"
                className="text-neon-cyan hover:text-neon-blue transition-colors duration-300 font-medium"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResetPassword;
