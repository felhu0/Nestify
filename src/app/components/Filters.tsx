import { CircleX, TreePine, Waves } from "lucide-react";
import Link from "next/link";

const Filters = () => {
  return (
    <div className="flex flex-col mt-32 w-[400px] h-fit border-[3px] rounded-md cart-outline py-10 px-10 gap-6">
      <div className="flex flex-row gap-9">
        <button className="btn-x-primary h-9">
          <CircleX className="w-5" />
        </button>
        <p className="text-title-sm-desktop pt-4">Filters</p>
      </div>

      <div className="flex-row gap-6 pb-7">
        <p className="pt-6 text-caption-bold-desktop">Type of space</p>
        <span className="flex gap-3">
          <button className="flex gap-1 text-link items-center btn-icon-secondary">
            <TreePine className="w-5" /> Clese to nature
          </button>
          <button className="flex gap-1 text-link items-center btn-icon-secondary">
            <Waves className="w-5" /> Near water
          </button>
        </span>

        <p className="pt-6 text-caption-bold-desktop">Amentities</p>
        <span className="flex gap-3">
          <button className="flex gap-2 text-link items-center border-2 rounded-full px-2 py-1">
            <TreePine className="w-5" />
            Close to nature
          </button>
          <button className="flex gap-2 text-link items-center border-2 rounded-full px-2 py-1">
            <Waves className="w-5" />
            Near water
          </button>
        </span>

        <p className="pt-6 text-caption-bold-desktop">Property type</p>
        <span className="flex gap-3">
          <button className="flex gap-1 text-link items-center btn-icon-secondary">
            <TreePine className="w-5" /> Clese to nature
          </button>
          <button className="flex gap-1 text-link items-center btn-icon-secondary">
            <Waves className="w-5" /> Near water
          </button>
        </span>
      </div>
      <div className="flex flex-row w-full justify-between">
        <button className="btn-outline rounded-none w-1/3">Reset</button>
        <Link href="/reservation-details/reservationId">
          {" "}
          <button className="btn-primary w-full">Show 253 places</button>
        </Link>
      </div>
    </div>
  );
};
export default Filters;
