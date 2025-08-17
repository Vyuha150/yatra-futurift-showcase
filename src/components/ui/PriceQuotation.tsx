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

interface PriceQuotationForm {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  buildingType: string;
  otherBuildingType: string;
  address: string;
  floors: string;
  loadCapacity: string;
  productType: string;
  otherProductType: string;
  modelPreference: string;
  notes: string;
  consent: boolean;
}

export default function PriceQuotation() {
  const initialForm: PriceQuotationForm = {
    fullName: "",
    company: "",
    phone: "",
    email: "",
    buildingType: "",
    otherBuildingType: "",
    address: "",
    floors: "",
    loadCapacity: "",
    productType: "",
    otherProductType: "",
    modelPreference: "",
    notes: "",
    consent: false,
  };

  const [form, setForm] = useState<PriceQuotationForm>(initialForm);

  const BUILDING_TYPES = [
    "Residential",
    "Commercial",
    "Hospital",
    "Industrial",
    "Villa",
    "Other",
  ];

  const PRODUCT_TYPES = [
    "Passenger Elevator",
    "Home Elevator",
    "Hospital Elevator",
    "Freight Elevator",
    "Capsule Elevator",
    "Escalator",
    "Travelator",
    "Other",
  ];

  const MODELS = ["Prarambh", "Unnati", "Vaibhav", "Param"];

  function handleChange<K extends keyof PriceQuotationForm>(
    key: K,
    value: PriceQuotationForm[K]
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const res = await fetch(`${apiUrl}/api/price-quotation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        alert("Your quotation request has been submitted successfully!");
        setForm(initialForm);
      } else {
        const data = await res.json();
        alert(data.error || "Failed to submit quotation request.");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    }
  }

  return (
    <PageLoadWrapper>
      <AnimatedNav>
        <Navigation />
      </AnimatedNav>
      <AnimatedBackground />
      <CustomCursor />

      <section className="bg-[#0d1117] text-white min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-[#00bcd4] mb-3">
              Get The Free Quote
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Promote your vision with our customized solutions. Fill the below
              form and our team will get in touch with a quote that perfectly
              suits your needs.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-[#161b22] p-8 rounded-xl shadow-lg space-y-6"
          >
            {/* Contact Details */}
            <SectionHeading title="Contact Details" />
            <InputField
              label="Full Name"
              value={form.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
            />
            <InputField
              label="Company / Organization"
              value={form.company}
              onChange={(e) => handleChange("company", e.target.value)}
            />
            <InputField
              label="Phone Number"
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
            <InputField
              label="Email Address"
              type="email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />

            {/* Project Information */}
            <SectionHeading title="Project Information" />
            <RadioGroup
              label="Type of Building"
              options={BUILDING_TYPES}
              value={form.buildingType}
              onChange={(val) => handleChange("buildingType", val)}
            />
            {form.buildingType === "Other" && (
              <InputField
                label="Please specify other building type"
                value={form.otherBuildingType}
                onChange={(e) =>
                  handleChange("otherBuildingType", e.target.value)
                }
              />
            )}

            <InputField
              label="Location / Address of Installation"
              value={form.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />
            <InputField
              label="Number of Floors"
              type="number"
              value={form.floors}
              onChange={(e) => handleChange("floors", e.target.value)}
            />
            <InputField
              label="Estimated Load Capacity (kg)"
              type="number"
              value={form.loadCapacity}
              onChange={(e) => handleChange("loadCapacity", e.target.value)}
            />

            <RadioGroup
              label="Type of Product Required"
              options={PRODUCT_TYPES}
              value={form.productType}
              onChange={(val) => handleChange("productType", val)}
            />
            {form.productType === "Other" && (
              <InputField
                label="Please specify other product type"
                value={form.otherProductType}
                onChange={(e) =>
                  handleChange("otherProductType", e.target.value)
                }
              />
            )}

            <RadioGroup
              label="Model Preference"
              options={MODELS}
              value={form.modelPreference}
              onChange={(val) => handleChange("modelPreference", val)}
            />

            {/* Additional Notes */}
            <SectionHeading title="Additional Notes / Requests" />
            <Textarea
              placeholder="Mention any specific requirements or customization requests"
              value={form.notes}
              onChange={(e) => handleChange("notes", e.target.value)}
            />

            {/* Consent */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(e) => handleChange("consent", e.target.checked)}
              />
              <span className="text-gray-300">
                I agree that Yatra Team can contact me regarding my inquiry.
              </span>
            </div>

            <Button
              type="submit"
              className="bg-[#00bcd4] hover:bg-[#00acc1] text-black font-semibold"
            >
              Submit Quotation Request
            </Button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </PageLoadWrapper>
  );
}

// Section heading component
function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-[#00bcd4] mb-2">{title}</h2>
      {subtitle && <p className="text-gray-400 text-sm mb-4">{subtitle}</p>}
    </div>
  );
}

// Input field component
function InputField({
  label,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div>
      <label className="block mb-1 font-semibold text-gray-100">{label}</label>
      <Input type={type} value={value} onChange={onChange} />
    </div>
  );
}

// Radio group component
function RadioGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <div>
      <label className="block mb-1 font-semibold text-gray-100">{label}</label>
      <div className="flex flex-wrap gap-4 text-gray-200">
        {options.map((opt) => (
          <label key={opt} className="flex items-center space-x-2">
            <input
              type="radio"
              checked={value === opt}
              onChange={() => onChange(opt)}
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
