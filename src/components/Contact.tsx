"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "", //honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "", company: "" });
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 text-[#F76B1C]">
        Contact
      </h1>

      <form
        onSubmit={onSubmit}
        method="POST"
        className="max-w-xl mx-auto bg-gray-50 p-8 rounded-2xl shadow-lg space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            disabled={isSubmitting || isSubmitted}
            value={formData.name}
            onChange={onChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#F76B1C]"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            disabled={isSubmitting || isSubmitted}
            value={formData.email}
            onChange={onChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#F76B1C]"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            disabled={isSubmitting || isSubmitted}
            value={formData.message}
            onChange={onChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#F76B1C]"
          ></textarea>
        </div>
        <input
          type="text"
          name="company"
          autoComplete="off"
          value={formData.company || ""}
          onChange={onChange}
          className="hidden"
        />

        {error && (
          <p className="text-red-600 text-sm font-medium text-center">
            {error}
          </p>
        )}
        {isSubmitted && !error && (
          <p className="text-green-600 text-sm font-medium text-center">
            Thanks for reaching out! I’ll get back to you soon.
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting || isSubmitted}
          className={`w-full text-white font-semibold py-3 rounded-lg transition ${
            isSubmitting || isSubmitted
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#F76B1C] hover:bg-[#e65c00]"
          }`}
        >
          {isSubmitting
            ? "Sending..."
            : isSubmitted
            ? "Message Sent"
            : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
