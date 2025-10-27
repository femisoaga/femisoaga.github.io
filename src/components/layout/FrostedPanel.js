import React from "react";

const FrostedPanel = ({ children, className = "" }) => {
  return (
    <section
      className={`relative overflow-hidden rounded-[2.5rem] border border-blue-300/30 bg-white/80 shadow-[0_25px_80px_-35px_rgba(15,23,42,0.25)] backdrop-blur-3xl dark:border-blue-500/20 dark:bg-slate-950/55 dark:shadow-[0_40px_120px_-50px_rgba(56,189,248,0.45)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-white/40 dark:bg-slate-900/70" />
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default FrostedPanel;
