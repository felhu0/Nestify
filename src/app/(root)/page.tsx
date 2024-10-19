import { CircleUserRound, Search, TreePine } from "lucide-react";
import FeaturedHomes from "../components/FeaturedHomes";
import FilterBar from "../components/FilterBar";
import HeroSection from "../components/HeroSection";

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <FilterBar />
      <FeaturedHomes />

      <div>
        <div className="flex gap-2 flex-col">
          <button className="btn-primary">Primary</button>
          <button className="btn-icon-primary">Primary icon</button>
          <button className="btn-search-primary">
            <Search className="w-5" />
          </button>
          <button className="btn-user-primary">
            <CircleUserRound className="w-6" />
          </button>
          <button className="btn-icon-transparent">
            <TreePine className="w-5" />
          </button>
          <button className="btn-primary-outline">Primary outline</button>
          <button className="btn-secondary">Secondary</button>
          <button className="btn-warning">Warning</button>
          <button className="btn-disabled" disabled>
            Disabled
          </button>
          <div className="p-6">
            <h1 className="font-lexend text-heading">Heading</h1>
            <h2 className="font-lexend text-subheading">Subheading</h2>
            <a href="#" className="font-grotesk text-link">
              Link
            </a>

            <p className="font-grotesk text-body-mobile">Body Mobile</p>
            <p className="font-grotesk text-body-bold-mobile">
              Body Bold Mobile
            </p>
            <p className="font-grotesk text-caption-mobile">Caption Mobile</p>

            <h2 className="font-grotesk text-title-mobile">Title Mobile</h2>
            <p className="font-grotesk text-body-desktop">Body Desktop</p>
            <p className="font-grotesk text-body-bold-desktop">
              Body Bold Desktop
            </p>
            <p className="font-grotesk text-caption-desktop">Caption Desktop</p>
            <p className="font-grotesk text-caption-bold-desktop">
              Caption Desktop
            </p>
            <h2 className="font-grotesk text-title-desktop">Title Desktop</h2>
            <h2 className="font-grotesk text-title-sm-desktop">
              Title Sm Desktop
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
