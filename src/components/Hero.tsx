import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import BlurText from "./BlurText";
import ThemeToggle from "./ThemeToggle";
import ThreeScene from "./ThreeScene";
import profileImg from "@/assets/profile.jpg";

export default function Hero() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !buttonRef.current.contains(e.target as Node)
      ) setIsMenuOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [isMenuOpen]);

  // Gyro / mouse parallax on photo
  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      if (!photoRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      photoRef.current.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0)`;
    };
    const onOrient = (e: DeviceOrientationEvent) => {
      if (!photoRef.current) return;
      const x = ((e.gamma ?? 0) / 45) * 20;
      const y = ((e.beta ?? 0) / 45) * 20;
      photoRef.current.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("deviceorientation", onOrient);
    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("deviceorientation", onOrient);
    };
  }, []);

  const menuItems = [
    { key: "home", href: "#hero", highlight: true },
    { key: "about", href: "#about" },
    { key: "projects", href: "#projects" },
    { key: "experience", href: "#experience" },
    { key: "education", href: "#experience" },
    { key: "writing", href: "#projects" },
    { key: "contact", href: "#contact" },
  ] as const;

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden grain">
      {/* 3D background blob */}
      <ThreeScene className="absolute inset-0 -z-0 opacity-70" />
      <div className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-b from-background/0 via-background/40 to-background" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 backdrop-blur-sm">
        <nav className="flex items-center justify-between max-w-screen-2xl mx-auto">
          <div className="relative">
            <button
              ref={buttonRef}
              type="button"
              className="p-2 transition-colors duration-300 z-50 text-muted-foreground hover:text-foreground"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen((v) => !v)}
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
            {isMenuOpen && (
              <div
                ref={menuRef}
                className="absolute top-full left-0 w-[220px] border border-border bg-popover shadow-2xl mt-2 p-3 rounded-xl z-[100] animate-in fade-in slide-in-from-top-2"
              >
                {menuItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-lg font-bold tracking-tight py-1.5 px-3 rounded-md transition-colors hover:text-[#C3E41D] ${item.highlight ? "text-[#C3E41D]" : "text-foreground"}`}
                  >
                    {t(`nav.${item.key}`)}
                  </a>
                ))}
                <div className="mt-3 flex gap-2 px-3 pt-3 border-t border-border">
                  <button onClick={() => i18n.changeLanguage("en")} className={`text-xs font-bold ${i18n.language === "en" ? "text-[#C3E41D]" : "text-muted-foreground"}`}>EN</button>
                  <button onClick={() => i18n.changeLanguage("id")} className={`text-xs font-bold ${i18n.language === "id" ? "text-[#C3E41D]" : "text-muted-foreground"}`}>ID</button>
                </div>
              </div>
            )}
          </div>

          <a
            href="#hero"
            className="text-4xl text-foreground"
            style={{ fontFamily: "'Brush Script MT','Lucida Handwriting',cursive" }}
          >A</a>

          <ThemeToggle />
        </nav>
      </header>

      <main className="relative min-h-screen flex flex-col">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
          <div className="relative text-center">
            <BlurText
              text="ALEX"
              delay={100}
              animateBy="letters"
              direction="top"
              className="font-bold text-[100px] sm:text-[140px] md:text-[180px] lg:text-[210px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap font-display"
              style={{ color: "#C3E41D" }}
            />
            <BlurText
              text="KANE"
              delay={100}
              animateBy="letters"
              direction="top"
              className="font-bold text-[100px] sm:text-[140px] md:text-[180px] lg:text-[210px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap font-display"
              style={{ color: "#C3E41D" }}
            />

            <div
              ref={photoRef}
              className="absolute top-1/2 left-1/2 z-10 will-change-transform transition-transform duration-200"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <div className="w-[65px] h-[110px] sm:w-[90px] sm:h-[152px] md:w-[110px] md:h-[185px] lg:w-[129px] lg:h-[218px] rounded-full overflow-hidden shadow-2xl ring-2 ring-[#C3E41D]/40 transition-transform duration-300 hover:scale-110 cursor-pointer glow-lime">
                <img src={profileImg} alt="Alex Kane portrait" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-20 md:bottom-28 left-1/2 -translate-x-1/2 w-full px-6">
          <div className="flex justify-center">
            <BlurText
              text={t("hero.tagline")}
              delay={100}
              animateBy="words"
              direction="top"
              className="text-[15px] sm:text-[18px] md:text-[20px] text-center text-muted-foreground hover:text-foreground transition-colors"
            />
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8" />
        </a>
      </main>
    </section>
  );
}
