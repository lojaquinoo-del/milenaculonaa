import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight, ImagePlus, Instagram } from "lucide-react";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import profileAsset from "../assets/profile.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kim Culona" },
      { name: "description", content: "Model & Content Creator" },
      { property: "og:title", content: "Kim Culona" },
      { property: "og:description", content: "Model & Content Creator" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [profileUrl, setProfileUrl] = useState(profileAsset.url);
  const [bannerUrl, setBannerUrl] = useState<string>();
  const temporaryUrls = useRef<string[]>([]);

  useEffect(() => {
    return () => temporaryUrls.current.forEach((url) => URL.revokeObjectURL(url));
  }, []);

  const selectImage =
    (setImage: (url: string) => void) => (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;
      const nextUrl = URL.createObjectURL(file);
      temporaryUrls.current.push(nextUrl);
      setImage(nextUrl);
      event.target.value = "";
    };

  return (
    <main className="min-h-screen bg-background text-center">
      <section className="relative mx-auto min-h-[33.125rem] max-w-3xl" aria-label="Perfil de Kim Culona">
        <div className="relative h-40 overflow-hidden bg-banner bg-cover bg-center md:rounded-b-2xl" style={bannerUrl ? { backgroundImage: `url(${bannerUrl})` } : undefined}>
          <label className="absolute right-4 top-4 grid size-9 cursor-pointer place-items-center rounded-full bg-surface/90 text-surface-foreground shadow-sm transition-transform hover:scale-105 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-ring" title="Trocar banner">
            <ImagePlus className="size-4" aria-hidden="true" />
            <span className="sr-only">Trocar banner</span>
            <input className="sr-only" type="file" accept="image/*" onChange={selectImage(setBannerUrl)} />
          </label>
        </div>

        <div className="relative -mt-20 px-6 pb-12">
          <div className="animate-profile-reveal relative mx-auto mb-8 size-40">
            <img src={profileUrl} alt="Kim Culona" className="size-40 rounded-full border-4 border-surface bg-surface object-cover shadow-profile" />
            <label className="absolute bottom-1 right-1 grid size-9 cursor-pointer place-items-center rounded-full bg-surface text-surface-foreground shadow-sm transition-transform hover:scale-105 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-ring" title="Trocar foto do perfil">
              <ImagePlus className="size-4" aria-hidden="true" />
              <span className="sr-only">Trocar foto do perfil</span>
              <input className="sr-only" type="file" accept="image/*" onChange={selectImage(setProfileUrl)} />
            </label>
          </div>

          <div className="animate-profile-reveal flex items-center justify-center" style={{ animationDelay: "120ms" }}>
            <h1 className="mr-2 text-2xl font-bold leading-none">Kim Culona</h1>
            <VerifiedBadge />
          </div>
          <p className="animate-profile-reveal mb-8 mt-4 text-[0.9rem] uppercase leading-[1.125rem] opacity-70" style={{ animationDelay: "220ms" }}>
            Model <span className="opacity-50">&amp;</span> Content Creator
          </p>

          <div className="grid gap-4">
            <a href="https://vip.kim-culona.com/go?k=of" className="animate-link-reveal flex h-[3.25rem] items-center rounded-full border-2 border-primary bg-surface p-2 text-sm font-bold text-surface-foreground transition-transform hover:scale-[1.015] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring" rel="noreferrer">
              <span className="mr-4 grid size-8 shrink-0 place-items-center rounded-full text-primary"><OnlyFansMark /></span>
              <span>Exclusive Content</span>
              <ChevronRight className="ml-auto mr-3 size-[1.125rem]" aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/kimculona" className="animate-link-reveal flex h-[3.25rem] items-center rounded-full border border-border bg-surface p-2 text-sm text-surface-foreground transition-transform hover:scale-[1.015] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring" style={{ animationDelay: "150ms" }} rel="noreferrer">
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

function OnlyFansMark() {
  return (
    <svg className="size-8" viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="11" cy="16" r="7.5" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="11" cy="16" r="2.6" fill="currentColor" />
      <path fill="currentColor" d="M17.7 10.3c3.8-.1 7.6-1 10.4-3.2-.7 3.2-2.4 5.6-5.1 7.1 2.1.1 3.8-.2 5.4-.8-1.4 2.4-3.5 4-6.5 4.7-.4 4.2-2.1 6.8-5.3 8.1 1.2-2.6 1.4-5.3.4-8.2l-1.3-3.8 2-3.9Z" />
    </svg>
  );
}
