"use client";

import { CircleUserRound, Search, TreePine } from "lucide-react";
import HeroSection from "../components/HeroSection";
import FilterBar from "../components/FilterBar";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase.config";
import FeaturedHomes from "../components/FeaturedHomes";

export default function LandingPage() {
  const [homes, setHomes] = useState<HomeType[]>([]);
  const [filteredHomes, setFilteredHomes] = useState<HomeType[]>([]);
  const [appliedFilters, setAppliedFilters] = useState<string[]>([]);

  useEffect(() => {
    const fetchHomes = async () => {
      const homesCollection = collection(db, "filters");
      const homesSnapshot = await getDocs(homesCollection);
      const homesList = homesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as HomeType[];
      setHomes(homesList);
      setFilteredHomes(homesList);
    };

    fetchHomes();
  }, []);

  // Funktion för att hantera tillämpade filter
  const applyFilters = (filters: string[]) => {
    setAppliedFilters(filters);
    if (filters.length === 0) {
      setFilteredHomes(homes);
    } else {
      const filtered = homes.filter((home) =>
        filters.every((filter) => {
          switch (filter) {
            case "Accessible":
              return home.accessible;
            case "Spacious":
              return home.spacious;
            case "Apartment":
              return home.apartment;
            case "Pet friendly":
              return home.petFriendly;
            case "Close to nature":
              return home.closeToNature;
            case "Near water":
              return home.nearWater;
            default:
              return true;
          }
        })
      );
      setFilteredHomes(filtered);
    }
  };
  return (
    <div>
      <HeroSection />
      <FilterBar
        applyFilters={applyFilters}
        filteredHomesCount={filteredHomes.length}
      />
      <FeaturedHomes homes={filteredHomes} />

      {/* <div>
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
            <p className="font-grotesk text-caption-sm-mobile">
              Caption Mobile
            </p>

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
      </div> */}
    </div>
  );
}
