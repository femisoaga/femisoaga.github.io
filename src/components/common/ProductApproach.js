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
    <div className="editorial-card mt-12 grid gap-8 rounded-2xl p-6 sm:p-8 lg:grid-cols-2" aria-labelledby="ai-workflow-title">
      <div>
        <p className="eyebrow mb-4">AI in my workflow</p>
        <h3 id="ai-workflow-title" className="text-2xl font-semibold sm:text-3xl">AI-assisted development. Clear engineering ownership.</h3>
        <p className="mt-4 leading-relaxed">I use AI to explore solutions, support implementation, and work through debugging and testing. I can also design, build, and maintain software independently. I own the architecture, understand the code, and verify what ships.</p>
      </div>
      <ul className="space-y-5">
        <li><h4 className="font-semibold text-slate-900 dark:text-slate-100">Give the work direction</h4><p className="mt-1 text-sm leading-relaxed">Define the problem, provide relevant context, and break implementation into reviewable tasks.</p></li>
        <li><h4 className="font-semibold text-slate-900 dark:text-slate-100">Review the implementation</h4><p className="mt-1 text-sm leading-relaxed">Understand the code, question assumptions, and adapt suggestions to the product and its existing architecture.</p></li>
        <li><h4 className="font-semibold text-slate-900 dark:text-slate-100">Validate before shipping</h4><p className="mt-1 text-sm leading-relaxed">Check behavior, accessibility, and edge cases. Use tests and browser checks to verify the result.</p></li>
      </ul>
    </div>
  </section>
);
