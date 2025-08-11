import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { PageLoadWrapper, AnimatedNav, AnimatedBackground } from "@/components/AnimatedComponents";

const EQUIPMENT_TYPES = ["Elevator", "Escalator", "Travelator"];
const MODEL_NAMES = ["Prarambh", "Unnati", "Vaibhav", "Param"];
const ISSUE_TYPES = [
  "Not working",
  "Noise",
  "Emergency stop activated",
  "Malfunction of Door",
  "Maintenance",
  "Others",
];

export default function ServiceRequestForm() {
  const [form, setForm] = useState({
    clientName: "",
    companyName: "",
    phone: "",
    email: "",
    address: "",
    equipmentType: "",
    modelName: "",
    installationDate: "",
    issueTypes: [] as string[],
    otherIssue: "",
    preferredDateTime: "",
    acknowledgeCharges: false,
  });

  function handleChange<K extends keyof typeof form>(key: K, value: typeof form[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleIssue(option: string) {
    setForm((prev) => {
      const exists = prev.issueTypes.includes(option);
      const updated = exists
        ? prev.issueTypes.filter((o) => o !== option)
        : [...prev.issueTypes, option];
      return { ...prev, issueTypes: updated };
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Service Request Submitted:", form);
    alert("Your service request has been submitted. Our team will contact you shortly.");
  }

  return (
    <PageLoadWrapper>
      <AnimatedNav>
        <Navigation />
      </AnimatedNav>
      <AnimatedBackground />
      <CustomCursor />

      <section className="bg-[#0d1117] text-white min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-[#00bcd4] mb-3">
              Yatra Elevators & Escalators – Service & Maintenance Request
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Are you looking for help? Our support team is ready to assist you promptly.
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
            {/* Client Info */}
            <div>
              <label className="block mb-1 font-semibold text-gray-100">Client Name</label>
              <Input
                placeholder="Enter client name"
                value={form.clientName}
                onChange={(e) => handleChange("clientName", e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-100">Company Name (if applicable)</label>
              <Input
                placeholder="Enter company name"
                value={form.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-100">Phone Number</label>
              <Input
                placeholder="Enter phone number"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-100">Email Address</label>
              <Input
                type="email"
                placeholder="Enter email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>

            {/* Address */}
            <div>
              <label className="block mb-1 font-semibold text-gray-100">Installation Address</label>
              <Textarea
                placeholder="Enter installation address"
                value={form.address}
                onChange={(e) => handleChange("address", e.target.value)}
              />
            </div>

            {/* Equipment Type */}
            <div>
              <label className="block mb-1 font-semibold text-gray-100">Type of Equipment</label>
              <div className="flex gap-6 text-gray-200 flex-wrap">
                {EQUIPMENT_TYPES.map((type) => (
                  <label key={type} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      checked={form.equipmentType === type}
                      onChange={() => handleChange("equipmentType", type)}
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Model Name */}
            <div>
              <label className="block mb-1 font-semibold text-gray-100">Model Name</label>
              <div className="flex gap-6 text-gray-200 flex-wrap">
                {MODEL_NAMES.map((model) => (
                  <label key={model} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      checked={form.modelName === model}
                      onChange={() => handleChange("modelName", model)}
                    />
                    <span>{model}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-100">Date of Installation (approx.)</label>
              <Input
                type="date"
                value={form.installationDate}
                onChange={(e) => handleChange("installationDate", e.target.value)}
              />
            </div>

            {/* Issue Types */}
            <div>
              <label className="block mb-1 font-semibold text-gray-100">Type of Issue</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-200">
                {ISSUE_TYPES.map((issue) => (
                  <label key={issue} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={form.issueTypes.includes(issue)}
                      onChange={() => toggleIssue(issue)}
                    />
                    <span>{issue}</span>
                  </label>
                ))}
              </div>
              {form.issueTypes.includes("Others") && (
                <Input
                  placeholder="Specify Other"
                  className="mt-2"
                  value={form.otherIssue}
                  onChange={(e) => handleChange("otherIssue", e.target.value)}
                />
              )}
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-100">Preferred Service Date/Time</label>
              <Input
                type="date"
                value={form.preferredDateTime}
                onChange={(e) => handleChange("preferredDateTime", e.target.value)}
              />
            </div>

            {/* Acknowledgement */}
            <label className="flex items-center space-x-2 text-gray-200">
              <input
                type="checkbox"
                checked={form.acknowledgeCharges}
                onChange={(e) => handleChange("acknowledgeCharges", e.target.checked)}
              />
              <span>
                I acknowledge that an on-site visit may involve charges if warranty period is over / AMC expired.
              </span>
            </label>

            <Button
              type="submit"
              className="bg-[#00bcd4] hover:bg-[#00acc1] text-black font-semibold"
            >
              Request Service
            </Button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </PageLoadWrapper>
  );
}
