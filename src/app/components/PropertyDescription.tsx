"use client";

import {
  CircleUserRound,
  House,
  PawPrint,
  TreePine,
  Waves,
} from "lucide-react";
import ReservationBox from "./ReservationBox";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase.config";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const fetchSingleHome = async (homeId: string) => {
  const docRef = doc(db, "filters", homeId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? (docSnap.data() as HomeType) : null;
};

const PropertyDescription = ({
  name,
  host,
  description,
  amenities,
  pricePerNight,
}: {
  name: string;
  host: string;
  description: string;
  amenities: string[];
  pricePerNight: number;
}) => {
  // const { homeId } = useParams();
  // const [home, setHome] = useState<HomeType | null>(null);

  // useEffect(() => {
  //   if (homeId) {
  //     const loadHome = async () => {
  //       const homeData = await fetchSingleHome(homeId as string);
  //       setHome(homeData);
  //     };

  //     loadHome();
  //   }
  // }, [homeId]);

  // if (!home) return <p>Loading...</p>;
  return (
    // <div className="flex mx-48 px-6 justify-between">
    //   <div className="flex flex-col w-[520px]">
    //     <h1 className="text-subheading">Luxurious cabin on lake</h1>
    //     <span className="flex gap-2 py-4">
    //       <button className="btn-user-primary">
    //         <CircleUserRound className="w-6" />
    //       </button>
    //       <p className="flex items-center text-body-desktop">
    //         Hosted by
    //         <span className="text-body-bold-desktop ml-1">Mark</span>
    //       </p>
    //     </span>
    //     <div className="flex flex-col gap-5 w-full p-6 rounded-md my-6 bg-secondary">
    //       <p className="text-body-desktop">This accommodation offers</p>
    //       <span className="flex items-center gap-3">
    //         <button className="btn-icon-transparent">
    //           <TreePine className="w-6" />
    //         </button>
    //         <p>Close to nature</p>
    //       </span>
    //       <span className="flex items-center gap-3">
    //         <button className="btn-icon-transparent">
    //           <House className="w-6" />
    //         </button>
    //         <p>House</p>
    //       </span>
    //       <span className="flex items-center gap-3">
    //         <button className="btn-icon-transparent">
    //           <Waves className="w-6" />
    //         </button>
    //         <p>Near water</p>
    //       </span>
    //       <span className="flex items-center gap-3">
    //         <button className="btn-icon-transparent">
    //           <PawPrint className="w-6" />
    //         </button>
    //         <p>Pet friendly</p>
    //       </span>
    //     </div>
    //     <h2 className="text-title-sm-desktop mb-6">About this space</h2>
    //     <p className="mb-3">
    //       Nestled deep in the heart of the forest, this charming cabin offers a
    //       peaceful retreat from the hustle and bustle of everyday life.
    //       Surrounded by towering trees and the soothing sounds of nature, it's
    //       the perfect getaway for those seeking serenity and a connection with
    //       the great outdoors.
    //       <br />
    //       <br />
    //       With modern amenities like a fully-equipped kitchen, comfortable
    //       sleeping arrangements, and high-speed internet, this cabin balances
    //       rustic charm with the comforts of home. Nearby hiking trails, a
    //       tranquil river, and plenty of wildlife make this the ideal spot for
    //       nature lovers, adventurers, or anyone looking for a peaceful escape.
    //     </p>
    //   </div>
    //   <ReservationBox />
    // </div>
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
        </div>
        <h2 className="text-title-sm-desktop mb-6">About this space</h2>
        <p className="mb-3">{description}</p>
      </div>
      <ReservationBox pricePerNight={pricePerNight} />
    </div>
  );
};
export default PropertyDescription;
