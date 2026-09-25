const signals = [
  { label: "Primary strength", value: "Frontend engineering" },
  { label: "Product depth", value: "Enterprise workflows" },
  { label: "Delivery range", value: "Web, mobile & backend" },
  { label: "Production", value: "Cloud & deployment" },
];

export const Stats = () => (
  <section className="editorial-card w-full rounded-[1.75rem] p-6 sm:p-8" aria-label="Engineering capability summary">
    <div className="grid gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
      {signals.map((signal) => (
        <div key={signal.label} className="border-l border-black/10 px-5 first:border-l-0 dark:border-white/10">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#1d4ed8] dark:text-[#93c5fd]">{signal.label}</p>
          <p className="mt-2 font-heading text-lg font-semibold leading-tight text-[#0f172a] dark:text-white">{signal.value}</p>
        </div>
      ))}
    </div>
  </section>
);
