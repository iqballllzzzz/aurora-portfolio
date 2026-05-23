import { useTranslation } from "react-i18next";

const stack = [
  "React", "TypeScript", "Three.js", "GSAP", "Framer Motion", "TanStack", "Tailwind",
  "Node.js", "Swiper", "i18next", "Radix UI", "WebGL", "Vite",
];

export default function Marquee() {
  const { t } = useTranslation();
  return (
    <section className="py-20 border-y border-border overflow-hidden bg-secondary/30">
      <p className="text-center text-sm uppercase tracking-[0.3em] text-[#C3E41D] mb-8 font-display">// {t("stack.kicker")}</p>
      <div className="flex overflow-hidden">
        <div className="flex marquee shrink-0 gap-12 pr-12">
          {[...stack, ...stack].map((s, i) => (
            <span key={i} className="font-display text-4xl md:text-6xl font-bold whitespace-nowrap text-foreground/80 hover:text-[#C3E41D] transition-colors">
              {s} <span className="text-[#C3E41D] mx-2">★</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
