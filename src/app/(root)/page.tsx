import HeroSection from "../components/HeroSection";
import FilterBar from "../components/FilterBar";
import { fetchHomes } from "@/lib/homes.db";
import { HomeType } from "../types/home";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default async function LandingPage() {
  const initialHome: HomeType[] = await fetchHomes();
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FilterBar initialHome={initialHome} />
      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  );
}
