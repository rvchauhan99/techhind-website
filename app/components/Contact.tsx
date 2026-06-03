"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { siteData } from "../data/siteData";

export default function Contact() {
  const { contact, contactSection } = siteData;
  const hasPrefilledRef = useRef(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Thank you for your message! We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (hasPrefilledRef.current) return;

    const params = new URLSearchParams(window.location.search);
    const plan = params.get("plan");
    const monthly = params.get("monthly");
    const cycle = params.get("cycle");
    const cycleTotal = params.get("cycleTotal");
    const users = params.get("users");

    if (!plan || !monthly || !cycle || !cycleTotal || !users) return;

    setFormData((prev) => {
      if (prev.message.trim().length > 0) return prev;

      const prefilledMessage = [
        "Hello techHind Team,",
        "",
        "I am interested in the following pricing plan:",
        `Plan: ${plan}`,
        `Monthly Price: ${monthly} + tax / month`,
        `Billing Cycle: ${cycle}`,
        `Cycle Total: ${cycleTotal}`,
        `User Limit: ${users}`,
        "",
        "Please contact me with the next steps.",
      ].join("\n");

      return { ...prev, message: prefilledMessage };
    });

    hasPrefilledRef.current = true;
  }, []);

  return (
    <section id="contact" className="scroll-mt-24 py-24 bg-gradient-to-b from-white via-[#f8fafc] to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,102,46,0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-900 mb-6">
              {contactSection.title.split("Touch")[0]}
              <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              {contactSection.subtitle}
            </p>
            <div className="inline-flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-emerald rounded-full"></div>
                <span>Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-emerald rounded-full"></div>
                <span>Free consultation</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#00823b] to-[#1b365d] rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft group-hover:scale-110 transition-transform">
                    <Mail className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-900 mb-1 text-lg">Email</h4>
                    <a href={`mailto:${contact.email}`} className="text-gray-600 hover:text-primary-teal transition-colors">
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#00823b] to-[#1b365d] rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft group-hover:scale-110 transition-transform">
                    <Phone className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-900 mb-1 text-lg">Phone</h4>
                    <a href={`tel:${contact.phone}`} className="text-gray-600 hover:text-primary-teal transition-colors">
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#00823b] to-[#1b365d] rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft group-hover:scale-110 transition-transform">
                    <MapPin className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-900 mb-1 text-lg">Address</h4>
                    <p className="text-gray-600">{contact.address}</p>
                  </div>
                </div>
              </div>

              {/* Social media section hidden for now; kept in code for future enablement. */}
            </div>

            {/* Contact Form */}
            <div className="glass rounded-2xl p-10 shadow-soft border border-gray-200/50 bg-white/90 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-teal focus:border-primary-teal outline-none transition-all bg-white/50"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-teal focus:border-primary-teal outline-none transition-all bg-white/50"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00823b] focus:border-[#00823b] outline-none transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-[#00823b] hover:bg-[#00662e] text-white rounded-xl hover:shadow-glow transition-all duration-200 font-bold text-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <span>Sending...</span>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

