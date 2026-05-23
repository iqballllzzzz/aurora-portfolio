import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/lib/i18n";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Alex Kane — Creative Developer & Open Source Portfolio" },
      { name: "description", content: "Portfolio of Alex Kane, a creative developer building motion-rich, 3D web experiences and open source tools." },
      { property: "og:title", content: "Alex Kane — Creative Developer" },
      { property: "og:description", content: "Motion-rich, 3D web experiences and open source." },
    ],
  }),
});

function Index() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic", offset: 80 });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <h1 className="sr-only">Alex Kane — Creative Developer Portfolio</h1>
      <Hero />
      <About />
      <Marquee />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
