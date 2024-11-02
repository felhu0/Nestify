import Gallery from "@/app/components/Gallery";
import PropertyDescription from "@/app/components/PropertyDescription";

import { fetchHomeId } from "@/lib/homes.db";

export default async function HomeDetailsPage({
  params,
}: {
  params: { homeId: string };
}) {
  const home: HomeType | null = await fetchHomeId(params.homeId);

  return (
    <div>
      <Gallery fetchHome={home} />
      {home && (
        <PropertyDescription
          name={home.name}
          host={home.host}
          description={home.description}
          amenities={home.amenities}
          pricePerNight={home.pricePerNight}
          homeId={home.id}
        />
      )}
    </div>
  );
}
