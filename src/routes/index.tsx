import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight, Instagram } from "lucide-react";
import profileImg from "../assets/profile.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Milena Culonaa" },
      { name: "description", content: "Modelo — meus conteúdos no primeiro link" },
      { property: "og:title", content: "Milena Culonaa" },
      { property: "og:description", content: "Modelo — meus conteúdos no primeiro link" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-center">
      <section className="relative mx-auto min-h-[33.125rem] max-w-3xl" aria-label="Perfil de Milena Culonaa">
        <div className="relative h-40 overflow-hidden bg-banner bg-cover bg-center md:rounded-b-2xl" />

        <div className="relative -mt-20 px-6 pb-12">
          <div className="animate-profile-reveal relative mx-auto mb-8 size-40">
            <img src={profileImg} alt="Milena Culonaa" className="size-40 rounded-full border-4 border-surface bg-surface object-cover shadow-profile" />
          </div>

          <div className="animate-profile-reveal flex items-center justify-center" style={{ animationDelay: "120ms" }}>
            <h1 className="mr-2 text-2xl font-bold leading-none">Milena Culonaa</h1>
            <VerifiedBadge />
          </div>
          <p className="animate-profile-reveal mb-8 mt-4 text-[0.9rem] uppercase leading-[1.125rem] opacity-70" style={{ animationDelay: "220ms" }}>
            Modelo <span className="opacity-50">·</span> Meus conteúdos no primeiro link
          </p>

          <div className="grid gap-4">
            <a href="https://t.me/milenaculonaabot" className="animate-link-reveal flex h-[3.25rem] items-center rounded-full border-2 border-primary bg-surface p-2 text-sm font-bold text-surface-foreground transition-transform hover:scale-[1.015] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring" rel="noreferrer">
              <span className="mr-4 grid size-8 shrink-0 place-items-center rounded-full text-telegram"><TelegramMark /></span>
              <span>Conteúdo Exclusivo</span>
              <ChevronRight className="ml-auto mr-3 size-[1.125rem]" aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/milena.culonaa" className="animate-link-reveal flex h-[3.25rem] items-center rounded-full border border-border bg-surface p-2 text-sm text-surface-foreground transition-transform hover:scale-[1.015] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring" style={{ animationDelay: "150ms" }} rel="noreferrer">
              <span className="mr-4 grid size-8 shrink-0 place-items-center rounded-full bg-foreground text-background"><Instagram className="size-[1.125rem]" aria-hidden="true" /></span>
              <span>Instagram</span>
              <ChevronRight className="ml-auto mr-3 size-[1.125rem]" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function VerifiedBadge() {
  return (
    <svg className="size-6 text-verified" viewBox="0 0 24 24" aria-label="Perfil verificado">
      <path fill="currentColor" d="m12 1.8 2.35 1.76 2.9-.12.78 2.8 2.42 1.62-.98 2.74.98 2.74-2.42 1.62-.78 2.8-2.9-.12L12 19.4l-2.35-1.76-2.9.12-.78-2.8-2.42-1.62.98-2.74-.98-2.74 2.42-1.62.78-2.8 2.9.12L12 1.8Z" />
      <path fill="var(--color-surface)" d="m10.5 15.4-3.1-3.1 1.25-1.25 1.85 1.85 4.85-4.85 1.25 1.25-6.1 6.1Z" />
    </svg>
  );
}

function TelegramMark() {
  return (
    <svg className="size-8" viewBox="0 0 32 32" aria-label="Telegram">
      <circle cx="16" cy="16" r="16" fill="currentColor" />
      <path fill="var(--color-surface)" d="M23.76 9.36 6.85 15.88c-1.15.46-1.14 1.1-.21 1.38l4.34 1.35 1.66 5.08c.2.56.1.79.71.79.47 0 .68-.22.94-.47l2.08-2.02 4.34 3.2c.8.44 1.37.21 1.57-.74l2.84-13.4c.29-1.17-.45-1.7-1.36-1.29Zm-12.1 8.94 9.78-6.17c.49-.3.94-.14.57.19l-8.07 7.28-.31 3.29-1.97-4.59Z" />
    </svg>
  );
}
