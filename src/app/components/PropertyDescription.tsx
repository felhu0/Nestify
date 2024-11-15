"use client";

import { Accessibility, House, PawPrint, TreePine, Waves } from "lucide-react";
import ReservationBox from "./ReservationBox";
import { useEffect, useState } from "react";

const PropertyDescription = ({
  name,
  host,
  description,
  amenities,
  pricePerNight,
  homeId,
  hostImageUrl,
  location,
}: {
  name: string;
  host: string;
  description: string;
  amenities: string[];
  pricePerNight: number;
  homeId: string;
  hostImageUrl: string;
  location: string;
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col md:flex-row flex-wrap px-4 md:px-40 pt-6 md:pt-12 items-center md:justify-between gap-2 md:gap-6 pb-4">
      <div className="flex flex-col w-full md:flex-1 max-w-[420px] min-w-[280px] px-4">
        <h1 className="text-title-sm-bold-mobile sm:text-title-mobile md:text-subheading">
          {name}, {location}
        </h1>
        <div className="flex justify-between items-center py-4 w-full">
          <div className="flex gap-1 md:gap-2 py-4">
            <button className="btn-user-primary">
              <img
                src={hostImageUrl}
                alt={`${host}'s profile`}
                className="w-6 h-6 rounded-full"
              />
            </button>
            <p className="flex items-center text-body-bold-mobile md:text-body-desktop">
              Hosted by
              <span className="text-body-bold-mobile md:text-body-bold-desktop ml-1">
                {host}
              </span>
            </p>
          </div>
          <div>
            <p className="block md:hidden text-right text-body-mobile">
              Price{" "}
              <span className="text-body-bold-mobile">{pricePerNight}SEK </span>
              /night
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1 md:gap-5 w-full md:p-6 rounded-md mt-0 md:my-2 bg-primary [@media(min-width:768px)]:bg-secondary">
          <p className="text-link md:text-body-desktop">
            This accommodation offers
          </p>
          {amenities.includes("Close to nature") && (
            <span className="flex items-center gap-3">
              <button className={isMobile ? "" : "btn-icon-transparent"}>
                <TreePine className="w-5 md:w-6" />
              </button>
              <p className="text-link md:text-body-desktop">Close to nature</p>
            </span>
          )}
          {amenities.includes("House") && (
            <span className="flex items-center gap-3">
              <button className={isMobile ? "" : "btn-icon-transparent"}>
                <House className="w-5 md:w-6" />
              </button>
              <p className="text-link md:text-body-desktop">House</p>
            </span>
          )}
          {amenities.includes("Near water") && (
            <span className="flex items-center gap-3">
              <button className={isMobile ? "" : "btn-icon-transparent"}>
                <Waves className="w-5 md:w-6" />
              </button>
              <p className="text-link md:text-body-desktop">Near water</p>
            </span>
          )}
          {amenities.includes("Pet friendly") && (
            <span className="flex items-center gap-3">
              <button className={isMobile ? "" : "btn-icon-transparent"}>
                <PawPrint className="w-5 md:w-6" />
              </button>
              <p className="text-link md:text-body-desktop">Pet friendly</p>
            </span>
          )}
          {amenities.includes("Accessible") && (
            <span className="flex items-center gap-3">
              <button className={isMobile ? "" : "btn-icon-transparent"}>
                <Accessibility className="w-5 md:w-6" />
              </button>
              <p className="text-link md:text-body-desktop">Accessible</p>
            </span>
          )}
        </div>
        <h2 className="text-title-sm-bold-mobile md:text-title-sm-desktop mt-5 md:mt-8 mb-3 md:mb-8">
          About this space
        </h2>
        <p className="mb-3 text-body-mobile md:text-body-desktop">
          {description}
        </p>
      </div>
      <div className="flex flex-col w-full md:flex-1 max-w-[400px] min-w-[280px]">
        <ReservationBox pricePerNight={pricePerNight} homeId={homeId} />
      </div>
    </div>
  );
};
export default PropertyDescription;
