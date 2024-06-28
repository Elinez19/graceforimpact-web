import { Metadata } from "next";
import HomePage from "./home/page";
import ImpactStat from "@/components/Impact-Stat";
import Features from "@/components/Features/Features";
import CTA from "@/components/CTA";
import Companies from "@/components/Companies/Companies";
import Network from "@/components/Network";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import Blog from "@/components/Blog";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";

export const metadata: Metadata = {
  title: "GraceForImpact-Non-profit Health care organization",
  description: `Grace For Impact (GFI is a non-profit health care organization with their headquarter office in Dallas, Texas, USA.`,
  // other metadata
};
export default function Home() {
  return (
    <main>
      <HomePage />
      <Companies />
      <ImpactStat />
      {/* <Stats /> */}
      <CTA />
      <WhoWeAre />
      <Gallery />
      <Features />
      <Network />
    </main>
  );
}
