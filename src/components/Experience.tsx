import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const items = [
  { year: "2024 — Now", role: "Lead Creative Engineer", company: "Studio Nord", desc: "Building motion-rich product experiences for fintech & culture clients." },
  { year: "2022 — 2024", role: "Senior Frontend Engineer", company: "Pixel & Co.", desc: "Shipped 18 production sites, led migration to TanStack Start." },
  { year: "2020 — 2022", role: "Frontend Developer", company: "Bandung Labs", desc: "Owned design system and storefront for D2C apparel brand." },
  { year: "2019", role: "BSc Computer Science", company: "ITB", desc: "Graduated cum laude. Thesis on real-time WebGL rendering." },
];

export default function Experience() {
  const { t } = useTranslation();
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="max-w-screen-xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-[#C3E41D] mb-6 font-display" data-aos="fade-up">
          // {t("experience.kicker")}
        </p>
        <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-16">
          {t("experience.title")}
        </h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          {items.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative mb-16 md:mb-24 grid md:grid-cols-2 gap-8 md:gap-16 ${i % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"}`}
            >
              <div className="pl-12 md:pl-0 md:text-right">
                <div className="font-display text-[#C3E41D] text-sm uppercase tracking-wider">{item.year}</div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mt-2">{item.role}</h3>
                <div className="text-muted-foreground">{item.company}</div>
              </div>
              <div className="pl-12 md:pl-0">
                <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-2 w-3 h-3 rounded-full bg-[#C3E41D] glow-lime" />
                <p className="text-muted-foreground leading-relaxed max-w-md">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
