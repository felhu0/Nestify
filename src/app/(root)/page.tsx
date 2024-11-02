import HeroSection from "../components/HeroSection";
import FilterBar from "../components/FilterBar";
import { fetchHomes } from "@/lib/homes.db";

export default async function LandingPage() {
  const initialHome: HomeType[] = await fetchHomes();
  return (
    <div>
      <HeroSection />
      <FilterBar initialHome={initialHome} />
    </div>
  );
}
