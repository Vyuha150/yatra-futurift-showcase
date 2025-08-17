import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LogOut, User, Mail, Phone, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  profile?: {
    avatar?: string;
    company?: string;
    designation?: string;
    address?: {
      street?: string;
      city?: string;
      state?: string;
      pincode?: string;
      country?: string;
    };
  };
  preferences?: {
    notifications?: boolean;
    newsletter?: boolean;
  };
  isEmailVerified?: boolean;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
};

const UserProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState<User | null>(null);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const res = await fetch(`${apiUrl}/api/auth/me`, {
          method: "GET",
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data);
          setForm(data);
        } else {
          setUser(null);
        }
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!form) return;
    const { name, value } = e.target;
    if (name.startsWith("profile.address.")) {
      const field = name.split(".").pop()!;
      setForm({
        ...form,
        profile: {
          ...form.profile,
          address: {
            ...form.profile?.address,
            [field]: value,
          },
        },
      });
    } else if (name.startsWith("profile.")) {
      const field = name.split(".").pop()!;
      setForm({
        ...form,
        profile: {
          ...form.profile,
          [field]: value,
        },
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const res = await fetch(`${apiUrl}/api/auth/me`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });
      if (res.ok) {
        const data = await res.json();
        setUser(data);
        setForm(data);
        setEditing(false);
      } else {
        // handle error
      }
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    // Optionally remove token, etc.
    navigate("/signin");
  };

  if (loading) {
    return (
      <div className="auth-page flex items-center justify-center min-h-screen cursor-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-surface-glass/90 p-8 rounded-3xl shadow-2xl border border-surface-glass/20 backdrop-blur-xl"
        >
          <div className="text-center">
            <User className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-bold mb-2">Loading profile...</h2>
          </div>
        </motion.div>
      </div>
    );
  }

  if (!user || !form) {
    return (
      <div className="auth-page flex items-center justify-center min-h-screen cursor-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-surface-glass/90 p-8 rounded-3xl shadow-2xl border border-surface-glass/20 backdrop-blur-xl"
        >
          <div className="text-center">
            <User className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-bold mb-2">No user found</h2>
            <button
              className="bg-neon-cyan text-white px-6 py-2 rounded-lg font-semibold"
              onClick={() => navigate("/signin")}
            >
              Sign In
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="auth-page flex items-center justify-center min-h-screen cursor-auto">
      <button
        className="absolute top-8 left-8 flex items-center gap-2 text-muted-foreground hover:text-neon-cyan transition-colors bg-transparent border-none outline-none z-50"
        onClick={() => navigate("/")}
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">Back to Home</span>
      </button>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-surface-glass/90 p-8 rounded-3xl shadow-2xl border border-surface-glass/20 backdrop-blur-xl w-full max-w-xl"
      >
        <div className="flex flex-col items-center gap-4">
          <User className="w-20 h-20 text-neon-cyan mb-2" />
          <h2 className="text-2xl font-bold mb-1">
            {form.firstName} {form.lastName}
          </h2>
          <div className="flex flex-col gap-2 w-full mt-4">
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              disabled={!editing}
              className="w-full px-4 py-2 rounded-lg border border-surface-glass/30 bg-surface-glass/50 focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 text-foreground placeholder:text-muted-foreground focus:outline-none caret-neon-cyan mb-2"
              placeholder="First Name"
            />
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              disabled={!editing}
              className="w-full px-4 py-2 rounded-lg border border-surface-glass/30 bg-surface-glass/50 focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 text-foreground placeholder:text-muted-foreground focus:outline-none caret-neon-cyan mb-2"
              placeholder="Last Name"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              disabled
              className="w-full px-4 py-2 rounded-lg border border-surface-glass/30 bg-surface-glass/50 focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 text-foreground placeholder:text-muted-foreground focus:outline-none caret-neon-cyan mb-2"
              placeholder="Email"
            />
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              disabled={!editing}
              className="w-full px-4 py-2 rounded-lg border border-surface-glass/30 bg-surface-glass/50 focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 text-foreground placeholder:text-muted-foreground focus:outline-none caret-neon-cyan mb-2"
              placeholder="Phone"
            />
            <input
              type="text"
              name="profile.company"
              value={form.profile?.company || ""}
              onChange={handleChange}
              disabled={!editing}
              className="w-full px-4 py-2 rounded-lg border border-surface-glass/30 bg-surface-glass/50 focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 text-foreground placeholder:text-muted-foreground focus:outline-none caret-neon-cyan mb-2"
              placeholder="Company"
            />
            <input
              type="text"
              name="profile.designation"
              value={form.profile?.designation || ""}
              onChange={handleChange}
              disabled={!editing}
              className="w-full px-4 py-2 rounded-lg border border-surface-glass/30 bg-surface-glass/50 focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 text-foreground placeholder:text-muted-foreground focus:outline-none caret-neon-cyan mb-2"
              placeholder="Designation"
            />
            <input
              type="text"
              name="profile.address.street"
              value={form.profile?.address?.street || ""}
              onChange={handleChange}
              disabled={!editing}
              className="w-full px-4 py-2 rounded-lg border border-surface-glass/30 bg-surface-glass/50 focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 text-foreground placeholder:text-muted-foreground focus:outline-none caret-neon-cyan mb-2"
              placeholder="Street"
            />
            <input
              type="text"
              name="profile.address.city"
              value={form.profile?.address?.city || ""}
              onChange={handleChange}
              disabled={!editing}
              className="w-full px-4 py-2 rounded-lg border border-surface-glass/30 bg-surface-glass/50 focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 text-foreground placeholder:text-muted-foreground focus:outline-none caret-neon-cyan mb-2"
              placeholder="City"
            />
            <input
              type="text"
              name="profile.address.state"
              value={form.profile?.address?.state || ""}
              onChange={handleChange}
              disabled={!editing}
              className="w-full px-4 py-2 rounded-lg border border-surface-glass/30 bg-surface-glass/50 focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 text-foreground placeholder:text-muted-foreground focus:outline-none caret-neon-cyan mb-2"
              placeholder="State"
            />
            <input
              type="text"
              name="profile.address.pincode"
              value={form.profile?.address?.pincode || ""}
              onChange={handleChange}
              disabled={!editing}
              className="w-full px-4 py-2 rounded-lg border border-surface-glass/30 bg-surface-glass/50 focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 text-foreground placeholder:text-muted-foreground focus:outline-none caret-neon-cyan mb-2"
              placeholder="Pincode"
            />
            <input
              type="text"
              name="profile.address.country"
              value={form.profile?.address?.country || ""}
              onChange={handleChange}
              disabled={!editing}
              className="w-full px-4 py-2 rounded-lg border border-surface-glass/30 bg-surface-glass/50 focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 text-foreground placeholder:text-muted-foreground focus:outline-none caret-neon-cyan mb-2"
              placeholder="Country"
            />
          </div>
          <div className="flex gap-4 mt-6">
            {!editing ? (
              <button
                className="bg-neon-cyan text-white px-6 py-2 rounded-lg font-semibold"
                onClick={() => setEditing(true)}
              >
                Edit
              </button>
            ) : (
              <>
                <button
                  className="bg-neon-blue text-white px-6 py-2 rounded-lg font-semibold"
                  onClick={handleSave}
                  disabled={saving}
                >
                  {saving ? "Saving..." : "Save"}
                </button>
                <button
                  className="bg-muted-foreground text-white px-6 py-2 rounded-lg font-semibold"
                  onClick={() => {
                    setEditing(false);
                    setForm(user);
                  }}
                  disabled={saving}
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UserProfile;
