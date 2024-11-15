import Gallery from "@/app/components/Gallery";
import PropertyDescription from "@/app/components/PropertyDescription";
import { HomeType } from "@/app/types/home";
import { fetchHomeId } from "@/lib/homes.db";

//Generates metadata for the home details page based on the homeId.
export async function generateMetadata({
  params,
}: {
  params: { homeId: string };
}) {
  const home = await fetchHomeId(params.homeId);

  if (!home) {
    return {
      title: "Home Not Found - Nestify",
      description:
        "The requested home could not be found. Explore other unique stays on Nestify.",
    };
  }

  return {
    title: `${home.name} - Nestify`,
    description: `${home.description || "Discover unique stays with Nestify."}`,
  };
}

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
          hostImageUrl={home.hostImageUrl}
          description={home.description}
          amenities={home.amenities}
          pricePerNight={home.pricePerNight}
          homeId={home.id}
          location={home.location}
        />
      )}
    </div>
  );
}
