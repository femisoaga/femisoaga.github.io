import React from "react";

const FrostedPanel = ({ children, className = "" }) => {
  return (
    <section
      className={`relative overflow-hidden rounded-[2rem] border border-[#cbd5e1] bg-[#ffffff]/90 shadow-[0_24px_70px_-45px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-[#101827]/90 dark:shadow-[0_30px_80px_-50px_rgba(0,0,0,0.8)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent dark:via-white/30" />
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default FrostedPanel;
