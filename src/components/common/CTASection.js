// import { ArrowRight, Github, Mail } from "lucide-react";
// import { Button } from "./Button";
// import { colors } from "./Colors";

// export const CTASection = () => {
//   return (
//     <div className={`backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-12 border ${colors.border.glow} shadow-2xl shadow-blue-900/20 w-full max-w-3xl text-center`}>
//       <h2 className={`${colors.text.primary} text-3xl md:text-4xl font-bold mb-4`}>
//         Ready to Bring Your Ideas to Life?
//       </h2>
//       <p className={`${colors.text.secondary} text-lg mb-8 max-w-2xl mx-auto`}>
//         Let's collaborate and build something amazing together. Whether it's a web app, mobile solution, or custom software—I've got you covered.
//       </p>
//       <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//         <Button variant="cta" className="text-lg">
//           <Mail className="w-5 h-5" />
//           Start a Project
//           <ArrowRight className="w-5 h-5" />
//         </Button>
//         <Button variant="ghost" className="text-lg hover:bg-blue-500/10">
//           <Github className="w-5 h-5" />
//           View My Work
//         </Button>
//       </div>
//     </div>
//   );
// };

import {
  ArrowRight,
  Calendar,
  Linkedin,
  Mail,
  MessageSquare,
  Phone,
  Twitter,
} from "lucide-react";

import FrostedPanel from "../layout/FrostedPanel";
import { Button } from "./Button";
import { colors } from "./Colors";
import { useNavigate } from "react-router-dom";


export const CTASection = () => {
    const navigate = useNavigate();
  
  const handleViewWork = () => {
    navigate("/portfolio");
  };
  return (
    <section id="contact-cta" className="w-full max-w-4xl">
      <FrostedPanel className="w-full p-8 sm:p-12 text-center">
        <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="ghost" className="hover:bg-blue-500/10" onClick={handleViewWork}>
            View My Work
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>

        <h2 className={`${colors.text.primary} text-3xl md:text-4xl font-bold mb-4`}>Ready to Bring Your Ideas to Life?</h2>
        <p className={`${colors.text.secondary} mx-auto mb-8 max-w-2xl text-base md:text-lg`}>
          X DM is recommended — I respond quickest there. Still, I&apos;m happy to hop on a call or answer a good old-fashioned email.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-10">
          <a
            href="https://cal.com/oluwafemi-soaga-tul2cb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/5 px-5 py-3 text-base text-blue-100 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-500/15"
          >
            <Calendar className="h-5 w-5" />
            Book a meet
          </a>
          <a
            href="https://twitter.com/messages/compose?recipient_id=femisoaga"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/5 px-5 py-3 text-base text-blue-100 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-500/15"
          >
            <Twitter className="h-5 w-5" />
            DM on X
          </a>
          <a
            href="https://www.linkedin.com/in/oluwafemi-soaga-56875999/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/5 px-5 py-3 text-base text-blue-100 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-500/15"
          >
            <Linkedin className="h-5 w-5" />
            DM on LinkedIn
          </a>
          <a
            href="https://wa.me/2348022093000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/5 px-5 py-3 text-base text-emerald-100 transition-all duration-300 hover:border-emerald-400/60 hover:bg-emerald-500/15"
          >
            <Phone className="h-5 w-5" />
            WhatsApp DM
          </a>
        </div>

        <div className="mx-auto w-full max-w-xl text-center flex flex-col items-center justify-center">
          <p className={`${colors.text.secondary} mb-3 flex items-center justify-center gap-2 text-sm sm:justify-start`}>
            <MessageSquare className="h-4 w-4 text-blue-400" />
            Prefer email? Drop a message here
             <a href="mailto:samuelsoaga@gmail.com" className={`${colors.text.secondary} hover:${colors.text.primary} transition-colors`}>
                    <Mail className="w-6 h-6" />
                  </a>
          </p>
         
        </div>
      </FrostedPanel>
    </section>
  );
};
