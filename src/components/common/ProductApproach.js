const steps = [
  ["Understand", "Clarify the user problem, business goal, and practical constraints."],
  ["Shape", "Turn requirements into clear flows and practical engineering decisions."],
  ["Build", "Develop accessible interfaces and reliable integrations that are easy to maintain."],
  ["Validate", "Test the journey, work through edge cases, and respond to feedback."],
  ["Ship and improve", "Deploy, troubleshoot, and keep improving the product in use."],
];

export const ProductApproach = () => (
  <section aria-labelledby="approach-title">
    <p className="eyebrow mb-4">My approach</p>
    <h2 id="approach-title" className="section-title">How I build products</h2>
    <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map(([title, description], index) => (
        <li key={title} className="border-t border-slate-300 pt-5 dark:border-slate-700">
          <p className="mb-4 text-sm text-blue-700 dark:text-blue-300">0{index + 1}</p>
          <h3 className="text-lg">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed">{description}</p>
        </li>
      ))}
    </ol>
  </section>
);
