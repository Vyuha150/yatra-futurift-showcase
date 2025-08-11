import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { PageLoadWrapper, AnimatedNav, AnimatedBackground } from '@/components/AnimatedComponents';

const NATURE_OPTIONS = [
  "Distributor",
  "Dealer",
  "Retailer",
  "Consultant",
  "Builder",
  "Other",
];

export default function Consultation() {
  const [form, setForm] = useState({
    businessName: "",
    ownerName: "",
    phoneNumber: "",
    email: "",
    businessAddress: "",
    natureOfBusiness: [] as string[],
    otherNature: "",
    yearsInOperation: "",
    regionsServed: "",
    representsOtherBrands: "",
    otherBrands: "",
    reason: "",
    exclusiveRegion: false,
    acceptTerms: false,
    profileFileName: ""
  });

  function handleChange<K extends keyof typeof form>(key: K, value: typeof form[K]) {
    setForm(prev => ({ ...prev, [key]: value }));
  }

  function toggleNature(option: string) {
    setForm(prev => {
      const exists = prev.natureOfBusiness.includes(option);
      const updated = exists
        ? prev.natureOfBusiness.filter(o => o !== option)
        : [...prev.natureOfBusiness, option];
      return { ...prev, natureOfBusiness: updated };
    });
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) handleChange("profileFileName", file.name);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Form Submitted:", form);
    alert("Application submitted!");
  }

  return (
    <PageLoadWrapper>
      <AnimatedNav>
        <Navigation />
      </AnimatedNav>
      <AnimatedBackground />
      <CustomCursor />

      <section className="bg-[#0d1117] text-white min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-[#00bcd4] mb-3">
              Partner With Us
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Interested in becoming a Yatra Partner – Dealer/Distributor?
              Fill out the form below and join hands with Yatra Elevators & Escalators.
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
              <label className="block mb-1 font-semibold text-gray-100">Business Name</label>
              <Input
                placeholder="Enter your business name"
                value={form.businessName}
                onChange={(e) => handleChange("businessName", e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-100">Owner Name</label>
              <Input
                placeholder="Enter owner name"
                value={form.ownerName}
                onChange={(e) => handleChange("ownerName", e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-100">Phone Number</label>
              <Input
                placeholder="Enter phone number"
                value={form.phoneNumber}
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-100">Email</label>
              <Input
                type="email"
                placeholder="Enter email address"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-100">Business Address</label>
              <Textarea
                placeholder="Enter business address"
                value={form.businessAddress}
                onChange={(e) => handleChange("businessAddress", e.target.value)}
              />
            </div>

            {/* Nature of Business */}
            <div>
              <label className="block mb-2 font-semibold text-gray-100">Nature of Business</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {NATURE_OPTIONS.map(opt => (
                  <label key={opt} className="flex items-center space-x-2 text-gray-200">
                    <input
                      type="checkbox"
                      checked={form.natureOfBusiness.includes(opt)}
                      onChange={() => toggleNature(opt)}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
              {form.natureOfBusiness.includes("Other") && (
                <Input
                  placeholder="Specify Other"
                  className="mt-2"
                  value={form.otherNature}
                  onChange={(e) => handleChange("otherNature", e.target.value)}
                />
              )}
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-100">Years in Operation</label>
              <Input
                placeholder="Enter number of years"
                value={form.yearsInOperation}
                onChange={(e) => handleChange("yearsInOperation", e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-100">Regions Served</label>
              <Input
                placeholder="Enter regions served"
                value={form.regionsServed}
                onChange={(e) => handleChange("regionsServed", e.target.value)}
              />
            </div>

            {/* Represents other brands */}
            <div>
              <label className="block mb-2 font-semibold text-gray-100">
                Do you currently represent any other elevator brands?
              </label>
              <div className="flex gap-6 text-gray-200">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    checked={form.representsOtherBrands === "Yes"}
                    onChange={() => handleChange("representsOtherBrands", "Yes")}
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    checked={form.representsOtherBrands === "No"}
                    onChange={() => handleChange("representsOtherBrands", "No")}
                  />
                  <span>No</span>
                </label>
              </div>
              {form.representsOtherBrands === "Yes" && (
                <Input
                  placeholder="If yes, specify brands"
                  className="mt-2"
                  value={form.otherBrands}
                  onChange={(e) => handleChange("otherBrands", e.target.value)}
                />
              )}
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-100">
                Reason for Partnership / Business Goals
              </label>
              <Textarea
                placeholder="Enter your reason or goals"
                value={form.reason}
                onChange={(e) => handleChange("reason", e.target.value)}
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block mb-1 font-semibold text-gray-100">Upload Business Profile (optional)</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx,image/*"
                onChange={handleFile}
                className="text-gray-300"
              />
              {form.profileFileName && (
                <p className="mt-1 text-sm text-gray-400">
                  Selected: {form.profileFileName}
                </p>
              )}
            </div>

            {/* Checkboxes */}
            <label className="flex items-center space-x-2 text-gray-200">
              <input
                type="checkbox"
                checked={form.exclusiveRegion}
                onChange={(e) => handleChange("exclusiveRegion", e.target.checked)}
              />
              <span>I am interested in exclusive regional rights</span>
            </label>

            <label className="flex items-center space-x-2 text-gray-200">
              <input
                type="checkbox"
                checked={form.acceptTerms}
                onChange={(e) => handleChange("acceptTerms", e.target.checked)}
              />
              <span>
                I accept the terms and will follow Yatra's quality and service standards
              </span>
            </label>

            <Button type="submit" className="bg-[#00bcd4] hover:bg-[#00acc1] text-black font-semibold">
              Submit Application
            </Button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </PageLoadWrapper>
  );
}
