# VITALPEAK – Personal Trainer Website

Premium Portfolio-Website für einen Personal Trainer / Fitness Coach. Vollständig auf Deutsch, mit Dark/Light Mode, Animationen und responsivem Design.

## Tech Stack

- Next.js 15 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion
- Embla Carousel
- next-themes

## Entwicklung starten

```bash
npm install
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000).

## Production Build & Deployment (Cloudflare)

Die Seite wird als statischer Export (`out/`) gebaut und über Cloudflare Workers (Static Assets) ausgeliefert.

```bash
npm run build     # statischer Export nach out/
npm run preview   # lokal mit Cloudflare-Runtime testen (wrangler dev)
npm run deploy    # Build + Deployment via wrangler
```

## Projektstruktur

```
src/
├── app/              # Seiten, Layout, Metadata, Loading
├── components/
│   ├── layout/       # Navbar, Footer, PageLoader
│   ├── sections/     # Hero, About, Pricing, …
│   └── ui/           # Button, Accordion, ScrollReveal, …
└── lib/              # Konstanten (deutscher Content), Utils
```

## Hinweis

Dies ist ein Design- und Entwicklungsbeispiel für ein Portfolio. Impressum und Datenschutz sind Platzhalter ohne ausgefüllte Pflichtangaben.
