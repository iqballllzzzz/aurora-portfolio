import { useTranslation } from "react-i18next";
import { Github, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const { t, i18n } = useTranslation();
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-screen-xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 -z-10 flex items-center justify-center"
        >
          <div className="w-[600px] h-[600px] rounded-full bg-[#C3E41D]/10 blur-3xl" />
        </motion.div>

        <p className="text-sm uppercase tracking-[0.3em] text-[#C3E41D] mb-6 font-display" data-aos="fade-up">
          // {t("contact.kicker")}
        </p>
        <h2 data-aos="fade-up" data-aos-delay="100" className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight max-w-4xl mx-auto leading-[1.05]">
          {t("contact.title")}
        </h2>

        <motion.a
          href="mailto:hello@alexkane.dev"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 mt-12 px-8 py-5 rounded-full bg-[#C3E41D] text-black font-display font-bold text-lg group glow-lime"
        >
          {t("contact.cta")}
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </motion.a>

        <div className="mt-16 flex justify-center gap-6">
          {[
            { Icon: Github, href: "https://github.com" },
            { Icon: Twitter, href: "https://twitter.com" },
            { Icon: Linkedin, href: "https://linkedin.com" },
            { Icon: Mail, href: "mailto:hello@alexkane.dev" },
          ].map(({ Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              whileHover={{ y: -4 }}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-[#C3E41D] hover:border-[#C3E41D] transition-colors"
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>

        <footer className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Alex Kane. {t("footer.rights")}</div>
          <div className="flex items-center gap-3">
            <span>{t("footer.lang")}:</span>
            <button onClick={() => i18n.changeLanguage("en")} className={i18n.language === "en" ? "text-[#C3E41D]" : ""}>EN</button>
            <span>·</span>
            <button onClick={() => i18n.changeLanguage("id")} className={i18n.language === "id" ? "text-[#C3E41D]" : ""}>ID</button>
          </div>
        </footer>
      </div>
    </section>
  );
}
