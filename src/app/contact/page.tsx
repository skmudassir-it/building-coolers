"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";

const serviceOptions = [
  "Select a service...",
  "Modular Duct Systems",
  "Movable Cooling Units",
  "On-Site Installation",
  "Maintenance Plans",
  "Custom Fabrication",
  "Other / Not Sure",
];

const contactDetails = [
  {
    emoji: "📞",
    label: "Phone",
    value: "(901) 555-1234",
    href: "tel:+19015551234",
  },
  {
    emoji: "✉️",
    label: "Email",
    value: "info@buildingcoolers.com",
    href: "mailto:info@buildingcoolers.com",
  },
  {
    emoji: "📍",
    label: "Address",
    value: "1234 Precision Drive, Memphis, TN 38118",
  },
  {
    emoji: "🕐",
    label: "Hours",
    value: "Mon–Fri 7:00 AM – 5:00 PM",
    sub: "Weekend & emergency by appointment",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Banner */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Contact Us"
            title="Get In Touch"
            description="Ready to start your project? Fill out the form and our team will get back to you within one business day."
            light
          />
        </div>
      </section>

      {/* Contact Layout */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left — Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-surface rounded-2xl p-10 text-center border border-gray-100">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-text mb-3">
                    Thank You!
                  </h3>
                  <p className="text-text-light max-w-md mx-auto leading-relaxed">
                    Your message has been received. One of our team members will
                    review your inquiry and get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-text mb-1.5"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-text mb-1.5"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-text mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(901) 555-0000"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow"
                      />
                    </div>

                    {/* Service Interest */}
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-text mb-1.5"
                      >
                        Service Interest <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-text bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt === "Select a service..." ? "" : opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-text mb-1.5"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow resize-y"
                    />
                  </div>

                  {/* Submit */}
                  <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Right — Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-surface rounded-2xl p-8 border border-gray-100 sticky top-24">
                <h3 className="text-lg font-bold text-text mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactDetails.map((detail) => (
                    <div key={detail.label} className="flex gap-4">
                      <span className="text-2xl flex-shrink-0">{detail.emoji}</span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-text-light mb-0.5">
                          {detail.label}
                        </p>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="text-text font-medium hover:text-accent transition-colors"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-text font-medium">{detail.value}</p>
                        )}
                        {detail.sub && (
                          <p className="text-xs text-text-light mt-0.5">{detail.sub}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="mt-8 p-8 bg-white rounded-xl border border-gray-200 flex items-center justify-center">
                  <div className="text-center text-text-light">
                    <span className="text-3xl block mb-2">🗺️</span>
                    <span className="text-xs font-medium">Memphis, TN Area</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
