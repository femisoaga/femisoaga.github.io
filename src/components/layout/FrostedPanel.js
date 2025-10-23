import React from "react";

const FrostedPanel = ({ children, className = "" }) => {
  return (
    <section
      className={`relative overflow-hidden rounded-[2.5rem] border border-blue-500/20 bg-slate-950/50 shadow-[0_40px_120px_-50px_rgba(56,189,248,0.55)] backdrop-blur-3xl ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-500/20 via-slate-900/60 to-slate-950/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(59,130,246,0.35),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(129,140,248,0.35),transparent_55%)] mix-blend-screen" />
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default FrostedPanel;
