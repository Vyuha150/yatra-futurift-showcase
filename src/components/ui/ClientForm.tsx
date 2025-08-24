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

export default function CustomerRequirementForm() {
  const initialForm = {
    fullName: "",
    occupation: "",
    location: "",
    email: "",
    mobile: "",

    liftType: "",
    otherLiftType: "",
    purpose: "",
    otherPurpose: "",

    style: "",
    doorType: "",
    capacity: "",
    cabinSize: "",
    preferredColor: "",
    preferredTheme: "",
    cabinLighting: "",
    floorMaterial: "",
    otherFloorMaterial: "",

    floors: "",
    travelHeight: "",
    pitDepth: "",
    overheadSpace: "",
    powerSupply: "",
    preferredSpeed: "",

    features: [] as string[],
    otherFeature: "",
    amcRequired: "",

    budget: "",
    timeline: "",
    comments: "",
  };

  const [form, setForm] = useState(initialForm);

  const LIFT_TYPES = [
    "Passenger Lift",
    "Home Elevator",
    "Hospital Lift",
    "Freight/Service Lift",
    "Escalator",
    "Others",
  ];

  const PURPOSES = [
    "Residential Building",
    "Commercial Building",
    "Industrial Use",
    "Public Infrastructure (Mall, Railway Station, etc.)",
    "Private Villa",
    "Other",
  ];

  const STYLES = [
    "Stainless Steel (Matte/Glossy)",
    "Glass Cabin",
    "Powder Coated",
    "Designer Finish (Your own ideology)",
    "No preference",
  ];

  const DOOR_TYPES = [
    "Manual",
    "Automatic Sliding",
    "Telescopic",
    "Center Opening",
    "Not Sure",
  ];

  const LIGHTING = ["Warm", "Cool", "Ambient"];

  const FLOOR_MATERIALS = ["Vinyl", "Granite/Marble", "Wooden Finish", "Other"];

  const POWER_SUPPLY = ["Single Phase", "Three Phase", "Not Confirmed Yet"];

  const SPEEDS = ["0.5 m/s", "1.0 m/s", "Other", "No preference"];

  const FEATURES = [
    "Automatic Rescue Device (ARD)",
    "Power Backup",
    "Intercom or Alarm System",
    "CCTV Surveillance Inside Lift",
    "Access Control or Key Lock",
    "Energy Efficient Operation",
    "Braille Buttons / Voice Announcements",
    "Fire-rated Doors",
    "Earthquake Resistant Mechanism",
    "Others",
  ];

  const BUDGETS = [
    "Below ₹5 Lakhs",
    "₹5–10 Lakhs",
    "₹10–20 Lakhs",
    "₹20 Lakhs and above",
    "Not yet finalized",
  ];

  const TIMELINES = [
    "Within 1 Month",
    "1–3 Months",
    "3–6 Months",
    "More than 6 Months",
  ];

  function handleChange<K extends keyof typeof form>(
    key: K,
    value: (typeof form)[K]
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleFeature(option: string) {
    setForm((prev) => {
      const exists = prev.features.includes(option);
      const updated = exists
        ? prev.features.filter((o) => o !== option)
        : [...prev.features, option];
      return { ...prev, features: updated };
    });
  }

  function validateForm() {
    if (!form.fullName.trim()) return "Full Name is required.";
    if (!form.mobile.trim()) return "Mobile number is required.";
    if (!form.liftType) return "Please select Lift Type.";
    if (form.liftType === "Others" && !form.otherLiftType.trim())
      return "Please specify Other Lift Type.";
    return null;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      alert(error);
      return;
    }
    console.log("Customer Requirement Submitted:", form);
    alert("Your requirement has been submitted. We will contact you soon.");
    setForm(initialForm);
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-[#00bcd4] mb-3">
              Customer Requirement Form
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Please fill out your requirements. We will use this to suggest the
              best possible solution for your project.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-[#161b22] p-8 rounded-xl shadow-lg space-y-6"
          >
            {/* Basic Info */}
            <SectionHeading title="Basic Information" />
            <InputField
              label="Full Name"
              value={form.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
            />
            <InputField
              label="Occupation"
              value={form.occupation}
              onChange={(e) => handleChange("occupation", e.target.value)}
            />
            <InputField
              label="Location (Project Address)"
              value={form.location}
              onChange={(e) => handleChange("location", e.target.value)}
            />
            <InputField
              label="Email ID"
              type="email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            <InputField
              label="Mobile Number"
              value={form.mobile}
              onChange={(e) => handleChange("mobile", e.target.value)}
            />

            {/* Section 1 */}
            <SectionHeading
              title="Your Need (Y - Your Ideas)"
              subtitle="Help us understand your important needs."
            />
            <RadioGroup
              label="What type of vertical transportation are you interested in?"
              options={LIFT_TYPES}
              value={form.liftType}
              onChange={(val) => handleChange("liftType", val)}
            />
            {form.liftType === "Others" && (
              <Input
                placeholder="Please specify other lift type"
                value={form.otherLiftType}
                onChange={(e) => handleChange("otherLiftType", e.target.value)}
              />
            )}
            <RadioGroup
              label="Purpose"
              options={PURPOSES}
              value={form.purpose}
              onChange={(val) => handleChange("purpose", val)}
            />
            {form.purpose === "Other" && (
              <Input
                placeholder="Please specify other purpose"
                value={form.otherPurpose}
                onChange={(e) => handleChange("otherPurpose", e.target.value)}
              />
            )}

            {/* Section 2 */}
            <SectionHeading
              title="Appearance Preferences (A - Appearance)"
              subtitle="Let’s bring your idea into reality."
            />
            <RadioGroup
              label="Preferred Style"
              options={STYLES}
              value={form.style}
              onChange={(val) => handleChange("style", val)}
            />
            <RadioGroup
              label="Door Type Preference"
              options={DOOR_TYPES}
              value={form.doorType}
              onChange={(val) => handleChange("doorType", val)}
            />
            <InputField
              label="Capacity (Kg / Persons)"
              value={form.capacity}
              onChange={(e) => handleChange("capacity", e.target.value)}
            />
            <InputField
              label="Cabin Size (L x W)"
              value={form.cabinSize}
              onChange={(e) => handleChange("cabinSize", e.target.value)}
            />
            <InputField
              label="Preferred Color Scheme"
              value={form.preferredColor}
              onChange={(e) => handleChange("preferredColor", e.target.value)}
            />
            <InputField
              label="Preferred Theme / Style (e.g., modern, luxury, minimal)"
              value={form.preferredTheme}
              onChange={(e) => handleChange("preferredTheme", e.target.value)}
            />
            <RadioGroup
              label="Cabin Lighting"
              options={LIGHTING}
              value={form.cabinLighting}
              onChange={(val) => handleChange("cabinLighting", val)}
            />
            <RadioGroup
              label="Floor Material"
              options={FLOOR_MATERIALS}
              value={form.floorMaterial}
              onChange={(val) => handleChange("floorMaterial", val)}
            />
            {form.floorMaterial === "Other" && (
              <Input
                placeholder="Specify other floor material"
                value={form.otherFloorMaterial}
                onChange={(e) =>
                  handleChange("otherFloorMaterial", e.target.value)
                }
              />
            )}

            {/* Section 3 */}
            <SectionHeading
              title="Technical Details (T - Technical)"
              subtitle="Key inputs that affect design & installation."
            />
            <InputField
              label="Total Number of Floors"
              value={form.floors}
              onChange={(e) => handleChange("floors", e.target.value)}
            />
            <InputField
              label="Travel Height (approximate, in meters)"
              value={form.travelHeight}
              onChange={(e) => handleChange("travelHeight", e.target.value)}
            />
            <InputField
              label="Pit Depth Available (mm)"
              value={form.pitDepth}
              onChange={(e) => handleChange("pitDepth", e.target.value)}
            />
            <InputField
              label="Overhead Space Available (mm)"
              value={form.overheadSpace}
              onChange={(e) => handleChange("overheadSpace", e.target.value)}
            />
            <RadioGroup
              label="Power Supply"
              options={POWER_SUPPLY}
              value={form.powerSupply}
              onChange={(val) => handleChange("powerSupply", val)}
            />
            <RadioGroup
              label="Preferred Speed"
              options={SPEEDS}
              value={form.preferredSpeed}
              onChange={(val) => handleChange("preferredSpeed", val)}
            />

            {/* Section 4 */}
            <SectionHeading
              title="Reliability & Safety (R - Reliability)"
              subtitle="Promising peace of mind with reliable systems."
            />
            <CheckboxGroup
              label="Features"
              options={FEATURES}
              values={form.features}
              toggle={toggleFeature}
            />
            {form.features.includes("Others") && (
              <Input
                placeholder="Specify other feature"
                value={form.otherFeature}
                onChange={(e) => handleChange("otherFeature", e.target.value)}
              />
            )}
            <RadioGroup
              label="AMC Required (Annual Maintenance Contract)"
              options={["Yes", "No", "Not Sure"]}
              value={form.amcRequired}
              onChange={(val) => handleChange("amcRequired", val)}
            />

            {/* Section 5 */}
            <SectionHeading title="Additional Notes (A - Additional Inputs)" />
            <RadioGroup
              label="Tentative Budget Range"
              options={BUDGETS}
              value={form.budget}
              onChange={(val) => handleChange("budget", val)}
            />
            <RadioGroup
              label="Expected Timeline"
              options={TIMELINES}
              value={form.timeline}
              onChange={(val) => handleChange("timeline", val)}
            />
            <Textarea
              placeholder="Any other specific requirement or comment"
              value={form.comments}
              onChange={(e) => handleChange("comments", e.target.value)}
            />

            <Button
              type="submit"
              className="bg-[#00bcd4] hover:bg-[#00acc1] text-black font-semibold"
            >
              Submit Requirement
            </Button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </PageLoadWrapper>
  );
}

// Reusable section heading
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

// TypeScript interfaces for helper components
interface InputFieldProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface RadioGroupProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

interface CheckboxGroupProps {
  label: string;
  options: string[];
  values: string[];
  toggle: (option: string) => void;
}

// Helper Components
function InputField({
  label,
  type = "text",
  value,
  onChange,
}: InputFieldProps) {
  return (
    <div>
      <label className="block mb-1 font-semibold text-gray-100">{label}</label>
      <Input type={type} value={value} onChange={onChange} />
    </div>
  );
}

function RadioGroup({ label, options, value, onChange }: RadioGroupProps) {
  return (
    <div>
      <label className="block mb-1 font-semibold text-gray-100">{label}</label>
      <div className="flex flex-wrap gap-4 text-gray-200">
        {options.map((opt: string) => (
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

function CheckboxGroup({ label, options, values, toggle }: CheckboxGroupProps) {
  return (
    <div>
      <label className="block mb-1 font-semibold text-gray-100">{label}</label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-200">
        {options.map((opt: string) => (
          <label key={opt} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={values.includes(opt)}
              onChange={() => toggle(opt)}
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
