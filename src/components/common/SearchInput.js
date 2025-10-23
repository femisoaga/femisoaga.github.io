import { Button } from "./Button";
import { colors } from "./Colors";

export const SearchInput = () => {
  return (
    <div className={`backdrop-blur-xl bg-slate-800/40 rounded-2xl p-6 border ${colors.border.glow} w-full max-w-3xl shadow-2xl shadow-blue-900/20`}>
      <textarea
        placeholder="Ask a question or start a conversation..."
        className={`w-full bg-transparent ${colors.text.primary} placeholder-slate-500 outline-none resize-none h-24`}
      />
      <div className="flex items-center justify-between mt-4">
        <Button variant="primary" className="text-sm">
          Grok 4 Fast
        </Button>
        <Button variant="ghost" className={`${colors.text.accent} text-sm`}>
          ⌘ + Enter ↑
        </Button>
      </div>
    </div>
  );
};