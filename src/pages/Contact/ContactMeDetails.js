import React, { useState } from "react";
import {
  Calendar,
  Linkedin,
  Mail,
  MessageSquare,
  Phone,
  Twitter,
} from "lucide-react";

import { colors } from "../../components/common/Colors";

const ContactMeDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    // Mocking form submission, you can replace this with actual form submission logic
    console.log(formData);

    // Show confirmation message
    setFormSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="mx-auto w-full max-w-3xl text-center">
      <div className="mb-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="https://cal.com/oluwafemi-soaga-tul2cb"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl border border-blue-300/30 bg-blue-200/40 px-5 py-3 text-base text-blue-700 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-300/40 dark:border-blue-500/30 dark:bg-blue-500/5 dark:text-blue-100 dark:hover:bg-blue-500/15"
        >
          <Calendar className="h-5 w-5" />
          Book a meet
        </a>
        <a
          href="https://twitter.com/messages/compose?recipient_id=femisoaga"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl border border-blue-300/30 bg-blue-200/40 px-5 py-3 text-base text-blue-700 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-300/40 dark:border-blue-500/30 dark:bg-blue-500/5 dark:text-blue-100 dark:hover:bg-blue-500/15"
        >
          <Twitter className="h-5 w-5" />
          DM on X
        </a>
        <a
          href="https://www.linkedin.com/in/oluwafemi-soaga-56875999/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl border border-blue-300/30 bg-blue-200/40 px-5 py-3 text-base text-blue-700 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-300/40 dark:border-blue-500/30 dark:bg-blue-500/5 dark:text-blue-100 dark:hover:bg-blue-500/15"
        >
          <Linkedin className="h-5 w-5" />
          DM on LinkedIn
        </a>
        <a
          href="https://wa.me/2348022093000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-200/40 px-5 py-3 text-base text-emerald-700 transition-all duration-300 hover:border-emerald-500/50 hover:bg-emerald-300/40 dark:border-emerald-500/30 dark:bg-emerald-500/5 dark:text-emerald-100 dark:hover:bg-emerald-500/15"
        >
          <Phone className="h-5 w-5" />
          WhatsApp DM
        </a>
      </div>

      <div className="mx-auto mt-10 w-full max-w-xl text-left">
        <p
          className={`${colors.text.secondary} text-sm mb-3 flex items-center gap-2 justify-center sm:justify-start`}
        >
          <MessageSquare className="h-4 w-4 text-blue-400" />
          Prefer email? Drop a message below.
          <a
            href="mailto:samuelsoaga@gmail.com"
            className={`${colors.text.secondary} transition-colors hover:${colors.text.primary}`}
          >
            <Mail className="h-5 w-5" />
          </a>
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label
              htmlFor="contact-name"
              className={`${colors.text.secondary} text-sm font-medium`}
            >
              Your Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              className="w-full rounded-xl border border-blue-500/20 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="contact-email"
              className={`${colors.text.secondary} text-sm font-medium`}
            >
              Your Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="johndoe69@xyz.com"
              className="w-full rounded-xl border border-blue-500/20 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="contact-message"
              className={`${colors.text.secondary} text-sm font-medium`}
            >
              Your message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here."
              className="w-full rounded-xl border border-blue-500/20 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
            />
          </div>
        </form>

        {formSubmitted && (
          <div className="mt-4 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-100">
            Thanks for reaching out! I&apos;ll reply shortly.
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactMeDetails;
