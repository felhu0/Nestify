import { SquarePen } from "lucide-react";
import Link from "next/link";

const ReservationDetailsPage = () => {
  return (
    <div className="flex justify-center mt-16">
      <div className="flex flex-col gap-14 w-fit">
        <h1 className="text-title-sm-desktop">Your trip</h1>
        <div className="flex gap-10 justify-center">
          <img
            src="/ian-keefe.jpg"
            alt="accommodation"
            className="w-96 h-64 object-cover"
          />
          <span className="flex flex-col justify-between">
            <p className="text-body-bold-desktop">Luxurious cabin on lake</p>
            <span className="flex flex-col">
              <p className="text-body-desktop">Price per night: 2 045 SEK</p>
              <p className="text-body-desktop">Selected dates: 21/12 - 22/12</p>
            </span>

            <p className="text-body-desktop pt-16">Total: 2 045 SEK</p>
          </span>
          <div className="ml-10">
            <button className="flex gap-2 text-link items-center btn-icon-secondary">
              <SquarePen className="w-4" />
              Edit
            </button>
          </div>
        </div>
        <Link href="/payment">
          <button className="btn-primary w-full">Request to book</button>
        </Link>
      </div>
    </div>
  );
};
export default ReservationDetailsPage;
