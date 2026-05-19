import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archives — Material Resurrections & Curated Craft | Fiera del Mastro",
  description: "A strictly limited archive of material resurrections. Obsidian, Corten, Vellum, Plaster — each Opus documented and curated. Collectible craft from Calabria's radical margins."
};

export default function ArchivesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
