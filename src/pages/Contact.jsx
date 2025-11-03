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
    <div className="min-h-screen  flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white/5 backdrop-blur-lg p-10 rounded-2xl shadow-2xl border border-white/10">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          Contact <span className="text-blue-400">GrabCart</span>
        </h1>
        <p className="text-gray-300 text-center mb-8">
          Have a question, feedback, or collaboration idea? We’d love to hear from you!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-200 mb-2 text-sm font-medium">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-200 mb-2 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="mail@example.com"
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-200 mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Write your message..."
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-black via-neutral-900 to-gray-900 text-white py-3 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200 shadow-lg"
          >
            Send Message
          </button>
        </form>

        {submitted && (
          <p className="text-green-400 text-center mt-6 font-medium">
            Thank you! Your message has been sent.
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
