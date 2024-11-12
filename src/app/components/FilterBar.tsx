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
import { HomeType } from "../types/home";

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

  const updateFilters = (filters: string[]) => {
    applyFilters(filters);
  };

  const getButtonClass = (filter: string) => {
    return selectedFilter === filter
      ? "btn-icon-secondary"
      : "btn-icon-transparent md:btn-primary-outline";
  };

  return (
    <div className="relative">
      <div className="flex justify-center border-b-2 md:border-t-2 md:border-b-0 pt-2">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 py-4">
          <button
            className={`flex gap-2 text-link items-center  ${getButtonClass(
              "Accessible"
            )} w-6 h-8 rounded-full`}
            onClick={() => handleFilterClick("Accessible")}
          >
            <Accessibility className="w-4 md:w-5" />
            <span className="hidden md:block text-caption-bold-mobile custom-md:text-link">
              Accessible
            </span>
          </button>
          <button
            className={`flex gap-2 text-link items-center ${getButtonClass(
              "Spacious"
            )} w-6 h-8 rounded-full`}
            onClick={() => handleFilterClick("Spacious")}
          >
            <House className="w-4 md:w-5" />
            <span className="hidden md:block text-caption-bold-mobile custom-md:text-link">
              Spacious
            </span>
          </button>
          <button
            className={`flex gap-2 text-link items-center ${getButtonClass(
              "Apartment"
            )} w-6 h-8 rounded-full`}
            onClick={() => handleFilterClick("Apartment")}
          >
            <Building className="w-4 md:w-5" />
            <span className="hidden md:block text-caption-bold-mobile custom-md:text-link">
              Apartment
            </span>
          </button>
          <button
            className={`flex gap-2 text-link items-center ${getButtonClass(
              "Pet friendly"
            )} w-6 h-8 rounded-full`}
            onClick={() => handleFilterClick("Pet friendly")}
          >
            <PawPrint className="w-4 md:w-5" />
            <span className="hidden md:block text-caption-bold-mobile custom-md:text-link">
              Pet friendly
            </span>
          </button>
          <button
            className={`flex gap-2 text-link items-center ${getButtonClass(
              "Close to nature"
            )} w-6 h-8 rounded-full`}
            onClick={() => handleFilterClick("Close to nature")}
          >
            <TreePine className="w-4 md:w-5" />
            <span className="hidden md:block text-caption-bold-mobile custom-md:text-link">
              Close to nature
            </span>
          </button>
          <button
            className={`flex gap-2 text-link items-center ${getButtonClass(
              "Near water"
            )} w-6 h-8 rounded-full`}
            onClick={() => handleFilterClick("Near water")}
          >
            <Waves className="w-4 md:w-5" />
            <span className="hidden md:block text-caption-bold-mobile custom-md:text-link">
              Near water
            </span>
          </button>
          <button
            className="flex gap-2 text-link items-center btn-icon-primary px-3 md:py-1 sm:h-8"
            onClick={toggleFilters}
          >
            <SlidersHorizontal className="w-3 md:w-4 " />
            <span className="hidden md:block text-caption-bold-mobile custom-md:text-link">
              All filters
            </span>
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
              updateFilters={updateFilters}
            />
          </div>
        </div>
      )}
      <FeaturedHomes homes={filteredHomes} />
    </div>
  );
};

export default FilterBar;
