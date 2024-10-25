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

const FeaturedHomes = ({ homes }: { homes: HomeType[] }) => {
  return (
    <div className="flex flex-col justify-center mx-4 sm:mx-10 md:mx-20 p-6 md:p-12">
      <div className="flex flex-col m-4 text-center md:text-left">
        <h1 className="text-subheading text-2xl md:text-4xl">Featured</h1>
        <p className="text-body-desktop text-base md:text-lg">
          Take a look at our most popular accommodations!
        </p>
      </div>

      {/* Grid layout for cards */}
      <div className="grid gap-6 md:gap-10 mt-6 md:mt-10 grid-cols-2 lg:grid-cols-3">
        {homes.map((home) => (
          <Link
            key={home.id}
            href={`/home-details/${home.id}`}
            className="flex flex-col border rounded-lg"
          >
            <div className="relative w-full" style={{ paddingTop: "75%" }}>
              <img
                src={home.imageUrl[0]}
                alt={home.name}
                className="absolute top-0 left-0 h-full w-full rounded-t-lg object-cover"
              />
            </div>
            <p className="text-caption-desktop px-4 md:px-6 py-2 pt-4 text-sm md:text-base">
              {home.name}
            </p>
            <span className="flex gap-2 px-4 md:px-6 py-2 pb-4">
              {home.accessible && <Accessibility />}
              {home.spacious && <House />}
              {home.petFriendly && <PawPrint />}
              {home.closeToNature && <TreePine />}
              {home.nearWater && <Waves />}
              {home.apartment && <Building />}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default FeaturedHomes;
