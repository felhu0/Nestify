import Link from "next/link";

const ReservationBox = () => {
  return (
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
      <Link href="/reservation-details/reservationId">
        {" "}
        <button className="btn-primary w-full">Reserve</button>
      </Link>
    </div>
  );
};
export default ReservationBox;
