import React, { useState } from "react";
import { MdOutlineLinearScale } from "react-icons/md";
import backgroundSVG from "./assets/bg.png";

const ContactMeDetails = () => { 
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    // Mocking form submission, you can replace this with actual form submission logic
    console.log(formData);

    // Show confirmation message
    setFormSubmitted(true);
  };

  return (
    <section className="mb-8 card sm:p-16 p-6 relative overflow-hidden">
    <div
      className="absolute inset-0 bg-no-repeat bg-right-top bg-contain opacity-25 dark:opacity-20 pointer-events-none"
      style={{ backgroundImage: `url(${backgroundSVG})` }}
    />
    <div className="relative z-10">
    <header className="mb-4">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <div className="mb-4">
        <MdOutlineLinearScale className="w-12 h-12 text-gray-600" />
      </div>
    </header>
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="glass rounded px-8 pt-6 pb-8 mb-4" netlify>
      <input type="hidden" name="form-name" value="contact" />

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow-sm appearance-none border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 rounded w-full py-2 px-3 text-gray-700 dark:text-slate-200 leading-tight focus:outline-none focus:ring-2 focus:ring-primary-400"
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow-sm appearance-none border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 rounded w-full py-2 px-3 text-gray-700 dark:text-slate-200 leading-tight focus:outline-none focus:ring-2 focus:ring-primary-400"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow-sm appearance-none border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 rounded w-full py-2 px-3 text-gray-700 dark:text-slate-200 leading-tight focus:outline-none focus:ring-2 focus:ring-primary-400"
            id="message"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="btn-primary"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
      {formSubmitted && (
        <div className="bg-green-100 dark:bg-green-900/30 border border-green-400/60 text-green-700 dark:text-green-300 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> Your message has been sent.</span>
        </div>
      )}
    </div>
    </div>  </section>
  );
};

export default ContactMeDetails;
