"use client";

import Link from "next/link";
import { useState } from "react";

const ReservationBox = ({
  pricePerNight,
  homeId,
}: {
  pricePerNight: number;
  homeId: string;
}) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const calculateNights = () => {
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    const diffTime = Math.abs(outDate.getTime() - inDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const calculateTotalPrice = () => {
    const nights = calculateNights();
    return nights * guests * pricePerNight;
  };

  const totalAmount = calculateTotalPrice();

  const isReserveDisabled = !checkIn || !checkOut || guests < 1;

  return (
    <div className="flex flex-col w-auto h-fit md:border-[3px] rounded-md md:cart-outline p-4 md:p-10 gap-6 bg-secondary md:bg-primary">
      <p className="text-title-sm-desktop hidden md:block">
        {pricePerNight} (SEK) / night
      </p>
      <div className="flex w-full justify-between flex-row md:flex-wrap pb-4 gap-2 md:gap-6 text-body-bold-mobile md:text-caption-desktop">
        <span>
          <p className="pb-1">Check in</p>
          <span>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="border-2 rounded-md w-24 md:w-36 h-8 cart-outline "
            />
          </span>
        </span>
        <span>
          <p className="pb-1">Check out</p>
          <span>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="border-2 rounded-md w-24 md:w-36 h-8 cart-outline"
            />
          </span>
        </span>
        <span>
          <p className="hidden md:block pb-1">No.of guests</p>
          <p className="block md:hidden pb-1">Guests</p>
          <span>
            <input
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="border-2 rounded-md w-10 md:w-36 h-8 cart-outline"
            />
          </span>
        </span>
      </div>
      <p className="pt-6 text-caption-bold-desktop hidden md:block">
        Total amount {isReserveDisabled ? "0" : totalAmount} (SEK)
      </p>
      {isReserveDisabled ? (
        <button className="btn-disabled w-full" disabled>
          Reserve
        </button>
      ) : (
        <Link
          href={{
            pathname: `/reservation-details/${homeId}`,
            query: { checkIn, checkOut, guests },
          }}
        >
          <button className="btn-primary w-full">Reserve</button>
        </Link>
      )}
    </div>
  );
};
export default ReservationBox;
