"use client";

import {
  Accessibility,
  Building,
  House,
  PawPrint,
  SlidersHorizontal,
  TreePine,
  Waves,
} from "lucide-react";
import { useState } from "react";
import Filters from "./Filters";
import FeaturedHomes from "./FeaturedHomes";

const FilterBar = ({ initialHome = [] }: { initialHome: HomeType[] }) => {
  const [homes, setHomes] = useState<HomeType[]>(initialHome);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filteredHomes, setFilteredHomes] = useState<HomeType[]>(initialHome);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const closeFilters = () => {
    setShowFilters(false);
  };

  const handleFilterClick = (filter: string) => {
    const newFilter = selectedFilter === filter ? null : filter;
    setSelectedFilter(newFilter);
    applyFilters(newFilter ? [newFilter] : []);
  };

  // Filtreringsfunktion baserad på vald filter
  const applyFilters = (filters: string[]) => {
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

  const getButtonClass = (filter: string) => {
    return selectedFilter === filter
      ? "btn-icon-secondary"
      : "btn-icon-transparent md:btn-primary-outline";
  };

  return (
    <div className="relative">
      <div className="flex justify-center border-b-2 md:border-t-2 md:border-b-0 pt-2">
        <div className="flex flex-wrap justify-center gap-4 md:gap-4 lg:gap-12 py-4">
          <button
            className={`flex gap-2 text-link items-center ${getButtonClass(
              "Accessible"
            )}`}
            onClick={() => handleFilterClick("Accessible")}
          >
            <Accessibility />
            <span className="hidden md:block">Accessible</span>
          </button>
          <button
            className={`flex gap-2 text-link items-center ${getButtonClass(
              "Spacious"
            )}`}
            onClick={() => handleFilterClick("Spacious")}
          >
            <House className="md:w-5 w-6" />
            <span className="hidden md:block">Spacious</span>
          </button>
          <button
            className={`flex gap-2 text-link items-center ${getButtonClass(
              "Apartment"
            )}`}
            onClick={() => handleFilterClick("Apartment")}
          >
            <Building className="md:w-5 w-6" />
            <span className="hidden md:block">Apartment</span>
          </button>
          <button
            className={`flex gap-2 text-link items-center ${getButtonClass(
              "Pet friendly"
            )}`}
            onClick={() => handleFilterClick("Pet friendly")}
          >
            <PawPrint className="md:w-5 w-6" />
            <span className="hidden md:block">Pet friendly</span>
          </button>
          <button
            className={`flex gap-2 text-link items-center ${getButtonClass(
              "Close to nature"
            )}`}
            onClick={() => handleFilterClick("Close to nature")}
          >
            <TreePine className="md:w-5 w-6" />
            <span className="hidden md:block">Close to nature</span>
          </button>
          <button
            className={`flex gap-2 text-link items-center ${getButtonClass(
              "Near water"
            )}`}
            onClick={() => handleFilterClick("Near water")}
          >
            <Waves className="md:w-5 w-6" />
            <span className="hidden md:block">Near water</span>
          </button>
          <button
            className="flex gap-2 text-link items-center btn-icon-primary h-10"
            onClick={toggleFilters}
          >
            <SlidersHorizontal className="h-5" />
            <span className="hidden md:block">All filters</span>
          </button>
        </div>
      </div>

      {/* Filters popup */}
      {showFilters && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
          <div className="w-fit bg-white rounded-3xl">
            <Filters
              closeFilters={closeFilters}
              applyFilters={applyFilters}
              filteredHomesCount={filteredHomes.length}
            />
          </div>
        </div>
      )}
      <FeaturedHomes homes={filteredHomes} />
    </div>
  );
};

export default FilterBar;
