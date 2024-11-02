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
    <div className="flex flex-col mt-32 w-[400px] h-fit border-[3px] rounded-md cart-outline py-10 px-10 gap-6">
      <p className="text-title-sm-desktop pt-4">
        {pricePerNight} (SEK) / night
      </p>
      <div className="flex w-full justify-between flex-row flex-wrap pb-4 gap-6 text-caption-desktop">
        <span>
          <p>Check in</p>
          <span>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="border-2 rounded-md w-36 h-8 cart-outline"
            />
          </span>
        </span>
        <span>
          <p>Check out</p>
          <span>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="border-2 rounded-md w-36 h-8 cart-outline"
            />
          </span>
        </span>
        <span>
          <p>No.of guests</p>
          <span>
            <input
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="border-2 rounded-md w-36 h-8 cart-outline"
            />
          </span>
        </span>
      </div>
      <p className="pt-6 text-caption-bold-desktop">
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
