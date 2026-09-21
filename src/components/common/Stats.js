import { useEffect, useMemo, useRef, useState } from "react";

import { useInView } from "../../hook/useInView";
import { colors } from "./Colors";

const formatValue = (value) => {
  if (typeof value === "string") {
    const match = value.match(/([0-9]+)([+. %]*)/);
    if (!match) return { target: 0, suffix: "" };
    return { target: Number(match[1]), suffix: match[2] || "" };
  }
  return { target: Number(value) || 0, suffix: "" };
};

const AnimatedStat = ({ number, label, index }) => {
  const { target, suffix } = useMemo(() => formatValue(number), [number]);
  const [setRef, inView] = useInView(0.4);
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimatedRef.current) return undefined;

    hasAnimatedRef.current = true;
    const duration = 1100;
    const delay = index * 90;
    let startTime = null;
    let animationFrame;

    const step = (timestamp) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (elapsed < delay) {
        animationFrame = requestAnimationFrame(step);
        return;
      }

      const progress = Math.min(1, (elapsed - delay) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      setDisplayValue(value);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setDisplayValue(target);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [inView, index, target]);

  return (
    <div ref={setRef} className="group border-l border-black/10 px-5 text-left first:border-l-0 dark:border-white/10">
      <div
        className="mb-1 font-heading text-4xl font-semibold tracking-[-0.05em] text-[#171a15] dark:text-[#dfff4f] sm:text-5xl"
        aria-label={`${target}${suffix}`}
      >
        {`${displayValue}${suffix}`}
      </div>
      <div className={`${colors.text.secondary} text-xs font-bold uppercase tracking-[0.14em]`}>{label}</div>
    </div>
  );
};

export const Stats = () => {
  const stats = [
    { number: "15+", label: "Projects Delivered" },
    { number: "10+", label: "Happy Clients" },
    { number: "4+", label: "Years Experience" },
    { number: "99%", label: "Client Satisfaction" },
  ];

  return (
    <div className={`editorial-card w-full rounded-[1.75rem] p-6 sm:p-8`}>
      <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4">
        {stats.map((stat, index) => (
          <AnimatedStat key={stat.label} number={stat.number} label={stat.label} index={index} />
        ))}
      </div>
    </div>
  );
};
