import {
  Accessibility,
  Building,
  CircleX,
  House,
  PawPrint,
  TreePine,
  Waves,
} from "lucide-react";
import { useState } from "react";

const Filters = ({
  closeFilters,
  applyFilters,
  filteredHomesCount,
}: {
  closeFilters: () => void;
  applyFilters: (filters: string[]) => void;
  filteredHomesCount: number;
}) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // Funktion för att hantera val av filter
  const toggleFilter = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  // Kontroll för att ändra stil baserat på om filtret är valt eller inte
  const getButtonStyle = (filter: string) => {
    return selectedFilters.includes(filter)
      ? "btn-icon-secondary"
      : "border-2 rounded-full px-2 py-1";
  };

  // Funktion för att tillämpa filtren när användaren klickar på "Show places"
  const handleApplyFilters = () => {
    applyFilters(selectedFilters);
    closeFilters();
  };

  // Funktion för att återställa alla filter
  const resetFilters = () => {
    setSelectedFilters([]);
  };
  return (
    <div className="flex flex-col w-[400px] h-fit border-[3px] rounded-3xl cart-outline py-10 px-10 gap-6">
      <div className="flex flex-row items-center gap-24">
        <button className="btn-x-primary h-7" onClick={closeFilters}>
          <CircleX className="w-5" />
        </button>
        <p className="text-body-bold-desktop">Filters</p>
      </div>

      <div className="flex-row gap-6 pb-7">
        <p className="pt-6 pb-1 text-caption-bold-desktop">Type of space</p>
        <span className="flex gap-3">
          <button
            className={`flex gap-1 text-link items-center ${getButtonStyle(
              "Close to nature"
            )}`}
            onClick={() => toggleFilter("Close to nature")}
          >
            <TreePine className="w-5" /> Close to nature
          </button>
          <button
            className={`flex gap-1 text-link items-center ${getButtonStyle(
              "Near water"
            )}`}
            onClick={() => toggleFilter("Near water")}
          >
            <Waves className="w-5" /> Near water
          </button>
        </span>

        <p className="pt-6 pb-1 text-caption-bold-desktop">Amenities</p>
        <span className="flex gap-3">
          <button
            className={`flex gap-2 text-link items-center ${getButtonStyle(
              "Pet friendly"
            )}`}
            onClick={() => toggleFilter("Pet friendly")}
          >
            <PawPrint className="w-5" />
            Pet friendly
          </button>
          <button
            className={`flex gap-2 text-link items-center ${getButtonStyle(
              "Accessible"
            )}`}
            onClick={() => toggleFilter("Accessible")}
          >
            <Accessibility className="w-5" />
            Accessible
          </button>
        </span>

        <p className="pt-6 pb-1 text-caption-bold-desktop">Property type</p>
        <span className="flex gap-3">
          <button
            className={`flex gap-1 text-link items-center ${getButtonStyle(
              "Spacious"
            )}`}
            onClick={() => toggleFilter("Spacious")}
          >
            <House className="w-5" /> Spacious
          </button>
          <button
            className={`flex gap-1 text-link items-center ${getButtonStyle(
              "Apartment"
            )}`}
            onClick={() => toggleFilter("Apartment")}
          >
            <Building className="w-5" /> Apartment
          </button>
        </span>
      </div>

      <div className="flex flex-row w-full justify-between gap-2">
        <button
          className="btn-outline rounded-none w-[30%]"
          onClick={resetFilters}
        >
          Reset
        </button>
        <button className="btn-primary w-[70%]" onClick={handleApplyFilters}>
          Show {filteredHomesCount} places
        </button>
      </div>
    </div>
  );
};
export default Filters;
