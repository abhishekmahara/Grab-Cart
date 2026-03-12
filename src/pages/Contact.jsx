import { Button } from "@/Components/ui/button";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="min-h-screen bg-white text-black px-6 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-5xl font-bold uppercase tracking-tight mb-6">
            Contact <span className="text-blue-600">GrabCart</span>
          </h1>

          <p className="text-gray-600 max-w-md mb-10 leading-relaxed">
            Need help with orders, payments, or product information?
            Our support team is ready to assist you. Send us a message and
            we'll get back to you shortly.
          </p>

          <div className="space-y-6 text-sm">

            <div>
              <p className="font-semibold uppercase text-xs tracking-widest mb-1">
                Customer Support
              </p>
              <p className="text-gray-600">support@grabcart.com</p>
            </div>

            <div>
              <p className="font-semibold uppercase text-xs tracking-widest mb-1">
                Business Inquiries
              </p>
              <p className="text-gray-600">business@grabcart.com</p>
            </div>

            <div>
              <p className="font-semibold uppercase text-xs tracking-widest mb-1">
                Working Hours
              </p>
              <p className="text-gray-600">Mon – Sat : 9:00 AM – 8:00 PM</p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form onSubmit={handleSubmit} className="space-y-8 max-w-md">

          {/* Name */}
          <div>
            <label className="text-xs uppercase tracking-widest text-gray-500">
              Your Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black placeholder-gray-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-xs uppercase tracking-widest text-gray-500">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="mail@example.com"
              className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black placeholder-gray-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-xs uppercase tracking-widest text-gray-500">
              Message
            </label>

            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black placeholder-gray-400"
            ></textarea>
          </div>

          {/* Button */}
          <Button variant="grabcart"
            type="submit"
            className="w-full  py-5 text-sm uppercase tracking-wide "
          >
            Send Message
          </Button>

          {submitted && (
            <div className="text-sm text-green-600 font-medium">
              ✓ Message sent successfully. We'll contact you soon.
            </div>
          )}

        </form>
      </div>
    </section>
  );
};

export default Contact;