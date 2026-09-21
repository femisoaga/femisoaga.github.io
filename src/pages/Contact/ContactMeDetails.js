import { Calendar, Linkedin, Mail, Phone, Twitter } from "lucide-react";

const contactOptions = [
  { icon: Mail, label: "Email me", detail: "samuelsoaga@gmail.com", href: "mailto:samuelsoaga@gmail.com" },
  { icon: Calendar, label: "Book a conversation", detail: "Choose a convenient time", href: "https://cal.com/oluwafemi-soaga-tul2cb" },
  { icon: Linkedin, label: "Message on LinkedIn", detail: "Professional enquiries", href: "https://www.linkedin.com/in/oluwafemi-soaga-56875999/" },
  { icon: Phone, label: "Message on WhatsApp", detail: "Direct conversation", href: "https://wa.me/2348022093000" },
  { icon: Twitter, label: "Message on X", detail: "Quick questions", href: "https://twitter.com/messages/compose?recipient_id=femisoaga" },
];

const ContactMeDetails = () => (
  <section className="mx-auto w-full max-w-4xl" aria-labelledby="contact-options-title">
    <div className="mb-8 max-w-2xl">
      <p className="eyebrow mb-4">Direct channels</p>
      <h2 id="contact-options-title" className="text-3xl font-semibold">Choose the easiest way to reach me.</h2>
      <p className="mt-4 text-sm leading-relaxed text-[#62675c] dark:text-[#aeb5a5]">There is no pretend submission form here—each option opens a real communication channel.</p>
    </div>
    <div className="grid gap-4 sm:grid-cols-2">
      {contactOptions.map((option, index) => {
        const external = option.href.startsWith("http");
        return (
          <a key={option.label} href={option.href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className={`group flex min-h-32 items-start gap-4 rounded-[1.5rem] border p-6 text-left transition hover:-translate-y-0.5 hover:border-[#a9c52a] ${index === 0 ? "border-[#a9c52a] bg-[#dfff4f]/15" : "border-black/10 bg-[#f3f1e8] dark:border-white/10 dark:bg-[#11130f]"}`}>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#171a15] text-white dark:bg-[#dfff4f] dark:text-[#171a15]"><option.icon aria-hidden="true" className="h-5 w-5" /></span>
            <span><strong className="block text-base text-[#171a15] dark:text-white">{option.label}</strong><span className="mt-2 block text-sm text-[#62675c] dark:text-[#aeb5a5]">{option.detail}</span></span>
          </a>
        );
      })}
    </div>
  </section>
);

export default ContactMeDetails;
