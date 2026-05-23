import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: { home: "HOME", about: "ABOUT", projects: "PROJECTS", experience: "EXPERIENCE", education: "EDUCATION", writing: "WRITING", contact: "CONTACT" },
      hero: { tagline: "Designing human experiences in code." },
      about: {
        kicker: "About",
        title: "I build interfaces people actually enjoy.",
        body: "I'm a creative developer focused on the intersection of design, motion and engineering. Five years shipping production-grade web experiences for startups and studios across three continents.",
        stats: { years: "Years", projects: "Shipped", clients: "Clients", stars: "GH Stars" },
      },
      projects: {
        kicker: "Selected Work",
        title: "Open source & client work.",
        view: "View repo",
      },
      stack: { kicker: "Stack" },
      experience: { kicker: "Experience", title: "Where I've been." },
      contact: {
        kicker: "Get in touch",
        title: "Got a wild idea? Let's ship it.",
        cta: "Say hello",
      },
      footer: { rights: "All rights reserved.", lang: "Language" },
    },
  },
  id: {
    translation: {
      nav: { home: "BERANDA", about: "TENTANG", projects: "PROYEK", experience: "PENGALAMAN", education: "PENDIDIKAN", writing: "TULISAN", contact: "KONTAK" },
      hero: { tagline: "Merancang pengalaman manusia dalam kode." },
      about: {
        kicker: "Tentang",
        title: "Saya membangun antarmuka yang benar-benar disukai orang.",
        body: "Saya developer kreatif yang fokus pada perpaduan desain, gerak, dan rekayasa. Lima tahun mengirimkan pengalaman web kelas produksi untuk startup dan studio di tiga benua.",
        stats: { years: "Tahun", projects: "Dirilis", clients: "Klien", stars: "Bintang GH" },
      },
      projects: {
        kicker: "Karya Pilihan",
        title: "Open source & proyek klien.",
        view: "Lihat repo",
      },
      stack: { kicker: "Teknologi" },
      experience: { kicker: "Pengalaman", title: "Tempat saya pernah berkarya." },
      contact: {
        kicker: "Hubungi saya",
        title: "Punya ide gila? Mari kita wujudkan.",
        cta: "Sapa saya",
      },
      footer: { rights: "Semua hak dilindungi.", lang: "Bahasa" },
    },
  },
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
}

export default i18n;
