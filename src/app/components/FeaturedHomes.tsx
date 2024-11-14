"use client";

import {
  Accessibility,
  Building,
  House,
  PawPrint,
  TreePine,
  Waves,
} from "lucide-react";
import Link from "next/link";
import Loading from "./Loading";
import { HomeType } from "../types/home";

const FeaturedHomes = ({ homes = [] }: { homes?: HomeType[] }) => {
  if (!homes || homes.length === 0) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col justify-center mx-4 sm:mx-10 md:mx-20 p-2 md:p-12">
      <div className="flex flex-col gap-2 pt-1 md:pt-2">
        <h1 className="text-body-bold-mobile sm:text-subheading">Featured</h1>
        <p className="text-body-desktop text-base md:text-lg hidden sm:block">
          Take a look at our most popular accommodations!
        </p>
      </div>

      {/* Grid layout for cards */}
      <div className="grid gap-2 sm:gap-6 custom-md:gap-10 mt-3 md:mt-10 grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
        {homes.map((home) => (
          <Link
            key={home.id}
            href={`/home-details/${home.id}`}
            className="flex flex-col border rounded-lg"
          >
            <div className="relative w-full aspect-square">
              <img
                src={home.imageUrl[0]}
                alt={home.name}
                className="absolute top-0 left-0 h-full w-full rounded-t-lg object-cover"
              />
            </div>
            <div className="flex px-2 md:px-6 py-6 pt-4 ">
              <div className="flex flex-col items-start sm:gap-2 gap-1">
                <p className="text-caption-mobile sm:text-caption-desktop ">
                  {home.name}, {home.location}
                </p>
                <span className="flex items-center gap-1">
                  {home.accessible && (
                    <Accessibility className="h-3 w-3 custom-md:h-4 custom-md:w-4 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5" />
                  )}
                  {home.spacious && (
                    <House className="h-3 w-3 custom-md:h-4 custom-md:w-4 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5" />
                  )}
                  {home.petFriendly && (
                    <PawPrint className="h-3 w-3 custom-md:h-4 custom-md:w-4 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5" />
                  )}
                  {home.closeToNature && (
                    <TreePine className="h-3 w-3 custom-md:h-4 custom-md:w-4 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5" />
                  )}
                  {home.nearWater && (
                    <Waves className="h-3 w-3 custom-md:h-4 custom-md:w-4 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5" />
                  )}
                  {home.apartment && (
                    <Building className="h-3 w-3 custom-md:h-4 custom-md:w-4 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5" />
                  )}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedHomes;
