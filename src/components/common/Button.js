import { colors } from "./Colors";

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: `${colors.bg.button} hover:opacity-90`,
    ghost: `${colors.text.secondary} hover:${colors.text.primary}`,
    cta: `bg-[#0f172a] text-white hover:bg-[#1e293b] dark:bg-[#93c5fd] dark:text-[#0f172a] dark:hover:bg-[#60a5fa]`,
  };

  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
