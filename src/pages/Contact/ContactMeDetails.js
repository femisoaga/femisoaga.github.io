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
    <section className="mx-auto w-full max-w-4xl text-center">
      <div className="mb-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="https://cal.com/oluwafemi-soaga-tul2cb"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-sm font-bold text-[#171a15] transition hover:border-[#a9c52a] dark:border-white/10 dark:text-white"
        >
          <Calendar className="h-5 w-5" />
          Book a meet
        </a>
        <a
          href="https://twitter.com/messages/compose?recipient_id=femisoaga"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-sm font-bold text-[#171a15] transition hover:border-[#a9c52a] dark:border-white/10 dark:text-white"
        >
          <Twitter className="h-5 w-5" />
          DM on X
        </a>
        <a
          href="https://www.linkedin.com/in/oluwafemi-soaga-56875999/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-sm font-bold text-[#171a15] transition hover:border-[#a9c52a] dark:border-white/10 dark:text-white"
        >
          <Linkedin className="h-5 w-5" />
          DM on LinkedIn
        </a>
        <a
          href="https://wa.me/2348022093000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-[#dfff4f] px-5 py-3 text-sm font-bold text-[#171a15] transition hover:-translate-y-0.5"
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
              className="w-full rounded-xl border border-black/10 bg-[#f3f1e8] px-4 py-3 text-sm text-[#171a15] placeholder:text-[#969b8d] focus:border-[#9bb51d] focus:outline-none focus:ring-2 focus:ring-[#9bb51d]/20 dark:border-white/10 dark:bg-[#11130f] dark:text-white"
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
              className="w-full rounded-xl border border-black/10 bg-[#f3f1e8] px-4 py-3 text-sm text-[#171a15] placeholder:text-[#969b8d] focus:border-[#9bb51d] focus:outline-none focus:ring-2 focus:ring-[#9bb51d]/20 dark:border-white/10 dark:bg-[#11130f] dark:text-white"
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
              className="w-full rounded-xl border border-black/10 bg-[#f3f1e8] px-4 py-3 text-sm text-[#171a15] placeholder:text-[#969b8d] focus:border-[#9bb51d] focus:outline-none focus:ring-2 focus:ring-[#9bb51d]/20 dark:border-white/10 dark:bg-[#11130f] dark:text-white"
            />
          </div>
          <button type="submit" className="w-full rounded-full bg-[#171a15] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 dark:bg-[#dfff4f] dark:text-[#171a15]">Send message</button>
        </form>

        {formSubmitted && (
          <div className="mt-4 rounded-xl border border-[#9bb51d]/30 bg-[#dfff4f]/15 px-4 py-3 text-sm text-[#56650e] dark:text-[#dfff4f]">
            Thanks for reaching out! I&apos;ll reply shortly.
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactMeDetails;
