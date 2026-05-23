import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay, Keyboard } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, Star, GitFork } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const projects = [
  { title: "neon-dashboard", desc: "Real-time analytics dashboard with WebGL charts.", stars: 412, forks: 38, tags: ["React", "Three.js", "D3"], img: p1, href: "#" },
  { title: "pocket-mobile", desc: "Offline-first React Native finance tracker.", stars: 287, forks: 22, tags: ["RN", "Reanimated"], img: p2, href: "#" },
  { title: "agency-os", desc: "Headless CMS + agency website starter kit.", stars: 521, forks: 64, tags: ["TanStack", "Tailwind"], img: p3, href: "#" },
  { title: "eadcy-shop", desc: "Edge-rendered storefront with 3D product viewer.", stars: 192, forks: 14, tags: ["GSAP", "Three.js"], img: p4, href: "#" },
];

export default function Projects() {
  const { t } = useTranslation();
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 mb-12">
        <p className="text-sm uppercase tracking-[0.3em] text-[#C3E41D] mb-6 font-display" data-aos="fade-up">
          // {t("projects.kicker")}
        </p>
        <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight">
          {t("projects.title")}
        </h2>
      </div>

      <Swiper
        modules={[EffectCoverflow, Pagination, Autoplay, Keyboard]}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        keyboard
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        coverflowEffect={{ rotate: 30, stretch: 0, depth: 180, modifier: 1, slideShadows: false }}
        slidesPerView="auto"
        pagination={{ clickable: true }}
        className="!pb-16"
      >
        {projects.map((p) => (
          <SwiperSlide key={p.title} style={{ width: "min(560px, 86vw)" }}>
            <a
              href={p.href}
              className="group block rounded-3xl overflow-hidden border border-border bg-card relative"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                  <ArrowUpRight className="w-6 h-6 text-[#C3E41D] transition-transform group-hover:rotate-45" />
                </div>
                <p className="mt-2 text-muted-foreground">{p.desc}</p>
                <div className="mt-5 flex flex-wrap items-center gap-3 text-xs">
                  <span className="flex items-center gap-1 text-muted-foreground"><Star className="w-3.5 h-3.5 text-[#C3E41D]" />{p.stars}</span>
                  <span className="flex items-center gap-1 text-muted-foreground"><GitFork className="w-3.5 h-3.5" />{p.forks}</span>
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full border border-border text-muted-foreground">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
