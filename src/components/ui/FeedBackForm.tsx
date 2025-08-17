import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import {
  PageLoadWrapper,
  AnimatedNav,
  AnimatedBackground,
} from "@/components/AnimatedComponents";

const PRODUCT_OPTIONS = [
  "Passenger Elevator",
  "Home Elevator",
  "Freight",
  "Escalator",
  "Travelator",
  "Other",
];

export default function FeedbackForm() {
  const [form, setForm] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    productTypes: [] as string[],
    otherProduct: "",
    location: "",
    feedback: "",
    showcasePermission: "",
  });

  function handleChange<K extends keyof typeof form>(
    key: K,
    value: (typeof form)[K]
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleProduct(option: string) {
    setForm((prev) => {
      const exists = prev.productTypes.includes(option);
      const updated = exists
        ? prev.productTypes.filter((o) => o !== option)
        : [...prev.productTypes, option];
      return { ...prev, productTypes: updated };
    });
  }

  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const res = await fetch(`${apiUrl}/api/customer-feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        alert("Thank you for your feedback!");
        setForm({
          name: "",
          companyName: "",
          email: "",
          phone: "",
          productTypes: [],
          otherProduct: "",
          location: "",
          feedback: "",
          showcasePermission: "",
        });
      } else {
        const data = await res.json();
        alert(data.error || "Failed to submit feedback.");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <PageLoadWrapper>
      <AnimatedNav>
        <Navigation />
      </AnimatedNav>
      <AnimatedBackground />
      <CustomCursor />

      <section className="bg-[#0d1117] text-white min-h-screen pt-32 pb-20 auth-page">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-[#00bcd4] mb-3">
              Share Your Memorable Experience
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We give lots of priority to your feedback as it helps us to
              improve and inspire future clients.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-[#161b22] p-8 rounded-xl shadow-lg space-y-6"
          >
            <div>
              <label className="block mb-1 font-semibold text-gray-100">
                Name
              </label>
              <Input
                placeholder="Enter your name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-100">
                Company / Project Name
              </label>
              <Input
                placeholder="Enter company or project name"
                value={form.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-100">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-100">
                Phone Number (optional)
              </label>
              <Input
                placeholder="Enter phone number"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>

            {/* Product Types */}
            <div>
              <label className="block mb-2 font-semibold text-gray-100">
                Type of Product Installed
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-200">
                {PRODUCT_OPTIONS.map((opt) => (
                  <label key={opt} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={form.productTypes.includes(opt)}
                      onChange={() => toggleProduct(opt)}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
              {form.productTypes.includes("Other") && (
                <Input
                  placeholder="Specify Other"
                  className="mt-2"
                  value={form.otherProduct}
                  onChange={(e) => handleChange("otherProduct", e.target.value)}
                />
              )}
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-100">
                Location / City
              </label>
              <Input
                placeholder="Enter location or city"
                value={form.location}
                onChange={(e) => handleChange("location", e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-100">
                Your Feedback / Testimonial
              </label>
              <Textarea
                placeholder="Share your insights and experiences"
                value={form.feedback}
                onChange={(e) => handleChange("feedback", e.target.value)}
              />
            </div>

            {/* Showcase Permission */}
            <div>
              <label className="block mb-2 font-semibold text-gray-100">
                Kindly let us know whether we Can showcase your testimonial?
              </label>
              <div className="flex gap-6 text-gray-200">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    checked={form.showcasePermission === "Yes"}
                    onChange={() => handleChange("showcasePermission", "Yes")}
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    checked={form.showcasePermission === "No"}
                    onChange={() => handleChange("showcasePermission", "No")}
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            <Button
              type="submit"
              className="bg-[#00bcd4] hover:bg-[#00acc1] text-black font-semibold"
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit Feedback"}
            </Button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </PageLoadWrapper>
  );
}
