import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Eye,
  EyeOff,
  CheckCircle,
  Mail,
  Lock,
  User,
  Phone,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type AuthMode = "login" | "signup" | "otp";

interface AuthFormProps {
  mode: AuthMode;
  email?: string;
  devOtp?: string;
  onOtpRequest?: (email: string, otp: string) => void;
  onOtpSuccess?: () => void;
}

const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validatePhone = (phone: string) => /^\+?\d{10,15}$/.test(phone);

const generateOtp = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

const AuthForm = ({
  mode,
  email = "",
  devOtp = "",
  onOtpRequest,
  onOtpSuccess,
}: AuthFormProps) => {
  // Common states
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: email,
    password: "",
    confirmPassword: "",
    otp: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(devOtp || "");
  const [passwordStrength, setPasswordStrength] = useState(0);

  // Password strength calculation
  const calcStrength = (pwd: string) => {
    let score = 0;
    if (pwd.length >= 6) score++;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    return score;
  };

  // Handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "password") {
      setPasswordStrength(calcStrength(e.target.value));
    }
    setError(""); // Clear errors on input change
  };

  // Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!validateEmail(form.email)) {
      setError("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }
    if (!form.password) {
      setError("Password is required.");
      setIsLoading(false);
      return;
    }

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const res = await fetch(`${apiUrl}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password }),
        credentials: "include", // Important for cookies
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.error === "Email not verified") {
          // Redirect to verify email page
          window.location.href = `/verify-email?email=${encodeURIComponent(
            form.email
          )}`;
          return;
        }
        setError(data.error || "Login failed");
        setIsLoading(false);
        return;
      }
      // No need to store token client-side, cookie is set by backend
      setSuccess("Welcome back! Login successful.");
      setIsLoading(false);
      setTimeout(() => {
        window.location.href = "/";
      }, 1200);
    } catch (err) {
      setError("Network error. Please try again.");
      setIsLoading(false);
    }
  };

  // Signup
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!form.firstName.trim()) {
      setError("First name is required.");
      setIsLoading(false);
      return;
    }
    if (!form.lastName.trim()) {
      setError("Last name is required.");
      setIsLoading(false);
      return;
    }
    if (!validatePhone(form.phone)) {
      setError("Please enter a valid phone number.");
      setIsLoading(false);
      return;
    }
    if (!validateEmail(form.email)) {
      setError("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setIsLoading(false);
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const res = await fetch(`${apiUrl}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          phone: form.phone,
          email: form.email,
          password: form.password,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Signup failed");
        setIsLoading(false);
        return;
      }
      // Redirect to verify email page
      window.location.href = `/verify-email?email=${encodeURIComponent(
        form.email
      )}`;
    } catch (err) {
      setError("Network error. Please try again.");
      setIsLoading(false);
    }
  };

  // OTP
  const handleOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (form.otp.length !== 6) {
      setError("Please enter the complete 6-digit verification code.");
      setIsLoading(false);
      return;
    }
    if (form.otp !== otp) {
      setError("Invalid verification code. Please try again.");
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      setSuccess("Email verified successfully! Your account has been created.");
      setIsLoading(false);

      setTimeout(() => {
        setSuccess("");
        // Explicit callback invocation (eslint no-unused-expressions compliant)
        if (onOtpSuccess) {
          onOtpSuccess();
        }
      }, 1500);
    }, 1000);
  };

  const getStrengthColor = (strength: number) => {
    if (strength <= 1) return "bg-red-500";
    if (strength <= 2) return "bg-yellow-500";
    if (strength <= 3) return "bg-blue-500";
    return "bg-green-500";
  };

  const getStrengthText = (strength: number) => {
    if (strength <= 1) return "Weak";
    if (strength <= 2) return "Fair";
    if (strength <= 3) return "Good";
    return "Strong";
  };

  // UI
  return (
    <motion.form
      className="space-y-6"
      onSubmit={
        mode === "login"
          ? handleLogin
          : mode === "signup"
          ? handleSignup
          : handleOtp
      }
      autoComplete="off"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {mode === "signup" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex space-x-3 mb-4">
            <div className="relative flex-1">
              <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input
                name="firstName"
                placeholder="First Name"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-surface-glass/30 bg-surface-glass/50 backdrop-blur-sm focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground focus:outline-none caret-neon-cyan"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative flex-1">
              <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input
                name="lastName"
                placeholder="Last Name"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-surface-glass/30 bg-surface-glass/50 backdrop-blur-sm focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground focus:outline-none caret-neon-cyan"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="relative">
            <Phone className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <input
              name="phone"
              placeholder="Phone Number"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-surface-glass/30 bg-surface-glass/50 backdrop-blur-sm focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground focus:outline-none caret-neon-cyan"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
        </motion.div>
      )}

      {mode !== "otp" && (
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: mode === "signup" ? 0.3 : 0.2 }}
        >
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-surface-glass/30 bg-surface-glass/50 backdrop-blur-sm focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground focus:outline-none caret-neon-cyan"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full pl-10 pr-12 py-3 rounded-xl border border-surface-glass/30 bg-surface-glass/50 backdrop-blur-sm focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground focus:outline-none caret-neon-cyan"
              value={form.password}
              onChange={handleChange}
              required
              minLength={6}
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
              onClick={() => setShowPassword((v) => !v)}
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {mode === "signup" && form.password && (
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-2">
                <div className="flex-1 h-2 bg-surface-glass/50 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full transition-all duration-500 ${getStrengthColor(
                      passwordStrength
                    )}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${(passwordStrength / 5) * 100}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground min-w-[40px]">
                  {getStrengthText(passwordStrength)}
                </span>
              </div>
            </motion.div>
          )}

          {mode === "signup" && (
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input
                name="confirmPassword"
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full pl-10 pr-12 py-3 rounded-xl border border-surface-glass/30 bg-surface-glass/50 backdrop-blur-sm focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground focus:outline-none caret-neon-cyan"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                minLength={6}
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
                onClick={() => setShowConfirm((v) => !v)}
                tabIndex={-1}
              >
                {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          )}
        </motion.div>
      )}

      {mode === "otp" && (
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center space-y-2">
            <Shield className="w-12 h-12 text-neon-cyan mx-auto mb-4" />
            <p className="text-muted-foreground">
              We've sent a 6-digit verification code to
            </p>
            <p className="font-semibold text-foreground">{email}</p>
          </div>

          <div className="relative">
            <input
              name="otp"
              placeholder="Enter 6-digit code"
              className="w-full px-4 py-4 rounded-xl border border-surface-glass/30 bg-surface-glass/50 backdrop-blur-sm focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300 text-center text-2xl font-mono tracking-widest text-foreground placeholder:text-muted-foreground focus:outline-none caret-neon-cyan"
              value={form.otp}
              onChange={handleChange}
              required
              maxLength={6}
              minLength={6}
              autoFocus
            />
          </div>

          {devOtp && (
            <motion.div
              className="bg-neon-cyan/10 border border-neon-cyan/20 rounded-xl p-4 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <CheckCircle className="inline w-5 h-5 mr-2 text-neon-cyan" />
              <span className="text-sm text-neon-cyan">
                Development Mode:{" "}
                <span className="font-mono font-bold">{devOtp}</span>
              </span>
            </motion.div>
          )}
        </motion.div>
      )}

      {error && (
        <motion.div
          className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 text-red-400 text-sm text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {error}
        </motion.div>
      )}

      {success && (
        <motion.div
          className="bg-green-500/10 border border-green-500/20 rounded-xl p-3 text-green-400 text-sm text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {success}
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 bg-gradient-to-r from-neon-cyan to-neon-blue hover:from-neon-cyan/80 hover:to-neon-blue/80 text-white font-semibold rounded-xl shadow-lg shadow-neon-cyan/25 transition-all duration-300 hover:shadow-xl hover:shadow-neon-cyan/40 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>
                {mode === "login"
                  ? "Signing in..."
                  : mode === "signup"
                  ? "Creating account..."
                  : "Verifying..."}
              </span>
            </div>
          ) : (
            <>
              {mode === "login"
                ? "Sign In"
                : mode === "signup"
                ? otpSent
                  ? "Resend Code"
                  : "Create Account"
                : "Verify Email"}
            </>
          )}
        </Button>
      </motion.div>

      {mode === "login" && (
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            to="/forgot-password"
            className="text-neon-cyan hover:text-neon-blue transition-colors duration-300 font-medium"
          >
            Forgot Password?
          </Link>
        </motion.div>
      )}
    </motion.form>
  );
};

export default AuthForm;
