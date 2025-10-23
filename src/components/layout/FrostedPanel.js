import React from "react";

const FrostedPanel = ({ children, className = "" }) => {
  return (
    <section
      className={`relative overflow-hidden rounded-[2.5rem] border border-blue-300/30 bg-white/80 shadow-[0_25px_80px_-35px_rgba(15,23,42,0.25)] backdrop-blur-3xl dark:border-blue-500/20 dark:bg-slate-950/55 dark:shadow-[0_40px_120px_-50px_rgba(56,189,248,0.45)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-transparent dark:from-blue-500/20 dark:via-slate-900/60 dark:to-slate-950/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(148,163,184,0.25),transparent_55%)] dark:bg-[radial-gradient(circle_at_50%_-10%,rgba(59,130,246,0.35),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(165,180,252,0.3),transparent_55%)] mix-blend-screen dark:bg-[radial-gradient(circle_at_50%_120%,rgba(129,140,248,0.35),transparent_55%)]" />
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default FrostedPanel;
