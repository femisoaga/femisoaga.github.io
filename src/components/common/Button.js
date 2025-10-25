import { colors } from "./Colors";

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: `${colors.bg.button} ${colors.text.primary} hover:bg-blue-700 shadow-lg shadow-blue-500/20`,
    ghost: `${colors.text.secondary} hover:${colors.text.primary}`,
    cta: `bg-gradient-to-r from-blue-600 to-black ${colors.text.primary} hover:from-blue-700 hover:to-black shadow-xl shadow-blue-500/30 scale-100 hover:scale-105`,
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
