"use client";

import Gallery from "@/app/components/Gallery";
import PropertyDescription from "@/app/components/PropertyDescription";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { db } from "../../../../../firebase.config";

const HomeDetailsPage = () => {
  const { homeId } = useParams();
  const [home, setHome] = useState<HomeType | null>(null);

  useEffect(() => {
    const fetchHome = async () => {
      if (homeId) {
        const docRef = doc(db, "filters", homeId as string);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setHome(docSnap.data() as HomeType);
        }
      }
    };

    fetchHome();
  }, [homeId]);

  if (!home) return <p>Loading...</p>;

  return (
    <div>
      <Gallery images={home.imageUrl} />
      <PropertyDescription
        name={home.name}
        host={home.host}
        description={home.description}
        amenities={home.amenities}
        pricePerNight={home.pricePerNight}
      />
    </div>
  );
};
export default HomeDetailsPage;
