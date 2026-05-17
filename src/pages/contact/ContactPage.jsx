import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import {
  Mail,
  Phone,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name &&
      formData.email &&
      formData.message
    ) {
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  const faqData = [
    {
      question: "How long does shipping take?",
      answer:
        "Orders are typically delivered within 3–7 business days depending on your location.",
    },
    {
      question: "Can I return products?",
      answer:
        "Yes, eligible products can be returned within 7 days of delivery.",
    },
    {
      question: "How can I track my order?",
      answer:
        "You can track your order directly from your account orders section.",
    },
    {
      question: "Do you offer secure payments?",
      answer:
        "All payments are encrypted and securely processed.",
    },
  ];

  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <section className="bg-white text-black min-h-screen">

      {/* HERO */}
      <div className="  px-6 lg:px-20 py-20 lg:py-28">

        <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-6">
          GrabCart Support
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.95] tracking-tight max-w-6xl">
          Need Help?
          <br />
          We’re Here
          <br />
          For You.
        </h1>

        <p className="text-gray-600 mt-10 max-w-xl text-lg leading-relaxed">
          Questions about orders, payments,
          returns, or products? Contact our
          support team anytime.
        </p>
      </div>

      {/* SUPPORT GRID */}
      <div className="grid md:grid-cols-3 border-b bg-black border-gray-200 mt-10">

        <div className="p-10 lg:p-14 border-b md:border-b-0 md:border-r border-gray-700">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-100 mb-6">
            Shipping
          </p>

          <h3 className="text-3xl text-white uppercase mb-5">
            Fast Delivery
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Get updates about orders, tracking,
            delivery status, and shipping support.
          </p>
        </div>

        <div className="p-10 lg:p-14 border-b md:border-b-0 md:border-r  border-gray-700">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-100 mb-6">
            Returns
          </p>

          <h3 className="text-3xl text-white uppercase mb-5">
            Easy Returns
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Hassle-free returns and refund support
            for all eligible purchases.
          </p>
        </div>

        <div className="p-10 lg:p-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-100 mb-6">
            Payments
          </p>

          <h3 className="text-3xl text-white uppercase mb-5">
            Secure Checkout
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Need help with transactions,
            verification, or payment methods?
          </p>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="grid lg:grid-cols-2 border-b border-gray-200">

        {/* LEFT */}
        <div className="px-6 lg:px-20 py-20 border-b lg:border-b-0 lg:border-r border-gray-200">

          <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-6">
            Contact
          </p>

          <h2 className="text-5xl font-black uppercase leading-none mb-12">
            Get In
            <br />
            Touch
          </h2>

          <div className="space-y-8">

            <div className="flex items-start gap-4 border-b border-gray-200 pb-6">
              <Mail size={18} />

              <div>
                <p className="font-semibold uppercase text-sm mb-1">
                  Email
                </p>

                <p className="text-gray-600">
                  support@grabcart.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-b border-gray-200 pb-6">
              <Phone size={18} />

              <div>
                <p className="font-semibold uppercase text-sm mb-1">
                  Phone
                </p>

                <p className="text-gray-600">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-b border-gray-200 pb-6">
              <MapPin size={18} />

              <div>
                <p className="font-semibold uppercase text-sm mb-1">
                  Office
                </p>

                <p className="text-gray-600">
                  New Delhi, India
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div className="px-6 lg:px-20 py-20">

          <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-6">
            Send Message
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-10"
          >

            <div>
              <label className="text-sm uppercase font-semibold block mb-4">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border-b border-gray-300 py-4 focus:outline-none focus:border-black placeholder:text-gray-400 bg-transparent"
              />
            </div>

            <div>
              <label className="text-sm uppercase font-semibold block mb-4">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="mail@example.com"
                className="w-full border-b border-gray-300 py-4 focus:outline-none focus:border-black placeholder:text-gray-400 bg-transparent"
              />
            </div>

            <div>
              <label className="text-sm uppercase font-semibold block mb-4">
                Message
              </label>

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full border-b border-gray-300 py-4 focus:outline-none focus:border-black placeholder:text-gray-400 bg-transparent resize-none"
              />
            </div>

            <Button
              variant="grabcart"
              type="submit"
              className="w-full py-6 uppercase tracking-wider text-sm"
            >
              Send Message
            </Button>

            {submitted && (
              <div className="border border-green-500 bg-green-50 text-green-700 px-4 py-4 text-sm">
                ✓ Message sent successfully.
              </div>
            )}

          </form>
        </div>
      </div>

      {/* FAQ */}
      <div className="grid lg:grid-cols-2">

        {/* LEFT */}
        <div className="px-6 lg:px-20 py-20 border-b lg:border-b-0 lg:border-r border-gray-200">

          <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-6">
            FAQ
          </p>

          <h2 className="text-5xl font-black uppercase leading-none">
            Quick
            <br />
            Answers
          </h2>
        </div>

        {/* RIGHT */}
        <div className="px-6 lg:px-20 py-20">

          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 py-6"
            >

              <button
                onClick={() =>
                  setActiveFaq(
                    activeFaq === index ? null : index
                  )
                }
                className="w-full flex items-center justify-between text-left"
              >

                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    activeFaq === index
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {activeFaq === index && (
                <p className="text-gray-600 mt-5 leading-relaxed max-w-xl">
                  {faq.answer}
                </p>
              )}

            </div>
          ))}

        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-gray-200 px-6 lg:px-20 py-24 text-center">

        <h2 className="text-5xl md:text-7xl font-black uppercase leading-none mb-8">
          Shop With
          <br />
          Confidence
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
          Premium products. Secure payments.
          Fast support. GrabCart delivers a
          world-class shopping experience.
        </p>

       <Button
  variant="grabcart"
  onClick={() => navigate("/products")}
  className="px-10 py-6 uppercase tracking-widest"
>
  Explore Products
</Button>
      </div>

    </section>
  );
};

export default ContactPage;