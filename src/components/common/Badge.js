import { colors } from "./Colors";
export const Badge = ({ children, icon: Icon }) => {
  return (
    <div className={`inline-flex items-center gap-2 bg-blue-50/80 dark:bg-slate-800/70 ${colors.text.secondary} px-4 py-2 rounded-full text-sm border ${colors.border.glow} shadow-lg shadow-blue-400/20`}>
      {Icon && <Icon className="w-4 h-4 text-blue-400" />}
      {children}
    </div>
  );
};
