"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "7dfb756a-d1ba-4c4c-9062-bd93008482a0",
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          message: formData.message,
          subject: "New Contact Form Submission from Aunova Website",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          organization: "",
          message: "",
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-white px-6 py-20 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
                <span className="text-orange-500">Modular EHR</span> Software
                <br />
                Built for Your Practice
              </h1>
              <p className="mx-auto lg:mx-0 mt-6 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl">
                Choose the features you need. Scale as you grow. From basic patient management to AI integration, Aunova builds Electronic Health Record software that adapts to your unique requirements.
              </p>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-6">
                <a
                  href="#contact"
                  className="rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-orange-600"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
                alt="Medical professional using digital healthcare software on tablet"
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features/Modules Section */}
      <section className="px-6 py-20" id="features">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Choose Your Modules
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Build your perfect EHR system with our modular approach
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Patient Information",
                description: "Secure capture and storage of patient data with easy access when you need it",
                icon: "📋",
              },
              {
                title: "AI Integration",
                description: "Leverage artificial intelligence for insights, diagnostics support, and workflow optimization",
                icon: "🤖",
              },
              {
                title: "Appointment Scheduling",
                description: "Streamline your scheduling with intelligent booking and reminder systems",
                icon: "📅",
              },
              {
                title: "Billing Integration",
                description: "Seamlessly connect with billing systems for efficient financial management",
                icon: "💳",
              },
              {
                title: "Custom Solutions",
                description: "Need something specific? We build custom modules tailored to your workflow",
                icon: "⚙️",
              },
              {
                title: "Scalable Architecture",
                description: "Start simple and add features as your practice grows",
                icon: "📈",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md"
              >
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Aunova Section */}
      <section className="bg-orange-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Why Aunova?
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                We understand healthcare because we live it. With a doctor on our team, we know the real challenges medical professionals face when capturing and accessing patient information.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-700">
                This inside perspective drives everything we build—ensuring our EHR solutions actually work the way you need them to, not the way tech companies think they should.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Doctor-Led Design",
                  description: "Built by people who understand medical workflows firsthand",
                },
                {
                  title: "True Modularity",
                  description: "Only pay for what you need, add features when you're ready",
                },
                {
                  title: "Bespoke Solutions",
                  description: "Your practice is unique—your EHR should be too",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-xl bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-2xl text-white">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                title: "Simple to Use",
                description: "Intuitive interfaces designed for busy medical professionals. Spend less time clicking, more time caring.",
              },
              {
                title: "Highly Secure",
                description: "Your patient data is protected with industry-leading security standards and compliance.",
              },
              {
                title: "Scales with You",
                description: "From solo practitioners to large clinics—grow your system as your practice expands.",
              },
            ].map((benefit) => (
              <div key={benefit.title} className="text-center">
                <h3 className="text-2xl font-bold text-orange-500">
                  {benefit.title}
                </h3>
                <p className="mt-4 text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 px-6 py-20" id="contact">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Ready to build your perfect EHR? Let's talk about your needs.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                Organization
              </label>
              <input
                type="text"
                name="organization"
                id="organization"
                value={formData.organization}
                onChange={handleChange}
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {submitted && (
                <p className="mt-4 text-center text-green-600 font-medium">
                  Thank you! We'll be in touch soon.
                </p>
              )}
              {error && (
                <p className="mt-4 text-center text-red-600 font-medium">
                  {error}
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-lg font-semibold text-orange-500">Aunova</p>
          <p className="mt-2 text-sm text-gray-600">
            Modular EHR Software Built for Healthcare Professionals
          </p>
          <p className="mt-4 text-xs text-gray-500">
            © 2026 Aunova. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
