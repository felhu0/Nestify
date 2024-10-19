import {
  Accessibility,
  Building,
  House,
  PawPrint,
  SlidersHorizontal,
  TreePine,
  Waves,
} from "lucide-react";

const FilterBar = () => {
  return (
    <div className="flex justify-center border-t-2 pt-2">
      <div className="flex gap-6 py-4">
        <button className="flex gap-2 text-link items-center btn-primary-outline">
          <Accessibility />
          Accessible
        </button>
        <button className="flex gap-2 text-link items-center btn-primary-outline">
          <House className="w-5" />
          Spacious
        </button>
        <button className="flex gap-2 text-link items-center btn-primary-outline">
          <Building className="w-5" />
          Apartment
        </button>
        <button className="flex gap-2 text-link items-center btn-primary-outline">
          <PawPrint className="w-5" />
          Pet friendly
        </button>
        <button className="flex gap-2 text-link items-center btn-primary-outline">
          <TreePine className="w-5" />
          Close to nature
        </button>
        <button className="flex gap-2 text-link items-center btn-primary-outline">
          <Waves className="w-5" />
          Near water
        </button>
        <button className="flex gap-2 text-link items-center btn-icon-primary">
          <SlidersHorizontal className="w-5" />
          All filters
        </button>
      </div>
    </div>
  );
};
export default FilterBar;
