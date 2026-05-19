import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Material Resurrection — The Philosophy of Fiera del Mastro | Calabria Radical Craft",
  description: "From Calabria's geographic silence, Fiera del Mastro resurrects archaic matter into radical luxury. Discover the philosophy behind Material Resurrection and the Mastro's irreplaceable gesture."
};

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
