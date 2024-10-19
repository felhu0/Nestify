import {
  CircleUserRound,
  House,
  PawPrint,
  TreePine,
  Waves,
} from "lucide-react";

const PropertyDescription = () => {
  return (
    <div className="flex mx-48 px-6 justify-between">
      <div className="flex flex-col w-[520px]">
        <h1 className="text-subheading">Luxurious cabin on lake</h1>
        <span className="flex gap-2 py-4">
          <button className="btn-user-primary">
            <CircleUserRound className="w-6" />
          </button>
          <p className="flex items-center text-body-desktop">
            Hosted by
            <span className="text-body-bold-desktop ml-1">Mark</span>
          </p>
        </span>
        <div className="flex flex-col gap-5 w-full p-6 rounded-md my-6 bg-secondary">
          <p className="text-body-desktop">This accommodation offers</p>
          <span className="flex items-center gap-3">
            <button className="btn-icon-transparent">
              <TreePine className="w-6" />
            </button>
            <p>Close to nature</p>
          </span>
          <span className="flex items-center gap-3">
            <button className="btn-icon-transparent">
              <House className="w-6" />
            </button>
            <p>House</p>
          </span>
          <span className="flex items-center gap-3">
            <button className="btn-icon-transparent">
              <Waves className="w-6" />
            </button>
            <p>Near water</p>
          </span>
          <span className="flex items-center gap-3">
            <button className="btn-icon-transparent">
              <PawPrint className="w-6" />
            </button>
            <p>Pet friendly</p>
          </span>
        </div>
        <h2 className="text-title-sm-desktop mb-6">About this space</h2>
        <p className="mb-3">
          Nestled deep in the heart of the forest, this charming cabin offers a
          peaceful retreat from the hustle and bustle of everyday life.
          Surrounded by towering trees and the soothing sounds of nature, it's
          the perfect getaway for those seeking serenity and a connection with
          the great outdoors.
          <br />
          <br />
          With modern amenities like a fully-equipped kitchen, comfortable
          sleeping arrangements, and high-speed internet, this cabin balances
          rustic charm with the comforts of home. Nearby hiking trails, a
          tranquil river, and plenty of wildlife make this the ideal spot for
          nature lovers, adventurers, or anyone looking for a peaceful escape.
        </p>
      </div>
      <div className="flex flex-col mt-32 w-[400px] h-fit border-[3px] rounded-md cart-outline py-10 px-10 gap-6">
        <p className="text-title-sm-desktop pt-4">2 045 (SEK) / night</p>
        <div className="flex w-full justify-between flex-row flex-wrap pb-4 gap-6 text-caption-desktop">
          <span>
            <p>Check in</p>
            <span>
              <input
                type="text"
                className="border-2 rounded-md w-36 h-8 cart-outline"
              />
            </span>
          </span>
          <span>
            <p>Check out</p>
            <span>
              <input
                type="text"
                className="border-2 rounded-md w-36 h-8 cart-outline"
              />
            </span>
          </span>
          <span>
            <p>No.of guests</p>
            <span>
              <input
                type="text"
                className="border-2 rounded-md w-36 h-8 cart-outline"
              />
            </span>
          </span>
        </div>
        <p className="pt-6 text-caption-bold-desktop">Total amount (SEK)</p>
        <button className="btn-primary w-full">Reserve</button>
      </div>
    </div>
  );
};
export default PropertyDescription;
