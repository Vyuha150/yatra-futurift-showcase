import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, LogIn, UserPlus, User, Settings, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const res = await fetch(`${apiUrl}/api/auth/me`, {
          method: "GET",
          credentials: "include", // Send cookies
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          setUser(null);
        }
      } catch {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Products & Solutions", href: "/projects" },
    { label: "Innovations & Tech", href: "/innovations" },
    { label: "Support & Services", href: "/support" },
    { label: "Contact", href: "/contact" },
    { label: "Career", href: "/career" },
  ];

  return (
    <div className="auth-page container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="/"
          className="flex items-center space-x-3 group cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="relative w-20 h-20 flex items-center justify-center overflow-hidden transition-all duration-300"
            whileHover={{
              scale: 1.1,
              rotate: 5,
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/Yata white.png"
              alt="Yatra Elevators Logo"
              className="w-full h-full object-contain filter brightness-110 group-hover:brightness-125 transition-all duration-300"
            />
            {/* Animated glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 rounded-lg"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.a>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex items-center space-x-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              className="relative text-foreground hover:text-neon-cyan transition-all duration-300 font-medium group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.6 + index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ y: -2 }}
            >
              <Link
                to={item.href}
                className={`relative z-10 ${
                  location.pathname === item.href ? "text-neon-cyan" : ""
                }`}
              >
                {item.label}
              </Link>
              {/* Hover underline animation */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-accent origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-neon-cyan/10 rounded-md -z-10"
                initial={{ opacity: 0, scale: 0.95 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Auth Buttons */}
        <motion.div
          className="hidden md:flex items-center space-x-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <Button
                size="sm"
                className="btn-primary flex items-center gap-2"
                onClick={() => setDropdownOpen((open) => !open)}
              >
                <User className="w-4 h-4 mr-2" />
                {user.firstName}
              </Button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-surface-glass/95 rounded-xl shadow-lg border border-surface-glass/30 z-50">
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/userprofile"
                        className="flex items-center px-4 py-2 hover:bg-surface-glass/60 transition-colors rounded-lg"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <User className="w-4 h-4 mr-2" /> Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/settings"
                        className="flex items-center px-4 py-2 hover:bg-surface-glass/60 transition-colors rounded-lg"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <Settings className="w-4 h-4 mr-2" /> Settings
                      </Link>
                    </li>
                    <li>
                      <button
                        className="flex items-center w-full px-4 py-2 hover:bg-surface-glass/60 transition-colors rounded-lg text-left"
                        onClick={() => {
                          setDropdownOpen(false);
                          window.location.href = "/signin";
                        }}
                      >
                        <LogOut className="w-4 h-4 mr-2" /> Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/signin">
                  <Button variant="outline" size="sm" className="btn-outline">
                    <LogIn className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/signup">
                  <Button size="sm" className="btn-primary">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Sign Up
                  </Button>
                </Link>
              </motion.div>
            </>
          )}
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-foreground hover:text-neon-cyan transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden border-t border-border"
      >
        <motion.div
          className="pt-4 pb-4"
          initial={{ y: -10 }}
          animate={{ y: isMenuOpen ? 0 : -10 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                className="text-foreground hover:text-neon-cyan transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  x: isMenuOpen ? 0 : -20,
                }}
                transition={{
                  duration: 0.3,
                  delay: isMenuOpen ? 0.2 + index * 0.1 : 0,
                }}
              >
                <Link to={item.href}>{item.label}</Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isMenuOpen ? 1 : 0,
                x: isMenuOpen ? 0 : -20,
              }}
              transition={{
                duration: 0.3,
                delay: isMenuOpen ? 0.2 + navItems.length * 0.1 : 0,
              }}
            >
              <div className="flex gap-3">
                {user ? (
                  <Link to="/userprofile" onClick={() => setIsMenuOpen(false)}>
                    <Button size="sm" className="btn-primary w-fit">
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="btn-outline w-fit"
                      >
                        <LogIn className="w-4 h-4 mr-2" />
                        Login
                      </Button>
                    </Link>
                    <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                      <Button size="sm" className="btn-primary w-fit">
                        <UserPlus className="w-4 h-4 mr-2" />
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Navigation;
