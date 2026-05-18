export const SITE = {
  name: "VITALPEAK",
  tagline: "Personal Training & Coaching",
  url: "https://vitalpeak-coaching.de",
  locale: "de_DE",
  trainer: "Markus Weber",
  city: "München",
  phone: "+49 89 123 456 78",
  email: "kontakt@vitalpeak-coaching.de",
  instagram: "https://instagram.com/vitalpeak_coaching",
} as const;

export const NAV_LINKS = [
  { href: "#ueber-mich", label: "Über mich" },
  { href: "#angebote", label: "Angebote" },
  { href: "#bewertungen", label: "Bewertungen" },
  { href: "#ergebnisse", label: "Ergebnisse" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export const HERO_STATS = [
  { value: "500+", label: "zufriedene Kunden" },
  { value: "10", label: "Jahre Erfahrung" },
  { value: "98%", label: "Weiterempfehlung" },
] as const;

export const SPECIALIZATIONS = [
  "Muskelaufbau",
  "Fettabbau",
  "Ernährungsberatung",
  "Online Coaching",
] as const;

export const CERTIFICATES = [
  "Certified Personal Trainer (DEA)",
  "Ernährungsberater BGN",
  "Functional Training Specialist",
  "Online Coaching Zertifikat",
] as const;

export const PRICING_PLANS = [
  {
    id: "basic",
    name: "Basic",
    price: "89",
    period: "pro Monat",
    description: "Ideal für Einsteiger mit klarem Trainingsfokus.",
    features: [
      "2 Trainingseinheiten pro Woche",
      "Individueller Trainingsplan",
      "Zugang zur Trainings-App",
      "Monatliches Progress-Check-in",
    ],
    highlighted: false,
    cta: "Basic wählen",
  },
  {
    id: "premium",
    name: "Premium",
    price: "149",
    period: "pro Monat",
    description: "Unser beliebtestes Paket für nachhaltige Transformation.",
    features: [
      "3 Trainingseinheiten pro Woche",
      "Personalisierte Ernährungsstrategie",
      "24/7 Chat-Support",
      "Wöchentliche Fortschrittsanalyse",
      "Zugang zu exklusiven Workshops",
    ],
    highlighted: true,
    cta: "Premium starten",
  },
  {
    id: "vip",
    name: "VIP Coaching",
    price: "299",
    period: "pro Monat",
    description: "Maximale Betreuung für ambitionierte Ziele.",
    features: [
      "Unbegrenzte 1:1 Sessions",
      "Vollständige Ernährungsbetreuung",
      "Prioritäts-Support & Hausbesuche",
      "Monatliche Körperanalyse",
      "Mindset & Recovery Coaching",
      "Exklusiver Zugang zu Events",
    ],
    highlighted: false,
    cta: "VIP anfragen",
  },
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Klein",
    role: "Marketing Managerin",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    rating: 5,
    text: "In nur 4 Monaten habe ich 12 kg abgenommen und fühle mich stärker als je zuvor. Markus motiviert ohne Druck – absolut empfehlenswert!",
  },
  {
    id: 2,
    name: "Thomas Berger",
    role: "Unternehmer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    rating: 5,
    text: "Das VIP Coaching hat meinen Alltag komplett verändert. Endlich ein Training, das zu meinem vollen Terminkalender passt.",
  },
  {
    id: 3,
    name: "Lisa Hoffmann",
    role: "Ärztin",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    rating: 5,
    text: "Professionell, strukturiert und wissenschaftlich fundiert. Die Ernährungsberatung war der Game-Changer für mich.",
  },
  {
    id: 4,
    name: "Daniel Richter",
    role: "Software-Entwickler",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    rating: 5,
    text: "Online Coaching funktioniert besser als erwartet. Klare Pläne, schnelles Feedback – Ergebnisse nach 8 Wochen sichtbar.",
  },
] as const;

export const BEFORE_AFTER = [
  {
    id: 1,
    name: "Michael K.",
    duration: "12 Wochen",
    labelBefore: "Alltag – vor dem Training",
    labelAfter: "Nach 12 Wochen Krafttraining",
    before: "/before-after/m1-before.jpg",
    after: "/before-after/m1-after.jpg",
  },
  {
    id: 2,
    name: "Anna M.",
    duration: "16 Wochen",
    labelBefore: "Vorher – ohne festen Sport",
    labelAfter: "Nachher – sportlich & trainiert im Studio",
    before: "/before-after/f1-before.jpg",
    after: "/before-after/f1-after.jpg",
  },
  {
    id: 3,
    name: "Jonas W.",
    duration: "20 Wochen",
    labelBefore: "Ausgangspunkt – wenig Bewegung",
    labelAfter: "Nachher – definiert & fit",
    before: "/before-after/m2-before.jpg",
    after: "/before-after/m2-after.jpg",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Für wen ist das Personal Training geeignet?",
    answer:
      "Ob Anfänger oder Fortgeschrittener – ich passe jedes Programm individuell an dein Fitnesslevel, deine Ziele und deinen Zeitplan an. Voraussetzung ist die Motivation, an dir zu arbeiten.",
  },
  {
    question: "Wo findet das Training statt?",
    answer:
      "Training ist möglich in meinem Studio in München, outdoor, bei dir zu Hause (VIP) oder vollständig online per Video-Coaching.",
  },
  {
    question: "Wie schnell sehe ich erste Ergebnisse?",
    answer:
      "Die meisten Kunden bemerken erste Veränderungen nach 3–4 Wochen. Sichtbare körperliche Transformationen zeigen sich typischerweise nach 8–12 Wochen bei konsequenter Umsetzung.",
  },
  {
    question: "Kann ich das Abo jederzeit kündigen?",
    answer:
      "Ja. Alle Pakete sind monatlich kündbar mit einer Frist von 4 Wochen zum Monatsende – transparent und ohne versteckte Kosten.",
  },
  {
    question: "Bietest du auch Ernährungspläne an?",
    answer:
      "Ja. Ab dem Premium-Paket erhältst du eine personalisierte Ernährungsstrategie. Beim VIP Coaching ist die vollständige Ernährungsbetreuung inklusive.",
  },
  {
    question: "Wie buche ich ein kostenloses Beratungsgespräch?",
    answer:
      "Nutze das Kontaktformular unten oder ruf mich direkt an. Im 30-minütigen Gespräch besprechen wir deine Ziele und finde das passende Paket.",
  },
] as const;
