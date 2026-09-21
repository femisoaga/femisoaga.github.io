import { colors } from "./Colors";

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: `${colors.bg.button} hover:opacity-90`,
    ghost: `${colors.text.secondary} hover:${colors.text.primary}`,
    cta: `bg-[#171a15] text-white hover:bg-[#30352b] dark:bg-[#dfff4f] dark:text-[#171a15] dark:hover:bg-[#c9eb35]`,
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
