import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Datenschutz",
};

export default function DatenschutzPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-20">
        <div className="container-narrow px-4 sm:px-6 lg:px-8 max-w-2xl">
          <h1 className="font-display text-4xl font-bold">Datenschutzerklärung</h1>
          <p className="mt-6 text-muted leading-relaxed">
            Dies ist ein Design- und Entwicklungsbeispiel für mein Portfolio. Eine
            vollständige Datenschutzerklärung gemäß DSGVO ist hier bewusst nicht
            hinterlegt.
          </p>
          <p className="mt-4 text-muted text-sm">
            Für den Live-Betrieb wären u. a. Verantwortlicher, Zwecke der
            Verarbeitung, Rechtsgrundlagen, Speicherdauer, Betroffenenrechte und
            Hinweise zu Cookies/Tracking einzutragen.
          </p>
          <Link href="/" className="inline-block mt-8 text-accent hover:underline">
            ← Zurück zur Startseite
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
