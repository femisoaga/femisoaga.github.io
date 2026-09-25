import { useInView } from "../../hook/useInView";

export const FadeIn = ({ children, delay = 0, className = '' }) => {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`motion-reduce:!opacity-100 motion-reduce:!transform-none transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};