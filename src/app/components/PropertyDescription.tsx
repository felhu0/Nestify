"use client";

import {
  Accessibility,
  CircleUserRound,
  House,
  PawPrint,
  TreePine,
  Waves,
} from "lucide-react";
import ReservationBox from "./ReservationBox";

const PropertyDescription = ({
  name,
  host,
  description,
  amenities,
  pricePerNight,
  homeId,
}: {
  name: string;
  host: string;
  description: string;
  amenities: string[];
  pricePerNight: number;
  homeId: string;
}) => {
  return (
    <div className="flex mx-48 px-6 justify-between">
      <div className="flex flex-col w-[520px]">
        <h1 className="text-subheading">{name}</h1>
        <span className="flex gap-2 py-4">
          <button className="btn-user-primary">
            <CircleUserRound className="w-6" />
          </button>
          <p className="flex items-center text-body-desktop">
            Hosted by
            <span className="text-body-bold-desktop ml-1">{host}</span>
          </p>
        </span>
        <div className="flex flex-col gap-5 w-full p-6 rounded-md my-6 bg-secondary">
          <p className="text-body-desktop">This accommodation offers</p>
          {amenities.includes("Close to nature") && (
            <span className="flex items-center gap-3">
              <button className="btn-icon-transparent">
                <TreePine className="w-6" />
              </button>
              <p>Close to nature</p>
            </span>
          )}
          {amenities.includes("House") && (
            <span className="flex items-center gap-3">
              <button className="btn-icon-transparent">
                <House className="w-6" />
              </button>
              <p>House</p>
            </span>
          )}
          {amenities.includes("Near water") && (
            <span className="flex items-center gap-3">
              <button className="btn-icon-transparent">
                <Waves className="w-6" />
              </button>
              <p>Near water</p>
            </span>
          )}
          {amenities.includes("Pet friendly") && (
            <span className="flex items-center gap-3">
              <button className="btn-icon-transparent">
                <PawPrint className="w-6" />
              </button>
              <p>Pet friendly</p>
            </span>
          )}
          {amenities.includes("Accessible") && (
            <span className="flex items-center gap-3">
              <button className="btn-icon-transparent">
                <Accessibility className="w-6" />
              </button>
              <p>Accessible</p>
            </span>
          )}
        </div>
        <h2 className="text-title-sm-desktop mb-6">About this space</h2>
        <p className="mb-3">{description}</p>
      </div>
      <ReservationBox pricePerNight={pricePerNight} homeId={homeId} />
    </div>
  );
};
export default PropertyDescription;
