import { colors } from "./Colors";

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: `${colors.bg.button} ${colors.text.primary} hover:bg-blue-700 shadow-lg shadow-blue-500/20`,
    ghost: `${colors.text.secondary} hover:${colors.text.primary}`,
    cta: `bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-500/40 scale-100 hover:scale-105`,
  };

  return (
    <button
      className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 font-semibold ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
