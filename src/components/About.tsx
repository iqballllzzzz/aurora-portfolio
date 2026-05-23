import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";

export default function About() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const counters = el.querySelectorAll<HTMLElement>("[data-count]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        counters.forEach((c) => {
          const target = Number(c.dataset.count);
          const obj = { v: 0 };
          gsap.to(obj, {
            v: target,
            duration: 1.8,
            ease: "power3.out",
            onUpdate: () => { c.textContent = Math.floor(obj.v).toString(); },
          });
        });
        io.disconnect();
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const stats = [
    { value: 5, key: "years" },
    { value: 48, key: "projects" },
    { value: 22, key: "clients" },
    { value: 1240, key: "stars" },
  ] as const;

  return (
    <section id="about" ref={ref} className="relative py-32 px-6">
      <div className="max-w-screen-xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-[#C3E41D] mb-6 font-display" data-aos="fade-up">
          // {t("about.kicker")}
        </p>
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight max-w-4xl leading-[1.05]"
        >
          {t("about.title")}
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed"
        >
          {t("about.body")}
        </p>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={s.key}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className="group rounded-2xl border border-border bg-card/50 backdrop-blur p-6 hover:border-[#C3E41D] transition-colors"
            >
              <div className="font-display text-5xl md:text-6xl text-[#C3E41D]">
                <span data-count={s.value}>0</span>
                {s.key === "stars" ? "" : "+"}
              </div>
              <div className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                {t(`about.stats.${s.key}`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
